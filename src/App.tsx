/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Stethoscope, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Award,
  TrendingUp,
  Search,
  MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Highlight = ({ children, color = "bg-blue-100/50" }: { children: React.ReactNode, color?: string }) => (
  <span className={`relative inline-block px-2 py-1 mx-0.5 rounded-lg ${color} border-b-2 border-blue-400/30`}>
    {children}
  </span>
);

const ExpertTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 font-semibold text-sm md:text-base mx-0.5 my-1 transition-all hover:border-blue-300 hover:shadow-md">
    {children}
  </span>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "컨설팅 소개", href: "#intro" },
    { name: "학습 컨설팅", href: "#learning" },
    { name: "생기부 관리", href: "#record" },
    { name: "원서 지원", href: "#application" },
    { name: "면접 컨설팅", href: "#interview" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">현직메디</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg active:scale-95">
              상담 신청하기
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-2">
                상담 신청하기
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Introduction Section */}
      <section id="intro" className="pt-40 pb-20 bg-slate-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
              >
                Introduction
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                현직메디 컨설팅 소개
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="bg-white p-10 md:p-20 rounded-[60px] shadow-2xl shadow-blue-900/5 border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
              
              <div className="relative z-10 space-y-12 text-center">
                <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                  <span className="inline-block mb-4 border-b-4 border-blue-600 pb-1 text-slate-900">현직메디는</span><br />
                  <span className="text-red-600">의학적 전문성</span>과<br />
                  <span className="text-red-600">입시 이해도</span>를<br />
                  <span className="block py-6">모두 갖춘</span>
                  <span className="text-blue-600">전국 최고 수준</span>의<br />
                  <span className="text-blue-600">메디컬 컨설팅 그룹</span>입니다.
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-[2] max-w-3xl mx-auto">
                  지원자들의 합격을 위해<br />
                  <ExpertTag>현직 치과의사</ExpertTag> <ExpertTag>의대 재학생들</ExpertTag> <ExpertTag>현직 의대 입학사정관</ExpertTag> <ExpertTag>현직 Big5 및 고려대 병원 간호사</ExpertTag> 등<br />
                  <span className="font-bold text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">전국 최고 수준의 컨설턴트</span>만 고집합니다.
                </p>

                <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-3xl overflow-hidden">
                  <div className="p-8 bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-100">
                    <p className="text-slate-400 text-sm mb-2">정보는 누구나 줄 수 있습니다.</p>
                    <p className="text-xl font-black text-slate-900">결과는 아무나 만들 수 없습니다.</p>
                  </div>
                  <div className="p-8 bg-blue-600">
                    <p className="text-blue-200 text-sm mb-2">현직메디는 ‘정보’만 제공하지 않습니다.</p>
                    <p className="text-xl font-black text-white">결과를 설계하고, 실제로 만들어냅니다.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-xl md:text-2xl font-medium text-slate-700 italic">
                    "혼자 준비하는 순간, 방향은 흔들립니다."<br />
                    <span className="text-blue-600 font-bold not-italic">"현직 전문가와 함께하면 결과는 달라집니다."</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Award className="w-4 h-4" />
              <span>프리미엄 메디컬 컨설팅 그룹</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.3] mb-8">
              <Highlight>의대 합격</Highlight> <Highlight>메디컬 학과 입시</Highlight> <br />
              <Highlight>병원 취업</Highlight>까지 <br />
              <span className="text-blue-600">현직 전문가</span>가 <br />
              직접 설계합니다.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              단순한 정보 제공이 아닙니다. 합격과 취업을 실제로 만들어낸 전문가들이 당신의 결과를 설계합니다.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://blog.naver.com/hj-medi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                선생님들 이력 확인하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://open.kakao.com/o/sfQopLmi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                카카오톡 실시간 문의
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                alt="Modern Hospital" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Stat Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-white/20"
              >
                <p className="text-slate-600 text-xs font-bold mb-1">현직메디를 통한 총 합격자 수</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-blue-600">181</span>
                  <span className="text-lg font-bold text-slate-900">명</span>
                </div>
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=100&auto=format&fit=crop" alt="Stethoscope" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=100&auto=format&fit=crop" alt="Korean Dentist" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=100&auto=format&fit=crop" alt="Syringe" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">현직 치과의사, 의대 재학생, 의대 입학사정관, 간호사 멘토진</span>
                </div>
                <p className="text-xl font-bold">"정보는 누구나 줄 수 있지만, 결과는 아무나 만들 수 없습니다."</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200 rounded-full -z-10 blur-3xl opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">현직메디 컨설팅</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              의학적 전문성과 입시 이해도를 모두 갖춘 전국 최고 수준의 프리미엄 메디컬 컨설팅 그룹입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <GraduationCap className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">의대 입시 분야</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 mt-1 shrink-0" />
                  <span>의대 재학생 (연세대 / 가톨릭대 / 건국대)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 mt-1 shrink-0" />
                  <span>현직 의대 입학사정관 (고려대 / 가톨릭)</span>
                </li>
                <li className="mt-6 p-4 bg-blue-50 rounded-xl text-blue-800 font-semibold italic">
                  → 합격자의 ‘전략’ + 평가자 ‘기준’으로 함께 만드는 입시 전략
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                <Stethoscope className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">해당 학과 입시 / 취업 / 의료계 진료 분야</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 mt-1 shrink-0" />
                  <span>현직 치과의사 / 현직 간호사 (Big5, 고려대학교 병원 등)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 mt-1 shrink-0" />
                  <span>보건복지부장관상 수상, Apple 근무 경험 멘토</span>
                </li>
                <li className="mt-6 p-4 bg-emerald-50 rounded-xl text-emerald-800 font-semibold italic">
                  → 대형병원·대학병원·전문성을 모두 갖춘 멘토진
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">이런 분께 추천합니다</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" /> 의대 입시
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                      <li>• 중위권에서 상위권으로 도약 희망</li>
                      <li>• "어떻게 붙는지" 정확히 알고 싶은 분</li>
                      <li>• 내신/학생부/정시 성적 상승 희망</li>
                      <li>• 의대 면접/논술/평가 기준 궁금한 분</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" /> 의료계 취업
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                      <li>• 치대, 간호학과 진학 및 취업 준비</li>
                      <li>• 서류/면접에서 계속 탈락하는 분</li>
                      <li>• 대형병원 커리어의 현실이 궁금한 분</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h4 className="text-xl font-bold mb-6">컨설팅 방식</h4>
                <div className="space-y-6">
                  {[
                    { title: "1:1 전담 현직 멘토 배정", desc: "분야별 최적의 전문가 매칭" },
                    { title: "개인 맞춤 로드맵 설계", desc: "현재 상황 분석 및 목표 설정" },
                    { title: "실행 점검 + 피드백 반복", desc: "지속적인 관리와 습관 교정" },
                    { title: "통합 관리 시스템", desc: "학습, 서류, 면접, 전략 모두 포함" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-slate-400 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">전문 컨설팅 서비스</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              각 분야의 현직 전문가들이 합격의 문을 열어드립니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 1. 학습 컨설팅 */}
            <motion.div 
              id="learning"
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <BookOpen className="w-8 h-8" />
                </div>
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Learning Strategy</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">학습 전략 컨설팅</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                성적은 노력의 문제가 아니라 전략의 문제입니다. 의대 합격자들의 실제 데이터를 기반으로 최적화된 학습 전략을 설계합니다.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 내신 / 수능 맞춤형 학습 로드맵
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 과목별 성적 상승 전략 (이해/암기/풀이 구조화)
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 상위권 진입을 위한 핵심 포인트 집중 설계
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">차별화 포인트</div>
                  <div className="text-slate-900 text-xs font-bold leading-tight">의대 합격자 공부 방식 그대로 적용</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-[10px] font-bold text-blue-400 uppercase mb-1">기대 결과</div>
                  <div className="text-blue-900 text-xs font-bold leading-tight">최단 기간 성적 상승 구조로 전환</div>
                </div>
              </div>
            </motion.div>

            {/* 2. 생기부 관리 */}
            <motion.div 
              id="record"
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="text-slate-900 font-bold text-sm tracking-widest uppercase">Student Record</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">학생부 설계 컨설팅</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                학생부는 단순한 기록이 아닙니다. 현직 입학사정관의 평가 기준을 기반으로 지원자의 학생부를 합격형 구조로 재구성합니다.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-slate-900 w-5 h-5" /> 세특 방향 설정 및 전략적 활동 설계
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-slate-900 w-5 h-5" /> 전공 적합성 기반 스토리라인 구축
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-slate-900 w-5 h-5" /> 활동 → 기록 → 평가 연결 구조 설계
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">차별화 포인트</div>
                  <div className="text-slate-900 text-xs font-bold leading-tight">현직 사정관 참여, 평가기준 적용</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">기대 결과</div>
                  <div className="text-white text-xs font-bold leading-tight">평범한 생기부 → 합격형 생기부</div>
                </div>
              </div>
            </motion.div>

            {/* 3. 원서 지원 */}
            <motion.div 
              id="application"
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-lg shadow-blue-50">
                  <Search className="w-8 h-8" />
                </div>
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Application Strategy</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">지원 전략 컨설팅</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                합격은 성적이 아니라 전략에서 결정됩니다. 실제 합격 데이터와 평가 기준을 기반으로 합격 확률을 극대화하는 지원 설계를 제공합니다.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 지원 가능 대학 및 전형 정밀 분석
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 안정 / 적정 / 상향 전략 설계
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" /> 대학별 평가 기준 기반 맞춤 지원
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">차별화 포인트</div>
                  <div className="text-slate-900 text-xs font-bold leading-tight">불필요한 리스크 제거, 확률 극대화</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-[10px] font-bold text-blue-400 uppercase mb-1">기대 결과</div>
                  <div className="text-blue-900 text-xs font-bold leading-tight">
                    단순히 감만으로 지원 <br />
                    → 데이터 기반 합격 지원
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. 면접 컨설팅 */}
            <motion.div 
              id="interview"
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Interview Focus</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">면접 집중 컨설팅</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                면접은 지식보다 평가 기준을 아는 사람이 합격합니다. 현직 입학사정관과 의료인이 함께 합격형 답변 구조를 완성합니다.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5" /> 의대 / 치대 / 간호 기출 및 예상 질문 분석
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5" /> 답변 구조 설계 (논리 + 스토리 + 전달력)
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5" /> 실전 모의 면접 및 압박 환경 재현
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">차별화 포인트</div>
                  <div className="text-slate-900 text-xs font-bold leading-tight">실제 평가 기준 기반 피드백</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase mb-1">기대 결과</div>
                  <div className="text-emerald-900 text-xs font-bold leading-tight">평범한 답변 → 합격을 만드는 답변</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            혼자 고민하지 마세요. <br />
            현직 전문가와 함께하면 결과가 달라집니다.
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            지금 바로 1:1 맞춤 상담을 신청하고 당신만의 합격 로드맵을 설계받으세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://blog.naver.com/hj-medi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl inline-block"
            >
              <span className="text-amber-500">선생님들</span> 이력 확인하기
            </a>
            <a 
              href="https://open.kakao.com/o/sfQopLmi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl inline-block text-center"
            >
              <span className="text-amber-500">카카오톡</span> 문의
            </a>
          </div>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">현직메디</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                현직메디는 의학적 전문성과 입시 이해도를 모두 갖춘<br />전국 최고 수준의 프리미엄 메디컬 컨설팅 그룹입니다.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://blog.naver.com/hj-medi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">Blog</span>
                </a>
                <a 
                  href="https://www.instagram.com/hjmedi.consulting?igsh=emFhMnBuYWswbXBj&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">Insta</span>
                </a>
                <a 
                  href="https://open.kakao.com/o/sfQopLmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold">Talk</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">컨설팅 서비스</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#learning" className="hover:text-white transition-colors">학습 전략 컨설팅</a></li>
                <li><a href="#record" className="hover:text-white transition-colors">학생부 설계 컨설팅</a></li>
                <li><a href="#application" className="hover:text-white transition-colors">지원 전략 컨설팅</a></li>
                <li><a href="#interview" className="hover:text-white transition-colors">면접 집중 컨설팅</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">업체명: 현직메디</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>대표자명: 최은혜</li>
                <li>사업자등록번호: 241-15-02729</li>
                <li>주소: 서울특별시 성동구 독서당로 270, 105동 1702호</li>
                <li>이메일: hj-medi@naver.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-slate-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 현직메디. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
