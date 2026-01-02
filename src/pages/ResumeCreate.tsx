import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/lib/auth-context";
import { templates } from '@/templates';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAxios } from '@/axios';
import { 
  Save, Download, Sparkles, User, Briefcase, GraduationCap, Code,
  Plus, Trash2, ChevronLeft, Eye, Wand2, FileText
} from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
}

type ResumeMode = "manual" | "ai";

export default function CreateResume() {
  const navigate = useNavigate();
  const routerLocation = useLocation();
  const api = useAxios()
  const queryParams = new URLSearchParams(routerLocation)
  const templateId = queryParams.get("template") || "1"
  const Template = templates[templateId];

  console.log("TEMPLATE_ID:::::::::::", templateId)

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [showAiHelp, setShowAiHelp] = useState(false);
  const [resumeMode, setResumeMode] = useState<ResumeMode>("manual");
  const [previewMode, setPreviewMode] = useState<"template" | "pdf">("template");
  const [generatedPdfPath, setGeneratedPdfPath] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const [experiences, setExperiences] = useState<Experience[]>([
    { id: "1", company: "", position: "", startDate: "", endDate: "", description: "" }
  ]);
  const [education, setEducation] = useState<Education[]>([
    { id: "1", school: "", degree: "", field: "", graduationDate: "" }
  ]);
  const [skills, setSkills] = useState("");

  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScale(0.5);
      else if (window.innerWidth < 1024) setScale(0.75);
      else setScale(1);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addExperience = () => setExperiences([...experiences, { id: Date.now().toString(), company: "", position: "", startDate: "", endDate: "", description: "" }]);
  const removeExperience = (id: string) => setExperiences(experiences.filter(exp => exp.id !== id));
  const updateExperience = (id: string, field: keyof Experience, value: string) => setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));

  const addEducation = () => setEducation([...education, { id: Date.now().toString(), school: "", degree: "", field: "", graduationDate: "" }]);
  const removeEducation = (id: string) => setEducation(education.filter(edu => edu.id !== id));
  const updateEducation = (id: string, field: keyof Education, value: string) => setEducation(education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));

  const generateAISummary = async () => {
      const hasExperienceData = experiences.some(
          exp=>exp.position.trim() || exp.description.trim()
          );
      const skillsArray = skills.split(",").map(s => s.trim()).filter(Boolean)

      if(!hasExperienceData && skillsArray.length == 0)
      {
        setShowAiHelp(true)
        return;
      }
      try{
        setShowAiHelp(false)
        setIsGenerating(true)

        const res = await api.post("/resume/generate-summary", {
          experiences: hasExperienceData ? experiences : [],
          skills: skillsArray
        })
        setSummary(res.data.summary);
      }catch(error)
      {
        console.error(error);
      }finally{
        setIsGenerating(false)
      }

  };

  const resumeData = {
    fullname: fullName, email, phone, location, summary, template_id: templateId,
    profession, job_description: jobDescription, linkedin, experiences, education, skills
  };

  const createResume = async () => {
    try {
      setIsGenerating(true);
      const response = await api.post("/resume/generate-resume", resumeData);
      setGeneratedPdfPath(response.data.file);
      console.log("GENERATED PDF PATH::::", generatedPdfPath)
      setPreviewMode("pdf");
    } catch (error) { console.error(error); } 
    finally { setIsGenerating(false); }
  };
  
  const fillTestData = () => {
    setFullName("John Doe");
    setEmail("john.doe@email.com");
    setPhone("+1 555 123 4567");
    setLocation("San Francisco, CA");
    setProfession("Frontend Developer");
    setJobDescription("We are looking for a React developer with strong UI/UX skills.");
    setSummary("Frontend developer with 3+ years of experience building scalable web apps.");
    setLinkedin("https://linkedin.com/in/johndoe");
    setSkills("React, TypeScript, Tailwind, Git, REST APIs");
    setExperiences([{ id: "1", company: "Tech Corp", position: "Frontend Developer", startDate: "2022-01", endDate: "2024-01", description: "Built reusable UI components and improved performance." }]);
    setEducation([{ id: "1", school: "University of Technology", degree: "Bachelor's", field: "Computer Science", graduationDate: "2021-06" }]);
  };

  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ChevronLeft size={24} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Create Resume</h1>
              <p className="text-sm text-muted-foreground">Template #{templateId}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-end">
            <Button className={resumeMode==="manual"?"text-white":"dark:text-white"} variant={resumeMode==="manual"?"default":"outline"} onClick={()=>setResumeMode("manual")}><User size={16}/> Manual</Button>
            <Button className={resumeMode==="ai"?"text-white":"dark:text-white"} variant={resumeMode==="ai"?"default":"outline"} onClick={()=>setResumeMode("ai")}><Sparkles size={16}/> Use AI</Button>
            <Button disabled={!generatedPdfPath} onClick={()=>generatedPdfPath && navigate(`/resume-preview/${encodeURIComponent(generatedPdfPath)}`)} variant="outline" className="gap-2"><Eye size={18}/> Preview</Button>
            <Button variant="outline" className="gap-2"><Save size={18}/> Save Draft</Button>
            <Button className="bg-accent text-white gap-2"><Download size={18}/> Download PDF</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Section Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {sections.map(sec=>{
                const Icon = sec.icon;
                return (
                  <button key={sec.id} onClick={()=>setActiveSection(sec.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-smooth ${
                      activeSection===sec.id ? "bg-accent text-white":"bg-card border border-border dark:border-gray-700 hover:border-accent/50 dark:bg-slate-800"
                    }`}>
                    <Icon size={18}/>{sec.label}
                  </button>
                )
              })}
            </div>

            {/* Sections */}
            {activeSection==="personal" && (
              <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-6 space-y-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><User size={20} className="text-accent"/> Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" value={fullName} onChange={e=>setFullName(e.target.value)} className="h-11"/>
                  <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="h-11"/>
                  <Input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} className="h-11"/>
                  <Input placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} className="h-11"/>
                  <Input placeholder="LinkedIn URL" value={linkedin} onChange={e=>setLinkedin(e.target.value)} className="h-11 md:col-span-2"/>
                  <Input placeholder="Profession" value={profession} onChange={e=>setProfession(e.target.value)} className="h-11"/>
                </div>
                {resumeMode==='ai' && <Textarea placeholder="Job Description" value={jobDescription} onChange={e=>setJobDescription(e.target.value)} rows={4} className="resize-none"/>}
                <div className="space-y-2">
                  <Popover open={showAiHelp} onOpenChange={setShowAiHelp}>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={generateAISummary} disabled={isGenerating} className="text-accent gap-1 hover:text-white"><Wand2 size={16}/> Generate with AI</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 p-4">
                      <h4 className="font-semibold mb-1">AI needs more info</h4>
                      <p className="text-sm text-muted-foreground">Add at least one skill or work experience for AI to generate a summary.</p>
                    </PopoverContent>
                  </Popover>
                  <Textarea placeholder="Professional summary..." value={summary} onChange={e=>setSummary(e.target.value)} rows={4} className="resize-none"/>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection==="experience" && (
              <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><Briefcase size={20} className="text-accent"/> Experience</h2>
                {experiences.map(exp=>(
                  <div key={exp.id} className="space-y-2 border-b border-border pb-2 last:border-b-0">
                    <Input placeholder="Company" value={exp.company} onChange={e=>updateExperience(exp.id,'company',e.target.value)}/>
                    <Input placeholder="Position" value={exp.position} onChange={e=>updateExperience(exp.id,'position',e.target.value)}/>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="month" placeholder="Start Date" value={exp.startDate} onChange={e=>updateExperience(exp.id,'startDate',e.target.value)}/>
                      <Input type="month" placeholder="End Date" value={exp.endDate} onChange={e=>updateExperience(exp.id,'endDate',e.target.value)}/>
                    </div>
                    <Textarea placeholder="Description" value={exp.description} onChange={e=>updateExperience(exp.id,'description',e.target.value)} rows={3}/>
                    <Button variant="destructive" size="sm" className="gap-2" onClick={()=>removeExperience(exp.id)}><Trash2 size={16}/> Remove</Button>
                  </div>
                ))}
                <Button size="sm" className="gap-2" onClick={addExperience}><Plus size={16}/> Add Experience</Button>
              </div>
            )}

            {/* Education Section */}
            {activeSection==="education" && (
              <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><GraduationCap size={20} className="text-accent"/> Education</h2>
                {education.map(edu=>(
                  <div key={edu.id} className="space-y-2 border-b border-border pb-2 last:border-b-0">
                    <Input placeholder="School" value={edu.school} onChange={e=>updateEducation(edu.id,'school',e.target.value)}/>
                    <Input placeholder="Degree" value={edu.degree} onChange={e=>updateEducation(edu.id,'degree',e.target.value)}/>
                    <Input placeholder="Field of Study" value={edu.field} onChange={e=>updateEducation(edu.id,'field',e.target.value)}/>
                    <Input type="month" placeholder="Graduation Date" value={edu.graduationDate} onChange={e=>updateEducation(edu.id,'graduationDate',e.target.value)}/>
                    <Button variant="destructive" size="sm" className="gap-2" onClick={()=>removeEducation(edu.id)}><Trash2 size={16}/> Remove</Button>
                  </div>
                ))}
                <Button size="sm" className="gap-2" onClick={addEducation}><Plus size={16}/> Add Education</Button>
              </div>
            )}

            {/* Skills Section */}
            {activeSection==="skills" && (
              <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><Code size={20} className="text-accent"/> Skills</h2>
                <Textarea placeholder="Enter skills separated by commas" value={skills} onChange={e=>setSkills(e.target.value)} rows={4}/>
              </div>
            )}

            <div className="flex gap-2 mt-4 flex-wrap">
              <Button className="bg-accent text-white gap-2" disabled={isGenerating} onClick={createResume}><FileText size={18}/> Create Resume</Button>
              <Button variant="outline" onClick={fillTestData} className="gap-2">🧪 Fill Test Data</Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="xl:block sticky top-24 overflow-auto max-h-[80vh] w-full">
    <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-4 mb-4">
      <h3 className="font-semibold text-foreground mb-2">Live Preview</h3>
      <p className="text-sm text-muted-foreground">See your resume as you build it</p>
    </div>

    <div className="flex justify-center overflow-auto h-[80%]">
      <div
        className="preview-paper bg-white dark:bg-gray-900 rounded-xl border shadow-lg"
        style={{
          width: "794px",
          height: "100%",
          maxWidth: "100%", // <-- never exceed container width
          zoom: window.innerWidth < 640 ? 0.5 : window.innerWidth < 1024 ? 0.8 : 0.8,
          transformOrigin: "top left",
        }}
      >
        {previewMode === "template" && <Template data={resumeData} />}
        {previewMode === "pdf" && generatedPdfPath && (
          <iframe
            src={`http://127.0.0.1:8000/resume/view-resume/${encodeURIComponent(generatedPdfPath)}`}
            className="w-full h-[75vh] rounded-xl border"
            title="Resume PDF Preview"
          />
        )}
      </div>
    </div>
  </div>
        </div>
      </main>
    </div>
  );
}
