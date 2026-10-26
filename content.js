// Chapter outline (generic topic titles) and short ORIGINAL study-note stubs.
// Format: [id, title, isSub, one-line original summary]
const OUTLINE = [
 ["1","1 Engine Types and Their Operation",false,"An overview of how reciprocating internal combustion engines are classified and how their basic cycles work."],
 ["1.1","1.1 Introduction and Historical Perspective",true,"Internal combustion engines grew from early gas engines into the dominant power source for road transport, small machinery, and much of marine and rail propulsion."],
 ["1.2","1.2 Engine Classifications",true,"Engines can be grouped by ignition method (spark or compression), working cycle (two- or four-stroke), cylinder arrangement, cooling method, and how air is supplied."],
 ["1.3","1.3 Engine Operating Cycles",true,"The four-stroke cycle uses separate intake, compression, expansion, and exhaust strokes, while the two-stroke cycle overlaps gas exchange with the end of expansion and start of compression."],
 ["1.4","1.4 Engine Components",true,"Key parts include the block, cylinder head, piston and rings, connecting rod, crankshaft, camshaft, and valvetrain, each with its own design trade-offs."],
 ["1.5","1.5 Spark-Ignition Engine Operation",true,"A premixed fuel–air charge is ignited by a spark; load is usually controlled by throttling the intake."],
 ["1.6","1.6 Compression-Ignition Engine Operation",true,"Fuel is injected into hot compressed air and ignites on its own; load is controlled by the amount of fuel injected."],
 ["2","2 Engine Design and Operating Parameters",false,"Core geometric and performance quantities used to describe and compare engines."],
 ["2.1","2.1 Important Engine Characteristics",true,"Designers care about power, torque, efficiency, emissions, size, weight, cost, and durability across the operating range."],
 ["2.2","2.2 Geometrical Properties of Reciprocating Engines",true,"Bore, stroke, connecting-rod length, and clearance volume set displacement, compression ratio, and piston motion."],
 ["2.3","2.3 Brake Torque and Power",true,"Torque is measured with a dynamometer; power follows from torque multiplied by angular speed."],
 ["2.4","2.4 Indicated Work per Cycle",true,"Integrating cylinder pressure over volume gives the work the gas does on the piston each cycle."],
 ["2.5","2.5 Mechanical Efficiency",true,"The ratio of brake to indicated output captures friction and accessory losses."],
 ["2.6","2.6 Mean Effective Pressure",true,"Work per cycle divided by displacement gives a size-independent measure of how hard an engine is working."],
 ["2.7","2.7 Specific Fuel Consumption and Efficiency",true,"Fuel mass flow per unit power output is the everyday measure of how economically an engine converts fuel to work."],
 ["2.8","2.8 Air/Fuel and Fuel/Air Ratios",true,"The mass ratio of air to fuel controls combustion behavior, efficiency, and emissions."],
 ["3","3 Thermochemistry of Fuel–Air Mixtures",false,"Applying chemistry and the first law to combustion reactions in engines."],
 ["3.1","3.1 Characterization of Flames",true,"Flames may be premixed or diffusion-controlled, laminar or turbulent, and each type dominates a different engine class."],
 ["3.2","3.2 Ideal Gas Model",true,"Most engine gases can be treated as ideal-gas mixtures with composition-dependent properties."],
 ["3.3","3.3 Composition of Air and Fuels",true,"Air is modeled as oxygen plus 'atmospheric nitrogen'; fuels are described by their carbon, hydrogen, and oxygen content."],
 ["3.4","3.4 Combustion Stoichiometry",true,"Balancing the reaction for complete combustion gives the stoichiometric air requirement."],
 ["3.5","3.5 The First Law Applied to Combustion",true,"Energy balances relate reactant and product enthalpies to heat release and flame temperature."],
 ["3.6","3.6 Chemical Equilibrium",true,"At high temperatures products dissociate, so equilibrium calculations are needed for accurate composition."],
 ["4","4 Properties of Working Fluids",false,"How the unburned and burned gas properties are modeled for engine analysis."],
 ["4.1","4.1 Introduction",true,"The working fluid changes from fresh charge to combustion products during the cycle, and its properties change with it."],
 ["4.2","4.2 Unburned Mixture Composition",true,"The unburned mixture contains air, fuel, and residual burned gas from the previous cycle."],
 ["4.3","4.3 Gas Property Relationships",true,"Specific heats, enthalpy, and internal energy depend on temperature and composition."],
 ["4.4","4.4 Burned Gas Composition",true,"Product composition depends on equivalence ratio and on dissociation at high temperature."],
 ["4.5","4.5 Thermodynamic Charts",true,"Charts and tables let engineers read off mixture properties quickly before computer models were common."],
 ["5","5 Ideal Models of Engine Cycles",false,"Idealized cycles that bound and explain real engine behavior."],
 ["5.1","5.1 Introduction",true,"Ideal cycles strip away losses to show how compression ratio and heat addition affect efficiency."],
 ["5.2","5.2 Ideal Models of Engine Processes",true,"Compression and expansion are often treated as isentropic and combustion as constant-volume or constant-pressure heat addition."],
 ["5.3","5.3 Thermodynamic Relations for Engine Processes",true,"Applying the first law to each process links state changes to work and heat transfer."],
 ["5.4","5.4 Cycle Analysis with Ideal Gas Working Fluids",true,"Air-standard Otto, Diesel, and dual cycles give closed-form efficiency expressions."],
 ["5.5","5.5 Fuel–Air Cycle Analysis",true,"Using realistic gas properties lowers predicted efficiency toward measured values."],
 ["5.6","5.6 Comparison with Real Engine Cycles",true,"Heat loss, finite burn time, and gas-exchange losses explain the gap between ideal and actual cycles."],
 ["6","6 Gas Exchange Processes",false,"How engines take in fresh charge and expel exhaust."],
 ["6.1","6.1 Inlet and Exhaust Processes in the Four-Stroke Cycle",true,"Valve timing, overlap, and pressure waves together determine how well the cylinder empties and refills."],
 ["6.2","6.2 Volumetric Efficiency",true,""],
 ["6.2.1","6.2.1 Quasi-Static Effects",true,""],
 ["6.2.2","6.2.2 Intake and Exhaust Flow Resistances",true,""],
 ["6.2.3","6.2.3 Intake Charge Heating",true,"Hot manifold and port walls warm the incoming charge, lowering its density and the mass trapped."],
 ["6.2.4","6.2.4 Backflow and Ram Effects",true,"Late intake valve closing can push charge back out at low speed but use the inflow's momentum to pack more in at high speed."],
 ["6.2.5","6.2.5 Airflow Choking at Intake Valve",true,""],
 ["6.2.6","6.2.6 Combined Effects",true,"The various losses and gains combine to give the characteristic rise-and-fall of volumetric efficiency with speed."],
 ["6.3","6.3 Flow Through Valves",true,"Valve lift, seat geometry, and discharge coefficients govern how much gas passes for a given pressure difference."],
 ["6.4","6.4 Residual Gas Fraction",true,"Burned gas left in the cylinder dilutes the next charge and affects combustion and NO formation."],
 ["6.5","6.5 Exhaust Gas Flow Rate and Temperature Variation",true,"Exhaust flow comes in pulses, with a blowdown phase followed by displacement by the piston."],
 ["6.6","6.6 Scavenging in Two-Stroke Cycle Engines",true,"Two-strokes rely on fresh charge pushing out burned gas, with short-circuiting and mixing as the main losses."],
 ["6.7","6.7 Supercharging and Turbocharging",true,"Compressing intake air raises density and power; turbochargers recover exhaust energy to do it."],
 ["7","7 SI Engine Fuel Metering and Manifold Phenomena",false,"Preparing and delivering the fuel–air mixture in spark-ignition engines."],
 ["7.1","7.1 Spark-Ignition Engine Mixture Requirements",true,"Mixture strength must change with load, speed, and temperature for good drivability and emissions."],
 ["7.2","7.2 Carburetors",true,"Carburetors meter fuel using the pressure drop of air through a venturi."],
 ["7.3","7.3 Fuel-Injection Systems",true,"Port and direct injection meter fuel electronically for precise control."],
 ["7.4","7.4 Feedback Systems",true,"Exhaust oxygen sensors let the controller hold the mixture near stoichiometric for the catalyst."],
 ["7.5","7.5 Flow Past Throttle Plate",true,"The throttle is the main pumping-loss source at part load."],
 ["7.6","7.6 Flow in Intake Manifolds",true,"Manifold design affects distribution between cylinders and wave tuning."],
 ["8","8 Charge Motion within the Cylinder",false,"Bulk flow and turbulence inside the cylinder and how they aid combustion."],
 ["8.1","8.1 Intake Jet Flow",true,"Gas enters through the valve as a high-velocity jet that sets up large-scale in-cylinder motion."],
 ["8.2","8.2 Mean Velocity and Turbulence Characteristics",true,"In-cylinder flow is described by a mean component plus turbulent fluctuations."],
 ["8.3","8.3 Swirl",true,"Rotation about the cylinder axis is used especially in diesels to mix fuel and air."],
 ["8.4","8.4 Squish",true,"Gas pushed inward as the piston approaches the head creates motion near top dead center."],
 ["8.5","8.5 Prechamber Engine Flows",true,"Divided-chamber engines use flow through a passage to generate intense mixing."],
 ["8.6","8.6 Crevice Flows and Blowby",true,"Small gaps around the piston store unburned mixture and leak gas into the crankcase."],
 ["9","9 Combustion in Spark-Ignition Engines",false,"Flame initiation, propagation, and abnormal combustion in SI engines."],
 ["9.1","9.1 Essential Features of Process",true,"A spark starts a flame kernel that grows into a turbulent flame crossing the chamber."],
 ["9.2","9.2 Thermodynamic Analysis of SI Engine Combustion",true,"Cylinder pressure data can be analyzed to infer the mass fraction burned versus crank angle."],
 ["9.3","9.3 Burned and Unburned Mixture States",true,"Burned gas is much hotter than the unburned gas ahead of the flame, and both are compressed as combustion proceeds."],
 ["9.4","9.4 Flame Structure and Speed",true,"Turbulence wrinkles and stretches the flame, greatly increasing burning rate over laminar speed."],
 ["9.5","9.5 Cyclic Variations in Combustion",true,"Cycle-to-cycle variation in burn rate limits lean and dilute operation."],
 ["9.6","9.6 Spark Ignition",true,"Ignition energy and spark timing affect kernel formation and overall phasing."],
 ["9.7","9.7 Abnormal Combustion: Knock and Surface Ignition",true,"Autoignition of end gas causes knock, which limits compression ratio and boost."],
 ["10","10 Combustion in Compression-Ignition Engines",false,"Fuel spray, ignition delay, and combustion phases in diesels."],
 ["10.1","10.1 Essential Features of Process",true,"Combustion is controlled by injection, atomization, evaporation, and mixing."],
 ["10.2","10.2 Types of Diesel Combustion Systems",true,"Direct-injection and indirect-injection designs trade efficiency against mixing and noise."],
 ["10.3","10.3 Phenomenological Model of CI Engine Combustion",true,"Combustion is often split into ignition delay, premixed burning, mixing-controlled burning, and late burning."],
 ["10.4","10.4 Analysis of Cylinder Pressure Data",true,"Heat-release analysis reveals the timing and rate of each combustion phase."],
 ["10.5","10.5 Fuel Spray Behavior",true,"Spray penetration, cone angle, and droplet size depend on injection pressure and nozzle design."],
 ["10.6","10.6 Ignition Delay",true,"The time between start of injection and start of combustion depends on temperature, pressure, and fuel cetane number."],
 ["11","11 Pollutant Formation and Control",false,"Where engine emissions come from and how they are reduced."],
 ["11.1","11.1 Nature and Extent of Problem",true,"The main regulated pollutants are nitrogen oxides, carbon monoxide, unburned hydrocarbons, and particulates."],
 ["11.2","11.2 Nitrogen Oxides",true,"NO forms mainly in high-temperature burned gas and rises steeply with peak temperature."],
 ["11.3","11.3 Carbon Monoxide",true,"CO is mainly a product of rich operation and incomplete oxidation."],
 ["11.4","11.4 Unburned Hydrocarbon Emissions",true,"Crevices, wall quenching, oil films, and misfire are key hydrocarbon sources."],
 ["11.5","11.5 Particulate Emissions",true,"Soot forms in fuel-rich zones and is partly oxidized later in the cycle."],
 ["11.6","11.6 Exhaust Gas Treatment",true,"Three-way catalysts, oxidation catalysts, particulate filters, and SCR systems clean up exhaust."],
 ["12","12 Engine Heat Transfer",false,"Heat flow from gas to walls to coolant, and its effect on performance."],
 ["12.1","12.1 Importance of Heat Transfer",true,"Heat transfer affects efficiency, emissions, knock, and component temperatures."],
 ["12.2","12.2 Modes of Heat Transfer",true,"Convection dominates in-cylinder, with radiation important in diesels due to soot."],
 ["12.3","12.3 Heat Transfer and Engine Energy Balance",true,"Fuel energy splits into brake work, coolant heat, exhaust enthalpy, and miscellaneous losses."],
 ["12.4","12.4 Convective Heat Transfer",true,"Correlations relate gas-side heat transfer coefficient to pressure, temperature, and characteristic velocity."],
 ["12.5","12.5 Radiative Heat Transfer",true,"Hot soot particles radiate strongly during diesel combustion."],
 ["12.6","12.6 Measurements of Instantaneous Heat-Transfer Rates",true,"Fast-response surface thermocouples capture cyclic heat flux."],
 ["13","13 Engine Friction and Lubrication",false,"Mechanical losses and how lubrication keeps them in check."],
 ["13.1","13.1 Background",true,"Friction consumes a significant share of indicated work, especially at light load."],
 ["13.2","13.2 Definitions",true,"Total friction is usually split into pumping, rubbing friction, and accessory work."],
 ["13.3","13.3 Friction Fundamentals",true,"Lubrication regimes range from boundary to mixed to hydrodynamic, each with different friction behavior."],
 ["13.4","13.4 Measurement Methods",true,"Motoring tests, Willans lines, and teardown tests estimate friction contributions."],
 ["13.5","13.5 Engine Friction Data",true,"Friction mean effective pressure typically rises with engine speed."],
 ["13.6","13.6 Engine Friction Components",true,"Piston assembly, bearings, and valvetrain are the largest rubbing-friction contributors."],
 ["14","14 Modeling Real Engine Flow and Combustion Processes",false,"How thermodynamic and fluid-dynamic models predict engine behavior."],
 ["14.1","14.1 Purpose and Classification of Models",true,"Models range from zero-dimensional cycle simulations to full multidimensional CFD."],
 ["14.2","14.2 Governing Equations for Open Thermodynamic System",true,"Mass and energy conservation for the cylinder form the basis of cycle simulations."],
 ["14.3","14.3 Intake and Exhaust Flow Models",true,"One-dimensional unsteady flow models capture wave effects in manifolds."],
 ["14.4","14.4 Thermodynamic-Based In-Cylinder Models",true,"Burn-rate functions such as the Wiebe function describe heat release in simple models."],
 ["14.5","14.5 Fluid-Mechanic-Based Multidimensional Models",true,"CFD resolves in-cylinder flow, sprays, and combustion in space and time."],
 ["15","15 Engine Operating Characteristics",false,"How real engines perform across their speed and load range."],
 ["15.1","15.1 Engine Performance Parameters",true,"Performance maps show torque, power, efficiency, and emissions versus speed and load."],
 ["15.2","15.2 Indicated and Brake Power and MEP",true,"Comparing indicated and brake quantities separates combustion quality from mechanical losses."],
 ["15.3","15.3 Operating Variables That Affect SI Engine Performance",true,"Spark timing, mixture ratio, EGR, and compression ratio all shift efficiency and emissions."],
 ["15.4","15.4 SI Engine Combustion Chamber Design",true,"Compact chambers with central spark plugs burn quickly and resist knock."],
 ["15.5","15.5 Variables That Affect CI Engine Performance",true,"Injection timing, pressure, and EGR are the main levers for diesel efficiency and emissions."],
 ["15.6","15.6 Supercharged and Turbocharged Engine Performance",true,"Boosted engines achieve high specific output, with matching of compressor, turbine, and engine critical."],
];
const TOC = OUTLINE.map(([id, t, sub]) => [id, t, sub]);
const CHAPTER = id => OUTLINE.find(o => o[0] === id.split(".")[0]);

