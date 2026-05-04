import{d,e as o,j as e,L as x}from"./index-BpsaMkDd.js";function h(){const{cart:a,removeFromCart:r,updateQuantity:s,totalPrice:c,totalItems:l}=d(),{showToast:n}=o();return a.length===0?e.jsxs("div",{className:`
        min-h-screen flex flex-col items-center justify-center text-center
        bg-white text-black dark:bg-black dark:text-white
      `,children:[e.jsx("h2",{className:"text-2xl neon-text-purple",children:"🛒 Your cart is empty"}),e.jsx(x,{to:"/",className:"inline-block mt-6 px-6 py-2 rounded-full border border-neon-cyan text-neon-cyan",children:"Shop Now"})]}):e.jsxs("div",{className:`
      min-h-screen 
      bg-white text-black 
      dark:bg-black dark:text-white 
      max-w-4xl mx-auto px-6 py-10
    `,children:[e.jsx("h1",{className:"text-3xl font-bold neon-text-cyan mb-6",children:"Your Cart"}),e.jsxs("p",{className:"text-gray-600 dark:text-zinc-400 mb-4",children:["Total Items: ",e.jsx("span",{className:"text-black dark:text-white",children:l})]}),e.jsx("div",{className:"space-y-4",children:a.map(t=>e.jsxs("div",{className:`
              flex flex-col sm:flex-row items-center gap-4
              bg-gray-100 dark:bg-zinc-900
              border border-gray-300 dark:border-neon-purple/30
              rounded-lg p-4
            `,children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-24 h-24 object-contain bg-white dark:bg-black rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-black dark:text-white",children:t.title}),e.jsxs("p",{className:"neon-text-pink",children:["$",t.price]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-zinc-400",children:["Subtotal: $",(t.price*t.quantity).toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>{s(t.id,t.quantity-1),n("🔽 Quantity updated")},className:"px-3 py-1 border border-neon-cyan text-neon-cyan rounded",children:"−"}),e.jsx("span",{className:"text-black dark:text-white w-8 text-center",children:t.quantity}),e.jsx("button",{onClick:()=>{s(t.id,t.quantity+1),n("🔼 Quantity increased")},className:"px-3 py-1 border border-neon-cyan text-neon-cyan rounded",children:"+"})]}),e.jsx("button",{onClick:()=>{r(t.id),n("❌ Item removed")},className:"px-3 py-1 text-red-500 border border-red-500 rounded",children:"Remove"})]},t.id))}),e.jsxs("div",{className:"mt-8 text-right",children:[e.jsxs("h2",{className:"text-2xl neon-text-cyan",children:["Total: ",e.jsxs("span",{className:"neon-text-pink",children:["$",c.toFixed(2)]})]}),e.jsx("button",{onClick:()=>n("✅ Order placed!"),className:"mt-4 px-6 py-3 rounded-full bg-neon-cyan text-black font-bold",children:"Checkout"})]})]})}export{h as default};
