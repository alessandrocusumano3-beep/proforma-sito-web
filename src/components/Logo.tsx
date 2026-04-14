export default function Logo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      
      <div style={{ display: "flex", gap: 10 }}>
        <img src="/assets/pf-p.png" style={{ height: 60 }} />
        <img src="/assets/pf-f.png" style={{ height: 60 }} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <img src="/assets/p.png" style={{ height: 50 }} />
        <img src="/assets/r.png" style={{ height: 50 }} />
        <img src="/assets/o.png" style={{ height: 50 }} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <img src="/assets/f.png" style={{ height: 50 }} />
        <img src="/assets/o-silver.png" style={{ height: 50 }} />
        <img src="/assets/r-silver.png" style={{ height: 50 }} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <img src="/assets/m.png" style={{ height: 50 }} />
        <img src="/assets/a.png" style={{ height: 50 }} />
      </div>

    </div>
  )
}