// Original stub notes for sections without hand-written pages
function stub(id) {
  const o = OUTLINE.find(x => x[0] === id); if (!o) return null;
  const [, title, sub, summary] = o, ch = CHAPTER(id);
  const chName = ch[1].replace(/^\d+\s+/, "");
  const topic = title.replace(/^[\d.]+\s+/, "");
  if (!sub) {
    const kids = OUTLINE.filter(x => x[2] && x[0].split(".")[0] === id).map(x => `- ${x[1]}`).join("\n");
    return { title, tags: [chName.split(" ").slice(0, 2).join(" "), "Engines", "Overview"], md:
`${summary}

This chapter builds on earlier material and introduces the vocabulary used later. Read the sections in order the first time; later, each can be reviewed on its own.

**Sections in this chapter**

${kids}` };
  }
  return { title, tags: [chName.split(/[ ,]/).slice(0, 2).join(" "), "Engines", "Study notes"], md:
`${summary}

When studying **${topic.toLowerCase()}**, start by identifying which physical quantities change and which are held fixed. Most problems in this area reduce to a mass or energy balance on a well-chosen control volume, combined with an ideal-gas relation such as $pV = mRT$.

**Study notes**

- Write down the definitions and units of every quantity before substituting numbers.
- Sketch how the quantity varies with engine speed or load; trends are often tested more than exact values.
- Relate this section back to the broader theme of *${chName.toLowerCase()}*.` };
}

// Short original context paragraphs placed before / after a searched answer
const CONTEXT_BEFORE = {
  heading: "6.1 Inlet and Exhaust Processes in the Four-Stroke Cycle",
  md:
`The purpose of the gas exchange processes is to remove the burned gases at the end of the power stroke and admit the fresh charge for the next cycle. How much air the engine can draw in largely sets the maximum power it can produce, since fuel can only be burned if there is oxygen to burn it with.

In a four-stroke engine the exhaust valve opens well before bottom center, so that much of the burned gas leaves during a short *blowdown* period driven by the cylinder-to-manifold pressure difference. The piston then displaces most of what remains. The inlet valve opens before top center and closes after bottom center; the period when both valves are open is called *valve overlap*.`
};
const CONTEXT_AFTER = {
  heading: "6.3 Flow Through Valves",
  md:
`The valve is usually the smallest flow area in the intake system, so its geometry has a large effect on airflow at high speed. Engineers describe valve flow with an effective area, the product of a reference area and a discharge coefficient measured on a steady-flow rig.

Discharge coefficients vary with valve lift: at low lift the flow stays attached to the seat, while at higher lift it separates and forms a free jet. Port shape, seat angle, and the presence of nearby cylinder walls all modify this behavior.`
};
