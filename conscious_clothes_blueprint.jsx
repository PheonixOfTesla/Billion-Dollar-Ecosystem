import React, { useState } from 'react';

export default function ConsciousClothesBlueprint() {
  const [page, setPage] = useState(1);
  const totalPages = 6;

  const NavButtons = () => (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-gray-900 px-4 py-2 rounded-full shadow-lg z-50">
      <button 
        onClick={() => setPage(p => Math.max(1, p - 1))}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        disabled={page === 1}
      >
        ← Prev
      </button>
      <span className="px-4 py-2 text-white font-mono">{page} / {totalPages}</span>
      <button 
        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        disabled={page === totalPages}
      >
        Next →
      </button>
    </div>
  );

  // PAGE 1: COVER
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="text-blue-400 text-sm tracking-[0.5em] mb-4">DIGITAL APPLE INC.</div>
        <h1 className="text-6xl font-bold text-white mb-2">CONSCIOUS CLOTHES</h1>
        <h2 className="text-2xl text-blue-300 mb-8">Smart Health Monitoring Clothing System</h2>
        
        <div className="w-64 h-64 mx-auto mb-8 relative">
          {/* 3D Chip Preview */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Chip body - isometric */}
            <defs>
              <linearGradient id="chipTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="chipSide" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
            </defs>
            
            {/* Top face */}
            <polygon points="100,30 170,70 100,110 30,70" fill="url(#chipTop)" stroke="#60a5fa" strokeWidth="2"/>
            {/* Right face */}
            <polygon points="170,70 170,130 100,170 100,110" fill="url(#chipSide)" stroke="#60a5fa" strokeWidth="2"/>
            {/* Left face */}
            <polygon points="30,70 100,110 100,170 30,130" fill="#0f172a" stroke="#60a5fa" strokeWidth="2"/>
            
            {/* Chip details on top */}
            <polygon points="100,45 145,70 100,95 55,70" fill="#0f172a" stroke="#3b82f6" strokeWidth="1"/>
            <text x="100" y="75" fill="#60a5fa" fontSize="10" textAnchor="middle" fontWeight="bold">CHIP X</text>
            
            {/* Connector pins */}
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={45 + i*12} y={105} width="6" height="15" fill="#fbbf24" stroke="#92400e" strokeWidth="1" transform="skewY(-30)"/>
            ))}
          </svg>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 max-w-md mx-auto">
          <div className="bg-gray-800/50 p-3 rounded">
            <div className="text-2xl font-bold text-white">34</div>
            <div>Sensor Configs</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded">
            <div className="text-2xl font-bold text-white">3W</div>
            <div>Solar Peak</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded">
            <div className="text-2xl font-bold text-white">100+</div>
            <div>Days Storage</div>
          </div>
        </div>
        
        <div className="mt-12 text-gray-500 text-sm">
          <div>Patent Application #63/889,364</div>
          <div>Filed: September 27, 2025</div>
          <div>Inventor: Josh Carseal Lerner</div>
        </div>
      </div>
    </div>
  );

  // PAGE 2: CONSCIOUS CHIP X - 3D EXPLODED VIEW
  const ChipExplodedPage = () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-2">CONSCIOUS CHIP X MODULE</h2>
      <p className="text-blue-400 mb-6">Exploded View — 42mm × 72mm × 13mm</p>
      
      <div className="flex gap-8">
        <svg viewBox="0 0 400 500" className="w-2/3 h-auto">
          <defs>
            <linearGradient id="pcbGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            <linearGradient id="caseTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
          </defs>
          
          {/* LAYER 1: Top Case */}
          <g transform="translate(50, 20)">
            <text x="0" y="-5" fill="#9ca3af" fontSize="10">TOP ENCLOSURE (ABS Plastic)</text>
            <polygon points="150,0 280,50 150,100 20,50" fill="url(#caseTop)" stroke="#6b7280" strokeWidth="2"/>
            <polygon points="280,50 280,70 150,120 150,100" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
            <polygon points="20,50 150,100 150,120 20,70" fill="#111827" stroke="#6b7280" strokeWidth="2"/>
            {/* Ventilation slots */}
            {[0,1,2].map(i => (
              <line key={i} x1={80 + i*40} y1={40} x2={100 + i*40} y2={50} stroke="#4b5563" strokeWidth="3"/>
            ))}
          </g>
          
          {/* Connection lines */}
          <line x1="200" y1="100" x2="200" y2="130" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4"/>
          
          {/* LAYER 2: PCB Top Components */}
          <g transform="translate(50, 140)">
            <text x="0" y="-5" fill="#9ca3af" fontSize="10">PCB TOP — Main Components</text>
            <polygon points="150,0 280,50 150,100 20,50" fill="url(#pcbGreen)" stroke="#22c55e" strokeWidth="2"/>
            <polygon points="280,50 280,60 150,110 150,100" fill="#14532d" stroke="#22c55e" strokeWidth="2"/>
            <polygon points="20,50 150,100 150,110 20,60" fill="#052e16" stroke="#22c55e" strokeWidth="2"/>
            
            {/* STM32F405 - Main MCU */}
            <g transform="translate(120, 30)">
              <rect x="0" y="0" width="50" height="35" fill="#1f2937" stroke="#60a5fa" strokeWidth="1" transform="skewX(-20)"/>
              <text x="15" y="15" fill="#60a5fa" fontSize="7" fontWeight="bold">STM32F405</text>
              <text x="15" y="25" fill="#9ca3af" fontSize="5">168MHz ARM</text>
            </g>
            
            {/* nRF52832 - BLE */}
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="35" height="25" fill="#0891b2" stroke="#22d3d1" strokeWidth="1" transform="skewX(-20)"/>
              <text x="8" y="12" fill="#fff" fontSize="6" fontWeight="bold">nRF52832</text>
              <text x="8" y="20" fill="#a5f3fc" fontSize="5">BLE 5.0</text>
            </g>
            
            {/* W25Q128 Flash */}
            <g transform="translate(190, 50)">
              <rect x="0" y="0" width="30" height="20" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1" transform="skewX(-20)"/>
              <text x="5" y="12" fill="#fff" fontSize="5">16MB</text>
            </g>
            
            {/* Crystal */}
            <ellipse cx="100" cy="70" rx="8" ry="4" fill="#fbbf24" stroke="#92400e"/>
            
            {/* Traces */}
            <path d="M130,65 L100,70 L70,60" stroke="#22c55e" strokeWidth="1" fill="none"/>
            <path d="M160,55 L190,55" stroke="#22c55e" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Connection lines */}
          <line x1="200" y1="220" x2="200" y2="250" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4"/>
          
          {/* LAYER 3: PCB Bottom - Power */}
          <g transform="translate(50, 260)">
            <text x="0" y="-5" fill="#9ca3af" fontSize="10">PCB BOTTOM — Power Management</text>
            <polygon points="150,0 280,50 150,100 20,50" fill="url(#pcbGreen)" stroke="#22c55e" strokeWidth="2"/>
            <polygon points="280,50 280,60 150,110 150,100" fill="#14532d" stroke="#22c55e" strokeWidth="2"/>
            <polygon points="20,50 150,100 150,110 20,60" fill="#052e16" stroke="#22c55e" strokeWidth="2"/>
            
            {/* BQ24075 Charger */}
            <g transform="translate(70, 35)">
              <rect x="0" y="0" width="40" height="25" fill="#f97316" stroke="#fed7aa" strokeWidth="1" transform="skewX(-20)"/>
              <text x="8" y="12" fill="#fff" fontSize="6" fontWeight="bold">BQ24075</text>
              <text x="8" y="20" fill="#fff" fontSize="5">Charger</text>
            </g>
            
            {/* TPS63020 Regulator */}
            <g transform="translate(150, 40)">
              <rect x="0" y="0" width="40" height="25" fill="#a855f7" stroke="#d8b4fe" strokeWidth="1" transform="skewX(-20)"/>
              <text x="5" y="12" fill="#fff" fontSize="6" fontWeight="bold">TPS63020</text>
              <text x="5" y="20" fill="#fff" fontSize="5">3.3V Reg</text>
            </g>
            
            {/* Capacitors */}
            {[0,1,2,3].map(i => (
              <rect key={i} x={90 + i*20} y={65} width="8" height="12" fill="#fbbf24" stroke="#92400e" strokeWidth="1" transform="skewX(-20)"/>
            ))}
          </g>
          
          {/* Connection lines */}
          <line x1="200" y1="340" x2="200" y2="370" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4"/>
          
          {/* LAYER 4: Battery */}
          <g transform="translate(50, 380)">
            <text x="0" y="-5" fill="#9ca3af" fontSize="10">BATTERY — 1000mAh LiPo</text>
            <polygon points="150,0 280,50 150,100 20,50" fill="#dc2626" stroke="#fca5a5" strokeWidth="2"/>
            <polygon points="280,50 280,70 150,120 150,100" fill="#991b1b" stroke="#fca5a5" strokeWidth="2"/>
            <polygon points="20,50 150,100 150,120 20,70" fill="#7f1d1d" stroke="#fca5a5" strokeWidth="2"/>
            <text x="140" y="55" fill="#fca5a5" fontSize="12" fontWeight="bold">3.7V 1000mAh</text>
            <text x="140" y="70" fill="#fca5a5" fontSize="8">3.7Wh Capacity</text>
            {/* Connector tab */}
            <rect x="230" y="45" width="20" height="10" fill="#fbbf24" stroke="#92400e"/>
          </g>
        </svg>
        
        {/* Component List */}
        <div className="w-1/3 text-sm">
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-blue-400 font-bold mb-2">PROCESSING</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>STM32F405RGT6</span>
                <span className="text-gray-500">$8.50</span>
              </div>
              <div className="text-xs text-gray-500">ARM Cortex-M4 @ 168MHz</div>
              <div className="flex justify-between">
                <span>nRF52832</span>
                <span className="text-gray-500">$4.20</span>
              </div>
              <div className="text-xs text-gray-500">BLE 5.0 SoC</div>
              <div className="flex justify-between">
                <span>W25Q128</span>
                <span className="text-gray-500">$2.15</span>
              </div>
              <div className="text-xs text-gray-500">16MB SPI Flash</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-orange-400 font-bold mb-2">POWER</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>BQ24075</span>
                <span className="text-gray-500">$3.25</span>
              </div>
              <div className="text-xs text-gray-500">Li-Ion Charger IC</div>
              <div className="flex justify-between">
                <span>TPS63020</span>
                <span className="text-gray-500">$4.30</span>
              </div>
              <div className="text-xs text-gray-500">Buck-Boost 3.3V</div>
              <div className="flex justify-between">
                <span>LiPo 1000mAh</span>
                <span className="text-gray-500">$12.95</span>
              </div>
              <div className="text-xs text-gray-500">36-50hr runtime</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-green-400 font-bold mb-2">DIMENSIONS</h3>
            <div className="text-gray-300 space-y-1">
              <div>Width: <span className="text-white">42mm</span></div>
              <div>Length: <span className="text-white">72mm</span></div>
              <div>Height: <span className="text-white">13mm</span></div>
              <div>Weight: <span className="text-white">~45g</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // PAGE 3: SENSOR MODULES
  const SensorModulesPage = () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-2">SENSOR ARRAY</h2>
      <p className="text-blue-400 mb-6">34 Sensor Configurations — Medical-Grade Components</p>
      
      <div className="grid grid-cols-3 gap-6">
        {/* ECG Module */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <h3 className="text-red-400 font-bold">AD8232 ECG</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            <rect x="25" y="20" width="100" height="60" rx="4" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
            <text x="75" y="45" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">AD8232</text>
            <text x="75" y="58" fill="#9ca3af" fontSize="7" textAnchor="middle">ECG Front-End</text>
            {/* Pins */}
            <rect x="10" y="35" width="15" height="8" fill="#fbbf24"/>
            <rect x="10" y="50" width="15" height="8" fill="#fbbf24"/>
            <rect x="125" y="35" width="15" height="8" fill="#22c55e"/>
            <rect x="125" y="50" width="15" height="8" fill="#22c55e"/>
            <text x="5" y="42" fill="#fbbf24" fontSize="6" textAnchor="end">RA</text>
            <text x="5" y="57" fill="#fbbf24" fontSize="6" textAnchor="end">LA</text>
            <text x="145" y="42" fill="#22c55e" fontSize="6">OUT</text>
            <text x="145" y="57" fill="#22c55e" fontSize="6">LO+</text>
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• 3-lead textile electrodes</div>
            <div>• 250Hz sampling</div>
            <div>• ±2 BPM accuracy</div>
            <div className="text-gray-500">Cost: $20.75</div>
          </div>
        </div>
        
        {/* PPG Module */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-green-400 font-bold">MAX30102 PPG (×2)</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            <rect x="25" y="20" width="100" height="60" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
            <text x="75" y="40" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="bold">MAX30102</text>
            <text x="75" y="53" fill="#9ca3af" fontSize="7" textAnchor="middle">HR + SpO2</text>
            {/* LED indicators */}
            <circle cx="55" cy="68" r="6" fill="#ef4444" opacity="0.8"/>
            <circle cx="75" cy="68" r="6" fill="#22c55e" opacity="0.8"/>
            <circle cx="95" cy="68" r="6" fill="#3b82f6" opacity="0.8"/>
            <text x="55" y="71" fill="#fff" fontSize="5" textAnchor="middle">IR</text>
            <text x="75" y="71" fill="#fff" fontSize="5" textAnchor="middle">R</text>
            <text x="95" y="71" fill="#fff" fontSize="5" textAnchor="middle">PD</text>
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• 520nm + 940nm wavelengths</div>
            <div>• 100Hz sampling</div>
            <div>• PTT blood pressure</div>
            <div className="text-gray-500">Cost: $7.15 each</div>
          </div>
        </div>
        
        {/* IMU Module */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <h3 className="text-purple-400 font-bold">MPU-9250 IMU</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            <rect x="35" y="20" width="80" height="60" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
            <text x="75" y="40" fill="#a855f7" fontSize="10" textAnchor="middle" fontWeight="bold">MPU-9250</text>
            <text x="75" y="53" fill="#9ca3af" fontSize="7" textAnchor="middle">9-Axis Motion</text>
            {/* Axis indicators */}
            <line x1="75" y1="70" x2="95" y2="65" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="75" y1="70" x2="75" y2="55" stroke="#22c55e" strokeWidth="2"/>
            <line x1="75" y1="70" x2="55" y2="75" stroke="#3b82f6" strokeWidth="2"/>
            <text x="98" y="65" fill="#ef4444" fontSize="6">X</text>
            <text x="77" y="55" fill="#22c55e" fontSize="6">Y</text>
            <text x="50" y="78" fill="#3b82f6" fontSize="6">Z</text>
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• Accelerometer + Gyro + Mag</div>
            <div>• 50Hz sampling</div>
            <div>• Activity classification</div>
            <div className="text-gray-500">Cost: $8.50</div>
          </div>
        </div>
        
        {/* Temperature Module */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <h3 className="text-cyan-400 font-bold">DS18B20 Temp (×4)</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            {[0,1,2,3].map(i => (
              <g key={i} transform={`translate(${20 + i*30}, 30)`}>
                <rect x="0" y="0" width="25" height="40" rx="3" fill="#1f2937" stroke="#06b6d4" strokeWidth="1"/>
                <text x="12.5" y="20" fill="#06b6d4" fontSize="6" textAnchor="middle">T{i+1}</text>
                <rect x="8" y="40" width="3" height="10" fill="#9ca3af"/>
                <rect x="14" y="40" width="3" height="10" fill="#9ca3af"/>
              </g>
            ))}
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• 1-Wire digital interface</div>
            <div>• ±0.5°C accuracy</div>
            <div>• Chest, Back, Arms</div>
            <div className="text-gray-500">Cost: $3.95 each</div>
          </div>
        </div>
        
        {/* Impedance Module */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h3 className="text-yellow-400 font-bold">AD5933 Impedance</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            <rect x="25" y="20" width="100" height="60" rx="4" fill="#1f2937" stroke="#eab308" strokeWidth="2"/>
            <text x="75" y="40" fill="#eab308" fontSize="10" textAnchor="middle" fontWeight="bold">AD5933</text>
            <text x="75" y="53" fill="#9ca3af" fontSize="7" textAnchor="middle">BIA + Respiration</text>
            {/* Electrode connections */}
            <circle cx="40" cy="68" r="5" fill="#eab308"/>
            <circle cx="60" cy="68" r="5" fill="#eab308"/>
            <circle cx="90" cy="68" r="5" fill="#eab308"/>
            <circle cx="110" cy="68" r="5" fill="#eab308"/>
            <text x="75" y="72" fill="#1f2937" fontSize="6" textAnchor="middle">4-ELECTRODE</text>
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• 50kHz excitation</div>
            <div>• Body fat %, hydration</div>
            <div>• Respiratory rate</div>
            <div className="text-gray-500">Cost: $15.60</div>
          </div>
        </div>
        
        {/* I2C Multiplexer */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <h3 className="text-pink-400 font-bold">TCA9548A I2C Mux</h3>
          </div>
          <svg viewBox="0 0 150 100" className="w-full mb-3">
            <rect x="45" y="25" width="60" height="50" rx="4" fill="#1f2937" stroke="#ec4899" strokeWidth="2"/>
            <text x="75" y="50" fill="#ec4899" fontSize="8" textAnchor="middle" fontWeight="bold">TCA9548A</text>
            <text x="75" y="62" fill="#9ca3af" fontSize="6" textAnchor="middle">0x70</text>
            {/* Input */}
            <line x1="20" y1="50" x2="45" y2="50" stroke="#22c55e" strokeWidth="2"/>
            <text x="15" y="53" fill="#22c55e" fontSize="6" textAnchor="end">I2C</text>
            {/* Outputs */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="105" y1={32 + i*12} x2="130" y2={32 + i*12} stroke="#22c55e" strokeWidth="1"/>
            ))}
          </svg>
          <div className="text-xs text-gray-400 space-y-1">
            <div>• 8-channel I2C switch</div>
            <div>• Required for dual MAX30102</div>
            <div>• Same address sensors</div>
            <div className="text-gray-500">Cost: $1.50</div>
          </div>
        </div>
      </div>
    </div>
  );

  // PAGE 4: GARMENT FRONT VIEW
  const GarmentFrontPage = () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-2">GARMENT — FRONT VIEW</h2>
      <p className="text-blue-400 mb-6">Sensor Placement & Conductive Pathways</p>
      
      <div className="flex gap-8">
        <svg viewBox="0 0 400 550" className="w-2/3 h-auto">
          {/* Shirt outline */}
          <defs>
            <linearGradient id="fabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          
          {/* Main shirt body */}
          <path 
            d="M120,80 L80,100 L40,180 L60,190 L80,140 L80,480 L320,480 L320,140 L340,190 L360,180 L320,100 L280,80 L240,100 L200,90 L160,100 Z"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* Left sleeve */}
          <path 
            d="M40,180 L20,280 L60,290 L80,200"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* Right sleeve */}
          <path 
            d="M360,180 L380,280 L340,290 L320,200"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* Collar */}
          <ellipse cx="200" cy="90" rx="40" ry="15" fill="none" stroke="#3b82f6" strokeWidth="3"/>
          
          {/* === SENSOR ZONES === */}
          
          {/* ECG Zone - Left Chest */}
          <g>
            <rect x="110" y="160" width="70" height="80" rx="8" fill="#ef444420" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"/>
            <circle cx="130" cy="190" r="12" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
            <text x="130" y="194" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">RA</text>
            <circle cx="160" cy="190" r="12" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
            <text x="160" y="194" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">LA</text>
            <circle cx="145" cy="225" r="12" fill="#22c55e" stroke="#fff" strokeWidth="2"/>
            <text x="145" y="229" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">RL</text>
            <text x="145" y="150" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">ECG ZONE</text>
          </g>
          
          {/* PPG Zone 1 - Right Chest */}
          <g>
            <circle cx="280" cy="200" r="25" fill="#22c55e20" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,3"/>
            <circle cx="280" cy="200" r="10" fill="#22c55e"/>
            <text x="280" y="204" fill="#fff" fontSize="8" textAnchor="middle">PPG</text>
            <text x="280" y="165" fill="#22c55e" fontSize="9" textAnchor="middle">MAX30102 #1</text>
          </g>
          
          {/* Respiratory Zone */}
          <g>
            <rect x="130" y="280" width="140" height="50" rx="8" fill="#eab30820" stroke="#eab308" strokeWidth="2" strokeDasharray="5,3"/>
            <line x1="140" y1="305" x2="260" y2="305" stroke="#eab308" strokeWidth="2"/>
            <text x="200" y="270" fill="#eab308" fontSize="10" textAnchor="middle" fontWeight="bold">RESPIRATORY ZONE</text>
            <text x="200" y="320" fill="#eab308" fontSize="8" textAnchor="middle">AD5933 Impedance</text>
          </g>
          
          {/* BIA Electrodes - Sides */}
          <g>
            <circle cx="95" cy="350" r="15" fill="#a855f720" stroke="#a855f7" strokeWidth="2"/>
            <text x="95" y="354" fill="#a855f7" fontSize="8" textAnchor="middle">E1</text>
            <circle cx="95" cy="400" r="15" fill="#a855f720" stroke="#a855f7" strokeWidth="2"/>
            <text x="95" y="404" fill="#a855f7" fontSize="8" textAnchor="middle">E2</text>
            <text x="95" y="330" fill="#a855f7" fontSize="8" textAnchor="middle">BIA</text>
          </g>
          
          <g>
            <circle cx="305" cy="350" r="15" fill="#a855f720" stroke="#a855f7" strokeWidth="2"/>
            <text x="305" y="354" fill="#a855f7" fontSize="8" textAnchor="middle">E3</text>
            <circle cx="305" cy="400" r="15" fill="#a855f720" stroke="#a855f7" strokeWidth="2"/>
            <text x="305" y="404" fill="#a855f7" fontSize="8" textAnchor="middle">E4</text>
            <text x="305" y="330" fill="#a855f7" fontSize="8" textAnchor="middle">BIA</text>
          </g>
          
          {/* Temperature Sensors */}
          <circle cx="200" cy="180" r="8" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="200" y="183" fill="#fff" fontSize="6" textAnchor="middle">T1</text>
          
          {/* Conductive Thread Pathways */}
          <path d="M130,200 L100,300 L100,450" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M160,200 L200,250 L200,450" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M280,200 L300,300 L300,450" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5"/>
          
          {/* Module Pocket Location */}
          <rect x="160" y="430" width="80" height="40" rx="4" fill="#3b82f620" stroke="#3b82f6" strokeWidth="2"/>
          <text x="200" y="455" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">CHIP X</text>
          <text x="200" y="420" fill="#3b82f6" fontSize="8" textAnchor="middle">Module Pocket</text>
        </svg>
        
        {/* Legend */}
        <div className="w-1/3 space-y-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-3">FRONT SENSOR ZONES</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div>
                  <div className="text-red-400 font-semibold">ECG Zone</div>
                  <div className="text-gray-500 text-xs">RA/LA/RL electrodes, 4th intercostal</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <div>
                  <div className="text-green-400 font-semibold">PPG Sensor</div>
                  <div className="text-gray-500 text-xs">MAX30102, HR + SpO2</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div>
                  <div className="text-yellow-400 font-semibold">Respiratory</div>
                  <div className="text-gray-500 text-xs">Chest impedance band</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div>
                  <div className="text-purple-400 font-semibold">BIA Electrodes</div>
                  <div className="text-gray-500 text-xs">4-point body composition</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                <div>
                  <div className="text-cyan-400 font-semibold">Temperature</div>
                  <div className="text-gray-500 text-xs">DS18B20 thermistor</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">FABRIC</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <div>73% Polyamide Microfiber</div>
              <div>27% Elastane</div>
              <div className="text-gray-500 text-xs mt-2">Nike Dri-FIT / Under Armour HeatGear equivalent</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">PATHWAYS</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <div>Silver-coated nylon thread</div>
              <div>0.5 ohm/cm resistance</div>
              <div>W1-W20 traces to module</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // PAGE 5: GARMENT BACK VIEW
  const GarmentBackPage = () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-2">GARMENT — BACK VIEW</h2>
      <p className="text-blue-400 mb-6">Solar Array & Secondary Sensors</p>
      
      <div className="flex gap-8">
        <svg viewBox="0 0 400 550" className="w-2/3 h-auto">
          <defs>
            <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          
          {/* Main shirt body - back */}
          <path 
            d="M120,80 L80,100 L40,180 L60,190 L80,140 L80,480 L320,480 L320,140 L340,190 L360,180 L320,100 L280,80 L240,95 L200,85 L160,95 Z"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* Left sleeve */}
          <path 
            d="M40,180 L20,280 L60,290 L80,200"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* Right sleeve */}
          <path 
            d="M360,180 L380,280 L340,290 L320,200"
            fill="url(#fabricGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
          />
          
          {/* === SOLAR PANEL ARRAY === */}
          <g>
            <text x="200" y="115" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">☀️ SOLAR ARRAY — 400cm²</text>
            
            {/* Solar panels - 4x5 grid */}
            {[0,1,2,3].map(row => (
              [0,1,2,3,4].map(col => (
                <g key={`${row}-${col}`}>
                  <rect 
                    x={110 + col*36} 
                    y={130 + row*35} 
                    width="34" 
                    height="33" 
                    fill="url(#solarGrad)" 
                    stroke="#fbbf24" 
                    strokeWidth="1"
                    rx="2"
                  />
                  {/* Solar cell lines */}
                  <line x1={110 + col*36 + 8} y1={130 + row*35} x2={110 + col*36 + 8} y2={130 + row*35 + 33} stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
                  <line x1={110 + col*36 + 17} y1={130 + row*35} x2={110 + col*36 + 17} y2={130 + row*35 + 33} stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
                  <line x1={110 + col*36 + 26} y1={130 + row*35} x2={110 + col*36 + 26} y2={130 + row*35 + 33} stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
                </g>
              ))
            ))}
            
            <text x="200" y="290" fill="#fbbf24" fontSize="9" textAnchor="middle">PowerFilm MP3-37 × 20 | 3W Peak</text>
          </g>
          
          {/* IMU - Central Back */}
          <g>
            <rect x="175" y="320" width="50" height="50" rx="8" fill="#a855f720" stroke="#a855f7" strokeWidth="2"/>
            <text x="200" y="345" fill="#a855f7" fontSize="10" textAnchor="middle" fontWeight="bold">IMU</text>
            <text x="200" y="358" fill="#a855f7" fontSize="7" textAnchor="middle">MPU-9250</text>
            <text x="200" y="310" fill="#a855f7" fontSize="8" textAnchor="middle">MOTION SENSOR</text>
          </g>
          
          {/* PPG Zone 2 - Shoulder */}
          <g>
            <circle cx="50" cy="240" r="20" fill="#22c55e20" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,3"/>
            <circle cx="50" cy="240" r="8" fill="#22c55e"/>
            <text x="50" y="243" fill="#fff" fontSize="6" textAnchor="middle">PPG</text>
            <text x="50" y="215" fill="#22c55e" fontSize="7" textAnchor="middle">MAX30102 #2</text>
            <text x="50" y="268" fill="#22c55e" fontSize="7" textAnchor="middle">(PTT Pair)</text>
          </g>
          
          {/* Temperature Sensors - Back */}
          <circle cx="140" cy="380" r="10" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="140" y="383" fill="#fff" fontSize="7" textAnchor="middle">T2</text>
          
          <circle cx="260" cy="380" r="10" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="260" y="383" fill="#fff" fontSize="7" textAnchor="middle">T3</text>
          
          {/* Arm temp sensors */}
          <circle cx="40" cy="285" r="8" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="40" y="288" fill="#fff" fontSize="6" textAnchor="middle">T4</text>
          
          <circle cx="360" cy="285" r="8" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="360" y="288" fill="#fff" fontSize="6" textAnchor="middle">T5</text>
          
          {/* Conductive pathways */}
          <path d="M200,270 L200,320" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.7"/>
          <path d="M200,370 L200,430" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M50,260 L80,320 L120,430" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5"/>
          
          {/* Module connector - back access */}
          <rect x="160" y="430" width="80" height="40" rx="4" fill="#3b82f620" stroke="#3b82f6" strokeWidth="2"/>
          <text x="200" y="455" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">CHIP X</text>
          
          {/* Waterproof zipper indication */}
          <line x1="240" y1="435" x2="240" y2="465" stroke="#60a5fa" strokeWidth="3"/>
          <text x="255" y="450" fill="#60a5fa" fontSize="7">YKK AquaGuard</text>
        </svg>
        
        {/* Legend */}
        <div className="w-1/3 space-y-4">
          <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
            <h3 className="text-yellow-400 font-bold mb-3">☀️ SOLAR SYSTEM</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Panels</span>
                <span>20× MP3-37</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Area</span>
                <span>400 cm²</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Peak Output</span>
                <span>3W (direct sun)</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Indoor</span>
                <span>50-100mW</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Runtime Boost</span>
                <span>+15-30%</span>
              </div>
              <div className="text-yellow-600 text-xs mt-2">TPU encapsulated, heat-pressed at 140°C</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-3">BACK SENSORS</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div>
                  <div className="text-purple-400 font-semibold">IMU</div>
                  <div className="text-gray-500 text-xs">Activity, posture, fall detection</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <div>
                  <div className="text-green-400 font-semibold">PPG #2</div>
                  <div className="text-gray-500 text-xs">Shoulder — PTT pair for BP</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                <div>
                  <div className="text-cyan-400 font-semibold">Temp T2-T5</div>
                  <div className="text-gray-500 text-xs">Back + arm zones</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">WATERPROOFING</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <div>YKK AquaGuard #5 zipper</div>
              <div>IPX7 rating achievable</div>
              <div>Removable module for washing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // PAGE 6: SYSTEM ARCHITECTURE
  const SystemArchPage = () => (
    <div className="min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-2">SYSTEM ARCHITECTURE</h2>
      <p className="text-blue-400 mb-6">Data Flow & Phoenix Integration</p>
      
      <svg viewBox="0 0 800 500" className="w-full h-auto">
        {/* GARMENT LAYER */}
        <g transform="translate(50, 50)">
          <rect x="0" y="0" width="200" height="180" rx="12" fill="#1e3a8a20" stroke="#3b82f6" strokeWidth="2"/>
          <text x="100" y="25" fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="bold">CONSCIOUS CLOTHES</text>
          <text x="100" y="40" fill="#60a5fa" fontSize="10" textAnchor="middle">Garment Layer</text>
          
          {/* Sensors */}
          <rect x="15" y="55" width="50" height="25" rx="4" fill="#ef4444" stroke="#fff" strokeWidth="1"/>
          <text x="40" y="72" fill="#fff" fontSize="8" textAnchor="middle">ECG</text>
          
          <rect x="75" y="55" width="50" height="25" rx="4" fill="#22c55e" stroke="#fff" strokeWidth="1"/>
          <text x="100" y="72" fill="#fff" fontSize="8" textAnchor="middle">PPG×2</text>
          
          <rect x="135" y="55" width="50" height="25" rx="4" fill="#eab308" stroke="#fff" strokeWidth="1"/>
          <text x="160" y="72" fill="#fff" fontSize="8" textAnchor="middle">RESP</text>
          
          <rect x="15" y="90" width="50" height="25" rx="4" fill="#a855f7" stroke="#fff" strokeWidth="1"/>
          <text x="40" y="107" fill="#fff" fontSize="8" textAnchor="middle">IMU</text>
          
          <rect x="75" y="90" width="50" height="25" rx="4" fill="#06b6d4" stroke="#fff" strokeWidth="1"/>
          <text x="100" y="107" fill="#fff" fontSize="8" textAnchor="middle">TEMP×4</text>
          
          <rect x="135" y="90" width="50" height="25" rx="4" fill="#f97316" stroke="#fff" strokeWidth="1"/>
          <text x="160" y="107" fill="#fff" fontSize="8" textAnchor="middle">BIA</text>
          
          {/* Chip */}
          <rect x="50" y="130" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" strokeWidth="2"/>
          <text x="100" y="152" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">CHIP X</text>
        </g>
        
        {/* Arrow to Phone */}
        <g transform="translate(260, 120)">
          <path d="M0,20 L60,20" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)"/>
          <text x="30" y="10" fill="#22c55e" fontSize="9" textAnchor="middle">BLE 5.0</text>
          <text x="30" y="40" fill="#9ca3af" fontSize="7" textAnchor="middle">Real-time stream</text>
        </g>
        
        {/* PHONE LAYER */}
        <g transform="translate(330, 50)">
          <rect x="0" y="0" width="140" height="180" rx="20" fill="#1f2937" stroke="#9ca3af" strokeWidth="2"/>
          <rect x="10" y="30" width="120" height="130" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1"/>
          
          <text x="70" y="20" fill="#9ca3af" fontSize="10" textAnchor="middle">iPhone / Android</text>
          
          <text x="70" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">PHOENIX</text>
          <text x="70" y="70" fill="#60a5fa" fontSize="8" textAnchor="middle">Consumer AI</text>
          
          {/* Domains */}
          <rect x="20" y="80" width="100" height="20" rx="3" fill="#dc262620" stroke="#dc2626" strokeWidth="1"/>
          <text x="70" y="94" fill="#dc2626" fontSize="8" textAnchor="middle">Mercury (Health)</text>
          
          <rect x="20" y="105" width="100" height="20" rx="3" fill="#3b82f620" stroke="#3b82f6" strokeWidth="1"/>
          <text x="70" y="119" fill="#3b82f6" fontSize="8" textAnchor="middle">Earth (Lifestyle)</text>
          
          <rect x="20" y="130" width="100" height="20" rx="3" fill="#a855f720" stroke="#a855f7" strokeWidth="1"/>
          <text x="70" y="144" fill="#a855f7" fontSize="8" textAnchor="middle">Consciousness</text>
        </g>
        
        {/* Arrow to Cloud */}
        <g transform="translate(480, 120)">
          <path d="M0,20 L60,20" stroke="#a855f7" strokeWidth="3"/>
          <text x="30" y="10" fill="#a855f7" fontSize="9" textAnchor="middle">HTTPS</text>
          <text x="30" y="40" fill="#9ca3af" fontSize="7" textAnchor="middle">Encrypted sync</text>
        </g>
        
        {/* CLOUD LAYER */}
        <g transform="translate(550, 30)">
          <ellipse cx="100" cy="60" rx="90" ry="50" fill="#0f172a" stroke="#60a5fa" strokeWidth="2"/>
          <ellipse cx="60" cy="90" rx="50" ry="30" fill="#0f172a" stroke="#60a5fa" strokeWidth="2"/>
          <ellipse cx="140" cy="90" rx="50" ry="30" fill="#0f172a" stroke="#60a5fa" strokeWidth="2"/>
          <ellipse cx="100" cy="110" rx="70" ry="35" fill="#0f172a" stroke="#60a5fa" strokeWidth="2"/>
          
          <text x="100" y="75" fill="#60a5fa" fontSize="10" textAnchor="middle" fontWeight="bold">AWS / HIPAA</text>
          <text x="100" y="100" fill="#9ca3af" fontSize="8" textAnchor="middle">Analytics + Storage</text>
        </g>
        
        {/* CLOCKWORK - B2B */}
        <g transform="translate(550, 170)">
          <rect x="0" y="0" width="180" height="80" rx="8" fill="#f9731620" stroke="#f97316" strokeWidth="2"/>
          <text x="90" y="25" fill="#f97316" fontSize="12" textAnchor="middle" fontWeight="bold">CLOCKWORK</text>
          <text x="90" y="40" fill="#fed7aa" fontSize="9" textAnchor="middle">B2B Platform</text>
          <text x="90" y="60" fill="#9ca3af" fontSize="8" textAnchor="middle">Gyms • Teams • Enterprise</text>
        </g>
        
        {/* DATA METRICS BOX */}
        <g transform="translate(50, 280)">
          <rect x="0" y="0" width="700" height="180" rx="8" fill="#1f293780" stroke="#374151" strokeWidth="1"/>
          <text x="350" y="25" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">BIOMETRIC OUTPUT</text>
          
          {/* Metrics grid */}
          <g transform="translate(20, 45)">
            {[
              { label: "Heart Rate", value: "±2 BPM", color: "#ef4444" },
              { label: "HRV", value: "RMSSD, SDNN", color: "#ef4444" },
              { label: "ECG Rhythm", value: "250Hz", color: "#ef4444" },
              { label: "SpO2", value: "±3-4%", color: "#22c55e" },
              { label: "Blood Pressure", value: "PTT trend", color: "#22c55e" },
              { label: "Resp Rate", value: "±2 br/min", color: "#eab308" },
              { label: "Body Fat %", value: "±5%", color: "#f97316" },
              { label: "Hydration", value: "BIA index", color: "#f97316" },
              { label: "Skin Temp", value: "±0.5°C", color: "#06b6d4" },
              { label: "Core Temp Est", value: "±1.5°C", color: "#06b6d4" },
              { label: "Activity", value: "Walk/Run/Sleep", color: "#a855f7" },
              { label: "Posture", value: "Real-time", color: "#a855f7" },
            ].map((m, i) => (
              <g key={i} transform={`translate(${(i % 6) * 110}, ${Math.floor(i / 6) * 55})`}>
                <rect x="0" y="0" width="100" height="45" rx="4" fill={`${m.color}15`} stroke={m.color} strokeWidth="1"/>
                <text x="50" y="18" fill={m.color} fontSize="9" textAnchor="middle" fontWeight="bold">{m.label}</text>
                <text x="50" y="35" fill="#9ca3af" fontSize="8" textAnchor="middle">{m.value}</text>
              </g>
            ))}
          </g>
        </g>
      </svg>
      
      <div className="mt-4 text-center text-gray-500 text-sm">
        Patent #63/889,364 • Digital Apple Inc. • Deadline: Sept 27, 2026
      </div>
    </div>
  );

  const pages = {
    1: <CoverPage />,
    2: <ChipExplodedPage />,
    3: <SensorModulesPage />,
    4: <GarmentFrontPage />,
    5: <GarmentBackPage />,
    6: <SystemArchPage />,
  };

  return (
    <div className="relative">
      {pages[page]}
      <NavButtons />
    </div>
  );
}
