import React, { useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  Gamepad2,
  Globe,
  Info,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SEOHead } from '../components/common/SEOHead';

interface FormState {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  category: 'General Inquiry',
  subject: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please provide a brief subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  const formatMessagePayload = () => {
    return [
      `To: Myltrix (${siteConfig.contact.email})`,
      `From: ${formData.name} <${formData.email}>`,
      `Category: ${formData.category}`,
      `Subject: ${formData.subject}`,
      `---`,
      formData.message,
    ].join('\n');
  };

  const handleCopyFormattedMessage = async () => {
    try {
      await navigator.clipboard.writeText(formatMessagePayload());
      setMessageCopied(true);
      setTimeout(() => setMessageCopied(false), 2200);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    if (siteConfig.contact.formEndpointUrl) {
      try {
        await fetch(siteConfig.contact.formEndpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            studio: 'Myltrix',
            ...formData,
          }),
        });
      } catch {
        // Fallback to local confirmation state if endpoint is unreachable
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${encodeURIComponent(
    siteConfig.contact.email
  )}?subject=${encodeURIComponent(
    `[${formData.category}] ${formData.subject || 'Inquiry for Myltrix'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <>
      <SEOHead
        title="Contact — Myltrix | Get in Touch"
        description="Contact Myltrix for game inquiries, press requests, feedback, or platform links on itch.io and GitHub."
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Studio Channels</span>
          <h1 className="page-hero-title" style={{ textTransform: 'none' }}>
            Contact Myltrix
          </h1>
          <p className="page-hero-subtitle">
            Reach out regarding our PC and Android game concepts, technical feedback, or press inquiries.
          </p>

          <div className="catalog-transparency-banner">
            <Info size={16} />
            <p>
              <strong>Configurable Contact System:</strong> All email addresses, social handles,
              and external platform links on this page are centralized in{' '}
              <code>src/config/siteConfig.ts</code> so you can update them with your live studio
              credentials at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block pt-0">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Email, External Platforms (itch.io & GitHub), Socials */}
            <div className="contact-channels-col">
              {/* 1. Email Card */}
              <div className="contact-channel-box">
                <div className="channel-box-header">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="section-eyebrow">Direct Electronic Mail</span>
                    <h2 className="channel-box-title">Studio Email</h2>
                  </div>
                </div>

                <div className="email-display-bar">
                  <code className="email-address-code">{siteConfig.contact.email}</code>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="copy-email-btn"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="email-meta-note">
                  <span>Typical Response Window: {siteConfig.contact.responseWindow}</span>
                  {siteConfig.contact.isEmailPlaceholder && (
                    <span className="configurable-pill">
                      Configurable in src/config/siteConfig.ts
                    </span>
                  )}
                </div>
              </div>

              {/* 2. External Platforms: itch.io & GitHub */}
              <div className="contact-channel-box">
                <span className="section-eyebrow">Official Distribution Platforms</span>
                <h2 className="channel-box-title">itch.io &amp; GitHub</h2>
                <p className="channel-box-desc">
                  Follow Myltrix on our primary publishing and repository platforms for Windows and
                  Android builds:
                </p>

                <div className="platform-cards-duo">
                  <a
                    href={siteConfig.platforms.studioItchIoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-external-card"
                  >
                    <div className="platform-ext-top">
                      <Gamepad2 size={20} />
                      <ExternalLink size={14} />
                    </div>
                    <strong>itch.io</strong>
                    <span>https://itch.io/</span>
                  </a>

                  <a
                    href={siteConfig.platforms.studioGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-external-card"
                  >
                    <div className="platform-ext-top">
                      <Code2 size={20} />
                      <ExternalLink size={14} />
                    </div>
                    <strong>GitHub</strong>
                    <span>https://github.com/</span>
                  </a>
                </div>
              </div>

              {/* 3. Social Networks */}
              <div className="contact-channel-box">
                <span className="section-eyebrow">Community &amp; Social Networks</span>
                <h2 className="channel-box-title">Social Channels</h2>
                <div className="social-channels-list">
                  {siteConfig.socials.map((social) => (
                    <div key={social.id} className="social-channel-item">
                      <div className="social-item-left">
                        <Globe size={17} />
                        <div>
                          <strong>{social.name}</strong>
                          <p>{social.description}</p>
                        </div>
                      </div>
                      <div className="social-item-right">
                        {social.url ? (
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                          >
                            <span>Open</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="configurable-pill">{social.handle}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Feedback Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="form-card-header">
                  <div className="channel-icon-box">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="section-eyebrow">Direct Dispatch</span>
                    <h2 className="channel-box-title">Feedback &amp; Inquiry Form</h2>
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} noValidate className="feedback-form">
                    <div className="form-row-two">
                      <div className="form-group">
                        <label htmlFor="contact-name">Your Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="Alex Mercer"
                          className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="you@example.com"
                          className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row-two">
                      <div className="form-group">
                        <label htmlFor="contact-category">Topic Category</label>
                        <select
                          id="contact-category"
                          value={formData.category}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, category: e.target.value }))
                          }
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Game Concept Feedback">Game Concept Feedback</option>
                          <option value="Bug Report / Technical">Bug Report / Technical</option>
                          <option value="Press & Media">Press &amp; Media</option>
                          <option value="Collaboration">Collaboration</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-subject">Subject *</label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, subject: e.target.value }))
                          }
                          placeholder="Feedback on Nullsector: Eclipse"
                          className={errors.subject ? 'input-error' : ''}
                        />
                        {errors.subject && <span className="field-error">{errors.subject}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        placeholder="Write your message or feedback for Myltrix..."
                        className={errors.message ? 'input-error' : ''}
                      />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    <div className="form-submit-row">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-full"
                        disabled={submitting}
                      >
                        <Send size={16} />
                        <span>{submitting ? 'Preparing Dispatch...' : 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="form-success-panel" role="status">
                    <div className="success-badge-icon">
                      <Check size={24} />
                    </div>
                    <h3 style={{ textTransform: 'none' }}>Message Prepared for Myltrix</h3>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Your message regarding{' '}
                      <em>“{formData.subject}”</em> has been formatted and validated.
                    </p>

                    <pre className="message-preview-box">{formatMessagePayload()}</pre>

                    <div className="success-actions-row">
                      <a href={mailtoHref} className="btn btn-primary">
                        <Mail size={15} />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyFormattedMessage}
                        className="btn btn-secondary"
                      >
                        {messageCopied ? <Check size={15} /> : <Copy size={15} />}
                        <span>{messageCopied ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData(INITIAL_FORM);
                        }}
                        className="btn btn-ghost"
                      >
                        Write Another Message
                      </button>
                    </div>
                  </div>
                )}

                <div className="form-architecture-note">
                  <Info size={14} />
                  <span>
                    <strong>Serverless Form Architecture:</strong> Out of the box, this form
                    validates input client-side and supports direct <code>mailto:</code> dispatch or
                    webhook POST submission. Set <code>contact.formEndpointUrl</code> in{' '}
                    <code>src/config/siteConfig.ts</code> (e.g., Formspree, Web3Forms, or your own
                    API) to enable automated server delivery.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
