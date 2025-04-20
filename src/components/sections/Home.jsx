import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-10"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
         <div className="relative flex flex-col items-center space-y-4">
            <img
              src="/images/forms.svg"
              alt="Decoración"
              className="absolute w-100 md:w-1206 h-auto -z-10 opacity-50"
            />
          
          </div>
           <div className="relative flex flex-col items-center space-y-4">
           
            <img
              src="/images/ayelen.svg"
              alt="Aye"
               className="w-40 h-40 md:w-60 md:h-60"
            />
          </div>

          <div className="text-center md:text-left z-10 max-w-xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Hola, Soy Ayelén Corrotea
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Profesional responsable, proactiva y orientada a resultados,
              comprometida con el conocimiento y la entrega de soluciones de calidad
              que cumplen con los objetivos del proyecto. <br />
              Desarrollo front-end de aplicaciones móviles para plataformas Android e iOS,
              así como la creación de interfaces web complejas y la integración efectiva
              con sistemas back-end.
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                className="relative px-8 py-3 bg-black text-white font-semibold rounded-[30px]
                border-2 border-purple-500 hover:border-purple-400 transition-all duration-300
                hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)]
                active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
              >
                <span className="flex items-center space-x-2">
                  <span>Contáctame</span>
                </span>
                <span
                  className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};



// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//      <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//           <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//             Hola, Soy Ayelén Corrotea
//           </h1>

//           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
//              Profesional responsable, proactiva y orientada a resultados,
//             comprometida con el conocimiento y la entrega de soluciones de calidad
//             que cumplen con los objetivos del proyecto.
//             <br></br>
//             Desarrollo front-end de aplicaciones móviles para plataformas Android e iOS,
//             así como la creación de interfaces web complejas y la integración efectiva con sistemas
//             back-end.
//           </p>
//           <div className="flex justify-center space-x-4">
           
//             <button
//               class="relative px-8 py-3 bg-black text-white font-semibold rounded-[30px]
//               border-2 border-purple-500 hover:border-purple-400 transition-all duration-300
//               hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)]
//               active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
//                 href="#contact" >
//               <span class="flex items-center space-x-2">
              
                
//                 <span>Contáctame</span>
//               </span>
//               <span
//                 class="absolute inset-0 rounded-[30px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
//               ></span>
//             </button>

//           </div>
//           </div>
           
//       </RevealOnScroll>
//     </section>
//   );
// };