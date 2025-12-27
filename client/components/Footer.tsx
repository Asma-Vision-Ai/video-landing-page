import { Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OG</span>
              </div>
              <h3 className="font-bold text-lg">OpsGlass</h3>
            </div>
            <p className="text-slate-400 text-sm">
              High-quality egocentric video data for training intelligent systems.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Datasets
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Annotations
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Sample Clips
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Research Papers
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Data Ethics
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          {/* Contact and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@opsglass.io"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={18} />
                contact@opsglass.io
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm text-center">
              © 2024 OpsGlass Datasets. All rights reserved. Data for the next generation of AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
