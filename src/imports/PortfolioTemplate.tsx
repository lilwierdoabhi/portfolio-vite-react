import image_45a361d22fd6094e8517b5bbc08018454f1aaca2 from '../assets/45a361d22fd6094e8517b5bbc08018454f1aaca2.png';
import svgPaths from "./svg-ka21ue6shh";
import imgHeaderImage1 from "../assets/0d3dc71e2dea4711821abf78da02c2ef2af52230.png";
import imgFlyer21 from "../assets/26097395a21e7effde23b5121f2cd748188866b5.png";
import imgFlyer11 from "../assets/96b523f8513516c75c5c5f51afa7a29d34a03acb.png";
import imgFlyer31 from "../assets/671c57a24940361b7a6332396f6019c6305f7c13.png";
import imgFlyer1 from "../assets/50a3fe93b46a80442fa40eba864e5fb2f76ea112.png";
import img100004358811 from "../assets/eb04bf47646913546a14dd27e9c935f2944b8086.png";
import imgImg20250830Wa00181 from "../assets/7d130f71d9a2a8054f6a5f5642d53e079b0c516f.png";
import imgInstaPost1 from "../assets/763fb94c4f6ad2d32ad297f808f3e1a731526c27.png";
import imgErgoSky from "../assets/e9bc0769b4feb26811160901187786b4fbe8a3db.png";
import imgHouseOfAce from "../assets/6ddf6fffba9633ee128fab0a65b1da1c3871b01f.png";
import imgWowJewellery from "../assets/3f3d105e58e7da64ce5dd2e26028032f812bb94c.png";
import imgSbsCorp from "../assets/b555e6f050ee924d3378ae2429c6de9e19af7801.png";
import imgStackr from "../assets/1b2314f2690c997499f7cb99b69e32c71475c61f.png";
import imgBeetles from "../assets/379f827f72429b3026376ac9420137fa14d97616.png";
import imgStackrApp from "../assets/b4d353f09d83b827d08877f51441b4a55af38ceb.png";
import imgErgoSkyApp from "../assets/9001ca1b41bbca5c43cd22e67e725e0e922ec27c.png";
import imgCryptoApp from "../assets/3c10c37555518d7c403603e769f9828dde33596f.png";
import imgCraftsville from "../assets/89a7f2fdcf6086aa4d13bb833c33f1db996a9389.png";
import imgTeelicious from "../assets/1ad6a6a7089bd13d9ff1debe307411a8c8df6d1c.png";
import imgFoodpanda from "../assets/0e808bf1bf0268b040cb14d6f1f58fb21e259c34.png";
import imgFurniture from "../assets/65c19d67c06d379de796af0611436127ea2f1df6.png";

import { useState } from "react";

/* ── Decorative Shape Components ── */

