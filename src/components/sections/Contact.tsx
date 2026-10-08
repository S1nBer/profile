import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { ContactLink } from '../ui/ContactLink';
import { TelegramIcon, GithubIcon, MailIcon, LinkedinIcon } from '../ui/Icons';
import { personal } from '../../data/personal';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Contact() {
  return (
    <Section id="contact" title="Открыт к предложениям">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl"
      >
        <motion.p
          variants={item}
          className="text-text-dim text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
        >
          Если у вас есть интересный проект или предложение — напишите. Отвечаю быстро, обсуждаю с
          удовольствием.
        </motion.p>

        {/* Контакты */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <ContactLink
            href={personal.contacts.telegram.url}
            label={personal.contacts.telegram.label}
            value={personal.contacts.telegram.value}
            icon={<TelegramIcon />}
          />
          <ContactLink
            href={personal.contacts.github.url}
            label={personal.contacts.github.label}
            value={personal.contacts.github.value}
            icon={<GithubIcon />}
          />
          <ContactLink
            href={personal.contacts.email.url}
            label={personal.contacts.email.label}
            value={personal.contacts.email.value}
            icon={<MailIcon />}
            external={false}
          />
          <ContactLink
            href={personal.contacts.linkedin.url}
            label={personal.contacts.linkedin.label}
            value={personal.contacts.linkedin.value}
            icon={<LinkedinIcon />}
          />
        </motion.div>

        {/* CV */}
        <motion.div variants={item}>
          <a
            href={personal.cvUrl}
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-text text-bg font-medium text-base transition-transform hover:scale-105"
          >
            Скачать CV
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
