"use client";

import { useState } from "react";
import {
  LayoutDashboard, Users, CarFront, WalletCards, CreditCard,
  BarChart3, Settings, Bell, Search, Menu, X, ArrowUpRight,
  ArrowDownRight, CircleDollarSign, Truck, UserRound, ChevronRight
} from "lucide-react";

const vehicles = [
  { name: "Toyota Corolla", year: 2020, driver: "David Ade", progress: 73, collected: "₦11.68m", target: "₦16m", status: "Active" },
  { name: "Toyota Camry", year: 2019, driver: "Samuel Obi", progress: 52, collected: "₦8.32m", target: "₦16m", status: "Active" },
  { name: "Honda Accord", year: 2021, driver: "Michael James", progress: 34, collected: "₦5.44m", target: "₦16m", status: "Active" },
];

const investors = [
  { name: "Adebayo Johnson", amount: "₦2,000,000", share: "20%", return: "₦3,200,000", status: "Active" },
  { name: "Grace Williams", amount: "₦2,000,000", share: "20%", return: "₦3,200,000", status: "Active" },
  { name: "Emeka Okafor", amount: "₦2,000,000", share: "20%", return: "₦3,200,000", status: "Active" },
  { name: "Fatima Bello", amount: "₦2,000,000", share: "20%", return: "₦3,200,000", status: "Active" },
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const nav = [
    ["Dashboard", LayoutDashboard],
    ["Investors", Users],
    ["Vehicles", CarFront],
    ["Drivers", UserRound],
    ["Investments", WalletCards],
    ["Payments", CreditCard],
    ["Reports", BarChart3],
    ["Settings", Settings],
  ] as const;

  return (
    <main className="app">
      <aside className={`sidebar ${open ? "show" : ""}`}>
        <div className="brand">
          <div className="logo">C</div>
          <div><strong>CarVest</strong><span>Investment Platform</span></div>
          <button className="close" onClick={() => setOpen(false)}><X size={20}/></button>
        </div>
        <nav>
          {nav.map(([label, Icon]) => (
            <button key={label} className={active === label ? "nav active" : "nav"} onClick={() => {setActive(label);setOpen(false)}}>
              <Icon size={19}/><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="side-card">
          <div className="mini-icon"><Truck size={18}/></div>
          <strong>Demo mode</strong>
          <p>This prototype uses sample vehicle and investor data.</p>
        </div>
      </aside>

      <section className="content">
        <header>
          <button className="menu" onClick={() => setOpen(true)}><Menu size={22}/></button>
          <div className="search"><Search size={18}/><input placeholder="Search investors, vehicles..." /></div>
          <div className="header-right"><Bell size={20}/><div className="avatar">AO</div><div className="admin">Admin<span>Administrator</span></div></div>
        </header>

        <div className="page">
          <div className="heading">
            <div><p className="eyebrow">OVERVIEW</p><h1>{active}</h1><p className="muted">Monitor your vehicle investment portfolio.</p></div>
            <button className="primary">+ Add vehicle</button>
          </div>

          <div className="stats">
            <Stat title="Total Investment" value="₦10.0m" change="+12.5%" up icon={<CircleDollarSign/>}/>
            <Stat title="Active Vehicles" value="5" change="+2 this month" up icon={<CarFront/>}/>
            <Stat title="Collected Payments" value="₦25.4m" change="+8.2%" up icon={<CreditCard/>}/>
            <Stat title="Outstanding" value="₦14.6m" change="-4.1%" icon={<WalletCards/>}/>
          </div>

          <div className="grid-main">
            <section className="panel large">
              <div className="panel-head"><div><h2>Vehicle performance</h2><p>Repayment progress by vehicle</p></div><button className="link">View all <ChevronRight size={16}/></button></div>
              <div className="vehicle-list">
                {vehicles.map(v => <div className="vehicle" key={v.name}>
                  <div className="car-icon"><CarFront size={22}/></div>
                  <div className="vehicle-name"><strong>{v.name}</strong><span>{v.year} · {v.driver}</span></div>
                  <div className="bar-wrap"><div className="bar"><i style={{width: `${v.progress}%`}}/></div><span>{v.progress}%</span></div>
                  <div className="money"><strong>{v.collected}</strong><span>of {v.target}</span></div>
                  <span className="badge">{v.status}</span>
                </div>)}
              </div>
            </section>

            <section className="panel">
              <div className="panel-head"><div><h2>Cash flow</h2><p>Last 6 months</p></div></div>
              <div className="chart">
                {[45,62,50,78,68,92].map((h,i)=><div className="col" key={i}><div style={{height:`${h}%`}}/><span>{["Apr","May","Jun","Jul","Aug","Sep"][i]}</span></div>)}
              </div>
              <div className="chart-total"><span>Total collected</span><strong>₦25.4m</strong></div>
            </section>
          </div>

          <section className="panel">
            <div className="panel-head"><div><h2>Recent investors</h2><p>Latest investment activity</p></div><button className="link">View investors <ChevronRight size={16}/></button></div>
            <div className="table">
              <div className="tr th"><span>Investor</span><span>Investment</span><span>Share</span><span>Expected return</span><span>Status</span></div>
              {investors.map(i=><div className="tr" key={i.name}><span className="person"><span className="person-avatar">{i.name.split(" ").map(x=>x[0]).join("")}</span><strong>{i.name}</strong></span><span>{i.amount}</span><span>{i.share}</span><span>{i.return}</span><span><em className="badge">{i.status}</em></span></div>)}
            </div>
          </section>

          <p className="footer-note">CarVest prototype · Demo data only · Not a live investment service</p>
        </div>
      </section>
    </main>
  );
}

function Stat({title,value,change,up,icon}:{title:string,value:string,change:string,up?:boolean,icon:React.ReactNode}) {
  return <div className="stat"><div className="stat-top"><span>{title}</span><div className="stat-icon">{icon}</div></div><strong>{value}</strong><small className={up ? "positive" : "negative"}>{up ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}</small></div>
}