function ShapeGreen() {
  return (
    <div className="size-[80px] md:size-[100px] lg:size-[124px]" data-name="Skills Card Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <path d={svgPaths.p38173840} fill="var(--fill-0, #009379)" />
      </svg>
      <div className="absolute flex inset-[58.26%_58.26%_0_0] items-center justify-center">
        <div className="-rotate-45 flex-none h-px w-[73.201px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.77px_0_-4.77px_-6.52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.9746 9.54801">
                <path d={svgPaths.p354c6a00} fill="var(--stroke-0, #2D2D2D)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeRed() {
  return (
    <div className="size-[80px] md:size-[100px] lg:size-[124px]" data-name="Skills Card Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <path d={svgPaths.p13989d80} fill="var(--fill-0, #FF6250)" />
      </svg>
      <div className="absolute flex inset-[10.84%_0_47.42%_58.26%] items-center justify-center">
        <div className="-rotate-45 flex-none h-px w-[73.201px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.77px_-6.52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.7486 9.54801">
                <path d={svgPaths.p3d97cf80} fill="var(--stroke-0, #2D2D2D)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapePink() {
  return (
    <div className="size-[80px] md:size-[100px] lg:size-[124px]" data-name="Skills Card Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 124">
        <path d={svgPaths.p29709080} fill="var(--fill-0, #F3AFA8)" />
        <path d={svgPaths.p17a28300} fill="var(--stroke-0, #2D2D2D)" />
      </svg>
    </div>
  );
}

function ShapeYellow() {
  return (
    <div className="size-[80px] md:size-[100px] lg:size-[124px]" data-name="Skills Card Icon">
      <div className="rotate-180">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.376 124">
          <path d={svgPaths.p13989d80} fill="var(--fill-0, #FCC338)" />
          <path d={svgPaths.p1a7d0800} fill="var(--stroke-0, #2D2D2D)" />
        </svg>
      </div>
    </div>
  );
}

/* ── Lightbox ── */

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-[36px] cursor-pointer hover:opacity-70 z-10" onClick={onClose}>&times;</button>
      <img src={src} alt="Project preview" className="max-w-[92vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

/* ── Navigation ── */

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white w-full px-6 md:px-10 py-5 flex items-center justify-between relative z-50">
      <div className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[19px] md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
      <div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent gap-4 md:gap-6 px-6 md:px-0 py-4 md:py-0 md:ml-auto font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[17px] md:text-[19px] shadow-md md:shadow-none z-50`}>
        <a href="#about" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

/* ── Hero Section ── */

function HeroSection() {
  return (
    <section className="bg-white w-full relative overflow-hidden">
      {/* Vertical line */}
      <div className="hidden lg:block absolute bg-[#4f4f4f] w-[3px] left-[7.8%] top-0 h-[24%]" />
      <div className="hidden lg:block absolute bg-[#4f4f4f] w-[3px] left-[7.8%] bottom-0 h-[42%]" />

      {/* Decorative shapes - hidden on mobile */}
      <div className="absolute right-[5%] md:right-[10%] top-[8%]">
        <ShapeRed />
      </div>
      <div className="absolute right-[5%] md:right-[10%] bottom-[10%]">
        <ShapeYellow />
      </div>
      <div className="absolute left-[5%] md:left-[37%] top-[5%] md:top-[8%]">
        <ShapePink />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-36 px-6 md:px-12 lg:px-[100px]">
        <p className="capitalize font-['Vastago_Grotesk:SemiBold',sans-serif] text-[#4f4f4f] text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] leading-[1] text-center relative z-10">
          portfolio
        </p>
      </div>

      {/* Green shape - left bottom */}
      <div className="absolute left-[5%] md:left-[8%] bottom-[8%] md:bottom-[10%]">
        <ShapeGreen />
      </div>

      {/* Name bar */}
      <div className="bg-white px-6 md:px-12 py-8 md:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        
        <div className="flex items-center gap-3">
          <div className="h-[46px] w-[3px] bg-[#4f4f4f] hidden sm:block" />
          
        </div>
      </div>
    </section>
  );
}

/* ── Header / About Section ── */

function HeaderSection() {
  return (
    <section id="about" className="bg-white w-full px-6 md:px-12 lg:px-14 py-10 md:py-16 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 max-w-[1280px] mx-auto">
        {/* Text content */}
        <div className="flex flex-col gap-8 md:gap-12 flex-1 max-w-[620px]">
          <div className="flex flex-col gap-5 md:gap-6">
            <h2 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[36px] sm:text-[48px] md:text-[68px] leading-[1.1]">
              Rudra Pratap Singh
            </h2>
            <p className="font-['Vastago_Grotesk:Medium',sans-serif] text-[#4f4f4f] text-[15px] md:text-[17px] leading-[27px]">
              Passionate graphic designer crafting compelling visual identities, digital experiences, and brand stories. I blend creativity with strategy to bring ideas to life.
            </p>
          </div>
          <a className="bg-[#2d2d2d] cursor-pointer flex items-center justify-center px-10 md:px-16 py-4 md:py-6 rounded-[16px] self-start hover:bg-[#1a1a1a] transition-colors" href="#contact">
            <span className="font-['Epilogue:SemiBold',sans-serif] text-[17px] md:text-[20px] text-white">Contact</span>
          </a>
        </div>
        {/* Photo */}
        <div className="relative flex-shrink-0 w-full sm:w-[320px] md:w-[400px] lg:w-[480px] self-center lg:self-auto">
          {/* Decorative shapes around photo */}
          <div className="absolute -left-4 md:-left-8 -top-4 md:-top-6 z-10">
            <ShapeRed />
          </div>
          <div className="absolute -right-4 md:-right-8 -bottom-4 md:-bottom-6 z-10">
            <ShapeGreen />
          </div>
          <div className="aspect-[480/360] rounded-t-[250px] sm:rounded-t-[300px] md:rounded-t-[400px] lg:rounded-t-[500px] rounded-bl-[80px] md:rounded-bl-[116px] rounded-br-[80px] md:rounded-br-[120px] overflow-hidden">
            <img alt="Rudra Pratap Singh" className="w-full h-full object-contain rounded-[57px]" src={image_45a361d22fd6094e8517b5bbc08018454f1aaca2} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills / Area of Expertise ── */

function SkillsCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#f7f3f3] rounded-none overflow-hidden flex flex-col items-center px-6 md:px-10 py-8 md:py-10 gap-6 md:gap-8 text-center min-h-[280px]">
      <div className="relative">{icon}</div>
      <div className="flex flex-col gap-3">
        <h3 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[22px] md:text-[27px] leading-[1.5]">{title}</h3>
        <p className="font-['Vastago_Grotesk:Medium',sans-serif] text-[#2d2d2d] text-[15px] md:text-[17px] leading-[27px]">{description}</p>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="bg-white w-full px-6 md:px-12 lg:px-6 py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[32px] md:text-[48px] text-center mb-8 md:mb-12 leading-[1.2]">
          Area of Experties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <SkillsCard
            icon={<ShapePink />}
            title="Logo Design & Brand Identity"
            description="Creating distinctive logos and comprehensive brand systems that capture your unique essence and resonate with your audience."
          />
          <SkillsCard
            icon={<ShapeGreen />}
            title="Social Media Ads Creatives"
            description="Engaging ads, banners, and posts optimized for social platforms to boost your digital presence."
          />
          <SkillsCard
            icon={<ShapeRed />}
            title="UI/UX Design"
            description="Designing intuitive, user-centered interfaces for websites and mobile apps that deliver seamless experiences and drive engagement."
          />
          <SkillsCard
            icon={<ShapeYellow />}
            title="Catalogues, Poster & Flyers"
            description="T-shirts, posters, covers that translate perfectly to physical products."
          />
        </div>
      </div>
    </section>
  );
}

/* ── Projects Section ── */

function ProjectImage({ src, alt, onClick }: { src: string; alt: string; onClick: (src: string) => void }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer w-full h-full" onClick={() => onClick(src)}>
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
  );
}

function ProjectsSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <section id="projects" className="bg-white w-full px-6 md:px-12 lg:px-6 py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[32px] md:text-[48px] text-center mb-8 md:mb-12 leading-[1.2]">
          Projects
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left column: Logos + Catalogues */}
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-[2]">
            {/* Logo Design Card */}
            <div className="bg-[#f7f3f3] overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3">
                <div className="aspect-square"><ProjectImage src={imgErgoSky} alt="Ergo Sky Logo" onClick={onImageClick} /></div>
                <div className="aspect-square"><ProjectImage src={imgHouseOfAce} alt="House of Ace Logo" onClick={onImageClick} /></div>
                <div className="aspect-square"><ProjectImage src={imgWowJewellery} alt="WOW Jewellery Logo" onClick={onImageClick} /></div>
                <div className="aspect-square"><ProjectImage src={imgSbsCorp} alt="SBS Corp Logo" onClick={onImageClick} /></div>
                <div className="aspect-square"><ProjectImage src={imgStackr} alt="Stackr Logo" onClick={onImageClick} /></div>
                <div className="aspect-square"><ProjectImage src={imgBeetles} alt="Beetles Logo" onClick={onImageClick} /></div>
              </div>
              <div className="px-6 md:px-10 py-6 md:py-8 text-center relative">
                <div className="absolute top-2 right-4 hidden md:block"><ShapePink /></div>
                <h3 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[22px] md:text-[27px] leading-[42px]">Logo Design &amp; Brand Identity</h3>
              </div>
            </div>

            {/* Bottom row: Catalogues + UI/UX */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Catalogues Card */}
              <div className="bg-[#f7f3f3] overflow-hidden md:flex-[1.8]">
                <div className="grid grid-cols-3 h-full">
                  <div className="aspect-[332/416]"><ProjectImage src={img100004358811} alt="Merchandise Design 1" onClick={onImageClick} /></div>
                  <div className="aspect-[332/416]"><ProjectImage src={imgImg20250830Wa00181} alt="Merchandise Design 2" onClick={onImageClick} /></div>
                  <div className="aspect-[332/416]"><ProjectImage src={imgInstaPost1} alt="Merchandise Design 3" onClick={onImageClick} /></div>
                </div>
                <div className="px-6 md:px-10 py-5 md:py-6 text-center">
                  <h3 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[22px] md:text-[27px] leading-[42px]">Catalogues, Poster &amp; Flyers</h3>
                </div>
              </div>

              {/* UI/UX Card */}
              <div className="bg-[#f7f3f3] overflow-hidden md:flex-1">
                <div className="grid grid-cols-1">
                  <div className="aspect-[3/1]"><ProjectImage src={imgErgoSkyApp} alt="Ergo Sky Productivity App" onClick={onImageClick} /></div>
                  <div className="aspect-[3/1]"><ProjectImage src={imgCryptoApp} alt="Crypto Trading App" onClick={onImageClick} /></div>
                </div>
                <div className="px-6 md:px-10 py-5 md:py-6 text-center">
                  <h3 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[22px] md:text-[27px] leading-[42px]">UI/UX Design</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Social Media Ads */}
          <div className="bg-[#f7f3f3] overflow-hidden lg:flex-1">
            <div className="grid grid-cols-2">
              <div className="aspect-square"><ProjectImage src={imgFlyer21} alt="Flyer Design 1" onClick={onImageClick} /></div>
              <div className="aspect-square"><ProjectImage src={imgFlyer11} alt="Flyer Design 2" onClick={onImageClick} /></div>
              <div className="aspect-square"><ProjectImage src={imgFlyer31} alt="Flyer Design 3" onClick={onImageClick} /></div>
              <div className="aspect-square"><ProjectImage src={imgFlyer1} alt="Flyer Design 4" onClick={onImageClick} /></div>
            </div>
            <div className="px-6 md:px-10 py-5 md:py-6 text-center">
              <h3 className="font-['NType_82:Headline',sans-serif] text-[#2d2d2d] text-[22px] md:text-[27px] leading-[42px]">Social Media Ads Creatives</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Social Icons ── */

function Discord() {
  return (
    <a className="block cursor-pointer shrink-0 size-[32px] md:size-[36px] hover:opacity-70 transition-opacity" href="https://discord.gg/R8pJ8RYs" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 36 36">
        <path d={svgPaths.p183dc40} fill="#2D2D2D" />
        <path d={svgPaths.pcbf2600} fill="#2D2D2D" />
      </svg>
    </a>
  );
}
function Instagram() {
  return (
    <a className="block cursor-pointer shrink-0 size-[32px] md:size-[36px] hover:opacity-70 transition-opacity" href="https://www.instagram.com/iabhinavvsingh/" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 36 36">
        <path d={svgPaths.p16336c00} fill="#2D2D2D" />
        <path d={svgPaths.p2f828700} fill="#2D2D2D" />
        <path d={svgPaths.pd3f7b80} fill="#2D2D2D" />
      </svg>
    </a>
  );
}
function LinkedInIcon() {
  return (
    <a className="block cursor-pointer shrink-0 size-[28px] md:size-[30px] hover:opacity-70 transition-opacity" href="https://www.linkedin.com/in/lilwierdorudra/" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 30 30">
        <path d={svgPaths.p3c35c600} fill="#2D2D2D" />
      </svg>
    </a>
  );
}
function Behance() {
  return (
    <a className="block cursor-pointer shrink-0 size-[32px] md:size-[36px] hover:opacity-70 transition-opacity" href="https://www.behance.net/rudrapratap112" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 36 36">
        <path d={svgPaths.p2b739880} fill="#2D2D2D" />
      </svg>
    </a>
  );
}
function Reddit() {
  return (
    <a className="block cursor-pointer shrink-0 size-[32px] md:size-[36px] hover:opacity-70 transition-opacity" href="https://www.reddit.com/user/thegraphicpen/" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 36 36">
        <mask fill="white" id="reddit-mask">
          <path d={svgPaths.p15d83180} />
        </mask>
        <path d={svgPaths.p6627f70} fill="#2D2D2D" mask="url(#reddit-mask)" />
      </svg>
    </a>
  );
}
function Dribbble() {
  return (
    <a className="block cursor-pointer shrink-0 size-[32px] md:size-[36px] hover:opacity-70 transition-opacity" href="https://x.com/iabhinavvsingh" target="_blank" rel="noopener noreferrer">
      <svg className="block size-full" fill="none" viewBox="0 0 36 36">
        <path d={svgPaths.p1d42dc80} fill="#2D2D2D" />
      </svg>
    </a>
  );
}

/* ── Contact Section ── */

function ContactSection() {
  return (
    <section id="contact" className="bg-white w-full px-6 md:px-12 lg:px-6 py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
        {/* Left side */}
        <div className="flex flex-col gap-4 md:gap-6 flex-1">
          <h2 className="font-['Vastago_Grotesk:SemiBold',sans-serif] text-[#2d2d2d] text-[26px] md:text-[32px] leading-[42px]">
            Lets work together
          </h2>
          <p className="font-['Vastago_Grotesk:SemiBold',sans-serif] text-[#2d2d2d] text-[15px] md:text-[17px] leading-[27px]">
            Let's collaborate to bring your brand vision to life.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&to=workwithrudra777@gmail.com" target="_blank" rel="noopener noreferrer" className="font-['Vastago_Grotesk:Medium',sans-serif] text-[#2d2d2d] text-[15px] md:text-[17px] leading-[27px] hover:opacity-70 transition-opacity underline">
            workwithrudra777@gmail.com
          </a>
          <a href="tel:+917906095839" className="font-['Vastago_Grotesk:Medium',sans-serif] text-[#2d2d2d] text-[15px] md:text-[17px] leading-[27px] hover:opacity-70 transition-opacity underline">
            +91-7906095839
          </a>
          <div className="flex gap-4 md:gap-6 items-center flex-wrap mt-2">
            <Discord />
            <Instagram />
            <LinkedInIcon />
            <Behance />
            <Reddit />
            <Dribbble />
          </div>
        </div>
        {/* Right side - form */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 max-w-[520px]">
          
          
          
        </div>
      </div>
    </section>
  );
}

/* ── Main Export ── */

export default function PortfolioTemplate() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1280px]">
        <Navigation />
        <HeroSection />
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection onImageClick={(src) => setLightboxSrc(src)} />
        <ContactSection />
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
}