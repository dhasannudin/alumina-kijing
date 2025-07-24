import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Truck,
} from "lucide-react";

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState("produktivitas");

  // Data operasional
  const cycleData = [
    {
      parameter: "SPMT Cycle",
      target: 60.0,
      d1: 66.35,
      d2: 64.07,
      d3: 61.39,
      status: "warning",
    },
    {
      parameter: "BAI Cycle",
      target: 80.0,
      d1: 58.9,
      d2: 71.43,
      d3: 73.29,
      status: "good",
    },
    {
      parameter: "Turn Round Trip",
      target: 140.0,
      d1: 125.25,
      d2: 135.5,
      d3: 134.68,
      status: "good",
    },
  ];

  const performanceData = [
    // Cycle Port Operation (SPMT)
    {
      metric: "Proses Plugging Flexible Hose Ke Konnector Truck",
      target: 2.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Proses menaikan pressure",
      target: 15.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Proses Pemompaan Alumina Ke kapal",
      target: 41.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Proses Un Plugging Flexible Hose dari Truck",
      target: 2.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Total waktu per truk (SPMT)",
      target: 60.0,
      d1: 66.35,
      d2: 64.07,
      d3: 61.39,
      unit: "Menit",
      status: "warning",
    },

    // Cycle bulk silo to port (BAI)
    {
      metric: "Antri dan Muat Silo",
      target: 20.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Perjalanan ke pelabuhan (11 km)",
      target: 30.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Kembali ke pelabuhan (11 km)",
      target: 30.0,
      d1: null,
      d2: null,
      d3: null,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Total waktu per truk (BAI)",
      target: 80.0,
      d1: 58.9,
      d2: 71.43,
      d3: 73.29,
      unit: "Menit",
      status: "good",
    },

    // Performance Metrics
    {
      metric: "Turn Round Trip",
      target: 140.0,
      d1: 125.25,
      d2: 135.5,
      d3: 134.68,
      unit: "Menit",
      status: "good",
    },
    {
      metric: "Trip per Day",
      target: 10.0,
      d1: 4.0,
      d2: 7.0,
      d3: 7.0,
      unit: "Trip",
      status: "critical",
    },
    {
      metric: "Kebutuhan truk/hari",
      target: 16.0,
      d1: 15.0,
      d2: 15.0,
      d3: 15.0,
      unit: "Truk",
      status: "good",
    },
    {
      metric: "Ritase",
      target: 160.0,
      d1: 79.0,
      d2: 113.0,
      d3: 110.0,
      unit: "Rit",
      status: "critical",
    },
    {
      metric: "Kapasitas Trucking",
      target: 30.0,
      d1: 26.15,
      d2: 25.64,
      d3: 25.75,
      unit: "MT",
      status: "warning",
    },
    {
      metric: "Kinerja per jam",
      target: 300.0,
      d1: 135.8,
      d2: 196.0,
      d3: 189.73,
      unit: "TOH",
      status: "critical",
    },
    {
      metric: "Effective Time",
      target: 15.0,
      d1: 15.0,
      d2: 15.0,
      d3: 15.0,
      unit: "Jam",
      status: "good",
    },
    {
      metric: "Produktivitas Perpalka/Day",
      target: 900.0,
      d1: 407.4,
      d2: 588.0,
      d3: 569.2,
      unit: "MT",
      status: "critical",
    },
    {
      metric: "Produksi per day",
      target: 4500.0,
      d1: 2037.0,
      d2: 2940.0,
      d3: 2846.0,
      unit: "TSD",
      status: "critical",
    },
  ];

  const trendData = [
    { day: "D1", tripPerDay: 4, ritase: 79, produktivitas: 2037, target: 4500 },
    {
      day: "D2",
      tripPerDay: 7,
      ritase: 113,
      produktivitas: 2940,
      target: 4500,
    },
    {
      day: "D3",
      tripPerDay: 7,
      ritase: 110,
      produktivitas: 2846,
      target: 4500,
    },
  ];

  const gapAnalysis = [
    { name: "Achievement", value: 63.2, fill: "#ef4444" },
    { name: "Gap", value: 36.8, fill: "#f3f4f6" },
  ];

  const bottleneckData = [
    { issue: "Trip Frequency", impact: 60, priority: "High" },
    { issue: "Fleet Utilization", impact: 45, priority: "High" },
    { issue: "Cycle Time", impact: 20, priority: "Medium" },
    { issue: "Scheduling", impact: 35, priority: "Medium" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "critical":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-4 h-4" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4" />;
      case "critical":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("id-ID").format(num);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Operasional Pelabuhan Kijing
        </h1>
        <p className="text-gray-600">
          Evaluasi Kinerja Muat Alumina - Pelindo Multi Terminal
        </p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">
              Produktivitas Rata-rata
            </div>
            <Truck className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(2608)} TSD
          </div>
          <div className="text-sm text-red-600 flex items-center mt-2">
            <TrendingDown className="w-4 h-4 mr-1" />
            58% dari target
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">
              Trip per Day Rata-rata
            </div>
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">6 Trip</div>
          <div className="text-sm text-red-600 flex items-center mt-2">
            <TrendingDown className="w-4 h-4 mr-1" />
            60% dari target
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">
              Turn Round Trip
            </div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">132 min</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            96% dari target
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">
              Ritase Rata-rata
            </div>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">101 Rit</div>
          <div className="text-sm text-red-600 flex items-center mt-2">
            <TrendingDown className="w-4 h-4 mr-1" />
            63% dari target
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Trend Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Trend Produktivitas vs Target
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="produktivitas"
                stroke="#ef4444"
                strokeWidth={3}
                name="Produktivitas (TSD)"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target (TSD)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gap Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Gap Analysis - Achievement Rate
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={gapAnalysis}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {gapAnalysis.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <div className="text-2xl font-bold text-red-600">63.2%</div>
            <div className="text-sm text-gray-500">
              Average Achievement Rate
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Cycle Time Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Cycle Time Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cycleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="parameter" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} min`} />
              <Legend />
              <Bar dataKey="target" fill="#10b981" name="Target" />
              <Bar dataKey="d3" fill="#3b82f6" name="D3 (Latest)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottleneck Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Bottleneck Impact Analysis
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bottleneckData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="issue" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip formatter={(value) => `${value}% impact`} />
              <Bar dataKey="impact" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Status Table */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Status Performance Detail
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parameter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  D1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  D2
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  D3
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.metric}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatNumber(item.target)} {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatNumber(item.d1)} {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatNumber(item.d2)} {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatNumber(item.d3)} {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                      <span className="ml-1 capitalize">{item.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Rekomendasi Prioritas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-red-700 mb-2">
              Critical Actions
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • Investigate root cause trip frequency rendah (4-7 vs target
                10)
              </li>
              <li>• Optimize fleet scheduling dan truck availability</li>
              <li>• Review queue management di loading/unloading points</li>
            </ul>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-yellow-700 mb-2">
              Medium Priority
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Fine-tune SPMT cycle time (61.39 → 60 min target)</li>
              <li>• Implement real-time monitoring system</li>
              <li>• Standardize shift changeover procedures</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Key Insight:</strong> Cycle time performance sudah baik (96%
            achievement rate), namun throughput rendah karena frequency issue.
            Focus improvement pada operational scheduling dan fleet utilization
            untuk mencapai target ritase 150-160.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
