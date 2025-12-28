import { useState, useEffect } from 'react';
import { api } from '@/axios';
import { Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface Template {
  id: number;
  name: string;
  description: string;
  folder_path: string;
  thumbnail_url: string;
}

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await api.get("/template");
      setTemplates(res.data);
    };
    fetchTemplates();
  }, []);

  const handleSelectTemplate = (templateId: number) => {
    navigate(`/resume-create/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16 animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Choose Your Template</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Select a professionally designed template to get started with your resume. All templates are ATS-friendly
            and ready to customize.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => {
            const isHovered = hoveredTemplate === template.id;
            return (
              <div
                key={template.id}
                className="group cursor-pointer animate-scale-in transition-smooth relative"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleSelectTemplate(template.id)}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className="border border-border bg-gray-100 dark:bg-slate-800 rounded-2xl overflow-hidden hover:border-accent/50 transition-smooth hover:shadow-xl flex flex-col h-full relative">
                  {/* Template Preview */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      key={template.id}
                      src={`http://127.0.0.1:8000/static/${template.thumbnail_url}`}
                      alt={template.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-black/25 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Eye size={24} className="text-white" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Check size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{template.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{template.description}</p>

                    <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent text-white transition-transform duration-300 group-hover:scale-105">
                      Use Template
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
