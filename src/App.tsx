import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, Apple, ArrowRight, Check, Star, Plus, Minus } from 'lucide-react'

const OLIVE = '#2d4a1e'
const OLIVE_DARK = '#1c3410'
const OLIVE_BG = '#f0f4ec'
const CREAM = '#f8f6f1'

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
      transition:'all 0.3s'
    }}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 24px', height:64, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        {/* Logo */}
        <div style={{display:'flex', alignItems:'center', gap:6}}>
          <span style={{fontSize:24}}>🫒</span>
          <span style={{fontSize:20, fontWeight:800, color:OLIVE, fontFamily:"'Playfair Display', serif"}}>live</span>
        </div>

        {/* Desktop links */}
        <div style={{display:'flex', alignItems:'center', gap:32, }}>
          {['Solutions','Features','Pricing','Blog','Restaurants','Food'].map(item => (
            <a key={item} href="#" style={{fontSize:14, color:'#444', textDecoration:'none', display:'flex', alignItems:'center', gap:4}}>
              {item} {['Solutions','Blog','Food'].includes(item) && <ChevronDown size={13}/>}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div style={{display:'flex', alignItems:'center', gap:20}}>
          <a href="#" style={{fontSize:14, color:'#444', textDecoration:'none'}}>Sign in</a>
          <button style={{background:OLIVE, color:'#fff', border:'none', borderRadius:999, padding:'10px 20px', fontSize:14, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:6}}>
            Get Olive <ArrowRight size={14}/>
          </button>
        </div>
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{background:OLIVE_BG, minHeight:'100vh', paddingTop:80, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', overflow:'hidden'}}>
      {/* Trust badge */}
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
        style={{display:'flex', alignItems:'center', gap:10, marginTop:40, marginBottom:24}}>
        <div style={{display:'flex'}}>
          {['👩','👨','👩','👨'].map((e,i) => (
            <div key={i} style={{width:32, height:32, borderRadius:'50%', background:'#ccc', border:'2px solid white', display:'flex', alignItems:'center', justifyContent:'center', marginLeft: i>0 ? -8 : 0, fontSize:16}}>{e}</div>
          ))}
          <div style={{width:32, height:32, borderRadius:'50%', background:OLIVE, border:'2px solid white', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:-8, color:'white', fontSize:11, fontWeight:700}}>+</div>
        </div>
        <span style={{fontSize:13, color:'#666'}}>Trusted by thousands of healthy families</span>
      </motion.div>

      {/* Headline */}
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
        style={{fontSize:'clamp(40px,7vw,80px)', fontWeight:900, color:OLIVE_DARK, maxWidth:800, lineHeight:1.1, padding:'0 24px', fontFamily:"'Playfair Display', serif", margin:0}}>
        The Safest Way to Shop for Groceries
      </motion.h1>

      {/* Subtitle */}
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
        style={{marginTop:20, color:'#666', maxWidth:440, padding:'0 24px', lineHeight:1.7, fontSize:15}}>
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
      </motion.p>

      {/* CTAs */}
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5}}
        style={{marginTop:32, display:'flex', alignItems:'center', gap:20, flexWrap:'wrap', justifyContent:'center'}}>
        <button style={{background:OLIVE, color:'white', border:'none', borderRadius:999, padding:'12px 24px', fontSize:14, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:8}}>
          <Apple size={16}/> Download for iOS
        </button>
        <button style={{background:'none', border:'none', cursor:'pointer', color:OLIVE, fontSize:14, fontWeight:500, display:'flex', alignItems:'center', gap:6}}>
          Join the Olive Community <ArrowRight size={15}/>
        </button>
      </motion.div>

      {/* Phone mockup */}
      <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{delay:0.6, type:'spring', stiffness:60}}
        style={{marginTop:48, position:'relative', width:280}}>
        <motion.div animate={{y:[0,-12,0]}} transition={{duration:3, repeat:Infinity, ease:'easeInOut'}}>
        {/* side cards */}
        <div style={{position:'absolute', left:-50, top:'35%', width:52, height:52, background:'white', borderRadius:16, boxShadow:'0 8px 24px rgba(0,0,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, opacity:0.7}}>🥦</div>
        <div style={{position:'absolute', right:-50, top:'50%', width:52, height:52, background:'white', borderRadius:16, boxShadow:'0 8px 24px rgba(0,0,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, opacity:0.7}}>🥕</div>

        {/* phone */}
        <div style={{background:'white', borderRadius:44, boxShadow:'0 24px 60px rgba(0,0,0,0.15)', border:'4px solid #eee', overflow:'hidden', position:'relative'}}>
          {/* notch */}
          <div style={{position:'absolute', top:12, left:'50%', transform:'translateX(-50%)', width:90, height:22, background:'black', borderRadius:999, zIndex:5}}/>
          <div style={{padding:'52px 16px 20px'}}>
            {/* App header image */}
            <div style={{width:'100%', height:110, background:'linear-gradient(135deg, #ffe8cc, #fff3e6)', borderRadius:16, marginBottom:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:48, overflow:'hidden'}}>
              🥗
            </div>
            {/* Product info */}
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
              <div style={{width:38, height:38, background:'#fff3e6', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0}}>🫙</div>
              <div>
                <p style={{fontSize:12, fontWeight:600, color:'#1a1a1a', margin:0, lineHeight:1.3}}>Fig and Olive Crackers, Fig and Olive</p>
                <p style={{fontSize:11, color:'#aaa', margin:0}}>Luxury Stores</p>
              </div>
            </div>
            {/* Score */}
            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:10}}>
              <div style={{width:10, height:10, borderRadius:'50%', background:'#f97316'}}/>
              <span style={{fontSize:13, fontWeight:700, color:'#f97316'}}>46/100</span>
              <span style={{fontSize:11, color:'#aaa'}}>Avoid</span>
            </div>
            {/* Oliver says */}
            <div style={{background:OLIVE_BG, borderRadius:14, padding:12}}>
              <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:6}}>
                <span style={{fontSize:16}}>🫒</span>
                <span style={{fontSize:11, fontWeight:600, color:OLIVE}}>Oliver Says:</span>
              </div>
              <p style={{fontSize:10, color:'#555', lineHeight:1.6, margin:0}}>
                "This product's low score comes from the processed sugars, like honey and brown sugar, which can impact your family's health..."
              </p>
            </div>
            <p style={{fontSize:11, fontWeight:700, color:'#1a1a1a', marginTop:10, marginBottom:0}}>Breakdown</p>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
// Scan animation card
function ScanCard() {
  return (
    <div style={{width:'100%',height:180,position:'relative',background:'#eef2ea',borderRadius:16,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}>
      {[{top:10,left:10,borderTop:'3px solid #2d4a1e',borderLeft:'3px solid #2d4a1e'},
        {top:10,right:10,borderTop:'3px solid #2d4a1e',borderRight:'3px solid #2d4a1e'},
        {bottom:10,left:10,borderBottom:'3px solid #2d4a1e',borderLeft:'3px solid #2d4a1e'},
        {bottom:10,right:10,borderBottom:'3px solid #2d4a1e',borderRight:'3px solid #2d4a1e'},
      ].map((s,i)=>(
        <div key={i} style={{position:'absolute',width:20,height:20,...s}}/>
      ))}
      <div style={{position:'relative',zIndex:2,textAlign:'center'}}>
        <div style={{fontSize:60}}>🥑</div>
        <div style={{background:'white',borderRadius:4,padding:'2px 8px',fontSize:9,letterSpacing:3,color:'#333',marginTop:4}}>||| | || ||| |</div>
      </div>
      <motion.div animate={{top:["15%","85%","15%"]}} transition={{duration:1.8,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'absolute',left:16,right:16,height:2,background:'linear-gradient(90deg,transparent,#2d4a1e,transparent)',zIndex:3,boxShadow:'0 0 10px rgba(45,74,30,0.9)'}}/>
      {[{top:18,left:22},{top:18,right:28},{bottom:22,left:34},{bottom:18,right:18}].map((pos,i)=>(
        <motion.div key={i} animate={{opacity:[0,1,0]}} transition={{duration:1.4,repeat:Infinity,delay:i*0.35}}
          style={{position:'absolute',width:5,height:5,borderRadius:'50%',background:'#2d4a1e',...pos}}/>
      ))}
    </div>
  )
}

function AnalysisCard() {
  const products = ['🥫','🧃','🥛','🫙']
  const [active, setActive] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=>setActive(a=>(a+1)%products.length),900)
    return ()=>clearInterval(t)
  },[])
  return (
    <div style={{width:'100%',height:180,background:'#eef2ea',borderRadius:16,overflow:'hidden',marginBottom:16,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:14}}>
      <div style={{display:'flex',gap:8}}>
        {products.map((p,i)=>(
          <motion.div key={i} animate={{scale:i===active?1.25:0.85,opacity:i===active?1:0.4}} transition={{duration:0.3}}
            style={{width:44,height:44,background:'white',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,boxShadow:i===active?'0 4px 14px rgba(0,0,0,0.18)':'none'}}>
            {p}
          </motion.div>
        ))}
      </div>
      <motion.div animate={{width:['30%','80%','50%','70%']}} transition={{duration:2.5,repeat:Infinity,ease:'easeInOut'}}
        style={{height:6,background:'linear-gradient(90deg,#2d4a1e,#8bc34a)',borderRadius:999}}/>
      <div style={{display:'flex',alignItems:'center',gap:6,background:'white',borderRadius:999,padding:'6px 14px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
        <motion.div animate={{scale:[1,1.4,1]}} transition={{duration:1,repeat:Infinity}}
          style={{width:8,height:8,borderRadius:'50%',background:'#8bc34a'}}/>
        <span style={{fontSize:12,fontWeight:600,color:'#2d4a1e'}}>Safe to consume</span>
      </div>
    </div>
  )
}

function InsightsCard() {
  const items = [
    {name:'Straus Ice Cream',score:96,color:'#8bc34a',label:'Excellent'},
    {name:'Fig & Olive Crackers',score:46,color:'#f97316',label:'Avoid'},
    {name:'Organic Valley Milk',score:88,color:'#22c55e',label:'Good'},
  ]
  const [idx,setIdx] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=>setIdx(i=>(i+1)%items.length),2000)
    return ()=>clearInterval(t)
  },[])
  const item = items[idx]
  return (
    <div style={{width:'100%',height:180,background:'#eef2ea',borderRadius:16,overflow:'hidden',marginBottom:16,padding:16,display:'flex',flexDirection:'column',justifyContent:'center',gap:10}}>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:0.3}}>
          <p style={{fontSize:12,fontWeight:600,color:'#333',margin:'0 0 8px'}}>{item.name}</p>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
            <div style={{flex:1,height:8,background:'#d5e0cc',borderRadius:999,overflow:'hidden'}}>
              <motion.div initial={{width:0}} animate={{width:item.score+"%"}} transition={{duration:0.6,ease:'easeOut'}}
                style={{height:'100%',background:item.color,borderRadius:999}}/>
            </div>
            <span style={{fontSize:14,fontWeight:800,color:item.color}}>{item.score}</span>
          </div>
          <span style={{fontSize:11,background:item.color+'22',color:item.color,borderRadius:999,padding:'3px 12px',fontWeight:600}}>{item.label}</span>
        </motion.div>
      </AnimatePresence>
      <div style={{display:'flex',gap:4,marginTop:4}}>
        {items.map((_,i)=>(
          <div key={i} style={{flex:1,height:3,borderRadius:999,background:i===idx?'#2d4a1e':'#c8d9c0',transition:'background 0.3s'}}/>
        ))}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {title:'Scan & Detect',desc:"When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",visual:<ScanCard/>},
    {title:'Data Analysis & Validation',desc:"After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",visual:<AnalysisCard/>},
    {title:'Actionable Insights & Recommendations',desc:"Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices.",visual:<InsightsCard/>},
  ]
  return (
    <section style={{padding:'96px 24px',background:'white'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:60}}>
          <h2 style={{fontSize:'clamp(28px,4vw,48px)',fontWeight:900,color:OLIVE_DARK,fontFamily:"'Playfair Display', serif",margin:0}}>
            How the Olive Food Scanner App Works
          </h2>
          <div style={{fontSize:40,marginTop:8}}>🥑</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:24}}>
          {steps.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}
              whileHover={{y:-8,boxShadow:'0 20px 40px rgba(45,74,30,0.15)'}}
              style={{background:OLIVE_BG,borderRadius:24,padding:24,cursor:'pointer',transition:'box-shadow 0.3s'}}>
              {s.visual}
              <h3 style={{fontSize:16,fontWeight:700,color:OLIVE_DARK,margin:'0 0 10px'}}>{s.title}</h3>
              <p style={{fontSize:13,color:'#666',lineHeight:1.7,margin:0}}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function CheckItem({ text, dark=false }: { text:string, dark?:boolean }) {
  return (
    <div style={{display:'flex', alignItems:'flex-start', gap:12, marginBottom:12}}>
      <div style={{width:22, height:22, borderRadius:'50%', background:dark?'rgba(255,255,255,0.2)':OLIVE, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2}}>
        <Check size={13} color="white"/>
      </div>
      <p style={{fontSize:14, color: dark?'rgba(255,255,255,0.85)':'#555', lineHeight:1.6, margin:0}}>{text}</p>
    </div>
  )
}

