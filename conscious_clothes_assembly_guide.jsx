export default function ConsciousClothesAssemblyGuide() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-blue-900 text-white p-6 rounded-t-xl">
          <h1 className="text-3xl font-bold text-center">CONSCIOUS CLOTHES</h1>
          <p className="text-center text-blue-200 text-lg">Complete Assembly Guide</p>
          <p className="text-center text-blue-300 text-sm mt-2">If you can follow LEGO instructions, you can build this.</p>
        </div>

        {/* Parts Checklist */}
        <div className="bg-white p-6 border-b-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">✓</span>
            PARTS CHECKLIST - Check off as you unpack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Chips */}
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3 bg-red-100 p-2 rounded">🔴 MAIN CHIPS (ICs)</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U1:</strong> STM32F405RGT6 (64-pin, square)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U2:</strong> nRF52832 Module (BM832)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U3:</strong> AD8232 ECG Module (red board)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U4:</strong> MAX30102 #1 (purple board)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U5:</strong> MAX30102 #2 (purple board)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U6:</strong> MPU-9250 Module (blue board)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U7:</strong> AD5933 Module (impedance)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U8:</strong> TCA9548A I2C Mux (small board)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U9:</strong> BQ24075 Charger IC (tiny!)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U10:</strong> AMS1117-3.3 Regulator</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>U11:</strong> W25Q128 Flash (optional)</span>
                </label>
              </div>
            </div>

            {/* Sensors */}
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3 bg-green-100 p-2 rounded">🟢 SENSORS</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>TEMP1-4:</strong> DS18B20 × 4 (silver tubes)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>ECG Cables:</strong> 3-lead wire set (RA/LA/RL)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>ELEC1-3:</strong> Conductive fabric pads × 3</span>
                </label>
              </div>
              
              <h3 className="font-bold text-lg mb-3 mt-6 bg-yellow-100 p-2 rounded">🟡 POWER</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>BAT1:</strong> 3.7V 1000mAh LiPo (flat pack)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>SOLAR1-20:</strong> MP3-37 panels × 20</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>J1:</strong> USB-C connector</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>SW1:</strong> Slide switch (on/off)</span>
                </label>
              </div>
            </div>

            {/* Small Parts */}
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3 bg-purple-100 p-2 rounded">🟣 SMALL PARTS</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 italic mb-2">These are tiny! Use tweezers.</p>
                
                <p className="font-semibold mt-2">Resistors (0603 size):</p>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>R1-R2:</strong> 10kΩ × 2 (I2C pullups)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>R3:</strong> 4.7kΩ × 1 (1-Wire pullup)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>R4-R5:</strong> 10kΩ × 2 (BQ24075)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>R6:</strong> 1kΩ × 1 (LED)</span>
                </label>
                
                <p className="font-semibold mt-3">Capacitors (0603 size):</p>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>C1-C8:</strong> 100nF × 8 (decoupling)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>C9-C10:</strong> 10µF × 2 (power)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>C11-C12:</strong> 22pF × 2 (crystal)</span>
                </label>
                
                <p className="font-semibold mt-3">Other:</p>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>Y1:</strong> 8MHz Crystal</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>LED1:</strong> Green LED (power)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5" />
                  <span><strong>LED2:</strong> Blue LED (status)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Fabric Materials */}
          <div className="mt-6 border-2 border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 bg-orange-100 p-2 rounded">🟠 FABRIC & WIRING</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Conductive thread spool (23m)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Silicone wire 28AWG (1m each: red, black, yellow, green, blue)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Heat shrink tubing assortment</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Base garment (compression shirt)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Tools Needed */}
        <div className="bg-gray-800 text-white p-6">
          <h2 className="text-xl font-bold mb-4">🔧 TOOLS YOU'LL NEED</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Soldering Iron</p>
              <p className="text-gray-300">Fine tip, temp controlled</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Multimeter</p>
              <p className="text-gray-300">For testing connections</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Tweezers</p>
              <p className="text-gray-300">For tiny parts</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Wire Strippers</p>
              <p className="text-gray-300">28-30 AWG size</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Helping Hands</p>
              <p className="text-gray-300">Holds boards steady</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Sewing Needle</p>
              <p className="text-gray-300">Large eye for thread</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Hot Glue Gun</p>
              <p className="text-gray-300">Strain relief</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <p className="font-bold">Computer + USB Cable</p>
              <p className="text-gray-300">For programming</p>
            </div>
          </div>
        </div>

        {/* STEP 1: Power System */}
        <div className="bg-white p-6 border-l-8 border-red-500">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">1</span>
            <div>
              <h2 className="text-2xl font-bold">BUILD THE POWER SYSTEM</h2>
              <p className="text-gray-600">Do this first! Everything needs power.</p>
            </div>
          </div>

          <svg viewBox="0 0 800 400" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* USB Input */}
            <g transform="translate(30, 150)">
              <rect x="0" y="0" width="80" height="50" fill="white" stroke="#333" strokeWidth="3" rx="5" />
              <rect x="15" y="15" width="50" height="20" fill="#333" rx="3" />
              <text x="40" y="70" fontSize="12" textAnchor="middle" fontWeight="bold">USB-C (J1)</text>
              <text x="40" y="85" fontSize="10" textAnchor="middle" fill="#666">5V Input</text>
            </g>

            {/* Wire from USB to BQ24075 */}
            <line x1="110" y1="175" x2="160" y2="175" stroke="red" strokeWidth="4" />
            <text x="135" y="165" fontSize="10" fill="red" textAnchor="middle">5V</text>
            <line x1="110" y1="190" x2="160" y2="190" stroke="black" strokeWidth="4" />
            <text x="135" y="210" fontSize="10" textAnchor="middle">GND</text>

            {/* BQ24075 Charger */}
            <g transform="translate(160, 120)">
              <rect x="0" y="0" width="140" height="110" fill="#f97316" stroke="#c2410c" strokeWidth="3" rx="8" />
              <text x="70" y="30" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">BQ24075</text>
              <text x="70" y="50" fontSize="11" textAnchor="middle" fill="white">Battery Charger</text>
              
              {/* Pins */}
              <circle cx="0" cy="30" r="6" fill="#fbbf24" stroke="#333" />
              <text x="-15" y="35" fontSize="9" textAnchor="end">IN</text>
              
              <circle cx="0" cy="55" r="6" fill="#fbbf24" stroke="#333" />
              <text x="-15" y="60" fontSize="9" textAnchor="end">GND</text>
              
              <circle cx="0" cy="80" r="6" fill="#fbbf24" stroke="#333" />
              <text x="-15" y="85" fontSize="9" textAnchor="end">TS</text>
              
              <circle cx="140" cy="30" r="6" fill="#fbbf24" stroke="#333" />
              <text x="155" y="35" fontSize="9">VBAT</text>
              
              <circle cx="140" cy="55" r="6" fill="#fbbf24" stroke="#333" />
              <text x="155" y="60" fontSize="9">OUT</text>
              
              <circle cx="140" cy="80" r="6" fill="#fbbf24" stroke="#333" />
              <text x="155" y="85" fontSize="9">PGOOD</text>

              {/* Internal resistors */}
              <text x="70" y="75" fontSize="9" textAnchor="middle" fill="white">R4: 10kΩ on ISET</text>
              <text x="70" y="90" fontSize="9" textAnchor="middle" fill="white">R5: 10kΩ on TS</text>
            </g>

            {/* Battery */}
            <g transform="translate(160, 270)">
              <rect x="0" y="0" width="140" height="60" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" rx="8" />
              <rect x="140" y="15" width="10" height="30" fill="#b91c1c" rx="2" />
              <text x="70" y="28" fontSize="13" textAnchor="middle" fill="white" fontWeight="bold">LiPo Battery</text>
              <text x="70" y="45" fontSize="11" textAnchor="middle" fill="white">3.7V 1000mAh</text>
              <text x="15" y="-8" fontSize="10" fill="red" fontWeight="bold">+ RED</text>
              <text x="100" y="-8" fontSize="10" fontWeight="bold">- BLACK</text>
            </g>

            {/* Wire battery to charger */}
            <line x1="230" y1="270" x2="230" y2="230" stroke="red" strokeWidth="4" />
            <line x1="230" y1="230" x2="300" y2="230" stroke="red" strokeWidth="4" />
            <line x1="300" y1="230" x2="300" y2="150" stroke="red" strokeWidth="4" />

            {/* Solar panels */}
            <g transform="translate(30, 280)">
              <rect x="0" y="0" width="100" height="70" fill="#eab308" stroke="#a16207" strokeWidth="2" rx="5" />
              <line x1="10" y1="15" x2="90" y2="15" stroke="#a16207" strokeWidth="1" />
              <line x1="10" y1="30" x2="90" y2="30" stroke="#a16207" strokeWidth="1" />
              <line x1="10" y1="45" x2="90" y2="45" stroke="#a16207" strokeWidth="1" />
              <text x="50" y="65" fontSize="10" textAnchor="middle" fontWeight="bold">SOLAR × 20</text>
              <text x="50" y="85" fontSize="9" textAnchor="middle" fill="#666">(Optional - skip for now)</text>
            </g>

            {/* Power switch */}
            <g transform="translate(350, 150)">
              <rect x="0" y="0" width="60" height="40" fill="#666" stroke="#333" strokeWidth="2" rx="5" />
              <circle cx="20" cy="20" r="8" fill="#22c55e" />
              <rect x="35" y="12" width="15" height="16" fill="#333" rx="3" />
              <text x="30" y="55" fontSize="11" textAnchor="middle" fontWeight="bold">SW1</text>
              <text x="30" y="68" fontSize="9" textAnchor="middle">ON/OFF</text>
            </g>

            {/* Wire charger to switch */}
            <line x1="300" y1="175" x2="350" y2="175" stroke="red" strokeWidth="4" />

            {/* Voltage Regulator */}
            <g transform="translate(450, 130)">
              <rect x="0" y="0" width="120" height="80" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="3" rx="8" />
              <text x="60" y="28" fontSize="13" textAnchor="middle" fill="white" fontWeight="bold">AMS1117-3.3</text>
              <text x="60" y="48" fontSize="11" textAnchor="middle" fill="white">Voltage Regulator</text>
              <text x="60" y="68" fontSize="10" textAnchor="middle" fill="#bfdbfe">3.7V → 3.3V</text>
              
              <circle cx="0" cy="25" r="6" fill="#fbbf24" stroke="#333" />
              <text x="-15" y="30" fontSize="9" textAnchor="end">IN</text>
              
              <circle cx="0" cy="55" r="6" fill="#fbbf24" stroke="#333" />
              <text x="-15" y="60" fontSize="9" textAnchor="end">GND</text>
              
              <circle cx="120" cy="40" r="6" fill="#fbbf24" stroke="#333" />
              <text x="135" y="45" fontSize="9">3.3V</text>
            </g>

            {/* Wire switch to regulator */}
            <line x1="410" y1="170" x2="450" y2="155" stroke="red" strokeWidth="4" />

            {/* Capacitors on regulator */}
            <g transform="translate(450, 230)">
              <rect x="0" y="0" width="30" height="40" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" rx="3" />
              <text x="15" y="55" fontSize="9" textAnchor="middle">C9</text>
              <text x="15" y="67" fontSize="8" textAnchor="middle">10µF</text>
            </g>
            <g transform="translate(490, 230)">
              <rect x="0" y="0" width="30" height="40" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" rx="3" />
              <text x="15" y="55" fontSize="9" textAnchor="middle">C10</text>
              <text x="15" y="67" fontSize="8" textAnchor="middle">10µF</text>
            </g>
            <line x1="465" y1="220" x2="465" y2="230" stroke="black" strokeWidth="2" />
            <line x1="505" y1="220" x2="505" y2="230" stroke="black" strokeWidth="2" />

            {/* 3.3V output rail */}
            <line x1="570" y1="170" x2="750" y2="170" stroke="#22c55e" strokeWidth="6" />
            <text x="660" y="165" fontSize="14" fill="#22c55e" fontWeight="bold">3.3V POWER RAIL</text>
            <text x="660" y="195" fontSize="11" fill="#666" textAnchor="middle">→ Goes to ALL other chips</text>

            {/* GND rail */}
            <line x1="160" y1="350" x2="750" y2="350" stroke="#333" strokeWidth="6" />
            <text x="450" y="375" fontSize="14" fontWeight="bold" textAnchor="middle">GND (GROUND) RAIL</text>

            {/* LED indicator */}
            <g transform="translate(620, 220)">
              <polygon points="15,0 30,30 0,30" fill="#22c55e" stroke="#166534" strokeWidth="2" />
              <line x1="15" y1="30" x2="15" y2="50" stroke="#333" strokeWidth="2" />
              <text x="15" y="65" fontSize="9" textAnchor="middle">LED1</text>
              <text x="50" y="20" fontSize="9">← R6: 1kΩ ←</text>
            </g>

            {/* Instructions box */}
            <g transform="translate(580, 260)">
              <rect x="0" y="0" width="190" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="10" y="20" fontSize="11" fontWeight="bold" fill="#92400e">⚡ POWER TEST:</text>
              <text x="10" y="38" fontSize="10" fill="#78350f">1. Connect USB</text>
              <text x="10" y="53" fontSize="10" fill="#78350f">2. Flip switch ON</text>
              <text x="10" y="68" fontSize="10" fill="#78350f">3. LED1 should light up!</text>
            </g>
          </svg>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">⚠️ WARNINGS</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• LiPo batteries can EXPLODE if shorted - be careful!</li>
                <li>• Red = Positive (+), Black = Negative (-)</li>
                <li>• Double-check polarity before connecting battery</li>
                <li>• Never leave charging unattended</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">✓ HOW TO TEST</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Set multimeter to DC voltage</li>
                <li>• Touch red probe to 3.3V rail</li>
                <li>• Touch black probe to GND</li>
                <li>• Should read 3.2V - 3.4V</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STEP 2: MCU Setup */}
        <div className="bg-white p-6 border-l-8 border-blue-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">2</span>
            <div>
              <h2 className="text-2xl font-bold">WIRE THE BRAIN (MCU)</h2>
              <p className="text-gray-600">The STM32 is the brain - everything connects to it.</p>
            </div>
          </div>

          <svg viewBox="0 0 800 500" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* STM32 chip - center */}
            <g transform="translate(250, 100)">
              <rect x="0" y="0" width="200" height="200" fill="#1e40af" stroke="#1e3a8a" strokeWidth="4" rx="10" />
              <text x="100" y="40" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold">STM32F405RGT6</text>
              <text x="100" y="60" fontSize="12" textAnchor="middle" fill="#93c5fd">"The Brain"</text>
              
              {/* Pin 1 marker */}
              <circle cx="20" cy="180" r="8" fill="white" />
              <text x="20" y="184" fontSize="10" textAnchor="middle">1</text>
              
              {/* Left side pins */}
              {[
                { y: 80, label: "PA5", color: "#22c55e" },
                { y: 100, label: "PA6", color: "#22c55e" },
                { y: 120, label: "PA2", color: "#666" },
                { y: 140, label: "PA3", color: "#666" },
                { y: 160, label: "PA0", color: "#ef4444" },
                { y: 180, label: "PA8", color: "#f97316" },
              ].map((pin, i) => (
                <g key={i}>
                  <rect x="-30" y={pin.y - 8} width="30" height="16" fill={pin.color} rx="2" />
                  <text x="-15" y={pin.y + 4} fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">{pin.label}</text>
                </g>
              ))}

              {/* Right side pins */}
              {[
                { y: 80, label: "PB13", color: "#3b82f6" },
                { y: 100, label: "PB14", color: "#3b82f6" },
                { y: 120, label: "PB15", color: "#3b82f6" },
                { y: 150, label: "3.3V", color: "#22c55e" },
                { y: 170, label: "GND", color: "#333" },
              ].map((pin, i) => (
                <g key={i}>
                  <rect x="200" y={pin.y - 8} width="35" height="16" fill={pin.color} rx="2" />
                  <text x="217" y={pin.y + 4} fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">{pin.label}</text>
                </g>
              ))}

              {/* Top pins */}
              <rect x="70" y="-25" width="60" height="25" fill="#666" rx="2" />
              <text x="100" y="-8" fontSize="9" textAnchor="middle" fill="white">BOOT0</text>
            </g>

            {/* Crystal */}
            <g transform="translate(500, 180)">
              <ellipse cx="30" cy="20" rx="30" ry="15" fill="silver" stroke="#666" strokeWidth="2" />
              <text x="30" y="25" fontSize="10" textAnchor="middle" fontWeight="bold">Y1</text>
              <text x="30" y="55" fontSize="9" textAnchor="middle">8MHz Crystal</text>
              <line x1="0" y1="20" x2="-50" y2="20" stroke="#666" strokeWidth="2" />
              
              {/* Crystal capacitors */}
              <rect x="60" y="5" width="20" height="30" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" rx="2" />
              <text x="70" y="50" fontSize="8" textAnchor="middle">C11</text>
              <text x="70" y="62" fontSize="7" textAnchor="middle">22pF</text>
              
              <rect x="90" y="5" width="20" height="30" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" rx="2" />
              <text x="100" y="50" fontSize="8" textAnchor="middle">C12</text>
              <text x="100" y="62" fontSize="7" textAnchor="middle">22pF</text>
            </g>

            {/* Decoupling caps */}
            <g transform="translate(500, 280)">
              <text x="0" y="0" fontSize="11" fontWeight="bold">Decoupling Capacitors:</text>
              <text x="0" y="18" fontSize="10" fill="#666">Place these RIGHT NEXT to the chip!</text>
              
              {[0, 1, 2, 3].map(i => (
                <g key={i} transform={`translate(${i * 45}, 30)`}>
                  <rect x="0" y="0" width="25" height="35" fill="#a855f7" stroke="#7e22ce" strokeWidth="2" rx="3" />
                  <text x="12" y="50" fontSize="8" textAnchor="middle">C{i+1}</text>
                  <text x="12" y="62" fontSize="7" textAnchor="middle">100nF</text>
                </g>
              ))}
            </g>

            {/* I2C Bus explanation */}
            <g transform="translate(20, 120)">
              <rect x="0" y="0" width="180" height="120" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="8" />
              <text x="90" y="25" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#166534">I2C BUS (Green wires)</text>
              <text x="10" y="50" fontSize="10" fill="#166534">PA5 = SCL (clock)</text>
              <text x="10" y="70" fontSize="10" fill="#166534">PA6 = SDA (data)</text>
              <text x="10" y="95" fontSize="9" fill="#166534">Need pull-up resistors:</text>
              <text x="10" y="110" fontSize="9" fill="#166534">R1, R2: 10kΩ each to 3.3V</text>
              
              {/* Pull-up resistor symbols */}
              <line x1="150" y1="45" x2="150" y2="55" stroke="#22c55e" strokeWidth="2" />
              <rect x="145" y="55" width="10" height="25" fill="none" stroke="#22c55e" strokeWidth="2" />
              <line x1="150" y1="80" x2="150" y2="90" stroke="#22c55e" strokeWidth="2" />
              <text x="165" y="72" fontSize="8">10k</text>
            </g>

            {/* UART explanation */}
            <g transform="translate(20, 260)">
              <rect x="0" y="0" width="180" height="80" fill="#e5e7eb" stroke="#666" strokeWidth="2" rx="8" />
              <text x="90" y="25" fontSize="12" textAnchor="middle" fontWeight="bold">UART (Gray wires)</text>
              <text x="10" y="50" fontSize="10">PA2 = TX (transmit)</text>
              <text x="10" y="70" fontSize="10">PA3 = RX (receive)</text>
            </g>

            {/* 1-Wire explanation */}
            <g transform="translate(20, 360)">
              <rect x="0" y="0" width="180" height="90" fill="#ffedd5" stroke="#f97316" strokeWidth="2" rx="8" />
              <text x="90" y="25" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#c2410c">1-WIRE (Orange)</text>
              <text x="10" y="50" fontSize="10" fill="#c2410c">PA8 = Data line</text>
              <text x="10" y="70" fontSize="9" fill="#c2410c">Need pull-up resistor:</text>
              <text x="10" y="85" fontSize="9" fill="#c2410c">R3: 4.7kΩ to 3.3V</text>
            </g>

            {/* SPI explanation */}
            <g transform="translate(520, 100)">
              <rect x="0" y="0" width="150" height="70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="8" />
              <text x="75" y="22" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#1d4ed8">SPI (Blue wires)</text>
              <text x="10" y="42" fontSize="10" fill="#1d4ed8">PB13 = SCK (clock)</text>
              <text x="10" y="57" fontSize="10" fill="#1d4ed8">PB14 = MISO (data in)</text>
              <text x="10" y="72" fontSize="10" fill="#1d4ed8">PB15 = MOSI (data out)</text>
            </g>

            {/* Power connections */}
            <line x1="485" y1="250" x2="580" y2="250" stroke="#22c55e" strokeWidth="4" />
            <text x="530" y="245" fontSize="10" fill="#22c55e" textAnchor="middle">← 3.3V from Step 1</text>
            
            <line x1="485" y1="270" x2="580" y2="270" stroke="#333" strokeWidth="4" />
            <text x="530" y="290" fontSize="10" textAnchor="middle">← GND from Step 1</text>

            {/* Important note */}
            <g transform="translate(520, 380)">
              <rect x="0" y="0" width="250" height="100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
              <text x="125" y="25" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#92400e">💡 BEGINNER TIP</text>
              <text x="10" y="45" fontSize="10" fill="#78350f">If using a dev board (like STM32</text>
              <text x="10" y="60" fontSize="10" fill="#78350f">"Black Pill"), the crystal and</text>
              <text x="10" y="75" fontSize="10" fill="#78350f">decoupling caps are already on</text>
              <text x="10" y="90" fontSize="10" fill="#78350f">the board. Skip those parts!</text>
            </g>
          </svg>
        </div>

        {/* STEP 3: I2C Sensors */}
        <div className="bg-white p-6 border-l-8 border-green-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">3</span>
            <div>
              <h2 className="text-2xl font-bold">CONNECT I2C SENSORS</h2>
              <p className="text-gray-600">These all share the same 2 wires (like a phone party line).</p>
            </div>
          </div>

          <svg viewBox="0 0 800 450" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* I2C Bus - horizontal lines */}
            <line x1="50" y1="80" x2="750" y2="80" stroke="#22c55e" strokeWidth="5" />
            <text x="400" y="70" fontSize="14" fill="#22c55e" fontWeight="bold" textAnchor="middle">SCL (PA5) - Clock Line</text>
            
            <line x1="50" y1="120" x2="750" y2="120" stroke="#16a34a" strokeWidth="5" />
            <text x="400" y="145" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">SDA (PA6) - Data Line</text>

            {/* Pull-up resistors at start */}
            <g transform="translate(50, 30)">
              <text x="0" y="0" fontSize="10" fontWeight="bold">To 3.3V ↑</text>
              <rect x="0" y="10" width="15" height="35" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="20" y="30" fontSize="9">R1</text>
              <text x="20" y="42" fontSize="8">10kΩ</text>
              
              <rect x="50" y="10" width="15" height="35" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="70" y="30" fontSize="9">R2</text>
              <text x="70" y="42" fontSize="8">10kΩ</text>
            </g>

            {/* From STM32 indicator */}
            <g transform="translate(30, 90)">
              <text x="0" y="0" fontSize="10" fill="#1e40af" fontWeight="bold">From</text>
              <text x="0" y="12" fontSize="10" fill="#1e40af" fontWeight="bold">STM32</text>
              <text x="0" y="24" fontSize="10" fill="#1e40af">→</text>
            </g>

            {/* TCA9548A Multiplexer */}
            <g transform="translate(130, 170)">
              <rect x="0" y="0" width="120" height="100" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="3" rx="8" />
              <text x="60" y="25" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">TCA9548A</text>
              <text x="60" y="42" fontSize="10" textAnchor="middle" fill="white">I2C Multiplexer</text>
              <text x="60" y="60" fontSize="9" textAnchor="middle" fill="#c4b5fd">Addr: 0x70</text>
              <text x="60" y="80" fontSize="8" textAnchor="middle" fill="#c4b5fd">"Traffic Cop"</text>
              
              {/* Connection to bus */}
              <line x1="60" y1="0" x2="60" y2="-50" stroke="#22c55e" strokeWidth="3" />
              <line x1="80" y1="0" x2="80" y2="-70" stroke="#16a34a" strokeWidth="3" />
              
              {/* Outputs */}
              <text x="130" y="35" fontSize="9">CH0→</text>
              <text x="130" y="55" fontSize="9">CH1→</text>
              <text x="130" y="75" fontSize="9">CH2→</text>
            </g>
            
            {/* Explanation box */}
            <g transform="translate(130, 290)">
              <rect x="0" y="0" width="120" height="70" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2" rx="5" />
              <text x="60" y="18" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#6d28d9">WHY THIS?</text>
              <text x="5" y="35" fontSize="8" fill="#6d28d9">Both MAX30102 have</text>
              <text x="5" y="48" fontSize="8" fill="#6d28d9">same address (0x57).</text>
              <text x="5" y="61" fontSize="8" fill="#6d28d9">Mux lets us pick one!</text>
            </g>

            {/* MAX30102 #1 */}
            <g transform="translate(300, 170)">
              <rect x="0" y="0" width="110" height="90" fill="#10b981" stroke="#059669" strokeWidth="3" rx="8" />
              <text x="55" y="25" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">MAX30102 #1</text>
              <text x="55" y="42" fontSize="10" textAnchor="middle" fill="white">PPG Sensor</text>
              <text x="55" y="58" fontSize="9" textAnchor="middle" fill="#a7f3d0">Addr: 0x57</text>
              <text x="55" y="75" fontSize="9" textAnchor="middle" fill="#a7f3d0">📍 FINGER</text>
              
              <line x1="0" y1="30" x2="-50" y2="30" stroke="#22c55e" strokeWidth="2" />
              <line x1="0" y1="50" x2="-50" y2="50" stroke="#16a34a" strokeWidth="2" />
              <text x="-25" y="25" fontSize="8">SCL</text>
              <text x="-25" y="65" fontSize="8">SDA</text>
            </g>

            {/* MAX30102 #2 */}
            <g transform="translate(300, 290)">
              <rect x="0" y="0" width="110" height="90" fill="#10b981" stroke="#059669" strokeWidth="3" rx="8" />
              <text x="55" y="25" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">MAX30102 #2</text>
              <text x="55" y="42" fontSize="10" textAnchor="middle" fill="white">PPG Sensor</text>
              <text x="55" y="58" fontSize="9" textAnchor="middle" fill="#a7f3d0">Addr: 0x57</text>
              <text x="55" y="75" fontSize="9" textAnchor="middle" fill="#a7f3d0">📍 WRIST</text>
              
              <line x1="0" y1="30" x2="-50" y2="70" stroke="#22c55e" strokeWidth="2" />
              <line x1="0" y1="50" x2="-50" y2="90" stroke="#16a34a" strokeWidth="2" />
            </g>

            {/* MPU-9250 - direct to bus */}
            <g transform="translate(460, 170)">
              <rect x="0" y="0" width="110" height="90" fill="#6366f1" stroke="#4f46e5" strokeWidth="3" rx="8" />
              <text x="55" y="25" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">MPU-9250</text>
              <text x="55" y="42" fontSize="10" textAnchor="middle" fill="white">9-Axis IMU</text>
              <text x="55" y="58" fontSize="9" textAnchor="middle" fill="#c7d2fe">Addr: 0x68</text>
              <text x="55" y="75" fontSize="9" textAnchor="middle" fill="#c7d2fe">Motion/Orientation</text>
              
              <line x1="55" y1="0" x2="55" y2="-50" stroke="#22c55e" strokeWidth="3" />
              <circle cx="55" cy="-50" r="5" fill="#22c55e" />
            </g>

            {/* AD5933 - direct to bus */}
            <g transform="translate(620, 170)">
              <rect x="0" y="0" width="110" height="90" fill="#ec4899" stroke="#db2777" strokeWidth="3" rx="8" />
              <text x="55" y="25" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">AD5933</text>
              <text x="55" y="42" fontSize="10" textAnchor="middle" fill="white">Impedance</text>
              <text x="55" y="58" fontSize="9" textAnchor="middle" fill="#fbcfe8">Addr: 0x0D</text>
              <text x="55" y="75" fontSize="9" textAnchor="middle" fill="#fbcfe8">Body Composition</text>
              
              <line x1="55" y1="0" x2="55" y2="-50" stroke="#22c55e" strokeWidth="3" />
              <circle cx="55" cy="-50" r="5" fill="#22c55e" />
            </g>

            {/* 3.3V and GND rails */}
            <line x1="280" y1="400" x2="750" y2="400" stroke="#22c55e" strokeWidth="4" />
            <text x="280" y="395" fontSize="10" fill="#22c55e">3.3V →</text>
            
            <line x1="280" y1="430" x2="750" y2="430" stroke="#333" strokeWidth="4" />
            <text x="280" y="425" fontSize="10">GND →</text>

            {/* Power connections down */}
            {[355, 515, 675].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="260" x2={x} y2="400" stroke="#22c55e" strokeWidth="2" strokeDasharray="4" />
                <line x1={x + 20} y1="260" x2={x + 20} y2="430" stroke="#333" strokeWidth="2" strokeDasharray="4" />
              </g>
            ))}

            {/* Module pin labels */}
            <g transform="translate(460, 280)">
              <text x="0" y="0" fontSize="9" fill="#666">VCC = 3.3V</text>
              <text x="0" y="14" fontSize="9" fill="#666">GND = Ground</text>
              <text x="0" y="28" fontSize="9" fill="#666">SCL = Clock</text>
              <text x="0" y="42" fontSize="9" fill="#666">SDA = Data</text>
            </g>
          </svg>

          {/* Connection table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border p-2 text-left">Module</th>
                  <th className="border p-2">VCC</th>
                  <th className="border p-2">GND</th>
                  <th className="border p-2">SCL</th>
                  <th className="border p-2">SDA</th>
                  <th className="border p-2">Other</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-bold">TCA9548A</td>
                  <td className="border p-2 text-center">3.3V</td>
                  <td className="border p-2 text-center">GND</td>
                  <td className="border p-2 text-center text-green-600">PA5</td>
                  <td className="border p-2 text-center text-green-600">PA6</td>
                  <td className="border p-2">A0,A1,A2 → GND</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-bold">MAX30102 #1</td>
                  <td className="border p-2 text-center">3.3V</td>
                  <td className="border p-2 text-center">GND</td>
                  <td className="border p-2 text-center">Mux CH0</td>
                  <td className="border p-2 text-center">Mux CH0</td>
                  <td className="border p-2">INT → (optional)</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">MAX30102 #2</td>
                  <td className="border p-2 text-center">3.3V</td>
                  <td className="border p-2 text-center">GND</td>
                  <td className="border p-2 text-center">Mux CH1</td>
                  <td className="border p-2 text-center">Mux CH1</td>
                  <td className="border p-2">INT → (optional)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-bold">MPU-9250</td>
                  <td className="border p-2 text-center">3.3V</td>
                  <td className="border p-2 text-center">GND</td>
                  <td className="border p-2 text-center text-green-600">PA5</td>
                  <td className="border p-2 text-center text-green-600">PA6</td>
                  <td className="border p-2">AD0 → GND</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">AD5933</td>
                  <td className="border p-2 text-center">3.3V</td>
                  <td className="border p-2 text-center">GND</td>
                  <td className="border p-2 text-center text-green-600">PA5</td>
                  <td className="border p-2 text-center text-green-600">PA6</td>
                  <td className="border p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* STEP 4: ECG */}
        <div className="bg-white p-6 border-l-8 border-red-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">4</span>
            <div>
              <h2 className="text-2xl font-bold">CONNECT ECG (Heart Monitor)</h2>
              <p className="text-gray-600">This one uses analog - it's different from the others!</p>
            </div>
          </div>

          <svg viewBox="0 0 800 300" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* AD8232 Module */}
            <g transform="translate(250, 50)">
              <rect x="0" y="0" width="200" height="120" fill="#f43f5e" stroke="#be123c" strokeWidth="3" rx="10" />
              <text x="100" y="30" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">AD8232</text>
              <text x="100" y="50" fontSize="11" textAnchor="middle" fill="white">ECG Analog Front End</text>
              
              {/* Left pins */}
              <rect x="-40" y="70" width="40" height="18" fill="#fbbf24" rx="2" />
              <text x="-20" y="83" fontSize="9" textAnchor="middle" fontWeight="bold">GND</text>
              
              <rect x="-40" y="92" width="40" height="18" fill="#22c55e" rx="2" />
              <text x="-20" y="105" fontSize="9" textAnchor="middle" fontWeight="bold">3.3V</text>
              
              {/* Right pins */}
              <rect x="200" y="30" width="50" height="18" fill="#ef4444" rx="2" />
              <text x="225" y="43" fontSize="9" textAnchor="middle" fill="white" fontWeight="bold">OUTPUT</text>
              
              <rect x="200" y="55" width="50" height="18" fill="#666" rx="2" />
              <text x="225" y="68" fontSize="9" textAnchor="middle" fill="white">LO+</text>
              
              <rect x="200" y="80" width="50" height="18" fill="#666" rx="2" />
              <text x="225" y="93" fontSize="9" textAnchor="middle" fill="white">LO-</text>

              {/* Electrode connectors */}
              <circle cx="50" cy="120" r="12" fill="#fbbf24" stroke="#333" strokeWidth="2" />
              <text x="50" y="145" fontSize="9" textAnchor="middle">RA</text>
              
              <circle cx="100" cy="120" r="12" fill="#fbbf24" stroke="#333" strokeWidth="2" />
              <text x="100" y="145" fontSize="9" textAnchor="middle">LA</text>
              
              <circle cx="150" cy="120" r="12" fill="#22c55e" stroke="#333" strokeWidth="2" />
              <text x="150" y="145" fontSize="9" textAnchor="middle">RL</text>
            </g>

            {/* Wire to STM32 */}
            <g transform="translate(500, 50)">
              <line x1="0" y1="30" x2="100" y2="30" stroke="#ef4444" strokeWidth="4" />
              <text x="50" y="20" fontSize="10" textAnchor="middle" fill="#ef4444" fontWeight="bold">Analog Signal</text>
              
              <rect x="100" y="10" width="100" height="60" fill="#1e40af" stroke="#1e3a8a" strokeWidth="3" rx="8" />
              <text x="150" y="35" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">STM32</text>
              <text x="150" y="52" fontSize="10" textAnchor="middle" fill="#93c5fd">PA0 (ADC)</text>
            </g>

            {/* Electrodes on body */}
            <g transform="translate(50, 50)">
              <text x="60" y="0" fontSize="12" fontWeight="bold" textAnchor="middle">ELECTRODE PLACEMENT</text>
              
              {/* Simple body outline */}
              <ellipse cx="60" cy="40" rx="25" ry="20" fill="none" stroke="#666" strokeWidth="2" />
              <line x1="60" y1="60" x2="60" y2="120" stroke="#666" strokeWidth="2" />
              <line x1="60" y1="70" x2="20" y2="100" stroke="#666" strokeWidth="2" />
              <line x1="60" y1="70" x2="100" y2="100" stroke="#666" strokeWidth="2" />
              <line x1="60" y1="120" x2="40" y2="170" stroke="#666" strokeWidth="2" />
              <line x1="60" y1="120" x2="80" y2="170" stroke="#666" strokeWidth="2" />
              
              {/* Electrode positions */}
              <circle cx="25" cy="85" r="10" fill="#fbbf24" stroke="#333" strokeWidth="2" />
              <text x="25" y="89" fontSize="8" textAnchor="middle" fontWeight="bold">RA</text>
              <text x="5" y="85" fontSize="8" textAnchor="end">Right Arm →</text>
              
              <circle cx="95" cy="85" r="10" fill="#fbbf24" stroke="#333" strokeWidth="2" />
              <text x="95" y="89" fontSize="8" textAnchor="middle" fontWeight="bold">LA</text>
              <text x="115" y="85" fontSize="8">← Left Arm</text>
              
              <circle cx="45" cy="155" r="10" fill="#22c55e" stroke="#333" strokeWidth="2" />
              <text x="45" y="159" fontSize="8" textAnchor="middle" fontWeight="bold">RL</text>
              <text x="5" y="160" fontSize="8" textAnchor="end">Right Leg →</text>
            </g>

            {/* Important notes */}
            <g transform="translate(520, 130)">
              <rect x="0" y="0" width="250" height="120" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" rx="8" />
              <text x="125" y="25" fontSize="12" textAnchor="middle" fontWeight="bold" fill="#dc2626">⚡ ECG NOTES</text>
              <text x="10" y="45" fontSize="10" fill="#7f1d1d">• OUTPUT is 0-3.3V analog</text>
              <text x="10" y="62" fontSize="10" fill="#7f1d1d">• Must connect to ADC pin (PA0)</text>
              <text x="10" y="79" fontSize="10" fill="#7f1d1d">• LO+/LO- detect loose electrodes</text>
              <text x="10" y="96" fontSize="10" fill="#7f1d1d">• RL (green) = Reference/Ground</text>
              <text x="10" y="113" fontSize="10" fill="#7f1d1d">• Use conductive fabric for electrodes</text>
            </g>

            {/* Wires from body to module */}
            <line x1="120" y1="120" x2="250" y2="170" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5" />
            <line x1="120" y1="140" x2="350" y2="170" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5" />
            <line x1="90" y1="180" x2="400" y2="170" stroke="#22c55e" strokeWidth="2" strokeDasharray="5" />
          </svg>
        </div>

        {/* STEP 5: Temperature Sensors */}
        <div className="bg-white p-6 border-l-8 border-orange-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-orange-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">5</span>
            <div>
              <h2 className="text-2xl font-bold">CONNECT TEMPERATURE SENSORS</h2>
              <p className="text-gray-600">All 4 sensors share ONE wire (1-Wire protocol).</p>
            </div>
          </div>

          <svg viewBox="0 0 800 250" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* 1-Wire bus */}
            <line x1="50" y1="100" x2="750" y2="100" stroke="#f97316" strokeWidth="5" />
            <text x="400" y="90" fontSize="14" fill="#f97316" fontWeight="bold" textAnchor="middle">1-WIRE DATA BUS (PA8)</text>

            {/* Pull-up resistor */}
            <g transform="translate(60, 40)">
              <text x="0" y="0" fontSize="10">3.3V ↓</text>
              <rect x="0" y="10" width="15" height="35" fill="none" stroke="#f97316" strokeWidth="2" />
              <text x="20" y="30" fontSize="9" fontWeight="bold">R3</text>
              <text x="20" y="42" fontSize="8">4.7kΩ</text>
              <line x1="7" y1="45" x2="7" y2="60" stroke="#f97316" strokeWidth="2" />
            </g>

            {/* From STM32 */}
            <g transform="translate(30, 95)">
              <text x="0" y="0" fontSize="9" fill="#1e40af">PA8 →</text>
            </g>

            {/* DS18B20 sensors */}
            {[
              { x: 150, label: "TEMP1", location: "Chest" },
              { x: 300, label: "TEMP2", location: "Back" },
              { x: 450, label: "TEMP3", location: "Arm" },
              { x: 600, label: "TEMP4", location: "Ambient" },
            ].map((sensor, i) => (
              <g key={i} transform={`translate(${sensor.x}, 120)`}>
                {/* Sensor body */}
                <rect x="0" y="0" width="80" height="70" fill="#374151" stroke="#1f2937" strokeWidth="2" rx="5" />
                <ellipse cx="40" cy="5" rx="20" ry="5" fill="#6b7280" />
                
                <text x="40" y="30" fontSize="11" textAnchor="middle" fill="white" fontWeight="bold">DS18B20</text>
                <text x="40" y="45" fontSize="9" textAnchor="middle" fill="#9ca3af">{sensor.label}</text>
                <text x="40" y="60" fontSize="8" textAnchor="middle" fill="#22c55e">📍 {sensor.location}</text>
                
                {/* Connection to bus */}
                <line x1="40" y1="0" x2="40" y2="-20" stroke="#f97316" strokeWidth="3" />
                <circle cx="40" cy="-20" r="5" fill="#f97316" />
                
                {/* Pin labels */}
                <text x="-5" y="25" fontSize="8" textAnchor="end">GND</text>
                <text x="-5" y="40" fontSize="8" textAnchor="end">DATA</text>
                <text x="-5" y="55" fontSize="8" textAnchor="end">VCC</text>
              </g>
            ))}

            {/* Power rails */}
            <line x1="150" y1="210" x2="700" y2="210" stroke="#22c55e" strokeWidth="3" />
            <text x="120" y="215" fontSize="10" fill="#22c55e">3.3V</text>
            
            <line x1="150" y1="230" x2="700" y2="230" stroke="#333" strokeWidth="3" />
            <text x="120" y="235" fontSize="10">GND</text>

            {/* Connection lines to power */}
            {[190, 340, 490, 640].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="190" x2={x} y2="210" stroke="#22c55e" strokeWidth="2" />
                <line x1={x - 30} y1="190" x2={x - 30} y2="230" stroke="#333" strokeWidth="2" />
              </g>
            ))}
          </svg>

          <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">💡 DS18B20 Wiring (TO-92 package - looks like a transistor)</h4>
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Flat side facing you</span>
              </div>
              <div>Pin 1 (Left) = <span className="font-bold">GND</span></div>
              <div>Pin 2 (Middle) = <span className="font-bold text-orange-600">DATA → PA8</span></div>
              <div>Pin 3 (Right) = <span className="font-bold text-green-600">VCC → 3.3V</span></div>
            </div>
          </div>
        </div>

        {/* STEP 6: Bluetooth */}
        <div className="bg-white p-6 border-l-8 border-cyan-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-cyan-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">6</span>
            <div>
              <h2 className="text-2xl font-bold">CONNECT BLUETOOTH (BLE)</h2>
              <p className="text-gray-600">This sends data to your phone!</p>
            </div>
          </div>

          <svg viewBox="0 0 700 200" className="w-full bg-gray-50 rounded-lg border-2 border-gray-200">
            {/* STM32 */}
            <g transform="translate(50, 50)">
              <rect x="0" y="0" width="150" height="100" fill="#1e40af" stroke="#1e3a8a" strokeWidth="3" rx="10" />
              <text x="75" y="35" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">STM32F405</text>
              
              <rect x="150" y="30" width="40" height="16" fill="#666" rx="2" />
              <text x="170" y="42" fontSize="9" textAnchor="middle" fill="white">PA2</text>
              
              <rect x="150" y="55" width="40" height="16" fill="#666" rx="2" />
              <text x="170" y="67" fontSize="9" textAnchor="middle" fill="white">PA3</text>
            </g>

            {/* Wires */}
            <line x1="190" y1="88" x2="300" y2="88" stroke="#666" strokeWidth="3" />
            <line x1="190" y1="113" x2="300" y2="113" stroke="#666" strokeWidth="3" />
            
            <text x="245" y="80" fontSize="10" fontWeight="bold">TX →</text>
            <text x="245" y="128" fontSize="10" fontWeight="bold">← RX</text>

            {/* Cross indicator */}
            <g transform="translate(240, 90)">
              <line x1="0" y1="0" x2="20" y2="20" stroke="#ef4444" strokeWidth="2" />
              <line x1="0" y1="20" x2="20" y2="0" stroke="#ef4444" strokeWidth="2" />
            </g>

            {/* nRF52832 */}
            <g transform="translate(300, 40)">
              <rect x="0" y="0" width="180" height="120" fill="#06b6d4" stroke="#0891b2" strokeWidth="3" rx="10" />
              <text x="90" y="30" fontSize="14" textAnchor="middle" fill="white" fontWeight="bold">nRF52832</text>
              <text x="90" y="50" fontSize="11" textAnchor="middle" fill="white">BLE Module (BM832)</text>
              
              <rect x="-40" y="38" width="40" height="16" fill="#666" rx="2" />
              <text x="-20" y="50" fontSize="9" textAnchor="middle" fill="white">RX</text>
              
              <rect x="-40" y="63" width="40" height="16" fill="#666" rx="2" />
              <text x="-20" y="75" fontSize="9" textAnchor="middle" fill="white">TX</text>
              
              {/* Antenna symbol */}
              <line x1="160" y1="40" x2="200" y2="40" stroke="#333" strokeWidth="2" />
              <line x1="200" y1="30" x2="200" y2="50" stroke="#333" strokeWidth="2" />
              <line x1="195" y1="35" x2="205" y2="35" stroke="#333" strokeWidth="1" />
              <line x1="195" y1="45" x2="205" y2="45" stroke="#333" strokeWidth="1" />
              <text x="180" y="70" fontSize="9" fill="#666">Antenna</text>
              
              <text x="90" y="90" fontSize="9" textAnchor="middle" fill="#cffafe">VCC → 3.3V</text>
              <text x="90" y="105" fontSize="9" textAnchor="middle" fill="#cffafe">GND → GND</text>
            </g>

            {/* Phone */}
            <g transform="translate(550, 40)">
              <rect x="0" y="0" width="80" height="120" fill="#374151" stroke="#1f2937" strokeWidth="3" rx="10" />
              <rect x="10" y="15" width="60" height="80" fill="#60a5fa" rx="5" />
              <circle cx="40" cy="105" r="8" fill="none" stroke="#666" strokeWidth="2" />
              <text x="40" y="55" fontSize="10" textAnchor="middle" fill="white">📱</text>
              <text x="40" y="140" fontSize="11" textAnchor="middle" fontWeight="bold">Phone</text>
            </g>

            {/* Wireless waves */}
            <path d="M 495 80 Q 510 60 495 40" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <path d="M 505 90 Q 525 60 505 30" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <path d="M 515 100 Q 540 60 515 20" fill="none" stroke="#06b6d4" strokeWidth="2" />
          </svg>

          <div className="mt-4 bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h4 className="font-bold text-cyan-800 mb-2">⚠️ UART CROSSED WIRES</h4>
            <p className="text-sm text-cyan-700">TX and RX cross over - STM32's TX goes to nRF's RX, and vice versa. Like a conversation - one talks, one listens!</p>
          </div>
        </div>

        {/* STEP 7: Final Assembly Checklist */}
        <div className="bg-white p-6 border-l-8 border-purple-500 mt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-purple-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center">7</span>
            <div>
              <h2 className="text-2xl font-bold">FINAL CHECKLIST</h2>
              <p className="text-gray-600">Before powering on!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg">🔌 Power</h3>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Battery polarity correct (Red = +)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>3.3V regulator output verified</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>All decoupling caps in place</span>
              </label>
              
              <h3 className="font-bold text-lg mt-4">🔗 I2C Bus</h3>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>10kΩ pullups on SDA and SCL</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>TCA9548A address pins grounded</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>All I2C devices have power</span>
              </label>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg">🌡️ 1-Wire</h3>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>4.7kΩ pullup on data line</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>All DS18B20 pins correct</span>
              </label>
              
              <h3 className="font-bold text-lg mt-4">📡 Bluetooth</h3>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>TX/RX crossed correctly</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>nRF module has 3.3V (NOT 5V!)</span>
              </label>
              
              <h3 className="font-bold text-lg mt-4">❤️ ECG</h3>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>OUTPUT → PA0 (ADC)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Electrodes connected</span>
              </label>
            </div>
          </div>
        </div>

        {/* Complete System Diagram */}
        <div className="bg-gray-900 text-white p-6 rounded-b-xl mt-4">
          <h2 className="text-2xl font-bold text-center mb-4">🎉 COMPLETE SYSTEM OVERVIEW</h2>
          <p className="text-center text-gray-400 mb-4">Everything connected - you built this!</p>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-xs md:text-sm overflow-x-auto text-green-400">
{`
┌─────────────────────────────────────────────────────────────────────────┐
│                           CONSCIOUS CLOTHES                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   [USB-C]──►[BQ24075]──►[AMS1117]──►═══════ 3.3V RAIL ════════════════  │
│                │                              │                         │
│            [BATTERY]                          │                         │
│            [SOLAR×20]                         │                         │
│                                               │                         │
│   ┌───────────────────────────────────────────┼─────────────────────┐   │
│   │                                           │                     │   │
│   │         ┌─────────────────────────────────┴───────────┐        │   │
│   │         │              STM32F405RGT6                  │        │   │
│   │         │                                             │        │   │
│   │  PA5 ◄──┤ SCL ──────────────────┬────┬────┬──────►[MPU-9250]   │   │
│   │  PA6 ◄──┤ SDA ──────┐           │    │    │                    │   │
│   │         │           │           │    │    └──────►[AD5933]     │   │
│   │  PA0 ◄──┤ ADC ◄──[AD8232]──[ELECTRODES×3]                      │   │
│   │         │                                                       │   │
│   │  PA8 ◄──┤ 1-WIRE ────[DS18B20×4]                               │   │
│   │         │                                                       │   │
│   │  PA2 ◄──┤ TX ───────────────────────────────►[nRF52832]──►📱   │   │
│   │  PA3 ◄──┤ RX ◄──────────────────────────────                   │   │
│   │         │           │                                           │   │
│   │         │      [TCA9548A]                                       │   │
│   │         │        │    │                                         │   │
│   │         │   [MAX30102] [MAX30102]                               │   │
│   │         │    Finger      Wrist                                  │   │
│   │         └─────────────────────────────────────────────┘        │   │
│   │                                                                 │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│   ════════════════════════════ GND RAIL ════════════════════════════   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
            </pre>
          </div>
          
          <p className="text-center mt-4 text-gray-400">
            Total connections: ~40 wires | Time to build: 4-8 hours | You got this! 💪
          </p>
        </div>

      </div>
    </div>
  );
}
