'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Skill {
  name: string;
  color: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: string;
  title: string;
  period: string;
  description: string;
  skills: Skill[];
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  isOpen,
  onClose,
  company,
  title,
  period,
  description,
  skills,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header Tag */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gray-300" />
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3] font-heading">
              My Experience
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-2">
            {title}
          </h2>

          {/* Company and Period */}
          <p className="text-lg text-[#1B1B1B] mb-1">{company}</p>
          <p className="text-sm text-[#A3A3A3] mb-6">{period}</p>

          {/* Description */}
          <div className="prose prose-gray max-w-none mb-6">
            {description.split('\n').map((paragraph, idx) => (
              paragraph.trim() && (
                <p key={idx} className="text-[#525252] leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            ))}
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#1B1B1B] mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-transform hover:scale-105"
                    style={{
                      backgroundColor: skill.color,
                      color: skill.color === '#8B5CF6' || skill.color === '#DC2626' ? 'white' : '#1B1B1B',
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};