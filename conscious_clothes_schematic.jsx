export default function ConsciousClothesSchematic() {
  const Wire = ({ x1, y1, x2, y2, color = "#666", dashed = false }) => (
    <line 
      x1={x1} y1={y1} x2={x2} y2={y2} 
      stroke={color} 
      strokeWidth="2"
      strokeDasharray={dashed ? "5,5" : "none"}
    />
  );

  const Bus = ({ x1, y1, x2, y2, color }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" />
  );

  const Component = ({ x, y, width, height, label, sublabel, color = "#3b82f6", textColor = "white" }) => (
    <g>
      <rect 
        x={x} y={y} 
        width={width} height={height} 
        fill={color} 
        rx="6"
        stroke="#1e3a5f"
        strokeWidth="2"
      />
      <text x={x + width/2} y={y + height/2 - (sublabel ? 6 : 0)} fill={textColor} fontSize="11" fontWeight="bold" textAnchor="middle">{label}</text>
      {sublabel && <text x={x + width/2} y={y + height/2 + 10} fill={textColor} fontSize="9" textAnchor="middle">{sublabel}</text>}
    </g>
  );

  const Pin = ({ x, y, label, side = "right" }) => (
    <g>
      <circle cx={x} cy={y} r="4" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
      <text 
        x={side === "right" ? x + 8 : x - 8} 
        y={y + 4} 
        fill="#374151" 
        fontSize="8" 
        textAnchor={side === "right" ? "start" : "end"}
      >{label}</text>
    </g>
  );

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-2">Conscious Clothes - Wiring Schematic</h1>
      <p className="text-center text-gray-600 mb-4 text-sm">Based on Patent Appendix F Specifications</p>
      
      <svg viewBox="0 0 900 700" className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Legend */}
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="160" height="90" fill="#f3f4f6" rx="4" stroke="#d1d5db" />
          <text x="80" y="18" fontSize="11" fontWeight="bold" textAnchor="middle">Wire Legend</text>
          <line x1="10" y1="35" x2="50" y2="35" stroke="#22c55e" strokeWidth="3" />
          <text x="58" y="38" fontSize="9">I2C Bus (SDA/SCL)</text>
          <line x1="10" y1="52" x2="50" y2="52" stroke="#3b82f6" strokeWidth="3" />
          <text x="58" y="55" fontSize="9">SPI Bus</text>
          <line x1="10" y1="69" x2="50" y2="69" stroke="#ef4444" strokeWidth="2" />
          <text x="58" y="72" fontSize="9">Power (3.3V/VBAT)</text>
          <line x1="10" y1="86" x2="50" y2="86" stroke="#666" strokeWidth="2" />
          <text x="58" y="89" fontSize="9">UART/GPIO</text>
        </g>

        {/* Power Section - Top Left */}
        <g transform="translate(30, 130)">
          <rect x="0" y="0" width="200" height="150" fill="#fef2f2" rx="8" stroke="#fca5a5" strokeWidth="2" strokeDasharray="5,5" />
          <text x="100" y="20" fontSize="12" fontWeight="bold" fill="#dc2626" textAnchor="middle">POWER SYSTEM</text>
          
          {/* Battery */}
          <Component x={20} y={35} width={70} height={40} label="LiPo" sublabel="1000mAh" color="#ef4444" />
          
          {/* BQ24075 */}
          <Component x={110} y={35} width={70} height={40} label="BQ24075" sublabel="Charger" color="#f97316" />
          
          {/* Solar */}
          <Component x={20} y={95} width={70} height={40} label="Solar" sublabel="MP3-37 x20" color="#eab308" textColor="#1f2937" />
          
          {/* USB */}
          <rect x="110" y="95" width="70" height="40" fill="white" rx="4" stroke="#6b7280" strokeWidth="2" />
          <text x="145" y="112" fontSize="10" fontWeight="bold" textAnchor="middle">USB-C</text>
          <text x="145" y="125" fontSize="8" textAnchor="middle">5V Input</text>
        </g>

        {/* MCU - Center */}
        <g transform="translate(300, 180)">
          <rect x="0" y="0" width="180" height="200" fill="#1e40af" rx="10" stroke="#1e3a8a" strokeWidth="3" />
          <text x="90" y="30" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">STM32F405RGT6</text>
          <text x="90" y="48" fontSize="10" fill="#93c5fd" textAnchor="middle">Main MCU</text>
          
          {/* Left side pins */}
          <Pin x={0} y={70} label="PA5 SCL" side="left" />
          <Pin x={0} y={90} label="PA6 SDA" side="left" />
          <Pin x={0} y={115} label="PA2 TX" side="left" />
          <Pin x={0} y={135} label="PA3 RX" side="left" />
          <Pin x={0} y={160} label="PC0 ADC" side="left" />
          <Pin x={0} y={180} label="3.3V" side="left" />
          
          {/* Right side pins */}
          <Pin x={180} y={70} label="PB13 SCK" />
          <Pin x={180} y={90} label="PB14 MISO" />
          <Pin x={180} y={110} label="PB15 MOSI" />
          <Pin x={180} y={135} label="PA8 1-Wire" />
          <Pin x={180} y={160} label="PA1 INT" />
          <Pin x={180} y={180} label="GND" />
        </g>

        {/* I2C Bus Line - Vertical */}
        <Bus x1={270} y1={250} x2={270} y2={550} color="#22c55e" />
        <text x="255" y="400" fontSize="10" fill="#22c55e" transform="rotate(-90, 255, 400)">I2C BUS</text>

        {/* I2C Devices - Left Side */}
        {/* MAX30102 #1 */}
        <g transform="translate(50, 320)">
          <Component x={0} y={0} width={100} height={50} label="MAX30102 #1" sublabel="PPG Finger" color="#10b981" />
          <text x="50" y="65" fontSize="8" fill="#6b7280" textAnchor="middle">Addr: 0x57</text>
          <Wire x1={100} y1={25} x2={220} y2={25} color="#22c55e" />
        </g>

        {/* MAX30102 #2 */}
        <g transform="translate(50, 400)">
          <Component x={0} y={0} width={100} height={50} label="MAX30102 #2" sublabel="PPG Wrist" color="#10b981" />
          <text x="50" y="65" fontSize="8" fill="#6b7280" textAnchor="middle">Addr: 0x57 (mux)</text>
          <Wire x1={100} y1={25} x2={220} y2={25} color="#22c55e" />
        </g>

        {/* MPU-9250 */}
        <g transform="translate(50, 480)">
          <Component x={0} y={0} width={100} height={50} label="MPU-9250" sublabel="9-axis IMU" color="#8b5cf6" />
          <text x="50" y="65" fontSize="8" fill="#6b7280" textAnchor="middle">Addr: 0x68</text>
          <Wire x1={100} y1={25} x2={220} y2={25} color="#22c55e" />
        </g>

        {/* AD5933 */}
        <g transform="translate(50, 560)">
          <Component x={0} y={0} width={100} height={50} label="AD5933" sublabel="Impedance" color="#ec4899" />
          <text x="50" y="65" fontSize="8" fill="#6b7280" textAnchor="middle">Addr: 0x0D</text>
          <Wire x1={100} y1={25} x2={220} y2={25} color="#22c55e" />
        </g>

        {/* Connect I2C bus to MCU */}
        <Wire x1={270} y1={250} x2={300} y2={250} color="#22c55e" />

        {/* nRF52832 - Right of MCU */}
        <g transform="translate(550, 200)">
          <Component x={0} y={0} width={120} height={70} label="nRF52832" sublabel="BLE Module" color="#06b6d4" />
          <text x="60" y="85" fontSize="8" fill="#6b7280" textAnchor="middle">UART @ 115200</text>
          {/* UART connections */}
          <Wire x1={0} y1={25} x2={-70} y2={25} color="#666" />
          <Wire x1={0} y1={45} x2={-70} y2={45} color="#666" />
          <text x="-35" y="20" fontSize="8" fill="#666">RX←</text>
          <text x="-35" y="40" fontSize="8" fill="#666">TX→</text>
        </g>

        {/* AD8232 ECG - Below nRF */}
        <g transform="translate(550, 320)">
          <Component x={0} y={0} width={120} height={60} label="AD8232" sublabel="ECG Analog FE" color="#f43f5e" />
          <text x="60" y="75" fontSize="8" fill="#6b7280" textAnchor="middle">Analog → PA0 (ADC)</text>
          {/* ADC connection */}
          <Wire x1={0} y1={30} x2={-70} y2={90} color="#666" />
        </g>

        {/* ECG Electrodes */}
        <g transform="translate(700, 300)">
          <rect x="0" y="0" width="90" height="100" fill="#fef3c7" rx="6" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
          <text x="45" y="18" fontSize="10" fontWeight="bold" fill="#92400e" textAnchor="middle">Electrodes</text>
          <circle cx="25" cy="40" r="12" fill="#fbbf24" stroke="#92400e" />
          <text x="25" y="44" fontSize="8" textAnchor="middle">RA</text>
          <circle cx="65" cy="40" r="12" fill="#fbbf24" stroke="#92400e" />
          <text x="65" y="44" fontSize="8" textAnchor="middle">LA</text>
          <circle cx="45" cy="75" r="12" fill="#22c55e" stroke="#166534" />
          <text x="45" y="79" fontSize="8" textAnchor="middle">RL</text>
          <text x="45" y="95" fontSize="7" fill="#6b7280" textAnchor="middle">Conductive Fabric</text>
          <Wire x1={0} y1={50} x2={-30} y2={50} color="#666" />
        </g>

        {/* DS18B20 Temp Sensors - 1-Wire Bus */}
        <g transform="translate(550, 430)">
          <rect x="0" y="0" width="180" height="80" fill="#ecfdf5" rx="6" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="4,4" />
          <text x="90" y="18" fontSize="10" fontWeight="bold" fill="#065f46" textAnchor="middle">1-Wire Bus (PA8)</text>
          
          <rect x="10" y="30" width="35" height="40" fill="#10b981" rx="4" />
          <text x="27" y="52" fontSize="8" fill="white" textAnchor="middle">T1</text>
          <text x="27" y="63" fontSize="6" fill="white" textAnchor="middle">Chest</text>
          
          <rect x="52" y="30" width="35" height="40" fill="#10b981" rx="4" />
          <text x="69" y="52" fontSize="8" fill="white" textAnchor="middle">T2</text>
          <text x="69" y="63" fontSize="6" fill="white" textAnchor="middle">Back</text>
          
          <rect x="94" y="30" width="35" height="40" fill="#10b981" rx="4" />
          <text x="111" y="52" fontSize="8" fill="white" textAnchor="middle">T3</text>
          <text x="111" y="63" fontSize="6" fill="white" textAnchor="middle">Arm</text>
          
          <rect x="136" y="30" width="35" height="40" fill="#10b981" rx="4" />
          <text x="153" y="52" fontSize="8" fill="white" textAnchor="middle">T4</text>
          <text x="153" y="63" fontSize="6" fill="white" textAnchor="middle">Ambient</text>
          
          <Wire x1={0} y1={50} x2={-70} y2={-75} color="#666" />
        </g>

        {/* SPI Flash - Optional */}
        <g transform="translate(550, 540)">
          <Component x={0} y={0} width={100} height={50} label="W25Q128" sublabel="16MB Flash" color="#6366f1" />
          <text x="50" y="65" fontSize="8" fill="#6b7280" textAnchor="middle">SPI (PB13-15)</text>
          <Wire x1={0} y1={25} x2={-70} y2={-150} color="#3b82f6" />
        </g>

        {/* Power rails */}
        <g>
          {/* 3.3V rail */}
          <line x1="230" y1="150" x2="700" y2="150" stroke="#ef4444" strokeWidth="3" />
          <text x="460" y="145" fontSize="10" fill="#ef4444" textAnchor="middle">3.3V Rail</text>
          
          {/* GND rail */}
          <line x1="230" y1="650" x2="700" y2="650" stroke="#374151" strokeWidth="3" />
          <text x="460" y="670" fontSize="10" fill="#374151" textAnchor="middle">GND Rail</text>
        </g>

        {/* Power connection from BQ24075 to rails */}
        <Wire x1={230} y1={200} x2={230} y2={150} color="#ef4444" />

        {/* Notes */}
        <g transform="translate(720, 480)">
          <rect x="0" y="0" width="160" height="140" fill="#f0fdf4" rx="6" stroke="#86efac" />
          <text x="80" y="20" fontSize="11" fontWeight="bold" fill="#166534" textAnchor="middle">Quick Reference</text>
          <text x="10" y="40" fontSize="9" fill="#374151">• I2C: 400kHz</text>
          <text x="10" y="55" fontSize="9" fill="#374151">• SPI: 10MHz</text>
          <text x="10" y="70" fontSize="9" fill="#374151">• UART: 115200 baud</text>
          <text x="10" y="85" fontSize="9" fill="#374151">• 1-Wire: 4.7kΩ pullup</text>
          <text x="10" y="100" fontSize="9" fill="#374151">• I2C: 10kΩ pullups</text>
          <text x="10" y="115" fontSize="9" fill="#374151">• ADC: 12-bit @ 1MHz</text>
          <text x="10" y="130" fontSize="9" fill="#374151">• VCC: 3.3V (all)</text>
        </g>

        {/* Title Block */}
        <g transform="translate(720, 20)">
          <rect x="0" y="0" width="160" height="70" fill="#1e3a8a" rx="6" />
          <text x="80" y="22" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">CONSCIOUS CLOTHES</text>
          <text x="80" y="40" fontSize="9" fill="#93c5fd" textAnchor="middle">Smart Garment System</text>
          <text x="80" y="55" fontSize="8" fill="#93c5fd" textAnchor="middle">Rev 1.0 - Prototype</text>
        </g>
      </svg>

      {/* Pin Connection Table */}
      <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Pin Connection Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <table className="w-full text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2 text-left">STM32 Pin</th>
                <th className="p-2 text-left">Connection</th>
                <th className="p-2 text-left">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-2">PA0</td><td>AD8232 OUT</td><td>ECG ADC Input</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">PA2</td><td>nRF52 RX</td><td>UART TX</td></tr>
              <tr className="border-b"><td className="p-2">PA3</td><td>nRF52 TX</td><td>UART RX</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">PA5</td><td>I2C Bus</td><td>SCL (w/ 10kΩ)</td></tr>
              <tr className="border-b"><td className="p-2">PA6</td><td>I2C Bus</td><td>SDA (w/ 10kΩ)</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">PA8</td><td>DS18B20 x4</td><td>1-Wire (w/ 4.7kΩ)</td></tr>
              <tr className="border-b"><td className="p-2">PB13</td><td>Flash SCK</td><td>SPI Clock</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">PB14</td><td>Flash MISO</td><td>SPI Data In</td></tr>
              <tr className="border-b"><td className="p-2">PB15</td><td>Flash MOSI</td><td>SPI Data Out</td></tr>
            </tbody>
          </table>
          
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 text-left">I2C Device</th>
                <th className="p-2 text-left">Address</th>
                <th className="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-2">MAX30102 #1</td><td>0x57</td><td>Primary PPG</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">MAX30102 #2</td><td>0x57*</td><td>Via TCA9548A mux</td></tr>
              <tr className="border-b"><td className="p-2">MPU-9250</td><td>0x68</td><td>AD0 → GND</td></tr>
              <tr className="border-b bg-gray-50"><td className="p-2">AD5933</td><td>0x0D</td><td>Fixed address</td></tr>
              <tr className="border-b"><td className="p-2">TCA9548A</td><td>0x70</td><td>I2C Multiplexer</td></tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Both MAX30102 have same address - need I2C multiplexer (TCA9548A) for second sensor</li>
            <li>• All I2C lines need 10kΩ pull-up resistors to 3.3V</li>
            <li>• 1-Wire bus needs single 4.7kΩ pull-up resistor</li>
            <li>• AD8232 output is analog (0-3.3V) → connect to ADC pin</li>
            <li>• nRF52832 UART is crossed: STM32 TX → nRF RX, STM32 RX → nRF TX</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
