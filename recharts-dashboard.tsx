import React, { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { TrendingUp, Users, DollarSign, ShoppingCart, Calendar, Filter } from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Sample data
  const salesData = [
    { month: 'Jan', revenue: 4000, orders: 240, customers: 120 },
    { month: 'Feb', revenue: 3000, orders: 198, customers: 98 },
    { month: 'Mar', revenue: 5000, orders: 290, customers: 145 },
    { month: 'Apr', revenue: 4500, orders: 267, customers: 134 },
    { month: 'May', revenue: 6000, orders: 340, customers: 170 },
    { month: 'Jun', revenue: 5500, orders: 315, customers: 158 },
    { month: 'Jul', revenue: 7000, orders: 398, customers: 199 },
    { month: 'Aug', revenue: 6800, orders: 385, customers: 193 },
    { month: 'Sep', revenue: 7500, orders: 425, customers: 213 },
    { month: 'Oct', revenue: 8200, orders: 465, customers: 233 },
    { month: 'Nov', revenue: 9000, orders: 510, customers: 255 },
    { month: 'Dec', revenue: 9800, orders: 555, customers: 278 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3b82f6' },
    { name: 'Clothing', value: 25, color: '#10b981' },
    { name: 'Home & Garden', value: 20, color: '#f59e0b' },
    { name: 'Sports', value: 12, color: '#ef4444' },
    { name: 'Books', value: 8, color: '#8b5cf6' }
  ];

  const dailyTrafficData = [
    { day: 'Mon', visitors: 1200, pageViews: 3400 },
    { day: 'Tue', visitors: 1900, pageViews: 4200 },
    { day: 'Wed', visitors: 1600, pageViews: 3800 },
    { day: 'Thu', visitors: 2100, pageViews: 4600 },
    { day: 'Fri', visitors: 2400, pageViews: 5200 },
    { day: 'Sat', visitors: 1800, pageViews: 3900 },
    { day: 'Sun', visitors: 1500, pageViews: 3200 }
  ];

  const conversionData = [
    { stage: 'Visitors', value: 10000, color: '#e5e7eb' },
    { stage: 'Leads', value: 3000, color: '#d1d5db' },
    { stage: 'Prospects', value: 1200, color: '#9ca3af' },
    { stage: 'Customers', value: 300, color: '#6b7280' }
  ];

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Total Orders',
      value: '3,847',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: '12,489',
      change: '+18.7%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '23.4%',
      change: '+3.1%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your business performance and key metrics</p>
          </div>
          <div className="flex gap-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${kpi.bgColor}`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.iconColor}`} />
                </div>
                <span className={`text-sm font-medium ${kpi.color}`}>{kpi.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{kpi.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="revenue">Revenue</option>
              <option value="orders">Orders</option>
              <option value="customers">Customers</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke="#3b82f6" 
                strokeWidth={2}
                fill="url(#colorGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Share']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Traffic */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Traffic</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dailyTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="visitors" fill="#3b82f6" name="Visitors" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pageViews" fill="#10b981" name="Page Views" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h3>
          <div className="space-y-4">
            {conversionData.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm text-gray-600">{stage.value.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(stage.value / conversionData[0].value) * 100}%`,
                      backgroundColor: stage.color
                    }}
                  ></div>
                </div>
                {index < conversionData.length - 1 && (
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {Math.round((conversionData[index + 1].value / stage.value) * 100)}% conversion
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;