function Features() {
  // Floating tags for ingredient filtering
  const tags = [
    {label:'High Fibre', good:true},{label:'Plant-Based', good:true},
    {label:'Cholesterol-Free', good:true},{label:'Non-GMO', good:true},
    {label:'100% Whole Grain', good:true},{label:'Rich in Antioxidants', good:true},
    {label:'Organic Ingredients', good:true},{label:'Low PFAS', good:true},
    {label:'Sodium Nitrite', good:false},{label:'Artificial Colors', good:false},
    {label:'Palm Oil', good:false},{label:'Carrageenan', good:false},
    {label:'Saccharin', good:false},{label:'Aspartame', good:false},
    {label:'Monosodium Glutamate', good:false},{label:'Potassium Bromate', good:false},
    {label:'Xanthan Gum', good:false},{label:'Sodium Benzoate', good:false},
  ]

  // Fan cards for nutritional clarity
  const fanCards = [
    {img:'https://images.unsplash.com/photo-1571167530149-c1105da4c2c4?w=200&q=80', rotate:-12, z:1},
    {img:'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80', rotate:0, z:3},
    {img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80', rotate:12, z:2},
  ]

  return (
    <section style={{padding:'96px 24px', background:CREAM}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'flex', flexDirection:'column', gap:80}}>

        {/* Feature 1 - Nutritional Clarity - 2 col */}
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          style={{background:'white', borderRadius:32, padding:'48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center'}}>
          <div>
            <h3 style={{fontSize:'clamp(20px,2.5vw,30px)', fontWeight:900, color:OLIVE_DARK, marginBottom:24, fontFamily:"'Playfair Display', serif", lineHeight:1.2}}>Achieve Nutritional Clarity</h3>
            <CheckItem text="Olive breaks down every ingredient into clear, actionable information."/>
            <CheckItem text="Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins."/>
            <CheckItem text="Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes."/>
          </div>
          {/* Fan product cards */}
          <div style={{background:OLIVE_BG, borderRadius:24, padding:24, display:'flex', flexDirection:'column', gap:16}}>
            <div style={{position:'relative', height:160, display:'flex', alignItems:'center', justifyContent:'center'}}>
              {fanCards.map((c,i)=>(
                <motion.div key={i}
                  initial={{rotate:0, y:20, opacity:0}}
                  whileInView={{rotate:c.rotate, y:0, opacity:1}}
                  viewport={{once:true}}
                  transition={{delay:i*0.15, type:'spring', stiffness:80}}
                  whileHover={{y:-8, zIndex:10}}
                  style={{position:'absolute', width:90, height:120, borderRadius:16, overflow:'hidden', boxShadow:'0 8px 24px rgba(0,0,0,0.15)', zIndex:c.z, cursor:'pointer'}}>
                  <img src={c.img} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </motion.div>
              ))}
            </div>
            <div style={{background:'white', borderRadius:16, padding:'12px 16px', display:'flex', alignItems:'center', gap:12}}>
              <div style={{width:44, height:44, background:'#fff3e6', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0}}>🍦</div>
              <div>
                <p style={{fontWeight:700, fontSize:15, margin:0, color:'#1a1a1a'}}>Straus Ice Cream</p>
                <p style={{fontSize:13, margin:0}}><span style={{color:OLIVE, fontWeight:800}}>96/100</span> <span style={{color:'#aaa'}}>Excellent</span></p>
              </div>
            </div>
            <div style={{display:'flex', gap:10}}>
              <div style={{flex:1, background:'white', borderRadius:12, padding:'10px 0', textAlign:'center', fontSize:13, color:OLIVE, fontWeight:600, display:'flex', alignItems:'center', justifyContent:'center', gap:6}}>
                <Check size={13}/> Positives
              </div>
              <div style={{flex:1, background:'white', borderRadius:12, padding:'10px 0', textAlign:'center', fontSize:13, color:'#ef4444', fontWeight:600, display:'flex', alignItems:'center', justifyContent:'center', gap:6}}>
                <X size={13}/> Negatives
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 - Ingredient Filtering - 2 col with floating tags */}
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          style={{background:OLIVE_BG, borderRadius:32, padding:'48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center'}}>
          <div>
            <h3 style={{fontSize:'clamp(20px,2.5vw,30px)', fontWeight:900, color:OLIVE_DARK, marginBottom:24, fontFamily:"'Playfair Display', serif", lineHeight:1.2}}>Proactive Ingredient Filtering</h3>
            <CheckItem text="Olive flags harmful additives and controversial ingredients before they become mainstream concerns."/>
            <CheckItem text="Keeps you ahead of potential food safety concerns."/>
            <CheckItem text="Gives busy parents the confidence to make safer food choices every time."/>
          </div>
          {/* Floating diagonal tags */}
          <div style={{background:'#fce4ec', borderRadius:20, padding:20, position:'relative', height:280, overflow:'hidden'}}>
            {tags.map((t,i)=>{
              const row = Math.floor(i/3)
              const col = i%3
              return (
                <motion.div key={i}
                  initial={{opacity:0, x:20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{delay:i*0.06}}
                  animate={{y:[0, -4, 0]}}
                  style={{
                    position:'absolute',
                    top: 16 + row*52 + col*8,
                    left: col*110 - 20,
                    background:'rgba(255,255,255,0.9)',
                    borderRadius:999,
                    padding:'7px 14px',
                    fontSize:12,
                    fontWeight:500,
                    color: t.good?'#1a1a1a':'#555',
                    display:'flex', alignItems:'center', gap:6,
                    whiteSpace:'nowrap',
                    boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                  <div style={{width:18,height:18,borderRadius:'50%',background:t.good?'#1c3410':'#ef4444',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    {t.good ? <Check size={10} color="white"/> : <X size={10} color="white"/>}
                  </div>
                  {t.label}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Feature 3 - Real Health Outcomes - 2 col with avocado illustration */}
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          style={{background:'white', borderRadius:32, padding:'48px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center'}}>
          <div>
            <h3 style={{fontSize:'clamp(20px,2.5vw,30px)', fontWeight:900, color:OLIVE_DARK, marginBottom:24, fontFamily:"'Playfair Display', serif", lineHeight:1.2}}>Real Health Outcomes for Your Family</h3>
            <CheckItem text="Empowers parents to feel more in control of their family's health."/>
            <CheckItem text="Delivers personalized suggestions for healthier food choices."/>
            <CheckItem text="Promotes long-term well-being through informed, balanced decisions."/>
          </div>
          {/* Avocado family illustration */}
          <motion.div
            animate={{y:[0,-8,0]}}
            transition={{duration:4, repeat:Infinity, ease:'easeInOut'}}
            style={{background:'#fef9ec', borderRadius:24, padding:32, display:'flex', alignItems:'center', justifyContent:'center', minHeight:220}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:100, lineHeight:1, filter:'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'}}>🥑</div>
              <div style={{display:'flex', justifyContent:'center', gap:-4, marginTop:-16}}>
                {['🥑','🥑'].map((e,i)=>(
                  <div key={i} style={{fontSize:60, filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.08))', marginTop:8}}>{e}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function ProtectCarousel() {
  const [current, setCurrent] = useState(0)
  const slides = [
    { img:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80', title:"Protect Your Family From Hidden Toxins" },
    { img:'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=800&q=80', title:"Shop Smarter, Live Healthier" },
    { img:'https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=800&q=80', title:"Know What You're Eating" },
  ]
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c+1)%slides.length), 3500)
    return () => clearInterval(t)
  }, [])
  return (
    <section style={{padding:'96px 24px', background:CREAM}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <div style={{background:OLIVE, borderRadius:32, overflow:'hidden', position:'relative', minHeight:500}}>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.8}}
              style={{position:'absolute', top:0, left:0, right:0, height:320, overflow:'hidden'}}>
              <div style={{position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'70%', height:320, borderRadius:'0 0 50% 50%', overflow:'hidden'}}>
                <img src={slides[current].img} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
            </motion.div>
          </AnimatePresence>
          <div style={{position:'relative', zIndex:2, paddingTop:300, textAlign:'center', padding:'310px 40px 40px'}}>
            <div style={{display:'flex', justifyContent:'center', gap:8, marginBottom:20}}>
              {slides.map((_,i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{width:i===current?24:8, height:8, borderRadius:999, background:i===current?'white':'rgba(255,255,255,0.35)', border:'none', cursor:'pointer', transition:'all 0.3s'}}/>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.h2 key={current} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:0.4}}
                style={{fontSize:'clamp(22px,3vw,36px)', fontWeight:900, color:'white', fontFamily:"'Playfair Display', serif", margin:'0 0 24px', lineHeight:1.2}}>
                {slides[current].title}
              </motion.h2>
            </AnimatePresence>
            <button style={{background:'white', color:OLIVE, border:'none', borderRadius:999, padding:'12px 28px', fontSize:14, fontWeight:500, cursor:'pointer'}}>
              Sign up for Olive today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [imgIdx, setImgIdx] = useState(0)
  const images = [
    'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
    'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  ]
  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i+1)%images.length), 4000)
    return () => clearInterval(t)
  }, [])
  const reviews = [
    { name:'Megan L.', text:"Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry." },
    { name:'Tina B.', text:"Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy." },
    { name:'Lila M.', text:"After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly." },
  ]
  return (
    <section style={{padding:'96px 24px', background:'white'}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center'}}>
        <div style={{borderRadius:32, height:420, overflow:'hidden', position:'relative'}}>
          <AnimatePresence mode="wait">
            <motion.img key={imgIdx} src={images[imgIdx]} alt="mother"
              initial={{opacity:0,scale:1.05}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.97}}
              transition={{duration:0.8, ease:'easeInOut'}}
              style={{width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0, filter:'grayscale(20%)'}}/>
          </AnimatePresence>
        </div>
        <div>
          <h2 style={{fontSize:'clamp(28px,4vw,48px)', fontWeight:900, color:OLIVE_DARK, fontFamily:"'Playfair Display', serif", margin:'0 0 8px'}}>
            Real Mothers<br/>Real Results
          </h2>
          <a href="#" style={{fontSize:13, color:OLIVE, textDecoration:'none', display:'flex', alignItems:'center', gap:4, marginBottom:24}}>
            Read all 3,147+ reviews <ArrowRight size={13}/>
          </a>
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            {reviews.map((r,i) => (
              <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                style={{background:'white', border:'1px solid #f0f0f0', borderRadius:16, padding:16, boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
                <p style={{fontSize:13, color:'#555', margin:'0 0 8px', lineHeight:1.6}}>"{r.text}"</p>
                <p style={{fontWeight:600, fontSize:13, color:OLIVE, margin:'0 0 4px'}}>{r.name}</p>
                <div style={{display:'flex', gap:2}}>{[...Array(5)].map((_,k)=><Star key={k} size={12} style={{fill:'#facc15', color:'#facc15'}}/>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── COMPARISON ───────────────────────────────────────────────────────────────
function Comparison() {
  const rows = [
    { f:'Detailed Product Breakdown', o:true, y:true, b:true },
    { f:'Comprehensive Water Data', o:true, y:false, b:false },
    { f:'Seed Oil Free Dining Map', o:true, y:false, b:false },
    { f:'Seed Oil Flagging', o:true, y:false, b:true },
    { f:'Certified Lab-Testing Data', o:true, y:false, b:false },
  ]
  return (
    <section style={{padding:'96px 24px', background:CREAM}}>
      <div style={{maxWidth:900, margin:'0 auto', background:OLIVE, borderRadius:32, padding:48, color:'white'}}>
        <h2 style={{fontSize:'clamp(24px,3vw,40px)', fontWeight:900, textAlign:'center', fontFamily:"'Playfair Display', serif", margin:'0 0 24px'}}>
          Olive Food Scanner App vs. The Rest
        </h2>
        <div style={{display:'flex', justifyContent:'center', marginBottom:40}}>
          <button style={{background:'white', color:OLIVE, border:'none', borderRadius:999, padding:'10px 24px', fontSize:14, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:8}}>
            <Apple size={15}/> Download for iOS
          </button>
        </div>
        {/* Header row */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 80px 80px 80px', gap:8, marginBottom:16, textAlign:'center'}}>
          <div/>
          {['🫒','🥕','🅱️'].map((e,i)=><div key={i} style={{fontSize:28}}>{e}</div>)}
        </div>
        {rows.map((r,i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'1fr 80px 80px 80px', gap:8, alignItems:'center', padding:'14px 0', borderTop:'1px solid rgba(255,255,255,0.15)', textAlign:'center'}}>
            <p style={{fontSize:14, color:'rgba(255,255,255,0.9)', textAlign:'left', margin:0}}>{r.f}</p>
            {[r.o,r.y,r.b].map((v,j)=>(
              <div key={j} style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:28, height:28, borderRadius:'50%', background:v?'#8bc34a':'#ef4444', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  {v ? <Check size={14} color="white"/> : <X size={14} color="white"/>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section style={{padding:'96px 24px', background:'white'}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <h2 style={{fontSize:'clamp(32px,4vw,52px)', fontWeight:900, textAlign:'center', color:OLIVE_DARK, fontFamily:"'Playfair Display', serif", margin:'0 0 48px'}}>
          Healthy Choices<br/>Honest Pricing
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
          {/* Monthly */}
          <motion.div whileHover={{scale:1.02}} style={{background:OLIVE_BG, borderRadius:28, padding:36}}>
            <p style={{fontSize:13, color:'#888', margin:'0 0 8px'}}>Monthly</p>
            <div style={{display:'flex', alignItems:'baseline', gap:8, marginBottom:24}}>
              <span style={{fontSize:42, fontWeight:900, color:OLIVE_DARK}}>$14.99</span>
              <span style={{fontSize:13, color:'#888'}}>/monthly</span>
            </div>
            {['Unlimited Scans','Unlimited Database Searches','Comprehensive Lab-Testing Data'].map((f,i)=>(
              <CheckItem key={i} text={f}/>
            ))}
            <button style={{width:'100%', padding:'12px 0', background:OLIVE, color:'white', border:'none', borderRadius:999, fontSize:14, fontWeight:500, cursor:'pointer', marginTop:24}}>Subscribe</button>
          </motion.div>
          {/* Yearly */}
          <motion.div whileHover={{scale:1.02}} style={{background:OLIVE, borderRadius:28, padding:36}}>
            <p style={{fontSize:13, color:'rgba(255,255,255,0.6)', margin:'0 0 8px'}}>Yearly</p>
            <div style={{display:'flex', alignItems:'baseline', gap:8, marginBottom:24}}>
              <span style={{fontSize:42, fontWeight:900, color:'white'}}>$69.99</span>
              <span style={{fontSize:13, color:'rgba(255,255,255,0.5)', textDecoration:'line-through'}}>$179.88</span>
              <span style={{fontSize:13, color:'rgba(255,255,255,0.6)'}}>/yearly</span>
            </div>
            {['Everything in monthly plan','Get 7 months free','60% Savings'].map((f,i)=>(
              <CheckItem key={i} text={f} dark/>
            ))}
            <button style={{width:'100%', padding:'12px 0', background:'white', color:OLIVE, border:'none', borderRadius:999, fontSize:14, fontWeight:500, cursor:'pointer', marginTop:24}}>Subscribe</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── INDEPENDENT ──────────────────────────────────────────────────────────────
function Independent() {
  return (
    <section style={{padding:'80px 24px', background:'white'}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <p style={{fontSize:'clamp(36px,5vw,60px)', fontWeight:900, color:'#f472b6', fontFamily:"'Playfair Display', serif", margin:0, lineHeight:1.1}}>100% Independent.</p>
        <p style={{fontSize:'clamp(36px,5vw,60px)', fontWeight:900, color:'#f472b6', fontFamily:"'Playfair Display', serif", margin:'0 0 20px', lineHeight:1.1}}>Always.</p>
        <p style={{fontSize:14, color:'#666', maxWidth:480, lineHeight:1.7}}>
          We <span style={{color:OLIVE, fontWeight:600}}>never monetize</span> through brand deals, affiliate links, or ads — so <span style={{color:OLIVE, fontWeight:600}}>you can trust</span> our <span style={{color:'#f97316', fontWeight:600}}>recommendations</span> are always aligned with our users.
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number|null>(null)
  const faqs = [
    { q:"What is the Food Scanner App and how does it work?", a:"Olive's Food Scanner App lets you scan any product barcode to instantly get a health score, ingredient breakdown, and expert-backed recommendations." },
    { q:"How does Olive ensure the accuracy of the Food Scanner App results?", a:"Our data is sourced from certified labs, registered holistic health experts, and an extensive, regularly updated food database." },
    { q:"Which products can I scan with the Food Scanner App?", a:"You can scan virtually any packaged food product available in grocery stores across the US and many international markets." },
    { q:"Can the Food Scanner App be customized to my family's dietary needs?", a:"Yes! You can set dietary preferences and restrictions for each family member, and Olive will tailor recommendations accordingly." },
    { q:"Is my data secure when I use the Olive?", a:"Absolutely. We use industry-standard encryption and never sell your personal data to third parties." },
    { q:"When will the Android version of the Food Scanner App be available?", a:"We are actively working on the Android version and plan to launch it soon. Sign up to be notified!" },
  ]
  return (
    <section style={{padding:'96px 24px', background:'#fdf8f0'}}>
      <div style={{maxWidth:720, margin:'0 auto'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:16, marginBottom:16}}>
          <h2 style={{fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:OLIVE_DARK, fontFamily:"'Playfair Display', serif", textAlign:'center', margin:0}}>
            Frequently Asked Questions by Parents
          </h2>
          <span style={{fontSize:36}}>🥑</span>
        </div>
        <div style={{display:'flex', justifyContent:'center', marginBottom:40}}>
          <button style={{background:OLIVE, color:'white', border:'none', borderRadius:999, padding:'10px 24px', fontSize:14, fontWeight:500, cursor:'pointer', display:'flex', alignItems:'center', gap:8}}>
            <Apple size={15}/> Download for iOS
          </button>
        </div>
        {faqs.map((f,i) => (
          <div key={i} style={{borderBottom:'1px solid #e5e5e5'}}>
            <button onClick={() => setOpen(open===i?null:i)}
              style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 0', background:'none', border:'none', cursor:'pointer', textAlign:'left'}}>
              <span style={{fontSize:14, fontWeight:500, color:'#333'}}>{f.q}</span>
              {open===i ? <Minus size={16} color={OLIVE}/> : <Plus size={16} color={OLIVE}/>}
            </button>
            <AnimatePresence>
              {open===i && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden'}}>
                  <p style={{fontSize:13, color:'#666', paddingBottom:18, lineHeight:1.7, margin:0}}>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{padding:'96px 24px', background:CREAM}}>
      <div style={{maxWidth:1100, margin:'0 auto', borderRadius:32, overflow:'hidden', position:'relative', minHeight:360}}>
        <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200&q=80" alt=""
          style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
        <div style={{position:'absolute', inset:0, background:'rgba(28,52,16,0.82)'}}/>
        <div style={{position:'relative', zIndex:2, padding:60, display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center'}}>
          <div>
            <h2 style={{fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'white', fontFamily:"'Playfair Display', serif", margin:'0 0 24px', lineHeight:1.2}}>
              Keep your family safe with Olive
            </h2>
            {['Effortless food scanning','Peace of mind for parents','Healthy product recommendations'].map((t,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
                <div style={{width:22, height:22, borderRadius:'50%', background:'#8bc34a', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                  <Check size={13} color="white"/>
                </div>
                <span style={{fontSize:15, color:'rgba(255,255,255,0.9)'}}>{t}</span>
              </motion.div>
            ))}
            <button style={{marginTop:24, background:'white', color:OLIVE_DARK, border:'none', borderRadius:999, padding:'14px 28px', fontSize:14, fontWeight:600, cursor:'pointer', display:'flex', alignItems:'center', gap:8}}>
              <Apple size={16}/> Download for iOS
            </button>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            {[
              { icon:'🛡️', text:'No brand deals or affiliate links — ever' },
              { icon:'🔬', text:'Certified lab-tested ingredient data' },
              { icon:'👨‍👩‍👧', text:'Trusted by 50,000+ healthy families' },
            ].map((item,i)=>(
              <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                style={{background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:16, padding:'14px 18px', display:'flex', alignItems:'center', gap:12, border:'1px solid rgba(255,255,255,0.15)'}}>
                <span style={{fontSize:24}}>{item.icon}</span>
                <span style={{fontSize:14, color:'rgba(255,255,255,0.9)'}}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{background:OLIVE, padding:'48px 24px', borderRadius:'24px 24px 0 0'}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40}}>
        <div>
          <p style={{fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.5)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>Explore More Olive Tools</p>
          {['Explore Foods','Allergy Scanner App','Gluten Free Scanner','Dairy Free App','Food Ingredient Checker'].map(l=>(
            <a key={l} href="#" style={{display:'block', color:'rgba(255,255,255,0.8)', fontSize:13, textDecoration:'none', marginBottom:8}}>{l}</a>
          ))}
        </div>
        <div>
          <p style={{fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.5)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>About</p>
          {['Blog','Email us','Contact us'].map(l=>(
            <a key={l} href="#" style={{display:'block', color:'rgba(255,255,255,0.8)', fontSize:13, textDecoration:'none', marginBottom:8}}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
            <span style={{fontSize:22}}>🫒</span>
            <span style={{fontSize:18, fontWeight:800, color:'white', fontFamily:"'Playfair Display', serif"}}>live</span>
          </div>
          <p style={{fontSize:13, color:'rgba(255,255,255,0.6)', marginBottom:16, lineHeight:1.6}}>Get the latest lab testing data sent directly to your inbox.</p>
          <div style={{display:'flex', gap:8}}>
            <input type="email" placeholder="Enter Email address" style={{flex:1, background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:999, padding:'10px 16px', fontSize:13, color:'white', outline:'none'}}/>
            <button style={{background:'white', color:OLIVE, border:'none', borderRadius:999, padding:'10px 18px', fontSize:13, fontWeight:500, cursor:'pointer', whiteSpace:'nowrap'}}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(pct)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{position:'fixed', top:0, left:0, right:0, height:3, zIndex:200, background:'rgba(0,0,0,0.05)'}}>
      <motion.div style={{height:'100%', background:'linear-gradient(90deg, #2d4a1e, #8bc34a)', width:`${progress}%`}} transition={{ease:'linear'}}/>
    </div>
  )
}

function StatsSection() {
  const stats = [
    { num:'50K+', label:'Healthy Families' },
    { num:'1M+', label:'Products Scanned' },
    { num:'98%', label:'Accuracy Rate' },
    { num:'4.9★', label:'App Store Rating' },
  ]
  return (
    <section style={{padding:'64px 24px', background:OLIVE_DARK}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, textAlign:'center'}}>
        {stats.map((s,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
            <p style={{fontSize:'clamp(28px,4vw,48px)', fontWeight:900, color:'white', margin:'0 0 6px', fontFamily:"'Playfair Display', serif"}}>{s.num}</p>
            <p style={{fontSize:13, color:'rgba(255,255,255,0.6)', margin:0, letterSpacing:1, textTransform:'uppercase'}}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div style={{minHeight:'100vh'}}>
      <ScrollProgress/>
      <Navbar/>
      <Hero/>
      <StatsSection/>
      <HowItWorks/>
      <Features/>
      <Testimonials/>
      <ProtectCarousel/>
      <Comparison/>
      <Pricing/>
      <Independent/>
      <FAQ/>
      <CTABanner/>
      <Footer/>
    </div>
  )
}
