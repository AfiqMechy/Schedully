/**
 * Schedully - Class Schedule & Lock Screen Wallpaper Builder
 * Includes Matcha Green, Mocha Brown Palettes + Auto-Contrast Lockscreen Clock Fix
 */

const THEME_PALETTES = {
  light: {
    indigo: {
      top: '#2563EB', bottom: '#DBEAFE', bg: '#F0F4FA', surface: '#FFFFFF', variant: '#E2E8F0', text: '#0F172A', subtext: '#475569', outline: '#CBD5E1', primaryContainer: '#DBEAFE',
      defaultBg: '#F0F4FA', defaultHeader: '#DBEAFE', defaultSurface: '#F8FAFC',
      swatches: ['#F8FAFC', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#475569', '#334155', '#1E293B', '#0F172A'],
      courseSwatches: ['#1D4ED8', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']
    },
    coral: {
      top: '#D97706', bottom: '#FEF3C7', bg: '#FFFBEB', surface: '#FFFFFF', variant: '#FDE68A', text: '#451A03', subtext: '#92400E', outline: '#FCD34D', primaryContainer: '#FEF3C7',
      defaultBg: '#FFFBEB', defaultHeader: '#FDE68A', defaultSurface: '#FFFDF5',
      swatches: ['#FFFDF5', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'],
      courseSwatches: ['#92400E', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FDE68A']
    },
    lavender: {
      top: '#7C3AED', bottom: '#EDE9FE', bg: '#FAF5FF', surface: '#FFFFFF', variant: '#E9D5FF', text: '#3B0764', subtext: '#7E22CE', outline: '#D8B4FE', primaryContainer: '#EDE9FE',
      defaultBg: '#FAF5FF', defaultHeader: '#E9D5FF', defaultSurface: '#FAF8FF',
      swatches: ['#FAF8FF', '#F3E8FF', '#E9D5FF', '#D8B4FE', '#C084FC', '#A855F7', '#9333EA', '#7E22CE', '#6B21A8'],
      courseSwatches: ['#5B21B6', '#6D28D9', '#7C3AED', '#8B5CF6', '#A855F7', '#C084FC']
    },
    blush: {
      top: '#DB2777', bottom: '#FCE7F3', bg: '#FDF2F8', surface: '#FFFFFF', variant: '#FBCFE8', text: '#500724', subtext: '#BE185D', outline: '#F9A8D4', primaryContainer: '#FCE7F3',
      defaultBg: '#FDF2F8', defaultHeader: '#FBCFE8', defaultSurface: '#FFF5F9',
      swatches: ['#FFF5F9', '#FCE7F3', '#FBCFE8', '#F9A8D4', '#F472B6', '#EC4899', '#DB2777', '#BE185D', '#9D174D'],
      courseSwatches: ['#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', '#FDA4AF']
    },
    sky: {
      top: '#0284C7', bottom: '#E0F2FE', bg: '#F0F9FF', surface: '#FFFFFF', variant: '#BAE6FD', text: '#0C4A6E', subtext: '#0369A1', outline: '#7DD3FC', primaryContainer: '#E0F2FE',
      defaultBg: '#F0F9FF', defaultHeader: '#BAE6FD', defaultSurface: '#F5FBFF',
      swatches: ['#F5FBFF', '#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8', '#0284C7', '#0369A1', '#075985', '#0C4A6E'],
      courseSwatches: ['#075985', '#0369A1', '#0284C7', '#38BDF8', '#7DD3FC', '#BAE6FD']
    },
    matcha: {
      top: '#166534', bottom: '#DCFCE7', bg: '#F0FDF4', surface: '#FFFFFF', variant: '#BBF7D0', text: '#14532D', subtext: '#15803D', outline: '#86EFAC', primaryContainer: '#DCFCE7',
      defaultBg: '#F0FDF4', defaultHeader: '#BBF7D0', defaultSurface: '#F4FDF7',
      swatches: ['#F4FDF7', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#14532D'],
      courseSwatches: ['#14532D', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC']
    },
    mocha: {
      top: '#7C6B5E', bottom: '#ECE1D5', bg: '#F5EBE4', surface: '#FFFFFF', variant: '#D6C6B9', text: '#4E3E37', subtext: '#7C6B5E', outline: '#CBB4A9', primaryContainer: '#ECE1D5',
      defaultBg: '#F5EBE4', defaultHeader: '#D6C6B9', defaultSurface: '#FCF8F5',
      swatches: ['#FCF8F5', '#ECE1D5', '#D6C6B9', '#CBB4A9', '#AA9686', '#8C7868', '#7C6B5E', '#6B4D43', '#4E3E37'],
      courseSwatches: ['#4E3E37', '#6B4D43', '#7C6B5E', '#8C7868', '#AA9686', '#CBB4A9']
    },
    sage: {
      top: '#10B981', bottom: '#D1FAE5', bg: '#ECFDF5', surface: '#FFFFFF', variant: '#A7F3D0', text: '#064E3B', subtext: '#047857', outline: '#6EE7B7', primaryContainer: '#D1FAE5',
      defaultBg: '#ECFDF5', defaultHeader: '#A7F3D0', defaultSurface: '#F2FDF7',
      swatches: ['#F8FFF9', '#D1FAE5', '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669', '#047857', '#064E3B'],
      courseSwatches: ['#064E3B', '#047857', '#059669', '#10B981', '#34D399', '#6EE7B7']
    },
    slate: {
      top: '#3D405B', bottom: '#E5E7EB', bg: '#F3F4F6', surface: '#FFFFFF', variant: '#D1D5DB', text: '#1E293B', subtext: '#475569', outline: '#9CA3AF', primaryContainer: '#E5E7EB',
      defaultBg: '#F3F4F6', defaultHeader: '#D1D5DB', defaultSurface: '#F9FAFB',
      swatches: ['#F9FAFB', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827'],
      courseSwatches: ['#1E293B', '#334155', '#3D405B', '#475569', '#64748B', '#94A3B8']
    },
    sunset: { top: '#E34F26', bottom: '#FFDDC1', bg: '#FFF0E6', surface: '#FFFFFF', variant: '#FFCBA4', text: '#5C1A06', subtext: '#E34F26', outline: '#FFB38A', primaryContainer: '#FFDDC1', defaultBg: '#FFF0E6', defaultHeader: '#FFCBA4', defaultSurface: '#FFF6F0', swatches: ['#FFF6F0', '#FFDDC1', '#FFCBA4', '#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'], courseSwatches: ['#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A'] },
    ocean: { top: '#006D77', bottom: '#EDF6F9', bg: '#F4F9F9', surface: '#FFFFFF', variant: '#83C5BE', text: '#003A40', subtext: '#006D77', outline: '#83C5BE', primaryContainer: '#EDF6F9', defaultBg: '#F4F9F9', defaultHeader: '#83C5BE', defaultSurface: '#F8FBFB', swatches: ['#F8FBFB', '#EDF6F9', '#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#002225', '#001012'], courseSwatches: ['#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#EDF6F9'] },
    forest: { top: '#4D7C0F', bottom: '#ECFCCB', bg: '#F7FEE7', surface: '#FFFFFF', variant: '#D9F99D', text: '#365314', subtext: '#3F6212', outline: '#BEF264', primaryContainer: '#ECFCCB', defaultBg: '#F7FEE7', defaultHeader: '#D9F99D', defaultSurface: '#F7FEE7', swatches: ['#FFFFFF', '#F7FEE7', '#ECFCCB', '#D9F99D', '#BEF264', '#A3E635', '#84CC16', '#65A30D', '#4D7C0F'], courseSwatches: ['#365314', '#3F6212', '#4D7C0F', '#65A30D', '#84CC16', '#A3E635'] },
    sand: { top: '#C2A878', bottom: '#F9F6F0', bg: '#FDFBF7', surface: '#FFFFFF', variant: '#EAE0CC', text: '#4A3F2C', subtext: '#C2A878', outline: '#D6C8A9', primaryContainer: '#F9F6F0', defaultBg: '#FDFBF7', defaultHeader: '#EAE0CC', defaultSurface: '#FEFDFB', swatches: ['#FEFDFB', '#F9F6F0', '#EAE0CC', '#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'], courseSwatches: ['#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC'] },
    plum: { top: '#6D597A', bottom: '#F3EBF6', bg: '#FAF5FC', surface: '#FFFFFF', variant: '#E3D5E8', text: '#2E2236', subtext: '#6D597A', outline: '#CBB8D4', primaryContainer: '#F3EBF6', defaultBg: '#FAF5FC', defaultHeader: '#E3D5E8', defaultSurface: '#FDF9FE', swatches: ['#FDF9FE', '#F3EBF6', '#E3D5E8', '#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'], courseSwatches: ['#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4'] },
    cherry: { top: '#780000', bottom: '#FCECEC', bg: '#FDF5F5', surface: '#FFFFFF', variant: '#F4C8C8', text: '#3B0000', subtext: '#780000', outline: '#EBA4A4', primaryContainer: '#FCECEC', defaultBg: '#FDF5F5', defaultHeader: '#F4C8C8', defaultSurface: '#FEFAFA', swatches: ['#FEFAFA', '#FCECEC', '#F4C8C8', '#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#240000'], courseSwatches: ['#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8'] },
    mint: { top: '#2A9D8F', bottom: '#E6F4F1', bg: '#F2F9F7', surface: '#FFFFFF', variant: '#C0E4DC', text: '#0F3D37', subtext: '#2A9D8F', outline: '#95D1C6', primaryContainer: '#E6F4F1', defaultBg: '#F2F9F7', defaultHeader: '#C0E4DC', defaultSurface: '#F7FCFB', swatches: ['#F7FCFB', '#E6F4F1', '#C0E4DC', '#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'], courseSwatches: ['#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6'] },
    rust: { top: '#B04105', bottom: '#FAEEE7', bg: '#FDF6F2', surface: '#FFFFFF', variant: '#F0D4C3', text: '#4D1A00', subtext: '#B04105', outline: '#E4B599', primaryContainer: '#FAEEE7', defaultBg: '#FDF6F2', defaultHeader: '#F0D4C3', defaultSurface: '#FEF9F6', swatches: ['#FEF9F6', '#FAEEE7', '#F0D4C3', '#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'], courseSwatches: ['#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599'] },
    ash: { top: '#7F8C8D', bottom: '#F0F2F2', bg: '#F7F8F8', surface: '#FFFFFF', variant: '#D3D7D7', text: '#2C3E50', subtext: '#7F8C8D', outline: '#BDC3C7', primaryContainer: '#F0F2F2', defaultBg: '#F7F8F8', defaultHeader: '#D3D7D7', defaultSurface: '#FBFCFC', swatches: ['#FBFCFC', '#F0F2F2', '#D3D7D7', '#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'], courseSwatches: ['#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7'] },
    violet: { top: '#8B5CF6', bottom: '#DDD6FE', bg: '#F5F3FF', surface: '#FFFFFF', variant: '#C4B5FD', text: '#4C1D95', subtext: '#6D28D9', outline: '#A78BFA', primaryContainer: '#DDD6FE', defaultBg: '#F5F3FF', defaultHeader: '#C4B5FD', defaultSurface: '#FAF8FF', swatches: ['#FAF8FF', '#DDD6FE', '#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6', '#4C1D95'], courseSwatches: ['#4C1D95', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD'] },
    teal: { top: '#0D9488', bottom: '#CCFBF1', bg: '#F0FDF4', surface: '#FFFFFF', variant: '#99F6E4', text: '#134E4A', subtext: '#0F766E', outline: '#5EEAD4', primaryContainer: '#CCFBF1', defaultBg: '#F0FDF4', defaultHeader: '#99F6E4', defaultSurface: '#F7FEFC', swatches: ['#F7FEFC', '#CCFBF1', '#99F6E4', '#5EEAD4', '#2DD4BF', '#0D9488', '#0F766E', '#115E59', '#134E4A'], courseSwatches: ['#134E4A', '#115E59', '#0F766E', '#0D9488', '#2DD4BF', '#5EEAD4'] },
    amber: { top: '#D97706', bottom: '#FEF3C7', bg: '#FFFBEB', surface: '#FFFFFF', variant: '#FDE68A', text: '#78350F', subtext: '#B45309', outline: '#FCD34D', primaryContainer: '#FEF3C7', defaultBg: '#FFFBEB', defaultHeader: '#FDE68A', defaultSurface: '#FFFDF5', swatches: ['#FFFDF5', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'], courseSwatches: ['#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D'] },
    rose: { top: '#E11D48', bottom: '#FFE4E6', bg: '#FFF1F2', surface: '#FFFFFF', variant: '#FECDD3', text: '#881337', subtext: '#9F1239', outline: '#FDA4AF', primaryContainer: '#FFE4E6', defaultBg: '#FFF1F2', defaultHeader: '#FECDD3', defaultSurface: '#FFF5F6', swatches: ['#FFF5F6', '#FFE4E6', '#FECDD3', '#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#881337'], courseSwatches: ['#881337', '#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185'] },
    midnight: { top: '#1E40AF', bottom: '#E0E7FF', bg: '#EEF2FF', surface: '#FFFFFF', variant: '#C7D2FE', text: '#1E1B4B', subtext: '#3730A3', outline: '#818CF8', primaryContainer: '#E0E7FF', defaultBg: '#EEF2FF', defaultHeader: '#C7D2FE', defaultSurface: '#F5F7FF', swatches: ['#F5F7FF', '#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#3730A3', '#1E1B4B'], courseSwatches: ['#1E1B4B', '#312E81', '#3730A3', '#4338CA', '#4F46E5', '#6366F1'] },
    espresso: { top: '#3E2723', bottom: '#D7CCC8', bg: '#EFEBE9', surface: '#FFFFFF', variant: '#BCAAA4', text: '#1B0000', subtext: '#4E342E', outline: '#8D6E63', primaryContainer: '#D7CCC8', defaultBg: '#EFEBE9', defaultHeader: '#BCAAA4', defaultSurface: '#F5F2F0', swatches: ['#F5F2F0', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'], courseSwatches: ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#8D6E63', '#A1887F'] },
    cyan: { top: '#0891B2', bottom: '#CFFAFE', bg: '#ECFEFF', surface: '#FFFFFF', variant: '#A5F3FC', text: '#164E63', subtext: '#0E7490', outline: '#67E8F9', primaryContainer: '#CFFAFE', defaultBg: '#ECFEFF', defaultHeader: '#A5F3FC', defaultSurface: '#F4FEFF', swatches: ['#F4FEFF', '#CFFAFE', '#A5F3FC', '#67E8F9', '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#164E63'], courseSwatches: ['#164E63', '#0E7490', '#0891B2', '#06B6D4', '#22D3EE', '#67E8F9'] }
  },
  dark: {
    indigo: {
      top: '#3B82F6', bottom: 'rgba(59, 130, 246, 0.25)', bg: '#0B0F19', surface: '#111827', variant: '#1F2937', text: '#F8FAFC', subtext: '#94A3B8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(59, 130, 246, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#0B0F19', defaultHeader: '#111827', defaultSurface: '#1F2937',
      swatches: ['#0F172A', '#1E293B', '#334155', '#475569', '#64748B', '#94A3B8', '#CBD5E1', '#E2E8F0', '#F4F6FA'],
      courseSwatches: ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
    },
    coral: {
      top: '#F59E0B', bottom: 'rgba(245, 158, 11, 0.25)', bg: '#170E03', surface: '#261605', variant: '#3D2409', text: '#FFFBEB', subtext: '#FCD34D', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(245, 158, 11, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#170E03', defaultHeader: '#261605', defaultSurface: '#3D2409',
      swatches: ['#451A03', '#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FFFBEB'],
      courseSwatches: ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E']
    },
    lavender: {
      top: '#A855F7', bottom: 'rgba(168, 85, 247, 0.25)', bg: '#12071F', surface: '#1E0E33', variant: '#2F174D', text: '#FAF5FF', subtext: '#D8B4FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(168, 85, 247, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#12071F', defaultHeader: '#1E0E33', defaultSurface: '#2F174D',
      swatches: ['#3B0764', '#5B21B6', '#6B21A8', '#7E22CE', '#9333EA', '#A855F7', '#C084FC', '#D8B4FE', '#FAF5FF'],
      courseSwatches: ['#D8B4FE', '#C084FC', '#A855F7', '#8B5CF6', '#7C3AED', '#6D28D9']
    },
    blush: {
      top: '#EC4899', bottom: 'rgba(236, 72, 153, 0.25)', bg: '#1A0510', surface: '#2B0A1C', variant: '#42112C', text: '#FDF2F8', subtext: '#F9A8D4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(236, 72, 153, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#1A0510', defaultHeader: '#2B0A1C', defaultSurface: '#42112C',
      swatches: ['#500724', '#831843', '#9D174D', '#BE185D', '#DB2777', '#EC4899', '#F472B6', '#F9A8D4', '#FDF2F8'],
      courseSwatches: ['#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239']
    },
    sky: {
      top: '#38BDF8', bottom: 'rgba(56, 189, 248, 0.25)', bg: '#05131D', surface: '#0A2030', variant: '#11324A', text: '#F0F9FF', subtext: '#7DD3FC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(56, 189, 248, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#05131D', defaultHeader: '#0A2030', defaultSurface: '#11324A',
      swatches: ['#0C4A6E', '#075985', '#0369A1', '#0284C7', '#38BDF8', '#7DD3FC', '#BAE6FD', '#E0F2FE', '#F0F9FF'],
      courseSwatches: ['#BAE6FD', '#7DD3FC', '#38BDF8', '#0284C7', '#0369A1', '#075985']
    },
    matcha: {
      top: '#22C55E', bottom: 'rgba(34, 197, 94, 0.25)', bg: '#06170C', surface: '#0D2916', variant: '#163E23', text: '#F0FDF4', subtext: '#86EFAC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(34, 197, 94, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#06170C', defaultHeader: '#0D2916', defaultSurface: '#163E23',
      swatches: ['#14532D', '#166534', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC', '#BBF7D0', '#F0FDF4'],
      courseSwatches: ['#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#14532D']
    },
    mocha: {
      top: '#D6C6B9', bottom: 'rgba(214, 198, 185, 0.25)', bg: '#171311', surface: '#26201D', variant: '#3A322E', text: '#F5EBE4', subtext: '#CBB4A9', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(214, 198, 185, 0.25)', onPrimary: '#171311',
      defaultBg: '#171311', defaultHeader: '#26201D', defaultSurface: '#3A322E',
      swatches: ['#4E3E37', '#6B4D43', '#7C6B5E', '#8C7868', '#AA9686', '#CBB4A9', '#D6C6B9', '#ECE1D5', '#FCF8F5'],
      courseSwatches: ['#CBB4A9', '#AA9686', '#8C7868', '#7C6B5E', '#6B4D43', '#4E3E37']
    },
    sage: {
      top: '#34D399', bottom: 'rgba(52, 211, 153, 0.25)', bg: '#061D15', surface: '#092B1F', variant: '#0E4230', text: '#ECFDF5', subtext: '#A7F3D0', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(52, 211, 153, 0.25)', onPrimary: '#022C22',
      defaultBg: '#061D15', defaultHeader: '#092B1F', defaultSurface: '#0E4230',
      swatches: ['#022C22', '#064E3B', '#047857', '#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
      courseSwatches: ['#34D399', '#10B981', '#059669', '#047857', '#064E3B', '#022C22']
    },
    slate: {
      top: '#9CA3AF', bottom: 'rgba(156, 163, 175, 0.25)', bg: '#0B0F17', surface: '#141C2B', variant: '#212D42', text: '#F9FAFB', subtext: '#CBD5E1', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(156, 163, 175, 0.25)', onPrimary: '#0B0F17',
      defaultBg: '#0B0F17', defaultHeader: '#141C2B', defaultSurface: '#212D42',
      swatches: ['#111827', '#1F2937', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#E5E7EB', '#F9FAFB'],
      courseSwatches: ['#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827']
    },
    sunset: { top: '#FF9B70', bottom: 'rgba(255, 155, 112, 0.25)', bg: '#1A0A05', surface: '#2B1209', variant: '#421E11', text: '#FFF0E6', subtext: '#FFCBA4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(255, 155, 112, 0.25)', onPrimary: '#1A0A05', defaultBg: '#1A0A05', defaultHeader: '#2B1209', defaultSurface: '#421E11', swatches: ['#331005', '#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A', '#FFCBA4', '#FFF0E6'], courseSwatches: ['#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'] },
    ocean: { top: '#83C5BE', bottom: 'rgba(131, 197, 190, 0.25)', bg: '#051416', surface: '#0C2326', variant: '#16383D', text: '#F4F9F9', subtext: '#EDF6F9', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(131, 197, 190, 0.25)', onPrimary: '#051416', defaultBg: '#051416', defaultHeader: '#0C2326', defaultSurface: '#16383D', swatches: ['#001A1D', '#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#A9D6D1', '#CBE8E4', '#F4F9F9'], courseSwatches: ['#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#001A1D'] },
    forest: { top: '#A3E635', bottom: 'rgba(163, 230, 53, 0.25)', bg: '#1A2E05', surface: '#243F07', variant: '#365314', text: '#F7FEE7', subtext: '#D9F99D', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(163, 230, 53, 0.25)', onPrimary: '#1A2E05', defaultBg: '#1A2E05', defaultHeader: '#243F07', defaultSurface: '#365314', swatches: ['#1A2E05', '#243F07', '#365314', '#3F6212', '#4D7C0F', '#65A30D', '#84CC16', '#A3E635', '#BEF264'], courseSwatches: ['#A3E635', '#84CC16', '#65A30D', '#4D7C0F', '#3F6212', '#365314'] },
    sand: { top: '#D6C8A9', bottom: 'rgba(214, 200, 169, 0.25)', bg: '#14110C', surface: '#211C15', variant: '#332B21', text: '#FDFBF7', subtext: '#EAE0CC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(214, 200, 169, 0.25)', onPrimary: '#14110C', defaultBg: '#14110C', defaultHeader: '#211C15', defaultSurface: '#332B21', swatches: ['#292217', '#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC', '#F9F6F0', '#FDFBF7'], courseSwatches: ['#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'] },
    plum: { top: '#CBB8D4', bottom: 'rgba(203, 184, 212, 0.25)', bg: '#140E18', surface: '#211727', variant: '#32253B', text: '#FAF5FC', subtext: '#E3D5E8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(203, 184, 212, 0.25)', onPrimary: '#140E18', defaultBg: '#140E18', defaultHeader: '#211727', defaultSurface: '#32253B', swatches: ['#1D1522', '#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4', '#E3D5E8', '#FAF5FC'], courseSwatches: ['#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'] },
    cherry: { top: '#F4C8C8', bottom: 'rgba(244, 200, 200, 0.25)', bg: '#1A0606', surface: '#2C0D0D', variant: '#421616', text: '#FDF5F5', subtext: '#FCECEC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(244, 200, 200, 0.25)', onPrimary: '#1A0606', defaultBg: '#1A0606', defaultHeader: '#2C0D0D', defaultSurface: '#421616', swatches: ['#170000', '#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8', '#FCECEC', '#FDF5F5'], courseSwatches: ['#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#170000'] },
    mint: { top: '#95D1C6', bottom: 'rgba(149, 209, 198, 0.25)', bg: '#081715', surface: '#102623', variant: '#1A3B36', text: '#F2F9F7', subtext: '#C0E4DC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(149, 209, 198, 0.25)', onPrimary: '#081715', defaultBg: '#081715', defaultHeader: '#102623', defaultSurface: '#1A3B36', swatches: ['#0A2522', '#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6', '#C0E4DC', '#F2F9F7'], courseSwatches: ['#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'] },
    rust: { top: '#E4B599', bottom: 'rgba(228, 181, 153, 0.25)', bg: '#1A0C05', surface: '#2B160C', variant: '#422416', text: '#FDF6F2', subtext: '#F0D4C3', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(228, 181, 153, 0.25)', onPrimary: '#1A0C05', defaultBg: '#1A0C05', defaultHeader: '#2B160C', defaultSurface: '#422416', swatches: ['#291100', '#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599', '#F0D4C3', '#FDF6F2'], courseSwatches: ['#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'] },
    ash: { top: '#BDC3C7', bottom: 'rgba(189, 195, 201, 0.25)', bg: '#11161B', surface: '#1D242B', variant: '#2B353E', text: '#F7F8F8', subtext: '#D3D7D7', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(189, 195, 201, 0.25)', onPrimary: '#11161B', defaultBg: '#11161B', defaultHeader: '#1D242B', defaultSurface: '#2B353E', swatches: ['#1C252D', '#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7', '#D3D7D7', '#F7F8F8'], courseSwatches: ['#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'] },
    violet: { top: '#C4B5FD', bottom: 'rgba(196, 181, 253, 0.25)', bg: '#17092B', surface: '#241042', variant: '#371A63', text: '#F5F3FF', subtext: '#DDD6FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(196, 181, 253, 0.25)', onPrimary: '#17092B', defaultBg: '#17092B', defaultHeader: '#241042', defaultSurface: '#371A63', swatches: ['#4C1D95', '#5B21B6', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#F5F3FF'], courseSwatches: ['#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6'] },
    teal: { top: '#5EEAD4', bottom: 'rgba(94, 234, 212, 0.25)', bg: '#041D1A', surface: '#0A2E2A', variant: '#11453E', text: '#F0FDF4', subtext: '#99F6E4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(94, 234, 212, 0.25)', onPrimary: '#041D1A', defaultBg: '#041D1A', defaultHeader: '#0A2E2A', defaultSurface: '#11453E', swatches: ['#134E4A', '#115E59', '#0F766E', '#0D9488', '#2DD4BF', '#5EEAD4', '#99F6E4', '#CCFBF1', '#F0FDF4'], courseSwatches: ['#5EEAD4', '#2DD4BF', '#0D9488', '#0F766E', '#115E59', '#134E4A'] },
    amber: { top: '#FBBF24', bottom: 'rgba(251, 191, 36, 0.25)', bg: '#1C1004', surface: '#2D1A07', variant: '#472B0D', text: '#FFFBEB', subtext: '#FDE68A', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(251, 191, 36, 0.25)', onPrimary: '#1C1004', defaultBg: '#1C1004', defaultHeader: '#2D1A07', defaultSurface: '#472B0D', swatches: ['#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FEF3C7', '#FFFBEB'], courseSwatches: ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'] },
    rose: { top: '#FB7185', bottom: 'rgba(251, 113, 133, 0.25)', bg: '#1F060D', surface: '#330B17', variant: '#4F1225', text: '#FFF1F2', subtext: '#FECDD3', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(251, 113, 133, 0.25)', onPrimary: '#1F060D', defaultBg: '#1F060D', defaultHeader: '#330B17', defaultSurface: '#4F1225', swatches: ['#881337', '#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', '#FDA4AF', '#FECDD3', '#FFF1F2'], courseSwatches: ['#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239', '#881337'] },
    midnight: { top: '#818CF8', bottom: 'rgba(129, 140, 248, 0.25)', bg: '#080B1A', surface: '#111633', variant: '#1B224C', text: '#EEF2FF', subtext: '#C7D2FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(129, 140, 248, 0.25)', onPrimary: '#080B1A', defaultBg: '#080B1A', defaultHeader: '#111633', defaultSurface: '#1B224C', swatches: ['#1E1B4B', '#312E81', '#3730A3', '#4338CA', '#4F46E5', '#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'], courseSwatches: ['#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3'] },
    espresso: { top: '#A1887F', bottom: 'rgba(161, 136, 127, 0.25)', bg: '#120D0B', surface: '#211815', variant: '#332621', text: '#EFEBE9', subtext: '#D7CCC8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(161, 136, 127, 0.25)', onPrimary: '#120D0B', defaultBg: '#120D0B', defaultHeader: '#211815', defaultSurface: '#332621', swatches: ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8', '#EFEBE9'], courseSwatches: ['#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037', '#4E342E'] },
    cyan: { top: '#22D3EE', bottom: 'rgba(34, 211, 238, 0.25)', bg: '#041B24', surface: '#0A2A38', variant: '#113F54', text: '#ECFEFF', subtext: '#A5F3FC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(34, 211, 238, 0.25)', onPrimary: '#041B24', defaultBg: '#041B24', defaultHeader: '#0A2A38', defaultSurface: '#113F54', swatches: ['#164E63', '#0E7490', '#0891B2', '#06B6D4', '#22D3EE', '#67E8F9', '#A5F3FC', '#CFFAFE', '#ECFEFF'], courseSwatches: ['#67E8F9', '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#164E63'] }
  }
};

class SchedullyApp {
  constructor() {
    this.classes = [];

    this.selectedColor = '#1D4ED8';
    this.newCourseFontColor = '#FFFFFF';
    this.activeDevice = 'phone';

    this.currentMode = localStorage.getItem('schedully_theme_mode') || 'auto';
    this.currentPalette = localStorage.getItem('schedully_theme_palette') || 'indigo';

    // Layout Customization State
    this.showTitle = true;
    this.tableCornerStyle = 'rounded';
    this.tableCornerRadiusVal = 8;
    this.cardCornerStyle = 'rounded';
    this.cardCornerRadiusVal = 6;
    this.timetableTitleText = 'Untitled';
    this.newCourseDisplayTime = true;
    this.globalCardTimes = true;
    this.cardTimeDisplayType = 'start'; // 'start', 'both', 'end'
    this.pendingOcrResult = null;
    this.globalCourseType = true;
    this.globalCourseRoom = true;
    this.globalCourseLecturer = true;
    this.globalCourseGroup = true;
    this.globalAdaptiveColor = true;
    this.showTable = true;
    this.showLockUI = true;
    this.clockFormat = '12';
    this.gridStartHour = 9;
    this.gridEndHour = 17;
    this.classes = [];
    this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    this.gridWidthVal = 100;
    this.gridHeightVal = 49;
    this.gridFontSizeVal = 9;
    this.gridYPosVal = 0;

    this.initDOMElements();
    this.bindEvents();
    this.initPresets();

    this.applyThemeEngine();

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.currentMode === 'auto') {
          this.applyThemeEngine();
        }
      });
    }

    this.updateClock();
    setInterval(() => this.updateClock(), 60000);

    // this.loadFromLocal();
    this.renderAll();
  }

  initDOMElements() {
    this.headerTheme = document.getElementById('header-theme');
    this.contentTheme = document.getElementById('content-theme');
    
    this.headerLayoutOptions = document.getElementById('header-layout-options');
    this.contentLayoutOptions = document.getElementById('content-layout-options');

    this.headerAddCourse = document.getElementById('header-add-course');
    this.contentAddCourse = document.getElementById('content-add-course');
    this.headerFileImport = document.getElementById('header-file-import');
    this.contentFileImport = document.getElementById('content-file-import');
    this.headerScanner = document.getElementById('header-scanner');
    this.contentScanner = document.getElementById('content-scanner');

    this.ocrFileInput = document.getElementById('ocr-file-input');
    this.ocrLoadingBar = document.getElementById('ocr-loading-bar');
    this.ocrLoadingText = document.getElementById('ocr-loading-text');
    
    const inputApiKey = document.getElementById('input-api-key');
    if (inputApiKey) {
      const savedKey = localStorage.getItem('tf_api_key');
      if (savedKey) inputApiKey.value = savedKey;
      
      // Auto-save key as user types or pastes
      inputApiKey.addEventListener('input', (e) => {
        localStorage.setItem('tf_api_key', e.target.value.trim());
      });
    }

    this.addCourseForm = document.getElementById('add-course-form');
    this.inputCourseCode = document.getElementById('input-course-code');
    this.rowPeriodSelect = document.getElementById('row-period-select');
    this.inputPeriodSelect = document.getElementById('input-period-select');
    this.rowStartTime = document.getElementById('row-start-time');
    this.rowEndTime = document.getElementById('row-end-time');
    this.inputStartTime = document.getElementById('input-start-time');
    this.inputEndTime = document.getElementById('input-end-time');
    this.inputType = document.getElementById('input-type');
    this.inputLocation = document.getElementById('input-location');
    this.inputLecturer = document.getElementById('input-lecturer');
    this.inputGroup = document.getElementById('input-group');

    this.btnExportICAL = document.getElementById('btn-export-ical');
    this.btnExportCSV = document.getElementById('btn-export-csv');
    this.btnDownloadHD = document.getElementById('btn-download-hd');
    this.btnSavePdf   = document.getElementById('btn-save-pdf');
    this.btnAutoResolve = document.getElementById('btn-auto-resolve');
    this.btnResetLayout = document.getElementById('btn-reset-layout');

    this.clashAlert = document.getElementById('clash-alert');
    this.clashTitle = document.getElementById('clash-title');
    this.clashDesc = document.getElementById('clash-desc');

    this.slotsBadgeCount = document.getElementById('slots-badge-count');
    this.btnClearAll = document.getElementById('btn-clear-all');
    this.universalTimetableGrid = document.getElementById('universal-timetable-grid');
    this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    this.courseSearchContainer = document.getElementById('course-search-container');
    this.courseSearchInput = document.getElementById('course-search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.searchQuery = '';
    this.phoneCanvas = document.getElementById('phone-canvas');
    this.lockTime = document.getElementById('lock-time');
    this.lockDate = document.getElementById('lock-date');
    this.phoneLockHeader = document.getElementById('phone-lock-header');
    this.lockGridTitle = document.getElementById('lock-grid-title');
    this.lockTitleText = document.getElementById('lock-title-text');
    this.lockTimetableContainer = document.getElementById('lock-timetable-container');

    this.stageDeviceLabel = document.getElementById('stage-device-label');
    this.stageTitleBar = document.querySelector('.stage-title-bar');

    this.gridStartTimeSelect = document.getElementById('grid-start-time');
    this.gridEndTimeSelect = document.getElementById('grid-end-time');
    this.customBgColorInput = document.getElementById('custom-bg-color');
    this.customHeaderColorInput = document.getElementById('custom-header-color');
    this.customFontColorInput = document.getElementById('custom-font-color');

    this.inputTitleStage = document.getElementById('input-title-text-stage');
    this.inputTitleSidebar = document.getElementById('input-title-text-sidebar');

    this.inputTrademark = document.getElementById('input-trademark-text');
    this.lockTrademarkFooter = document.getElementById('lock-trademark-footer');
    this.lockTrademarkText = document.getElementById('lock-trademark-text');
    this.showTrademark = false;
    this.trademarkText = 'Schedully • Student Edition';
    this.trademarkStyle = 'default';

    // Universal Importer
    this.universalFileInput = document.getElementById('universal-file-input');
    
    // Quick Time Submenu
    this.quickTimeSubmenu = document.getElementById('quick-time-submenu');
    this.quickTimePreviewBadge = document.getElementById('quick-time-preview-badge');

    // OCC Modal
    this.occModal = document.getElementById('occ-modal');
    this.occModalBody = document.getElementById('occ-modal-body');
    this.btnOccCancel = document.getElementById('btn-occ-cancel');
    this.btnOccConfirm = document.getElementById('btn-occ-confirm');
    this.pendingCsvClasses = [];

    // OCR Language Choice Modal
    this.ocrLangModal = document.getElementById('ocr-language-choice-modal');
    this.ocrDetectedLangBadge = document.getElementById('ocr-detected-lang-badge');
    this.ocrDetectedLangTitle = document.getElementById('ocr-detected-lang-title');
    this.ocrLangFlagIcon = document.getElementById('ocr-lang-flag-icon');
    this.ocrKeepLangLabel = document.getElementById('ocr-keep-lang-label');
    this.ocrKeepLangDesc = document.getElementById('ocr-keep-lang-desc');
    this.btnOcrKeepOriginal = document.getElementById('btn-ocr-keep-original');
    this.btnOcrTranslateEnglish = document.getElementById('btn-ocr-translate-english');
    this.btnCloseOcrLangModal = document.getElementById('btn-close-ocr-lang-modal');
    this.btnOcrApplyImport = document.getElementById('btn-ocr-apply-import');
    this.ocrPeriodSection = document.getElementById('ocr-period-section');
    this.ocrPeriodPresetContainer = document.getElementById('ocr-period-preset-container');
    this.btnAxisPeriod = document.getElementById('btn-axis-period');
    this.btnAxisTime = document.getElementById('btn-axis-time');
    this.btnAxisBoth = document.getElementById('btn-axis-both');

    this.axisMode = 'time'; // 'time' | 'period' | 'both'
    this.selectedOcrLangChoice = 'original'; // 'original' | 'translated'
    this.selectedOcrAxisMode = 'period'; // 'period' | 'time' | 'both'
    this.selectedOcrPeriodPreset = '90m-900'; // '90m-900' | '90m-850' | '50m-school'

    // Gemini AI API Key Modal
    this.geminiApiKeyModal = document.getElementById('gemini-api-key-modal');
    this.btnOpenGeminiKeyModal = document.getElementById('btn-open-gemini-key-modal');
    this.btnCloseGeminiKeyModal = document.getElementById('btn-close-gemini-key-modal');
    this.btnCancelGeminiKey = document.getElementById('btn-cancel-gemini-key');
    this.btnSaveGeminiKey = document.getElementById('btn-save-gemini-key');
    this.inputGeminiApiKey = document.getElementById('input-gemini-api-key');
    this.btnToggleGeminiKeyVis = document.getElementById('btn-toggle-gemini-key-vis');
    this.geminiKeyStatusLabel = document.getElementById('gemini-key-status-label');
    this.pendingScanFile = null;
    window.schedullyApp = this;
    this.updateGeminiKeyStatusBadge();
  }

  getContrastColor(hexColor) {
    if (!hexColor) return '#FFFFFF';
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 140 ? '#0F172A' : '#FFFFFF';
  }

  updateClockContrast(bgHex) {
    if (!this.phoneLockHeader) return;
    const contrastFont = this.getContrastColor(bgHex);
    this.phoneLockHeader.style.color = contrastFont;
  }

  applyThemeEngine() {
    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }

    document.body.classList.toggle('dark-mode', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');

    // Sync UI mode dots
    document.querySelectorAll('.theme-mode-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
    });

    const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    const selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;

    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-background', selectedTheme.bg);
    root.style.setProperty('--m3-sys-color-surface', selectedTheme.surface);
    root.style.setProperty('--m3-sys-color-surface-variant', selectedTheme.variant);
    root.style.setProperty('--m3-sys-text-primary', selectedTheme.text);
    root.style.setProperty('--m3-sys-text-secondary', selectedTheme.subtext);
    root.style.setProperty('--m3-sys-color-outline', selectedTheme.outline);
    root.style.setProperty('--m3-sys-color-primary', selectedTheme.top);
    root.style.setProperty('--m3-sys-color-primary-container', selectedTheme.bottom || selectedTheme.variant);
    const onPrimary = selectedTheme.onPrimary || this.getContrastColor(selectedTheme.top);
    root.style.setProperty('--m3-sys-color-on-primary', onPrimary);

    // Apply default high-contrast font color for headers/title
    if (!this.userHasPickedFontColor) {
      root.style.setProperty('--m3-font-custom-color', selectedTheme.text);
    }

    document.querySelectorAll('.palette-dot.dual-tone').forEach(dot => {
      const pName = dot.getAttribute('data-palette');
      const pData = paletteGroup[pName];
      if (pData) {
        const topEl = dot.querySelector('.tone-top');
        const botEl = dot.querySelector('.tone-bottom');
        if (topEl) topEl.style.backgroundColor = pData.top;
        if (botEl) botEl.style.backgroundColor = pData.bottom;
      }
    });

    // Apply 3 distinct tone colors for Wallpaper Background, Header, and Grid Surface
    const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
    if (!this.userHasPickedBgColor && !hasPhotoWallpaper) {
      this.phoneCanvas.style.backgroundColor = selectedTheme.defaultBg || selectedTheme.bg;
    }
    if (!this.userHasPickedHeaderColor) {
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        this.applyHeaderColor(this.wallpaperSwatches[0]);
      } else {
        this.applyHeaderColor(selectedTheme.defaultHeader || selectedTheme.bottom);
      }
    }
    if (!this.userHasPickedSurfaceColor) {
      document.documentElement.style.setProperty('--m3-grid-surface-bg', selectedTheme.defaultSurface || selectedTheme.surface);
    }

    const surfaceSwatches = document.querySelectorAll('#grid-surface-picker .color-swatch-btn');
    const bgSwatches = document.querySelectorAll('#bg-color-picker .color-swatch-btn');
    const headerSwatches = document.querySelectorAll('#header-color-picker .color-swatch-btn');

    selectedTheme.swatches.forEach((hex, idx) => {
      if (surfaceSwatches[idx]) {
        surfaceSwatches[idx].setAttribute('data-surface', hex);
        surfaceSwatches[idx].style.backgroundColor = hex;
      }
      if (bgSwatches[idx]) {
        bgSwatches[idx].setAttribute('data-bg', hex);
        bgSwatches[idx].style.backgroundColor = hex;
      }
      if (headerSwatches[idx]) {
        headerSwatches[idx].setAttribute('data-header', hex);
        headerSwatches[idx].style.backgroundColor = hex;
      }
    });

    const courseDots = document.querySelectorAll('.swatch-grid .swatch-dot');
    selectedTheme.courseSwatches.forEach((hex, idx) => {
      if (courseDots[idx]) {
        courseDots[idx].setAttribute('data-color', hex);
        courseDots[idx].style.backgroundColor = hex;
      }
    });

    if (selectedTheme.courseSwatches.length > 0) {
      this.selectedColor = selectedTheme.courseSwatches[0];
    }

    if (this.classes.length > 0 && this.classes[0].id === 1) {
      this.classes[0].customColor = selectedTheme.courseSwatches[0];
    }

    // Auto-check lockscreen clock contrast on theme change
    this.updateClockContrast(selectedTheme.bg);

    // Imperatively push primary color to all hardcoded-blue elements
    this.applyDynamicThemeToElements(selectedTheme);

    this.renderTimetableGrid();
    this.renderClassList();
  }

  applyDynamicThemeToElements(theme) {
    const primary   = theme.top;
    const container = theme.bottom;
    const onPrimary = theme.onPrimary || this.getContrastColor(primary);
    const surface   = theme.surface;
    const bg        = theme.bg;
    const variant   = theme.variant;
    const textColor = theme.text;
    const subtext   = theme.subtext || theme.text;
    const outline   = theme.outline || '';

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Detect dark mode (bg is dark if luminance < 0.25) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const isDark = this._isColorDark(bg);

    // Update CSS variables dynamically
    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-primary', primary);
    root.style.setProperty('--m3-sys-color-primary-container', container);
    root.style.setProperty('--m3-sys-color-on-primary', onPrimary);
    root.style.setProperty('--m3-sys-color-surface', surface);
    root.style.setProperty('--m3-sys-color-bg', bg);
    root.style.setProperty('--m3-sys-text-primary', textColor);
    root.style.setProperty('--m3-sys-text-secondary', subtext);

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ DARK MODE: apply dark surfaces & contrast to all layout elements ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.body.classList.toggle('dark-mode', isDark);
    if (isDark) {
      document.body.style.backgroundColor = bg;
      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.style.backgroundColor = bg;
        mainEl.style.setProperty('--dot-matrix-color', 'rgba(255, 255, 255, 0.09)');
      }

      const leftSidebar  = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      if (leftSidebar)  { leftSidebar.style.backgroundColor  = ''; leftSidebar.style.color  = textColor; }
      if (rightSidebar) { rightSidebar.style.backgroundColor = ''; rightSidebar.style.color = textColor; }

      // Top Action Bar header & pill container (Handled by CSS Liquid Glass)
      const topHeader = mainEl?.querySelector('header');
      if (topHeader) topHeader.style.backgroundColor = '';

      const topActionBarPill = topHeader?.querySelector('div');
      if (topActionBarPill) {
        topActionBarPill.style.backgroundColor = '';
        topActionBarPill.style.borderColor = '';
      }

      // Top Action Bar inactive buttons (Calendar, Export CSV, Save as PDF)
      topHeader?.querySelectorAll('button:not(.btn-theme-primary)').forEach(btn => {
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });

      // Bottom floating toolbar capsules & inner controls (Handled by CSS Liquid Glass)
      const bottomFloatingBar = document.getElementById('bottom-floating-pill-bar');
      if (bottomFloatingBar) {
        bottomFloatingBar.style.backgroundColor = '';
        bottomFloatingBar.style.borderColor = '';

        // Inner zoom pill containers & theme pill container
        bottomFloatingBar.querySelectorAll('.bg-white').forEach(capsule => {
          capsule.style.backgroundColor = '';
          capsule.style.borderColor = '';
          capsule.style.color = '';
          capsule.querySelectorAll('button, span, svg').forEach(child => {
            if (!child.classList.contains('btn-theme-primary')) {
              child.style.color = '';
            }
          });
        });
      }

      // Floating sidebar trigger buttons
      document.querySelectorAll('#btn-expand-left-floating, #btn-expand-right-floating').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      });

      // Settings toggle button & clear all button (handled by CSS Liquid Glass)
      document.querySelectorAll('#btn-schedule-settings-toggle, #btn-clear-all').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      });

      // Bottom Login & Globe pill buttons
      document.querySelectorAll('.btn-adaptive-auth').forEach(btn => {
        btn.style.backgroundColor = primary;
        btn.style.color = onPrimary;
        btn.querySelectorAll('span, svg').forEach(child => {
          child.style.color = onPrimary;
        });
      });
      document.querySelectorAll('.btn-globe-language, .btn-coffee-support').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });

      // Bottom User Profile card
      document.querySelectorAll('.user-profile-card').forEach(el => {
        el.style.backgroundColor = variant;
        el.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        el.style.color = textColor;
        el.querySelectorAll('p, span').forEach(textEl => {
          if (textEl.classList.contains('text-gray-500')) {
            textEl.style.color = subtext;
          } else {
            textEl.style.color = textColor;
          }
        });
      });

      // Expandable content containers & popovers (CSS Liquid Glass manages backgrounds)
      document.querySelectorAll('.expandable-content, .card-expand-content, #schedule-quick-settings, #canvas-controls-popover, #login-providers-menu, #profile-settings-menu').forEach(el => {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
      });

      // Target Popover menus in dark mode
      document.querySelectorAll('#login-providers-menu, #profile-settings-menu').forEach(menu => {
        menu.style.backgroundColor = '';
        menu.style.borderColor = '';
        menu.querySelectorAll('.popover-item-title, p:not(.popover-item-desc)').forEach(t => t.style.color = textColor);
        menu.querySelectorAll('.popover-item-desc, span.text-gray-400').forEach(d => d.style.color = subtext);
        menu.querySelectorAll('.popover-divider, .popover-header').forEach(div => div.style.borderColor = outline || 'rgba(255,255,255,0.15)');
      });

      // Target Popover controls card (#canvas-controls-popover) in dark mode
      const canvasPopover = document.getElementById('canvas-controls-popover');
      if (canvasPopover) {
        canvasPopover.style.backgroundColor = '';
        canvasPopover.style.borderColor = '';
        canvasPopover.querySelectorAll('span, p, label').forEach(textEl => {
          if (textEl.classList.contains('text-slate-500') || textEl.classList.contains('text-slate-400') || textEl.classList.contains('text-gray-500')) {
            textEl.style.color = subtext;
          } else if (!textEl.closest('.pill-btn.active') && !textEl.closest('.capsule-btn.active') && !textEl.closest('.btn-theme-primary')) {
            textEl.style.color = textColor;
          }
        });
        canvasPopover.querySelectorAll('.bg-white, #device-type-toggles, .pill-toggle-group').forEach(box => {
          box.style.backgroundColor = '';
          box.style.borderColor = '';
        });
      }

      // Target ALL form inputs, selects, textareas to fix dark mode white boxes & force rounded corners
      document.querySelectorAll('input, select, textarea, .m3-input, .m3-input-time, .opt-input').forEach(input => {
        if (input.type !== 'checkbox' && input.type !== 'radio') {
          input.style.backgroundColor = variant;
          input.style.borderColor = outline || 'rgba(255,255,255,0.15)';
          input.style.color = textColor;
          input.style.borderRadius = '14px';
        }
      });

      // Stepper number values & buttons in dark mode
      document.querySelectorAll('.stepper-input, .stepper-val, .stepper-btn').forEach(el => {
        el.style.color = textColor;
      });

      // Fix hardcoded white plates (Logo Plate, Empty State Calendar plate, etc)
      const whitePlates = [
        document.querySelector('.bg-white\\/95.rounded-2xl'), // Logo plate
        document.querySelector('.bg-white.p-4.rounded-2xl.shadow-sm') // Empty state plate
      ];
      
      whitePlates.forEach(el => {
        if (el) {
          el.style.backgroundColor = surface;
          el.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        }
      });
      
      // Help widget
      document.querySelectorAll('[class*="F8FAFC"]').forEach(el => {
        el.style.backgroundColor = variant;
        el.style.borderColor = outline;
        el.style.color = textColor;
      });

      // Text & SVG icon colors across sidebars and main layout
      document.querySelectorAll('.card-expand-header svg').forEach(svg => {
        svg.style.color = textColor;
      });

      document.querySelectorAll('#left-sidebar, #right-sidebar, main').forEach(container => {
        container.querySelectorAll('svg, p, span, h1, h2, h3, h4, h5, h6, label').forEach(el => {
          if (!el.closest('.btn-theme-primary') && !el.closest('.pill-btn.active') && !el.classList.contains('badge-adaptive-pill') && !el.closest('.badge-adaptive-pill')) {
            if (el.tagName.toLowerCase() === 'svg') {
              el.style.color = textColor;
            } else if (el.classList.contains('text-gray-400') || el.classList.contains('text-gray-500') || el.classList.contains('subtext')) {
              el.style.color = subtext;
            } else if (!el.classList.contains('theme-primary-text')) {
              el.style.color = textColor;
            }
          }
        });
      });

      // Right sidebar badges, clear/settings buttons dark mode readability
      const slotsBadge = document.getElementById('slots-badge-count')?.parentElement;
      if (slotsBadge) {
        slotsBadge.style.backgroundColor = variant;
        slotsBadge.style.color = textColor;
        slotsBadge.style.borderColor = outline;
      }

      document.querySelectorAll('#btn-toggle-right-sidebar, #btn-toggle-left-sidebar').forEach(btn => {
        btn.style.backgroundColor = variant;
        btn.style.color = textColor;
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = textColor);
      });
    } else {
      // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ LIGHT MODE: reset layout to neutral whites ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
      document.body.style.backgroundColor = '';
      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.style.backgroundColor = '';
        mainEl.style.setProperty('--dot-matrix-color', 'rgba(15, 23, 42, 0.08)');
      }

      const leftSidebar  = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      if (leftSidebar)  { leftSidebar.style.backgroundColor  = ''; leftSidebar.style.color  = ''; }
      if (rightSidebar) { rightSidebar.style.backgroundColor = ''; rightSidebar.style.color = ''; }

      const topHeader = mainEl?.querySelector('header');
      if (topHeader) topHeader.style.backgroundColor = '';
      const topActionBarPill = topHeader?.querySelector('div');
      if (topActionBarPill) {
        topActionBarPill.style.backgroundColor = '';
        topActionBarPill.style.borderColor = '';
      }
      topHeader?.querySelectorAll('button:not(.btn-theme-primary)').forEach(btn => {
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });

      const bottomFloatingBar = document.getElementById('bottom-floating-pill-bar');
      if (bottomFloatingBar) {
        bottomFloatingBar.style.backgroundColor = '';
        bottomFloatingBar.style.borderColor = '';
        bottomFloatingBar.querySelectorAll('.bg-white').forEach(capsule => {
          capsule.style.backgroundColor = '';
          capsule.style.borderColor = '';
          capsule.style.color = '';
          capsule.querySelectorAll('button, span, svg').forEach(child => {
            child.style.color = '';
          });
        });
      }

      document.querySelectorAll('#btn-expand-left-floating, #btn-expand-right-floating, #btn-schedule-settings-toggle, #btn-clear-all').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.querySelectorAll('span, svg').forEach(child => {
          child.style.color = '';
        });
      });

      document.querySelectorAll('.expandable-content, .card-expand-content, #canvas-controls-popover').forEach(el => {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
      });
      const canvasPopoverReset = document.getElementById('canvas-controls-popover');
      if (canvasPopoverReset) {
        canvasPopoverReset.querySelectorAll('span, p, label').forEach(textEl => {
          textEl.style.color = '';
        });
        canvasPopoverReset.querySelectorAll('.bg-white, #device-type-toggles, .pill-toggle-group').forEach(box => {
          box.style.backgroundColor = '';
          box.style.borderColor = '';
        });
      }
      document.querySelectorAll('input, select, textarea, .m3-input, .m3-input-time, .opt-input').forEach(input => {
        if (input.type !== 'checkbox' && input.type !== 'radio') {
          input.style.backgroundColor = '';
          input.style.borderColor = '';
          input.style.color = '';
          input.style.borderRadius = '14px';
        }
      });
      document.querySelectorAll('.stepper-input, .stepper-val, .stepper-btn').forEach(el => {
        el.style.color = '';
      });

      // Reset white plates
      const whitePlates = [
        document.querySelector('.bg-white\\/95.rounded-2xl'), // Logo plate
        document.querySelector('.bg-white.p-4.rounded-2xl.shadow-sm') // Empty state plate
      ];
      
      whitePlates.forEach(el => {
        if (el) {
          el.style.backgroundColor = '';
          el.style.borderColor = '';
        }
      });
      
      document.querySelectorAll('.pill-btn:not(.active)').forEach(el => {
        el.style.color = '';
      });
      document.querySelectorAll('.user-profile-card, [class*="F8FAFC"]').forEach(el => {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
      });
      document.querySelectorAll('.card-expand-header svg').forEach(svg => {
        svg.style.color = '';
      });
      document.querySelectorAll('#left-sidebar, #right-sidebar, main').forEach(container => {
        container.querySelectorAll('svg, p, span, h1, h2, h3, h4, h5, h6, label').forEach(el => {
          if (!el.closest('.btn-theme-primary') && !el.closest('.pill-btn.active')) {
            el.style.color = '';
            if (el.classList.contains('badge-adaptive-pill')) {
              el.style.backgroundColor = '';
              el.style.borderColor = '';
            }
          }
        });
      });

      const slotsBadge = document.getElementById('slots-badge-count')?.parentElement;
      if (slotsBadge) {
        slotsBadge.style.backgroundColor = '';
        slotsBadge.style.color = '';
        slotsBadge.style.borderColor = '';
      }

      document.querySelectorAll('#btn-toggle-right-sidebar, #btn-toggle-left-sidebar, #btn-clear-all, #btn-settings-toggle, .btn-globe-language, .btn-coffee-support').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });
    }

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ btn-theme-primary (Download Image, Controls) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.btn-theme-primary').forEach(el => {
      el.style.backgroundColor = primary;
      el.style.color = onPrimary;
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ theme-primary-text (icons, links) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.theme-primary-text').forEach(el => {
      el.style.color = primary;
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ theme-primary-bg ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.theme-primary-bg').forEach(el => {
      el.style.backgroundColor = primary;
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ theme-primary-light-bg (icon backing plates) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.theme-primary-light-bg').forEach(el => {
      el.style.backgroundColor = container;
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Active pill / capsule buttons ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.pill-btn, .capsule-btn').forEach(el => {
      el.style.backgroundColor = '';
      el.style.color = '';
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Theme & Layout card inner ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    document.querySelectorAll('.theme-card-inner, .layout-card-inner').forEach(el => {
      el.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.04)' : container;
      el.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.08)' : container;
    });

    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Aurora orbs ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬


    // ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ Logo glow backing ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬
    const logoBacking = document.querySelector('[class*="from-blue-500"]');
    if (logoBacking) {
      logoBacking.style.background = `linear-gradient(to right, ${primary}50, ${primary}30)`;
    }
  }

  // Helper: detect if a hex color is "dark" (luminance < 0.25)
  _isColorDark(hex) {
    if (!hex || !hex.startsWith('#')) return false;
    const r = parseInt(hex.slice(1,3), 16) / 255;
    const g = parseInt(hex.slice(3,5), 16) / 255;
    const b = parseInt(hex.slice(5,7), 16) / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 0.25;
  }


  applyHeaderColor(colorVal) {
    const root = document.documentElement;
    if (!colorVal) {
      root.style.removeProperty('--m3-header-custom-bg');
      root.style.removeProperty('--m3-header-text-color');
      root.style.removeProperty('--m3-header-outline-color');
      return;
    }
    root.style.setProperty('--m3-header-custom-bg', colorVal);

    // Auto-calculate luminance contrast for header & title text
    const headerTextColor = this.getContrastColor(colorVal);
    const isDark = (headerTextColor === '#FFFFFF');
    const headerOutline = isDark ? 'rgba(255, 255, 255, 0.22)' : 'var(--m3-sys-color-outline)';

    root.style.setProperty('--m3-header-text-color', headerTextColor);
    root.style.setProperty('--m3-header-outline-color', headerOutline);
  }

  isColorDark(hex) {
    if (!hex || typeof hex !== 'string') return false;
    let c = hex.trim();
    if (c.startsWith('#')) {
      c = c.substring(1);
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const r = parseInt(c.substring(0, 2), 16) || 0;
      const g = parseInt(c.substring(2, 4), 16) || 0;
      const b = parseInt(c.substring(4, 6), 16) || 0;
      const lum = (0.299 * r + 0.587 * g + 0.114 * b);
      return lum < 140;
    }
    return false;
  }

  applyCardTextColor(colorVal) {
    const root = document.documentElement;
    root.style.setProperty('--m3-card-text-color', colorVal);
  }

  applyFontColor(colorVal) {
    const root = document.documentElement;
    if (colorVal) {
      this.userHasPickedFontColor = true;
      this.customFontColor = colorVal;
      root.style.setProperty('--m3-font-custom-color', colorVal);
      const phoneCanvas = document.getElementById('phone-canvas');
      if (phoneCanvas) {
        phoneCanvas.style.setProperty('--m3-font-custom-color', colorVal);
      }
    } else {
      this.userHasPickedFontColor = false;
      this.customFontColor = null;
      root.style.removeProperty('--m3-font-custom-color');
      const phoneCanvas = document.getElementById('phone-canvas');
      if (phoneCanvas) {
        phoneCanvas.style.removeProperty('--m3-font-custom-color');
      }
    }
    if (typeof this.renderTimetableGrid === 'function') {
      this.renderTimetableGrid();
    }
  }

  updateTitleText(newText) {
    this.timetableTitleText = newText.trim() || 'Untitled';
    if (this.lockTitleText) this.lockTitleText.innerText = this.timetableTitleText;
    if (this.inputTitleStage) this.inputTitleStage.value = newText;
    if (this.inputTitleSidebar) this.inputTitleSidebar.value = newText;
    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
  }

  updateTrademarkText(newText) {
    this.trademarkText = (newText !== undefined && newText !== null) ? newText : 'Schedully • Student Edition';
    if (this.lockTrademarkText) {
      this.lockTrademarkText.innerText = this.trademarkText;
    }
    if (this.inputTrademark) {
      this.inputTrademark.value = this.trademarkText;
    }
    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
  }

  applyTrademarkStyle(style) {
    this.trademarkStyle = ['default', 'rounded', 'squared'].includes(style) ? style : 'default';
    if (this.lockTrademarkFooter) {
      this.lockTrademarkFooter.classList.remove('style-default', 'style-rounded', 'style-squared');
      this.lockTrademarkFooter.classList.add(`style-${this.trademarkStyle}`);
    }
    const toggleTrademarkStyle = document.getElementById('toggle-trademark-style');
    if (toggleTrademarkStyle) {
      toggleTrademarkStyle.querySelectorAll('.pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === this.trademarkStyle);
      });
    }
    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
  }

  toggleAccordion(header, content) {
    if (!content) return;
    const isOpening = content.classList.contains('hidden') || !content.classList.contains('is-open');

    if (isOpening) {
      header?.classList.add('active');
      content.classList.remove('hidden');
      requestAnimationFrame(() => {
        content.classList.add('is-open');
        window.syncGlassSliders?.();
      });
    } else {
      header?.classList.remove('active');
      content.classList.remove('is-open');
      content.classList.add('hidden');
    }
  }

  setupWallpaperEngine() {
    const input = document.getElementById('wallpaper-image-input');
    const removeBtn = document.getElementById('btn-remove-wallpaper');

    // Background Blur Toggle & Intensity Slider
    const toggleBgBlur = document.getElementById('toggle-bg-blur');
    const blurControl = document.getElementById('blur-intensity-control');
    const blurSlider = document.getElementById('slider-bg-blur');
    const blurValText = document.getElementById('blur-intensity-val');

    this.bgBlurEnabled = false;
    this.bgBlurIntensity = 10;

    if (toggleBgBlur) {
      toggleBgBlur.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleBgBlur.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const isEnabled = (btn.getAttribute('data-val') === 'yes');
          this.bgBlurEnabled = isEnabled;

          if (isEnabled) {
            blurControl?.classList.remove('hidden');
            document.documentElement.style.setProperty('--wallpaper-blur-val', `${this.bgBlurIntensity}px`);
          } else {
            blurControl?.classList.add('hidden');
            document.documentElement.style.setProperty('--wallpaper-blur-val', '0px');
          }
          this._stagePending();
        });
      });
    }

    if (blurSlider) {
      blurSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10) || 0;
        this.bgBlurIntensity = val;
        if (blurValText) blurValText.innerText = `${val}px`;
        if (this.bgBlurEnabled) {
          document.documentElement.style.setProperty('--wallpaper-blur-val', `${val}px`);
        }
        this._stagePending();
      });
    }

    // Timetable Opacity Slider
    const opacitySlider = document.getElementById('slider-timetable-opacity');
    const opacityValText = document.getElementById('timetable-opacity-val');

    this.timetableOpacity = 100;

    this.setTimetableOpacity = (val) => {
      this.timetableOpacity = Math.max(20, Math.min(100, parseInt(val, 10) || 100));
      if (opacitySlider) opacitySlider.value = this.timetableOpacity;
      if (opacityValText) opacityValText.innerText = `${this.timetableOpacity}%`;
      document.documentElement.style.setProperty('--timetable-opacity', `${this.timetableOpacity / 100}`);
    };

    if (opacitySlider) {
      opacitySlider.addEventListener('input', (e) => {
        this.setTimetableOpacity(e.target.value);
        this._stagePending();
      });
    }

    // Screen Aspect Ratio Engine (Zero-Crop Technology)
    this.currentScreenRatio = localStorage.getItem('schedully_screen_ratio') || 'auto';
    this.wallpaperAspect = null;

    const getLocalDeviceScreenInfo = () => {
      if (typeof window === 'undefined' || !window.screen) return null;
      const isMobileOrTouch = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent) || 
        (window.matchMedia && window.matchMedia('(max-width: 1024px) and (pointer: coarse)').matches);
      
      if (!isMobileOrTouch) return null;

      const screenW = Math.min(window.screen.width, window.screen.height) * (window.devicePixelRatio || 1);
      const screenH = Math.max(window.screen.width, window.screen.height) * (window.devicePixelRatio || 1);

      if (screenW > 0 && screenH > 0) {
        const aspect = screenH / screenW;
        return {
          aspect,
          width: screenW,
          height: screenH,
          ratioFormatted: `${(aspect * 9).toFixed(1)}:9`
        };
      }
      return null;
    };

    this.updateCanvasScreenRatio = () => {
      const phoneCanvas = document.getElementById('phone-canvas');
      const ratioBtn = document.getElementById('btn-controls-ratio-toggle');
      const ratioPopover = document.getElementById('canvas-ratio-popover');
      const badge = document.getElementById('current-ratio-badge');
      const toggles = document.getElementById('screen-ratio-toggles');

      if (!phoneCanvas) return;

      const isPaper = phoneCanvas.classList.contains('canvas-paper');
      if (isPaper) {
        if (ratioBtn) {
          ratioBtn.style.opacity = '0.35';
          ratioBtn.style.pointerEvents = 'none';
          ratioBtn.style.filter = 'grayscale(1)';
        }
        if (ratioPopover) ratioPopover.classList.add('hidden');
        if (badge) badge.innerText = 'N/A (Paper)';
        return;
      } else {
        if (ratioBtn) {
          ratioBtn.style.opacity = '1';
          ratioBtn.style.pointerEvents = 'auto';
          ratioBtn.style.filter = 'none';
        }
      }

      const isTablet = phoneCanvas.classList.contains('canvas-tablet');
      const isWatch = phoneCanvas.classList.contains('canvas-watch');
      const ratio = this.currentScreenRatio || 'auto';
      const devScreen = getLocalDeviceScreenInfo();

      if (isWatch) {
        // ⌚ SMARTWATCH & SMART BAND RATIOS (Generic non-branded presets)
        let badgeLabel = 'Squircle (4:5)';
        const straps = document.querySelectorAll('.watch-strap');
        straps.forEach(s => s.classList.remove('strap-band', 'strap-capsule', 'strap-round', 'strap-squircle'));
        phoneCanvas.classList.remove('watch-shape-band', 'watch-shape-capsule', 'watch-shape-round');

        if (ratio === 'android' || ratio === 'band') {
          phoneCanvas.classList.add('watch-shape-band');
          straps.forEach(s => s.classList.add('strap-band'));
          badgeLabel = 'Smart Band (1:1.9)';
        } else if (ratio === 'ios' || ratio === 'capsule') {
          phoneCanvas.classList.add('watch-shape-capsule');
          straps.forEach(s => s.classList.add('strap-capsule'));
          badgeLabel = 'Pill Capsule (1:2.5)';
        } else if (ratio === 'standard' || ratio === 'round') {
          phoneCanvas.classList.add('watch-shape-round');
          straps.forEach(s => s.classList.add('strap-round'));
          badgeLabel = 'Round (1:1)';
        } else {
          straps.forEach(s => s.classList.add('strap-squircle'));
          badgeLabel = 'Squircle (4:5)';
        }

        if (badge) badge.innerText = badgeLabel;

        // Smoothly adjust canvas wrapper dimensions and auto-center
        if (typeof window.applyZoom === 'function') {
          window.applyZoom(true);
        }
        if (typeof window.centerCanvasModel === 'function') {
          window.centerCanvasModel(true);
        }

        // Smartwatch Mode Labels
        if (toggles) {
          const btnAutoTitle = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-title');
          const btnAutoSub = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-sub');
          const btnBandTitle = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-title');
          const btnBandSub = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-sub');
          const btnCapsuleTitle = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-title');
          const btnCapsuleSub = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-sub');
          const btnRoundTitle = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-title');
          const btnRoundSub = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-sub');

          if (btnAutoTitle) btnAutoTitle.innerText = 'Squircle';
          if (btnAutoSub) btnAutoSub.innerText = '4:5';
          if (btnBandTitle) btnBandTitle.innerText = 'Smart Band';
          if (btnBandSub) btnBandSub.innerText = '1:1.9';
          if (btnCapsuleTitle) btnCapsuleTitle.innerText = 'Pill Capsule';
          if (btnCapsuleSub) btnCapsuleSub.innerText = '1:2.5';
          if (btnRoundTitle) btnRoundTitle.innerText = 'Round';
          if (btnRoundSub) btnRoundSub.innerText = '1:1';
        }
      } else if (isTablet) {
        // 🖥️ TABLET MODE RATIOS (iPad 4:3, Android Tablet 16:10 / 3:2, Widescreen 16:9)
        let targetTabletW = 920;
        let targetTabletH = 690; // Default iPad 4:3
        let badgeLabel = 'iPad (4:3)';

        if (ratio === 'auto') {
          if (devScreen && devScreen.aspect <= 1.45) {
            targetTabletH = Math.round(920 / devScreen.aspect);
            badgeLabel = `Auto (${devScreen.ratioFormatted} Screen)`;
          } else if (this.wallpaperAspect && this.wallpaperAspect >= 0.5 && this.wallpaperAspect <= 0.85) {
            targetTabletH = Math.round(920 * this.wallpaperAspect);
            targetTabletH = Math.max(518, Math.min(690, targetTabletH));
            badgeLabel = `Auto (${(16 / (1 / this.wallpaperAspect)).toFixed(1)}:10 Photo)`;
          } else {
            targetTabletH = 690;
            badgeLabel = 'Auto (4:3)';
          }
        } else if (ratio === 'android' || ratio === 'xiaomi') {
          targetTabletH = 575; // 16:10 ratio for Xiaomi Pad / Galaxy Tab
          badgeLabel = 'Android Tab (16:10)';
        } else if (ratio === 'ios' || ratio === 'iphone') {
          targetTabletH = 690; // 4:3 ratio for iPad Pro / iPad Air
          badgeLabel = 'iPad (4:3)';
        } else if (ratio === 'standard') {
          targetTabletH = 518; // 16:9 widescreen
          badgeLabel = '16:9 Widescreen';
        }

        document.documentElement.style.setProperty('--tablet-canvas-width', `${targetTabletW}px`);
        document.documentElement.style.setProperty('--tablet-canvas-height', `${targetTabletH}px`);
        if (badge) badge.innerText = badgeLabel;

        // Dynamic Tablet Mode Sublabels
        if (toggles) {
          const btnAutoTitle = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-title');
          const btnAutoSub = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-sub');
          const btnAndroidTitle = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-title');
          const btnAndroid = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-sub');
          const btnIosTitle = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-title');
          const btnIos = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-sub');
          const btnStdTitle = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-title');
          const btnStd = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-sub');
          if (btnAutoTitle) btnAutoTitle.innerText = 'Auto';
          if (btnAutoSub) btnAutoSub.innerText = 'Match';
          if (btnAndroidTitle) btnAndroidTitle.innerText = 'Android';
          if (btnAndroid) btnAndroid.innerText = '16:10';
          if (btnIosTitle) btnIosTitle.innerText = 'iPad';
          if (btnIos) btnIos.innerText = '4:3';
          if (btnStdTitle) btnStdTitle.innerText = 'Classic';
          if (btnStd) btnStd.innerText = '16:9';
        }
      } else {
        // 📱 SMARTPHONE MODE RATIOS (Sleek Authentic Phone Chassis Preview)
        let targetHeight = 770; // Authentic sleek smartphone proportion
        let badgeLabel = 'Auto (Match)';

        if (ratio === 'auto') {
          if (devScreen && devScreen.aspect > 1.4) {
            targetHeight = Math.round(380 * devScreen.aspect);
            badgeLabel = `Auto (${devScreen.ratioFormatted || 'Screen'})`;
          } else if (this.wallpaperAspect && this.wallpaperAspect > 1.2) {
            targetHeight = Math.round(380 * this.wallpaperAspect);
            badgeLabel = `Auto (${(this.wallpaperAspect * 9).toFixed(1)}:9 Photo)`;
          } else {
            targetHeight = 844; // Exact 20:9
            badgeLabel = 'Auto (20:9)';
          }
        } else if (ratio === 'android' || ratio === 'xiaomi') {
          targetHeight = 844; // Exact 20:9 flagship chassis preview
          badgeLabel = 'Android (20:9)';
        } else if (ratio === 'ios' || ratio === 'iphone') {
          targetHeight = 823; // Exact 19.5:9 iPhone chassis preview
          badgeLabel = 'iOS (19.5:9)';
        } else if (ratio === 'standard') {
          targetHeight = 760; // Exact 18:9 Classic chassis preview
          badgeLabel = '18:9 Classic';
        }

        document.documentElement.style.setProperty('--phone-canvas-height', `${targetHeight}px`);
        if (badge) badge.innerText = badgeLabel;

        // Restore Smartphone Mode Sublabels
        if (toggles) {
          const btnAutoTitle = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-title');
          const btnAutoSub = toggles.querySelector('.ratio-card-btn[data-ratio="auto"] .ratio-card-sub');
          const btnAndroidTitle = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-title');
          const btnAndroid = toggles.querySelector('.ratio-card-btn[data-ratio="android"] .ratio-card-sub');
          const btnIosTitle = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-title');
          const btnIos = toggles.querySelector('.ratio-card-btn[data-ratio="ios"] .ratio-card-sub');
          const btnStdTitle = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-title');
          const btnStd = toggles.querySelector('.ratio-card-btn[data-ratio="standard"] .ratio-card-sub');
          if (btnAutoTitle) btnAutoTitle.innerText = 'Auto';
          if (btnAutoSub) btnAutoSub.innerText = 'Match';
          if (btnAndroidTitle) btnAndroidTitle.innerText = 'Android';
          if (btnAndroid) btnAndroid.innerText = '20:9';
          if (btnIosTitle) btnIosTitle.innerText = 'iOS';
          if (btnIos) btnIos.innerText = '19.5:9';
          if (btnStdTitle) btnStdTitle.innerText = 'Classic';
          if (btnStd) btnStd.innerText = '18:9';
        }
      }

      // Update active toggle buttons
      if (toggles) {
        toggles.querySelectorAll('.pill-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-ratio') === ratio);
        });
      }
    };

    const ratioToggles = document.getElementById('screen-ratio-toggles');
    const btnControlsRatioToggle = document.getElementById('btn-controls-ratio-toggle');
    const canvasRatioPopover = document.getElementById('canvas-ratio-popover');
    const btnCloseRatioPopover = document.getElementById('btn-close-ratio-popover');

    if (btnControlsRatioToggle && canvasRatioPopover) {
      btnControlsRatioToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        canvasRatioPopover.classList.toggle('hidden');
      });
    }

    if (btnCloseRatioPopover && canvasRatioPopover) {
      btnCloseRatioPopover.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        canvasRatioPopover.classList.add('hidden');
      });
    }

    if (ratioToggles) {
      ratioToggles.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const r = btn.getAttribute('data-ratio');
          if (r) {
            this.currentScreenRatio = r;
            try {
              localStorage.setItem('schedully_screen_ratio', r);
            } catch (e) {}
            this.updateCanvasScreenRatio();
            this._stagePending();
          }
        });
      });
    }

    // Initialize aspect ratio on startup
    this.updateCanvasScreenRatio();

    // Restore saved wallpaper from storage if present
    try {
      const savedWallpaper = localStorage.getItem('schedully_wallpaper_data');
      if (savedWallpaper) {
        this.applyWallpaper(savedWallpaper, true);
      }
    } catch (e) {}

    input?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      this.compressWallpaperImage(file, (compressedDataUrl) => {
        this.applyWallpaper(compressedDataUrl, true);
        this._stagePending();
      });
    });

    removeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.removeWallpaper();
    });

    const resyncBtn = document.getElementById('btn-resync-wallpaper-colors');
    resyncBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      this.userHasPickedBgColor = false;
      this.userHasPickedHeaderColor = false;
      this.userHasPickedSurfaceColor = false;
      this.userHasPickedFontColor = false;
      this.globalAdaptiveColor = true;

      // Update Quick Setting Pill if exists
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'yes');
      });

      // Clear all manual overrides on all classes so they strictly re-sync with the wallpaper theme
      this.classes.forEach(c => {
        delete c.customColor;
        delete c.isManualCustomColor;
        delete c.fontColor;
      });

      const wallpaperData = this.currentWallpaperData || localStorage.getItem('schedully_wallpaper_data');
      if (wallpaperData) {
        this.extractColorsFromImage(wallpaperData, false, true);
      } else {
        this.applyThemeEngine();
      }

      this.renderAll();
      this._stagePending();
    });
  }

  compressWallpaperImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX_WIDTH = 1440;
        const MAX_HEIGHT = 3200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // JPEG at 0.88 quality produces crisp 4K wallpaper with lightweight payload
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
        callback(compressedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  setWallpaperModeUI(isActive) {
    const paletteRow = document.querySelector('#palette-picker-section .palette-row');
    const badge = document.getElementById('palette-wallpaper-badge');
    const btnRandTheme = document.getElementById('btn-randomize-theme');
    const btnRandCourse = document.getElementById('btn-randomize-course-colors');
    const btnRandSchedule = document.getElementById('btn-randomize-colors');

    const quickAdaptiveRow = document.getElementById('toggle-quick-adaptive')?.closest('.opt-row');

    if (isActive) {
      paletteRow?.classList.add('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.add('disabled-by-wallpaper');
      badge?.classList.remove('hidden');

      [btnRandTheme, btnRandCourse, btnRandSchedule].forEach(btn => {
        if (btn) {
          btn.classList.add('disabled-by-wallpaper');
          btn.setAttribute('disabled', 'true');
          btn.title = "Color palette is automatically adapted from your active wallpaper";
        }
      });
    } else {
      paletteRow?.classList.remove('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.remove('disabled-by-wallpaper');
      badge?.classList.add('hidden');

      [btnRandTheme, btnRandCourse, btnRandSchedule].forEach(btn => {
        if (btn) {
          btn.classList.remove('disabled-by-wallpaper');
          btn.removeAttribute('disabled');
          btn.title = btn.getAttribute('data-orig-title') || "Randomize";
        }
      });
    }
  }

  applyWallpaper(dataUrl, shouldExtract = true, isSwitchingPreset = false) {
    this.currentWallpaperData = dataUrl;

    const phoneCanvas = document.getElementById('phone-canvas');
    const wallpaperLayer = document.getElementById('phone-wallpaper-layer');
    const controlsBar = document.getElementById('wallpaper-controls-bar');
    const uploadContainer = document.getElementById('wallpaper-upload-container');
    const thumbPreview = document.getElementById('wallpaper-thumb-preview');

    if (wallpaperLayer) {
      wallpaperLayer.style.backgroundImage = `url("${dataUrl}")`;
      wallpaperLayer.style.opacity = '1';
    }

    if (phoneCanvas) {
      phoneCanvas.classList.add('has-photo-wallpaper');
    }

    if (controlsBar && thumbPreview) {
      thumbPreview.src = dataUrl;
      controlsBar.classList.remove('hidden');
    }

    if (uploadContainer) {
      uploadContainer.classList.add('hidden');
    }

    // Auto grey out & disable color palette and randomizer buttons
    this.setWallpaperModeUI(true);

    try {
      localStorage.setItem('schedully_wallpaper_data', dataUrl);
    } catch (e) {}

    // Also update the active preset's wallpaper record immediately
    if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
      this.presets[this.activePresetKey].wallpaper = dataUrl;
    }

    // Detect image aspect ratio for zero-crop fit
    const imgAspectChecker = new Image();
    imgAspectChecker.onload = () => {
      if (imgAspectChecker.naturalWidth > 0 && imgAspectChecker.naturalHeight > 0) {
        this.wallpaperAspect = imgAspectChecker.naturalHeight / imgAspectChecker.naturalWidth;
        if (typeof this.updateCanvasScreenRatio === 'function') {
          this.updateCanvasScreenRatio();
        }
      }
    };
    imgAspectChecker.src = dataUrl;

    if (shouldExtract) {
      this.extractColorsFromImage(dataUrl, isSwitchingPreset);
    }
  }

  removeWallpaper(isSwitchingPreset = false) {
    const phoneCanvas = document.getElementById('phone-canvas');
    const wallpaperLayer = document.getElementById('phone-wallpaper-layer');
    const controlsBar = document.getElementById('wallpaper-controls-bar');
    const uploadContainer = document.getElementById('wallpaper-upload-container');
    const input = document.getElementById('wallpaper-image-input');

    this.wallpaperAspect = null;
    if (typeof this.updateCanvasScreenRatio === 'function') {
      this.updateCanvasScreenRatio();
    }

    if (wallpaperLayer) {
      wallpaperLayer.style.backgroundImage = '';
      wallpaperLayer.style.opacity = '0';
    }

    if (phoneCanvas) {
      phoneCanvas.style.backgroundImage = '';
      phoneCanvas.classList.remove('has-photo-wallpaper');
    }

    if (controlsBar) {
      controlsBar.classList.add('hidden');
    }

    if (uploadContainer) {
      uploadContainer.classList.remove('hidden');
    }

    if (input) input.value = '';

    this.wallpaperSwatches = null;

    // Un-grey and re-enable color palette and randomizer buttons
    this.setWallpaperModeUI(false);

    try {
      localStorage.removeItem('schedully_wallpaper_data');
    } catch (e) {}

    // Only wipe from active preset if user explicitly tapped the Remove Wallpaper button (not when switching presets)
    if (!isSwitchingPreset) {
      this.currentWallpaperData = null;
      if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
        this.presets[this.activePresetKey].wallpaper = null;
        this.presets[this.activePresetKey].wallpaperSwatches = null;
      }
      this._stagePending();
    }

    // Reset back to active preset theme palette
    this.applyThemeEngine();
    this.renderTimetableGrid();
  }

  setupFontFamilyEngine() {
    const fontSelect = document.getElementById('select-font-family');
    const customFontInput = document.getElementById('custom-font-upload');
    const dropdownContainer = document.getElementById('font-dropdown-container');
    const triggerBtn = document.getElementById('btn-font-dropdown-trigger');
    const dropdownMenu = document.getElementById('font-dropdown-menu');
    const triggerName = document.getElementById('font-trigger-name');
    const triggerBadge = document.getElementById('font-trigger-badge');

    const fontMap = {
      'default': "'Google Sans', 'Product Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      'great-vibes': "'Great Vibes', cursive",
      'dancing-script': "'Dancing Script', cursive",
      'caveat': "'Caveat', cursive",
      'sacramento': "'Sacramento', cursive",
      'cinzel': "'Cinzel', Georgia, serif",
      'comfortaa': "'Comfortaa', cursive, sans-serif",
      'syne': "'Syne', sans-serif",
      'playfair': "'Playfair Display', Georgia, serif",
      'plus-jakarta': "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      'outfit': "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
      'jetbrains': "'JetBrains Mono', monospace",
      'space-grotesk': "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      'lexend': "'Lexend', -apple-system, BlinkMacSystemFont, sans-serif",
      'inter': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    };

    const fontNames = {
      'default': 'Google Sans',
      'great-vibes': 'Great Vibes',
      'dancing-script': 'Dancing Script',
      'caveat': 'Caveat',
      'sacramento': 'Sacramento',
      'cinzel': 'Cinzel',
      'comfortaa': 'Comfortaa',
      'syne': 'Syne',
      'playfair': 'Playfair Display',
      'plus-jakarta': 'Plus Jakarta Sans',
      'outfit': 'Outfit',
      'jetbrains': 'JetBrains Mono',
      'space-grotesk': 'Space Grotesk',
      'lexend': 'Lexend',
      'inter': 'Inter',
      'custom': 'Custom Font'
    };

    const fontSubtitles = {
      'default': 'Default Clean',
      'great-vibes': 'Royal Cursive Calligraphy',
      'dancing-script': 'Aesthetic Casual Flow',
      'caveat': 'Studygram Handwritten',
      'sacramento': 'Delicate Signature',
      'cinzel': 'Luxury Roman / Academia',
      'comfortaa': 'Cute Soft Aesthetic',
      'syne': 'Avant-Garde Art',
      'playfair': 'Classy Serif',
      'plus-jakarta': 'iOS Aesthetic Sans',
      'outfit': 'Geometric & Crisp',
      'jetbrains': 'Developer Monospace',
      'space-grotesk': 'Modernist Tech Display',
      'lexend': 'Ultra Readable',
      'inter': 'Neutral Clean',
      'custom': 'Custom Uploaded Font'
    };

    const triggerSub = document.getElementById('font-trigger-sub');

    this.currentFontKey = 'default';

    this.applyFontFamily = async (fontKey, customFamilyName = null, skipSave = false) => {
      this.currentFontKey = fontKey;
      let stack = fontMap[fontKey] || fontMap['default'];
      let displayName = fontNames[fontKey] || fontKey;

      if (fontKey === 'custom' && customFamilyName) {
        stack = `'${customFamilyName}', -apple-system, BlinkMacSystemFont, sans-serif`;
        displayName = this.customLoadedCleanName || customFamilyName;
      }

      document.documentElement.style.setProperty('--timetable-font-family', stack);
      
      // Update custom trigger UI
      if (triggerName) {
        triggerName.innerText = displayName;
      }
      if (triggerSub) {
        triggerSub.innerText = fontSubtitles[fontKey] || 'Custom Font';
      }
      if (triggerBadge) {
        triggerBadge.style.fontFamily = stack;
      }

      // Update active state in custom popover items
      if (dropdownMenu) {
        dropdownMenu.querySelectorAll('.font-option-item').forEach(item => {
          item.classList.toggle('active', item.getAttribute('data-font') === fontKey);
        });
      }

      // Ensure browser font cache is primed
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch (e) {}
      }

      if (fontSelect && fontKey !== 'custom') {
        fontSelect.value = fontKey;
      }
      this.renderTimetableGrid();
      if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
        this.renderWatchGlance();
      }
      if (!skipSave) {
        this._stagePending();
      }
    };

    // Toggle Popover Menu
    if (triggerBtn && dropdownMenu) {
      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !dropdownMenu.classList.contains('hidden');
        if (isOpen) {
          dropdownMenu.classList.add('hidden');
          triggerBtn.classList.remove('is-open');
        } else {
          dropdownMenu.classList.remove('hidden');
          triggerBtn.classList.add('is-open');
        }
      });

      // Option item selection
      dropdownMenu.querySelectorAll('.font-option-item').forEach(item => {
        item.addEventListener('click', () => {
          const fontKey = item.getAttribute('data-font');
          if (fontKey) {
            this.applyFontFamily(fontKey);
            dropdownMenu.classList.add('hidden');
            triggerBtn.classList.remove('is-open');
          }
        });
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!dropdownContainer?.contains(e.target)) {
          dropdownMenu.classList.add('hidden');
          triggerBtn.classList.remove('is-open');
        }
      });
    }

    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        this.applyFontFamily(e.target.value);
      });
    }

    if (customFontInput) {
      customFontInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
          const fontName = 'CustomFont_' + Date.now();
          const buffer = await file.arrayBuffer();
          const fontFace = new FontFace(fontName, buffer);
          await fontFace.load();
          document.fonts.add(fontFace);

          const cleanName = file.name.replace(/\.[^/.]+$/, "");
          this.customLoadedCleanName = cleanName;

          // Add or update custom item in custom dropdown menu
          if (dropdownMenu) {
            let customItem = dropdownMenu.querySelector('.font-option-item[data-font="custom"]');
            if (!customItem) {
              const scrollContainer = dropdownMenu.querySelector('.custom-font-menu-scroll');
              if (scrollContainer) {
                const customHeader = document.createElement('div');
                customHeader.className = 'font-group-header';
                customHeader.innerHTML = `
                  <svg class="w-3.5 h-3.5 shrink-0 font-header-icon-custom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                  </svg>
                  <span>Uploaded Custom Font</span>
                `;
                scrollContainer.appendChild(customHeader);

                const customGroup = document.createElement('div');
                customGroup.className = 'font-group-items';
                customItem = document.createElement('button');
                customItem.type = 'button';
                customItem.className = 'font-option-item active';
                customItem.setAttribute('data-font', 'custom');
                customItem.innerHTML = `
                  <div class="font-option-info">
                    <span class="font-option-title">${cleanName}</span>
                    <span class="font-option-desc">Custom Uploaded Font</span>
                  </div>
                  <span class="font-check-icon">✓</span>
                `;
                customItem.addEventListener('click', () => {
                  this.applyFontFamily('custom', fontName);
                  dropdownMenu.classList.add('hidden');
                  triggerBtn?.classList.remove('is-open');
                });
                customGroup.appendChild(customItem);
                scrollContainer.appendChild(customGroup);
              }
            } else {
              customItem.querySelector('.font-option-title').innerText = cleanName;
            }
          }

          // Fallback select element
          let customOpt = fontSelect.querySelector('option[value="custom"]');
          if (!customOpt) {
            customOpt = document.createElement('option');
            customOpt.value = 'custom';
            fontSelect.appendChild(customOpt);
          }
          customOpt.innerText = `Custom: ${cleanName}`;
          customOpt.selected = true;

          this.customLoadedFontName = fontName;
          await this.applyFontFamily('custom', fontName);
        } catch (err) {
          console.error("Font loading error:", err);
          alert("Could not load font. Please ensure the file is a valid .ttf, .otf, or .woff2 font file.");
        }
      });
    }
  }

  extractColorsFromImage(dataUrl, skipAutoStage = false, forceOverrideAll = false) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 100;
        const height = 100;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const imgData = ctx.getImageData(0, 0, width, height).data;
        const colorBuckets = {};
        let topLuminanceSum = 0;
        let topPixelCount = 0;

        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i+1];
          const b = imgData[i+2];
          const a = imgData[i+3];

          if (a < 128) continue;

          const pixelIndex = i / 4;
          const y = Math.floor(pixelIndex / width);

          // Top area luminance (for clock text contrast)
          if (y < 30) {
            topLuminanceSum += (0.299 * r + 0.587 * g + 0.114 * b);
            topPixelCount++;
          }

          // Quantize to bucket similar shades
          const qr = Math.round(r / 28) * 28;
          const qg = Math.round(g / 28) * 28;
          const qb = Math.round(b / 28) * 28;
          const key = `${qr},${qg},${qb}`;

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const sat = (max === 0) ? 0 : (max - min) / max;
          const lum = (0.299 * r + 0.587 * g + 0.114 * b);

          // Prefer rich, vibrant, authentic tones directly from wallpaper pixels
          if (lum > 25 && lum < 235 && sat > 0.12) {
            const weight = (sat * 3.0) + 1.2;
            colorBuckets[key] = (colorBuckets[key] || 0) + weight;
          }
        }

        const sorted = Object.keys(colorBuckets).sort((a, b) => colorBuckets[b] - colorBuckets[a]);

        if (sorted.length > 0) {
          const parseRgb = (k) => k.split(',').map(Number);
          const dominantRgb = parseRgb(sorted[0]);
          const rgbToHex = (r, g, b) => "#" + [r, g, b].map(x => {
            const hex = Math.min(255, Math.max(0, Math.round(x))).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          }).join('');

          // Extract distinct authentic colors directly from the wallpaper
          const courseSwatches = [];
          for (let i = 0; i < sorted.length && courseSwatches.length < 8; i++) {
            const rgb = parseRgb(sorted[i]);
            const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
            const isDistinct = courseSwatches.every(picked => {
              const pr = parseInt(picked.slice(1, 3), 16) || 0;
              const pg = parseInt(picked.slice(3, 5), 16) || 0;
              const pb = parseInt(picked.slice(5, 7), 16) || 0;
              const d = Math.sqrt(Math.pow(rgb[0] - pr, 2) + Math.pow(rgb[1] - pg, 2) + Math.pow(rgb[2] - pb, 2));
              return d >= 35;
            });
            if (isDistinct) {
              courseSwatches.push(hex);
            }
          }

          // If wallpaper has fewer distinct colors, generate harmonious shades from the extracted dominant
          if (courseSwatches.length < 8 && courseSwatches.length > 0) {
            const [br, bg, bb] = parseRgb(sorted[0]);
            const multipliers = [0.8, 1.2, 0.65, 1.35, 0.5, 1.5];
            for (const mult of multipliers) {
              if (courseSwatches.length >= 8) break;
              const vr = Math.min(255, Math.max(0, Math.round(br * mult)));
              const vg = Math.min(255, Math.max(0, Math.round(bg * mult)));
              const vb = Math.min(255, Math.max(0, Math.round(bb * mult)));
              const vHex = rgbToHex(vr, vg, vb);
              if (!courseSwatches.includes(vHex)) {
                courseSwatches.push(vHex);
              }
            }
          }

          const primaryHex = courseSwatches[0] || '#2563EB';

          // Auto-contrast Clock Color (Pure neutral deep graphite or pure white)
          const avgTopLum = topPixelCount > 0 ? (topLuminanceSum / topPixelCount) : 128;
          const clockColor = avgTopLum > 140 ? '#111827' : '#FFFFFF';
          const clockShadow = avgTopLum > 140 ? 'none' : '0 2px 10px rgba(0,0,0,0.6)';

          // Adaptive UI Primary Color
          const isDarkPrimary = this.isColorDark(primaryHex);
          let uiPrimaryHex = primaryHex;
          let onPrimaryHex = isDarkPrimary ? '#FFFFFF' : '#111827';

          // In dark mode, if the extracted color is dark, brighten/saturate for high contrast on dark UI
          if (this.currentMode === 'dark' && isDarkPrimary) {
            const boost = (c) => Math.min(255, Math.round(c * 1.6 + 45));
            uiPrimaryHex = rgbToHex(boost(dominantRgb[0]), boost(dominantRgb[1]), boost(dominantRgb[2]));
            onPrimaryHex = '#FFFFFF';
          }

          // Apply adaptive CSS properties
          const root = document.documentElement;
          root.style.setProperty('--m3-sys-color-primary', uiPrimaryHex);
          root.style.setProperty('--m3-sys-color-on-primary', onPrimaryHex);
          root.style.setProperty('--m3-sys-color-primary-container', uiPrimaryHex + (this.currentMode === 'dark' ? '30' : '15'));
          this.applyHeaderColor(primaryHex);

          // Grey out & disable palette options while wallpaper is active
          this.setWallpaperModeUI(true);

          // Reset manual custom font override so wallpaper adaptive contrast takes effect
          this.applyFontColor('');

          const lockHeader = document.getElementById('phone-lock-header');
          if (lockHeader) {
            lockHeader.style.color = clockColor;
            lockHeader.style.textShadow = clockShadow;
          }

          this.wallpaperSwatches = courseSwatches;

          // Save wallpaperSwatches to active preset record
          if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
            this.presets[this.activePresetKey].wallpaperSwatches = courseSwatches;
          }

          // Auto update class course colors to match photo palette
          this.classes.forEach((cls, idx) => {
            cls.customColor = courseSwatches[idx % courseSwatches.length];
            cls.color = courseSwatches[idx % courseSwatches.length];
          });

          // Update Add A Course swatches with extracted wallpaper course swatches
          const courseDots = document.querySelectorAll('.swatch-grid .swatch-dot');
          courseSwatches.forEach((hex, idx) => {
            if (courseDots[idx]) {
              courseDots[idx].setAttribute('data-color', hex);
              courseDots[idx].style.backgroundColor = hex;
            }
          });
          if (courseSwatches.length > 0) {
            this.selectedColor = courseSwatches[0];
          }

          this.renderAll();
          if (!skipAutoStage) {
            this._stagePending();
          }
        }
      } catch (err) {
        console.warn("Color extraction failed:", err);
      }
    };
    img.src = dataUrl;
  }

  setupCustomColorModalEngine() {
    const modal = document.getElementById('custom-color-modal');
    const preview = document.getElementById('modal-color-preview');
    const hexInput = document.getElementById('modal-color-hex-input');
    const btnClose = document.getElementById('btn-close-color-modal');
    const btnCancel = document.getElementById('btn-cancel-custom-color');
    const btnApply = document.getElementById('btn-apply-custom-color');
    const titleEl = document.getElementById('custom-color-modal-title');

    const vibrantGrid = document.getElementById('palette-grid-vibrant');
    const pastelGrid = document.getElementById('palette-grid-pastel');
    const earthyGrid = document.getElementById('palette-grid-earthy');

    const VIBRANT_SHADES = [
      '#2563EB', '#3B82F6', '#60A5FA', '#0284C7', '#0EA5E9', '#06B6D4', '#10B981', '#059669',
      '#F59E0B', '#D97706', '#EA580C', '#E11D48', '#F43F5E', '#E11D48', '#9333EA', '#7C3AED'
    ];

    const PASTEL_SHADES = [
      '#BFDBFE', '#BAE6FD', '#A5F3FC', '#A7F3D0', '#BBF7D0', '#FDE68A', '#FED7AA', '#FECDD3',
      '#FBCFE8', '#DDD6FE', '#E0E7FF', '#C7D2FE', '#E2E8F0', '#F1F5F9', '#CBD5E1', '#94A3B8'
    ];

    const EARTHY_SHADES = [
      '#1E293B', '#0F172A', '#334155', '#475569', '#3F3F46', '#27272A', '#18181B', '#3E2723',
      '#4E342E', '#5D4037', '#6D4C41', '#795548', '#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8'
    ];

    let activeColorCallback = null;
    let currentColor = '#2563EB';

    const updatePreview = (hex) => {
      let cleanHex = hex.replace('#', '').trim();
      if (cleanHex.length === 3) cleanHex = cleanHex.split('').map(x => x + x).join('');
      if (cleanHex.length !== 6) return;
      const formattedHex = '#' + cleanHex.toUpperCase();
      currentColor = formattedHex;
      if (preview) {
        preview.style.backgroundColor = formattedHex;
        preview.style.color = this.getContrastColor(formattedHex);
      }
      if (hexInput && hexInput.value.toUpperCase() !== cleanHex.toUpperCase()) {
        hexInput.value = cleanHex.toUpperCase();
      }

      // Highlight active dot
      modal?.querySelectorAll('.color-modal-dot').forEach(dot => {
        dot.classList.toggle('ring-2', dot.getAttribute('data-hex').toUpperCase() === formattedHex);
        dot.classList.toggle('ring-blue-500', dot.getAttribute('data-hex').toUpperCase() === formattedHex);
      });
    };

    const renderDots = (grid, colors) => {
      if (!grid) return;
      grid.innerHTML = '';
      colors.forEach(hex => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'color-modal-dot w-7 h-7 rounded-lg border border-black/10 transition-all hover:scale-110 active:scale-95 shadow-xs';
        dot.style.backgroundColor = hex;
        dot.setAttribute('data-hex', hex);
        dot.addEventListener('click', () => updatePreview(hex));
        grid.appendChild(dot);
      });
    };

    renderDots(vibrantGrid, VIBRANT_SHADES);
    renderDots(pastelGrid, PASTEL_SHADES);
    renderDots(earthyGrid, EARTHY_SHADES);

    hexInput?.addEventListener('input', (e) => {
      updatePreview(e.target.value);
    });

    const closeModal = () => {
      modal?.classList.add('hidden');
      activeColorCallback = null;
    };

    btnClose?.addEventListener('click', closeModal);
    btnCancel?.addEventListener('click', closeModal);

    btnApply?.addEventListener('click', () => {
      if (typeof activeColorCallback === 'function') {
        activeColorCallback(currentColor);
      }
      closeModal();
    });

    // Public method to open color modal anywhere in the app
    this.openCustomColorPicker = (initialHex, title, onApply) => {
      currentColor = initialHex || '#2563EB';
      activeColorCallback = onApply;
      if (titleEl && title) titleEl.innerText = title;
      updatePreview(currentColor);
      modal?.classList.remove('hidden');
    };
  }

  setupLanguageModal() {
    const btnOpen = document.getElementById('btn-open-language-modal');
    const modal = document.getElementById('language-modal');
    const btnClose = document.getElementById('btn-close-language-modal');

    const openModal = () => {
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      window.SchedullyI18n?.applyTranslations();
    };

    const closeModal = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.style.display = 'none';
    };

    if (btnOpen && modal) {
      btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      });

      if (btnClose) {
        btnClose.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });

      document.querySelectorAll('.lang-option-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = pill.getAttribute('data-lang');
          if (lang && window.SchedullyI18n) {
            window.SchedullyI18n.setLanguage(lang);
            closeModal();
          }
        });
      });
    }

    window.SchedullyI18n?.applyTranslations();
  }

  setupCoffeeModal() {
    const btnOpen = document.getElementById('btn-open-coffee-modal');
    const modal = document.getElementById('coffee-modal');
    const btnClose = document.getElementById('btn-close-coffee-modal');
    const tabBmcBtn = document.getElementById('btn-tab-bmc');
    const tabTngBtn = document.getElementById('btn-tab-tng');
    const tabBmcContent = document.getElementById('support-tab-bmc');
    const tabTngContent = document.getElementById('support-tab-tng');

    const switchTab = (tab) => {
      if (tab === 'bmc') {
        tabBmcBtn?.classList.add('active');
        tabTngBtn?.classList.remove('active');
        tabBmcContent?.classList.remove('hidden');
        tabTngContent?.classList.add('hidden');
      } else {
        tabTngBtn?.classList.add('active');
        tabBmcBtn?.classList.remove('active');
        tabTngContent?.classList.remove('hidden');
        tabBmcContent?.classList.add('hidden');
      }
    };

    if (tabBmcBtn) {
      tabBmcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('bmc');
      });
    }
    if (tabTngBtn) {
      tabTngBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('tng');
      });
    }

    const openModal = () => {
      if (!modal) return;
      switchTab('bmc');
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
    };

    const closeModal = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.style.display = 'none';
    };

    if (btnOpen && modal) {
      btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      });

      if (btnClose) {
        btnClose.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
  }

  setupMobilePip() {
    const pipWidget = document.getElementById('mobile-pip-container');
    const pipBubble = document.getElementById('mobile-pip-bubble');
    const pipDevice = document.getElementById('pip-phone-device');
    const targetStage = document.getElementById('pip-live-clone-target');
    const btnCross = document.getElementById('btn-pip-cross');

    if (!pipWidget || !pipDevice || !targetStage) return;

    let isPipMinimized = false;
    const isSmartphone = () => window.innerWidth <= 640;

    // 1. Synchronize PiP Content & Real Dimensions from Live Canvas
    const updateMobilePip = () => {
      if (!isSmartphone()) return;
      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas || !targetStage) return;

      // Determine active device platform mode
      let deviceMode = 'phone';
      if (originalCanvas.classList.contains('canvas-tablet')) {
        deviceMode = 'tablet';
      } else if (originalCanvas.classList.contains('canvas-paper')) {
        deviceMode = 'paper';
      } else if (originalCanvas.classList.contains('canvas-watch')) {
        deviceMode = 'watch';
      }

      const isWatch = deviceMode === 'watch';
      const isCapsuleOrBand = isWatch && (originalCanvas.classList.contains('watch-shape-capsule') || originalCanvas.classList.contains('watch-shape-band'));

      // Measure REAL rendered dimensions from original canvas (NO HARDCODED HEIGHTS!)
      const baseW = originalCanvas.offsetWidth || (deviceMode === 'tablet' ? 920 : (deviceMode === 'paper' ? 720 : (isCapsuleOrBand ? 200 : (isWatch ? 340 : 380))));
      const baseH = originalCanvas.offsetHeight || (deviceMode === 'tablet' ? 690 : (deviceMode === 'paper' ? 480 : (isCapsuleOrBand ? 490 : (isWatch ? 340 : 760))));
      const ratio = baseH / baseW;

      // Detect if user switched device platform (phone <-> tablet <-> paper <-> watch)
      const modeChanged = pipDevice.dataset.currentMode !== deviceMode;
      pipDevice.dataset.currentMode = deviceMode;

      // Update PiP Device Mode Class
      pipDevice.classList.remove('mode-phone', 'mode-tablet', 'mode-paper', 'mode-watch');
      pipDevice.classList.add(`mode-${deviceMode}`);

      // Proportional width bounds
      let minW = 80;
      let maxW = 240;
      if (deviceMode === 'tablet') { minW = 140; maxW = 320; }
      else if (deviceMode === 'paper') { minW = 90; maxW = 260; }
      else if (deviceMode === 'watch') { minW = isCapsuleOrBand ? 65 : 95; maxW = 180; }

      let curW = pipDevice.offsetWidth;
      if (modeChanged || !curW || curW < 40) {
        curW = deviceMode === 'tablet' ? 200 : (deviceMode === 'paper' ? 135 : (isCapsuleOrBand ? 75 : (isWatch ? 115 : 125)));
      }
      curW = Math.max(minW, Math.min(maxW, curW));
      const curH = Math.round(curW * ratio);

      pipDevice.style.width = `${curW}px`;
      pipDevice.style.height = `${curH}px`;

      // Clear targetStage and insert exact cloned live canvas
      targetStage.innerHTML = '';
      const clone = originalCanvas.cloneNode(true);
      clone.id = 'pip-phone-canvas-clone';
      // Suppress side hardware buttons inside mini PiP
      clone.querySelectorAll('.side-btn').forEach(btn => btn.style.setProperty('display', 'none', 'important'));

      // 100% exact subpixel scale matching the miniature device viewport
      const scale = curW / baseW;

      // Scale down blur radius for mini thumbnail to prevent GPU rasterization flicker/glitches
      const scaledBlur = this.bgBlurEnabled ? `${Math.max(1, Math.round((this.bgBlurIntensity || 12) * scale))}px` : '0px';
      clone.style.setProperty('--wallpaper-blur-val', scaledBlur, 'important');

      clone.style.position = 'absolute';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.width = `${baseW}px`;
      clone.style.height = `${baseH}px`;
      clone.style.transformOrigin = 'top left';
      clone.style.transform = `scale(${scale})`;
      clone.style.margin = '0';
      clone.style.pointerEvents = 'none';

      targetStage.appendChild(clone);
    };
    this.updateMobilePip = updateMobilePip;

    // 2. Sync Visibility with Sidebar Status
    const syncMobilePipVisibility = (isAnySidebarOpen) => {
      if (window.isTourActive) {
        pipWidget.classList.add('hidden');
        pipBubble?.classList.add('hidden');
        return;
      }
      if (!isSmartphone()) {
        pipWidget.classList.add('hidden');
        pipBubble?.classList.add('hidden');
        return;
      }

      if (isAnySidebarOpen) {
        if (isPipMinimized) {
          pipWidget.classList.add('hidden');
          pipBubble?.classList.remove('hidden');
        } else {
          pipWidget.classList.remove('hidden');
          pipBubble?.classList.add('hidden');
          updateMobilePip();
        }
      } else {
        pipWidget.classList.add('hidden');
        pipBubble?.classList.add('hidden');
      }
    };
    this.syncMobilePipVisibility = syncMobilePipVisibility;

    // 3. Proportional Pinch & Size Engine (Zero lag, 60fps tracking)
    const applyDeviceDimensions = (newWidth) => {
      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas) return;
      const deviceMode = pipDevice.dataset.currentMode || 'phone';
      const isWatch = deviceMode === 'watch';
      const isCapsuleOrBand = isWatch && (originalCanvas.classList.contains('watch-shape-capsule') || originalCanvas.classList.contains('watch-shape-band'));
      const baseW = originalCanvas.offsetWidth || (deviceMode === 'tablet' ? 920 : (deviceMode === 'paper' ? 720 : (isCapsuleOrBand ? 200 : (isWatch ? 340 : 380))));
      const baseH = originalCanvas.offsetHeight || (deviceMode === 'tablet' ? 690 : (deviceMode === 'paper' ? 480 : (isCapsuleOrBand ? 490 : (isWatch ? 340 : 760))));
      const ratio = baseH / baseW;

      let minW = 60;
      let maxW = 260;
      if (deviceMode === 'tablet') { minW = 120; maxW = 340; }
      else if (deviceMode === 'paper') { minW = 80; maxW = 280; }
      else if (deviceMode === 'watch') { minW = isCapsuleOrBand ? 55 : 85; maxW = 180; }

      const clampedW = Math.max(minW, Math.min(maxW, newWidth));
      const newH = Math.round(clampedW * ratio);

      pipDevice.style.width = `${clampedW}px`;
      pipDevice.style.height = `${newH}px`;

      const scale = clampedW / baseW;
      const pipClone = targetStage.querySelector('#pip-phone-canvas-clone') || targetStage.firstElementChild;
      if (pipClone) {
        pipClone.style.width = `${baseW}px`;
        pipClone.style.height = `${baseH}px`;
        pipClone.style.transformOrigin = 'top left';
        pipClone.style.transform = `scale(${scale})`;
        const scaledBlur = this.bgBlurEnabled ? `${Math.max(1, Math.round((this.bgBlurIntensity || 12) * scale))}px` : '0px';
        pipClone.style.setProperty('--wallpaper-blur-val', scaledBlur, 'important');
      }
    };

    // 4. Top-Right Cross Button Minimizes to Action Ball (Matches exact PiP position)
    const minimizeToBubble = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      isPipMinimized = true;

      // Position Preview Ball at the exact center of current PiP model
      const rect = pipWidget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const bubbleW = 48;
      const bubbleH = 48;
      const bubbleLeft = Math.max(8, Math.min(window.innerWidth - bubbleW - 8, centerX - bubbleW / 2));
      const bubbleTop = Math.max(8, Math.min(window.innerHeight - bubbleH - 8, centerY - bubbleH / 2));

      pipBubble.style.bottom = 'auto';
      pipBubble.style.right = 'auto';
      pipBubble.style.left = `${bubbleLeft}px`;
      pipBubble.style.top = `${bubbleTop}px`;
      pipWidget.classList.add('hidden');
      pipBubble?.classList.remove('hidden');
    };

    btnCross?.addEventListener('click', minimizeToBubble);
    btnCross?.addEventListener('touchend', minimizeToBubble);


    // 5. Robust Touch Drag & 2-Finger Pinch Gesture Engine
    let isDragging = false;
    let isPinching = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let initLeft = 0;
    let initTop = 0;
    let initialPinchDist = 0;
    let initialPinchWidth = 0;

    const getPinchDistance = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    const startPiPDrag = (clientX, clientY) => {
      isDragging = true;
      const rect = pipWidget.getBoundingClientRect();
      dragStartX = clientX;
      dragStartY = clientY;
      initLeft = rect.left;
      initTop = rect.top;
      pipWidget.style.bottom = 'auto';
      pipWidget.style.right = 'auto';
      pipWidget.style.left = `${initLeft}px`;
      pipWidget.style.top = `${initTop}px`;
      pipWidget.style.transition = 'none';
    };

    const doPiPDrag = (clientX, clientY, e) => {
      if (!isDragging) return;
      if (e && e.cancelable) e.preventDefault();
      const deltaX = clientX - dragStartX;
      const deltaY = clientY - dragStartY;
      let newLeft = initLeft + deltaX;
      let newTop = initTop + deltaY;

      const maxLeft = window.innerWidth - pipWidget.offsetWidth - 6;
      const maxTop = window.innerHeight - pipWidget.offsetHeight - 6;
      newLeft = Math.max(6, Math.min(maxLeft, newLeft));
      newTop = Math.max(6, Math.min(maxTop, newTop));

      pipWidget.style.left = `${newLeft}px`;
      pipWidget.style.top = `${newTop}px`;
    };

    const stopPiPDrag = () => {
      if (isDragging) {
        isDragging = false;
        pipWidget.style.transition = '';
      }
      isPinching = false;
    };

    // Touch events on PiP Widget
    pipWidget?.addEventListener('touchstart', (e) => {
      if (e.target.closest('#btn-pip-cross')) return;

      if (e.touches.length === 2) {
        isDragging = false;
        isPinching = true;
        initialPinchDist = getPinchDistance(e.touches);
        initialPinchWidth = pipDevice.offsetWidth || 125;
      } else if (e.touches.length === 1) {
        isPinching = false;
        startPiPDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    pipWidget?.addEventListener('mousedown', (e) => {
      if (e.target.closest('#btn-pip-cross')) return;
      e.preventDefault();
      startPiPDrag(e.clientX, e.clientY);
    });

    // 6. Draggable Circular Floating Preview Bubble (Action Ball)
    let isBubbleDragging = false;
    let bubbleStartX = 0;
    let bubbleStartY = 0;
    let bubbleInitLeft = 0;
    let bubbleInitTop = 0;
    let bubbleTouchTime = 0;

    const startBubbleDrag = (clientX, clientY) => {
      isBubbleDragging = true;
      bubbleTouchTime = Date.now();
      const rect = pipBubble.getBoundingClientRect();
      bubbleStartX = clientX;
      bubbleStartY = clientY;
      bubbleInitLeft = rect.left;
      bubbleInitTop = rect.top;
      pipBubble.style.bottom = 'auto';
      pipBubble.style.right = 'auto';
      pipBubble.style.left = `${bubbleInitLeft}px`;
      pipBubble.style.top = `${bubbleInitTop}px`;
      pipBubble.style.transition = 'none';
    };

    const doBubbleDrag = (clientX, clientY, e) => {
      if (!isBubbleDragging) return;
      if (e && e.cancelable) e.preventDefault();
      const deltaX = clientX - bubbleStartX;
      const deltaY = clientY - bubbleStartY;
      let newLeft = bubbleInitLeft + deltaX;
      let newTop = bubbleInitTop + deltaY;

      const maxLeft = window.innerWidth - pipBubble.offsetWidth - 8;
      const maxTop = window.innerHeight - pipBubble.offsetHeight - 8;
      newLeft = Math.max(8, Math.min(maxLeft, newLeft));
      newTop = Math.max(8, Math.min(maxTop, newTop));

      pipBubble.style.left = `${newLeft}px`;
      pipBubble.style.top = `${newTop}px`;
    };

    const stopBubbleDrag = (clientX, clientY) => {
      if (isBubbleDragging) {
        isBubbleDragging = false;
        pipBubble.style.transition = '';
        if (typeof clientX === 'number' && typeof clientY === 'number') {
          const dist = Math.hypot(clientX - bubbleStartX, clientY - bubbleStartY);
          const duration = Date.now() - bubbleTouchTime;
          if (dist < 8 && duration < 350) {
            // Tap detected -> Expand back into live PiP model at current bubble center
            isPipMinimized = false;

            const rect = pipBubble.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            pipBubble.classList.add('hidden');
            pipWidget.classList.remove('hidden');
            updateMobilePip();

            const pipW = pipDevice.offsetWidth || 125;
            const pipH = pipDevice.offsetHeight || 250;
            const pipLeft = Math.max(6, Math.min(window.innerWidth - pipW - 6, centerX - pipW / 2));
            const pipTop = Math.max(6, Math.min(window.innerHeight - pipH - 6, centerY - pipH / 2));

            pipWidget.style.bottom = 'auto';
            pipWidget.style.right = 'auto';
            pipWidget.style.left = `${pipLeft}px`;
            pipWidget.style.top = `${pipTop}px`;
          }
        }
      }
    };

    pipBubble?.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        startBubbleDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    pipBubble?.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startBubbleDrag(e.clientX, e.clientY);
    });

    // 7. Global Touch/Mouse Movement & Termination Listeners
    window.addEventListener('touchmove', (e) => {
      if (isPinching && e.touches.length === 2) {
        if (e.cancelable) e.preventDefault();
        const currentDist = getPinchDistance(e.touches);
        const pinchScale = currentDist / (initialPinchDist || 1);
        applyDeviceDimensions(initialPinchWidth * pinchScale);
      } else if (isDragging && e.touches.length === 1) {
        doPiPDrag(e.touches[0].clientX, e.touches[0].clientY, e);
      } else if (isBubbleDragging && e.touches.length === 1) {
        doBubbleDrag(e.touches[0].clientX, e.touches[0].clientY, e);
      }
    }, { passive: false });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        doPiPDrag(e.clientX, e.clientY);
      } else if (isBubbleDragging) {
        doBubbleDrag(e.clientX, e.clientY);
      }
    });

    window.addEventListener('touchend', (e) => {
      const touch = e.changedTouches ? e.changedTouches[0] : null;
      const x = touch ? touch.clientX : null;
      const y = touch ? touch.clientY : null;
      if (isDragging) stopPiPDrag();
      if (isBubbleDragging) stopBubbleDrag(x, y);
      if (e.touches.length === 0) {
        isPinching = false;
      }
    }, { passive: true });

    window.addEventListener('touchcancel', () => {
      stopPiPDrag();
      stopBubbleDrag();
    }, { passive: true });

    window.addEventListener('mouseup', (e) => {
      if (isDragging) stopPiPDrag();
      if (isBubbleDragging) stopBubbleDrag(e.clientX, e.clientY);
    });

    window.addEventListener('resize', () => {
      const leftSidebar = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      const leftCollapsed = leftSidebar ? leftSidebar.classList.contains('sidebar-collapsed-left') : true;
      const rightCollapsed = rightSidebar ? rightSidebar.classList.contains('sidebar-collapsed-right') : true;
      syncMobilePipVisibility(!leftCollapsed || !rightCollapsed);
    });
  }
  bindEvents() {
    this.setupFirebaseIntegration();
    this.setupLanguageModal();
    this.setupCoffeeModal();
    this.setupMobilePip();
    this.setupWallpaperEngine();
    this.setupFontFamilyEngine();
    this.setupCustomColorModalEngine();
    this.setupCourseListDelegation();
    this.setupWatchGlanceEvents();
    this.updateCourseFormMode();


    if (this.courseSearchInput) {
      this.courseSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (this.clearSearchBtn) {
          if (this.searchQuery.length > 0) {
            this.clearSearchBtn.classList.remove('hidden');
          } else {
            this.clearSearchBtn.classList.add('hidden');
          }
        }
        this.renderClassList(); // Re-render to filter classes
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        if (this.courseSearchInput) {
          this.courseSearchInput.value = '';
          this.searchQuery = '';
          this.clearSearchBtn.classList.add('hidden');
          this.renderClassList();
        }
      });
    }

    // Expandable Card Accordions
    this.headerTheme.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerTheme, this.contentTheme);
    });

    this.headerLayoutOptions.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerLayoutOptions, this.contentLayoutOptions);
    });

    this.headerAddCourse.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerAddCourse, this.contentAddCourse);
    });

    // Nested Sub-Accordion Headers (Layout & Add Course Groups)
    document.querySelectorAll('.sub-accordion-header').forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const card = header.closest('.sub-accordion-card');
        const content = card ? card.querySelector('.sub-accordion-content') : header.nextElementSibling;
        if (content) {
          this.toggleAccordion(header, content);
        }
      });
    });

    // ─────────────────────────────────────────────────────────────
    // MOBILE ICON DOCK — Focus/Expand interaction logic (≤1024px)
    // ─────────────────────────────────────────────────────────────
    const initIconDock = (dockId, panelId, backRowId, backBtnId, sectionTitleId) => {
      const dock = document.getElementById(dockId);
      const panel = document.getElementById(panelId);
      const backRow = document.getElementById(backRowId);
      const backBtn = document.getElementById(backBtnId);
      const sectionTitle = document.getElementById(sectionTitleId);
      if (!dock || !panel || !backRow || !backBtn) return;

      const iconBtns = dock.querySelectorAll('.dock-icon-btn');

      const resetDock = () => {
        if (dock) dock.classList.remove('dock-has-active');
        iconBtns.forEach(b => {
          b.classList.remove('dock-active', 'dock-dimmed');
        });
        panel.classList.remove('dock-panel-open');
        // Move content back out of panel (restore to original parent)
        if (panel._restoredContentEl && panel._restoredContentParent) {
          if (panel._restoredWasHidden) {
            panel._restoredContentEl.classList.add('hidden');
          }
          panel._restoredContentParent.appendChild(panel._restoredContentEl);
          panel._restoredContentEl = null;
          panel._restoredContentParent = null;
        }
        panel.innerHTML = '';
        backRow.classList.remove('dock-back-visible');
        if (sectionTitle) sectionTitle.textContent = '';
      };

      iconBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          const targetId = btn.getAttribute('data-dock-target');
          const dockKey = btn.getAttribute('data-dock-key');
          const rawLabel = btn.getAttribute('data-dock-label') || '';
          const label = (dockKey && window.SchedullyI18n) ? window.SchedullyI18n.get(dockKey) : rawLabel.replace(/&amp;/g, '&');
          const targetContent = document.getElementById(targetId);
          if (!targetContent) return;

          // If already active, reset
          if (btn.classList.contains('dock-active')) {
            resetDock();
            return;
          }

          resetDock();

          // Center active icon and dim others
          if (dock) dock.classList.add('dock-has-active');
          iconBtns.forEach(b => {
            if (b !== btn) b.classList.add('dock-dimmed');
            else b.classList.add('dock-active');
          });

          // Move the sub-content into the dock panel and unhide it so all settings show
          panel._restoredWasHidden = targetContent.classList.contains('hidden');
          targetContent.classList.remove('hidden');
          panel._restoredContentEl = targetContent;
          panel._restoredContentParent = targetContent.parentElement;
          panel.appendChild(targetContent);

          // Open panel
          requestAnimationFrame(() => {
            panel.classList.add('dock-panel-open');
          });

          // Show back button and title pill at top-right with localized text
          backRow.classList.add('dock-back-visible');
          if (sectionTitle) {
            sectionTitle.setAttribute('data-i18n', dockKey || '');
            sectionTitle.textContent = label;
          }
        });
      });

      backBtn.addEventListener('click', () => {
        resetDock();
      });
    };

    initIconDock(
      'theme-mobile-icon-dock',
      'theme-dock-panel',
      'theme-dock-back-row',
      'theme-dock-back-btn',
      'theme-dock-section-title'
    );
    initIconDock(
      'layout-mobile-icon-dock',
      'layout-dock-panel',
      'layout-dock-back-row',
      'layout-dock-back-btn',
      'layout-dock-section-title'
    );
    initIconDock(
      'course-mobile-icon-dock',
      'course-dock-panel',
      'course-dock-back-row',
      'course-dock-back-btn',
      'course-dock-section-title'
    );

    // Swipe-to-Right gesture for expanding cards on touch/swipe
    document.querySelectorAll('.card-expand-header').forEach(header => {
      let startX = 0;
      let startY = 0;

      header.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });

      header.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        // Swiping right by 25px+ triggers card expansion to the right
        if (diffX > 25 && Math.abs(diffY) < 35) {
          header.click();
        }
      }, { passive: true });
    });

    if (this.headerFileImport) {
      this.headerFileImport.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(this.headerFileImport, this.contentFileImport);
      });
    }

    if (this.headerScanner) {
      this.headerScanner.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(this.headerScanner, this.contentScanner);
      });
    }

    // INSTANT TITLE INPUT SYNC (STAGE BAR & SIDEBAR)
    this.inputTitleStage.addEventListener('input', (e) => {
      this.updateTitleText(e.target.value);
    });

    this.inputTitleSidebar.addEventListener('input', (e) => {
      this.updateTitleText(e.target.value);
    });

    // Title Toggle (YES / NO)
    document.querySelectorAll('#toggle-title .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-title .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showTitle = (btn.getAttribute('data-val') === 'yes');
        if (this.lockGridTitle) {
          this.lockGridTitle.style.setProperty('display', this.showTitle ? 'block' : 'none', 'important');
        }
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Trademark Input & Toggle (YES / NO)
    if (this.inputTrademark) {
      this.inputTrademark.addEventListener('input', (e) => {
        this.updateTrademarkText(e.target.value);
        this._stagePending();
      });
    }

    const toggleTrademark = document.getElementById('toggle-trademark');
    if (toggleTrademark) {
      toggleTrademark.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleTrademark.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const isYes = (btn.getAttribute('data-val') === 'yes');
          this.showTrademark = isYes;
          const rowTrademark = document.getElementById('row-trademark-text');
          const rowStyle = document.getElementById('row-trademark-style');
          if (rowTrademark) {
            rowTrademark.style.display = isYes ? 'flex' : 'none';
          }
          if (rowStyle) {
            rowStyle.style.display = isYes ? 'flex' : 'none';
          }
          if (this.lockTrademarkFooter) {
            this.lockTrademarkFooter.style.display = isYes ? 'inline-flex' : 'none';
          }
          if (typeof this.updateMobilePip === 'function') {
            this.updateMobilePip();
          }
          if (isYes && typeof window.syncGlassSliders === 'function') {
            setTimeout(window.syncGlassSliders, 40);
          }
          this._stagePending();
        });
      });
    }

    const toggleTrademarkStyle = document.getElementById('toggle-trademark-style');
    if (toggleTrademarkStyle) {
      toggleTrademarkStyle.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const style = btn.getAttribute('data-val') || 'default';
          this.applyTrademarkStyle(style);
          if (typeof window.syncGlassSliders === 'function') {
            setTimeout(window.syncGlassSliders, 30);
          }
          this._stagePending();
        });
      });
    }

    // Timetable Frame Corners Toggle
    document.querySelectorAll('#toggle-table-corners .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-table-corners .pill-btn').forEach(b => {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        this.tableCornerStyle = btn.getAttribute('data-val');
        
        const rowTableRadius = document.getElementById('row-table-radius');
        if (this.tableCornerStyle === 'sharp') {
          if (rowTableRadius) rowTableRadius.style.display = 'none';
        } else {
          if (rowTableRadius) rowTableRadius.style.display = 'flex';
        }
        this.renderTimetableGrid();
        this._stagePending();
      });
    });

    // Table Corner Radius Steppers
    const tableRadiusValEl = document.getElementById('table-radius-val');
    const btnTableRadiusDec = document.getElementById('btn-table-radius-dec');
    const btnTableRadiusInc = document.getElementById('btn-table-radius-inc');

    const updateTableRadius = (newVal) => {
      const clamped = Math.min(32, Math.max(0, parseInt(newVal, 10) || 0));
      this.tableCornerRadiusVal = clamped;
      if (tableRadiusValEl) tableRadiusValEl.value = clamped;
      this.renderTimetableGrid();
      this._stagePending();
    };

    tableRadiusValEl?.addEventListener('input', (e) => updateTableRadius(e.target.value));
    btnTableRadiusDec?.addEventListener('click', () => updateTableRadius((this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 8) - 1));
    btnTableRadiusInc?.addEventListener('click', () => updateTableRadius((this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 8) + 1));

    // Course Card Corners Toggle
    document.querySelectorAll('#toggle-card-corners .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-card-corners .pill-btn').forEach(b => {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        this.cardCornerStyle = btn.getAttribute('data-val');
        
        const rowCardRadius = document.getElementById('row-card-radius');
        if (this.cardCornerStyle === 'sharp') {
          if (rowCardRadius) rowCardRadius.style.display = 'none';
        } else {
          if (rowCardRadius) rowCardRadius.style.display = 'flex';
        }
        this.renderTimetableGrid();
        this._stagePending();
      });
    });

    // Schedule Axis System Toggle (Clock Time vs Period System)
    document.querySelectorAll('#toggle-axis-mode .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-axis-mode .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.axisMode = btn.getAttribute('data-val') || 'time';
        this.updateCourseFormMode();
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Total Periods Dropdown Selector (4 to 12 Periods)
    const totalPeriodsSelect = document.getElementById('grid-total-periods-select');
    if (totalPeriodsSelect) {
      totalPeriodsSelect.addEventListener('change', (e) => {
        this.gridPeriodCount = parseInt(e.target.value, 10) || 6;
        this.updateCourseFormMode();
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    }

    // Period Preset Dropdown (9:00 AM 90m / 8:50 AM 90m / 8:30 AM 50m)
    const periodPresetSelect = document.getElementById('grid-period-preset-select');
    if (periodPresetSelect) {
      periodPresetSelect.addEventListener('change', (e) => {
        this.selectedOcrPeriodPreset = e.target.value;
        this.updateCourseFormMode();
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
      });
    }

    // Course Card Corner Radius Steppers
    const cardRadiusValEl = document.getElementById('card-radius-val');
    const btnCardRadiusDec = document.getElementById('btn-card-radius-dec');
    const btnCardRadiusInc = document.getElementById('btn-card-radius-inc');

    const updateCardRadius = (newVal) => {
      const clamped = Math.min(24, Math.max(0, parseInt(newVal, 10) || 0));
      this.cardCornerRadiusVal = clamped;
      if (cardRadiusValEl) cardRadiusValEl.value = clamped;
      this.renderTimetableGrid();
      this._stagePending();
    };

    cardRadiusValEl?.addEventListener('input', (e) => updateCardRadius(e.target.value));
    btnCardRadiusDec?.addEventListener('click', () => updateCardRadius((this.cardCornerRadiusVal !== undefined ? this.cardCornerRadiusVal : 6) - 1));
    btnCardRadiusInc?.addEventListener('click', () => updateCardRadius((this.cardCornerRadiusVal !== undefined ? this.cardCornerRadiusVal : 6) + 1));

    // SCHEDULE LIST QUICK SETTINGS TOGGLE DRAWER
    const btnScheduleSettings = document.getElementById('btn-schedule-settings-toggle');
    const quickSettingsPanel = document.getElementById('schedule-quick-settings');

    btnScheduleSettings?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(btnScheduleSettings, quickSettingsPanel);
    });

    let setStartX = 0;
    let setStartY = 0;
    btnScheduleSettings?.addEventListener('touchstart', (e) => {
      setStartX = e.touches[0].clientX;
      setStartY = e.touches[0].clientY;
    }, { passive: true });

    btnScheduleSettings?.addEventListener('touchend', (e) => {
      const setEndX = e.changedTouches[0].clientX;
      const setEndY = e.changedTouches[0].clientY;
      const diffX = setEndX - setStartX;
      const diffY = setEndY - setStartY;
      if (Math.abs(diffX) > 25 && Math.abs(diffY) < 35) {
        btnScheduleSettings.click();
      }
    }, { passive: true });

    // Quick Setting: Master Display Time Toggle
    document.querySelectorAll('#toggle-quick-time .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-time .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const show = (btn.getAttribute('data-val') === 'yes');
        this.globalCardTimes = show;
        if (this.quickTimeSubmenu) {
          if (show) {
            this.quickTimeSubmenu.classList.remove('hidden');
          } else {
            this.quickTimeSubmenu.classList.add('hidden');
          }
        }
        this.classes.forEach(c => c.displayTime = show);
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Time Display Mode Submenu (Start Only, Start & End, End Only)
    document.querySelectorAll('#time-display-mode-group .time-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#time-display-mode-group .time-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.cardTimeDisplayType = btn.getAttribute('data-timemode') || 'start';
        this.globalCardTimes = true;
        this.classes.forEach(c => c.displayTime = true);

        // Ensure Display Time YES toggle is actively selected
        const yesBtn = document.querySelector('#toggle-quick-time .pill-btn[data-val="yes"]');
        const noBtn = document.querySelector('#toggle-quick-time .pill-btn[data-val="no"]');
        if (yesBtn && noBtn) {
          yesBtn.classList.add('active');
          noBtn.classList.remove('active');
        }
        if (this.quickTimeSubmenu) this.quickTimeSubmenu.classList.remove('hidden');

        if (this.quickTimePreviewBadge) {
          if (this.cardTimeDisplayType === 'both') this.quickTimePreviewBadge.innerText = 'Start & End';
          else if (this.cardTimeDisplayType === 'end') this.quickTimePreviewBadge.innerText = 'End Only';
          else this.quickTimePreviewBadge.innerText = 'Start Only';
        }
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Master Course Type Toggle
    document.querySelectorAll('#toggle-quick-type .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-type .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseType = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Master Location Toggle
    document.querySelectorAll('#toggle-quick-room .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-room .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseRoom = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Master Lecturer Toggle
    document.querySelectorAll('#toggle-quick-lecturer .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-lecturer .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseLecturer = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Master Group Toggle
    document.querySelectorAll('#toggle-quick-group .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-group .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseGroup = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Quick Setting: Master Adaptive Color Toggle
    document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalAdaptiveColor = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch') this.renderWatchGlance();
        this._stagePending();
        window.syncGlassSliders?.();
      });
    });

    // Randomize Subject Card Colors (Dice Button)
    document.getElementById('btn-randomize-colors')?.addEventListener('click', () => {
      const paletteColors = [
        '#A3B18A', '#588157', '#3A5A40', // Muted Greens / Sage
        '#E07A5F', '#D4A373', '#CBB4A9', // Terracotta, Tan, Mocha
        '#3D405B', '#81B29A', '#F2CC8F', // Navy Slate, Mint, Muted Yellow
        '#B5838D', '#E5989B', '#FFB4A2', // Muted Mauve, Rose, Peach
        '#6D6875', '#B56576', '#E56B6F', // Plum, Crimson, Coral
        '#4A4E69', '#9A8C98', '#C9ADA7'  // Slate, Lilac, Greige
      ];
      
      // Auto-turn OFF global adaptive color so custom randomized colors take effect immediately
      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      // Map unique random colors per course code
      const codeColorMap = {};
      this.classes.forEach(c => {
        if (!codeColorMap[c.code]) {
          codeColorMap[c.code] = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        }
        c.customColor = codeColorMap[c.code];
      });

      this.renderAll();
    });

    // GLOBAL DEFAULT DISPLAY TIME TOGGLE IN ADD A COURSE CARD
    document.querySelectorAll('#toggle-display-time .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-display-time .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.newCourseDisplayTime = (btn.getAttribute('data-val') === 'yes');
      });
    });

    // Show/Hide Lock UI Toggle
    document.querySelectorAll('#toggle-lock-ui .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-lock-ui .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showLockUI = (btn.getAttribute('data-val') === 'yes');
        const header = document.getElementById('phone-lock-header');
        if (header) {
          if (this.showLockUI) {
            header.classList.remove('hide-lock-ui');
            header.style.visibility = 'visible';
            header.style.opacity = '1';
          } else {
            header.classList.add('hide-lock-ui');
            header.style.visibility = 'hidden';
            header.style.opacity = '0';
          }
        }
        this._stagePending();
      });
    });

    // Show/Hide Table Toggle (TABLE vs BG ONLY)
    document.querySelectorAll('#toggle-show-table .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-show-table .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showTable = (btn.getAttribute('data-val') === 'yes');
        const container = document.getElementById('lock-timetable-container');
        if (container) {
          if (this.showTable) {
            container.classList.remove('hide-timetable-grid');
            container.style.display = 'flex';
            container.style.opacity = '1';
            container.style.pointerEvents = 'auto';
          } else {
            container.classList.add('hide-timetable-grid');
            container.style.display = 'none';
            container.style.opacity = '0';
            container.style.pointerEvents = 'none';
          }
        }
        this._stagePending();
      });
    });

    // Clock Format Toggle (12-HOUR vs 24-HOUR)
    document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.clockFormat = btn.getAttribute('data-val');
        this.renderTimetableGrid();
        this._stagePending();
      });
    });

    // Filter Start/End Time Selects
    this.gridStartTimeSelect.addEventListener('change', (e) => {
      this.gridStartHour = parseInt(e.target.value.split(':')[0]);
      this.renderTimetableGrid();
      this._stagePending();
    });

    this.gridEndTimeSelect.addEventListener('change', (e) => {
      this.gridEndHour = parseInt(e.target.value.split(':')[0]);
      this.renderTimetableGrid();
      this._stagePending();
    });

    // Day Display Checkboxes
    document.querySelectorAll('.day-toggle').forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.day-toggle:checked')).map(c => c.value);
        this.activeDays = checked.length > 0 ? checked : ['Mon'];
        this.renderTimetableGrid();
        this._stagePending();
      });
    });

    // Grid Width Steppers & Input (50% to 100%)
    const btnWidthDec = document.getElementById('btn-width-dec');
    const btnWidthInc = document.getElementById('btn-width-inc');
    const gridWidthValEl = document.getElementById('grid-width-val');

    gridWidthValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridWidthVal = Math.min(100, Math.max(50, val));
        this.requestGridRender();
        this._stagePending();
      }
    });
    gridWidthValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 50) e.target.value = 50;
      else if (val > 100) e.target.value = 100;
      this.gridWidthVal = parseInt(e.target.value, 10);
      this.requestGridRender();
      this._stagePending();
    });

    btnWidthDec?.addEventListener('click', () => {
      if (this.gridWidthVal > 50) {
        this.gridWidthVal -= 5;
        if (gridWidthValEl) gridWidthValEl.value = this.gridWidthVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    btnWidthInc?.addEventListener('click', () => {
      if (this.gridWidthVal < 100) {
        this.gridWidthVal += 5;
        if (gridWidthValEl) gridWidthValEl.value = this.gridWidthVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    // Grid Height Steppers & Input
    const btnHeightDec = document.getElementById('btn-height-dec');
    const btnHeightInc = document.getElementById('btn-height-inc');
    const gridHeightValEl = document.getElementById('grid-height-val');

    gridHeightValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridHeightVal = Math.min(90, Math.max(30, val));
        this.requestGridRender();
        this._stagePending();
      }
    });
    gridHeightValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 30) e.target.value = 30;
      else if (val > 90) e.target.value = 90;
      this.gridHeightVal = parseInt(e.target.value, 10);
      this.requestGridRender();
      this._stagePending();
    });

    btnHeightDec?.addEventListener('click', () => {
      if (this.gridHeightVal > 30) {
        this.gridHeightVal -= 3;
        if (gridHeightValEl) gridHeightValEl.value = this.gridHeightVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    btnHeightInc?.addEventListener('click', () => {
      if (this.gridHeightVal < 90) {
        this.gridHeightVal += 3;
        if (gridHeightValEl) gridHeightValEl.value = this.gridHeightVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    // Font Size Steppers & Input (6px to 16px)
    const btnFontSizeDec = document.getElementById('btn-fontsize-dec');
    const btnFontSizeInc = document.getElementById('btn-fontsize-inc');
    const gridFontSizeValEl = document.getElementById('grid-fontsize-val');

    gridFontSizeValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridFontSizeVal = Math.min(16, Math.max(6, val));
        this.requestGridRender();
        this._stagePending();
      }
    });
    gridFontSizeValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 6) e.target.value = 6;
      else if (val > 16) e.target.value = 16;
      this.gridFontSizeVal = parseInt(e.target.value, 10);
      this.requestGridRender();
      this._stagePending();
    });

    btnFontSizeDec?.addEventListener('click', () => {
      if (this.gridFontSizeVal > 6) {
        this.gridFontSizeVal -= 1;
        if (gridFontSizeValEl) gridFontSizeValEl.value = this.gridFontSizeVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    btnFontSizeInc?.addEventListener('click', () => {
      if (this.gridFontSizeVal < 16) {
        this.gridFontSizeVal += 1;
        if (gridFontSizeValEl) gridFontSizeValEl.value = this.gridFontSizeVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    // Y Position Steppers & Input with strict boundary limits
    const btnYPosDec = document.getElementById('btn-ypos-dec');
    const btnYPosInc = document.getElementById('btn-ypos-inc');
    const gridYPosValEl = document.getElementById('grid-ypos-val');

    gridYPosValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridYPosVal = Math.min(150, Math.max(-120, val));
        this.requestGridRender();
        this._stagePending();
      }
    });
    gridYPosValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < -120) e.target.value = -120;
      else if (val > 150) e.target.value = 150;
      this.gridYPosVal = parseInt(e.target.value, 10);
      this.requestGridRender();
      this._stagePending();
    });

    btnYPosDec?.addEventListener('click', () => {
      // Calculate min Y bound so top edge doesn't cross screen top
      const canvasEl = document.getElementById('phone-canvas');
      const containerEl = document.getElementById('lock-timetable-container');
      let minY = -120;
      if (canvasEl && containerEl) {
        const cRect = canvasEl.getBoundingClientRect();
        const tRect = containerEl.getBoundingClientRect();
        const topGap = tRect.top - (cRect.top + 20); // 20px padding from top border
        minY = this.gridYPosVal - Math.max(0, topGap);
      }

      if (this.gridYPosVal > minY) {
        this.gridYPosVal = Math.max(Math.round(minY), this.gridYPosVal - 5);
        if (gridYPosValEl) gridYPosValEl.value = this.gridYPosVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    btnYPosInc?.addEventListener('click', () => {
      // Calculate max Y bound so bottom edge doesn't cross phone bottom bar (24px from bottom)
      const canvasEl = document.getElementById('phone-canvas');
      const containerEl = document.getElementById('lock-timetable-container');
      let maxY = 140;
      if (canvasEl && containerEl) {
        const cRect = canvasEl.getBoundingClientRect();
        const tRect = containerEl.getBoundingClientRect();
        const bottomGap = (cRect.bottom - 24) - tRect.bottom;
        maxY = this.gridYPosVal + Math.max(0, bottomGap);
      }

      if (this.gridYPosVal < maxY) {
        this.gridYPosVal = Math.min(Math.round(maxY), this.gridYPosVal + 5);
        if (gridYPosValEl) gridYPosValEl.value = this.gridYPosVal;
        this.requestGridRender();
        this._stagePending();
      }
    });

    // Grid Surface Colour Swatches
    document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-surface');
        this.userHasPickedSurfaceColor = true;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', colorVal);
        this._stagePending();
      });
    });
    document.querySelector('#grid-surface-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-grid-surface-bg').trim() || '#FFFFFF';
      this.openCustomColorPicker(currentVal, 'Grid Surface Colour', (pickedColor) => {
        document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedSurfaceColor = true;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', pickedColor);
        const btn = document.querySelector('#grid-surface-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this._stagePending();
      });
    });

    // Background Colour Swatches with Auto-Contrast Clock Handler
    document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-bg');
        this.userHasPickedBgColor = true;
        this.phoneCanvas.style.backgroundColor = colorVal;
        this.updateClockContrast(colorVal);
        this._stagePending();
      });
    });

    document.querySelector('#bg-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = this.phoneCanvas.style.backgroundColor || '#0F121A';
      this.openCustomColorPicker(currentVal, 'Canvas Background Colour', (pickedColor) => {
        document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedBgColor = true;
        this.phoneCanvas.style.backgroundColor = pickedColor;
        this.updateClockContrast(pickedColor);
        const btn = document.querySelector('#bg-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this._stagePending();
      });
    });

    // Course Font Color Picker (new course only)
    document.querySelectorAll('#course-font-color-picker .font-swatch-sq').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'btn-course-font-custom') {
          this.openCustomColorPicker(this.newCourseFontColor || '#FFFFFF', 'New Course Font Color', (pickedColor) => {
            this.newCourseFontColor = pickedColor;
            btn.style.background = pickedColor;
          });
          return;
        }
        document.querySelectorAll('#course-font-color-picker .font-swatch-sq').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.newCourseFontColor = btn.getAttribute('data-coursefont');
      });
    });

    // Course Grid Color Custom Picker (new course only)
    document.getElementById('btn-course-grid-custom')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openCustomColorPicker(this.selectedColor || '#2563EB', 'New Course Slot Color', (pickedColor) => {
        document.querySelectorAll('#course-grid-color-picker .swatch-dot').forEach(d => d.classList.remove('active'));
        this.selectedColor = pickedColor;
        const btn = document.getElementById('btn-course-grid-custom');
        if (btn) btn.style.background = pickedColor;
      });
    });

    // Header Colour Swatches
    document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-header');
        this.userHasPickedHeaderColor = true;
        this.applyHeaderColor(colorVal);
        this._stagePending();
      });
    });

    document.querySelector('#header-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-header-custom-bg').trim() || '#181C28';
      this.openCustomColorPicker(currentVal, 'Timetable Header Colour', (pickedColor) => {
        document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedHeaderColor = true;
        this.applyHeaderColor(pickedColor);
        const btn = document.querySelector('#header-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this._stagePending();
      });
    });

    // Font Colour Swatches Event Handler
    document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-font');
        this.applyFontColor(colorVal);
        this._stagePending();
      });
    });

    document.querySelector('#font-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-font-custom-color').trim() || '#0F172A';
      this.openCustomColorPicker(currentVal, 'Timetable Text Font Colour', (pickedColor) => {
        document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.applyFontColor(pickedColor);
        const btn = document.querySelector('#font-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this._stagePending();
      });
    });

    // Reset Layout Button
    this.btnResetLayout.addEventListener('click', () => {
      this.showTitle = true;
      this.showTable = true;
      this.showLockUI = true;
      this.newCourseDisplayTime = true;
      this.globalCardTimes = true;
      this.clockFormat = '12';
      this.gridStartHour = 9;
      this.gridEndHour = 17;
      this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      this.gridWidthVal = 100;
      this.gridHeightVal = 49;
      this.gridFontSizeVal = 9;
      this.gridYPosVal = 0;

      document.querySelectorAll('.day-toggle').forEach(chk => {
        chk.checked = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(chk.value);
      });
      const gwEl = document.getElementById('grid-width-val');
      const ghEl = document.getElementById('grid-height-val');
      const fsEl = document.getElementById('grid-fontsize-val');
      const gyEl = document.getElementById('grid-ypos-val');
      if (gwEl) gwEl.value = '100';
      if (ghEl) ghEl.value = '49';
      if (fsEl) fsEl.value = '9';
      if (gyEl) gyEl.value = '0';

      this.updateTitleText('Untitled');

      this.lockGridTitle.style.display = 'block';
      this.phoneLockHeader.style.display = 'block';
      this.phoneCanvas.style.backgroundColor = '';
      this.applyHeaderColor('');
      this.applyFontColor('');
      // Reset per-card font colors
      document.getElementById('content-add-course')?.closest('section')?.style.removeProperty('--m3-card-text-color');
      document.querySelector('.m3-right-sidebar')?.style.removeProperty('--m3-card-text-color');

      document.querySelectorAll('#toggle-title .pill-btn')[0].click();

      this.updateTrademarkText('Schedully • Student Edition');
      this.applyTrademarkStyle('default');
      const toggleTrademark = document.getElementById('toggle-trademark');
      if (toggleTrademark) {
        toggleTrademark.querySelectorAll('.pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === 'no');
        });
      }
      const rowTrademark = document.getElementById('row-trademark-text');
      const rowStyle = document.getElementById('row-trademark-style');
      if (rowTrademark) rowTrademark.style.display = 'none';
      if (rowStyle) rowStyle.style.display = 'none';
      if (this.lockTrademarkFooter) this.lockTrademarkFooter.style.display = 'none';
      this.showTrademark = false;

      document.querySelectorAll('#toggle-table-corners .pill-btn')[0]?.click();
      document.querySelectorAll('#toggle-card-corners .pill-btn')[0]?.click();
      
      const tableRadiusValEl = document.getElementById('table-radius-val');
      if (tableRadiusValEl) {
        tableRadiusValEl.value = 8;
        this.tableCornerRadiusVal = 8;
      }
      const cardRadiusValEl = document.getElementById('card-radius-val');
      if (cardRadiusValEl) {
        cardRadiusValEl.value = 6;
        this.cardCornerRadiusVal = 6;
      }
      const rowTableRadius = document.getElementById('row-table-radius');
      if (rowTableRadius) rowTableRadius.style.display = 'flex';
      const rowCardRadius = document.getElementById('row-card-radius');
      if (rowCardRadius) rowCardRadius.style.display = 'flex';
      
      document.querySelectorAll('#toggle-display-time .pill-btn')[0].click();
      document.querySelectorAll('#toggle-clock-type .pill-btn')[0].click();

      this.gridStartTimeSelect.value = '09:00';
      this.gridEndTimeSelect.value = '17:00';

      this.renderAll();
    });

    const btnResetTheme = document.getElementById('btn-reset-theme');
    if (btnResetTheme) {
      btnResetTheme.addEventListener('click', () => {
        // 1. Reset theme mode to auto
        document.querySelector('.theme-mode-dot[data-mode="auto"]')?.click();
        
        // 2. Remove wallpaper if active
        document.getElementById('btn-remove-wallpaper')?.click();
        
        // 3. Reset palette to default (indigo)
        document.querySelector('.palette-dot[data-palette="indigo"]')?.click();
        
        // 4. Reset background blur to OFF
        const blurNoBtn = document.querySelector('#toggle-bg-blur .pill-btn[data-val="no"]');
        if (blurNoBtn) blurNoBtn.click();
        
        // 5. Reset Timetable Opacity to 100%
        const opacitySlider = document.getElementById('slider-timetable-opacity');
        if (opacitySlider) {
          opacitySlider.value = 100;
          opacitySlider.dispatchEvent(new Event('input'));
        }
        
        // 6. Reset Font Family to default
        const fontSelect = document.getElementById('select-font-family');
        if (fontSelect) {
          fontSelect.value = 'default';
          fontSelect.dispatchEvent(new Event('change'));
        }
      });
    }



    // Theme Mode Dots
    document.querySelectorAll('.theme-mode-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.theme-mode-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentMode = dot.getAttribute('data-mode');
        this.applyThemeEngine();
        const wallpaperData = localStorage.getItem('schedully_wallpaper_data');
        if (wallpaperData) {
          this.extractColorsFromImage(wallpaperData);
        }
        this._stagePending();
      });
    });

    // Dynamic Swatch Palette Buttons
    document.querySelectorAll('.palette-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        if (this.phoneCanvas?.classList.contains('has-photo-wallpaper')) return;
        if (window.soundFX) window.soundFX.play('click');
        document.querySelectorAll('.palette-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentPalette = dot.getAttribute('data-palette');
        this.applyThemeEngine();
        this._stagePending();
      });
    });

    // System Theme Randomizer (Surprise Me)
    document.getElementById('btn-randomize-theme')?.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the expand/collapse card header event
      if (this.phoneCanvas?.classList.contains('has-photo-wallpaper')) return;
      const modeDots = Array.from(document.querySelectorAll('.theme-mode-dot'));
      const paletteDots = Array.from(document.querySelectorAll('.palette-dot'));
      
      if (modeDots.length > 0 && paletteDots.length > 0) {
        const randomModeDot = modeDots[Math.floor(Math.random() * modeDots.length)];
        const randomPaletteDot = paletteDots[Math.floor(Math.random() * paletteDots.length)];
        
        // Update mode
        modeDots.forEach(d => d.classList.remove('active'));
        randomModeDot.classList.add('active');
        this.currentMode = randomModeDot.getAttribute('data-mode');
        
        // Update palette
        paletteDots.forEach(d => d.classList.remove('active'));
        randomPaletteDot.classList.add('active');
        this.currentPalette = randomPaletteDot.getAttribute('data-palette');
        
        // Apply engine ONCE to avoid double-render lag
        this.applyThemeEngine();
        this._stagePending();
      }
    });

    // Segmented Capsule Switcher
    document.querySelectorAll('.capsule-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window._globalDragSuppressUntil && Date.now() < window._globalDragSuppressUntil && !e._isProgrammaticDrag) {
          return;
        }
        document.querySelectorAll('.capsule-btn').forEach(b => {
          b.classList.remove('active');
          b.style.backgroundColor = '';
          b.style.color = '';
        });
        btn.classList.add('active');
        const device = btn.getAttribute('data-device') || 'phone';
        this.activeDevice = device;

        // Instantly glide the glass slider thumb with a single RAF
        if (typeof window.syncGlassSliders === 'function') {
          requestAnimationFrame(window.syncGlassSliders);
        }

        const lockUIToggle = document.getElementById('toggle-lock-ui');
        const wrapper = document.getElementById('main-phone-wrapper');
        const hasWallpaper = !!localStorage.getItem('schedully_wallpaper_data');
        const wallpaperClass = hasWallpaper ? ' has-photo-wallpaper' : '';

        // Switch DOM classes & device mode instantly
        const lockTimeEl = document.getElementById('lock-time');
        if (lockTimeEl && device !== 'watch') {
          lockTimeEl.style.removeProperty('color');
          lockTimeEl.style.removeProperty('text-shadow');
        }

        if (device === 'tablet') {
          this.phoneCanvas.className = `m3-phone-canvas canvas-tablet${wallpaperClass}`;
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE TABLET LOCKSCREEN PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '920px';
          if (wrapper) {
            wrapper.classList.add('tablet-mode');
            wrapper.classList.remove('paper-mode', 'watch-mode', 'story-mode');
          }
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
        } else if (device === 'watch') {
          this.phoneCanvas.className = `m3-phone-canvas canvas-watch${wallpaperClass}`;
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE SMARTWATCH PREVIEW (1:1 / 410×502)';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '330px';
          if (wrapper) {
            wrapper.classList.add('watch-mode');
            wrapper.classList.remove('tablet-mode', 'paper-mode', 'story-mode');
          }
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
          const watchPanel = document.getElementById('watch-layout-panel');
          if (watchPanel) watchPanel.style.display = 'block';
        } else if (device === 'paper') {
          this.phoneCanvas.className = `m3-phone-canvas canvas-paper${wallpaperClass}`;
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE PAPER PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '720px';
          if (wrapper) {
            wrapper.classList.add('paper-mode');
            wrapper.classList.remove('tablet-mode', 'watch-mode', 'story-mode');
          }
          if (lockUIToggle) lockUIToggle.style.display = 'none';
          const watchPanel = document.getElementById('watch-layout-panel');
          if (watchPanel) watchPanel.style.display = 'none';
        } else {
          this.phoneCanvas.className = `m3-phone-canvas canvas-phone${wallpaperClass}`;
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE PHONE LOCKSCREEN PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '380px';
          if (wrapper) {
            wrapper.classList.remove('tablet-mode', 'paper-mode', 'watch-mode', 'story-mode');
          }
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
          const watchPanel = document.getElementById('watch-layout-panel');
          if (watchPanel) watchPanel.style.display = 'none';
        }

        // Reset inline screen size styles
        this.phoneCanvas.style.width = '';
        this.phoneCanvas.style.height = '';

        // Update Screen Aspect Ratio engine for current device
        if (typeof this.updateCanvasScreenRatio === 'function') {
          this.updateCanvasScreenRatio();
        }

        // 3. Render grid synchronously
        this.renderTimetableGrid();

        // 4. Smoothly update scaled wrapper footprint and auto-center
        if (typeof applyZoom === 'function') {
          applyZoom(true);
        }
      });
    });

    // Swatch Color Dots
    document.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.selectedColor = dot.getAttribute('data-color');
      });
    });

    // Zoom and Theme Bottom Controls
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomLabel = document.getElementById('zoom-label-text');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const mainPhoneWrapper = document.getElementById('main-phone-wrapper');
    
    const getBaseModelDimensions = () => {
      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas) return { width: 380, height: 770 };
      if (originalCanvas.classList.contains('canvas-tablet')) return { width: 920, height: 690 };
      if (originalCanvas.classList.contains('canvas-watch')) {
        if (originalCanvas.classList.contains('watch-shape-band')) return { width: 220, height: 418 };
        if (originalCanvas.classList.contains('watch-shape-capsule')) return { width: 195, height: 440 };
        if (originalCanvas.classList.contains('watch-shape-round')) return { width: 340, height: 340 };
        return { width: 320, height: 390 };
      }
      if (originalCanvas.classList.contains('canvas-paper')) {
        const h = (originalCanvas.scrollHeight && originalCanvas.scrollHeight > 300) ? originalCanvas.scrollHeight : 540;
        return { width: 720, height: h };
      }
      return { width: 380, height: 770 };
    };

    // Auto-center canvas helper ensuring the model (phone/tablet/paper) is always centered on both axes
    const centerCanvasModel = (smooth = false) => {
      const scrollArea = document.getElementById('canvas-scroll-area');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scrollArea || !wrapper) return;
      
      const scrollW = scrollArea.scrollWidth;
      const clientW = scrollArea.clientWidth;
      const scrollH = scrollArea.scrollHeight;
      const clientH = scrollArea.clientHeight;
      
      const targetLeft = scrollW > clientW ? Math.round((scrollW - clientW) / 2) : 0;
      const targetTop = scrollH > clientH ? Math.round((scrollH - clientH) / 2) : 0;

      if (smooth) {
        scrollArea.scrollTo({ left: targetLeft, top: targetTop, behavior: 'smooth' });
      } else {
        scrollArea.scrollLeft = targetLeft;
        scrollArea.scrollTop = targetTop;
      }
    };
    window.centerCanvasModel = centerCanvasModel;

    // Default zoom scale: 1.0 (100%) on mobile for 1:1 scale & smooth horizontal swiping, 0.85 (85%) on desktop
    let currentZoomScale = window.innerWidth < 1024 ? 1.0 : 0.85;
    
    const applyZoom = (smooth = true) => {
      const scalerContainer = document.getElementById('canvas-scaler-container');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scalerContainer || !wrapper || !zoomLabel) return;

      const dims = getBaseModelDimensions();
      const visualW = Math.round(dims.width * currentZoomScale);
      const visualH = Math.round(dims.height * currentZoomScale);

      // Scaler footprint container defines the exact scaled pixel boundary for 100% boundary panning & center flex
      scalerContainer.style.transition = smooth ? 'width 0.4s cubic-bezier(0.2, 0.9, 0.3, 1), height 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none';
      scalerContainer.style.width = `${visualW}px`;
      scalerContainer.style.height = `${visualH}px`;
      scalerContainer.style.margin = 'auto';
      scalerContainer.style.display = 'block';
      scalerContainer.style.position = 'relative';

      // Wrapper holds unscaled dimensions and scales with transform: scale(zoom) from 0 0
      wrapper.style.transition = smooth ? 'width 0.4s cubic-bezier(0.2, 0.9, 0.3, 1), height 0.4s cubic-bezier(0.2, 0.9, 0.3, 1), transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none';
      wrapper.style.width = `${dims.width}px`;
      wrapper.style.height = `${dims.height}px`;
      wrapper.style.position = 'absolute';
      wrapper.style.top = '0';
      wrapper.style.left = '0';
      wrapper.style.transformOrigin = '0 0';
      wrapper.style.transform = `scale(${currentZoomScale})`;
      wrapper.style.flexShrink = '0';

      const phoneCanvas = document.getElementById('phone-canvas');
      if (phoneCanvas) {
        phoneCanvas.style.transform = 'none';
      }

      const displayPercent = Math.round(currentZoomScale * 100);
      zoomLabel.innerText = `${displayPercent}%`;

      centerCanvasModel(smooth);
    };
    this.applyCanvasZoom = applyZoom;
    window.applyZoom = applyZoom;

    if (btnZoomIn && btnZoomOut && zoomLabel && mainPhoneWrapper) {
      // Set initial zoom on page load (without animation on first paint)
      applyZoom(false);

      btnZoomIn.addEventListener('click', () => {
        if (currentZoomScale < 1.5) {
          currentZoomScale = Math.min(1.5, Math.round((currentZoomScale + 0.15) * 100) / 100);
          if (window.soundFX) window.soundFX.play('zoom');
          applyZoom(true);
        }
      });

      btnZoomOut.addEventListener('click', () => {
        if (currentZoomScale > 0.4) {
          currentZoomScale = Math.max(0.4, Math.round((currentZoomScale - 0.15) * 100) / 100);
          if (window.soundFX) window.soundFX.play('zoom');
          applyZoom(true);
        }
      });

      window.addEventListener('resize', () => {
        centerCanvasModel(false);
      });
    }

    if (btnThemeToggle) {
      btnThemeToggle.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('toggle');
        this.currentMode = this.currentMode === 'dark' ? 'light' : 'dark';
        document.querySelectorAll('.theme-mode-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
        });
        this.applyThemeEngine();
        const wallpaperData = localStorage.getItem('schedully_wallpaper_data');
        if (wallpaperData) {
          this.extractColorsFromImage(wallpaperData);
        }
        this._stagePending();
      });
    }

    // Randomize Theme Palette Button (Bottom Pill Bar)
    document.getElementById('btn-randomize-theme')?.addEventListener('click', () => {
      if (this.phoneCanvas?.classList.contains('has-photo-wallpaper')) return;
      const paletteKeys = Object.keys(THEME_PALETTES.light);
      const available = paletteKeys.filter(k => k !== this.currentPalette);
      const randomPalette = available[Math.floor(Math.random() * available.length)];
      if (randomPalette) {
        this.setPalette(randomPalette);
      }
    });

    // Randomize Course Card Colors Button (Bottom Pill Bar)
    document.getElementById('btn-randomize-course-colors')?.addEventListener('click', () => {
      if (this.phoneCanvas?.classList.contains('has-photo-wallpaper')) return;
      const paletteColors = [
        '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8',
        '#D97706', '#F59E0B', '#FBBF24', '#B45309', '#7C3AED',
        '#A855F7', '#C084FC', '#DB2777', '#EC4899', '#F472B6',
        '#0284C7', '#38BDF8', '#10B981', '#34D399', '#059669',
        '#6D597A', '#B596C1', '#C2A878', '#E34F26', '#006D77'
      ];

      // Turn OFF global adaptive color so custom randomized colors take effect on grid
      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      // Map unique random colors per course code
      const codeColorMap = {};
      this.classes.forEach(c => {
        if (!codeColorMap[c.code]) {
          codeColorMap[c.code] = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        }
        c.customColor = codeColorMap[c.code];
      });

      this._stagePending();
      this.renderAll();
    });

    // Expandable Canvas Controls Popover Toggle
    const btnTogglePopover = document.getElementById('btn-toggle-canvas-popover');
    const canvasPopover = document.getElementById('canvas-controls-popover');
    const canvasRatioPopover = document.getElementById('canvas-ratio-popover');

    if (btnTogglePopover && canvasPopover) {
      btnTogglePopover.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = canvasPopover.classList.toggle('hidden');
        if (isHidden && canvasRatioPopover) {
          canvasRatioPopover.classList.add('hidden');
        }
        if (!canvasPopover.classList.contains('hidden')) {
          setTimeout(window.syncGlassSliders, 20);
          setTimeout(window.syncGlassSliders, 120);
        }
      });

      // Keep popover open while customizing themes/sidebars/controls.
      // Do NOT close when clicking sidebars, theme pickers, theme mode toggles, or bottom toolbar!
      document.addEventListener('click', (e) => {
        if (window.isTourActive) return;
        const isClickInsidePopover = canvasPopover.contains(e.target) || (canvasRatioPopover && canvasRatioPopover.contains(e.target));
        const isClickOnToggle = btnTogglePopover.contains(e.target);
        const isClickOnThemeOrSidebar = e.target.closest('#left-sidebar, #right-sidebar, #bottom-floating-pill-bar, #interactive-tour-overlay, #tour-popover-card, .palette-dot, .theme-mode-dot, .color-swatch-btn, .swatch-dot');

        if (!canvasPopover.classList.contains('hidden') && !isClickInsidePopover && !isClickOnToggle && !isClickOnThemeOrSidebar) {
          canvasPopover.classList.add('hidden');
          if (canvasRatioPopover) canvasRatioPopover.classList.add('hidden');
        }
      });
    }

    // Sidebar Collapsing into Single Floating Buttons (Desktop & Mobile Web)
    const leftSidebar = document.getElementById('left-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    const btnToggleLeft = document.getElementById('btn-toggle-left-sidebar');
    const btnExpandLeftFloating = document.getElementById('btn-expand-left-floating');
    const btnToggleRight = document.getElementById('btn-toggle-right-sidebar');
    const btnExpandRightFloating = document.getElementById('btn-expand-right-floating');

    const isMobile = () => window.innerWidth <= 1280;

    const showFloatingBtn = (btn) => {
      if (!btn) return;
      btn.classList.remove('hidden');
      btn.style.display = 'flex';
    };

    const hideFloatingBtn = (btn) => {
      if (!btn) return;
      btn.classList.add('hidden');
      btn.style.display = 'none';
    };

    const syncFloatingButtonsState = () => {
      const leftCollapsed = leftSidebar.classList.contains('sidebar-collapsed-left');
      const rightCollapsed = rightSidebar.classList.contains('sidebar-collapsed-right');
      const mobileExportBar = document.getElementById('mobile-export-bar');
      const mobileDropdown = document.getElementById('mobile-export-dropdown');
      const mobileChevron = document.getElementById('mobile-export-chevron');

      if (isMobile()) {
        // MOBILE / TABLET: If EITHER sidebar is open, hide ALL 3 floating top buttons
        if (!leftCollapsed || !rightCollapsed) {
          hideFloatingBtn(btnExpandLeftFloating);
          hideFloatingBtn(btnExpandRightFloating);
          if (mobileExportBar && !window.isTourActive) mobileExportBar.style.display = 'none';
          if (mobileDropdown && !window.isTourActive) mobileDropdown.classList.add('hidden');
          if (mobileChevron && !window.isTourActive) mobileChevron.classList.remove('mobile-export-chevron-open');
        } else {
          // Both sidebars closed: show all 3 floating top buttons
          showFloatingBtn(btnExpandLeftFloating);
          showFloatingBtn(btnExpandRightFloating);
          if (mobileExportBar) mobileExportBar.style.display = 'flex';
        }
      } else {
        // DESKTOP: Show floating Menu/Schedule buttons whenever respective sidebar is collapsed
        if (leftCollapsed) {
          showFloatingBtn(btnExpandLeftFloating);
        } else {
          hideFloatingBtn(btnExpandLeftFloating);
        }

        if (rightCollapsed) {
          showFloatingBtn(btnExpandRightFloating);
        } else {
          hideFloatingBtn(btnExpandRightFloating);
        }

        if (mobileExportBar) mobileExportBar.style.display = '';
      }

      // Sync Mobile PiP on smartphone screens (<= 640px)
      if (typeof this.syncMobilePipVisibility === 'function') {
        this.syncMobilePipVisibility(!leftCollapsed || !rightCollapsed);
      }
    };

    const toggleLeftSidebar = (collapse) => {
      const isCurrentlyCollapsed = leftSidebar.classList.contains('sidebar-collapsed-left');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        leftSidebar.classList.add('sidebar-collapsed-left');
      } else {
        leftSidebar.classList.remove('sidebar-collapsed-left');
        if (isMobile()) {
          rightSidebar.classList.add('sidebar-collapsed-right');
        }
      }
      syncFloatingButtonsState();
    };
    this.toggleLeftSidebar = toggleLeftSidebar;
    window.toggleLeftSidebar = toggleLeftSidebar;

    const toggleRightSidebar = (collapse) => {
      const isCurrentlyCollapsed = rightSidebar.classList.contains('sidebar-collapsed-right');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        rightSidebar.classList.add('sidebar-collapsed-right');
      } else {
        rightSidebar.classList.remove('sidebar-collapsed-right');
        if (isMobile()) {
          leftSidebar.classList.add('sidebar-collapsed-left');
        }
      }
      syncFloatingButtonsState();
    };
    this.toggleRightSidebar = toggleRightSidebar;
    window.toggleRightSidebar = toggleRightSidebar;

    btnToggleLeft?.addEventListener('click', () => toggleLeftSidebar(true));
    btnExpandLeftFloating?.addEventListener('click', () => toggleLeftSidebar(false));

    btnToggleRight?.addEventListener('click', () => toggleRightSidebar(true));
    btnExpandRightFloating?.addEventListener('click', () => toggleRightSidebar(false));

    // Initial sidebar state on web app load:
    // Mobile & Tablet (<=1280px): BOTH Menu and Schedule start COLLAPSED (not expanded)
    // Desktop (>1280px): BOTH Menu and Schedule start EXPANDED by default
    if (isMobile()) {
      leftSidebar?.classList.add('sidebar-collapsed-left');
      rightSidebar?.classList.add('sidebar-collapsed-right');
    } else {
      leftSidebar?.classList.remove('sidebar-collapsed-left');
      rightSidebar?.classList.remove('sidebar-collapsed-right');
    }
    syncFloatingButtonsState();

    // Re-check on window resize
    window.addEventListener('resize', () => {
      syncFloatingButtonsState();
    });

    // Close open floating sidebars on mobile/tablet when user taps workspace canvas
    document.querySelector('main')?.addEventListener('click', (e) => {
      if (isMobile()) {
        const clickedFloating = e.target.closest('#btn-expand-left-floating, #btn-expand-right-floating');
        if (!clickedFloating) {
          toggleLeftSidebar(true);
          toggleRightSidebar(true);
        }
      }
    });

    // Touch Swipe Gestures for Mobile & Tablet Sidebars
    const setupSidebarSwipeGestures = () => {
      // 1. Left Sidebar Swipe to Dismiss
      if (leftSidebar) {
        let touchStartX = 0;
        let touchStartY = 0;

        leftSidebar.addEventListener('touchstart', (e) => {
          if (!isMobile()) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }, { passive: true });

        leftSidebar.addEventListener('touchend', (e) => {
          if (!isMobile()) return;
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;

          // Check if swipe exceeds threshold and is predominantly horizontal
          if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
            // Dismiss left sidebar
            toggleLeftSidebar(true);
          }
        }, { passive: true });
      }

      // 2. Right Sidebar Swipe to Dismiss
      if (rightSidebar) {
        let touchStartX = 0;
        let touchStartY = 0;

        rightSidebar.addEventListener('touchstart', (e) => {
          if (!isMobile()) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }, { passive: true });

        rightSidebar.addEventListener('touchend', (e) => {
          if (!isMobile()) return;
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;

          // Check if swipe exceeds threshold and is predominantly horizontal
          if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
            // Dismiss right sidebar
            toggleRightSidebar(true);
          }
        }, { passive: true });
      }
    };

    setupSidebarSwipeGestures();

    // Add Course Form Submit
    this.addCourseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const code = this.inputCourseCode.value.trim().toUpperCase();
      if (!code) return;

      let startTime = this.inputStartTime.value;
      let endTime = this.inputEndTime.value;
      let periodNumber = undefined;

      if (this.axisMode === 'period' && this.inputPeriodSelect) {
        const selOption = this.inputPeriodSelect.selectedOptions[0];
        periodNumber = selOption ? parseInt(selOption.value, 10) : 1;
        startTime = selOption ? (selOption.getAttribute('data-start') || '09:00') : '09:00';
        endTime = selOption ? (selOption.getAttribute('data-end') || '10:30') : '10:30';
      }

      const courseType = this.inputType.value.trim();
      const location = this.inputLocation.value.trim();
      const lecturer = this.inputLecturer ? this.inputLecturer.value.trim() : '';
      const group = this.inputGroup ? this.inputGroup.value.trim() : '';

      const checkedDays = Array.from(document.querySelectorAll('input[name="day"]:checked')).map(cb => cb.value);
      const daysToCreate = checkedDays.length > 0 ? checkedDays : ['Mon'];

      daysToCreate.forEach((day, idx) => {
        this.classes.push({
          id: Date.now() + idx,
          code: code,
          title: courseType ? `${code} (${courseType})` : code,
          day: day,
          periodNumber: periodNumber,
          startTime: startTime,
          endTime: endTime,
          type: courseType,
          room: location,
          lecturer: lecturer,
          group: group,
          customColor: this.selectedColor,
          fontColor: this.newCourseFontColor,
          displayTime: this.newCourseDisplayTime
        });
      });

      this.inputCourseCode.value = '';
      this.inputType.value = '';
      this.inputLocation.value = '';
      if (this.inputGroup) this.inputGroup.value = '';

      this.renderAll();
    });

    // Universal Schedule Importer (Auto-detects CSV, ICS, or Screenshot AI)
    if (this.universalFileInput) {
      this.universalFileInput.addEventListener('change', async (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const fileName = file.name.toLowerCase();
          const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp)$/i.test(fileName);

          if (isImage) {
            // Run AI Screenshot Scanner
            const scanErrorAlert = document.getElementById('scan-error-alert');
            if (scanErrorAlert) scanErrorAlert.classList.add('hidden');

            this.ocrLoadingBar.classList.remove('hidden');
            let extracted = [];
            try {
              const provider = 'gemini';
              const apiKey = (
                localStorage.getItem('schedully_gemini_api_key') ||
                localStorage.getItem('schedully_api_key') ||
                localStorage.getItem('gemini_api_key') ||
                document.getElementById('input-gemini-api-key')?.value ||
                document.getElementById('fb-api-key')?.value ||
                ''
              ).trim();
              
              const scanResult = await window.ocrParser.scanWithCloudAPI(file, provider, apiKey, (msg) => {
                this.ocrLoadingText.innerText = msg;
              });
              
              extracted = Array.isArray(scanResult) ? scanResult : (scanResult.courses || []);
              const detectedLang = scanResult.detectedLanguage || 'Japanese';
              const hasNonEnglish = (scanResult.hasNonEnglishText !== undefined) ? scanResult.hasNonEnglishText : true;

              if (!extracted || extracted.length === 0) {
                const scanErrorAlert = document.getElementById('scan-error-alert');
                const scanErrorTitle = document.getElementById('scan-error-title');
                const scanErrorDesc = document.getElementById('scan-error-desc');
                if (scanErrorAlert) {
                  scanErrorAlert.classList.remove('hidden');
                  if (scanErrorTitle) scanErrorTitle.innerText = "Scanning Failed: Image Unreadable";
                  if (scanErrorDesc) scanErrorDesc.innerText = "The scanner could not recognize valid timetable text in this image. Please ensure the image is clear.";
                }
                return;
              }

              const isPeriodBased = (scanResult && scanResult.isPeriodBased !== undefined) ? scanResult.isPeriodBased : extracted.some(c => c.periodNumber !== undefined);
              if (hasNonEnglish || isPeriodBased || (detectedLang && detectedLang.toLowerCase() !== 'english')) {
                this.showOcrLanguageModal(extracted, detectedLang, isPeriodBased);
              } else {
                this.importClassesDirectly(extracted);
              }
            } catch (err) {
              console.error("Scanner Error:", err);
              const scanErrorAlert = document.getElementById('scan-error-alert');
              const scanErrorTitle = document.getElementById('scan-error-title');
              const scanErrorDesc = document.getElementById('scan-error-desc');
              if (scanErrorAlert) {
                scanErrorAlert.classList.remove('hidden');
                if (scanErrorTitle) scanErrorTitle.innerText = "Scanning Failed";
                if (scanErrorDesc) scanErrorDesc.innerText = err.message || "The scanner could not recognize valid timetable text.";
              }
            } finally {
              this.ocrLoadingBar.classList.add('hidden');
              e.target.value = '';
            }
          } else {
            // Run CSV or ICS File Parser
            if (!window.ScheduleParser) {
              alert("Schedule parser module is loading. Please select your file again.");
              return;
            }
            const reader = new FileReader();
            reader.onload = (evt) => {
              const content = evt.target.result || '';
              try {
                let parsedEvents = [];
                const upperContent = content.toUpperCase();
                const isICS = fileName.endsWith('.ics') || upperContent.includes('BEGIN:VCALENDAR') || upperContent.includes('BEGIN:VEVENT');

                if (isICS) {
                   parsedEvents = window.ScheduleParser.parseICS(content);
                   if (parsedEvents.length === 0) {
                     alert("No classes found in this ICS file.");
                     return;
                   }
                   this.importClassesDirectly(parsedEvents);
                } else {
                   parsedEvents = window.ScheduleParser.parseCSV(content);
                   if (parsedEvents.length === 0) {
                     alert("No readable classes found in CSV.");
                     return;
                   }
                   this.handleCSVImportWithOCC(parsedEvents);
                }
              } catch (err) {
                console.error("File parsing error:", err);
                alert("Could not parse schedule file: " + (err.message || 'Check file format'));
              }
            };
            reader.readAsText(file);
            this.universalFileInput.value = '';
          }
        }
      });
    }

    // OCC Modal Events
    if (this.btnOccCancel) {
      this.btnOccCancel.addEventListener('click', () => {
        this.occModal.classList.add('hidden');
        this.pendingCsvClasses = [];
      });
    }

    if (this.btnOccConfirm) {
      this.btnOccConfirm.addEventListener('click', () => {
        this.occModal.classList.add('hidden');
        
        // Collect selected OCCs
        const selectedOCCs = {};
        const courseCodesInModal = new Set();
        document.querySelectorAll('.occ-cards-container').forEach(container => {
          const courseCode = container.getAttribute('data-coursecode');
          courseCodesInModal.add(courseCode);
          const selectedCard = container.querySelector('.occ-card.selected');
          if (selectedCard) {
             selectedOCCs[courseCode] = (selectedCard.getAttribute('data-group') || '').trim().toLowerCase();
          }
        });

        // Filter the master list with flexible group matching
        const filteredEvents = this.pendingCsvClasses.filter(c => {
          if (courseCodesInModal.has(c.code)) {
             if (!selectedOCCs[c.code]) return false; // User deselected this subject! Drop it.
             const cGroupNorm = (c.group || '').trim().toLowerCase();
             return cGroupNorm === selectedOCCs[c.code];
          }
          return true; // Not in modal (shouldn't happen, but safe fallback)
        });

        this.importClassesDirectly(filteredEvents);
        this.pendingCsvClasses = [];
      });
    }

    // OCR Language Choice Modal Events
    if (this.btnCloseOcrLangModal) {
      this.btnCloseOcrLangModal.addEventListener('click', () => {
        if (this.ocrLangModal) {
          this.ocrLangModal.classList.add('hidden');
          this.ocrLangModal.style.display = 'none';
        }
        if (this.pendingOcrResult) {
          this.importClassesDirectly(this.pendingOcrResult.courses);
          this.pendingOcrResult = null;
        }
      });
    }

    const PERIOD_SCHEDULES = {
      '90m-900': {
        1: { start: '09:00', end: '10:30' },
        2: { start: '10:40', end: '12:10' },
        3: { start: '13:00', end: '14:30' },
        4: { start: '14:40', end: '16:10' },
        5: { start: '16:20', end: '17:50' },
        6: { start: '18:00', end: '19:30' },
        7: { start: '19:40', end: '21:10' }
      },
      '90m-850': {
        1: { start: '08:50', end: '10:20' },
        2: { start: '10:30', end: '12:00' },
        3: { start: '12:50', end: '14:20' },
        4: { start: '14:30', end: '16:00' },
        5: { start: '16:10', end: '17:40' },
        6: { start: '17:50', end: '19:20' },
        7: { start: '19:30', end: '21:00' }
      },
      '50m-school': {
        1: { start: '08:30', end: '09:20' },
        2: { start: '09:30', end: '10:20' },
        3: { start: '10:40', end: '11:30' },
        4: { start: '11:40', end: '12:30' },
        5: { start: '13:30', end: '14:20' },
        6: { start: '14:30', end: '15:20' },
        7: { start: '15:30', end: '16:20' }
      }
    };

    // 1. Language Toggle Cards
    if (this.btnOcrKeepOriginal) {
      this.btnOcrKeepOriginal.addEventListener('click', () => {
        this.selectedOcrLangChoice = 'original';
        this.btnOcrKeepOriginal.classList.add('active', 'border-2', 'border-blue-500', 'bg-blue-50/70', 'dark:bg-blue-950/50');
        this.btnOcrKeepOriginal.classList.remove('border-slate-200', 'dark:border-slate-700', 'bg-white/70', 'dark:bg-slate-800/70');
        if (this.btnOcrTranslateEnglish) {
          this.btnOcrTranslateEnglish.classList.remove('active', 'border-2', 'border-blue-500', 'bg-blue-50/70', 'dark:bg-blue-950/50');
          this.btnOcrTranslateEnglish.classList.add('border-slate-200', 'dark:border-slate-700', 'bg-white/70', 'dark:bg-slate-800/70');
        }
      });
    }

    if (this.btnOcrTranslateEnglish) {
      this.btnOcrTranslateEnglish.addEventListener('click', () => {
        this.selectedOcrLangChoice = 'translated';
        this.btnOcrTranslateEnglish.classList.add('active', 'border-2', 'border-blue-500', 'bg-blue-50/70', 'dark:bg-blue-950/50');
        this.btnOcrTranslateEnglish.classList.remove('border-slate-200', 'dark:border-slate-700', 'bg-white/70', 'dark:bg-slate-800/70');
        if (this.btnOcrKeepOriginal) {
          this.btnOcrKeepOriginal.classList.remove('active', 'border-2', 'border-blue-500', 'bg-blue-50/70', 'dark:bg-blue-950/50');
          this.btnOcrKeepOriginal.classList.add('border-slate-200', 'dark:border-slate-700', 'bg-white/70', 'dark:bg-slate-800/70');
        }
      });
    }

    // 2. Schedule Axis Mode Buttons (Period / Clock)
    const axisButtons = [this.btnAxisPeriod, this.btnAxisTime].filter(Boolean);
    const presetContainer = document.getElementById('ocr-period-preset-container');

    const updatePresetVisibility = (mode) => {
      if (presetContainer) {
        // Show presets when Clock mode is selected (times matter)
        if (mode === 'time') {
          presetContainer.style.display = 'flex';
        } else {
          presetContainer.style.display = 'none';
        }
      }
    };

    axisButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        axisButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn === this.btnAxisPeriod) {
          this.selectedOcrAxisMode = 'period';
        } else {
          this.selectedOcrAxisMode = 'time';
        }
        updatePresetVisibility(this.selectedOcrAxisMode);
      });
    });

    // 3. Quick Period Schedule Preset Chips
    const presetChips = document.querySelectorAll('.period-preset-chip');
    presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        presetChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedOcrPeriodPreset = chip.getAttribute('data-preset') || '90m-900';
      });
    });

    // 4. Apply & Import Action Button
    if (this.btnOcrApplyImport) {
      this.btnOcrApplyImport.addEventListener('click', () => {
        if (this.ocrLangModal) {
          this.ocrLangModal.classList.add('hidden');
          this.ocrLangModal.style.display = 'none';
        }
        if (this.pendingOcrResult) {
          const scheduleMap = PERIOD_SCHEDULES[this.selectedOcrPeriodPreset] || PERIOD_SCHEDULES['90m-900'];
          const courses = this.pendingOcrResult.courses.map(c => {
            const isTranslated = (this.selectedOcrLangChoice === 'translated');
            const mappedTitle = isTranslated ? (c.translatedTitle || c.title) : (c.originalTitle || c.title);
            const mappedCode = isTranslated ? (c.translatedCode || c.code) : (c.originalCode || c.code);
            
            let sTime = c.startTime;
            let eTime = c.endTime;
            if (c.periodNumber && scheduleMap[c.periodNumber]) {
              sTime = scheduleMap[c.periodNumber].start;
              eTime = scheduleMap[c.periodNumber].end;
            }

            return {
              ...c,
              title: mappedTitle,
              code: mappedCode,
              startTime: sTime || '09:00',
              endTime: eTime || '10:30'
            };
          });

          this.axisMode = this.selectedOcrAxisMode || 'period';
          this.importClassesDirectly(courses);
          this.pendingOcrResult = null;
        }
      });
    }

    // Gemini API Key Modal Listeners
    if (this.btnOpenGeminiKeyModal) {
      this.btnOpenGeminiKeyModal.addEventListener('click', () => {
        this.openGeminiKeyModal();
      });
    }

    if (this.btnCloseGeminiKeyModal) {
      this.btnCloseGeminiKeyModal.addEventListener('click', () => {
        this.closeGeminiKeyModal();
      });
    }

    if (this.btnCancelGeminiKey) {
      this.btnCancelGeminiKey.addEventListener('click', () => {
        this.closeGeminiKeyModal();
      });
    }

    if (this.btnToggleGeminiKeyVis) {
      this.btnToggleGeminiKeyVis.addEventListener('click', () => {
        if (this.inputGeminiApiKey) {
          this.inputGeminiApiKey.type = this.inputGeminiApiKey.type === 'password' ? 'text' : 'password';
        }
      });
    }

    if (this.btnSaveGeminiKey) {
      this.btnSaveGeminiKey.addEventListener('click', async () => {
        const rawKey = (this.inputGeminiApiKey?.value || '').trim();
        if (!rawKey) {
          alert("Please enter a valid Google Gemini API Key.");
          return;
        }
        localStorage.setItem('schedully_gemini_api_key', rawKey);
        localStorage.setItem('schedully_api_key', rawKey);
        this.updateGeminiKeyStatusBadge();
        this.closeGeminiKeyModal();

        // If there was a pending file waiting to be scanned, scan it now!
        if (this.pendingScanFile) {
          const fileToScan = this.pendingScanFile;
          this.pendingScanFile = null;
          if (this.ocrLoadingBar) this.ocrLoadingBar.classList.remove('hidden');
          if (this.ocrLoadingText) this.ocrLoadingText.innerText = "Analyzing timetable with Gemini Vision...";
          try {
            const scanResult = await window.ocrParser.scanWithCloudAPI(fileToScan, 'gemini', rawKey, (msg) => {
              if (this.ocrLoadingText) this.ocrLoadingText.innerText = msg;
            });
            const extracted = Array.isArray(scanResult) ? scanResult : (scanResult.courses || []);
            const detectedLang = scanResult.detectedLanguage || 'English';
            const hasNonEnglish = (scanResult.hasNonEnglishText !== undefined) ? scanResult.hasNonEnglishText : false;

            if (extracted && extracted.length > 0) {
              if (hasNonEnglish || (detectedLang && detectedLang.toLowerCase() !== 'english')) {
                this.showOcrLanguageModal(extracted, detectedLang);
              } else {
                this.importClassesDirectly(extracted);
              }
            }
          } catch (err) {
            console.error("Scan error after key save:", err);
          } finally {
            if (this.ocrLoadingBar) this.ocrLoadingBar.classList.add('hidden');
          }
        }
      });
    }

    if (this.btnClearAll) {
      this.btnClearAll.addEventListener('click', async (e) => {
         try {
           const originalText = e.currentTarget.innerHTML;
           e.currentTarget.innerHTML = "Clearing...";
           e.currentTarget.style.backgroundColor = "#dcfce7";
           e.currentTarget.style.color = "#166534";
           
           // Clear internal state & presets
           this.classes = [];
           if (this.presets && this.activePresetKey && this.presets[this.activePresetKey]) {
             this.presets[this.activePresetKey].classes = [];
           }
           this.saveToLocal();

           // Sync cleared state to Firebase Cloud if logged in
           if (window.schedullyFirebase?.currentUser) {
             await this.saveToCloud();
           }
           
           // Forcefully clear the UI immediately
           if (this.classListContainer) this.classListContainer.innerHTML = '';
           if (this.universalTimetableGrid) this.universalTimetableGrid.innerHTML = '';
           if (this.slotsBadgeCount) this.slotsBadgeCount.innerText = '0';
           if (this.clashAlert) this.clashAlert.classList.add('hidden');
           
           // Render to reset empty states
           this.renderAll();
           
           // Revert button visually
           setTimeout(() => {
             if (this.btnClearAll) {
               this.btnClearAll.innerHTML = originalText;
               this.btnClearAll.style.backgroundColor = "#fee2e2";
               this.btnClearAll.style.color = "#b91c1c";
             }
           }, 400);
         } catch (err) {
           alert("Error clearing classes: " + err.message);
         }
      });
    }

    // Auto-Resolve Clash Button
    this.btnAutoResolve.addEventListener('click', () => {
      const clashes = window.timetableEngine.detectClashes(this.classes);
      if (clashes.length > 0) {
        const target = clashes[0].c2;
        target.day = 'Friday';
        target.startTime = '14:00';
        target.endTime = '16:00';
        delete target.isClashing;
        this.ignoreClashes = false;
        this.renderAll();
        alert("⚠️ Clash Auto-Resolved! Shifted overlapping slot to Friday 2:00 PM.");
      }
    });

    // Ignore Clash Button
    const btnIgnoreClash = document.getElementById('btn-ignore-clash');
    if (btnIgnoreClash) {
      btnIgnoreClash.addEventListener('click', () => {
        this.ignoreClashes = true;
        this.clashAlert.classList.add('hidden');
        this.renderAll();
      });
    }

    // iCal Export Button
    this.btnExportICal?.addEventListener('click', () => {
      window.timetableEngine.exportToICal(this.classes, `schedully_schedule.ics`);
      alert("📅 Exported .ics Calendar File! Open this file to import into Google Calendar or Apple Calendar.");
    });

    // CSV Export Button
    this.btnExportCSV?.addEventListener('click', () => {
      window.timetableEngine.exportToCSV(this.classes, `schedully_schedule.csv`);
      alert("📊 Exported CSV File!");
    });

    // Wallpaper export — Timetable Factory Proven dom-to-image-more SVG Engine (Schedully-Fixed)
    const exportWallpaper = (onComplete) => {
      if (!this.classes || this.classes.length === 0) {
        alert("📊 Your schedule is empty! Please add courses first.");
        return;
      }

      const originalCanvas = document.getElementById('phone-canvas');
      if (!originalCanvas) return;

      // Sample live canvas dimensions directly to guarantee 100% preview match
      let nativeW = originalCanvas.offsetWidth || 380;
      let nativeH = originalCanvas.offsetHeight || 844;
      const ratio = this.currentScreenRatio || 'auto';
      const isWatch = originalCanvas.classList.contains('canvas-watch');
      const isTablet = originalCanvas.classList.contains('canvas-tablet');
      const isPaper = originalCanvas.classList.contains('canvas-paper');

      if (isTablet) {
        if (ratio === 'ios' || ratio === 'iphone') {
          nativeW = 920; nativeH = 690; // Exact 4:3 (iPad Pro / Air)
        } else if (ratio === 'android' || ratio === 'xiaomi') {
          nativeW = 920; nativeH = 575; // Exact 16:10 (Xiaomi Pad / Galaxy Tab)
        } else if (ratio === 'standard') {
          nativeW = 920; nativeH = 518; // Exact 16:9 Widescreen
        } else {
          nativeW = originalCanvas.offsetWidth || 920;
          nativeH = originalCanvas.offsetHeight || 690;
        }
      } else if (isWatch) {
        if (originalCanvas.classList.contains('watch-shape-band') || ratio === 'android' || ratio === 'band') {
          nativeW = 200; nativeH = 380; // Smart Band Format (1:1.9)
        } else if (originalCanvas.classList.contains('watch-shape-capsule') || ratio === 'ios' || ratio === 'capsule') {
          nativeW = 200; nativeH = 500; // Pill Capsule Format (1:2.5)
        } else if (originalCanvas.classList.contains('watch-shape-round') || ratio === 'standard' || ratio === 'round') {
          nativeW = 440; nativeH = 440; // Round Circular Format (1:1)
        } else {
          nativeW = 410; nativeH = 502; // Squircle Format (4:5)
        }
      } else if (isPaper) {
        nativeW = 720;
        nativeH = Math.max(480, originalCanvas.scrollHeight || 480);
      } else {
        // PHONE MODE: Mathematical 1:1 Aspect Ratio Export Engine
        if (ratio === 'android' || ratio === 'xiaomi') {
          nativeW = 380; nativeH = 844; // Exact 20:9
        } else if (ratio === 'ios' || ratio === 'iphone') {
          nativeW = 380; nativeH = 823; // Exact 19.5:9
        } else if (ratio === 'standard') {
          nativeW = 380; nativeH = 760; // Exact 18:9
        } else {
          nativeW = originalCanvas.offsetWidth || 380;
          nativeH = originalCanvas.offsetHeight || 844;
        }
      }

      // Create an off-screen staging area so we can render it at perfect native scale
      const stagingContainer = document.createElement('div');
      stagingContainer.className = 'export-staging-container';
      stagingContainer.style.cssText = `
        position: absolute;
        top: -9999px; left: -9999px;
        width: ${nativeW}px; height: ${nativeH}px;
        min-width: ${nativeW}px; max-width: ${nativeW}px;
        z-index: -9999;
        zoom: 1; transform: none;
        overflow: hidden;
        border-radius: 0px !important;
      `;
      document.body.appendChild(stagingContainer);

      const clone = originalCanvas.cloneNode(true);

      const cs = window.getComputedStyle(originalCanvas);
      const padTop = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.borderTopWidth) || 0);
      const padBottom = (parseFloat(cs.paddingBottom) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
      const padLeft = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.borderLeftWidth) || 0);
      const padRight = (parseFloat(cs.paddingRight) || 0) + (parseFloat(cs.borderRightWidth) || 0);

      // Remove device chassis border radius so exported wallpaper is a clean 100% full rectangle
      clone.style.setProperty('border', 'none', 'important');
      clone.style.setProperty('border-width', '0px', 'important');
      clone.style.setProperty('border-radius', '0px', 'important');
      clone.style.setProperty('outline', 'none', 'important');
      clone.style.setProperty('box-shadow', 'none', 'important');
      clone.style.setProperty('margin', '0px', 'important');
      clone.style.setProperty('padding', `${padTop}px ${padRight}px ${padBottom}px ${padLeft}px`, 'important');
      clone.style.setProperty('overflow', 'hidden', 'important');

      // Force clone to full native dimensions (overriding any mobile responsive screen squishing)
      clone.style.setProperty('width', `${nativeW}px`, 'important');
      clone.style.setProperty('min-width', `${nativeW}px`, 'important');
      clone.style.setProperty('max-width', `${nativeW}px`, 'important');
      clone.style.setProperty('height', `${nativeH}px`, 'important');
      clone.style.setProperty('min-height', `${nativeH}px`, 'important');

      // Set exact blur CSS variable on clone so ::before edge-bleed blur renders identically
      const blurVal = this.bgBlurEnabled ? `${this.bgBlurIntensity || 12}px` : '0px';
      clone.style.setProperty('--wallpaper-blur-val', blurVal, 'important');

      // Explicitly enforce Background Blur variable & Zero Border Radius on clone wallpaper layer
      const wallpaperLayer = clone.querySelector('.phone-wallpaper-layer');
      if (wallpaperLayer) {
        wallpaperLayer.style.setProperty('border-radius', '0px', 'important');
        wallpaperLayer.style.setProperty('--wallpaper-blur-val', blurVal, 'important');
        wallpaperLayer.style.setProperty('filter', 'none', 'important');
      }

      // Explicitly prevent any backdrop-filter blur and ensure full width on timetable container
      const timetableContainer = clone.querySelector('#lock-timetable-container');
      if (timetableContainer) {
        timetableContainer.style.setProperty('backdrop-filter', 'none', 'important');
        timetableContainer.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
        timetableContainer.style.setProperty('width', '100%', 'important');
        timetableContainer.style.setProperty('min-width', '100%', 'important');
        timetableContainer.style.setProperty('max-width', 'none', 'important');
      }

      // Hide clock/date lockscreen widget while preserving exact layout height & Y-positioning
      const lockHeader = clone.querySelector('#phone-lock-header');
      if (lockHeader) {
        lockHeader.style.setProperty('visibility', 'hidden', 'important');
        lockHeader.style.setProperty('opacity', '0', 'important');
      }

      // Completely remove hardware buttons, camera notch, straps, and nav bar from exported wallpaper
      clone.querySelectorAll('.side-btn, .watch-strap, .watch-strap-top, .watch-strap-bottom, .phone-camera-dot, .phone-nav-bar, .phone-home-indicator, .phone-status-bar').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });

      stagingContainer.appendChild(clone);

      // Render via domtoimage at 3x resolution with native bounds
      setTimeout(() => {
        const scale = 3;
        const renderPromise = (window.domtoimage && typeof window.domtoimage.toCanvas === 'function')
          ? window.domtoimage.toCanvas(clone, {
              width: nativeW * scale,
              height: nativeH * scale,
              style: {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: `${nativeW}px`,
                height: `${nativeH}px`,
                minWidth: `${nativeW}px`,
                maxWidth: `${nativeW}px`
              }
            })
          : (typeof html2canvas === 'function'
              ? html2canvas(clone, { scale, useCORS: true, allowTaint: true, backgroundColor: null })
              : Promise.reject(new Error("No canvas render engine found")));

        renderPromise.then(canvas => {
          if (document.body.contains(stagingContainer)) {
            document.body.removeChild(stagingContainer);
          }
          onComplete(canvas);
        }).catch(err => {
          if (document.body.contains(stagingContainer)) {
            document.body.removeChild(stagingContainer);
          }
          console.error("Wallpaper export error:", err);
          alert("Failed to export image. Please try again.");
        });
      }, 50);
    };


    // Download Image Button — Pure clean wallpaper PNG export (Mobile & Desktop)
    this.btnDownloadHD?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('success');
      exportWallpaper((canvas) => {
        canvas.toBlob((blob) => {
          if (blob && window.timetableEngine?.downloadOrShareFile) {
            window.timetableEngine.downloadOrShareFile(blob, 'schedully_wallpaper.png', 'image/png');
          } else {
            const link = document.createElement('a');
            link.download = 'schedully_wallpaper.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          }
        }, 'image/png');
      });
    });

    // Save As PDF Button â€” Pure clean wallpaper PDF export (Mobile & Desktop)
    this.btnSavePdf?.addEventListener('click', () => {
      exportWallpaper((canvas) => {
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/png');
        
        // Create PDF with EXACT dimensions of the exported image to prevent white A4 margins
        const pdf = new jsPDF({
          orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        
        try {
          const pdfArrayBuffer = pdf.output('arraybuffer');
          const pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
          if (window.timetableEngine?.downloadOrShareFile) {
            window.timetableEngine.downloadOrShareFile(pdfBlob, 'schedully_wallpaper.pdf', 'application/pdf');
          } else {
            pdf.save('schedully_wallpaper.pdf');
          }
        } catch (pdfErr) {
          pdf.save('schedully_wallpaper.pdf');
        }
      });
    });

    // â”€â”€ Mobile Export Dropdown â”€â”€
    const mobileExportToggle = document.getElementById('btn-mobile-export-toggle');
    const mobileExportDropdown = document.getElementById('mobile-export-dropdown');
    const mobileExportChevron = document.getElementById('mobile-export-chevron');

    const closeMobileDropdown = () => {
      mobileExportDropdown?.classList.add('hidden');
      mobileExportChevron?.classList.remove('mobile-export-chevron-open');
    };

    mobileExportToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !mobileExportDropdown.classList.contains('hidden');
      if (isOpen) {
        closeMobileDropdown();
      } else {
        mobileExportDropdown.classList.remove('hidden');
        mobileExportChevron?.classList.add('mobile-export-chevron-open');
      }
    });

    // Close dropdown when tapping elsewhere (do not close on tour overlay clicks)
    document.addEventListener('click', (e) => {
      if (window.isTourActive) return;
      if (!e.target.closest('#mobile-export-bar, #interactive-tour-overlay, #tour-popover-card')) {
        closeMobileDropdown();
      }
    });

    // Proxy mobile buttons â€” desktop button click handlers
    document.getElementById('btn-download-hd-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnDownloadHD?.click();
    });
    document.getElementById('btn-export-ical-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnExportICal?.click();
    });
    document.getElementById('btn-export-csv-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnExportCSV?.click();
    });
    document.getElementById('btn-save-pdf-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnSavePdf?.click();
    });
  }


  applyPresetSettings(settings) {
    if (!settings || typeof settings !== 'object') return;

    try {
                  // 1. Table & Card Corners & Radius
      if (settings.tableCornerStyle || settings.cardCornerStyle) {
        this.tableCornerStyle = settings.tableCornerStyle || settings.cardCornerStyle || 'rounded';
        document.querySelectorAll('#toggle-table-corners .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === this.tableCornerStyle);
        });
        const rowTableRadius = document.getElementById('row-table-radius');
        if (rowTableRadius) {
          rowTableRadius.style.display = (this.tableCornerStyle === 'sharp') ? 'none' : 'flex';
        }

        this.cardCornerStyle = settings.cardCornerStyle || 'rounded';
        document.querySelectorAll('#toggle-card-corners .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === this.cardCornerStyle);
        });
        const rowCardRadius = document.getElementById('row-card-radius');
        if (rowCardRadius) {
          rowCardRadius.style.display = (this.cardCornerStyle === 'sharp') ? 'none' : 'flex';
        }
      }
      if (settings.tableCornerRadiusVal !== undefined) {
        this.tableCornerRadiusVal = settings.tableCornerRadiusVal;
        const tableRadiusValEl = document.getElementById('table-radius-val');
        if (tableRadiusValEl) tableRadiusValEl.value = this.tableCornerRadiusVal;
      } else if (settings.cardCornerRadiusVal !== undefined) {
        this.tableCornerRadiusVal = settings.cardCornerRadiusVal;
        const tableRadiusValEl = document.getElementById('table-radius-val');
        if (tableRadiusValEl) tableRadiusValEl.value = this.tableCornerRadiusVal;
      }
      if (settings.cardCornerRadiusVal !== undefined) {
        this.cardCornerRadiusVal = settings.cardCornerRadiusVal;
        const cardRadiusValEl = document.getElementById('card-radius-val');
        if (cardRadiusValEl) cardRadiusValEl.value = this.cardCornerRadiusVal;
      }

      // 2. Mode & Palette
      if (settings.currentPalette) {
        this.currentPalette = settings.currentPalette;
        document.querySelectorAll('.palette-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-palette') === this.currentPalette);
        });
      }
      if (settings.currentMode) {
        this.currentMode = settings.currentMode;
        document.querySelectorAll('.theme-mode-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
        });
      }
      this.applyThemeEngine();

      // 3. Grid Dimensions & Position
      if (settings.gridWidthVal) {
        this.gridWidthVal = settings.gridWidthVal;
        const gwEl = document.getElementById('grid-width-val');
        if (gwEl) gwEl.value = this.gridWidthVal;
      }
      if (settings.gridHeightVal) {
        this.gridHeightVal = settings.gridHeightVal;
        const ghEl = document.getElementById('grid-height-val');
        if (ghEl) ghEl.value = this.gridHeightVal;
      }
      if (settings.gridYPosVal !== undefined) {
        this.gridYPosVal = settings.gridYPosVal;
        const gyEl = document.getElementById('grid-ypos-val');
        if (gyEl) gyEl.value = this.gridYPosVal;
      }
      if (settings.fontSizeVal) {
        this.fontSizeVal = settings.fontSizeVal;
        this.gridFontSizeVal = settings.fontSizeVal;
        const fsEl = document.getElementById('grid-fontsize-val');
        if (fsEl) fsEl.value = this.fontSizeVal;
      }

      // 4. Clock Format
      if (settings.clockFormat) {
        this.clockFormat = settings.clockFormat;
        document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === this.clockFormat);
        });
      }

      // 5. Background Blur
      if (typeof settings.bgBlurEnabled === 'boolean') {
        this.bgBlurEnabled = settings.bgBlurEnabled;
        this.bgBlurIntensity = settings.bgBlurIntensity || 10;
        
        const toggleBgBlur = document.getElementById('toggle-bg-blur');
        const blurControl = document.getElementById('blur-intensity-control');
        const blurSlider = document.getElementById('slider-bg-blur');
        const blurValText = document.getElementById('blur-intensity-val');

        if (toggleBgBlur) {
          toggleBgBlur.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.bgBlurEnabled ? 'yes' : 'no'));
          });
        }
        if (blurControl) blurControl.classList.toggle('hidden', !this.bgBlurEnabled);
        if (blurSlider) blurSlider.value = this.bgBlurIntensity;
        if (blurValText) blurValText.innerText = `${this.bgBlurIntensity}px`;
        document.documentElement.style.setProperty('--wallpaper-blur-val', this.bgBlurEnabled ? `${this.bgBlurIntensity}px` : '0px');
      }

      // 6. Font Family
      if (settings.fontFamily && this.applyFontFamily) {
        this.applyFontFamily(settings.fontFamily, null, true);
      }

      // 7. Timetable Opacity
      if (settings.timetableOpacity && this.setTimetableOpacity) {
        this.setTimetableOpacity(settings.timetableOpacity);
      }

      // 8. Title
      if (settings.showTitle !== undefined) {
        this.showTitle = settings.showTitle;
        document.querySelectorAll('#toggle-title .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === (this.showTitle ? 'yes' : 'no'));
        });
        if (this.lockGridTitle) {
          this.lockGridTitle.style.setProperty('display', this.showTitle ? 'block' : 'none', 'important');
        }
      }
      if (settings.titleText) {
        this.updateTitleText(settings.titleText);
      }

      // 8b. Trademark
      if (settings.showTrademark !== undefined) {
        this.showTrademark = settings.showTrademark;
        const toggleTrademark = document.getElementById('toggle-trademark');
        if (toggleTrademark) {
          toggleTrademark.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.showTrademark ? 'yes' : 'no'));
          });
        }
        const rowTrademark = document.getElementById('row-trademark-text');
        const rowStyle = document.getElementById('row-trademark-style');
        if (rowTrademark) {
          rowTrademark.style.display = this.showTrademark ? 'flex' : 'none';
        }
        if (rowStyle) {
          rowStyle.style.display = this.showTrademark ? 'flex' : 'none';
        }
        if (this.lockTrademarkFooter) {
          this.lockTrademarkFooter.style.display = this.showTrademark ? 'inline-flex' : 'none';
        }
      }
      if (settings.trademarkText !== undefined) {
        this.updateTrademarkText(settings.trademarkText);
      }
      if (settings.trademarkStyle !== undefined) {
        this.applyTrademarkStyle(settings.trademarkStyle);
      }

      // 9. Active Days
      if (Array.isArray(settings.activeDays)) {
        this.activeDays = [...settings.activeDays];
        document.querySelectorAll('.day-toggle').forEach(chk => {
          chk.checked = this.activeDays.includes(chk.value);
        });
      }

      // 10. Hours
      if (settings.gridStartHour && this.gridStartTimeSelect) {
        this.gridStartHour = settings.gridStartHour;
        this.gridStartTimeSelect.value = `${String(this.gridStartHour).padStart(2, '0')}:00`;
      }
      if (settings.gridEndHour && this.gridEndTimeSelect) {
        this.gridEndHour = settings.gridEndHour;
        this.gridEndTimeSelect.value = `${String(this.gridEndHour).padStart(2, '0')}:00`;
      }

      // 11. Axis Mode (Time / Period) & Period Preset
      if (settings.axisMode) {
        this.axisMode = (settings.axisMode === 'both' || settings.axisMode === 'period') ? 'period' : 'time';
        try { localStorage.setItem('schedully_axis_mode', this.axisMode); } catch (e) {}
        document.querySelectorAll('#toggle-axis-mode .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === this.axisMode);
        });
        if (typeof this.updateCourseFormMode === 'function') this.updateCourseFormMode();
      }
      if (settings.gridPeriodCount) {
        this.gridPeriodCount = settings.gridPeriodCount;
        const totalPeriodsSelect = document.getElementById('grid-total-periods-select');
        if (totalPeriodsSelect) totalPeriodsSelect.value = String(this.gridPeriodCount);
      }
      if (settings.selectedOcrPeriodPreset) {
        this.selectedOcrPeriodPreset = settings.selectedOcrPeriodPreset;
        const presetSelect = document.getElementById('grid-period-preset-select');
        if (presetSelect) presetSelect.value = this.selectedOcrPeriodPreset;
      }

      // 12. App-wide Cloud Preferences (Language, Time Mode, Screen Ratio, Device, Lock UI)
      if (settings.language && window.SchedullyI18n && typeof window.SchedullyI18n.setLanguage === 'function') {
        if (window.SchedullyI18n.currentLang !== settings.language) {
          window.SchedullyI18n.setLanguage(settings.language);
        }
      }
      if (settings.timeDisplayMode) {
        this.timeDisplayMode = settings.timeDisplayMode;
        try { localStorage.setItem('schedully_time_display_mode', this.timeDisplayMode); } catch (e) {}
        document.querySelectorAll('.time-mode-btn, #time-display-mode-group button').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-mode') === this.timeDisplayMode);
        });
      }
      if (settings.screenRatio) {
        this.currentScreenRatio = settings.screenRatio;
        try { localStorage.setItem('schedully_screen_ratio', this.currentScreenRatio); } catch (e) {}
        if (typeof this.updateCanvasScreenRatio === 'function') {
          this.updateCanvasScreenRatio();
        }
      }
      if (settings.customHexColors && Array.isArray(settings.customHexColors)) {
        this.customHexColors = [...settings.customHexColors];
      }

      // 13. Card Format & Visibility Toggles
      if (settings.globalCardTimes !== undefined) {
        this.globalCardTimes = settings.globalCardTimes;
        const toggleCardTimes = document.getElementById('toggle-quick-time') || document.getElementById('toggle-card-times');
        if (toggleCardTimes) {
          toggleCardTimes.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCardTimes ? 'yes' : 'no'));
          });
        }
        if (this.quickTimeSubmenu) this.quickTimeSubmenu.classList.toggle('hidden', !this.globalCardTimes);
      }
      if (settings.cardTimeDisplayType) {
        this.cardTimeDisplayType = settings.cardTimeDisplayType;
        const timeTypeGroup = document.getElementById('time-display-mode-group');
        if (timeTypeGroup) {
          timeTypeGroup.querySelectorAll('.time-mode-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-timemode') === this.cardTimeDisplayType);
          });
        }
        if (this.quickTimePreviewBadge) {
          if (this.cardTimeDisplayType === 'both') this.quickTimePreviewBadge.innerText = 'Start & End';
          else if (this.cardTimeDisplayType === 'end') this.quickTimePreviewBadge.innerText = 'End Only';
          else this.quickTimePreviewBadge.innerText = 'Start Only';
        }
      }
      if (settings.globalCourseType !== undefined) {
        this.globalCourseType = settings.globalCourseType;
        const toggleType = document.getElementById('toggle-quick-type');
        if (toggleType) {
          toggleType.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseType ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseRoom !== undefined) {
        this.globalCourseRoom = settings.globalCourseRoom;
        const toggleRoom = document.getElementById('toggle-quick-room');
        if (toggleRoom) {
          toggleRoom.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseRoom ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseLecturer !== undefined) {
        this.globalCourseLecturer = settings.globalCourseLecturer;
        const toggleLecturer = document.getElementById('toggle-quick-lecturer');
        if (toggleLecturer) {
          toggleLecturer.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseLecturer ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseGroup !== undefined) {
        this.globalCourseGroup = settings.globalCourseGroup;
        const toggleGroup = document.getElementById('toggle-quick-group');
        if (toggleGroup) {
          toggleGroup.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseGroup ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalAdaptiveColor !== undefined) {
        this.globalAdaptiveColor = settings.globalAdaptiveColor;
        const toggleAdaptive = document.getElementById('toggle-quick-adaptive');
        if (toggleAdaptive) {
          toggleAdaptive.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalAdaptiveColor ? 'yes' : 'no'));
          });
        }
      }

      this.renderTimetableGrid();
      if (typeof window.syncGlassSliders === 'function') {
        setTimeout(window.syncGlassSliders, 30);
      }
    } catch (e) {
      console.warn("Could not apply preset settings:", e);
    }
  }

  initPresets() {
    if (!this.presets) {
      this.presets = {
        default: { name: 'Default', classes: this.classes || [], settings: this.getPresetSettings(), wallpaper: null, wallpaperSwatches: null }
      };
      this.activePresetKey = 'default';
    }
    this.loadPresetsFromStorage();
    this.setupPresetEvents();
  }

  loadPresetsFromStorage() {
    try {
      const stored = localStorage.getItem('schedully_presets');
      if (stored) {
        this.presets = JSON.parse(stored);
      }
      const active = localStorage.getItem('schedully_active_preset');
      if (active && this.presets[active]) {
        this.activePresetKey = active;
        this.classes = this.presets[active].classes || [];
        if (this.presets[active].settings) {
          this.applyPresetSettings(this.presets[active].settings);
        }
        const activeWallpaper = this.presets[active].wallpaper || null;
        this.currentWallpaperData = activeWallpaper;
        if (activeWallpaper) {
          this.applyWallpaper(activeWallpaper, true, true);
        } else {
          this.removeWallpaper(true);
        }
      }
    } catch (e) {}
    this.updatePresetSelectDropdown();
  }

  updatePresetSelectDropdown() {
    const select = document.getElementById('preset-schedule-select');
    if (!select || !this.presets) return;
    select.innerHTML = '';
    Object.keys(this.presets).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.innerText = this.presets[key].name || key;
      if (key === this.activePresetKey) opt.selected = true;
      select.appendChild(opt);
    });
  }

  setupPresetEvents() {
    const select = document.getElementById('preset-schedule-select');
    if (select) {
      select.addEventListener('change', (e) => {
        const targetKey = e.target.value;
        if (this.presets[targetKey]) {
          // 1. Snapshot and save CURRENT active preset BEFORE switching
          if (this.activePresetKey && this.presets[this.activePresetKey]) {
            this.presets[this.activePresetKey].classes = [...this.classes];
            this.presets[this.activePresetKey].wallpaper = this.currentWallpaperData || this.presets[this.activePresetKey].wallpaper || null;
            this.presets[this.activePresetKey].wallpaperSwatches = this.wallpaperSwatches || null;
            this.presets[this.activePresetKey].settings = this.getPresetSettings();
          }

          // 2. Switch to target preset
          this.activePresetKey = targetKey;
          this.classes = this.presets[targetKey].classes ? [...this.presets[targetKey].classes] : [];

          // 3. Restore Target Preset Settings
          if (this.presets[targetKey].settings) {
            this.applyPresetSettings(this.presets[targetKey].settings);
          }

          // 4. Restore or Remove Wallpaper for target preset
          const targetWallpaper = this.presets[targetKey]?.wallpaper || null;
          this.currentWallpaperData = targetWallpaper;

          if (targetWallpaper) {
            this.applyWallpaper(targetWallpaper, true, true);
            if (this.presets[targetKey].wallpaperSwatches && Array.isArray(this.presets[targetKey].wallpaperSwatches)) {
              this.wallpaperSwatches = this.presets[targetKey].wallpaperSwatches;
              this.classes.forEach((cls, idx) => {
                if (!cls.isManualCustomColor) {
                  cls.customColor = this.wallpaperSwatches[idx % this.wallpaperSwatches.length];
                  cls.color = this.wallpaperSwatches[idx % this.wallpaperSwatches.length];
                }
              });
            }
          } else {
            this.removeWallpaper(true);
          }

          // 5. Update local persistence cleanly without overwriting other presets
          try {
            localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
            localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
            localStorage.setItem('schedully_active_preset', this.activePresetKey);
          } catch (err) {}

          // 6. Debounced auto-save to cloud
          if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);
          this._autoSaveTimer = setTimeout(() => {
            if (window.schedullyFirebase?.currentUser) {
              this.saveToCloud();
            }
          }, 3000);

          this.renderAll();
        }
      });
    }

    // 3-Dot Preset Actions Dropdown Menu
    const btnMenuTrigger = document.getElementById('btn-preset-menu-trigger');
    const menuDropdown = document.getElementById('preset-action-dropdown');
    const menuBtnAdd = document.getElementById('menu-btn-add-preset');
    const menuBtnRename = document.getElementById('menu-btn-rename-preset');
    const menuBtnReset = document.getElementById('menu-btn-reset-preset');
    const menuBtnDelete = document.getElementById('menu-btn-delete-preset');

    if (btnMenuTrigger && menuDropdown) {
      btnMenuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDropdown.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#preset-action-dropdown') && !e.target.closest('#btn-preset-menu-trigger')) {
          menuDropdown.classList.add('hidden');
        }
      });
    }

    if (menuBtnRename) {
      menuBtnRename.addEventListener('click', () => {
        menuDropdown?.classList.add('hidden');
        const currentName = this.presets[this.activePresetKey]?.name || 'Default';
        const newName = prompt("Edit preset name (e.g. Semester 1, Exam Timetable):", currentName);
        if (newName && newName.trim().length > 0) {
          this.presets[this.activePresetKey].name = newName.trim();
          this.updatePresetSelectDropdown();
          this._stagePending();
        }
      });
    }

    if (menuBtnAdd) {
      menuBtnAdd.addEventListener('click', () => {
        menuDropdown?.classList.add('hidden');
        const name = prompt("Enter a name for your new schedule preset (e.g. Semester 2, Exam Schedule):");
        if (name && name.trim().length > 0) {
          // 1. Save current preset snapshot
          if (this.activePresetKey && this.presets[this.activePresetKey]) {
            this.presets[this.activePresetKey].classes = this.classes;
            this.presets[this.activePresetKey].wallpaper = this.currentWallpaperData || this.presets[this.activePresetKey].wallpaper || null;
            this.presets[this.activePresetKey].wallpaperSwatches = this.wallpaperSwatches || null;
            this.presets[this.activePresetKey].settings = this.getPresetSettings();
          }

          const key = 'preset_' + Date.now();
          const freshSettings = {
            tableCornerStyle: 'rounded',
            tableCornerRadiusVal: 8,
            cardCornerStyle: 'rounded',
            cardCornerRadiusVal: 6,
            currentMode: 'light',
            currentPalette: 'nord',
            gridWidthVal: 100,
            gridHeightVal: 49,
            gridYPosVal: 0,
            fontSizeVal: 9,
            clockFormat: '12-hour',
            bgBlurEnabled: false,
            bgBlurIntensity: 10,
            fontFamily: 'default',
            timetableOpacity: 100,
            showTitle: true,
            titleText: 'Untitled',
            activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            gridStartHour: 8,
            gridEndHour: 20
          };

          this.presets[key] = {
            name: name.trim(),
            classes: [],
            wallpaper: null,
            wallpaperSwatches: null,
            settings: freshSettings
          };
          this.activePresetKey = key;
          this.classes = [];

          // FULL RESET: Reset timetable AND reset background/wallpaper and apply fresh settings!
          this.removeWallpaper();
          this.phoneCanvas.style.backgroundColor = '';
          this.applyHeaderColor('');
          this.applyFontColor('');
          this.applyPresetSettings(freshSettings);

          this.updatePresetSelectDropdown();
          this._stagePending();
          this.renderAll();
        }
      });
    }

    // Reset Active Preset
    if (menuBtnReset) {
      menuBtnReset.addEventListener('click', () => {
        menuDropdown?.classList.add('hidden');
        const presetName = this.presets[this.activePresetKey]?.name || 'Active Preset';
        if (confirm(`Reset preset "${presetName}"? This will clear all classes, wallpaper, and restore default styling.`)) {
          this.classes = [];
          this.removeWallpaper();
          this.phoneCanvas.style.backgroundColor = '';
          this.applyHeaderColor('');
          this.applyFontColor('');
          
          const freshSettings = {
            tableCornerStyle: 'rounded',
            tableCornerRadiusVal: 8,
            cardCornerStyle: 'rounded',
            cardCornerRadiusVal: 6,
            currentMode: 'light',
            currentPalette: 'nord',
            gridWidthVal: 100,
            gridHeightVal: 49,
            gridYPosVal: 0,
            fontSizeVal: 9,
            clockFormat: '12-hour',
            bgBlurEnabled: false,
            bgBlurIntensity: 10,
            fontFamily: 'default',
            timetableOpacity: 100,
            showTitle: true,
            titleText: 'Untitled',
            activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            gridStartHour: 8,
            gridEndHour: 20
          };
          this.applyPresetSettings(freshSettings);

          if (this.presets[this.activePresetKey]) {
            this.presets[this.activePresetKey].classes = [];
            this.presets[this.activePresetKey].wallpaper = null;
            this.presets[this.activePresetKey].wallpaperSwatches = null;
            this.presets[this.activePresetKey].settings = freshSettings;
          }

          this._stagePending();
          this.renderAll();
        }
      });
    }

    // Delete Active Preset
    if (menuBtnDelete) {
      menuBtnDelete.addEventListener('click', () => {
        menuDropdown?.classList.add('hidden');
        if (this.activePresetKey === 'default') {
          alert('The "Default" preset cannot be deleted. You can use "Reset Schedule" instead to start fresh.');
          return;
        }

        const presetName = this.presets[this.activePresetKey]?.name || 'this preset';
        if (confirm(`Are you sure you want to delete "${presetName}"?`)) {
          delete this.presets[this.activePresetKey];
          
          // Switch back to default
          this.activePresetKey = 'default';
          if (!this.presets['default']) {
            this.presets['default'] = {
              name: 'Default',
              classes: [],
              wallpaper: null,
              settings: this.getPresetSettings()
            };
          }

          this.classes = this.presets['default'].classes || [];
          if (this.presets['default'].settings) {
            this.applyPresetSettings(this.presets['default'].settings);
          }
          if (this.presets['default'].wallpaper) {
            this.applyWallpaper(this.presets['default'].wallpaper, true);
          } else {
            this.removeWallpaper();
          }

          this.updatePresetSelectDropdown();
          this._stagePending();
          this.renderAll();
        }
      });
    }
  }

  loadFromLocal() {
    try {
      const saved = localStorage.getItem('schedully_classes') || localStorage.getItem('timefactory_classes');
      if (saved) {
        this.classes = JSON.parse(saved);
      }
      const savedAxis = localStorage.getItem('schedully_axis_mode');
      if (savedAxis) {
        this.axisMode = savedAxis;
      }
    } catch (e) {
      console.warn("Could not load classes from local storage", e);
      this.classes = [];
    }
  }

  setupFirebaseIntegration() {
    const btnLogin = document.getElementById('btn-google-login');
    const btnLogout = document.getElementById('btn-google-logout');
    const btnSaveCloud = document.getElementById('btn-save-to-cloud');

    const loggedOutState = document.getElementById('user-logged-out-state');
    const loggedInState = document.getElementById('user-logged-in-state');

    const avatarBadge = document.getElementById('user-avatar-badge');
    const displayNameEl = document.getElementById('user-display-name');
    const statusTextEl = document.getElementById('user-status-text');

    const btnResetCloud = document.getElementById('btn-google-reset-cloud');

    // â”€â”€ Revamped Expandable Login Menu â”€â”€
    const btnToggleLogin = document.getElementById('btn-toggle-login-menu');
    const loginProvidersMenu = document.getElementById('login-providers-menu');
    const loginChevron = document.getElementById('login-chevron');

    if (btnToggleLogin && loginProvidersMenu) {
      btnToggleLogin.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = loginProvidersMenu.classList.toggle('hidden');
        if (loginChevron) {
          loginChevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#user-logged-out-state')) {
          loginProvidersMenu.classList.add('hidden');
          if (loginChevron) loginChevron.style.transform = 'rotate(0deg)';
        }
      });
    }

    // â”€â”€ Revamped Expandable Profile & Account Settings Menu â”€â”€
    const btnToggleProfile = document.getElementById('btn-toggle-profile-menu');
    const profileSettingsMenu = document.getElementById('profile-settings-menu');
    const profileChevron = document.getElementById('profile-chevron');

    if (btnToggleProfile && profileSettingsMenu) {
      btnToggleProfile.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = profileSettingsMenu.classList.toggle('hidden');
        if (profileChevron) {
          profileChevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#user-logged-in-state')) {
          profileSettingsMenu.classList.add('hidden');
          if (profileChevron) profileChevron.style.transform = 'rotate(0deg)';
        }
      });
    }

    if (btnLogin) {
      btnLogin.addEventListener('click', async () => {
        loginProvidersMenu?.classList.add('hidden');
        if (loginChevron) loginChevron.style.transform = 'rotate(0deg)';

        if (!window.schedullyFirebase?.auth) {
          alert("Firebase is not initialized yet. Please check your config.");
          return;
        }
        try {
          await window.schedullyFirebase.loginWithGoogle();
        } catch (err) {
          alert('Google Login error: ' + (err.message || err));
        }
      });
    }

    if (btnResetCloud) {
      btnResetCloud.addEventListener('click', async () => {
        profileSettingsMenu?.classList.add('hidden');
        if (profileChevron) profileChevron.style.transform = 'rotate(0deg)';

        const confirmed = confirm("Are you sure you want to reset your account data in the cloud to fresh defaults? This will clear any broken test presets and classes.");
        if (!confirmed) return;

        const freshSettings = {
          tableCornerStyle: 'rounded',
          tableCornerRadiusVal: 8,
          cardCornerStyle: 'rounded',
          cardCornerRadiusVal: 6,
          currentMode: 'light',
          currentPalette: 'nord',
          gridWidthVal: 100,
          gridHeightVal: 49,
          gridYPosVal: 0,
          fontSizeVal: 9,
          clockFormat: '12-hour',
          bgBlurEnabled: false,
          bgBlurIntensity: 10,
          fontFamily: 'default',
          timetableOpacity: 100,
          showTitle: true,
          titleText: 'Untitled',
          activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          gridStartHour: 8,
          gridEndHour: 20
        };

        // 1. Reset Local Storage
        localStorage.removeItem('schedully_presets');
        localStorage.removeItem('schedully_active_preset');
        localStorage.removeItem('schedully_classes');
        localStorage.removeItem('schedully_wallpaper_data');

        // 2. Reset In-Memory App State
        this.classes = [];
        this.presets = {
          default: { name: 'Default', classes: [], settings: freshSettings, wallpaper: null, wallpaperSwatches: null }
        };
        this.activePresetKey = 'default';
        this.removeWallpaper();
        this.applyPresetSettings(freshSettings);
        this.updatePresetSelectDropdown();
        this.renderAll();

        // 3. Reset Firebase Cloud Data
        if (window.schedullyFirebase?.currentUser) {
          await window.schedullyFirebase.resetUserData(freshSettings);
        }

        this.markSaved();
        alert("Account reset successfully! Fresh default workspace is ready.");
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', async () => {
        profileSettingsMenu?.classList.add('hidden');
        if (profileChevron) profileChevron.style.transform = 'rotate(0deg)';

        await window.schedullyFirebase?.logout();
        if (btnSaveCloud) btnSaveCloud.style.display = 'none';

        // Reset in-memory state and reload offline storage so previous user's data does not linger
        localStorage.removeItem('schedully_presets');
        localStorage.removeItem('schedully_active_preset');
        localStorage.removeItem('schedully_classes');
        localStorage.removeItem('schedully_wallpaper_data');

        this.classes = [];
        this.presets = {
          default: { name: 'Default', classes: [], settings: this.getPresetSettings(), wallpaper: null, wallpaperSwatches: null }
        };
        this.activePresetKey = 'default';
        this.removeWallpaper();
        this.updatePresetSelectDropdown();
        this.renderAll();
      });
    }

    // Listen for Auth state updates
    const initAuthListener = () => {
      if (window.schedullyFirebase) {
        window.schedullyFirebase.onUserChangedCallback = (user) => {
          if (user) {
            if (displayNameEl) displayNameEl.innerText = user.displayName || 'User';
            if (statusTextEl) statusTextEl.innerText = user.email || 'Online';
            if (avatarBadge) {
              if (user.photoURL) {
                avatarBadge.innerHTML = `<img src="${user.photoURL}" class="w-full h-full object-cover" alt="User Avatar" />`;
              } else {
                avatarBadge.innerText = (user.displayName || 'U').charAt(0).toUpperCase();
              }
            }
            if (loggedOutState) loggedOutState.classList.add('hidden');
            if (loggedInState) loggedInState.classList.remove('hidden');
          } else {
            if (loggedOutState) loggedOutState.classList.remove('hidden');
            if (loggedInState) loggedInState.classList.add('hidden');
          }
        };

        // Fires on login (initial load) and whenever cloud data updates
        window.schedullyFirebase.onDataSyncedCallback = (data) => {
          try {
            // Case 1: Brand new user with NO cloud data yet -> Clear local storage & start completely fresh
            if (!data || (!data.presets && !data.classes && !data.settings)) {
              console.log("New user detected (no cloud data) - initializing clean fresh workspace.");
              localStorage.removeItem('schedully_presets');
              localStorage.removeItem('schedully_active_preset');
              localStorage.removeItem('schedully_classes');
              localStorage.removeItem('schedully_wallpaper_data');

              this.classes = [];
              const freshSettings = {
                cardCornerStyle: 'rounded',
                cardCornerRadiusVal: 8,
                currentMode: 'light',
                currentPalette: 'nord',
                gridWidthVal: 100,
                gridHeightVal: 49,
                gridYPosVal: 0,
                fontSizeVal: 9,
                clockFormat: '12-hour',
                bgBlurEnabled: false,
                bgBlurIntensity: 10,
                fontFamily: 'default',
                timetableOpacity: 100,
                showTitle: true,
                titleText: 'Untitled',
                activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                gridStartHour: 8,
                gridEndHour: 20
              };
              this.presets = {
                default: { name: 'Default', classes: [], settings: freshSettings, wallpaper: null, wallpaperSwatches: null }
              };
              this.activePresetKey = 'default';
              this.removeWallpaper();
              this.applyPresetSettings(freshSettings);
              this.updatePresetSelectDropdown();
              this.renderAll();
              this.markSaved();
              return;
            }

            // Case 2: Existing user WITH cloud data -> Restore progress accurately without losing anything!
            if (data.presets && typeof data.presets === 'object') {
              this.presets = data.presets;
              this.updatePresetSelectDropdown();
            }

            if (data.activePreset && this.presets[data.activePreset]) {
              this.activePresetKey = data.activePreset;
              const presetData = this.presets[data.activePreset];
              if (presetData.settings) {
                this.applyPresetSettings(presetData.settings);
              } else if (data.settings) {
                this.applyPresetSettings(data.settings);
              }
              if (presetData.wallpaperSwatches && Array.isArray(presetData.wallpaperSwatches)) {
                this.wallpaperSwatches = presetData.wallpaperSwatches;
              }
              if (presetData.wallpaper) {
                this.applyWallpaper(presetData.wallpaper, true);
                localStorage.setItem('schedully_wallpaper_data', presetData.wallpaper);
              } else {
                this.removeWallpaper();
              }
            } else if (data.settings) {
              this.applyPresetSettings(data.settings);
              if (!data.wallpaper) this.removeWallpaper();
            }

            // Restore schedule classes
            if (Array.isArray(data.classes)) {
              this.classes = data.classes;
            } else if (data.activePreset && this.presets[data.activePreset] && Array.isArray(this.presets[data.activePreset].classes)) {
              this.classes = this.presets[data.activePreset].classes;
            }

            // If wallpaper is active, guarantee wallpaper swatch adaptation is applied
            if (this.phoneCanvas?.classList.contains('has-photo-wallpaper') && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
              this.classes.forEach((cls, idx) => {
                if (!cls.isManualCustomColor) {
                  cls.customColor = this.wallpaperSwatches[idx % this.wallpaperSwatches.length];
                }
              });
            }

            this.renderAll();

            // Cache cloud data into localStorage so offline refresh preserves progress
            localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
            localStorage.setItem('schedully_active_preset', this.activePresetKey);
            localStorage.setItem('schedully_classes', JSON.stringify(this.classes));

            // Silently clear unsaved indicator on load
            this._hasUnsavedCloudChanges = false;
          } catch (syncErr) {
            console.warn("Cloud sync non-fatal error:", syncErr);
          }
        };

        if (window.schedullyFirebase.currentUser) {
          window.schedullyFirebase.onUserChangedCallback(window.schedullyFirebase.currentUser);
        }
      } else {
        setTimeout(initAuthListener, 300);
      }
    };

    initAuthListener();
  }

  getPresetSettings() {
    return {
      tableCornerStyle: this.tableCornerStyle || 'rounded',
      tableCornerRadiusVal: this.tableCornerRadiusVal || 8,
      cardCornerStyle: this.cardCornerStyle || 'rounded',
      cardCornerRadiusVal: this.cardCornerRadiusVal || 8,
      borderStyle: this.borderStyle || 'default',
      currentMode: this.currentMode || 'light',
      currentPalette: this.currentPalette || 'nord',
      customHexColors: this.customHexColors || null,
      gridWidthVal: this.gridWidthVal || 100,
      gridHeightVal: this.gridHeightVal || 49,
      gridYPosVal: this.gridYPosVal || 0,
      fontSizeVal: this.gridFontSizeVal || this.fontSizeVal || 9,
      clockFormat: this.clockFormat || '12-hour',
      bgBlurEnabled: this.bgBlurEnabled || false,
      bgBlurIntensity: this.bgBlurIntensity || 10,
      fontFamily: this.currentFontKey || 'default',
      timetableOpacity: this.timetableOpacity || 100,
      showTitle: this.showTitle !== undefined ? this.showTitle : true,
      titleText: this.timetableTitleText || 'Untitled',
      showTrademark: this.showTrademark || false,
      trademarkText: this.trademarkText || 'Schedully • Student Edition',
      trademarkStyle: this.trademarkStyle || 'default',
      activeDays: this.activeDays ? [...this.activeDays] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      gridStartHour: this.gridStartHour || 8,
      gridEndHour: this.gridEndHour || 20,
      axisMode: this.axisMode || 'time',
      gridPeriodCount: this.gridPeriodCount || 6,
      selectedOcrPeriodPreset: this.selectedOcrPeriodPreset || '90m-900',
      timeDisplayMode: this.timeDisplayMode || localStorage.getItem('schedully_time_display_mode') || 'time',
      screenRatio: this.currentScreenRatio || localStorage.getItem('schedully_screen_ratio') || 'auto',
      activeDevice: this.activeDevice || 'phone',
      showLockUI: this.showLockUI !== undefined ? this.showLockUI : true,
      language: (window.SchedullyI18n ? window.SchedullyI18n.currentLang : (localStorage.getItem('schedully_user_lang') || 'en')),

      // Card Formats & Sub-options
      globalCardTimes: this.globalCardTimes !== undefined ? this.globalCardTimes : true,
      cardTimeDisplayType: this.cardTimeDisplayType || 'start',
      globalCourseType: this.globalCourseType !== undefined ? this.globalCourseType : true,
      globalCourseRoom: this.globalCourseRoom !== undefined ? this.globalCourseRoom : true,
      globalCourseLecturer: this.globalCourseLecturer !== undefined ? this.globalCourseLecturer : true,
      globalCourseGroup: this.globalCourseGroup !== undefined ? this.globalCourseGroup : true,
      globalAdaptiveColor: this.globalAdaptiveColor !== undefined ? this.globalAdaptiveColor : true
    };
  }

  _stagePending() {
    if (!this.presets) this.presets = {};
    if (!this.activePresetKey) this.activePresetKey = 'default';
    const currentSettings = this.getPresetSettings();
    const currentWallpaper = this.currentWallpaperData || this.presets[this.activePresetKey]?.wallpaper || localStorage.getItem('schedully_wallpaper_data') || null;
    this.presets[this.activePresetKey] = {
      name: this.presets[this.activePresetKey]?.name || 'Default',
      classes: this.classes,
      wallpaper: currentWallpaper,
      wallpaperSwatches: this.wallpaperSwatches || null,
      settings: currentSettings
    };

    // Instant local storage write so current browser session never loses data
    try {
      localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
      localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
      localStorage.setItem('schedully_active_preset', this.activePresetKey);
      localStorage.setItem('schedully_axis_mode', this.axisMode || 'time');
    } catch (e) {
      console.warn("Could not save to local storage", e);
    }

    this.markUnsaved();

    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }

    // Smart Debounced Cloud Auto-Save (3-Second Inactivity Timer)
    if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);
    this._autoSaveTimer = setTimeout(() => {
      if (window.schedullyFirebase?.currentUser && this._hasUnsavedCloudChanges) {
        this.saveToCloud();
      }
    }, 3000);
  }

  saveToLocal() {
    try {
      if (!this.presets) this.presets = {};
      if (!this.activePresetKey) this.activePresetKey = 'default';

      const currentWallpaper = this.currentWallpaperData || this.presets[this.activePresetKey]?.wallpaper || localStorage.getItem('schedully_wallpaper_data') || null;
      const currentSettings = this.getPresetSettings();

      this.presets[this.activePresetKey] = {
        name: this.presets[this.activePresetKey]?.name || 'Default',
        classes: this.classes,
        wallpaper: currentWallpaper,
        wallpaperSwatches: this.wallpaperSwatches || null,
        settings: currentSettings
      };

      localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
      localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
      localStorage.setItem('schedully_active_preset', this.activePresetKey);
    } catch (e) {
      console.warn("Could not save to local storage", e);
    }
  }

  saveClasses() {
    this.saveToLocal();
  }

  markUnsaved() {
    if (!window.schedullyFirebase?.currentUser) return;
    this._hasUnsavedCloudChanges = true;
  }

  markSaved() {
    this._hasUnsavedCloudChanges = false;
  }

  // Manually push current data to Firebase cloud
  async saveToCloud() {
    if (!window.schedullyFirebase?.currentUser) return;

    const currentWallpaper = this.currentWallpaperData || this.presets[this.activePresetKey]?.wallpaper || localStorage.getItem('schedully_wallpaper_data') || null;
    const currentSettings = this.getPresetSettings();
    if (this.activePresetKey && this.presets) {
      this.presets[this.activePresetKey] = {
        name: this.presets[this.activePresetKey]?.name || 'Default',
        classes: this.classes,
        wallpaper: currentWallpaper,
        wallpaperSwatches: this.wallpaperSwatches || null,
        settings: currentSettings
      };
    }

    const ok = await window.schedullyFirebase.saveUserData({
      classes: this.classes,
      presets: this.presets,
      activePreset: this.activePresetKey,
      wallpaper: currentWallpaper,
      settings: currentSettings
    });

    if (ok) {
      this.markSaved();
    }
  }
  importClassesDirectly(newEvents) {
    if (!newEvents || newEvents.length === 0) {
       alert("No matching classes found for the selected groups.");
       return;
    }
    
    // Auto-clear previous classes when importing a new file or scan
    this.classes = [];
    
    // Deduplicate against existing classes and within the imported batch
    const makeSig = (c) => {
      const code = (c.code || '').toUpperCase().trim();
      const grp = (c.group || '').toUpperCase().trim();
      const day = (c.day || 'Mon').substring(0, 3);
      const st = (c.startTime || '').trim();
      const et = (c.endTime || '').trim();
      const type = (c.type || '').toUpperCase().trim();
      return `${code}|${grp}|${day}|${st}|${et}|${type}`;
    };

    const existingSigs = new Set(this.classes.map(makeSig));
    const dedupedEvents = [];

    newEvents.forEach(c => {
      const sig = makeSig(c);
      if (!existingSigs.has(sig)) {
        existingSigs.add(sig);
        dedupedEvents.push(c);
      }
    });

    if (dedupedEvents.length === 0) {
      alert("All selected classes are already in your timetable!");
      return;
    }

    // Auto-assign adaptive colors if importing
    const hasWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper');
    const wallpaperSwatches = this.wallpaperSwatches || (this.presets && this.presets[this.activePresetKey]?.wallpaperSwatches);
    const themeColors = document.querySelectorAll('.swatch-dot');
    
    // Build a unique color map by course code so slots for the same course share the same color
    const codeColorMap = {};
    let colorIdx = 0;

    const mapped = dedupedEvents.map((c, i) => {
      if (!codeColorMap[c.code]) {
        if (hasWallpaper && Array.isArray(wallpaperSwatches) && wallpaperSwatches.length > 0) {
          codeColorMap[c.code] = wallpaperSwatches[colorIdx % wallpaperSwatches.length];
        } else if (themeColors.length > 0) {
          codeColorMap[c.code] = themeColors[colorIdx % themeColors.length].getAttribute('data-color');
        } else {
          codeColorMap[c.code] = this.selectedColor;
        }
        colorIdx++;
      }

      return {
        id: Date.now() + i,
        code: c.code,
        title: c.title,
        day: c.day,
        startTime: c.startTime,
        endTime: c.endTime,
        type: c.type || '',
        room: c.room || '',
        lecturer: c.lecturer || '',
        group: c.group || '',
        customColor: codeColorMap[c.code],
        fontColor: this.newCourseFontColor,
        displayTime: this.newCourseDisplayTime
      };
    });

    this.classes.push(...mapped);

    // Auto-adjust grid start & end times so all imported courses are visible
    mapped.forEach(c => {
      if (c.startTime) {
        const [sh] = c.startTime.split(':').map(Number);
        if (!isNaN(sh) && sh < this.gridStartHour) this.gridStartHour = sh;
      }
      if (c.endTime) {
        const [eh, em] = c.endTime.split(':').map(Number);
        const endCeil = (em > 0) ? eh + 1 : eh;
        if (!isNaN(endCeil) && endCeil > this.gridEndHour) this.gridEndHour = Math.min(24, endCeil);
      }
      if (c.day && !this.activeDays.includes(c.day)) {
        this.activeDays.push(c.day);
      }
    });

    if (this.gridStartTimeSelect) {
      this.gridStartTimeSelect.value = `${String(this.gridStartHour).padStart(2, '0')}:00`;
    }
    if (this.gridEndTimeSelect) {
      this.gridEndTimeSelect.value = `${String(this.gridEndHour).padStart(2, '0')}:00`;
    }
    document.querySelectorAll('.day-toggle').forEach(chk => {
      chk.checked = this.activeDays.includes(chk.value);
    });

    this._stagePending();
    this.renderAll();
  }

  handleCSVImportWithOCC(events) {
    if (!events || events.length === 0) {
      alert("No readable classes found in CSV.");
      return;
    }

    // Check if there are multiple OCCs/Groups per Course Code
    const groupedByCode = {};
    events.forEach(e => {
       if (!groupedByCode[e.code]) groupedByCode[e.code] = {};
       const g = e.group || 'Default';
       if (!groupedByCode[e.code][g]) groupedByCode[e.code][g] = [];
       groupedByCode[e.code][g].push(e);
    });

    if (!this.occModalBody || !this.occModal) {
      this.importClassesDirectly(events);
      return;
    }

    let requiresSelection = false;
    let conflictsCount = 0;
    this.occModalBody.innerHTML = '';
    
    for (const [code, groupObj] of Object.entries(groupedByCode)) {
      const groups = Object.keys(groupObj);
      if (groups.length >= 1) {
        requiresSelection = true;
        conflictsCount++;
        
        const row = document.createElement('div');
        row.className = 'occ-course-row';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'occ-course-info';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'occ-course-title';
        // Grab the title from the very first event in this course
        const firstEvent = groupObj[groups[0]][0];
        titleDiv.innerText = firstEvent.title || code;
        
        const codeDiv = document.createElement('div');
        codeDiv.className = 'occ-course-code';
        codeDiv.innerText = code;
        
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(codeDiv);
        row.appendChild(infoDiv);
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'occ-cards-container';
        cardsContainer.setAttribute('data-coursecode', code);
        cardsContainer.addEventListener('wheel', (e) => {
          if (e.deltaY !== 0 && cardsContainer.scrollWidth > cardsContainer.clientWidth) {
            e.preventDefault();
            cardsContainer.scrollLeft += e.deltaY;
          }
        }, { passive: false });
        
        const sortedGroups = groups.sort();
        let isFirst = true;
        
        sortedGroups.forEach(g => {
           const card = document.createElement('div');
           card.className = 'occ-card';
           if (isFirst) {
              card.classList.add('selected');
              isFirst = false;
           }
           card.setAttribute('data-group', g);
           
           const cardTitle = document.createElement('div');
           cardTitle.className = 'occ-card-title';
           cardTitle.innerText = g;
           card.appendChild(cardTitle);
           
           // List all slots for this group
           const slots = groupObj[g];
           slots.forEach(slot => {
              const slotDiv = document.createElement('div');
              slotDiv.className = 'occ-card-slot';
              // Format time to 12-hour
              const formatTime = (t) => {
                 if (!t) return '';
                 const parts = t.split(':');
                 if (parts.length < 2) return t;
                 let h = parseInt(parts[0], 10);
                 const m = parts[1];
                 const ampm = h >= 12 ? 'PM' : 'AM';
                 h = h % 12 || 12;
                 return `${h}:${m} ${ampm}`;
              };
              
              slotDiv.innerHTML = `<strong>${slot.day}</strong>${formatTime(slot.startTime)} - ${formatTime(slot.endTime)}`;
              card.appendChild(slotDiv);
           });
           
           card.addEventListener('click', () => {
              if (card.classList.contains('selected')) {
                 card.classList.remove('selected');
              } else {
                 cardsContainer.querySelectorAll('.occ-card').forEach(c => c.classList.remove('selected'));
                 card.classList.add('selected');
              }
           });
           
           cardsContainer.appendChild(card);
        });
        
        row.appendChild(cardsContainer);
        this.occModalBody.appendChild(row);
      }
    }

    if (requiresSelection) {
       const subtitle = document.getElementById('occ-modal-subtitle');
       if (subtitle) {
         subtitle.innerText = `Please review and select your preferred groups for all ${Object.keys(groupedByCode).length} subjects before importing.`;
       }
       this.pendingCsvClasses = events;

       // Always collapse/close both left and right sidebars on all devices (mobile, tablet, desktop)
       if (typeof this.toggleLeftSidebar === 'function') {
         this.toggleLeftSidebar(true);
       }
       if (typeof this.toggleRightSidebar === 'function') {
         this.toggleRightSidebar(true);
       }

       this.occModal.classList.remove('hidden');
    } else {
       this.importClassesDirectly(events);
    }
  }

  showOcrLanguageModal(courses, detectedLang, isPeriodBased = false) {
    if (!this.ocrLangModal) {
      this.importClassesDirectly(courses);
      return;
    }

    this.pendingOcrResult = { courses, detectedLang, isPeriodBased };

    const langLower = (detectedLang || '').toLowerCase();
    const flagMap = {
      'japanese': '🇯🇵',
      'korean': '🇰🇷',
      'chinese': '🇨🇳',
      'mandarin': '🇨🇳',
      'arabic': '🇸🇦',
      'malay': '🇲🇾',
      'bahasa melayu': '🇲🇾',
      'indonesian': '🇮🇩',
      'bahasa indonesia': '🇮🇩',
      'french': '🇫🇷',
      'german': '🇩🇪',
      'spanish': '🇪🇸',
      'portuguese': '🇵🇹',
      'italian': '🇮🇹',
      'russian': '🇷🇺',
      'thai': '🇹🇭',
      'vietnamese': '🇻🇳',
      'hindi': '🇮🇳',
      'turkish': '🇹🇷'
    };
    const flag = flagMap[langLower] || '🌐';

    if (this.ocrDetectedLangBadge) {
      const typeLabel = isPeriodBased ? '時限 Period System' : 'Schedule Detected';
      this.ocrDetectedLangBadge.innerText = `${flag} ${detectedLang} • ${typeLabel}`;
    }
    if (this.ocrDetectedLangTitle) {
      this.ocrDetectedLangTitle.innerText = `${detectedLang} Timetable Detected`;
    }
    if (this.ocrLangFlagIcon) {
      this.ocrLangFlagIcon.innerText = flag;
    }
    if (this.ocrKeepLangLabel) {
      this.ocrKeepLangLabel.innerText = `Keep ${detectedLang}`;
    }
    if (this.ocrKeepLangDesc) {
      this.ocrKeepLangDesc.innerText = `Original ${detectedLang} characters`;
    }

    // Default Selection State
    this.selectedOcrLangChoice = 'original';
    this.selectedOcrAxisMode = isPeriodBased ? 'period' : 'time';
    this.selectedOcrPeriodPreset = '90m-900';

    // Show the period section always
    if (this.ocrPeriodSection) {
      this.ocrPeriodSection.style.display = 'flex';
    }

    // Reset Segment Highlights — purely via .active class, CSS handles the styling
    const axisButtons = [this.btnAxisPeriod, this.btnAxisTime].filter(Boolean);
    axisButtons.forEach(b => b.classList.remove('active'));
    if (isPeriodBased && this.btnAxisPeriod) {
      this.btnAxisPeriod.classList.add('active');
    } else if (this.btnAxisTime) {
      this.btnAxisTime.classList.add('active');
    }

    // Show/hide preset chips based on initial axis mode
    const presetContainer = document.getElementById('ocr-period-preset-container');
    if (presetContainer) {
      presetContainer.style.display = (this.selectedOcrAxisMode === 'time') ? 'flex' : 'none';
    }

    // Reset preset chip to first (9:00 AM)
    const presetChips = document.querySelectorAll('.period-preset-chip');
    presetChips.forEach(c => c.classList.remove('active'));
    const firstChip = document.querySelector('.period-preset-chip[data-preset="90m-900"]');
    if (firstChip) firstChip.classList.add('active');

    // Collapse sidebars for full focus
    if (typeof this.toggleLeftSidebar === 'function') this.toggleLeftSidebar(true);
    if (typeof this.toggleRightSidebar === 'function') this.toggleRightSidebar(true);

    this.ocrLangModal.classList.remove('hidden');
    this.ocrLangModal.style.display = 'flex';
  }

  openGeminiKeyModal(pendingFile = null) {
    this.pendingScanFile = pendingFile;
    if (this.inputGeminiApiKey) {
      this.inputGeminiApiKey.value = localStorage.getItem('schedully_gemini_api_key') || localStorage.getItem('schedully_api_key') || '';
    }
    if (this.geminiApiKeyModal) {
      this.geminiApiKeyModal.classList.remove('hidden');
      this.geminiApiKeyModal.style.display = 'flex';
    }
    if (typeof this.toggleLeftSidebar === 'function') this.toggleLeftSidebar(true);
    if (typeof this.toggleRightSidebar === 'function') this.toggleRightSidebar(true);
  }

  closeGeminiKeyModal() {
    if (this.geminiApiKeyModal) {
      this.geminiApiKeyModal.classList.add('hidden');
      this.geminiApiKeyModal.style.display = 'none';
    }
  }

  updateGeminiKeyStatusBadge() {
    const key = (
      localStorage.getItem('schedully_gemini_api_key') ||
      localStorage.getItem('schedully_api_key') ||
      ''
    ).trim();
    if (this.geminiKeyStatusLabel) {
      if (key) {
        this.geminiKeyStatusLabel.innerText = "✨ Gemini Connected";
        this.geminiKeyStatusLabel.className = "text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400 truncate";
      } else {
        this.geminiKeyStatusLabel.innerText = "Gemini 2.0/2.5 Ready";
        this.geminiKeyStatusLabel.className = "text-[9.5px] font-semibold text-blue-700 dark:text-blue-300 truncate";
      }
    }
  }

  updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, '0');
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    if (this.lockTime) this.lockTime.innerText = `${formattedHours}:${mins}`;

    const currentLang = window.SchedullyI18n ? window.SchedullyI18n.currentLang : 'en';
    const localeMap = {
      'en': 'en-US',
      'en-slang': 'en-US',
      'fr': 'fr-FR',
      'zh-cn': 'zh-CN',
      'zh-tw': 'zh-TW',
      'ko': 'ko-KR',
      'ja': 'ja-JP',
      'ms': 'ms-MY',
      'id': 'id-ID',
      'es': 'es-ES'
    };
    const locale = localeMap[currentLang] || 'en-US';
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    if (this.lockDate) {
      this.lockDate.innerText = now.toLocaleDateString(locale, options);
    }
  }

  renderAll() {
    const count = this.classes.length;
    this.slotsBadgeCount.innerText = count;

    // Reset clashing state first
    this.classes.forEach(c => c.isClashing = false);

    const clashes = window.timetableEngine.detectClashes(this.classes);
    if (clashes.length > 0 && count > 0 && !this.ignoreClashes) {
      this.clashAlert.classList.remove('hidden');
      this.clashTitle.innerText = `Schedule Conflict Detected (${clashes.length} Overlap)`;
      this.clashDesc.innerText = `${clashes[0].c1.code} and ${clashes[0].c2.code} overlap on ${clashes[0].c1.day} at ${clashes[0].c1.startTime}.`;
      clashes.forEach(pair => {
        pair.c1.isClashing = true;
        pair.c2.isClashing = true;
      });
    } else {
      this.clashAlert.classList.add('hidden');
    }

    this.renderTimetableGrid();
    this.renderClassList();
  }

  renderTimetableGrid() {
    const days = this.activeDays && this.activeDays.length > 0 ? this.activeDays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const isWatch = (this.activeDevice === 'watch');
    const isPhone = (this.activeDevice === 'phone');

    const lockTimeEl = document.getElementById('lock-time');
    if (lockTimeEl && !isWatch) {
      lockTimeEl.style.removeProperty('color');
      lockTimeEl.style.removeProperty('text-shadow');
    }

    const timeColWidth = isWatch ? '28px' : (isPhone ? (days.length >= 6 ? '34px' : '40px') : '48px');
    // Use calc() instead of 1fr or minmax(0, 1fr) because html2canvas has bugs with minmax, 
    // and pure 1fr allows grid tracks to grow beyond container bounds if inner text is too long.
    this.universalTimetableGrid.style.gridTemplateColumns = `${timeColWidth} repeat(${days.length}, calc((100% - ${timeColWidth}) / ${days.length}))`;

    // Master Start Time & End Time (Strictly obeys and overwrites timetable layout settings)
    let effectiveStartHour = parseInt(this.gridStartHour, 10);
    if (isNaN(effectiveStartHour) || effectiveStartHour < 0 || effectiveStartHour > 23) effectiveStartHour = 8;

    let effectiveEndHour = parseInt(this.gridEndHour, 10);
    if (isNaN(effectiveEndHour) || effectiveEndHour < 0 || effectiveEndHour > 23) effectiveEndHour = 20;

    if (effectiveEndHour <= effectiveStartHour) {
      effectiveEndHour = Math.min(23, effectiveStartHour + 4);
    }

    const timetableContainer = document.getElementById('lock-timetable-container');
    if (timetableContainer) {
      timetableContainer.style.width = `${this.gridWidthVal || 100}%`;
      timetableContainer.style.transform = 'none';
      timetableContainer.style.marginTop = `${this.gridYPosVal || 0}px`;
      timetableContainer.style.transition = 'margin-top 0.15s ease, width 0.15s ease, background-color 0.3s ease, border-color 0.3s ease';
        timetableContainer.style.borderRadius = this.tableCornerStyle === 'sharp' ? '0px' : (this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 8) + 'px';
        timetableContainer.style.overflow = 'hidden';
    }

    const timeSlots = [];
    if (this.axisMode === 'period') {
      const maxPeriodFound = Math.max(0, ...this.classes.map(c => c.periodNumber || 0));
      const userPeriodCount = this.gridPeriodCount || 6;
      const periodCount = Math.min(12, Math.max(userPeriodCount, maxPeriodFound));
      
      const currentLang = window.SchedullyI18n ? window.SchedullyI18n.currentLang : 'ja';
      const periodSuffix = (currentLang === 'ja') ? '限' : (currentLang === 'ko' ? '교시' : (currentLang === 'zh-cn' || currentLang === 'zh-tw' ? '节' : ''));
      
      const activePresetKey = this.selectedOcrPeriodPreset || '90m-900';
      const periodSchedules = {
        '90m-900': {
          1: { start: '09:00', end: '10:30' },
          2: { start: '10:40', end: '12:10' },
          3: { start: '13:00', end: '14:30' },
          4: { start: '14:40', end: '16:10' },
          5: { start: '16:20', end: '17:50' },
          6: { start: '18:00', end: '19:30' },
          7: { start: '19:40', end: '21:10' }
        },
        '90m-850': {
          1: { start: '08:50', end: '10:20' },
          2: { start: '10:30', end: '12:00' },
          3: { start: '12:50', end: '14:20' },
          4: { start: '14:30', end: '16:00' },
          5: { start: '16:10', end: '17:40' },
          6: { start: '17:50', end: '19:20' },
          7: { start: '19:30', end: '21:00' }
        },
        '50m-school': {
          1: { start: '08:30', end: '09:20' },
          2: { start: '09:30', end: '10:20' },
          3: { start: '10:40', end: '11:30' },
          4: { start: '11:40', end: '12:30' },
          5: { start: '13:30', end: '14:20' },
          6: { start: '14:30', end: '15:20' },
          7: { start: '15:30', end: '16:20' }
        }
      };

      const defaultSchedule = periodSchedules[activePresetKey] || periodSchedules['90m-900'];

      for (let p = 1; p <= periodCount; p++) {
        const slotData = defaultSchedule[p] || { start: `${p + 8}:00`, end: `${p + 9}:30` };
        const label = periodSuffix ? `${p}${periodSuffix}` : `${p}`;
        timeSlots.push({
          period: p,
          hour: parseInt(slotData.start.split(':')[0], 10),
          topText: label,
          bottomText: '',
          isPeriod: true
        });
      }
    } else {
      for (let h = effectiveStartHour; h <= effectiveEndHour; h++) {
        if (this.clockFormat === '24') {
          timeSlots.push({
            hour: h,
            topText: `${String(h).padStart(2, '0')}:00`,
            bottomText: ''
          });
        } else {
          const displayH = h > 12 ? h - 12 : h;
          const ampm = h >= 12 ? 'PM' : 'AM';
          timeSlots.push({
            hour: h,
            topText: `${String(displayH).padStart(2, '0')}:00`,
            bottomText: ampm
          });
        }
      }
    }

    const baseRowH = this.gridHeightVal || 49;
    const numSlots = timeSlots.length;
    let rowH = baseRowH;

    if (this.activeDevice === 'tablet') {
      const maxAvailableH = 430;
      if (numSlots * baseRowH > maxAvailableH) {
        rowH = Math.max(22, Math.floor(maxAvailableH / numSlots));
      }
    } else if (this.activeDevice === 'watch') {
      const maxAvailableH = 205;
      rowH = Math.max(16, Math.floor(maxAvailableH / numSlots));
    } else if (this.activeDevice === 'phone') {
      const maxAvailableH = 510;
      if (numSlots * baseRowH > maxAvailableH) {
        rowH = Math.max(24, Math.floor(maxAvailableH / numSlots));
      }
    }

    this.universalTimetableGrid.innerHTML = '';

    const corner = document.createElement('div');
    corner.className = 'exact-grid-cell-header';
    corner.innerText = '';
    this.universalTimetableGrid.appendChild(corner);

    days.forEach(d => {
      const headerCell = document.createElement('div');
      headerCell.className = 'exact-grid-cell-header';
      headerCell.innerText = window.SchedullyI18n ? window.SchedullyI18n.getDayName(d) : d;
      this.universalTimetableGrid.appendChild(headerCell);
    });

    timeSlots.forEach(tObj => {
      const timeCell = document.createElement('div');
      timeCell.className = 'exact-grid-cell-time';
      timeCell.style.height = `${rowH}px`;
      timeCell.style.boxSizing = 'border-box';
      timeCell.innerHTML = `<span>${tObj.topText}</span>${tObj.bottomText ? `<span>${tObj.bottomText}</span>` : ''}`;
      this.universalTimetableGrid.appendChild(timeCell);

      days.forEach(day => {
        const slotCell = document.createElement('div');
        slotCell.className = 'exact-grid-cell-slot';
        slotCell.style.height = `${rowH}px`;
        slotCell.style.minHeight = '0';
        slotCell.style.boxSizing = 'border-box';

        slotCell.style.position = 'relative';

        const matchesInCell = this.classes.filter(c => {
          const dayMatch = c.day.toLowerCase().startsWith(day.toLowerCase());
          if (tObj.isPeriod) {
            if (c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber > 0) {
              return dayMatch && (c.periodNumber === tObj.period);
            }
          }
          const [sh] = c.startTime.split(':').map(Number);
          return dayMatch && (sh === tObj.hour);
        });

        matchesInCell.forEach((matched, idx) => {
          const totalInCell = matchesInCell.length;
          const leftPercent = (idx / totalInCell) * 100;
          const widthPercent = 100 / totalInCell;

          const [sh, sm] = matched.startTime.split(':').map(Number);
          const [eh, em] = matched.endTime.split(':').map(Number);

          const startTotalM = (sh * 60) + (sm || 0);
          const endTotalM = (eh * 60) + (em || 0);
          const durationM = Math.max(15, endTotalM - startTotalM);

          const topPercent = tObj.isPeriod ? 0 : (((sm || 0) / 60) * 100);
          const durationHours = tObj.isPeriod ? 1 : (durationM / 60);

          // Adaptive Color Palette Rotation (Wallpaper Swatches or Theme Palette)
          const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          const modeKey = (this.currentMode === 'auto' ? (isDark ? 'dark' : 'light') : this.currentMode);
          const paletteGroup = THEME_PALETTES[modeKey] || THEME_PALETTES.light;
          const activePalette = paletteGroup[this.currentPalette] || paletteGroup.indigo;
          const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
          const activeWallpaperSwatches = (this.wallpaperSwatches && this.wallpaperSwatches.length > 0)
            ? this.wallpaperSwatches
            : (this.presets && this.presets[this.activePresetKey]?.wallpaperSwatches);
          const courseSwatches = (hasPhotoWallpaper && activeWallpaperSwatches && activeWallpaperSwatches.length > 0)
            ? activeWallpaperSwatches
            : (activePalette.courseSwatches || ['#1D4ED8', '#2563EB', '#3B82F6', '#10B981']);

          const uniqueCodes = [...new Set((this.classes || []).map(item => item.code))];
          const codeIdx = uniqueCodes.indexOf(matched.code);
          const matchIdx = this.classes.indexOf(matched);
          const colorIdx = codeIdx >= 0 ? codeIdx : matchIdx;
          const adaptiveBg = courseSwatches[colorIdx % courseSwatches.length] || '#3B82F6';
          // When Adaptive Color is YES: Use adaptive theme/wallpaper palette without overwriting customColor
          // When Adaptive Color is NO: Use user's manual/random customColor
          const effectiveBg = (this.globalAdaptiveColor !== false)
            ? adaptiveBg
            : (matched.customColor || adaptiveBg);

          // Smart Auto-Contrast Font Color for Card Text (Manual fontColor is the BOSS)
          const autoContrastFont = this.getContrastColor(effectiveBg);
          const customFontOverride = (this.userHasPickedFontColor && this.customFontColor) ? this.customFontColor : null;
          const textColor = matched.fontColor || customFontOverride || autoContrastFont;

          const cardStyle = (matched.isClashing && !this.ignoreClashes)
            ? 'background: #F43F5E !important; color: #FFFFFF !important;'
            : `background: ${effectiveBg}; color: ${textColor};`;
          
          let formatStart = matched.startTime;
          let formatEnd = matched.endTime;
          if (this.clockFormat === '12') {
            const displaySh = sh > 12 ? sh - 12 : (sh === 0 ? 12 : sh);
            const displayEh = eh > 12 ? eh - 12 : (eh === 0 ? 12 : eh);
            formatStart = `${String(displaySh).padStart(2, '0')}:${String(sm || 0).padStart(2, '0')} ${sh >= 12 ? 'PM' : 'AM'}`;
            formatEnd = `${String(displayEh).padStart(2, '0')}:${String(em || 0).padStart(2, '0')} ${eh >= 12 ? 'PM' : 'AM'}`;
          }

          // Compute exact pixel height based on duration ratio
          const cardHeightPx = Math.max(16, durationHours * rowH);

          // Course-level time display and format configuration (Individual Course is the Boss)
          const shouldShowTime = (matched.displayTime !== undefined) ? matched.displayTime : this.globalCardTimes;
          const courseTimeMode = matched.timeFormat || this.cardTimeDisplayType || 'start';

          // Count active text lines per card
          let lineCount = 1;
          const isShortCard = (cardHeightPx < 22);
          if (!isShortCard) {
            if (this.globalCourseType && matched.type) lineCount++;
            if (this.globalCourseRoom && matched.room) lineCount++;
            if (this.globalCourseLecturer && matched.lecturer) lineCount++;
            if (this.globalCourseGroup && matched.group) lineCount++;
            if (shouldShowTime) lineCount += (courseTimeMode === 'both' ? 2 : 1);
          }

          // Dynamically compute adaptive max font size based on cell height
          const numDays = days.length;
          const isWatch = (this.activeDevice === 'watch');
          const isPhone = (this.activeDevice === 'phone');
          const widthScale = (this.gridWidthVal || 100) / 100;
          
          const fontFactor = isWatch ? 28 : (isPhone ? (widthScale < 0.8 ? 38 : 46) : 60);
          const maxAdaptiveFont = Math.min(16, Math.max(4.5, Math.round(fontFactor / numDays)));
          const heightAdaptiveFont = Math.min(16, Math.max(4.5, Math.floor(cardHeightPx / (lineCount * 1.2))));
          const effectiveMaxFont = Math.min(maxAdaptiveFont, heightAdaptiveFont);

          const codeFontSize = isWatch
            ? Math.min(7.5, Math.max(5.5, effectiveMaxFont))
            : Math.max(8.0, Math.min(this.gridFontSizeVal || 9, effectiveMaxFont));
          const detailFontSize = isWatch
            ? Math.min(6.5, Math.max(4.8, codeFontSize - 0.8))
            : Math.max(7.0, codeFontSize - 1.0);

          let timeDisplayText = formatStart;
          if (courseTimeMode === 'both') {
            timeDisplayText = `${formatStart} - ${formatEnd}`;
          } else if (courseTimeMode === 'end') {
            timeDisplayText = formatEnd;
          }

          const cardContentHTML = isShortCard ? `
            <div class="exact-card-code" style="font-size: ${codeFontSize}px; font-weight: 800; line-height: 1.1; color: inherit;">${matched.code}</div>
          ` : `
            <div class="exact-card-code" style="font-size: ${codeFontSize}px; font-weight: 800; line-height: 1.15; color: inherit;">${matched.code}</div>
            ${this.globalCourseType && matched.type ? `<div class="exact-card-type" style="font-size: ${detailFontSize}px; font-style: italic; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.type}</div>` : ''}
            ${this.globalCourseRoom && matched.room ? `<div class="exact-card-room" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.room}</div>` : ''}
            ${this.globalCourseLecturer && matched.lecturer ? `<div class="exact-card-lecturer" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.lecturer}</div>` : ''}
            ${this.globalCourseGroup && matched.group ? `<div class="exact-card-group" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.group}</div>` : ''}
            ${shouldShowTime ? `<div class="exact-card-time" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${timeDisplayText}</div>` : ''}
          `;

          const cardElement = document.createElement('div');
          cardElement.className = 'exact-course-card';
          cardElement.title = `${matched.title} (${matched.type || ''} - ${matched.room || ''})`;
          cardElement.style.cssText = `
            ${cardStyle}
            position: absolute;
            top: ${topPercent}%;
            left: ${leftPercent}%;
            width: ${widthPercent}%;
            height: ${cardHeightPx}px;
            z-index: 5;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2px 3px;
            overflow: hidden;
            border-radius: ${this.cardCornerStyle === 'sharp' ? '0px' : (this.cardCornerRadiusVal !== undefined ? this.cardCornerRadiusVal : 6) + 'px'};
          `;
          cardElement.innerHTML = cardContentHTML;
          slotCell.appendChild(cardElement);
        });

        this.universalTimetableGrid.appendChild(slotCell);
      });
    });

    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }

    if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
      this.renderWatchGlance();
    }
  }

  renderWatchGlance(selectedDay = null) {
    const listContainer = document.getElementById('watch-cards-list');
    if (!listContainer) return;

    if (!selectedDay) {
      const activePill = document.querySelector('.watch-day-pill.active');
      selectedDay = activePill ? activePill.getAttribute('data-day') : 'Mon';
    }

    // Default watch feature settings
    if (this.watchAccentColor === undefined) this.watchAccentColor = 'cyan';
    if (this.watchShowRoom === undefined) this.watchShowRoom = true;
    if (this.watchShowType === undefined) this.watchShowType = true;

    const accentMap = {
      cyan: { hex: '#38BDF8', glow: 'rgba(56, 189, 248, 0.55)' },
      orange: { hex: '#FB923C', glow: 'rgba(251, 146, 60, 0.55)' },
      emerald: { hex: '#34D399', glow: 'rgba(52, 211, 153, 0.55)' },
      purple: { hex: '#C084FC', glow: 'rgba(192, 132, 252, 0.55)' },
      rose: { hex: '#FB7185', glow: 'rgba(251, 113, 133, 0.55)' },
      white: { hex: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.55)' }
    };
    const activeAccent = accentMap[this.watchAccentColor] || accentMap.cyan;

    // Apply accent glow to watch clock only when in watch mode, reset completely on phone/tablet
    const lockTime = document.getElementById('lock-time');
    if (lockTime) {
      if (this.activeDevice === 'watch') {
        lockTime.style.color = activeAccent.hex;
        lockTime.style.textShadow = `0 0 16px ${activeAccent.glow}`;
      } else {
        lockTime.style.removeProperty('color');
        lockTime.style.removeProperty('text-shadow');
      }
    }

    // Filter classes for selected day
    const dayClasses = (this.classes || [])
      .filter(c => c.day && c.day.toLowerCase().startsWith(selectedDay.toLowerCase()))
      .sort((a, b) => {
        const [ah, am] = (a.startTime || '00:00').split(':').map(Number);
        const [bh, bm] = (b.startTime || '00:00').split(':').map(Number);
        return (ah * 60 + (am || 0)) - (bh * 60 + (bm || 0));
      });

    listContainer.innerHTML = '';
    const classCount = dayClasses.length;

    if (classCount === 0) {
      const pageSelector = document.getElementById('watch-page-selector');
      if (pageSelector) pageSelector.classList.add('hidden');
      listContainer.className = `watch-cards-list density-0`;
      listContainer.innerHTML = `
        <div class="watch-empty-state">
          <div class="watch-empty-pill">Free Schedule</div>
          <div style="font-weight: 800; font-size: 13px; color: #0F172A;">No Classes on ${selectedDay}</div>
          <div style="font-size: 10px; opacity: 0.7; color: #475569;">Enjoy your study break</div>
        </div>
      `;
      return;
    }

    // Dynamic Pagination for Heavy Schedules (Curved dials: Round & Capsule paginate at 3 for optimal aesthetics)
    const isCurvedDial = this.phoneCanvas?.classList.contains('watch-shape-capsule') || this.phoneCanvas?.classList.contains('watch-shape-round');
    const maxPerWatchPage = isCurvedDial ? 3 : 4;
    const totalPages = Math.ceil(classCount / maxPerWatchPage);
    if (!this.currentWatchPage || this.currentWatchPage > totalPages) {
      this.currentWatchPage = 1;
    }

    const pageSelector = document.getElementById('watch-page-selector');
    if (pageSelector) {
      if (totalPages > 1) {
        pageSelector.classList.remove('hidden');
        pageSelector.innerHTML = '';
        for (let p = 1; p <= totalPages; p++) {
          const pagePill = document.createElement('button');
          pagePill.className = `watch-page-pill${p === this.currentWatchPage ? ' active' : ''}`;
          pagePill.setAttribute('data-page', p);
          pagePill.innerText = p;
          pagePill.title = `Page ${p}`;
          pagePill.addEventListener('click', (e) => {
            e.stopPropagation();
            this.currentWatchPage = p;
            this.renderWatchGlance(selectedDay);
          });
          pageSelector.appendChild(pagePill);
        }
      } else {
        pageSelector.classList.add('hidden');
      }
    }

    const startIdx = (this.currentWatchPage - 1) * maxPerWatchPage;
    const displayedClasses = (totalPages > 1)
      ? dayClasses.slice(startIdx, startIdx + maxPerWatchPage)
      : dayClasses;

    listContainer.className = `watch-cards-list density-${Math.min(displayedClasses.length, 4)}`;

    // Adaptive Theme Palette / Wallpaper Swatches
    const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper');
    const isAppDark = document.body.classList.contains('dark-mode') || 
                      document.documentElement.classList.contains('dark') || 
                      this.currentMode === 'dark' || 
                      (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isDark = isAppDark; // Synchronized directly with user's Light / Dark mode preference
    const modeKey = isAppDark ? 'dark' : 'light';
    const paletteGroup = THEME_PALETTES[modeKey] || THEME_PALETTES.light;
    const activePalette = paletteGroup[this.currentPalette] || paletteGroup.indigo;
    const courseSwatches = (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0)
      ? this.wallpaperSwatches
      : (activePalette.courseSwatches || ['#0284C7', '#818CF8', '#34D399', '#F472B6']);

    const primaryAdaptive = (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0)
      ? this.wallpaperSwatches[0]
      : (activePalette.primary || courseSwatches[0] || '#38BDF8');

    let pr = 56, pg = 189, pb = 248;
    if (primaryAdaptive.startsWith('#') && primaryAdaptive.length === 7) {
      pr = parseInt(primaryAdaptive.slice(1, 3), 16) || 56;
      pg = parseInt(primaryAdaptive.slice(3, 5), 16) || 189;
      pb = parseInt(primaryAdaptive.slice(5, 7), 16) || 248;
    }

    const selectorContainer = document.getElementById('watch-day-selector');
    if (selectorContainer) {
      selectorContainer.style.setProperty('--watch-primary-accent', primaryAdaptive);
      if (!hasPhotoWallpaper) {
        selectorContainer.style.background = activePalette.surface || (isDark ? '#111827' : '#FFFFFF');
        selectorContainer.style.borderColor = activePalette.outline || (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)');
      }
    }
    if (pageSelector) {
      pageSelector.style.setProperty('--watch-primary-accent', primaryAdaptive);
      if (!hasPhotoWallpaper) {
        pageSelector.style.background = activePalette.surface || (isDark ? '#111827' : '#FFFFFF');
        pageSelector.style.borderColor = activePalette.outline || (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)');
      }
    }
    if (this.phoneCanvas) {
      this.phoneCanvas.style.setProperty('--watch-primary-accent', primaryAdaptive);
      if (!hasPhotoWallpaper) {
        this.phoneCanvas.style.background = activePalette.bg || (isDark ? '#0B0F19' : '#F0F4FA');
      }
    }

    const uniqueCodes = [...new Set((this.classes || []).map(item => item.code))];
    displayedClasses.forEach((c, idx) => {
      const codeIdx = uniqueCodes.indexOf(c.code);
      const matchIdx = this.classes.indexOf(c);
      const colorIdx = codeIdx >= 0 ? codeIdx : matchIdx;
      
      // Color handling: Adaptive Palette vs Custom / Randomized Color
      const accent = (this.globalAdaptiveColor !== false)
        ? (courseSwatches[colorIdx % courseSwatches.length] || primaryAdaptive)
        : (c.customColor || courseSwatches[colorIdx % courseSwatches.length] || '#6366F1');
      
      // Time Formatting (Start Only, Start & End, End Only, or Off)
      let showTime = (this.globalCardTimes !== false && c.displayTime !== false);
      let timeBoxHtml = '';
      if (showTime) {
        let formatStart = c.startTime || '00:00';
        let formatEnd = c.endTime || '00:00';
        if (this.clockFormat === '12') {
          const [sh, sm] = (c.startTime || '00:00').split(':').map(Number);
          const [eh, em] = (c.endTime || '00:00').split(':').map(Number);
          const displaySh = sh > 12 ? sh - 12 : (sh === 0 ? 12 : sh);
          const displayEh = eh > 12 ? eh - 12 : (eh === 0 ? 12 : eh);
          formatStart = `${String(displaySh).padStart(2, '0')}:${String(sm || 0).padStart(2, '0')}`;
          formatEnd = `${String(displayEh).padStart(2, '0')}:${String(em || 0).padStart(2, '0')}`;
        }
        
        let periodNum = (c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber > 0) ? c.periodNumber : null;
        if (!periodNum && c.startTime) {
          const [sh, sm] = (c.startTime || '00:00').split(':').map(Number);
          const startM = (sh * 60) + (sm || 0);
          
          const activePresetKey = this.selectedOcrPeriodPreset || '90m-900';
          const periodSchedules = {
            '90m-900': {
              1: { startM: 9 * 60, endM: 10 * 60 + 30 },
              2: { startM: 10 * 60 + 40, endM: 12 * 60 + 10 },
              3: { startM: 13 * 60, endM: 14 * 60 + 30 },
              4: { startM: 14 * 60 + 40, endM: 16 * 60 + 10 },
              5: { startM: 16 * 60 + 20, endM: 17 * 60 + 50 },
              6: { startM: 18 * 60, endM: 19 * 60 + 30 },
              7: { startM: 19 * 60 + 40, endM: 21 * 60 + 10 }
            },
            '90m-850': {
              1: { startM: 8 * 60 + 50, endM: 10 * 60 + 20 },
              2: { startM: 10 * 60 + 30, endM: 12 * 60 },
              3: { startM: 12 * 60 + 50, endM: 14 * 60 + 20 },
              4: { startM: 14 * 60 + 30, endM: 16 * 60 },
              5: { startM: 16 * 60 + 10, endM: 17 * 60 + 40 },
              6: { startM: 17 * 60 + 50, endM: 19 * 60 + 20 },
              7: { startM: 19 * 60 + 30, endM: 21 * 60 }
            },
            '50m-school': {
              1: { startM: 8 * 60, endM: 8 * 60 + 50 },
              2: { startM: 9 * 60, endM: 9 * 60 + 50 },
              3: { startM: 10 * 60 + 10, endM: 11 * 60 },
              4: { startM: 11 * 60 + 10, endM: 12 * 60 },
              5: { startM: 13 * 60 + 30, endM: 14 * 60 + 20 },
              6: { startM: 14 * 60 + 30, endM: 15 * 60 + 20 },
              7: { startM: 15 * 60 + 40, endM: 16 * 60 + 30 },
              8: { startM: 16 * 60 + 40, endM: 17 * 60 + 30 },
              9: { startM: 18 * 60 + 30, endM: 19 * 60 + 20 },
              10: { startM: 19 * 60 + 30, endM: 20 * 60 + 20 },
              11: { startM: 20 * 60 + 30, endM: 21 * 60 + 20 },
              12: { startM: 21 * 60 + 30, endM: 22 * 60 + 20 }
            }
          };

          const activeSched = periodSchedules[activePresetKey] || periodSchedules['90m-900'];
          for (const [p, slot] of Object.entries(activeSched)) {
            if (Math.abs(startM - slot.startM) <= 35 || (startM >= slot.startM - 15 && startM <= slot.endM)) {
              periodNum = parseInt(p, 10);
              break;
            }
          }
          if (!periodNum) {
            let closestP = 1;
            let closestDiff = Infinity;
            for (const [p, slot] of Object.entries(activeSched)) {
              const diff = Math.abs(startM - slot.startM);
              if (diff < closestDiff) {
                closestDiff = diff;
                closestP = parseInt(p, 10);
              }
            }
            periodNum = closestP;
          }
        }
        if (!periodNum) {
          const allDayIndex = (dayClasses && dayClasses.indexOf(c) >= 0) ? dayClasses.indexOf(c) : (startIdx + idx);
          periodNum = allDayIndex + 1;
        }

        let timeContentHtml = '';
        if (this.axisMode === 'period') {
          const fontSize = (periodNum >= 10) ? '9px' : '11px';
          timeContentHtml = `
            <span class="watch-card-time-num" style="font-size: ${fontSize}; font-weight: 900; letter-spacing: -0.02em;">P${periodNum}</span>
          `;
        } else {
          const mode = this.cardTimeDisplayType || 'start';
          if (mode === 'both') {
            timeContentHtml = `
              <span class="watch-card-time-num" style="font-size: 8px; line-height: 1;">${formatStart}</span>
              <span class="watch-time-sep">to</span>
              <span class="watch-card-time-num" style="font-size: 8px; line-height: 1;">${formatEnd}</span>
            `;
          } else if (mode === 'end') {
            timeContentHtml = `
              <div class="watch-card-time-icon">
                <svg width="9.5" height="9.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <span class="watch-card-time-num">${formatEnd}</span>
            `;
          } else {
            timeContentHtml = `
              <div class="watch-card-time-icon">
                <svg width="9.5" height="9.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <span class="watch-card-time-num">${formatStart}</span>
            `;
          }
        }

        timeBoxHtml = `
          <div class="watch-card-time-box">
            ${timeContentHtml}
          </div>
        `;
      }

      // Type Badge (Top Right)
      let typeBadgeHtml = '';
      if (this.globalCourseType !== false && c.type) {
        const isSeminar = c.type.toLowerCase().includes('seminar') || c.type.toLowerCase().includes('group');
        const iconSvg = isSeminar
          ? `<svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
          : `<svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
        typeBadgeHtml = `<span class="watch-type-badge">${iconSvg} ${c.type}</span>`;
      }

      // Location / Venue Badge (Row 2)
      let venueBadgeHtml = '';
      if (this.globalCourseRoom !== false && c.room) {
        const isOnline = c.room.toLowerCase().includes('online') || c.room.toLowerCase().includes('web') || c.room.toLowerCase().includes('zoom');
        const venueIcon = isOnline
          ? `<svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
          : `<svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`;
        venueBadgeHtml = `<span class="watch-venue-badge">${venueIcon} ${c.room}</span>`;
      }

      // Submeta: Group / Lecturer (Row 3)
      const submetaItems = [];
      if (this.globalCourseGroup !== false && (c.group || c.section)) {
        submetaItems.push(`
          <span class="watch-submeta-item">
            <svg width="7.5" height="7.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${c.group || c.section}
          </span>
        `);
      }
      if (this.globalCourseLecturer !== false && c.lecturer) {
        submetaItems.push(`
          <span class="watch-submeta-item">
            <svg width="7.5" height="7.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${c.lecturer}
          </span>
        `);
      }

      const submetaHtml = submetaItems.length > 0
        ? `<div class="watch-card-submeta">${submetaItems.join('')}</div>`
        : '';

      let r = 99, g = 102, b = 241;
      if (accent.startsWith('#') && accent.length === 7) {
        r = parseInt(accent.slice(1, 3), 16) || 99;
        g = parseInt(accent.slice(3, 5), 16) || 102;
        b = parseInt(accent.slice(5, 7), 16) || 241;
      }
      // Material Design 3 Solid Surface Containers (100% Solid Non-Glass)
      const accentBg = isDark ? `rgba(${r}, ${g}, ${b}, 0.25)` : `rgba(${r}, ${g}, ${b}, 0.16)`;
      const accentBorder = isDark ? `rgba(${r}, ${g}, ${b}, 0.45)` : `rgba(${r}, ${g}, ${b}, 0.28)`;
      const cardBgSolid = isDark ? '#1E293B' : '#FFFFFF';

      // Adaptive Content Density: Adjust vertical layout dynamically based on which fields are present/missing
      const hasRoom = Boolean(venueBadgeHtml);
      const hasSubmeta = Boolean(submetaHtml);
      const lineCount = 1 + (hasRoom ? 1 : 0) + (hasSubmeta ? 1 : 0);
      const metaDensityClass = (lineCount === 1) ? 'meta-title-only' : ((lineCount === 2) ? 'meta-two-lines' : 'meta-full');

      const card = document.createElement('div');
      card.className = `watch-glance-card ${isDark ? 'card-dark' : 'card-light'} ${metaDensityClass}`;
      card.style.setProperty('--card-accent-color', accent);
      card.style.setProperty('--card-accent-bg', accentBg);
      card.style.setProperty('--card-accent-border', accentBorder);
      card.style.setProperty('--card-bg-gradient', cardBgSolid);
      card.style.setProperty('--card-accent-glow', 'none');
      card.innerHTML = `
        <div class="watch-card-accent-bar"></div>
        ${timeBoxHtml}
        <div class="watch-card-content">
          <div class="watch-card-title-row">
            <div class="watch-card-title">${c.code} ${c.title ? `• ${c.title}` : ''}</div>
            ${typeBadgeHtml}
          </div>
          ${venueBadgeHtml}
          ${submetaHtml}
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  setupWatchGlanceEvents() {
    const selectorContainer = document.getElementById('watch-day-selector');
    if (selectorContainer) {
      const days = (this.activeDays && this.activeDays.length > 0) ? this.activeDays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      
      const currentActivePill = selectorContainer.querySelector('.watch-day-pill.active');
      const prevDay = currentActivePill ? currentActivePill.getAttribute('data-day') : null;
      const activeDay = (prevDay && days.includes(prevDay)) ? prevDay : days[0];

      selectorContainer.innerHTML = '';
      days.forEach(d => {
        const pill = document.createElement('button');
        pill.className = `watch-day-pill${d === activeDay ? ' active' : ''}`;
        pill.setAttribute('data-day', d);
        pill.innerText = d.charAt(0);
        pill.title = d;
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          selectorContainer.querySelectorAll('.watch-day-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.currentWatchPage = 1;
          this.renderWatchGlance(d);
        });
        selectorContainer.appendChild(pill);
      });
    }
  }

  requestGridRender() {
    if (this._gridRenderPending) return;
    this._gridRenderPending = true;
    requestAnimationFrame(() => {
      this._gridRenderPending = false;
      this.renderTimetableGrid();
    });
  }

  updateCourseFormMode() {
    const isPeriod = (this.axisMode === 'period');
    const activePresetKey = this.selectedOcrPeriodPreset || '90m-900';
    const is50m = (activePresetKey === '50m-school');
    const maxAllowedPeriods = is50m ? 12 : 7;
    const minAllowedPeriods = 4;

    // Clamp gridPeriodCount if switching from 50m to 90m
    if (this.gridPeriodCount > maxAllowedPeriods) {
      this.gridPeriodCount = maxAllowedPeriods;
    } else if (this.gridPeriodCount < minAllowedPeriods) {
      this.gridPeriodCount = minAllowedPeriods;
    }

    // 1. Update #grid-total-periods-select dropdown options dynamically based on preset
    const totalPeriodsSelect = document.getElementById('grid-total-periods-select');
    if (totalPeriodsSelect) {
      let optHtml = '';
      for (let count = minAllowedPeriods; count <= maxAllowedPeriods; count++) {
        optHtml += `<option value="${count}" ${count === (this.gridPeriodCount || 6) ? 'selected' : ''}>${count} Periods</option>`;
      }
      totalPeriodsSelect.innerHTML = optHtml;
      totalPeriodsSelect.value = String(this.gridPeriodCount || 6);
    }

    // 2. Add Course Form Rows & Period Dropdown Options
    if (this.rowPeriodSelect) this.rowPeriodSelect.style.display = isPeriod ? 'flex' : 'none';
    if (this.rowStartTime) this.rowStartTime.style.display = isPeriod ? 'none' : 'flex';
    if (this.rowEndTime) this.rowEndTime.style.display = isPeriod ? 'none' : 'flex';

    if (this.inputPeriodSelect && isPeriod) {
      const periodSchedules = {
        '90m-900': {
          1: { start: '09:00', end: '10:30' },
          2: { start: '10:40', end: '12:10' },
          3: { start: '13:00', end: '14:30' },
          4: { start: '14:40', end: '16:10' },
          5: { start: '16:20', end: '17:50' },
          6: { start: '18:00', end: '19:30' },
          7: { start: '19:40', end: '21:10' }
        },
        '90m-850': {
          1: { start: '08:50', end: '10:20' },
          2: { start: '10:30', end: '12:00' },
          3: { start: '12:50', end: '14:20' },
          4: { start: '14:30', end: '16:00' },
          5: { start: '16:10', end: '17:40' },
          6: { start: '17:50', end: '19:20' },
          7: { start: '19:30', end: '21:00' }
        },
        '50m-school': {
          1: { start: '08:00', end: '08:50' },
          2: { start: '09:00', end: '09:50' },
          3: { start: '10:10', end: '11:00' },
          4: { start: '11:10', end: '12:00' },
          5: { start: '13:30', end: '14:20' },
          6: { start: '14:30', end: '15:20' },
          7: { start: '15:40', end: '16:30' },
          8: { start: '16:40', end: '17:30' },
          9: { start: '18:30', end: '19:20' },
          10: { start: '19:30', end: '20:20' },
          11: { start: '20:30', end: '21:20' },
          12: { start: '21:30', end: '22:20' }
        }
      };

      const defaultSchedule = periodSchedules[activePresetKey] || periodSchedules['90m-900'];
      const totalPeriods = Math.max(minAllowedPeriods, Math.min(maxAllowedPeriods, this.gridPeriodCount || 6));
      const currentVal = this.inputPeriodSelect.value || '1';

      let html = '';
      for (let p = 1; p <= totalPeriods; p++) {
        const slot = defaultSchedule[p] || { start: `${p + 8}:00`, end: `${p + 9}:30` };
        const label = `Period ${p} (${slot.start} - ${slot.end})`;
        html += `<option value="${p}" data-start="${slot.start}" data-end="${slot.end}" ${String(p) === String(currentVal) ? 'selected' : ''}>${label}</option>`;
      }
      this.inputPeriodSelect.innerHTML = html;
    }

    // 3. Days & Time Layout Settings Rows
    const rowGridStartTime = document.getElementById('row-grid-start-time');
    const rowGridEndTime = document.getElementById('row-grid-end-time');
    const rowGridClockType = document.getElementById('row-grid-clock-type');
    const rowGridTotalPeriods = document.getElementById('row-grid-total-periods');
    const rowGridPeriodPreset = document.getElementById('row-grid-period-preset');

    if (rowGridStartTime) rowGridStartTime.style.display = isPeriod ? 'none' : 'flex';
    if (rowGridEndTime) rowGridEndTime.style.display = isPeriod ? 'none' : 'flex';
    if (rowGridClockType) rowGridClockType.style.display = isPeriod ? 'none' : 'flex';
    if (rowGridTotalPeriods) rowGridTotalPeriods.style.display = isPeriod ? 'flex' : 'none';
    if (rowGridPeriodPreset) rowGridPeriodPreset.style.display = isPeriod ? 'flex' : 'none';
  }

  setupCourseListDelegation() {
    if (this._courseDelegationBound) return;
    this._courseDelegationBound = true;
    const container = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    if (!container) return;

    // 1. Click delegation (Accordion toggle, Delete, Toggles, Color Pickers)
    container.addEventListener('click', (e) => {
      const card = e.target.closest('.class-item-card');
      if (!card) return;
      const courseId = card.getAttribute('data-id');
      const c = this.classes.find(x => String(x.id) === String(courseId));
      if (!c) return;

      // Delete Course Button
      const delBtn = e.target.closest('.btn-delete-pill');
      if (delBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.classes = this.classes.filter(x => String(x.id) !== String(courseId));
        this.renderAll();
        this._stagePending();
        return;
      }

      // Expand / Collapse Accordion Header
      const header = e.target.closest('.class-card-header');
      if (header) {
        const editor = card.querySelector('.class-card-editor');
        const arrow = card.querySelector('.class-expand-arrow');
        if (editor) {
          const isHidden = editor.classList.contains('hidden');
          editor.classList.toggle('hidden');
          if (arrow) arrow.classList.toggle('open', isHidden);
          if (isHidden) {
            requestAnimationFrame(() => window.syncGlassSliders?.());
          }
        }
        return;
      }

      // Display Time Toggle (YES / NO)
      const displayTimeBtn = e.target.closest('.edit-display-time .pill-btn');
      if (displayTimeBtn) {
        card.querySelectorAll('.edit-display-time .pill-btn').forEach(b => b.classList.remove('active'));
        displayTimeBtn.classList.add('active');
        const show = (displayTimeBtn.getAttribute('data-val') === 'yes');
        c.displayTime = show;
        const timeFormatRow = card.querySelector('.edit-time-format-row');
        if (timeFormatRow) timeFormatRow.classList.toggle('hidden', !show);
        this.requestGridRender();
        window.syncGlassSliders?.();
        return;
      }

      // Course Time Format Selector (Start Only, Start & End, End Only)
      const timeModeBtn = e.target.closest('.edit-course-time-format .time-mode-btn');
      if (timeModeBtn) {
        card.querySelectorAll('.edit-course-time-format .time-mode-btn').forEach(b => b.classList.remove('active'));
        timeModeBtn.classList.add('active');
        c.timeFormat = timeModeBtn.getAttribute('data-timemode') || 'start';
        c.displayTime = true;
        const timeBadge = card.querySelector('.edit-course-time-badge');
        if (timeBadge) {
          timeBadge.innerText = c.timeFormat === 'both' ? 'Start & End' : (c.timeFormat === 'end' ? 'End Only' : 'Start Only');
        }
        this.requestGridRender();
        window.syncGlassSliders?.();
        return;
      }

      // Grid Colour Swatch Dot
      const swatchBtn = e.target.closest('.mini-swatch');
      if (swatchBtn) {
        card.querySelectorAll('.mini-swatch').forEach(b => b.classList.remove('active'));
        swatchBtn.classList.add('active');
        const pickedColor = swatchBtn.getAttribute('data-hex');
        c.customColor = pickedColor;
        c.isManualCustomColor = true;
        const customBtn = card.querySelector('.mini-grid-custom');
        if (customBtn) customBtn.style.background = pickedColor;
        this.requestGridRender();
        this._stagePending();
        return;
      }

      // Grid Custom Colour Picker
      const customGridBtn = e.target.closest('.mini-grid-custom');
      if (customGridBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.openCustomColorPicker(c.customColor || '#2563EB', `Customize Color: ${c.code}`, (pickedColor) => {
          card.querySelectorAll('.mini-swatch').forEach(b => b.classList.remove('active'));
          c.customColor = pickedColor;
          c.isManualCustomColor = true;
          customGridBtn.style.background = pickedColor;
          this.requestGridRender();
          this._stagePending();
        });
        return;
      }

      // Font Colour Swatch Dot
      const fontSwatchBtn = e.target.closest('.mini-font-swatch');
      if (fontSwatchBtn) {
        e.stopPropagation();
        card.querySelectorAll('.mini-font-swatch').forEach(b => b.classList.remove('active'));
        fontSwatchBtn.classList.add('active');
        const pickedFont = fontSwatchBtn.getAttribute('data-fonthex');
        c.fontColor = pickedFont;
        const customFontBtn = card.querySelector('.mini-font-custom');
        if (customFontBtn) customFontBtn.style.background = pickedFont;
        this.requestGridRender();
        this._stagePending();
        return;
      }

      // Font Custom Colour Picker
      const customFontBtn = e.target.closest('.mini-font-custom');
      if (customFontBtn) {
        e.preventDefault();
        e.stopPropagation();
        this.openCustomColorPicker(c.fontColor || '#FFFFFF', `Card Font Color: ${c.code}`, (pickedFont) => {
          card.querySelectorAll('.mini-font-swatch').forEach(b => b.classList.remove('active'));
          c.fontColor = pickedFont;
          customFontBtn.style.background = pickedFont;
          this.requestGridRender();
          this._stagePending();
        });
        return;
      }
    });

    // 2. Input & Change delegation (Live text inputs & dropdown selects)
    const handleFieldUpdate = (e) => {
      const card = e.target.closest('.class-item-card');
      if (!card) return;
      const courseId = card.getAttribute('data-id');
      const c = this.classes.find(x => String(x.id) === String(courseId));
      if (!c) return;

      const val = e.target.value.trim();
      const subtextEl = card.querySelector('.item-subtext');

      const updateSubtext = () => {
        if (subtextEl) {
          const localizedDay = window.SchedullyI18n ? window.SchedullyI18n.getDayName(c.day) : c.day;
          subtextEl.innerText = `${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${localizedDay} (${c.startTime} - ${c.endTime})`;
        }
      };

      if (e.target.classList.contains('edit-code')) {
        c.code = val.toUpperCase() || 'COURSE';
        c.title = c.code;
        const titleEl = card.querySelector('.item-info h4');
        if (titleEl) titleEl.innerText = c.code;
        this.requestGridRender();
      } else if (e.target.classList.contains('edit-day')) {
        c.day = val;
        updateSubtext();
        this.requestGridRender();
        this._stagePending();
      } else if (e.target.classList.contains('edit-start')) {
        c.startTime = val;
        updateSubtext();
        this.requestGridRender();
        this._stagePending();
      } else if (e.target.classList.contains('edit-end')) {
        c.endTime = val;
        updateSubtext();
        this.requestGridRender();
        this._stagePending();
      } else if (e.target.classList.contains('edit-type')) {
        c.type = val;
        updateSubtext();
        this.requestGridRender();
      } else if (e.target.classList.contains('edit-room')) {
        c.room = val;
        updateSubtext();
        this.requestGridRender();
      } else if (e.target.classList.contains('edit-lecturer')) {
        c.lecturer = val;
        updateSubtext();
        this.requestGridRender();
      } else if (e.target.classList.contains('edit-group')) {
        c.group = val;
        updateSubtext();
        this.requestGridRender();
      }
    };

    container.addEventListener('input', handleFieldUpdate);
    container.addEventListener('change', handleFieldUpdate);
  }

  renderClassList() {
    if (!this.classListContainer) {
      this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    }
    if (!this.classListContainer) return;

    this.classListContainer.innerHTML = '';
    const emptyStateWrapper = document.getElementById('empty-state-wrapper');
    if (this.classes.length === 0) {
      if (emptyStateWrapper) emptyStateWrapper.style.display = 'flex';
      if (this.courseSearchContainer) this.courseSearchContainer.classList.add('hidden');
      return;
    }
    if (emptyStateWrapper) emptyStateWrapper.style.display = 'none';
    if (this.courseSearchContainer) this.courseSearchContainer.classList.remove('hidden');

    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }
    const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    const currentThemeData = paletteGroup[this.currentPalette] || paletteGroup.indigo;
    const swatches = currentThemeData.courseSwatches || ['#1D4ED8', '#2563EB', '#3B82F6', '#10B981', '#F59E0B', '#EC4899'];

    let filteredClasses = this.classes;
    if (this.searchQuery && this.searchQuery.length > 0) {
      const query = this.searchQuery.toLowerCase();
      filteredClasses = this.classes.filter(c => {
        return (
          (c.code && c.code.toLowerCase().includes(query)) ||
          (c.title && c.title.toLowerCase().includes(query)) ||
          (c.type && c.type.toLowerCase().includes(query)) ||
          (c.room && c.room.toLowerCase().includes(query)) ||
          (c.lecturer && c.lecturer.toLowerCase().includes(query)) ||
          (c.group && c.group.toLowerCase().includes(query)) ||
          (c.day && c.day.toLowerCase().includes(query))
        );
      });
    }

    if (filteredClasses.length === 0 && this.classes.length > 0) {
       this.classListContainer.innerHTML = '<div class="text-center p-6 text-gray-500 text-sm font-semibold">No courses match your search.</div>';
    }

    const fragment = document.createDocumentFragment();

    filteredClasses.forEach(c => {
      const card = document.createElement('div');
      card.className = 'class-item-card expandable-class-card';
      card.setAttribute('data-id', c.id);
      
      const swatchBtnsHTML = swatches.map(hex => `
        <button type="button" class="swatch-dot mini-swatch ${c.customColor === hex ? 'active' : ''}" data-hex="${hex}" style="background: ${hex}"></button>
      `).join('') + `
        <button type="button" class="swatch-custom mini-grid-custom" title="Custom Color" style="display:flex;align-items:center;justify-content:center;background:${c.customColor || swatches[0]};">
          <span class="material-symbols-outlined icon-xs">colorize</span>
        </button>
      `;

      const FONT_COLORS = ['#FFFFFF', '#0F172A', '#1E293B', '#475569'];
      const fontSwatchBtnsHTML = FONT_COLORS.map(hex => `
        <button type="button" class="font-swatch-sq mini-font-swatch ${(c.fontColor || '#FFFFFF') === hex ? 'active' : ''}" data-fonthex="${hex}" style="background: ${hex}"></button>
      `).join('') + `
        <button type="button" class="font-swatch-sq font-swatch-custom mini-font-custom" title="Custom Font Color" style="display:flex;align-items:center;justify-content:center;background:${c.fontColor || '#FFFFFF'};">
          <span class="material-symbols-outlined icon-xs">colorize</span>
        </button>
      `;

      const i18n = window.SchedullyI18n;
      const localizedDay = i18n ? i18n.getDayName(c.day) : c.day;
      const lblCourseCode = i18n ? i18n.get('courseCode') : 'Course Code';
      const lblDay = i18n ? i18n.get('day') : 'Day';
      const lblStart = i18n ? i18n.get('startTime') : 'Start Time';
      const lblEnd = i18n ? i18n.get('endTime') : 'End Time';
      const lblType = i18n ? i18n.get('courseType') : 'Course Type';
      const lblRoom = i18n ? i18n.get('room') : 'Location';
      const lblLecturer = i18n ? i18n.get('lecturer') : 'Lecturer';
      const lblGroup = i18n ? i18n.get('group') : 'Group';

      card.innerHTML = `
        <div class="class-card-header">
          <div class="item-info">
            <h4>${c.code}</h4>
            <p class="item-subtext">${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${localizedDay} (${c.startTime} - ${c.endTime})</p>
          </div>
          <div class="class-card-actions">
            <span class="material-symbols-outlined class-expand-arrow">expand_more</span>
            <button type="button" class="btn-delete-pill" data-id="${c.id}" title="Delete Course">
              <span class="material-symbols-outlined icon-delete">delete</span>
            </button>
          </div>
        </div>

        <div class="class-card-editor hidden">
          <div class="editor-row">
            <label>${lblCourseCode}:</label>
            <input type="text" class="m3-input edit-code" value="${c.code}">
          </div>

          <div class="editor-row">
            <label>Display Time:</label>
            <div class="pill-toggle-group edit-display-time">
              <button type="button" class="pill-btn ${c.displayTime !== false ? 'active' : ''}" data-val="yes">YES</button>
              <button type="button" class="pill-btn ${c.displayTime === false ? 'active' : ''}" data-val="no">NO</button>
            </div>
          </div>

          <div class="editor-row-stack edit-time-format-row ${c.displayTime === false ? 'hidden' : ''}" style="margin-top: -4px;">
            <div class="flex items-center justify-between w-full mb-1">
              <span class="submenu-header-label font-bold text-[10px] uppercase text-slate-400">Card Time Format</span>
              <span class="quick-time-badge font-bold text-[10px] edit-course-time-badge">${c.timeFormat === 'both' ? 'Start & End' : (c.timeFormat === 'end' ? 'End Only' : 'Start Only')}</span>
            </div>
            <div class="time-display-mode-container edit-course-time-format w-full">
              <button type="button" class="time-mode-btn ${(!c.timeFormat || c.timeFormat === 'start') ? 'active' : ''}" data-timemode="start">Start Only</button>
              <button type="button" class="time-mode-btn ${c.timeFormat === 'both' ? 'active' : ''}" data-timemode="both">Start &amp; End</button>
              <button type="button" class="time-mode-btn ${c.timeFormat === 'end' ? 'active' : ''}" data-timemode="end">End Only</button>
            </div>
          </div>

          <div class="editor-row">
            <label>${lblDay}:</label>
            <select class="m3-input-time edit-day">
              <option value="Mon" ${c.day && c.day.startsWith('Mon') ? 'selected' : ''}>${i18n ? i18n.getDayName('Mon') : 'Mon'}</option>
              <option value="Tue" ${c.day && c.day.startsWith('Tue') ? 'selected' : ''}>${i18n ? i18n.getDayName('Tue') : 'Tue'}</option>
              <option value="Wed" ${c.day && c.day.startsWith('Wed') ? 'selected' : ''}>${i18n ? i18n.getDayName('Wed') : 'Wed'}</option>
              <option value="Thu" ${c.day && c.day.startsWith('Thu') ? 'selected' : ''}>${i18n ? i18n.getDayName('Thu') : 'Thu'}</option>
              <option value="Fri" ${c.day && c.day.startsWith('Fri') ? 'selected' : ''}>${i18n ? i18n.getDayName('Fri') : 'Fri'}</option>
            </select>
          </div>

          <div class="editor-row">
            <label>${lblStart}:</label>
            <select class="m3-input-time edit-start">
              <option value="08:00" ${c.startTime === '08:00' ? 'selected' : ''}>08:00 AM</option>
              <option value="09:00" ${c.startTime === '09:00' ? 'selected' : ''}>09:00 AM</option>
              <option value="10:00" ${c.startTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
              <option value="11:00" ${c.startTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
              <option value="12:00" ${c.startTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
              <option value="13:00" ${c.startTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
              <option value="14:00" ${c.startTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
              <option value="15:00" ${c.startTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
              <option value="16:00" ${c.startTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
            </select>
          </div>

          <div class="editor-row">
            <label>${lblEnd}:</label>
            <select class="m3-input-time edit-end">
              <option value="09:00" ${c.endTime === '09:00' ? 'selected' : ''}>09:00 AM</option>
              <option value="10:00" ${c.endTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
              <option value="11:00" ${c.endTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
              <option value="12:00" ${c.endTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
              <option value="13:00" ${c.endTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
              <option value="14:00" ${c.endTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
              <option value="15:00" ${c.endTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
              <option value="16:00" ${c.endTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
              <option value="17:00" ${c.endTime === '17:00' ? 'selected' : ''}>05:00 PM</option>
            </select>
          </div>

          <div class="editor-row">
            <label>${lblType}:</label>
            <input type="text" class="m3-input edit-type" value="${c.type || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>${lblRoom}:</label>
            <input type="text" class="m3-input edit-room" value="${c.room || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>${lblLecturer}:</label>
            <input type="text" class="m3-input edit-lecturer" value="${c.lecturer || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>${lblGroup}:</label>
            <input type="text" class="m3-input edit-group" value="${c.group || ''}" placeholder="">
          </div>

          <div class="editor-row-stack">
            <label>Grid Colour Swatch:</label>
            <div class="swatch-grid mini-swatch-grid">
              ${swatchBtnsHTML}
            </div>
          </div>

          <div class="editor-row-stack">
            <label>Font Colour Swatch:</label>
            <div class="swatch-grid mini-swatch-grid">
              ${fontSwatchBtnsHTML}
            </div>
          </div>
        </div>
      `;

      fragment.appendChild(card);
    });

    this.classListContainer.appendChild(fragment);
  }
}

const initSchedullyApp = () => {
  if (!window.schedullyApp) {
    window.schedullyApp = new SchedullyApp();
  }
  initGlassSegmentedSliders();
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSchedullyApp);
} else {
  initSchedullyApp();
}

// ═══════════════════════════════════════════════════════════════
// APPLE LIQUID GLASS SLIDING SEGMENTED SWITCHER ENGINE
// Interactive Touch & Pointer Dragging + Auto-Centering + Elastic Snap
// ═══════════════════════════════════════════════════════════════
function initGlassSegmentedSliders() {
  const selector = '#device-type-toggles, .pill-toggle-group, .capsule-group, .device-capsule-switcher, #time-display-mode-group, .edit-display-time, .time-display-mode-container, .edit-course-time-format';

  const updateGroupThumb = (group, instant = false) => {
    if (!group) return;
    let thumb = group.querySelector('.glass-slider-thumb');
    if (!thumb) {
      thumb = document.createElement('div');
      thumb.className = 'glass-slider-thumb';
      group.prepend(thumb);
    }

    const buttons = Array.from(group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn'));
    if (!buttons.length) return;

    let activeBtn = group.querySelector('.active') || buttons[0];
    const idx = Math.max(0, buttons.indexOf(activeBtn));

    const groupWidth = group.clientWidth - 6;
    const fallbackWidth = groupWidth > 0 ? (groupWidth / buttons.length) : (group.offsetWidth / buttons.length);
    const fallbackLeft = 3 + (idx * fallbackWidth);

    let left = activeBtn.offsetLeft;
    let width = activeBtn.offsetWidth;

    // If offsetLeft is 0 or abnormal while idx > 0, use guaranteed mathematical positioning
    if ((idx > 0 && left <= 4) || width <= 0 || width >= group.offsetWidth - 2) {
      left = fallbackLeft;
      width = fallbackWidth;
    }

    if (width > 0) {
      thumb.style.opacity = '1';
      if (instant) {
        thumb.style.transition = 'none';
        thumb.style.transform = `translateX(${left}px) scale(1, 1)`;
        thumb.style.width = `${width}px`;
        requestAnimationFrame(() => {
          thumb.style.transition = '';
        });
      } else {
        thumb.style.transition = 'transform 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.26s cubic-bezier(0.25, 1, 0.35, 1)';
        thumb.style.transform = `translateX(${left}px) scale(1, 1)`;
        thumb.style.width = `${width}px`;
      }
    }
  };

  const ro = (typeof ResizeObserver !== 'undefined') ? new ResizeObserver(() => {
    window.syncGlassSliders();
  }) : null;

  const setupGroup = (group) => {
    if (!group || group._hasGlassSlider) return;
    group._hasGlassSlider = true;

    let thumb = group.querySelector('.glass-slider-thumb');
    if (!thumb) {
      thumb = document.createElement('div');
      thumb.className = 'glass-slider-thumb';
      group.prepend(thumb);
    }
    if (ro) ro.observe(group);

    // Interactive Touch / Pointer Drag Gesture Engine (Liquid Elastic Physics)
    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let startLeft = 0;

    group.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const buttons = Array.from(group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn'));
      const activeBtn = group.querySelector('.active') || buttons[0];
      if (!activeBtn) return;

      isDragging = true;
      hasDragged = false;
      startX = e.clientX;
      startLeft = activeBtn.offsetLeft;
    });

    group.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) > 5) {
        if (!hasDragged) {
          hasDragged = true;
          try { group.setPointerCapture?.(e.pointerId); } catch (_) {}
          thumb.style.transition = 'none';
        }
      }
      if (!hasDragged) return;

      const buttons = Array.from(group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn'));
      if (!buttons.length) return;

      const groupRect = group.getBoundingClientRect();
      const currentThumbWidth = thumb.offsetWidth || (groupRect.width / buttons.length);
      const minLeft = 3;
      const maxLeft = groupRect.width - currentThumbWidth - 3;
      const currentLeft = Math.max(minLeft, Math.min(maxLeft, startLeft + deltaX));

      // Authentic Liquid Glass Volume Preservation: stretch horizontally, contract vertically
      const stretchX = Math.min(1.15, 1 + Math.abs(deltaX) * 0.0018);
      const stretchY = 1 / Math.sqrt(stretchX);

      thumb.style.transform = `translateX(${currentLeft}px) scale(${stretchX}, ${stretchY})`;
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      if (hasDragged) {
        try { group.releasePointerCapture?.(e.pointerId); } catch (_) {}
        thumb.style.transition = '';

        window._globalDragSuppressUntil = Date.now() + 350;
        const buttons = Array.from(group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn'));
        const currentX = e.clientX;
        let targetBtn = null;
        let minDistance = Infinity;

        for (const btn of buttons) {
          const r = btn.getBoundingClientRect();
          const center = r.left + r.width / 2;
          const dist = Math.abs(currentX - center);
          if (dist < minDistance) {
            minDistance = dist;
            targetBtn = btn;
          }
        }

        if (targetBtn) {
          buttons.forEach(b => b.classList.remove('active'));
          targetBtn.classList.add('active');
          
          const progClick = new MouseEvent('click', { bubbles: true, cancelable: true });
          progClick._isProgrammaticDrag = true;
          targetBtn.dispatchEvent(progClick);
        }

        updateGroupThumb(group, false);
      }
    };

    group.addEventListener('pointerup', endDrag);
    group.addEventListener('pointercancel', endDrag);
    group.addEventListener('scroll', () => {
      updateGroupThumb(group, true);
    }, { passive: true });

    const groupButtons = Array.from(group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn'));
    groupButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });

    updateGroupThumb(group, true);
  };

  window.syncGlassSliders = () => {
    document.querySelectorAll(selector).forEach(group => {
      if (!group._hasGlassSlider) {
        setupGroup(group);
      }
      updateGroupThumb(group, false);
    });
  };

  document.querySelectorAll(selector).forEach(group => {
    setupGroup(group);
  });

  // Global delegated click handler for clean, single-tap switching
  document.addEventListener('click', (e) => {
    if (window._globalDragSuppressUntil && Date.now() < window._globalDragSuppressUntil && !e._isProgrammaticDrag) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const btn = e.target.closest('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn');
    if (!btn) return;
    const group = btn.closest(selector);
    if (!group) return;

    group.querySelectorAll('button, .pill-btn, .capsule-btn, .time-mode-btn, .support-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateGroupThumb(group, false);
  }, true);

  // Initial and delayed synchronizations
  setTimeout(window.syncGlassSliders, 60);
  setTimeout(window.syncGlassSliders, 260);

  // Debounced Re-sync on window resize
  let resizeRaf = null;
  window.addEventListener('resize', () => {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(window.syncGlassSliders);
  }, { passive: true });
}

// ═════════════════════════════════════════════════════════════════════
// 🔮 UNIVERSAL LIQUID GLASS REFRACTION TRACKER (High-Performance 60FPS)
// ═════════════════════════════════════════════════════════════════════
let pointerRafId = null;
let lastPointerEvent = null;
let activeTouchTarget = null;

const GLASS_CARD_SELECTOR = 
  '.card-expand-header, .exact-course-card, .class-card-item, .expandable-class-card, ' +
  '#bottom-floating-pill-bar, #bottom-floating-pill-bar button, #header-desktop-bar, #header-desktop-bar button, ' +
  '#btn-expand-left-floating, #btn-expand-right-floating, #btn-mobile-export-toggle, #btn-schedule-settings-toggle, #btn-clear-all, ' +
  '.btn-adaptive-auth, .btn-globe-language, .btn-coffee-support, .pill-btn, .capsule-btn, .dock-icon-circle, .lang-option-pill, ' +
  '.btn-studio-launch, .btn-studio-import, .modal-card, .language-modal-card, .coffee-modal-card, .ocr-lang-card, #tour-popover-card';

function updateGlassSheen(clientX, clientY, targetEl) {
  // Fast path: completely bypass in Default Style (solid surfaces, no glare)
  if (document.body.classList.contains('theme-style-default')) return null;

  const target = targetEl || (clientX !== undefined && clientY !== undefined ? document.elementFromPoint(clientX, clientY) : null);
  if (!target) return null;
  const glassCard = target.closest(GLASS_CARD_SELECTOR);
  if (glassCard) {
    const rect = glassCard.getBoundingClientRect();
    glassCard.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    glassCard.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
    return glassCard;
  }
  return null;
}

// Mouse / Pointer Move - Strictly RAF Throttled with Direct Target Fast-Path
document.addEventListener('pointermove', (e) => {
  if (document.body.classList.contains('theme-style-default')) return;
  lastPointerEvent = e;
  if (!pointerRafId) {
    pointerRafId = requestAnimationFrame(() => {
      pointerRafId = null;
      if (!lastPointerEvent) return;
      updateGlassSheen(lastPointerEvent.clientX, lastPointerEvent.clientY, lastPointerEvent.target);
    });
  }
}, { passive: true });

// Touch Tracking for Mobile Fingers (Fast-path on tap without heavy continuous touchmove thrashing)
document.addEventListener('touchstart', (e) => {
  if (document.body.classList.contains('theme-style-default')) return;
  if (e.touches && e.touches.length > 0) {
    const touch = e.touches[0];
    if (activeTouchTarget) activeTouchTarget.classList.remove('is-touch-active');
    activeTouchTarget = updateGlassSheen(touch.clientX, touch.clientY, e.target);
    if (activeTouchTarget) activeTouchTarget.classList.add('is-touch-active');
  }
}, { passive: true });

document.addEventListener('touchend', () => {
  if (activeTouchTarget) {
    const prev = activeTouchTarget;
    activeTouchTarget = null;
    setTimeout(() => {
      prev?.classList.remove('is-touch-active');
    }, 250);
  }
}, { passive: true });

// ═════════════════════════════════════════════════════════════════════
// 🔮 LIQUID GLASS OPTICAL PRESETS (Crystal, Frosted, Fluid, Prism)
// ═════════════════════════════════════════════════════════════════════
function initLiquidGlassPresets() {
  const presets = {
    crystal: {
      name: 'Crystal',
      refThickness: 16,
      refFactor: 1.5,
      refDispersion: 4.0,
      glareAngle: -45,
      glareFactor: 110,
      glareOppositeFactor: 85,
      refFresnelFactor: 15,
      mergeRate: 0.04,
      springSizeFactor: 12
    },
    frosted: {
      name: 'Frosted',
      refThickness: 28,
      refFactor: 1.25,
      refDispersion: 9.0,
      glareAngle: -35,
      glareFactor: 75,
      glareOppositeFactor: 60,
      refFresnelFactor: 30,
      mergeRate: 0.08,
      springSizeFactor: 8
    },
    fluid: {
      name: 'Fluid',
      refThickness: 22,
      refFactor: 1.45,
      refDispersion: 8.0,
      glareAngle: -45,
      glareFactor: 95,
      glareOppositeFactor: 90,
      refFresnelFactor: 25,
      mergeRate: 0.15,
      springSizeFactor: 18
    },
    prism: {
      name: 'Prism',
      refThickness: 32,
      refFactor: 1.65,
      refDispersion: 18.0,
      glareAngle: -60,
      glareFactor: 120,
      glareOppositeFactor: 95,
      refFresnelFactor: 40,
      mergeRate: 0.05,
      springSizeFactor: 14
    }
  };

  let activePresetKey = 'crystal';

  // Apply Preset Configuration to Schedully CSS Variables
  window.applyLiquidGlassConfig = function(cfg, presetKey) {
    if (!cfg) return;
    const s = cfg.controls || cfg;
    const thicknessPx = `${s.refThickness || 20}px`;
    const blurPx = `${Math.max(4, Math.round((s.refThickness || 20) * 0.8))}px`;
    const glareFactor = ((s.glareFactor !== undefined ? s.glareFactor : 90) / 100).toFixed(2);
    const glareOpposite = ((s.glareOppositeFactor !== undefined ? s.glareOppositeFactor : 80) / 100).toFixed(2);
    const dispersion = s.refDispersion !== undefined ? s.refDispersion : 7;
    const glareAngleDeg = `${s.glareAngle !== undefined ? s.glareAngle : -45}deg`;
    const dispersionCyan = `rgba(96, 165, 250, ${((dispersion / 20) * 0.85).toFixed(2)})`;
    const dispersionPink = `rgba(244, 114, 182, ${((dispersion / 20) * 0.7).toFixed(2)})`;
    const fresnelFactor = ((s.refFresnelFactor !== undefined ? s.refFresnelFactor : 20) / 100).toFixed(2);

    const root = document.documentElement;
    root.style.setProperty('--glass-thickness', thicknessPx);
    root.style.setProperty('--glass-blur', blurPx);
    root.style.setProperty('--glass-ref-factor', s.refFactor || 1.4);
    root.style.setProperty('--glass-dispersion', dispersion);
    root.style.setProperty('--glass-dispersion-cyan', dispersionCyan);
    root.style.setProperty('--glass-dispersion-pink', dispersionPink);
    root.style.setProperty('--glass-glare-angle', glareAngleDeg);
    root.style.setProperty('--glass-glare-factor', glareFactor);
    root.style.setProperty('--glass-glare-opposite', glareOpposite);
    root.style.setProperty('--glass-fresnel-factor', fresnelFactor);

    if (presetKey) {
      activePresetKey = presetKey;
      const label = document.getElementById('active-glass-preset-label');
      if (label) label.textContent = presets[presetKey]?.name || presetKey;

      document.querySelectorAll('.sidebar-glass-preset-btn').forEach(btn => {
        if (btn.dataset.glassPreset === presetKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      try {
        localStorage.setItem('schedully_liquid_glass_preset', presetKey);
      } catch (e) {}
    }

    try {
      localStorage.setItem('schedully_liquid_glass_custom', JSON.stringify(s));
    } catch (e) {}

    if (typeof window.syncGlassSliders === 'function') {
      window.syncGlassSliders();
    }
  };

  // Wire up sidebar preset button clicks
  document.querySelectorAll('.sidebar-glass-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.glassPreset;
      if (presets[key]) {
        if (window.soundFX) window.soundFX.play('preset');
        window.applyLiquidGlassConfig(presets[key], key);
      }
    });
  });

  // Restore saved preset on load
  try {
    const savedPreset = localStorage.getItem('schedully_liquid_glass_preset') || 'crystal';
    if (presets[savedPreset]) {
      window.applyLiquidGlassConfig(presets[savedPreset], savedPreset);
    }
  } catch (e) {}
}

// ═══════════════════════════════════════════════════════════════
// THEME STYLE SYSTEM (Default M3 Solid vs Liquid Glass)
// ═══════════════════════════════════════════════════════════════
function initThemeStyleEngine() {
  const btnDefault = document.getElementById('btn-theme-style-default');
  const btnGlass = document.getElementById('btn-theme-style-glass');
  const styleLabel = document.getElementById('active-theme-style-label');
  const glassPresetsSection = document.getElementById('liquid-glass-presets-section');

  const applyThemeStyle = (style) => {
    const isDefault = style === 'default';
    
    if (isDefault) {
      document.body.classList.add('theme-style-default');
      document.body.classList.remove('theme-style-glass');
      if (btnDefault) btnDefault.classList.add('active');
      if (btnGlass) btnGlass.classList.remove('active');
      if (styleLabel) styleLabel.textContent = 'Default';
      if (glassPresetsSection) glassPresetsSection.classList.add('disabled-preset-section');
    } else {
      document.body.classList.remove('theme-style-default');
      document.body.classList.add('theme-style-glass');
      if (btnDefault) btnDefault.classList.remove('active');
      if (btnGlass) btnGlass.classList.add('active');
      if (styleLabel) styleLabel.textContent = 'Glass';
      if (glassPresetsSection) glassPresetsSection.classList.remove('disabled-preset-section');
    }

    try {
      localStorage.setItem('schedully_theme_style', style);
    } catch (e) {}
  };
  window.applyThemeStyle = applyThemeStyle;

  if (btnDefault) {
    btnDefault.addEventListener('click', () => applyThemeStyle('default'));
  }
  if (btnGlass) {
    btnGlass.addEventListener('click', () => applyThemeStyle('glass'));
  }

  // Restore saved theme style on load (default to 'glass')
  try {
    const savedStyle = localStorage.getItem('schedully_theme_style') || 'glass';
    applyThemeStyle(savedStyle);
  } catch (e) {}
}

// ═══════════════════════════════════════════════════════════════
// NATIVE WEB AUDIO SOUND ENGINE (Apple-Style Micro Haptics)
// ═══════════════════════════════════════════════════════════════
class SoundEffectsEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('schedully_sound_enabled') !== 'false';
    this.initContext = this.initContext.bind(this);
    
    // Auto-unlock AudioContext on first user gesture
    window.addEventListener('pointerdown', this.initContext, { once: true });
    window.addEventListener('keydown', this.initContext, { once: true });
  }

  initContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      } catch (e) {}
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('schedully_sound_enabled', this.enabled ? 'true' : 'false');
    } catch (e) {}
    this.updateUI();
    if (this.enabled) {
      this.play('toggle');
    }
    return this.enabled;
  }

  updateUI() {
    const iconOn = document.getElementById('icon-sound-on');
    const iconOff = document.getElementById('icon-sound-off');
    if (iconOn && iconOff) {
      iconOn.classList.toggle('hidden', !this.enabled);
      iconOff.classList.toggle('hidden', this.enabled);
    }
  }

  play(type = 'click') {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === 'click') {
        // Apple-style woody tactile mechanical tick
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.045);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'toggle') {
        // Subtle soft bubble pop / toggle
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.07);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'preset' || type === 'glass') {
        // Shimmering optical glass bell chime (dual harmonic)
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1174.66, now); // D6
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.25);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1760, now + 0.02); // A6
        gain2.gain.setValueAtTime(0.05, now + 0.02);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
        osc2.start(now + 0.02);
        osc2.stop(now + 0.3);
      } else if (type === 'zoom') {
        // Subtle pneumatic zoom glide tick
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1100, now + 0.035);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'success') {
        // Celebratory export chime
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          const noteOsc = this.ctx.createOscillator();
          const noteGain = this.ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(this.ctx.destination);
          noteOsc.type = 'triangle';
          noteOsc.frequency.setValueAtTime(freq, now + idx * 0.06);
          noteGain.gain.setValueAtTime(0.06, now + idx * 0.06);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.22);
          noteOsc.start(now + idx * 0.06);
          noteOsc.stop(now + idx * 0.06 + 0.25);
        });
      }
    } catch (e) {}
  }
}
window.soundFX = new SoundEffectsEngine();

// ═══════════════════════════════════════════════════════════════
// INTERACTIVE SPOTLIGHT TOUR ONBOARDING CONTROLLER
// ═══════════════════════════════════════════════════════════════
class SchedullyTourController {
  constructor() {
    this.currentStep = 0;
    this.steps = [
      {
        id: 'theme-menu',
        target: '#left-sidebar',
        title: 'Themes & Design Studio',
        tag: 'Left Sidebar',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
        iconTheme: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25',
        badgeTheme: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/25',
        desc: 'Customize curated color palettes, auto-extract colors from wallpaper photos, set fonts, blur intensity, table corners, and floating signatures!',
        position: 'right'
      },
      {
        id: 'controls',
        target: '#canvas-controls-popover',
        title: 'Display & Canvas Controls',
        tag: 'Canvas Controls',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',
        iconTheme: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25',
        badgeTheme: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25',
        desc: 'Switch between Smartphone, Tablet, and Paper device models, toggle phone UI lockscreen elements, and edit your schedule title on the fly!',
        position: 'top'
      },
      {
        id: 'aspect-ratio',
        target: '#canvas-ratio-popover',
        title: 'Screen Aspect Ratio Presets',
        tag: 'Aspect Ratio',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
        iconTheme: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25',
        badgeTheme: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25',
        desc: 'Pick your hardware aspect ratio (Android 20:9, iOS 19.5:9, iPad 4:3, or Auto Match) for exact 1:1 fit with zero lockscreen cropping!',
        position: 'top'
      },
      {
        id: 'courses',
        target: '#right-sidebar',
        title: 'Course & Schedule Manager',
        tag: 'Right Sidebar',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
        iconTheme: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
        badgeTheme: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
        desc: 'Add, search & color-code courses, scan timetables from photos/PDF with AI OCR, customize active days & grid hours, and auto-resolve time clashes in 1 tap!',
        position: 'left'
      },
      {
        id: 'export',
        target: '#mobile-export-dropdown, #mobile-export-bar, #header-desktop-bar',
        title: '4K HD Export & Cloud Sync',
        tag: 'Header Export',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>',
        iconTheme: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
        badgeTheme: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
        desc: 'Export crisp 4K lockscreen wallpapers, sync directly with Google & Apple Calendar (.ics), or generate print-ready PDFs and CSVs!',
        position: 'bottom'
      }
    ];

    this.overlay = document.getElementById('interactive-tour-overlay');
    this.focusBox = document.getElementById('tour-spotlight-focus');
    this.popoverCard = document.getElementById('tour-popover-card');
    this.btnNext = document.getElementById('btn-tour-next');
    this.btnPrev = document.getElementById('btn-tour-prev');
    this.btnSkip = document.getElementById('btn-tour-skip');
    this.dotsContainer = document.getElementById('tour-dots-container');

    this.init();
  }

  init() {
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('click');
        this.next();
      });
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('click');
        this.prev();
      });
    }
    if (this.btnSkip) {
      this.btnSkip.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('click');
        this.finish();
      });
    }

    const btnStartTour = document.getElementById('btn-start-tour-header');
    if (btnStartTour) {
      btnStartTour.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('toggle');
        this.start();
      });
    }

    const btnStartTourMobile = document.getElementById('btn-open-guide-modal');
    if (btnStartTourMobile) {
      btnStartTourMobile.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('toggle');
        this.start();
      });
    }

    // Auto-launch tour on first visit after 1.2s delay
    try {
      const tourSeen = localStorage.getItem('schedully_tour_seen');
      if (!tourSeen && window.innerWidth >= 768) {
        setTimeout(() => this.start(), 1200);
      }
    } catch (e) {}
  }

  start() {
    window.isTourActive = true;
    this.currentStep = 0;
    const isMobile = window.innerWidth <= 1280;
    if (!isMobile) {
      if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(false);
      if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(false);
    }
    if (this.overlay) {
      this.overlay.classList.remove('hidden');
      this.renderStep();
    }
  }

  renderStep() {
    const isMobile = window.innerWidth <= 1280;
    const step = this.steps[this.currentStep];
    if (!step) return;

    const popover = document.getElementById('canvas-controls-popover');
    const ratioPopover = document.getElementById('canvas-ratio-popover');
    const mobileExportDropdown = document.getElementById('mobile-export-dropdown');
    const mobileChevron = document.getElementById('mobile-export-chevron');

    // ── Mobile Orchestration: Expand ONLY the current step's component and collapse others ──
    if (isMobile) {
      if (step.id === 'theme-menu') {
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(false);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
        if (popover) { popover.classList.add('hidden'); popover.style.display = ''; }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
        if (mobileExportDropdown) mobileExportDropdown.classList.add('hidden');
        if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
      } else if (step.id === 'controls') {
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
        if (popover) {
          popover.classList.remove('hidden');
          popover.style.display = 'flex';
          popover.style.visibility = 'visible';
          popover.style.opacity = '1';
        }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
        if (mobileExportDropdown) mobileExportDropdown.classList.add('hidden');
        if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
      } else if (step.id === 'aspect-ratio') {
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
        if (popover) {
          popover.classList.remove('hidden');
          popover.style.display = 'flex';
          popover.style.visibility = 'visible';
          popover.style.opacity = '1';
        }
        if (ratioPopover) {
          ratioPopover.classList.remove('hidden');
          ratioPopover.style.display = 'flex';
          ratioPopover.style.visibility = 'visible';
          ratioPopover.style.opacity = '1';
        }
        if (mobileExportDropdown) mobileExportDropdown.classList.add('hidden');
        if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
      } else if (step.id === 'courses') {
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(false);
        if (popover) { popover.classList.add('hidden'); popover.style.display = ''; }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
        if (mobileExportDropdown) mobileExportDropdown.classList.add('hidden');
        if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
      } else if (step.id === 'export') {
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
        if (popover) { popover.classList.add('hidden'); popover.style.display = ''; }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
        const mobileExportBar = document.getElementById('mobile-export-bar');
        if (mobileExportBar) mobileExportBar.style.display = 'flex';
        if (mobileExportDropdown) {
          mobileExportDropdown.classList.remove('hidden');
          mobileExportDropdown.style.display = 'block';
          mobileExportDropdown.style.visibility = 'visible';
          mobileExportDropdown.style.opacity = '1';
          if (mobileChevron) mobileChevron.classList.add('mobile-export-chevron-open');
        }
      }
    } else {
      // Desktop: BOTH Menu and Schedule sidebars ALWAYS stay fully expanded
      if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(false);
      if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(false);
      if (step.id === 'controls') {
        if (popover) {
          popover.classList.remove('hidden');
          popover.style.display = 'flex';
          popover.style.visibility = 'visible';
          popover.style.opacity = '1';
        }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
      } else if (step.id === 'aspect-ratio') {
        if (popover) {
          popover.classList.remove('hidden');
          popover.style.display = 'flex';
          popover.style.visibility = 'visible';
          popover.style.opacity = '1';
        }
        if (ratioPopover) {
          ratioPopover.classList.remove('hidden');
          ratioPopover.style.display = 'flex';
          ratioPopover.style.visibility = 'visible';
          ratioPopover.style.opacity = '1';
        }
      } else {
        if (popover) { popover.classList.add('hidden'); popover.style.display = ''; }
        if (ratioPopover) { ratioPopover.classList.add('hidden'); ratioPopover.style.display = ''; }
      }
    }

    // Update Text, Badges & Vector SVG Icons
    const badge = document.getElementById('tour-step-badge');
    const tag = document.getElementById('tour-feature-tag');
    const icon = document.getElementById('tour-step-icon');
    const title = document.getElementById('tour-step-title');
    const desc = document.getElementById('tour-step-description');

    if (badge) {
      badge.textContent = `Step ${this.currentStep + 1} of ${this.steps.length}`;
      badge.className = `px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all ${step.badgeTheme || 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25'}`;
    }
    if (tag) tag.textContent = step.tag;
    if (icon) {
      icon.innerHTML = step.iconSvg || '';
      icon.className = `w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${step.iconTheme || 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'}`;
    }
    if (title) title.textContent = step.title;
    if (desc) desc.textContent = step.desc;

    // Dynamically update progress dots
    if (this.dotsContainer) {
      this.dotsContainer.innerHTML = this.steps.map((_, idx) => 
        `<div class="tour-dot w-2 h-2 rounded-full transition-all ${idx === this.currentStep ? 'bg-blue-600 w-4' : 'bg-slate-300 dark:bg-slate-700'}"></div>`
      ).join('');
    }

    // Update Navigation Buttons
    if (this.btnPrev) {
      this.btnPrev.classList.toggle('hidden', this.currentStep === 0);
    }
    if (this.btnNext) {
      const isLast = this.currentStep === this.steps.length - 1;
      this.btnNext.innerHTML = isLast ? '<span>Get Started</span> ✨' : '<span>Next</span> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>';
    }

    // Track target bounding box smoothly after CSS slide animations
    this.trackTargetPosition(step);
  }

  trackTargetPosition(step) {
    const isMobile = window.innerWidth <= 1280;

    const applyPosition = () => {
      let targetEl = null;
      const desktopBar = document.getElementById('header-desktop-bar');
      const isDesktopHeader = (window.innerWidth > 1024 && desktopBar && desktopBar.offsetWidth > 0);

      if (step.id === 'export') {
        if (!isDesktopHeader) {
          const mobileExportBar = document.getElementById('mobile-export-bar');
          if (mobileExportBar) mobileExportBar.style.display = 'flex';
          const mobileDropdown = document.getElementById('mobile-export-dropdown');
          if (mobileDropdown) {
            mobileDropdown.classList.remove('hidden');
            mobileDropdown.style.display = 'block';
            mobileDropdown.style.visibility = 'visible';
            mobileDropdown.style.opacity = '1';
          }
          const chevron = document.getElementById('mobile-export-chevron');
          if (chevron) chevron.classList.add('mobile-export-chevron-open');
          targetEl = mobileDropdown || mobileExportBar;
        } else {
          targetEl = desktopBar;
        }
      } else if (step.id === 'controls') {
        const popover = document.getElementById('canvas-controls-popover');
        if (popover) {
          popover.classList.remove('hidden');
          popover.style.display = 'flex';
          popover.style.visibility = 'visible';
          popover.style.opacity = '1';
        }
        targetEl = document.getElementById('canvas-controls-popover');
      } else if (step.id === 'aspect-ratio') {
        const ratioPopover = document.getElementById('canvas-ratio-popover');
        if (ratioPopover) {
          ratioPopover.classList.remove('hidden');
          ratioPopover.style.display = 'flex';
          ratioPopover.style.visibility = 'visible';
          ratioPopover.style.opacity = '1';
        }
        targetEl = document.getElementById('canvas-ratio-popover');
      } else if (step.id === 'theme-menu') {
        targetEl = isMobile 
          ? (document.querySelector('#left-sidebar .sidebar-accordion-section:first-child') || document.querySelector('#left-sidebar'))
          : document.querySelector('#left-sidebar');
      } else if (step.id === 'courses') {
        targetEl = isMobile 
          ? (document.querySelector('#right-sidebar .sidebar-accordion-section:first-child') || document.querySelector('#right-sidebar'))
          : document.querySelector('#right-sidebar');
      } else {
        targetEl = document.querySelector(step.target);
      }

      if (!targetEl || targetEl.offsetWidth === 0 || targetEl.offsetHeight === 0) {
        if (step.target.includes('#left-sidebar')) {
          targetEl = document.querySelector('#btn-expand-left-floating') || targetEl;
        } else if (step.target.includes('#right-sidebar')) {
          targetEl = document.querySelector('#btn-expand-right-floating') || targetEl;
        } else {
          targetEl = document.querySelector('#mobile-export-bar') || targetEl;
        }
      }

      if (targetEl && this.focusBox && this.popoverCard) {
        let rect = targetEl.getBoundingClientRect();
        
        // On mobile/tablet in export step, calculate exact full union bounding box
        if (step.id === 'export' && !isDesktopHeader) {
          const toggleBtn = document.getElementById('btn-mobile-export-toggle');
          const dropdown = document.getElementById('mobile-export-dropdown');
          if (toggleBtn && dropdown) {
            const rBtn = toggleBtn.getBoundingClientRect();
            const rDrop = dropdown.getBoundingClientRect();
            const minT = Math.min(rBtn.top, rDrop.top);
            const minL = Math.min(rBtn.left, rDrop.left);
            const maxR = Math.max(rBtn.right, rDrop.right);
            const maxB = Math.max(rBtn.bottom, rDrop.bottom);
            rect = {
              top: minT,
              left: minL,
              right: maxR,
              bottom: maxB,
              width: maxR - minL,
              height: maxB - minT
            };
          }
        }

        const pad = 6;
        const focusTop = Math.max(4, rect.top - pad);
        const focusLeft = Math.max(4, rect.left - pad);
        const focusW = Math.min(window.innerWidth - 8, Math.max(40, rect.width + pad * 2));
        const focusH = Math.min(window.innerHeight - 8, Math.max(40, rect.height + pad * 2));

        this.focusBox.style.setProperty('transform', `translate3d(${focusLeft}px, ${focusTop}px, 0)`, 'important');
        this.focusBox.style.setProperty('width', `${focusW}px`, 'important');
        this.focusBox.style.setProperty('height', `${focusH}px`, 'important');

        // Responsive Popover Card Placement - STRICT ZERO-COLLISION
        const cardW = Math.min(window.innerWidth - 32, 340);
        const cardH = this.popoverCard.offsetHeight || 220;
        let cardLeft = (window.innerWidth - cardW) / 2;
        let cardTop = window.innerHeight - cardH - 24;

        if (window.innerWidth > 1024) {
          // Desktop Studio View:
          if (step.id === 'theme-menu') {
            cardLeft = rect.right + 24;
            cardTop = Math.max(80, Math.min(window.innerHeight - cardH - 30, rect.top + 20));
          } else if (step.id === 'courses') {
            cardLeft = Math.max(20, rect.left - cardW - 24);
            cardTop = Math.max(80, Math.min(window.innerHeight - cardH - 30, rect.top + 20));
          } else if (step.id === 'controls' || step.id === 'aspect-ratio') {
            // Popover is anchored near bottom -> Place guide card cleanly ABOVE the popover with 24px gap
            cardLeft = (window.innerWidth - cardW) / 2;
            if (rect.top - cardH - 24 >= 60) {
              cardTop = rect.top - cardH - 24;
            } else {
              cardTop = Math.min(window.innerHeight - cardH - 20, rect.bottom + 24);
            }
          } else if (step.id === 'export') {
            cardLeft = Math.max(20, Math.min(window.innerWidth - cardW - 20, rect.left - (cardW - rect.width) / 2));
            cardTop = Math.min(window.innerHeight - cardH - 20, rect.bottom + 24);
          }
        } else {
          // Mobile & Tablet (<= 1024px / Drawer mode):
          if (step.id === 'controls' || step.id === 'aspect-ratio') {
            if (rect.top - cardH - 20 >= 16) {
              cardTop = rect.top - cardH - 20;
            } else {
              cardTop = Math.min(window.innerHeight - cardH - 16, rect.bottom + 20);
            }
            cardLeft = (window.innerWidth - cardW) / 2;
          } else if (step.id === 'export') {
            // Export menu is at the top of the mobile screen -> Place guide card cleanly BELOW it
            cardTop = Math.min(window.innerHeight - cardH - 16, rect.bottom + 20);
            cardLeft = (window.innerWidth - cardW) / 2;
          } else {
            // Left or Right sidebar open on mobile: place card cleanly anchored at the bottom
            cardTop = window.innerHeight - cardH - 24;
            cardLeft = (window.innerWidth - cardW) / 2;
          }
        }

        // Enforce strict viewport boundaries
        cardLeft = Math.max(16, Math.min(window.innerWidth - cardW - 16, cardLeft));
        cardTop = Math.max(16, Math.min(window.innerHeight - cardH - 16, cardTop));

        this.popoverCard.style.setProperty('transform', `translate3d(${cardLeft}px, ${cardTop}px, 0)`, 'important');
        this.popoverCard.style.setProperty('width', `${cardW}px`, 'important');

        // Elevate focused target element above overlay
        document.querySelectorAll('.tour-highlighted-element').forEach(el => {
          el.classList.remove('tour-highlighted-element');
        });
        if (targetEl) {
          targetEl.classList.add('tour-highlighted-element');
        }
        if (step.id === 'export' && !isDesktopHeader) {
          const toggleBtn = document.getElementById('btn-mobile-export-toggle');
          const dropdown = document.getElementById('mobile-export-dropdown');
          if (toggleBtn) toggleBtn.classList.add('tour-highlighted-element');
          if (dropdown) dropdown.classList.add('tour-highlighted-element');
        }
      }
    };

    // Calculate immediately and schedule follow-ups as panel animations finish
    requestAnimationFrame(applyPosition);
    setTimeout(applyPosition, 80);
    setTimeout(applyPosition, 260);
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.renderStep();
    } else {
      if (window.soundFX) window.soundFX.play('success');
      this.finish();
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.renderStep();
    }
  }

  finish() {
    window.isTourActive = false;
    document.querySelectorAll('.tour-highlighted-element').forEach(el => {
      el.classList.remove('tour-highlighted-element');
    });
    if (this.overlay) {
      this.overlay.classList.add('hidden');
    }
    const isMobile = window.innerWidth <= 1280;
    const popover = document.getElementById('canvas-controls-popover');
    const ratioPopover = document.getElementById('canvas-ratio-popover');
    if (popover) {
      popover.classList.add('hidden');
      popover.style.display = '';
    }
    if (ratioPopover) {
      ratioPopover.classList.add('hidden');
      ratioPopover.style.display = '';
    }
    if (isMobile) {
      if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
      if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
      const mobileExportDropdown = document.getElementById('mobile-export-dropdown');
      const mobileChevron = document.getElementById('mobile-export-chevron');
      if (mobileExportDropdown) mobileExportDropdown.classList.add('hidden');
      if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
    } else {
      if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(false);
      if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(false);
    }
    if (window.schedullyApp && typeof window.schedullyApp.syncMobilePipVisibility === 'function') {
      window.schedullyApp.syncMobilePipVisibility(false);
    }
    try {
      localStorage.setItem('schedully_tour_seen', 'true');
    } catch (e) {}
  }
}

// Auto-initialize Liquid Glass Presets, Theme Style & Tour on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initLiquidGlassPresets();
    initThemeStyleEngine();
    window.schedullyTour = new SchedullyTourController();
  });
} else {
  initLiquidGlassPresets();
  initThemeStyleEngine();
  window.schedullyTour = new SchedullyTourController();
}

