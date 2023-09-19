import React from "react";
import { ComA } from "./components/ComA";
import { ComB } from "./components/ComB";

import "./components/common.css";
function App() {
  return (
    <div className="main">
      <h1>Periodic table</h1>
      <div className="first">
        <ComA id="c1" text="H" text2="Hydrogen" />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComA text="He" text2="Helium" />
      </div>
      <div className="second">
        <ComA id="c2" text="Li" text2="Lithium" />
        <ComA text="Be" text2="Beryllium" />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComA text="B" text2="Boron" />
        <ComA text="C" text2="Carbon" />
        <ComA text="N" text2="Nitrogen" />
        <ComA text="O" text2="Oxygen" />
        <ComA text="F" text2="Fluorine" />
        <ComA text="Ne" text2="Neon" />
      </div>
      <div className="second">
        <ComA text="Na" text2="Sodium" />
        <ComA text="Mg" text2="Magens.." />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComB />
        <ComA text="Al" text2="Aluminium" />
        <ComA text="Si" text2="Silicon" />
        <ComA text="P" text2="Phosph.." />
        <ComA text="S" text2="Sulfur" />
        <ComA text="Cl" text2="Chlorine" />
        <ComA text="Ar" text2="Argon" />
      </div>
      <div className="second">
        <ComA text="K" text2="Potassium" />
        <ComA text="Ca" text2="Calcium" />
        <ComA text="Sc" text2="Scandium" />
        <ComA text="Ti" text2="Titanium" />
        <ComA text="V" text2="Vanaduim" />
        <ComA text="Cr" text2="Chromium" />
        <ComA text="Mn" text2="Mangan..." />
        <ComA text="Fe" text2="Iron" />
        <ComA text="Co" text2="Cobalt" />
        <ComA text="Ni" text2="Nickel" />
        <ComA text="Cu" text2="Copper" />
        <ComA text="Zn" text2="Zinc" />
        <ComA text="Ga" text2="Gallium" />
        <ComA text="Ge" text2="Germani.." />
        <ComA text="As" text2="Arsenic" />
        <ComA text="Se" text2="Selenium" />
        <ComA text="Br" text2="Bromine" />
        <ComA text="Kr" text2="Bromine" />
      </div>
      <div className="second">
        <ComA text="Rb" text2="Rubiddium" />
        <ComA text="Sr" text2="Stronituim" />
        <ComA text="Y" text2="Ytruim" />
        <ComA text="Zr" text2="Ziconuim" />
        <ComA text="Nb" text2="Niobium" />
        <ComA text="Mo" text2="Molybde.." />
        <ComA text="Tc" text2="Techneti.." />
        <ComA text="Ru" text2="Ruthenium" />
        <ComA text="Rh" text2="Rhodium" />
        <ComA text="Pd" text2="Palladium" />
        <ComA text="Ag" text2="Silver" />
        <ComA text="Cd" text2="Cadimium" />
        <ComA text="In" text2="Indium" />
        <ComA text="Sn" text2="Tin" />
        <ComA text="Sb" text2="Antimony" />
        <ComA text="Te" text2="Tellumium" />
        <ComA text="I" text2="Iodine" />
        <ComA text="Xe" text2="Xenon" />
      </div>
      <div className="second">
        <ComA text="Cs" text2="Caesium" />
        <ComA text="Ba" text2="Barium" />
        <ComA text="La" text2="Lathan.." />
        <ComA text="Hf" text2="Hafnium" />
        <ComA text="Ta" text2="Tantium" />
        <ComA text="W" text2="Tungsten" />
        <ComA text="Re" text2="Rhenium" />
        <ComA text="Os" text2="Osmium" />
        <ComA text="Ir" text2="Iridium" />
        <ComA text="Pt" text2="Platinum" />
        <ComA text="Au" text2="Gold" />
        <ComA text="Hg" text2="Mercury" />
        <ComA text="Ti" text2="Thallium" />
        <ComA text="Pb" text2="Lead" />
        <ComA text="Bi" text2="Bismuth" />
        <ComA text="Po" text2="Polonium" />
        <ComA text="At" text2="Astatine" />
        <ComA text="Rn" text2="Redon" />
      </div>
      <div className="second">
        <ComA text="Fr" text2="Froncium" />
        <ComA text="Ra" text2="Radium" />
        <ComA text="Ac" text2="Actinium" />
        <ComA text="Rf" text2="Ruthe.." />
        <ComA text="Db" text2="Dubnium" />
        <ComA text="Sg" text2="Seaborg" />
        <ComA text="Bh" text2="Bogrium" />
        <ComA text="Hs" text2="Hassium" />
        <ComA text="Mt" text2="Meitnre.." />
        <ComA text="Ds" text2="Darmsta.." />
        <ComA text="Rg" text2="Roentge.." />
        <ComA text="Cn" text2="Coperni.." />
        <ComA text="Nh" text2="Nihonium" />
        <ComA text="Fl" text2="Flerovium" />
        <ComA text="Mc" text2="Moscovi..." />
        <ComA text="Lv" text2="Livermor..." />
        <ComA text="Ts" text2="Tenness.." />
        <ComA text="Og" text2="Oganes..." />
      </div>
    </div>
  );
}

export default App;
