import React from "react";
import {
  image2,
  image13,
  image16,
  image17,
  image18,
  image25,
} from "../../constants/images";

const Services = () => {
  return (
    <section id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-roboto">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Shërbimet tona
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-900">
            Në qendër të angazhimit tonë profesional qëndron pasioni dhe
            dedikimi për të ndihmuar të tjerët të arrijnë mirëqenien e plotë.
            Jemi të përkushtuar për të ofruar jo vetëm trajtime, por edhe
            mbështetje, këshilla për një jete më të shëndetshme dhe të lumtur.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <li>
            <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img src={image17} class="w-full object-cover" alt="" />
              </div>
              <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div class="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 class="text-xl font-medium text-white">Terapia me kupa</h3>
                <p class="my-2 text-white text-xs text-opacity-80">
                  Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave.
                  Duke aplikuar pajisjeve përkatëse në zona të veçanta, nxitet
                  rritja e presionit të gjakut, relaksimi i muskujve dhe
                  lehtësimi i dhimbjes.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img src={image25} class="w-full object-cover" alt="" />
              </div>
              <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div class="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 class="text-xl font-medium text-white">Kinesiotaping</h3>
                <p class="my-2 text-white text-xs text-opacity-80">
                  Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave.
                  Duke aplikuar pajisjeve përkatëse në zona të veçanta, nxitet
                  rritja e presionit të gjakut, relaksimi i muskujve dhe
                  lehtësimi i dhimbjes.
                </p>
              </div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div class="relative mx-auto overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img src={image18} class="w-full object-cover" alt="" />
              </div>
              <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div class="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 class="text-xl font-medium text-white">
                  Riedukim Postural
                </h3>
                <p class="my-2 text-white text-xs text-opacity-80">
                  Ky proces rehabilitues përdor një kombinim të qëndrimeve të
                  kontrolluara, të cilat ndihmojnë në rregullimin e disbalancave
                  të trupit. Përmes aktiviteteve të udhëzuara, që përfshijnë
                  ushtrime aktive dhe teknika relaksuese pasive, pacientët
                  marrin ndihmën e nevojshme për të luftuar dhimbjet muskulare,
                  reduktuar spazmat dhe kontraktimet, si dhe për të përmirësuar
                  funksionimin e artikulacioneve dhe lëvizshmërinë e shtyllës
                  kurrizore.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img src={image13} class="w-full object-cover" alt="" />
              </div>
              <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div class="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 class="text-xl font-medium text-white">
                  Terapia stretching
                </h3>
                <p class="my-2 text-white text-xs text-opacity-80">
                  Përmirësim të lëvizshmërisë dhe fleksibilitetit.Reduktim të
                  dëmtimeve të tendinave, ose siç njihen ndryshe “ngërçet”.
                  Ndihmojnë në performancën e përgjithshme të trupit në
                  përditshmëri.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img src={image2} class="w-full object-cover" alt="" />
              </div>
              <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div class="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 class="text-xl font-medium text-white">Terapia Bobath</h3>
                <p class="my-2 text-white text-xs text-opacity-80">
                  Qëllimi i aplikimit të konceptit Bobath është të promovojë
                  përmirësime në funksionin motorik.Kjo bëhet përmes aftësive
                  specifike të trajtimit të pacientit për të udhëhequr pacientët
                  gjatë fillimit dhe përfundimit të detyrave të synuara, duke
                  promovuar aktivitetin e pacientit.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
