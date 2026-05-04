import{u as r,d as l,j as e,L as s}from"./index-uKIx2_vu.js";function c(){const{wishlist:t,removeFromWishlist:a}=r(),{addToCart:i}=l();return t.length===0?e.jsxs("div",{className:`min-h-screen flex flex-col items-center justify-center text-center 
      bg-white text-black dark:bg-black dark:text-white`,children:[e.jsx("h1",{className:"text-3xl neon-text-pink font-bold mb-4",children:"💖 Your Wishlist is Empty"}),e.jsx(s,{to:"/",className:"neon-text-cyan hover:underline",children:"← Browse gadgets"})]}):e.jsxs("div",{className:`
      min-h-screen 
      bg-white text-black 
      dark:bg-black dark:text-white 
      max-w-5xl mx-auto px-6 py-10
    `,children:[e.jsxs("h1",{className:"text-3xl font-bold neon-text-pink mb-6",children:["💖 My Wishlist (",t.length,")"]}),e.jsx("div",{className:"space-y-4",children:t.map(n=>e.jsxs("div",{className:`
              flex items-center gap-4 
              bg-gray-100 dark:bg-zinc-900 
              border border-gray-300 dark:border-neon-pink/30 
              rounded-xl p-4 
              hover:shadow-neon-pink transition
            `,children:[e.jsx("img",{src:n.thumbnail,alt:n.title,className:"w-24 h-24 object-contain bg-white dark:bg-black rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(s,{to:`/product/${n.id}`,className:"text-lg font-semibold text-black dark:text-white hover:neon-text-cyan",children:n.title}),e.jsx("p",{className:"text-gray-600 dark:text-zinc-400 text-sm capitalize",children:n.category}),e.jsxs("p",{className:"neon-text-cyan font-bold",children:["$",n.price]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:()=>i(n),className:`
                  px-4 py-2 rounded 
                  bg-neon-cyan text-black 
                  text-sm font-bold 
                  hover:shadow-neon-cyan transition
                `,children:"Add to Cart"}),e.jsx("button",{onClick:()=>a(n.id),className:`
                  px-4 py-2 rounded 
                  border border-neon-pink 
                  text-neon-pink 
                  text-sm 
                  hover:shadow-neon-pink transition
                `,children:"Remove"})]})]},n.id))})]})}export{c as default};
