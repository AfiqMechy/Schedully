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
    this.activeDevice = localStorage.getItem('schedully_active_device') || 'phone';

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
    this.gridStartHour = 8;
    this.gridEndHour = 18;
    this.classes = [];
    this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.gridWidthVal = 100;
    this.gridHeightVal = 49;
    this.gridFontSizeVal = 9;
    this.gridYPosVal = 0;
    this.gridXPosVal = 0;

    const storedZoom = parseFloat(localStorage.getItem('schedully_zoom_scale'));
    const getOptimalFitScale = () => {
      if (window.innerWidth <= 640) return 0.95;
      if (window.innerWidth <= 1280) return 0.85;
      const availableH = window.innerHeight - 200;
      const fit = Math.min(0.85, Math.max(0.60, Math.round((availableH / 770) * 20) / 20));
      return fit;
    };
    this.zoomScale = (!isNaN(storedZoom) && storedZoom >= 0.4 && storedZoom <= 1.5) 
      ? storedZoom 
      : getOptimalFitScale();

    // Side Sliders Customization Layout State (Left vs Right assignment + Hidden list)
    try {
      const storedLayout = localStorage.getItem('schedully_slider_layout');
      this.sliderLayout = storedLayout ? JSON.parse(storedLayout) : null;
      if (!this.sliderLayout || !Array.isArray(this.sliderLayout.left) || !Array.isArray(this.sliderLayout.right)) {
        this.sliderLayout = { left: ['layout', 'opacity', 'blur'], right: ['zoom', 'radius', 'font'], hidden: [] };
      }
      if (!Array.isArray(this.sliderLayout.hidden)) {
        this.sliderLayout.hidden = [];
      }
    } catch (e) {
      this.sliderLayout = { left: ['layout', 'opacity', 'blur'], right: ['zoom', 'radius', 'font'], hidden: [] };
    }

    this.initDOMElements();
    this.bindEvents();
    this.switchDevice(this.activeDevice, false);
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
    if (typeof this.applyCanvasZoom === 'function') {
      this.applyCanvasZoom(false);
    }
    document.body.classList.add('app-ready');
    this.updateHistoryButtonUI();
    this.setupAutoImmersiveFullscreen();
  }

  setupAutoImmersiveFullscreen() {
    // Edge-to-edge status bar background matching: ensure theme-color matches current canvas
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark-mode');
      const themeColor = isDark ? '#0B0F19' : '#F6F8FB';
      let metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        document.head.appendChild(metaTheme);
      }
      metaTheme.setAttribute('content', themeColor);
    };
    updateThemeColor();
    // Also listen for theme toggles to update theme-color dynamically
    const observer = new MutationObserver(() => updateThemeColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
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
    this.aiScanOverlay = document.getElementById('ai-scan-fullscreen-overlay');
    this.ocrParsingToast = document.getElementById('ocr-parsing-toast-banner');
    this.ocrParsingToastText = document.getElementById('ocr-parsing-toast-text');
    
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
    this.settingsCoursesBadge = document.getElementById('settings-courses-badge');
    this.btnClearAll = document.getElementById('btn-clear-all');
    this.universalTimetableGrid = document.getElementById('universal-timetable-grid');
    this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    this.courseSearchDock = document.getElementById('course-search-dock');
    this.btnFloatingCourseSearch = document.getElementById('btn-floating-course-search');
    this.btnCloseCourseSearch = document.getElementById('btn-close-course-search');
    this.courseSearchContainer = document.getElementById('course-search-container');
    this.courseSearchInput = document.getElementById('course-search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.searchQuery = '';
    this.activeSwapCourseId = null;
    this.lastSwapUndoState = null;
    this.historyUndoStack = [];
    this.historyRedoStack = [];
    this._isPerformingHistoryAction = false;
    this.btnHistoryUndo = document.getElementById('btn-history-undo');
    this.btnHistoryRedo = document.getElementById('btn-history-redo');
    this.gridCourseActionPill = document.getElementById('grid-course-action-pill');
    this.gridSwapToast = document.getElementById('grid-swap-toast');
    this.gridSwapToastMsg = document.getElementById('grid-swap-toast-msg');
    this.btnGridSwapUndo = document.getElementById('btn-grid-swap-undo');
    this.btnNudgeTimeMinus = document.getElementById('btn-nudge-time-minus');
    this.btnNudgeTimePlus = document.getElementById('btn-nudge-time-plus');
    this.btnNudgeEditCard = document.getElementById('btn-nudge-edit-card');
    this.btnNudgeCancel = document.getElementById('btn-nudge-cancel');
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
    this.currentTitleBarMode = 'title';

    this.inputTrademark = document.getElementById('input-trademark-text');
    this.lockTrademarkFooter = document.getElementById('lock-trademark-footer');
    this.lockTrademarkText = document.getElementById('lock-trademark-text');
    this.showTrademark = false;
    this.trademarkText = 'Schedully • Student Edition';
    this.trademarkStyle = 'default';

    this.fontScaleAll = 1.0;
    this.fontScaleCards = 1.0;
    this.fontScaleHeader = 1.0;
    this.fontScaleTitle = 1.0;
    this.fontScaleTrademark = 1.0;
    this.gridFontScale = 1.0;

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
    this.ocrTranslateLangLabel = document.getElementById('ocr-translate-lang-label');
    this.ocrTranslateLangDesc = document.getElementById('ocr-translate-lang-desc');
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
    this.initHideUiFeature();
  }

  initHideUiFeature() {
    const btnToggleHideUi = document.getElementById('btn-toggle-hide-ui');
    const floatingHideUiIsland = document.getElementById('floating-hide-ui-island');
    const iconHideUi = document.getElementById('icon-hide-ui');
    let hideUiTimeout = null;

    if (!btnToggleHideUi || !floatingHideUiIsland) return;

    const eyeOffSvg = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
    const eyeOnSvg = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';

    const startHideUiTimer = () => {
      if (hideUiTimeout) clearTimeout(hideUiTimeout);
      if (!document.body.classList.contains('ui-hidden-mode')) return;
      hideUiTimeout = setTimeout(() => {
        if (document.body.classList.contains('ui-hidden-mode')) {
          floatingHideUiIsland.classList.add('hide-ui-circle-faded');
        }
      }, 3000);
    };

    const wakeHideUiCircle = () => {
      if (document.body.classList.contains('ui-hidden-mode')) {
        floatingHideUiIsland.classList.remove('hide-ui-circle-faded');
        startHideUiTimer();
      }
    };

    btnToggleHideUi.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = document.body.classList.toggle('ui-hidden-mode');
      if (isHidden) {
        // Entered Hide UI mode
        btnToggleHideUi.setAttribute('title', 'Show UI');
        btnToggleHideUi.setAttribute('aria-label', 'Show UI');
        floatingHideUiIsland.setAttribute('title', 'Show UI');
        if (iconHideUi) iconHideUi.innerHTML = eyeOnSvg;
        
        // Close sidebars & popovers if open
        const popover = document.getElementById('canvas-controls-popover');
        const ratioPopover = document.getElementById('canvas-ratio-popover');
        const addCourseCard = document.getElementById('floating-add-course-wizard-card');
        const settingsCard = document.getElementById('floating-schedule-settings-card');
        const paletteCard = document.getElementById('floating-palette-mode-card');
        const fontCard = document.getElementById('floating-font-style-card');
        const daysCard = document.getElementById('floating-days-time-card');
        const importPopover = document.getElementById('import-menu-popover');

        if (popover) popover.classList.add('hidden');
        if (ratioPopover) ratioPopover.classList.add('hidden');
        if (addCourseCard) addCourseCard.classList.add('hidden');
        if (settingsCard) settingsCard.classList.add('hidden');
        if (paletteCard) paletteCard.classList.add('hidden');
        if (fontCard) fontCard.classList.add('hidden');
        if (daysCard) daysCard.classList.add('hidden');
        if (importPopover) importPopover.classList.add('hidden');
        if (typeof window.toggleLeftSidebar === 'function') window.toggleLeftSidebar(true);
        if (typeof window.toggleRightSidebar === 'function') window.toggleRightSidebar(true);
        const leftSidebar = document.getElementById('left-sidebar');
        const rightSidebar = document.getElementById('right-sidebar');
        if (leftSidebar) {
          leftSidebar.classList.add('sidebar-collapsed-left');
          leftSidebar.classList.remove('sidebar-open-left', 'sidebar-expanded');
        }
        if (rightSidebar) {
          rightSidebar.classList.add('sidebar-collapsed-right');
          rightSidebar.classList.remove('sidebar-open-right', 'sidebar-expanded');
        }

        floatingHideUiIsland.classList.remove('hide-ui-circle-faded');
        startHideUiTimer();
      } else {
        // Exited Hide UI mode — keep sidebars safely collapsed
        if (hideUiTimeout) clearTimeout(hideUiTimeout);
        floatingHideUiIsland.classList.remove('hide-ui-circle-faded');
        btnToggleHideUi.setAttribute('title', 'Hide UI');
        btnToggleHideUi.setAttribute('aria-label', 'Hide UI');
        floatingHideUiIsland.setAttribute('title', 'Hide UI');
        if (iconHideUi) iconHideUi.innerHTML = eyeOffSvg;
        const leftSidebar = document.getElementById('left-sidebar');
        const rightSidebar = document.getElementById('right-sidebar');
        if (leftSidebar) {
          leftSidebar.classList.add('sidebar-collapsed-left');
          leftSidebar.classList.remove('sidebar-open-left', 'sidebar-expanded');
        }
        if (rightSidebar) {
          rightSidebar.classList.add('sidebar-collapsed-right');
          rightSidebar.classList.remove('sidebar-open-right', 'sidebar-expanded');
        }
      }
    });

    // Touch/click screen anywhere wakes up the Hide UI circle in hidden mode
    const wakeEvents = ['pointerdown', 'touchstart', 'mousedown'];
    wakeEvents.forEach(evt => {
      window.addEventListener(evt, () => {
        if (document.body.classList.contains('ui-hidden-mode')) {
          wakeHideUiCircle();
        }
      }, { passive: true });
    });
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

  switchDevice(device, save = true) {
    if (!device) return;
    this.activeDevice = device;

    document.querySelectorAll('#device-type-toggles [data-device]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-device') === device);
    });

    if (typeof window.syncGlassSliders === 'function') {
      window.syncGlassSliders();
    }

    if (!this.phoneCanvas) this.phoneCanvas = document.getElementById('phone-canvas');
    if (!this.stageDeviceLabel) this.stageDeviceLabel = document.getElementById('stage-device-label');
    if (!this.stageTitleBar) this.stageTitleBar = document.getElementById('stage-title-bar');

    const lockUIToggle = document.getElementById('toggle-lock-ui');
    const wrapper = document.getElementById('main-phone-wrapper');
    const hasWallpaper = !!localStorage.getItem('schedully_wallpaper_data');
    const wallpaperClass = hasWallpaper ? ' has-photo-wallpaper' : '';

    const lockTimeEl = document.getElementById('lock-time');
    if (lockTimeEl && device !== 'watch') {
      lockTimeEl.style.removeProperty('color');
      lockTimeEl.style.removeProperty('text-shadow');
    }

    if (this.phoneCanvas) {
      if (device === 'tablet') {
        this.phoneCanvas.className = `m3-phone-canvas canvas-tablet${wallpaperClass}`;
        if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE TABLET LOCKSCREEN PREVIEW';
        if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '920px';
        if (wrapper) {
          wrapper.classList.add('tablet-mode');
          wrapper.classList.remove('paper-mode', 'watch-mode', 'story-mode');
        }
        if (lockUIToggle) lockUIToggle.style.display = 'flex';
        const watchPanel = document.getElementById('watch-layout-panel');
        if (watchPanel) watchPanel.style.display = 'none';
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

      this.phoneCanvas.style.width = '';
      this.phoneCanvas.style.height = '';
    }

    if (typeof this.updateCanvasScreenRatio === 'function') {
      this.updateCanvasScreenRatio();
    }

    if (typeof this.renderTimetableGrid === 'function') {
      this.renderTimetableGrid();
    }

    if (typeof window.applyZoom === 'function') {
      window.applyZoom(false);
    }

    if (save) {
      try {
        localStorage.setItem('schedully_active_device', device);
      } catch (e) {}
      if (typeof this._stagePending === 'function') {
        this._stagePending(true);
      }
    }
  }

  setMode(mode, save = true) {
    if (!mode) return;
    this.currentMode = mode;
    if (save) {
      try {
        localStorage.setItem('schedully_theme_mode', mode);
      } catch (e) {}
    }
    // Sync UI mode dots
    document.querySelectorAll('.theme-mode-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-mode') === mode);
    });
    this.applyThemeEngine();
    this.renderAll();
    if (save && typeof this._stagePending === 'function') {
      this._stagePending(true);
    }
  }

  setPalette(paletteKey, save = true) {
    if (!paletteKey) return;
    this.currentPalette = paletteKey;
    if (save) {
      try {
        localStorage.setItem('schedully_theme_palette', paletteKey);
      } catch (e) {}
    }
    // Sync palette dots in UI
    document.querySelectorAll('.palette-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-palette') === paletteKey);
    });
    this.applyThemeEngine();
    this.renderAll();
    if (save && typeof this._stagePending === 'function') {
      this._stagePending(true);
    }
  }

  applyThemeEngine() {
    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }

    document.body.classList.toggle('dark-mode', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark');
    document.documentElement.classList.toggle('dark-mode', resolvedMode === 'dark');

    // Sync UI mode dots
    document.querySelectorAll('.theme-mode-dot').forEach(d => {
      d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
    });

    // Sync bottom capsule theme toggle button title
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    if (btnThemeToggle) {
      btnThemeToggle.setAttribute('title', resolvedMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }

    let paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    let selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;

    const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');

    // If Photo Wallpaper is active, synthesize a fully adaptive palette from the 3-color wallpaper palette
    if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
      const primaryHex   = this.wallpaperPrimary   || this.wallpaperSwatches[0];
      const secondaryHex = this.wallpaperSecondary || this.wallpaperSwatches[1] || primaryHex;
      const tertiaryHex  = this.wallpaperTertiary  || this.wallpaperSwatches[2] || secondaryHex;
      const isDarkHex = this._isColorDark(primaryHex);

      // Parse primary RGB for bg tinting
      let pr = 37, pg = 99, pb = 235;
      if (primaryHex.startsWith('#') && primaryHex.length === 7) {
        pr = parseInt(primaryHex.slice(1, 3), 16) || 37;
        pg = parseInt(primaryHex.slice(3, 5), 16) || 99;
        pb = parseInt(primaryHex.slice(5, 7), 16) || 235;
      }
      // Parse secondary for surface tinting
      let sr = pr, sg = pg, sb = pb;
      if (secondaryHex.startsWith('#') && secondaryHex.length === 7) {
        sr = parseInt(secondaryHex.slice(1, 3), 16) || sr;
        sg = parseInt(secondaryHex.slice(3, 5), 16) || sg;
        sb = parseInt(secondaryHex.slice(5, 7), 16) || sb;
      }

      const onPrimaryHex = isDarkHex ? '#FFFFFF' : '#0F172A';
      const isDarkTheme = (resolvedMode === 'dark');
      const adaptiveBg = isDarkTheme ? '#0B0F19' : '#F6F8FB';
      const adaptiveSurface = isDarkTheme ? '#111827' : '#FFFFFF';
      const adaptiveVariant = isDarkTheme ? 'rgba(30, 41, 59, 0.85)' : 'rgba(241, 245, 249, 0.85)';
      const adaptiveGridSurface = isDarkTheme ? '#111827' : '#FFFFFF';

      // Dedicated distinct header color: slightly deeper & rich framing shade
      let headerColorHex = this.wallpaperHeader;
      if (!headerColorHex) {
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const headerL = resolvedMode === 'dark' ? Math.max(0.18, pl * 0.72) : Math.min(0.40, pl * 0.82);
        headerColorHex = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.1), headerL));
      }

      selectedTheme = {
        top: primaryHex,
        secondary: secondaryHex,
        tertiary: tertiaryHex,
        bottom: primaryHex + (resolvedMode === 'dark' ? '30' : '18'),
        bg: adaptiveBg,
        surface: adaptiveSurface,
        variant: adaptiveVariant,
        defaultBg: adaptiveBg,
        defaultHeader: headerColorHex,
        defaultSurface: adaptiveGridSurface,
        text: resolvedMode === 'dark' ? '#F8FAFC' : '#0F172A',
        subtext: resolvedMode === 'dark' ? '#94A3B8' : '#475569',
        outline: resolvedMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        onPrimary: onPrimaryHex,
        swatches: this.wallpaperSwatches,
        courseSwatches: this.wallpaperSwatches.slice(0, 6)
      };
    }

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

    // Set secondary & tertiary CSS variables if available from wallpaper extraction
    if (selectedTheme.secondary) {
      root.style.setProperty('--m3-sys-color-secondary', selectedTheme.secondary);
      root.style.setProperty('--m3-sys-color-on-secondary', this._isColorDark(selectedTheme.secondary) ? '#FFFFFF' : '#111827');
      root.style.setProperty('--m3-sys-color-secondary-container', selectedTheme.secondary + (resolvedMode === 'dark' ? '28' : '1E'));
    }
    if (selectedTheme.tertiary) {
      root.style.setProperty('--m3-sys-color-tertiary', selectedTheme.tertiary);
      root.style.setProperty('--m3-sys-color-on-tertiary', this._isColorDark(selectedTheme.tertiary) ? '#FFFFFF' : '#111827');
      root.style.setProperty('--m3-sys-color-tertiary-container', selectedTheme.tertiary + (resolvedMode === 'dark' ? '28' : '1E'));
    }

    // Apply default high-contrast font color for headers/title
    if (!this.userHasPickedFontColor) {
      root.style.setProperty('--m3-font-custom-color', selectedTheme.text);
    } else if (this.customFontColor) {
      this.applyFontColor(this.customFontColor);
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
    if (!this.userHasPickedBgColor && !hasPhotoWallpaper) {
      this.phoneCanvas.style.backgroundColor = selectedTheme.defaultBg || selectedTheme.bg;
    } else if (this.customBgColor && !hasPhotoWallpaper) {
      this.phoneCanvas.style.backgroundColor = this.customBgColor;
      this.updateClockContrast(this.customBgColor);
    }
    if (!this.userHasPickedHeaderColor) {
      this.applyHeaderColor(selectedTheme.defaultHeader || selectedTheme.bottom);
    } else if (this.customHeaderColor) {
      this.applyHeaderColor(this.customHeaderColor);
    }
    if (!this.userHasPickedSurfaceColor) {
      document.documentElement.style.setProperty('--m3-grid-surface-bg', selectedTheme.defaultSurface || selectedTheme.surface);
    } else if (this.customSurfaceColor) {
      document.documentElement.style.setProperty('--m3-grid-surface-bg', this.customSurfaceColor);
    }
    if (this.userHasPickedTrademarkColor && this.customTrademarkColor) {
      this.applyTrademarkColor(this.customTrademarkColor);
    }

    const surfaceSwatches = document.querySelectorAll('#grid-surface-picker .color-swatch-btn, #floating-grid-surface-picker .floating-color-swatch-btn');
    const bgSwatches = document.querySelectorAll('#bg-color-picker .color-swatch-btn, #floating-bg-color-picker .floating-color-swatch-btn');
    const headerSwatches = document.querySelectorAll('#header-color-picker .color-swatch-btn, #floating-header-color-picker .floating-color-swatch-btn');
    const trademarkSwatches = document.querySelectorAll('#floating-trademark-color-picker .floating-color-swatch-btn');

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
      if (trademarkSwatches[idx]) {
        trademarkSwatches[idx].setAttribute('data-trademark', hex);
        trademarkSwatches[idx].style.backgroundColor = hex;
      }
    });

    if (typeof this.syncCustomColorPickersUI === 'function') {
      this.syncCustomColorPickersUI();
    }

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

    // If Photo Wallpaper is active, seamlessly adapt the app's primary color & container to the extracted wallpaper palette
    if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
      const primaryHex = this.wallpaperPrimary || this.wallpaperSwatches[0];
      const isDarkHex = this._isColorDark(primaryHex);
      const onPrimaryHex = isDarkHex ? '#FFFFFF' : '#0F172A';
      root.style.setProperty('--m3-sys-color-primary', primaryHex);
      root.style.setProperty('--m3-sys-color-primary-container', primaryHex + (resolvedMode === 'dark' ? '30' : '18'));
      root.style.setProperty('--m3-sys-color-on-primary', onPrimaryHex);

      // Auto-check lockscreen clock contrast on theme change
      this.updateClockContrast(selectedTheme.bg);

      let pr = 37, pg = 99, pb = 235;
      if (primaryHex.startsWith('#') && primaryHex.length === 7) {
        pr = parseInt(primaryHex.slice(1, 3), 16) || 37;
        pg = parseInt(primaryHex.slice(3, 5), 16) || 99;
        pb = parseInt(primaryHex.slice(5, 7), 16) || 235;
      }
      const wallpaperDotTint = resolvedMode === 'dark'
        ? `rgba(${pr}, ${pg}, ${pb}, 0.25)`
        : `rgba(${pr}, ${pg}, ${pb}, 0.22)`;
      const wallpaperBgTint = selectedTheme.bg;

      root.style.setProperty('--dot-matrix-color', wallpaperDotTint);
      root.style.setProperty('--m3-sys-color-bg', wallpaperBgTint);
      root.style.setProperty('--glass-dispersion-cyan', `rgba(${pr}, ${pg}, ${pb}, 0.35)`);
      root.style.setProperty('--glass-dispersion-pink', `rgba(${pr}, ${pg}, ${pb}, 0.20)`);

      this.applyDynamicThemeToElements({
        ...selectedTheme,
        top: primaryHex,
        onPrimary: onPrimaryHex,
        isWallpaperAdaptive: true,
        wallpaperDotTint,
        wallpaperBgTint
      });
    } else {
      this.updateClockContrast(selectedTheme.bg);
      root.style.setProperty('--dot-matrix-color', resolvedMode === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'rgba(15, 23, 42, 0.08)');
      this.applyDynamicThemeToElements(selectedTheme);
    }

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

    // Detect dark mode (bg is dark if luminance < 0.25)
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

    // Dark mode classes synced across body and html root
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('dark-mode', isDark);

    // DARK MODE: apply dark surfaces & contrast to all layout elements
    if (isDark) {
      document.body.style.backgroundColor = bg;
      const mainEl = document.querySelector('main');
      if (mainEl) {
        if (theme.isWallpaperAdaptive) {
          mainEl.style.backgroundColor = theme.wallpaperBgTint || bg;
          mainEl.style.setProperty('--dot-matrix-color', theme.wallpaperDotTint || 'rgba(255, 255, 255, 0.12)');
        } else {
          mainEl.style.backgroundColor = bg;
          mainEl.style.setProperty('--dot-matrix-color', 'rgba(255, 255, 255, 0.09)');
        }
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
          if (!el.closest('.btn-theme-primary') && !el.closest('#floating-courses-count-circle') && !el.closest('#btn-toggle-canvas-popover') && !el.closest('.pill-btn.active') && !el.classList.contains('badge-adaptive-pill') && !el.closest('.badge-adaptive-pill')) {
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
      // LIGHT MODE: reset layout to neutral whites with adaptive wallpaper tinting if active
      document.body.style.backgroundColor = '';
      const mainEl = document.querySelector('main');
      if (mainEl) {
        if (theme.isWallpaperAdaptive) {
          mainEl.style.backgroundColor = theme.wallpaperBgTint || '#F6F8FB';
          mainEl.style.setProperty('--dot-matrix-color', theme.wallpaperDotTint || 'rgba(15, 23, 42, 0.08)');
        } else {
          mainEl.style.backgroundColor = '';
          mainEl.style.setProperty('--dot-matrix-color', 'rgba(15, 23, 42, 0.08)');
        }
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

  // Helper: detect if a hex or rgb/rgba color is "dark" based on standard YIQ luminance formula (< 140)
  _isColorDark(colorStr) {
    if (!colorStr) return false;
    let r = 255, g = 255, b = 255;
    if (typeof colorStr === 'string' && colorStr.startsWith('#')) {
      if (colorStr.length === 7) {
        r = parseInt(colorStr.slice(1, 3), 16) || 0;
        g = parseInt(colorStr.slice(3, 5), 16) || 0;
        b = parseInt(colorStr.slice(5, 7), 16) || 0;
      } else if (colorStr.length === 4) {
        r = parseInt(colorStr[1] + colorStr[1], 16) || 0;
        g = parseInt(colorStr[2] + colorStr[2], 16) || 0;
        b = parseInt(colorStr[3] + colorStr[3], 16) || 0;
      }
    } else if (typeof colorStr === 'string' && colorStr.startsWith('rgb')) {
      const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (match) {
        r = parseInt(match[1], 10) || 0;
        g = parseInt(match[2], 10) || 0;
        b = parseInt(match[3], 10) || 0;
      }
    } else {
      return false;
    }
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 140;
  }


  applyHeaderColor(colorVal, isUserExplicit = false) {
    const root = document.documentElement;
    if (!colorVal) {
      if (isUserExplicit) {
        this.userHasPickedHeaderColor = false;
        this.customHeaderColor = null;
      }
      root.style.removeProperty('--m3-header-custom-bg');
      root.style.removeProperty('--m3-header-text-color');
      root.style.removeProperty('--m3-header-outline-color');
      return;
    }
    if (isUserExplicit) {
      this.userHasPickedHeaderColor = true;
      this.customHeaderColor = colorVal;
    }
    root.style.setProperty('--m3-header-custom-bg', colorVal);

    // Auto-calculate luminance contrast for header & title text
    const headerTextColor = this.getContrastColor(colorVal);
    const isDark = (headerTextColor === '#FFFFFF');
    const headerOutline = isDark ? 'rgba(255, 255, 255, 0.22)' : 'var(--m3-sys-color-outline)';

    root.style.setProperty('--m3-header-text-color', headerTextColor);
    root.style.setProperty('--m3-header-outline-color', headerOutline);
  }

  applyTrademarkColor(colorVal, isUserExplicit = false) {
    const root = document.documentElement;
    if (!colorVal) {
      if (isUserExplicit) {
        this.userHasPickedTrademarkColor = false;
        this.customTrademarkColor = null;
      }
      this.trademarkCustomBg = null;
      root.style.removeProperty('--trademark-pill-custom-bg');
      root.style.removeProperty('--trademark-pill-outline-color');
      root.style.removeProperty('--trademark-custom-text-color');
      return;
    }
    if (isUserExplicit) {
      this.userHasPickedTrademarkColor = true;
      this.customTrademarkColor = colorVal;
    }
    this.trademarkCustomBg = colorVal;
    root.style.setProperty('--trademark-pill-custom-bg', colorVal);

    // Auto-calculate luminance contrast for trademark text & outline
    const textColor = this.getContrastColor(colorVal);
    const isDark = (textColor === '#FFFFFF');
    const trademarkOutline = isDark ? 'rgba(255, 255, 255, 0.22)' : 'var(--m3-sys-color-outline)';

    root.style.setProperty('--trademark-custom-text-color', textColor);
    root.style.setProperty('--trademark-pill-outline-color', trademarkOutline);
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

  applyFontColor(colorVal, isUserExplicit = false) {
    const root = document.documentElement;
    if (colorVal) {
      if (isUserExplicit) {
        this.userHasPickedFontColor = true;
        this.customFontColor = colorVal;
      }
      root.style.setProperty('--m3-font-custom-color', colorVal);
      const phoneCanvas = document.getElementById('phone-canvas');
      if (phoneCanvas) {
        phoneCanvas.style.setProperty('--m3-font-custom-color', colorVal);
      }
    } else {
      if (isUserExplicit) {
        this.userHasPickedFontColor = false;
        this.customFontColor = null;
      }
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

  syncCustomColorPickersUI() {
    // 1. Grid Surface
    const surfaceVal = (this.userHasPickedSurfaceColor && this.customSurfaceColor) ? this.customSurfaceColor : '';
    document.querySelectorAll('#floating-grid-surface-picker .floating-color-swatch-btn, #grid-surface-picker .color-swatch-btn').forEach(btn => {
      const btnSurface = btn.getAttribute('data-surface') || '';
      const isMatch = surfaceVal && (btnSurface.toLowerCase() === surfaceVal.toLowerCase());
      btn.classList.toggle('active', !!isMatch);
    });
    const customSurfaceInput = document.getElementById('floating-custom-surface-color');
    if (customSurfaceInput && surfaceVal) customSurfaceInput.value = surfaceVal;

    // 2. Background
    const bgVal = (this.userHasPickedBgColor && this.customBgColor) ? this.customBgColor : '';
    document.querySelectorAll('#floating-bg-color-picker .floating-color-swatch-btn, #bg-color-picker .color-swatch-btn').forEach(btn => {
      const btnBg = btn.getAttribute('data-bg') || '';
      const isMatch = bgVal && (btnBg.toLowerCase() === bgVal.toLowerCase());
      btn.classList.toggle('active', !!isMatch);
    });
    const customBgInput = document.getElementById('floating-custom-bg-color');
    if (customBgInput && bgVal) customBgInput.value = bgVal;

    // 3. Header
    const headerVal = (this.userHasPickedHeaderColor && this.customHeaderColor) ? this.customHeaderColor : '';
    document.querySelectorAll('#floating-header-color-picker .floating-color-swatch-btn, #header-color-picker .color-swatch-btn').forEach(btn => {
      const btnHeader = btn.getAttribute('data-header') || '';
      const isMatch = headerVal && (btnHeader.toLowerCase() === headerVal.toLowerCase());
      btn.classList.toggle('active', !!isMatch);
    });
    const customHeaderInput = document.getElementById('floating-custom-header-color');
    if (customHeaderInput && headerVal) customHeaderInput.value = headerVal;

    // 4. Trademark
    const trademarkVal = (this.userHasPickedTrademarkColor && this.customTrademarkColor) ? this.customTrademarkColor : '';
    document.querySelectorAll('#floating-trademark-color-picker .floating-color-swatch-btn').forEach(btn => {
      const btnTrademark = btn.getAttribute('data-trademark') || '';
      const isMatch = trademarkVal && (btnTrademark.toLowerCase() === trademarkVal.toLowerCase());
      btn.classList.toggle('active', !!isMatch);
    });
    const customTrademarkInput = document.getElementById('floating-custom-trademark-color');
    if (customTrademarkInput && trademarkVal) customTrademarkInput.value = trademarkVal;

    // 5. Font
    const fontVal = (this.userHasPickedFontColor && this.customFontColor) ? this.customFontColor : '';
    document.querySelectorAll('#floating-font-color-picker .floating-color-swatch-btn, #font-color-picker .color-swatch-btn').forEach(btn => {
      const btnFont = btn.getAttribute('data-font') || '';
      const isMatch = fontVal && (btnFont.toLowerCase() === fontVal.toLowerCase());
      btn.classList.toggle('active', !!isMatch);
    });
    const customFontInput = document.getElementById('floating-custom-font-color');
    if (customFontInput && fontVal) customFontInput.value = fontVal;
  }

  syncTitleBarModeUI() {
    const isTitle = (this.currentTitleBarMode !== 'trademark');
    const isVisible = isTitle ? !!this.showTitle : !!this.showTrademark;
    
    // 1. Sync segment buttons in #title-trademark-mode-toggles
    document.querySelectorAll('#title-trademark-mode-toggles button, #title-trademark-mode-toggles .capsule-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-mode') === (isTitle ? 'title' : 'trademark'));
    });
    
    // 2. Sync visibility toggle eye button
    const btnToggleVis = document.getElementById('btn-toggle-title-visibility');
    if (btnToggleVis) {
      btnToggleVis.classList.toggle('active', isVisible);
      btnToggleVis.classList.toggle('title-hidden', !isVisible);
      const iconVis = btnToggleVis.querySelector('.icon-title-visible');
      const iconHid = btnToggleVis.querySelector('.icon-title-hidden');
      if (iconVis) iconVis.classList.toggle('hidden', !isVisible);
      if (iconHid) iconHid.classList.toggle('hidden', isVisible);
      btnToggleVis.setAttribute('title', isTitle
        ? (this.showTitle ? 'Hide Title' : 'Show Title')
        : (this.showTrademark ? 'Hide Trademark' : 'Show Trademark')
      );
    }
    
    // 3. Sync stage input value, placeholder, and disabled state
    if (this.inputTitleStage) {
      this.inputTitleStage.value = isTitle ? (this.timetableTitleText || 'Untitled') : (this.trademarkText || 'Schedully • Student Edition');
      this.inputTitleStage.placeholder = isTitle ? 'Timetable Title' : 'Trademark Text';
      this.inputTitleStage.classList.toggle('title-disabled', !isVisible);
      this.inputTitleStage.disabled = !isVisible;
    }

    // 4. Auto-expand Floating Layout & Style Card when controls popover is open
    const floatingTitleCard = document.getElementById('floating-title-card');
    const canvasPopover = document.getElementById('canvas-controls-popover');
    if (floatingTitleCard && canvasPopover && !canvasPopover.classList.contains('hidden')) {
      floatingTitleCard.classList.remove('hidden');
    }

    if (typeof this.syncFloatingEditorUI === 'function') {
      this.syncFloatingEditorUI();
    }

    window.syncGlassSliders?.();
  }

  updateTitleText(newText) {
    this.timetableTitleText = newText.trim() || 'Untitled';
    if (this.lockTitleText) this.lockTitleText.innerText = this.timetableTitleText;
    if (this.inputTitleStage && this.currentTitleBarMode !== 'trademark') {
      this.inputTitleStage.value = newText;
    }
    if (this.inputTitleSidebar) this.inputTitleSidebar.value = newText;
    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
  }

  setTitleVisibility(show, save = true) {
    this.showTitle = !!show;
    if (this.lockGridTitle) {
      this.lockGridTitle.style.setProperty('display', this.showTitle ? 'block' : 'none', 'important');
    }

    // Sync Sidebar #toggle-title pill toggle (YES / NO)
    document.querySelectorAll('#toggle-title .pill-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-val') === (this.showTitle ? 'yes' : 'no'));
    });

    this.syncTitleBarModeUI();

    if (save) {
      this._stagePending();
    }
    window.syncGlassSliders?.();
  }

  updateTrademarkText(newText) {
    this.trademarkText = (newText !== undefined && newText !== null) ? newText : 'Schedully • Student Edition';
    if (this.lockTrademarkText) {
      this.lockTrademarkText.innerText = this.trademarkText;
    }
    if (this.inputTrademark) {
      this.inputTrademark.value = this.trademarkText;
    }
    if (this.inputTitleStage && this.currentTitleBarMode === 'trademark') {
      this.inputTitleStage.value = this.trademarkText;
    }
    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
  }

  setTrademarkVisibility(show, save = true) {
    this.showTrademark = !!show;
    if (this.lockTrademarkFooter) {
      this.lockTrademarkFooter.style.setProperty('display', this.showTrademark ? 'inline-flex' : 'none', 'important');
      this.lockTrademarkFooter.classList.toggle('hidden', !this.showTrademark);
      this.lockTrademarkFooter.classList.toggle('is-hidden', !this.showTrademark);
    }
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

    this.syncTitleBarModeUI();

    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }
    if (this.showTrademark && typeof window.syncGlassSliders === 'function') {
      setTimeout(window.syncGlassSliders, 40);
    }
    if (save) {
      this._stagePending();
    }
    window.syncGlassSliders?.();
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

    this.wallpaperDimIntensity = 0;
    try {
      const savedDim = localStorage.getItem('schedully_wallpaper_dim');
      if (savedDim !== null) {
        this.wallpaperDimIntensity = Math.max(0, Math.min(100, parseInt(savedDim, 10) || 0));
      }
    } catch (e) {}
    document.documentElement.style.setProperty('--wallpaper-dim-val', `${(this.wallpaperDimIntensity || 0) / 100}`);

    this.setWallpaperDimming = (val, syncSlider = true) => {
      this.wallpaperDimIntensity = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
      document.documentElement.style.setProperty('--wallpaper-dim-val', `${this.wallpaperDimIntensity / 100}`);
      try { localStorage.setItem('schedully_wallpaper_dim', String(this.wallpaperDimIntensity)); } catch (e) {}
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
      if (syncSlider && typeof this.syncRightSlider === 'function') {
        this.syncRightSlider();
      }
    };

    this.setWallpaperBlur = (val, isEnabled = true, syncSlider = true) => {
      this.bgBlurIntensity = Math.max(0, Math.min(40, parseInt(val, 10) || 0));
      this.bgBlurEnabled = !!isEnabled;
      if (blurSlider) blurSlider.value = this.bgBlurIntensity;
      if (blurValText) blurValText.innerText = `${this.bgBlurIntensity}px`;
      if (toggleBgBlur) {
        toggleBgBlur.querySelectorAll('.pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === (isEnabled ? 'yes' : 'no'));
        });
        if (isEnabled) blurControl?.classList.remove('hidden');
        else blurControl?.classList.add('hidden');
      }
      document.documentElement.style.setProperty('--wallpaper-blur-val', isEnabled ? `${this.bgBlurIntensity}px` : '0px');
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
      if (syncSlider && typeof this.syncRightSlider === 'function') {
        this.syncRightSlider();
      }
    };

    if (toggleBgBlur) {
      toggleBgBlur.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const isEnabled = (btn.getAttribute('data-val') === 'yes');
          this.setWallpaperBlur(this.bgBlurIntensity, isEnabled);
          this._stagePending();
        });
      });
    }

    if (blurSlider) {
      blurSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10) || 0;
        this.setWallpaperBlur(val, this.bgBlurEnabled);
        this._stagePending();
      });
    }

    // Timetable Opacity Slider
    const opacitySlider = document.getElementById('slider-timetable-opacity');
    const opacityValText = document.getElementById('timetable-opacity-val');

    this.timetableOpacity = 100;

    this.setTimetableOpacity = (val, syncSlider = true) => {
      this.timetableOpacity = Math.max(20, Math.min(100, parseInt(val, 10) || 100));
      if (opacitySlider) opacitySlider.value = this.timetableOpacity;
      if (opacityValText) opacityValText.innerText = `${this.timetableOpacity}%`;
      document.documentElement.style.setProperty('--timetable-opacity', `${this.timetableOpacity / 100}`);
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
    };

    if (opacitySlider) {
      opacitySlider.addEventListener('input', (e) => {
        this.setTimetableOpacity(e.target.value);
        this._stagePending();
      });
    }

    // Timetable Dimensions & Positioning (Width, Height, Y-Position Offset)
    this.setTimetableWidthScale = (val, syncSlider = true) => {
      const widthVal = Math.max(50, Math.min(130, parseInt(val, 10) || 100));
      this.gridWidthVal = widthVal;
      const gridWidthValEl = document.getElementById('grid-width-val');
      if (gridWidthValEl) gridWidthValEl.value = this.gridWidthVal;
      
      const timetableContainer = document.getElementById('lock-timetable-container');
      if (timetableContainer) {
        timetableContainer.style.width = `${this.gridWidthVal}%`;
      }
      this.renderTimetableGrid();
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
    };

    this.setTimetableHeightScale = (val, syncSlider = true) => {
      const heightVal = Math.max(25, Math.min(90, parseInt(val, 10) || 49));
      this.gridHeightVal = heightVal;
      const gridHeightValEl = document.getElementById('grid-height-val');
      if (gridHeightValEl) gridHeightValEl.value = this.gridHeightVal;
      
      this.renderTimetableGrid();
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
    };

    this.setTimetableOffsetY = (val, syncSlider = true) => {
      const yVal = Math.max(-120, Math.min(150, parseInt(val, 10) || 0));
      this.gridYPosVal = yVal;
      const gridYPosValEl = document.getElementById('grid-ypos-val');
      if (gridYPosValEl) gridYPosValEl.value = this.gridYPosVal;
      
      const timetableContainer = document.getElementById('lock-timetable-container');
      if (timetableContainer) {
        timetableContainer.style.marginTop = `${this.gridYPosVal}px`;
      }
      this.renderTimetableGrid();
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
    };

    this.setTimetableOffsetX = (val, syncSlider = true) => {
      const xVal = Math.max(-150, Math.min(150, parseInt(val, 10) || 0));
      this.gridXPosVal = xVal;
      const timetableContainer = document.getElementById('lock-timetable-container');
      if (timetableContainer) {
        timetableContainer.style.marginLeft = `${this.gridXPosVal}px`;
      }
      this.renderTimetableGrid();
      if (syncSlider && typeof this.syncLeftFxSlider === 'function') {
        this.syncLeftFxSlider();
      }
    };

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
        const mainWrapper = document.getElementById('main-phone-wrapper');
        if (mainWrapper) mainWrapper.classList.remove('watch-shape-band', 'watch-shape-capsule', 'watch-shape-round');

        if (ratio === 'android' || ratio === 'band') {
          phoneCanvas.classList.add('watch-shape-band');
          if (mainWrapper) mainWrapper.classList.add('watch-shape-band');
          straps.forEach(s => s.classList.add('strap-band'));
          badgeLabel = 'Smart Band (1:1.9)';
        } else if (ratio === 'ios' || ratio === 'capsule') {
          phoneCanvas.classList.add('watch-shape-capsule');
          if (mainWrapper) mainWrapper.classList.add('watch-shape-capsule');
          straps.forEach(s => s.classList.add('strap-capsule'));
          badgeLabel = 'Pill Capsule (1:2.5)';
        } else if (ratio === 'standard' || ratio === 'round') {
          phoneCanvas.classList.add('watch-shape-round');
          if (mainWrapper) mainWrapper.classList.add('watch-shape-round');
          straps.forEach(s => s.classList.add('strap-round'));
          badgeLabel = 'Round (1:1)';
        } else {
          straps.forEach(s => s.classList.add('strap-squircle'));
          badgeLabel = 'Squircle (4:5)';
        }

        if (badge) badge.innerText = badgeLabel;

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
        if (window.soundFX) window.soundFX.play('tap');
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
            if (typeof window.applyZoom === 'function') {
              window.applyZoom(false);
            }
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
        let swatches = null;
        try {
          swatches = JSON.parse(localStorage.getItem('schedully_wallpaper_swatches') || 'null');
        } catch (e) {}
        if (swatches && Array.isArray(swatches) && swatches.length > 0) {
          this.wallpaperSwatches = swatches;
          this.wallpaperPrimary = localStorage.getItem('schedully_wallpaper_primary') || swatches[0];
          this.wallpaperSecondary = localStorage.getItem('schedully_wallpaper_secondary') || swatches[1];
          this.wallpaperTertiary = localStorage.getItem('schedully_wallpaper_tertiary') || swatches[2];
          this.wallpaperHeader = localStorage.getItem('schedully_wallpaper_header') || null;
          this.applyWallpaper(savedWallpaper, false); // Don't re-extract and overwrite shuffled swatches!
        } else {
          this.applyWallpaper(savedWallpaper, true);
        }
      }
    } catch (e) {}

    input?.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      this.compressWallpaperImage(file, (compressedDataUrl) => {
        this.wallpaperSwatches = null;
        this.wallpaperPrimary = null;
        this.wallpaperSecondary = null;
        this.wallpaperTertiary = null;
        this.wallpaperHeader = null;
        this.applyWallpaper(compressedDataUrl, true);
        this._stagePending(true);
      });

      // Clear input value so selecting the same file again triggers reliably
      e.target.value = '';
    });

    // Reset file input on label click before file picker opens
    document.querySelectorAll('label[for="wallpaper-image-input"]').forEach(lbl => {
      lbl.addEventListener('click', () => {
        if (input) input.value = '';
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

      if (window.soundFX) window.soundFX.play('palette');
      this.resyncColors(false);

      // Subtle icon rotation without changing button label or adding tick icon
      const icon = resyncBtn.querySelector('svg');
      if (icon) {
        icon.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          icon.style.transition = 'none';
          icon.style.transform = '';
        }, 500);
      }
    });
  }

  resyncColors(skipToast = true) {
    this.userHasPickedBgColor = false;
    this.userHasPickedHeaderColor = false;
    this.userHasPickedSurfaceColor = false;
    this.userHasPickedFontColor = false;
    this.userHasPickedTrademarkColor = false;
    this.customBgColor = null;
    this.customHeaderColor = null;
    this.customSurfaceColor = null;
    this.customFontColor = null;
    this.customTrademarkColor = null;
    this.globalAdaptiveColor = true;

    // Update Quick Setting Pill if exists
    document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-val') === 'yes');
    });

    // Clear all manual overrides on all classes so they strictly re-sync with the palette/wallpaper theme
    (this.classes || []).forEach(c => {
      delete c.customColor;
      delete c.isManualCustomColor;
      delete c.fontColor;
    });

    const wallpaperData = this.currentWallpaperData || localStorage.getItem('schedully_wallpaper_data');
    if (wallpaperData) {
      this.extractColorsFromImage(wallpaperData, false, true);
    } else {
      let resolvedMode = this.currentMode;
      if (resolvedMode === 'auto') {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolvedMode = isDark ? 'dark' : 'light';
      }
      const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
      const selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;
      if (selectedTheme && selectedTheme.courseSwatches) {
        (this.classes || []).forEach((c, idx) => {
          c.customColor = selectedTheme.courseSwatches[idx % selectedTheme.courseSwatches.length];
          c.color = selectedTheme.courseSwatches[idx % selectedTheme.courseSwatches.length];
        });
      }
      this.applyThemeEngine();
    }

    this.renderAll();
    if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
      this.renderWatchGlance();
    }
    if (typeof this.syncFloatingEditorUI === 'function') {
      this.syncFloatingEditorUI();
    }
    if (typeof this.syncTitleBarModeUI === 'function') {
      this.syncTitleBarModeUI();
    }
    if (!skipToast && typeof showToast === 'function') {
      showToast('Theme & course colors resynced!', 'info');
    }
    this._stagePending(true);
  }

  compressWallpaperImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX_WIDTH = 1080;
        const MAX_HEIGHT = 1920;
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

        // JPEG at 0.78 quality produces crystal-clear 1080p mobile wallpaper with ultra-fast cloud payload (<200KB)
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.78);
        callback(compressedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  setWallpaperModeUI(isActive) {
    const paletteRow = document.getElementById('theme-palette-row');
    const badge = document.getElementById('wallpaper-active-badge');
    const btnRandTheme = document.getElementById('btn-randomize-theme');
    const btnRandCourse = document.getElementById('btn-randomize-course-colors');
    const btnRandSchedule = document.getElementById('btn-randomize-colors');
    const quickRemoveWp = document.getElementById('btn-quick-remove-wallpaper');
    const quickAdaptiveRow = document.getElementById('toggle-quick-adaptive')?.closest('.opt-row');

    if (isActive) {
      paletteRow?.classList.add('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.add('disabled-by-wallpaper');
      badge?.classList.remove('hidden');
      quickRemoveWp?.classList.remove('hidden');

      // Theme shuffle (🔄) stays active to shuffle extracted wallpaper swatches and anchor colors
      if (btnRandTheme) {
        btnRandTheme.classList.remove('disabled-by-wallpaper');
        btnRandTheme.removeAttribute('disabled');
        btnRandTheme.title = "Shuffle Wallpaper Palette Accent & Primary Anchor";
      }

      // Course card color shuffle (🎨) stays ACTIVE so you can shuffle card colors from the wallpaper palette
      if (btnRandCourse) {
        btnRandCourse.classList.remove('disabled-by-wallpaper');
        btnRandCourse.removeAttribute('disabled');
        btnRandCourse.title = "Shuffle Course Colors (from Wallpaper Palette)";
      }
      if (btnRandSchedule) {
        btnRandSchedule.classList.remove('disabled-by-wallpaper');
        btnRandSchedule.removeAttribute('disabled');
        btnRandSchedule.title = "Shuffle Course Colors (from Wallpaper Palette)";
      }
    } else {
      paletteRow?.classList.remove('disabled-by-wallpaper');
      quickAdaptiveRow?.classList.remove('disabled-by-wallpaper');
      badge?.classList.add('hidden');
      quickRemoveWp?.classList.add('hidden');

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
    const floatingControlsBar = document.getElementById('floating-wallpaper-controls-bar');
    const floatingUploadContainer = document.getElementById('floating-wallpaper-upload-container');
    const floatingThumbPreview = document.getElementById('floating-wallpaper-thumb-preview');

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

    if (floatingControlsBar && floatingThumbPreview) {
      floatingThumbPreview.src = dataUrl;
      floatingControlsBar.classList.remove('hidden');
    }

    if (floatingUploadContainer) {
      floatingUploadContainer.classList.add('hidden');
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
    } else {
      if (this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (this.wallpaperSwatches[idx]) {
            dot.setAttribute('data-color', this.wallpaperSwatches[idx]);
            dot.style.backgroundColor = this.wallpaperSwatches[idx];
          }
        });
        if (this.wallpaperHeader) {
          this.applyHeaderColor(this.wallpaperHeader);
        }
      }
      this.applyThemeEngine();
    }
  }

  removeWallpaper(isSwitchingPreset = false) {
    const phoneCanvas = document.getElementById('phone-canvas');
    const wallpaperLayer = document.getElementById('phone-wallpaper-layer');
    const controlsBar = document.getElementById('wallpaper-controls-bar');
    const uploadContainer = document.getElementById('wallpaper-upload-container');
    const floatingControlsBar = document.getElementById('floating-wallpaper-controls-bar');
    const floatingUploadContainer = document.getElementById('floating-wallpaper-upload-container');
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

    if (floatingControlsBar) {
      floatingControlsBar.classList.add('hidden');
    }

    if (floatingUploadContainer) {
      floatingUploadContainer.classList.remove('hidden');
    }

    this.wallpaperSwatches = null;
    this.wallpaperPrimary = null;
    this.wallpaperSecondary = null;
    this.wallpaperTertiary = null;
    this.wallpaperHeader = null;

    // Un-grey and re-enable color palette and randomizer buttons
    this.setWallpaperModeUI(false);

    try {
      localStorage.removeItem('schedully_wallpaper_data');
      localStorage.removeItem('schedully_wallpaper_swatches');
      localStorage.removeItem('schedully_wallpaper_primary');
      localStorage.removeItem('schedully_wallpaper_secondary');
      localStorage.removeItem('schedully_wallpaper_tertiary');
      localStorage.removeItem('schedully_wallpaper_header');
    } catch (e) {}

    // Only wipe from active preset if user explicitly tapped the Remove Wallpaper button (not when switching presets)
    if (!isSwitchingPreset) {
      this.currentWallpaperData = null;
      if (this.activePresetKey && this.presets && this.presets[this.activePresetKey]) {
        this.presets[this.activePresetKey].wallpaper = null;
        this.presets[this.activePresetKey].wallpaperSwatches = null;
        this.presets[this.activePresetKey].wallpaperPrimary = null;
        this.presets[this.activePresetKey].wallpaperSecondary = null;
        this.presets[this.activePresetKey].wallpaperTertiary = null;
        this.presets[this.activePresetKey].wallpaperHeader = null;
      }
    }

    // Automatically seamless full-color resync back to the clean theme palette
    this.resyncColors(true);
  }

  setupFontFamilyEngine() {
    const fontSelect = document.getElementById('select-font-family');
    const customFontInput = document.getElementById('custom-font-upload');
    const floatingCustomFontInput = document.getElementById('floating-custom-font-upload');
    const dropdownContainer = document.getElementById('font-dropdown-container');
    const floatingDropdownContainer = document.getElementById('floating-font-dropdown-container');
    const triggerBtn = document.getElementById('btn-font-dropdown-trigger');
    const floatingTriggerBtn = document.getElementById('btn-floating-font-trigger');
    const dropdownMenu = document.getElementById('font-dropdown-menu');
    const floatingDropdownMenu = document.getElementById('floating-font-dropdown-menu');
    const triggerName = document.getElementById('font-trigger-name');
    const floatingTriggerName = document.getElementById('floating-font-trigger-name');
    const triggerBadge = document.getElementById('font-trigger-badge');
    const floatingTriggerBadge = document.getElementById('floating-font-trigger-badge');
    const triggerSub = document.getElementById('font-trigger-sub');
    const floatingTriggerSub = document.getElementById('floating-font-trigger-sub');

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

    // Populate floating dropdown menu options by cloning from main dropdown
    if (dropdownMenu && floatingDropdownMenu) {
      const sourceScroll = dropdownMenu.querySelector('.custom-font-menu-scroll');
      const targetScroll = floatingDropdownMenu.querySelector('.custom-font-menu-scroll');
      if (sourceScroll && targetScroll) {
        targetScroll.innerHTML = sourceScroll.innerHTML;
      }
    }

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
      
      // Update custom trigger UI in both locations
      [triggerName, floatingTriggerName].forEach(el => {
        if (el) el.innerText = displayName;
      });
      [triggerSub, floatingTriggerSub].forEach(el => {
        if (el) el.innerText = fontSubtitles[fontKey] || 'Custom Font';
      });
      [triggerBadge, floatingTriggerBadge].forEach(el => {
        if (el) el.style.fontFamily = stack;
      });

      // Update active state in both menus
      [dropdownMenu, floatingDropdownMenu].forEach(menu => {
        if (menu) {
          menu.querySelectorAll('.font-option-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-font') === fontKey);
          });
        }
      });

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

    // Toggle and selection handlers for both dropdown menus
    const wireDropdown = (btn, menu, container) => {
      if (!btn || !menu) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        } else {
          menu.classList.remove('hidden');
          btn.classList.add('is-open');
        }
      });

      menu.addEventListener('click', (e) => {
        const item = e.target.closest('.font-option-item');
        if (!item) return;
        const fontKey = item.getAttribute('data-font');
        if (fontKey) {
          this.applyFontFamily(fontKey);
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        }
      });

      document.addEventListener('click', (e) => {
        if (!container?.contains(e.target)) {
          menu.classList.add('hidden');
          btn.classList.remove('is-open');
        }
      });
    };

    wireDropdown(triggerBtn, dropdownMenu, dropdownContainer);
    wireDropdown(floatingTriggerBtn, floatingDropdownMenu, floatingDropdownContainer);

    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        this.applyFontFamily(e.target.value);
      });
    }

    // Handle font upload across inputs
    const handleFontUpload = async (file) => {
      if (!file) return;
      try {
        const fontName = 'CustomFont_' + Date.now();
        const buffer = await file.arrayBuffer();
        const fontFace = new FontFace(fontName, buffer);
        await fontFace.load();
        document.fonts.add(fontFace);

        const cleanName = file.name.replace(/\.[^/.]+$/, "");
        this.customLoadedCleanName = cleanName;

        [dropdownMenu, floatingDropdownMenu].forEach(menu => {
          if (!menu) return;
          let customItem = menu.querySelector('.font-option-item[data-font="custom"]');
          if (!customItem) {
            const scrollContainer = menu.querySelector('.custom-font-menu-scroll');
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
              customGroup.appendChild(customItem);
              scrollContainer.appendChild(customGroup);
            }
          } else {
            const titleEl = customItem.querySelector('.font-option-title');
            if (titleEl) titleEl.innerText = cleanName;
          }
        });

        this.customLoadedFontName = fontName;
        await this.applyFontFamily('custom', fontName);
      } catch (err) {
        console.error("Font loading error:", err);
        alert("Could not load font. Please ensure the file is a valid .ttf, .otf, or .woff2 font file.");
      }
    };

    customFontInput?.addEventListener('change', (e) => handleFontUpload(e.target.files[0]));
    floatingCustomFontInput?.addEventListener('change', (e) => handleFontUpload(e.target.files[0]));

    // Font Shadow Toggle
    const toggleFontShadow = document.getElementById('toggle-font-shadow');
    const toggleFloatingFontShadow = document.getElementById('toggle-floating-font-shadow');
    const savedFontShadow = (localStorage.getItem('schedully_font_shadow') === 'yes');
    this.fontShadowEnabled = savedFontShadow;

    this.setFontShadow = (enabled, skipSave = false) => {
      this.fontShadowEnabled = !!enabled;
      try { localStorage.setItem('schedully_font_shadow', this.fontShadowEnabled ? 'yes' : 'no'); } catch (e) {}

      const timetableContainer = document.getElementById('lock-timetable-container');
      const universalGrid = document.getElementById('universal-timetable-grid');
      const watchCardsList = document.getElementById('watch-cards-list');
      const phoneLockHeader = document.getElementById('phone-lock-header');
      const phoneCanvas = document.getElementById('phone-canvas');

      if (timetableContainer) timetableContainer.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (universalGrid) universalGrid.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (watchCardsList) watchCardsList.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (phoneLockHeader) phoneLockHeader.classList.toggle('has-font-shadow', this.fontShadowEnabled);
      if (phoneCanvas) phoneCanvas.classList.toggle('has-font-shadow', this.fontShadowEnabled);

      [toggleFontShadow, toggleFloatingFontShadow].forEach(group => {
        if (group) {
          group.querySelectorAll('.pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
          });
        }
      });

      this.renderTimetableGrid();
      if (!skipSave) {
        this._stagePending();
      }
    };

    [toggleFontShadow, toggleFloatingFontShadow].forEach(group => {
      if (group) {
        group.querySelectorAll('.pill-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-val') === (this.fontShadowEnabled ? 'yes' : 'no'));
          btn.addEventListener('click', () => {
            const isYes = (btn.getAttribute('data-val') === 'yes');
            this.setFontShadow(isYes);
          });
        });
      }
    });

    // Reset Font & Style to Default
    const btnFloatingResetFont = document.getElementById('btn-floating-reset-font');
    btnFloatingResetFont?.addEventListener('click', () => {
      this.applyFontFamily('default');
      this.setFontShadow(false);
      this.fontScaleAll = 1.0;
      this.fontScaleCards = 1.0;
      this.fontScaleHeader = 1.0;
      this.fontScaleTitle = 1.0;
      this.fontScaleTrademark = 1.0;
      this.gridFontScale = 1.0;
      this.gridFontSizeVal = 9;
      try { localStorage.setItem('schedully_font_scale', '1.0'); } catch (e) {}
      this.renderTimetableGrid();
      window.soundFX?.play?.('zoom');
      window.haptics?.trigger?.('selection');
    });
  }

  setupDaysAndTimeEngine() {
    const floatingStartSelect = document.getElementById('floating-grid-start-time');
    const floatingEndSelect = document.getElementById('floating-grid-end-time');
    const toggleFloatingAxis = document.getElementById('toggle-floating-axis-mode');
    const toggleFloatingClock = document.getElementById('toggle-floating-clock-type');
    const btnFloatingResetDays = document.getElementById('btn-floating-reset-days');
    const floatingDayChecks = document.querySelectorAll('.floating-day-check');
    const sidebarDayChecks = document.querySelectorAll('.day-toggle');

    // Helper: sync active days UI across floating card and sidebar
    const syncDaysUI = () => {
      floatingDayChecks.forEach(chk => {
        chk.checked = this.activeDays.includes(chk.value);
      });
      sidebarDayChecks.forEach(chk => {
        chk.checked = this.activeDays.includes(chk.value);
      });
    };

    // Helper: sync start/end time select dropdowns
    const syncTimeSelects = () => {
      const startStr = `${String(this.gridStartHour).padStart(2, '0')}:00`;
      const endStr = `${String(this.gridEndHour).padStart(2, '0')}:00`;
      if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = startStr;
      if (floatingStartSelect) floatingStartSelect.value = startStr;
      if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = endStr;
      if (floatingEndSelect) floatingEndSelect.value = endStr;
    };

    // Helper: sync axis mode toggles (TIME vs PERIOD)
    const syncAxisUI = () => {
      const mode = this.axisMode || 'time';
      document.querySelectorAll('#toggle-axis-mode .pill-btn, #toggle-floating-axis-mode .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === mode);
      });
      const rowFloatingStart = document.getElementById('row-floating-start-time');
      const rowFloatingEnd = document.getElementById('row-floating-end-time');
      const rowFloatingClock = document.getElementById('row-floating-clock-type');
      const isPeriod = (mode === 'period');
      if (rowFloatingStart) rowFloatingStart.style.display = isPeriod ? 'none' : 'flex';
      if (rowFloatingEnd) rowFloatingEnd.style.display = isPeriod ? 'none' : 'flex';
      if (rowFloatingClock) rowFloatingClock.style.display = isPeriod ? 'none' : 'flex';
    };

    // Helper: sync clock format toggles (12-HOUR vs 24-HOUR)
    const syncClockUI = () => {
      const format = this.clockFormat || '12';
      document.querySelectorAll('#toggle-clock-type .pill-btn, #toggle-floating-clock-type .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === format);
      });
    };

    // Expose sync helper to class instance for loadPreset & external calls
    this.syncDaysAndTimeControlsUI = () => {
      syncDaysUI();
      syncTimeSelects();
      syncAxisUI();
      syncClockUI();
    };

    // 1. Floating Day Checkbox change handler
    floatingDayChecks.forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.floating-day-check:checked')).map(c => c.value);
        this.activeDays = checked.length > 0 ? checked : ['Mon'];
        syncDaysUI();
        this.renderTimetableGrid();
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 2. Floating Axis Mode Toggle (TIME vs PERIOD)
    toggleFloatingAxis?.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val') || 'time';
        this.axisMode = val;
        syncAxisUI();
        this.updateCourseFormMode();
        this.renderTimetableGrid();
        if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 3. Floating Start Time Select
    floatingStartSelect?.addEventListener('change', (e) => {
      this.gridStartHour = parseInt(e.target.value.split(':')[0], 10);
      syncTimeSelects();
      this.renderTimetableGrid();
      this._stagePending(true);
      window.soundFX?.play?.('tap');
    });

    // 4. Floating End Time Select
    floatingEndSelect?.addEventListener('change', (e) => {
      this.gridEndHour = parseInt(e.target.value.split(':')[0], 10);
      syncTimeSelects();
      this.renderTimetableGrid();
      this._stagePending(true);
      window.soundFX?.play?.('tap');
    });

    // 5. Floating Clock Format Toggle (12-HOUR vs 24-HOUR)
    toggleFloatingClock?.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val') || '12';
        this.clockFormat = val;
        syncClockUI();
        this.renderTimetableGrid();
        this._stagePending();
        window.soundFX?.play?.('tap');
        window.haptics?.trigger?.('selection');
      });
    });

    // 6. Reset to Default Button in Floating Card
    btnFloatingResetDays?.addEventListener('click', () => {
      this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      this.gridStartHour = 8;
      this.gridEndHour = 20;
      this.axisMode = 'time';
      this.clockFormat = '12';
      this.syncDaysAndTimeControlsUI();
      this.updateCourseFormMode();
      this.renderTimetableGrid();
      if (this.activeDevice === 'watch' || typeof this.renderWatchGlance === 'function') {
        this.renderWatchGlance();
      }
      this._stagePending();
      window.soundFX?.play?.('zoom');
      window.haptics?.trigger?.('selection');
    });

    // Run initial synchronization
    this.syncDaysAndTimeControlsUI();
  }

  extractColorsFromImage(dataUrl, skipAutoStage = false, forceOverrideAll = false) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        // ── Draw image to 180×180 canvas ─────────────────────────────────────
        const canvas = document.createElement('canvas');
        const ctx    = canvas.getContext('2d');
        const SIZE   = 180;
        canvas.width = canvas.height = SIZE;
        ctx.drawImage(img, 0, 0, SIZE, SIZE);
        const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

        // ── Color Space Conversion Helpers ────────────────────────────────────
        const rgbToHex = (r, g, b) =>
          '#' + [r, g, b].map(x =>
            Math.min(255, Math.max(0, Math.round(x))).toString(16).padStart(2, '0')
          ).join('');

        const hexToRgb = h => [
          parseInt(h.slice(1, 3), 16),
          parseInt(h.slice(3, 5), 16),
          parseInt(h.slice(5, 7), 16)
        ];

        const rgbToHsl = (r, g, b) => {
          r /= 255; g /= 255; b /= 255;
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          const l = (max + min) / 2;
          let h = 0, s = 0;
          if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            else if (max === g) h = ((b - r) / d + 2) / 6;
            else h = ((r - g) / d + 4) / 6;
          }
          return [h * 360, s, l];
        };

        const hslToRgb = (h, s, l) => {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1; if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          h /= 360;
          return [hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)]
            .map(x => Math.round(x * 255));
        };

        const dist = (r1, g1, b1, r2, g2, b2) =>
          Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);

        // ── Phase 1: Background & Dominant Neutral Detection ─────────────────
        const rawHistogram = {};
        let topLumSum = 0, topPxCount = 0;
        let totalValidPx = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a < 128) continue;
          totalValidPx++;

          const py = Math.floor((i / 4) / SIZE);
          if (py < SIZE * 0.3) {
            topLumSum += 0.299 * r + 0.587 * g + 0.114 * b;
            topPxCount++;
          }

          const qr = Math.round(r / 12) * 12;
          const qg = Math.round(g / 12) * 12;
          const qb = Math.round(b / 12) * 12;
          const key = `${qr},${qg},${qb}`;
          if (!rawHistogram[key]) {
            const [h, s, l] = rgbToHsl(qr, qg, qb);
            rawHistogram[key] = { r: qr, g: qg, b: qb, h, s, l, count: 0 };
          }
          rawHistogram[key].count++;
        }

        // Sort histogram by frequency
        const sortedHist = Object.values(rawHistogram).sort((a, b) => b.count - a.count);
        const mostFrequent = sortedHist[0] || { r: 245, g: 240, b: 235, h: 35, s: 0.15, l: 0.94 };

        // Check if wallpaper background is warm beige / cream / ivory / sand
        const isWarmBeige = (mostFrequent.l >= 0.65 && (mostFrequent.s <= 0.48 && (mostFrequent.h <= 75 || mostFrequent.h >= 335)));

        // ── Phase 2: Sample Artwork Accents & Prevent Muddy Olive Hues ───────
        const accentClusters = {};
        for (const bucket of sortedHist) {
          // Skip pure black / near black and background-identical pixels for accent sampling
          if (bucket.l < 0.08 || (bucket.l > 0.96 && bucket.s < 0.1)) continue;
          if (dist(bucket.r, bucket.g, bucket.b, mostFrequent.r, mostFrequent.g, mostFrequent.b) < 30 && mostFrequent.count > totalValidPx * 0.12) {
            continue;
          }

          let { r, g, b, h, s, l, count } = bucket;

          // ── Clean Up Muddy Yellow-Green / Olive (Hue 52°–84°) ──
          if (h >= 52 && h <= 84 && s > 0.15) {
            if (h < 68) {
              h = 40; // Warm Golden Amber
            } else {
              h = 125; // Fresh Sage Green
            }
            [r, g, b] = hslToRgb(h, s, l);
          }

          const qr = Math.round(r / 16) * 16;
          const qg = Math.round(g / 16) * 16;
          const qb = Math.round(b / 16) * 16;
          const key = `${qr},${qg},${qb}`;
          if (!accentClusters[key]) {
            accentClusters[key] = { r: qr, g: qg, b: qb, h, s, l, count: 0 };
          }
          accentClusters[key].count += count;
        }

        // ── Phase 3: Rank Accent Clusters by Vibrancy & Visual Harmony ────────
        const rankedAccents = Object.values(accentClusters).map(c => {
          let chromaBonus = 1.0;
          if ((c.h >= 170 && c.h <= 230) || (c.h >= 345 || c.h <= 30)) chromaBonus = 1.45; // Teal & Coral/Terracotta
          else if (c.h >= 30 && c.h <= 50) chromaBonus = 1.30; // Warm Sand / Amber
          else if (c.h >= 230 && c.h <= 270) chromaBonus = 1.25; // Navy / Indigo

          const vibranceScore = c.s * 1.8 * chromaBonus + (1 - Math.abs(c.l - 0.45));
          const score = c.count * (vibranceScore + 0.3);
          return { ...c, score };
        }).sort((a, b) => b.score - a.score);

        // ── Phase 4: Pick 6 Distinct Dominant Accents (Hue & RGB Spacing) ───────
        const pickedAccents = [];
        for (const cluster of rankedAccents) {
          if (pickedAccents.length >= 6) break;
          const isDistinct = pickedAccents.every(p => {
            const colorDist = dist(cluster.r, cluster.g, cluster.b, p.r, p.g, p.b);
            const hueDiff = Math.abs(cluster.h - p.h);
            const circHueDiff = Math.min(hueDiff, 360 - hueDiff);
            return colorDist >= 36 && (circHueDiff >= 18 || Math.abs(cluster.l - p.l) >= 0.22);
          });
          if (isDistinct) {
            pickedAccents.push(cluster);
          }
        }

        // ── Phase 5: Build Harmonious 8-Swatch Course Palette ─────────────────
        const isDark = (this.currentMode === 'dark' || (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));

        const calibrateColor = (r, g, b, targetLShift = 0) => {
          let [h, s, l] = rgbToHsl(r, g, b);
          if (h >= 52 && h <= 84) h = h < 68 ? 40 : 125;
          if (isDark) {
            l = Math.max(0.36, Math.min(0.68, l + targetLShift));
            s = Math.max(0.40, Math.min(0.85, s));
          } else {
            l = Math.max(0.34, Math.min(0.56, l + targetLShift));
            s = Math.max(0.45, Math.min(0.88, s));
          }
          return rgbToHex(...hslToRgb(h, s, l));
        };

        const courseSwatches = [];
        pickedAccents.forEach(p => {
          const hex = calibrateColor(p.r, p.g, p.b);
          if (!courseSwatches.includes(hex)) courseSwatches.push(hex);
        });

        // Designer fallback palette for beige/warm wallpapers if image has few accents
        const BEIGE_HARMONY_FALLBACKS = [
          '#1E6F82', // Deep Teal / Marine
          '#D65A31', // Terracotta / Burnt Sienna
          '#D49A3D', // Warm Golden Amber
          '#C05C7E', // Dusty Rose
          '#2C4A6F', // Slate Navy
          '#52796F', // Sage Forest
          '#7C4D38', // Warm Espresso
          '#E07A5F'  // Coral Peach
        ];

        for (const fb of BEIGE_HARMONY_FALLBACKS) {
          if (courseSwatches.length >= 8) break;
          if (!courseSwatches.includes(fb)) {
            courseSwatches.push(fb);
          }
        }

        // ── Phase 6: Select Sophisticated Header & Primary Accents ────────────
        let primaryCluster = pickedAccents[0] || { r: 30, g: 111, b: 130, h: 192, s: 0.62, l: 0.31 };
        
        let bestHeaderHex = null;
        for (const p of pickedAccents) {
          const isIdealHeaderHue = (p.h >= 170 && p.h <= 260) || (p.h >= 345 || p.h <= 45);
          if (isIdealHeaderHue) {
            let [hh, hs, hl] = [p.h, Math.min(0.9, Math.max(0.45, p.s)), isDark ? 0.32 : 0.28];
            if (hh >= 52 && hh <= 84) hh = 40;
            bestHeaderHex = rgbToHex(...hslToRgb(hh, hs, hl));
            break;
          }
        }

        if (!bestHeaderHex) {
          let [ph, ps] = [primaryCluster.h, Math.min(0.9, Math.max(0.45, primaryCluster.s))];
          if (ph >= 52 && ph <= 84) ph = 40;
          bestHeaderHex = rgbToHex(...hslToRgb(ph, ps, isDark ? 0.32 : 0.28));
        }

        const primaryHex   = courseSwatches[0] || '#1E6F82';
        const secondaryHex = courseSwatches[1] || '#D65A31';
        const tertiaryHex  = courseSwatches[2] || '#D49A3D';
        const headerHex    = bestHeaderHex;

        // ── Phase 7: Apply Theme CSS, Beige Timetable Surface & Swatches ──────
        const avgTopLum   = topPxCount > 0 ? topLumSum / topPxCount : 128;
        const clockColor  = avgTopLum > 130 ? '#111827' : '#FFFFFF';
        const clockShadow = avgTopLum > 130 ? 'none'    : '0 2px 12px rgba(0,0,0,0.7)';

        const root = document.documentElement;
        root.style.setProperty('--m3-sys-color-primary',             primaryHex);
        root.style.setProperty('--m3-sys-color-on-primary',          this._isColorDark(primaryHex)   ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-primary-container',   primaryHex + (isDark ? '30' : '20'));
        root.style.setProperty('--m3-sys-color-secondary',           secondaryHex);
        root.style.setProperty('--m3-sys-color-on-secondary',        this._isColorDark(secondaryHex) ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-secondary-container', secondaryHex + (isDark ? '28' : '1E'));
        root.style.setProperty('--m3-sys-color-tertiary',            tertiaryHex);
        root.style.setProperty('--m3-sys-color-on-tertiary',         this._isColorDark(tertiaryHex)  ? '#FFFFFF' : '#111827');
        root.style.setProperty('--m3-sys-color-tertiary-container',  tertiaryHex + (isDark ? '28' : '1E'));

        // If beige/warm background detected, adapt timetable container surface to warm cream
        if (isWarmBeige && !isDark) {
          root.style.setProperty('--m3-sys-color-background', '#F9F5EE');
          root.style.setProperty('--m3-sys-color-surface', '#FCFAF6');
          root.style.setProperty('--m3-sys-color-surface-variant', 'rgba(247, 241, 233, 0.92)');
          root.style.setProperty('--m3-grid-surface-bg', '#FCFAF6');
        }

        this.wallpaperHeader    = headerHex;
        this.wallpaperPrimary   = primaryHex;
        this.wallpaperSecondary = secondaryHex;
        this.wallpaperTertiary  = tertiaryHex;
        this.wallpaperSwatches  = courseSwatches;

        this.applyHeaderColor(headerHex);
        this.setWallpaperModeUI(true);
        this.applyFontColor('');

        const lockHeader = document.getElementById('phone-lock-header');
        if (lockHeader) {
          lockHeader.style.color      = clockColor;
          lockHeader.style.textShadow = clockShadow;
        }

        if (this.activePresetKey && this.presets?.[this.activePresetKey]) {
          Object.assign(this.presets[this.activePresetKey], {
            wallpaperSwatches:  courseSwatches,
            wallpaperPrimary:   primaryHex,
            wallpaperSecondary: secondaryHex,
            wallpaperTertiary:  tertiaryHex,
            wallpaperHeader:    headerHex,
          });
        }

        this.classes.forEach((cls, idx) => {
          cls.customColor = courseSwatches[idx % courseSwatches.length];
          cls.color       = courseSwatches[idx % courseSwatches.length];
        });

        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (courseSwatches[idx]) {
            dot.setAttribute('data-color', courseSwatches[idx]);
            dot.style.backgroundColor = courseSwatches[idx];
          }
        });
        if (courseSwatches.length > 0) this.selectedColor = courseSwatches[0];

        this.applyThemeEngine();
        this.renderAll();
        if (typeof this.syncFloatingEditorUI === 'function') {
          this.syncFloatingEditorUI();
        }
        if (typeof this.syncTitleBarModeUI === 'function') {
          this.syncTitleBarModeUI();
        }
        if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        if (!skipAutoStage) this._stagePending();

      } catch (err) {
        console.warn('Color extraction failed:', err);
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

    // 1. Synchronize PiP Content & Real Dimensions from Live Canvas (High-Performance RAF Throttled)
    let pipRafId = null;
    const updateMobilePip = () => {
      if (!isSmartphone()) return;
      if (pipWidget.classList.contains('hidden') && (!pipBubble || pipBubble.classList.contains('hidden'))) return;

      if (pipRafId) cancelAnimationFrame(pipRafId);
      pipRafId = requestAnimationFrame(() => {
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
        clone.style.setProperty('--wallpaper-dim-val', `${(this.wallpaperDimIntensity || 0) / 100}`, 'important');

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
      });
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
        pipClone.style.setProperty('--wallpaper-dim-val', `${(this.wallpaperDimIntensity || 0) / 100}`, 'important');
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
    this.setupDaysAndTimeEngine();
    this.setupCustomColorModalEngine();
    this.setupCourseListDelegation();
    this.setupWatchGlanceEvents();
    this.updateCourseFormMode();


    // Top Spotlight Course Search Controls (Expandable Top Sheet)
    const openFloatingSearch = () => {
      const searchDock = document.getElementById('course-search-dock');
      const searchBtn = document.getElementById('btn-floating-course-search');
      if (!searchDock) return;
      const isHidden = searchDock.classList.contains('hidden');
      if (isHidden) {
        searchDock.classList.remove('hidden');
        searchBtn?.classList.add('active');
        if (this.courseSearchInput) {
          setTimeout(() => {
            try {
              this.courseSearchInput.focus({ preventScroll: true });
            } catch (e) {
              this.courseSearchInput.focus();
            }
          }, 80);
        }
      } else {
        closeFloatingSearch();
      }
    };

    const closeFloatingSearch = () => {
      const searchDock = document.getElementById('course-search-dock');
      const searchBtn = document.getElementById('btn-floating-course-search');
      if (!searchDock) return;
      searchDock.classList.add('hidden');
      searchBtn?.classList.remove('active');
      if (this.courseSearchInput) {
        this.courseSearchInput.blur();
      }
    };

    if (this.btnFloatingCourseSearch) {
      this.btnFloatingCourseSearch.addEventListener('click', (e) => {
        e.stopPropagation();
        openFloatingSearch();
      });
    }

    if (this.btnCloseCourseSearch) {
      this.btnCloseCourseSearch.addEventListener('click', (e) => {
        e.stopPropagation();
        closeFloatingSearch();
      });
    }

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
        if (this.btnFloatingCourseSearch) {
          if (this.searchQuery.length > 0) {
            this.btnFloatingCourseSearch.classList.add('has-query');
          } else {
            this.btnFloatingCourseSearch.classList.remove('has-query');
          }
        }
        this.renderClassList(); // Re-render to filter classes
      });

      this.courseSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (this.courseSearchInput.value) {
            this.courseSearchInput.value = '';
            this.searchQuery = '';
            if (this.clearSearchBtn) this.clearSearchBtn.classList.add('hidden');
            if (this.btnFloatingCourseSearch) this.btnFloatingCourseSearch.classList.remove('has-query');
            this.renderClassList();
          }
          closeFloatingSearch();
        }
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        if (this.courseSearchInput) {
          this.courseSearchInput.value = '';
          this.searchQuery = '';
          this.clearSearchBtn.classList.add('hidden');
          if (this.btnFloatingCourseSearch) this.btnFloatingCourseSearch.classList.remove('has-query');
          this.renderClassList();
          this.courseSearchInput.focus();
        }
      });
    }

    // Quick Time Nudge & Swap Action Bar Controls
    if (this.btnNudgeTimeMinus) {
      this.btnNudgeTimeMinus.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nudgeSelectedCourseTime(-30);
      });
    }

    if (this.btnNudgeTimePlus) {
      this.btnNudgeTimePlus.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nudgeSelectedCourseTime(30);
      });
    }

    if (this.btnNudgeEditCard) {
      this.btnNudgeEditCard.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.activeSwapCourseId) {
          const cId = this.activeSwapCourseId;
          this.deselectSwapCourse();
          this.highlightCourseInScheduleList(cId);
        }
      });
    }

    if (this.btnNudgeCancel) {
      this.btnNudgeCancel.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deselectSwapCourse();
      });
    }

    if (this.btnGridSwapUndo) {
      this.btnGridSwapUndo.addEventListener('click', (e) => {
        e.stopPropagation();
        this.undoLastCourseSwap();
      });
    }

    // History Floating Undo & Redo Capsule Controls
    if (this.btnHistoryUndo) {
      this.btnHistoryUndo.addEventListener('click', (e) => {
        e.stopPropagation();
        this.undoGlobalHistory();
      });
    }

    if (this.btnHistoryRedo) {
      this.btnHistoryRedo.addEventListener('click', (e) => {
        e.stopPropagation();
        this.redoGlobalHistory();
      });
    }

    // Keyboard Shortcuts: Ctrl+Z / Cmd+Z for Undo, Ctrl+Y or Ctrl+Shift+Z / Cmd+Shift+Z for Redo
    document.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in a text input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modKey = isMac ? e.metaKey : e.ctrlKey;
      if (modKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        if (e.shiftKey) {
          this.redoGlobalHistory();
        } else {
          this.undoGlobalHistory();
        }
      } else if (modKey && (e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        this.redoGlobalHistory();
      }
    });

    // Dismiss course selection when clicking anywhere outside canvas grid
    document.addEventListener('click', (e) => {
      if (this.activeSwapCourseId && !e.target.closest('#universal-timetable-grid') && !e.target.closest('#grid-course-action-pill')) {
        this.deselectSwapCourse();
      }
    });

    // Expandable Card Accordions
    this.headerTheme?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerTheme, this.contentTheme);
    });

    this.headerLayoutOptions?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerLayoutOptions, this.contentLayoutOptions);
    });

    this.headerAddCourse?.addEventListener('click', (e) => {
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

    // Title vs Trademark Mode Switcher Tabs
    const titleTmModeToggles = document.getElementById('title-trademark-mode-toggles');
    if (titleTmModeToggles) {
      titleTmModeToggles.querySelectorAll('button, .capsule-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const mode = btn.getAttribute('data-mode') || 'title';
          this.currentTitleBarMode = mode;
          if (window.soundFX) window.soundFX.play('tap');
          this.syncTitleBarModeUI();
        });
      });
    }

    // INSTANT TITLE / TRADEMARK INPUT SYNC (SHARED STAGE BAR & SIDEBAR)
    if (this.inputTitleStage) {
      this.inputTitleStage.addEventListener('input', (e) => {
        if (this.currentTitleBarMode === 'trademark') {
          this.updateTrademarkText(e.target.value);
          this._stagePending();
        } else {
          this.updateTitleText(e.target.value);
        }
      });
    }

    if (this.inputTitleSidebar) {
      this.inputTitleSidebar.addEventListener('input', (e) => {
        this.updateTitleText(e.target.value);
      });
    }

    // Shared Visibility Eye Button (Title vs Trademark)
    const btnToggleTitleVis = document.getElementById('btn-toggle-title-visibility');
    if (btnToggleTitleVis) {
      btnToggleTitleVis.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.soundFX) window.soundFX.play('tap');
        if (this.currentTitleBarMode === 'trademark') {
          this.setTrademarkVisibility(!this.showTrademark, true);
        } else {
          this.setTitleVisibility(!this.showTitle, true);
        }
      });
    }

    // Title Toggle (YES / NO in Sidebar)
    document.querySelectorAll('#toggle-title .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isYes = (btn.getAttribute('data-val') === 'yes');
        this.setTitleVisibility(isYes, true);
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
          const isYes = (btn.getAttribute('data-val') === 'yes');
          this.setTrademarkVisibility(isYes, true);
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

    this.syncTitleBarModeUI();

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

    // SCHEDULE LIST QUICK SETTINGS TOGGLE DRAWER & FLOATING POPOVER
    const btnScheduleSettings = document.getElementById('btn-schedule-settings-toggle');
    const quickSettingsPanel = document.getElementById('schedule-quick-settings');
    const btnCloseQuickSettings = document.getElementById('btn-close-quick-settings');

    if (btnScheduleSettings && quickSettingsPanel) {
      btnScheduleSettings.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const willOpen = quickSettingsPanel.classList.contains('hidden');
        quickSettingsPanel.classList.toggle('hidden');
        if (willOpen) {
          // Close conflicting popovers to avoid overlapping on iPad Mini / small tablet
          document.getElementById('canvas-controls-popover')?.classList.add('hidden');
          document.getElementById('canvas-ratio-popover')?.classList.add('hidden');
          document.getElementById('floating-title-card')?.classList.add('hidden');
          document.getElementById('floating-palette-mode-card')?.classList.add('hidden');
          document.getElementById('floating-add-course-card')?.classList.add('hidden');
          document.getElementById('floating-font-style-card')?.classList.add('hidden');
          document.getElementById('floating-days-time-card')?.classList.add('hidden');
          setTimeout(window.syncGlassSliders, 20);
          setTimeout(window.syncGlassSliders, 120);
        }
      });

      btnCloseQuickSettings?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        quickSettingsPanel.classList.add('hidden');
      });

      document.addEventListener('click', (e) => {
        if (window.isTourActive) return;
        if (quickSettingsPanel.classList.contains('hidden')) return;
        const isClickInside = quickSettingsPanel.contains(e.target);
        const isClickOnToggle = btnScheduleSettings.contains(e.target);
        const isClickOnProtected = e.target.closest('#left-sidebar, #right-sidebar, #bottom-floating-pill-bar, #floating-undo-redo-row, #interactive-tour-overlay, #tour-popover-card, .palette-dot, .theme-mode-dot, .color-swatch-btn, .swatch-dot');
        if (!isClickInside && !isClickOnToggle && !isClickOnProtected) {
          quickSettingsPanel.classList.add('hidden');
        }
      });
    }

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
          const i18n = window.SchedullyI18n;
          if (this.cardTimeDisplayType === 'both') this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('startAndEnd') : 'Start & End');
          else if (this.cardTimeDisplayType === 'end') this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('endOnly') : 'End Only');
          else this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('startOnly') : 'Start Only');
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

    // Quick Settings Popover Pagination (< | > Navigation)
    const page1 = document.getElementById('quick-settings-page-1');
    const page2 = document.getElementById('quick-settings-page-2');
    const prevBtn = document.getElementById('btn-quick-settings-prev');
    const nextBtn = document.getElementById('btn-quick-settings-next');
    const dots = document.querySelectorAll('.quick-page-dot');
    let currentQuickPage = 1;

    const setQuickPage = (page) => {
      currentQuickPage = page;
      if (page === 1) {
        page1?.classList.remove('hidden');
        page2?.classList.add('hidden');
        if (prevBtn) {
          prevBtn.disabled = true;
          prevBtn.classList.add('opacity-40', 'cursor-not-allowed');
          prevBtn.classList.remove('hover:scale-110', 'cursor-pointer');
        }
        if (nextBtn) {
          nextBtn.disabled = false;
          nextBtn.classList.remove('opacity-40', 'cursor-not-allowed');
          nextBtn.classList.add('hover:scale-110', 'cursor-pointer');
        }
      } else {
        page1?.classList.add('hidden');
        page2?.classList.remove('hidden');
        if (prevBtn) {
          prevBtn.disabled = false;
          prevBtn.classList.remove('opacity-40', 'cursor-not-allowed');
          prevBtn.classList.add('hover:scale-110', 'cursor-pointer');
        }
        if (nextBtn) {
          nextBtn.disabled = true;
          nextBtn.classList.add('opacity-40', 'cursor-not-allowed');
          nextBtn.classList.remove('hover:scale-110', 'cursor-pointer');
        }
      }
      dots.forEach(d => {
        d.classList.toggle('active', parseInt(d.getAttribute('data-page'), 10) === page);
      });
      window.haptics?.light?.();
    };

    prevBtn?.addEventListener('click', () => {
      if (currentQuickPage > 1) setQuickPage(currentQuickPage - 1);
    });

    nextBtn?.addEventListener('click', () => {
      if (currentQuickPage < 2) setQuickPage(currentQuickPage + 1);
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetPage = parseInt(dot.getAttribute('data-page'), 10) || 1;
        setQuickPage(targetPage);
      });
    });

    // Quick Setting Section 2: Grid Borders Toggle
    this.setGridBorders = (show, skipSave = false) => {
      this.showGridBorders = !!show;
      if (!skipSave) {
        try { localStorage.setItem('schedully_show_grid_borders', this.showGridBorders ? 'yes' : 'no'); } catch (e) {}
      }
      const grid = document.getElementById('universal-timetable-grid');
      const container = document.getElementById('lock-timetable-container');
      if (grid) grid.classList.toggle('hide-grid-borders', !this.showGridBorders);
      if (container) container.classList.toggle('hide-grid-borders', !this.showGridBorders);

      document.querySelectorAll('#toggle-quick-grid-borders .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === (this.showGridBorders ? 'yes' : 'no'));
      });
    };

    const savedGridBorders = (localStorage.getItem('schedully_show_grid_borders') !== 'no');
    this.setGridBorders(savedGridBorders, true);

    document.querySelectorAll('#toggle-quick-grid-borders .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const show = (btn.getAttribute('data-val') === 'yes');
        this.setGridBorders(show);
        window.haptics?.selection?.();
        this._stagePending();
      });
    });

    // Quick Setting Section 2: Side Sliders (Zoom & FX Controls) Toggle
    this.setSideSliders = (show, skipSave = false) => {
      this.showSideSliders = !!show;
      if (!skipSave) {
        try { localStorage.setItem('schedully_show_side_sliders', this.showSideSliders ? 'yes' : 'no'); } catch (e) {}
      }
      const leftSlider = document.getElementById('side-fx-slider-container');
      const rightSlider = document.getElementById('side-right-slider-container') || document.getElementById('side-zoom-slider-container');
      if (leftSlider) leftSlider.classList.toggle('sliders-toggled-hidden', !this.showSideSliders);
      if (rightSlider) rightSlider.classList.toggle('sliders-toggled-hidden', !this.showSideSliders);

      document.querySelectorAll('#toggle-quick-side-sliders .pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-val') === (this.showSideSliders ? 'yes' : 'no'));
      });
    };

    const savedSideSliders = (localStorage.getItem('schedully_show_side_sliders') !== 'no');
    this.setSideSliders(savedSideSliders, true);

    document.querySelectorAll('#toggle-quick-side-sliders .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const show = (btn.getAttribute('data-val') === 'yes');
        this.setSideSliders(show);
        window.haptics?.selection?.();
        this._stagePending();
      });
    });

    // Randomize Subject Card Colors (Dice Button)
    document.getElementById('btn-randomize-colors')?.addEventListener('click', () => {
      const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
      let paletteColors;
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        paletteColors = [...this.wallpaperSwatches];
      } else {
        paletteColors = [
          '#A3B18A', '#588157', '#3A5A40', // Muted Greens / Sage
          '#E07A5F', '#D4A373', '#CBB4A9', // Terracotta, Tan, Mocha
          '#3D405B', '#81B29A', '#F2CC8F', // Navy Slate, Mint, Muted Yellow
          '#B5838D', '#E5989B', '#FFB4A2', // Muted Mauve, Rose, Peach
          '#6D6875', '#B56576', '#E56B6F', // Plum, Crimson, Coral
          '#4A4E69', '#9A8C98', '#C9ADA7'  // Slate, Lilac, Greige
        ];
      }
      
      const shuffled = [...paletteColors].sort(() => Math.random() - 0.5);
      const codeColorMap = {};
      const uniqueCodes = [...new Set(this.classes.map(c => c.code))];
      uniqueCodes.forEach((code, idx) => {
        codeColorMap[code] = shuffled[idx % shuffled.length];
      });

      this.classes.forEach(c => {
        c.customColor = codeColorMap[c.code];
        c.color = codeColorMap[c.code];
        c.isManualCustomColor = true;
      });

      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      this.renderAll();
      this._stagePending(true);
      if (typeof showToast === 'function') {
        showToast('Course colors randomized!', 'info');
      }
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
        if (typeof this.syncDaysAndTimeControlsUI === 'function') this.syncDaysAndTimeControlsUI();
        this.renderTimetableGrid();
        this._stagePending();
      });
    });

    // Filter Start/End Time Selects
    this.gridStartTimeSelect?.addEventListener('change', (e) => {
      this.gridStartHour = parseInt(e.target.value.split(':')[0]);
      if (typeof this.syncDaysAndTimeControlsUI === 'function') this.syncDaysAndTimeControlsUI();
      this.renderTimetableGrid();
      this._stagePending(true);
    });

    this.gridEndTimeSelect?.addEventListener('change', (e) => {
      this.gridEndHour = parseInt(e.target.value.split(':')[0]);
      if (typeof this.syncDaysAndTimeControlsUI === 'function') this.syncDaysAndTimeControlsUI();
      this.renderTimetableGrid();
      this._stagePending(true);
    });

    // Day Display Checkboxes
    document.querySelectorAll('.day-toggle').forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.day-toggle:checked')).map(c => c.value);
        this.activeDays = checked.length > 0 ? checked : ['Mon'];
        if (typeof this.syncDaysAndTimeControlsUI === 'function') this.syncDaysAndTimeControlsUI();
        this.renderTimetableGrid();
        this._stagePending(true);
      });
    });

    // Grid Width Steppers & Input (50% to 130%)
    const btnWidthDec = document.getElementById('btn-width-dec');
    const btnWidthInc = document.getElementById('btn-width-inc');
    const gridWidthValEl = document.getElementById('grid-width-val');

    gridWidthValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridWidthVal = Math.min(130, Math.max(50, val));
        this.requestGridRender();
        this._stagePending();
      }
    });
    gridWidthValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 50) e.target.value = 50;
      else if (val > 130) e.target.value = 130;
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
      if (this.gridWidthVal < 130) {
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
        this.customSurfaceColor = colorVal;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', colorVal);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });
    document.querySelector('#grid-surface-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-grid-surface-bg').trim() || '#FFFFFF';
      this.openCustomColorPicker(currentVal, 'Grid Surface Colour', (pickedColor) => {
        document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedSurfaceColor = true;
        this.customSurfaceColor = pickedColor;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', pickedColor);
        const btn = document.querySelector('#grid-surface-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    // Background Colour Swatches with Auto-Contrast Clock Handler
    document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-bg');
        this.userHasPickedBgColor = true;
        this.customBgColor = colorVal;
        this.phoneCanvas.style.backgroundColor = colorVal;
        this.updateClockContrast(colorVal);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    document.querySelector('#bg-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = this.phoneCanvas.style.backgroundColor || '#0F121A';
      this.openCustomColorPicker(currentVal, 'Canvas Background Colour', (pickedColor) => {
        document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedBgColor = true;
        this.customBgColor = pickedColor;
        this.phoneCanvas.style.backgroundColor = pickedColor;
        this.updateClockContrast(pickedColor);
        const btn = document.querySelector('#bg-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this.syncCustomColorPickersUI();
        this._stagePending(true);
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
        this.customHeaderColor = colorVal;
        this.applyHeaderColor(colorVal, true);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    document.querySelector('#header-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-header-custom-bg').trim() || '#181C28';
      this.openCustomColorPicker(currentVal, 'Timetable Header Colour', (pickedColor) => {
        document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedHeaderColor = true;
        this.customHeaderColor = pickedColor;
        this.applyHeaderColor(pickedColor, true);
        const btn = document.querySelector('#header-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    // Font Colour Swatches Event Handler
    document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-font');
        this.userHasPickedFontColor = true;
        this.customFontColor = colorVal;
        this.applyFontColor(colorVal, true);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    document.querySelector('#font-color-picker .color-custom-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = getComputedStyle(document.documentElement).getPropertyValue('--m3-font-custom-color').trim() || '#0F172A';
      this.openCustomColorPicker(currentVal, 'Timetable Text Font Colour', (pickedColor) => {
        document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedFontColor = true;
        this.customFontColor = pickedColor;
        this.applyFontColor(pickedColor, true);
        const btn = document.querySelector('#font-color-picker .color-custom-btn');
        if (btn) btn.style.background = pickedColor;
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });
    });

    // Reset Layout Button
    this.btnResetLayout?.addEventListener('click', () => {
      this.showTitle = true;
      this.showTable = true;
      this.showLockUI = true;
      this.newCourseDisplayTime = true;
      this.globalCardTimes = true;
      this.clockFormat = '12';
      this.gridStartHour = 9;
      this.gridEndHour = 17;
      this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

      if (this.lockGridTitle) this.lockGridTitle.style.display = 'block';
      if (this.phoneLockHeader) this.phoneLockHeader.style.display = 'block';
      if (this.phoneCanvas) this.phoneCanvas.style.backgroundColor = '';
      this.applyHeaderColor('');
      this.applyFontColor('');
      // Reset per-card font colors
      document.getElementById('content-add-course')?.closest('section')?.style.removeProperty('--m3-card-text-color');
      document.querySelector('.m3-right-sidebar')?.style.removeProperty('--m3-card-text-color');

      document.querySelectorAll('#toggle-title .pill-btn')[0]?.click();

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
      
      document.querySelectorAll('#toggle-display-time .pill-btn')[0]?.click();
      document.querySelectorAll('#toggle-clock-type .pill-btn')[0]?.click();

      if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = '09:00';
      if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = '17:00';

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

    // Theme Mode Dots
    document.querySelectorAll('.theme-mode-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.theme-mode-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentMode = dot.getAttribute('data-mode');
        try { localStorage.setItem('schedully_theme_mode', this.currentMode); } catch (e) {}
        this.applyThemeEngine();
        this.renderAll();
        this._stagePending();
      });
    });

    // Device Platform Switching Logic
    document.querySelectorAll('#device-type-toggles [data-device]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window._globalDragSuppressUntil && Date.now() < window._globalDragSuppressUntil && !e._isProgrammaticDrag) {
          return;
        }
        const targetBtn = e.target.closest('[data-device]');
        const device = targetBtn ? (targetBtn.getAttribute('data-device') || 'phone') : (btn.getAttribute('data-device') || 'phone');
        this.switchDevice(device, true);
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
    let rightSliderMode = 'zoom'; // 'zoom' | 'radius' | 'font'
    let radiusScope = 'both'; // 'both' | 'table' | 'cards'
    let fontScope = 'all'; // 'all' | 'cards' | 'header' | 'title' | 'trademark'
    // Hoisted here to fix TDZ: renderZoomFrame (below) references these before their original declaration at ~5901
    let leftActiveTool = 'layout';
    let rightActiveTool = 'zoom';

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

    // ═══════════════════════════════════════════════════════════════
    // IPHONE CAMERA-GRADE FLUID CONTINUOUS OPTICAL ZOOM ENGINE
    // Exponential Spring Damping + Proportional Viewport Anchoring
    // ═══════════════════════════════════════════════════════════════
    let renderedZoom = this.zoomScale || 0.85;
    let targetZoom = renderedZoom;
    let zoomRaf = null;
    let currentZoomFocal = null;

    const renderZoomFrame = (scale, focalPoint = null) => {
      const scrollArea = document.getElementById('canvas-scroll-area');
      const scalerContainer = document.getElementById('canvas-scaler-container');
      const wrapper = document.getElementById('main-phone-wrapper');
      if (!scalerContainer || !wrapper || !scrollArea) return;

      const prevScrollW = scrollArea.scrollWidth;
      const prevScrollH = scrollArea.scrollHeight;
      const prevScrollL = scrollArea.scrollLeft;
      const prevScrollT = scrollArea.scrollTop;
      const clientW = scrollArea.clientWidth;
      const clientH = scrollArea.clientHeight;

      const dims = getBaseModelDimensions();
      const visualW = dims.width * scale;
      const visualH = dims.height * scale;

      // Scaler footprint container defines exact scaled boundary for grid centering & panning
      scalerContainer.style.transition = 'none';
      scalerContainer.style.width = `${visualW.toFixed(2)}px`;
      scalerContainer.style.height = `${visualH.toFixed(2)}px`;
      scalerContainer.style.margin = '0 auto';
      scalerContainer.style.display = 'block';
      scalerContainer.style.position = 'relative';

      // Pure hardware-accelerated matrix transformation
      wrapper.style.transition = 'none';
      wrapper.style.width = `${dims.width}px`;
      wrapper.style.height = `${dims.height}px`;
      wrapper.style.position = 'absolute';
      wrapper.style.top = '0';
      wrapper.style.left = '0';
      wrapper.style.transformOrigin = '0 0';
      wrapper.style.transform = `scale(${scale.toFixed(4)}) translateZ(0)`;
      wrapper.style.flexShrink = '0';

      const phoneCanvas = document.getElementById('phone-canvas');
      if (phoneCanvas) {
        phoneCanvas.style.transform = 'none';
      }

      // Maintain Viewport Focal Point (or relative position) instead of snapping to center
      const newScrollW = scrollArea.scrollWidth;
      const newScrollH = scrollArea.scrollHeight;

      if (newScrollH > clientH && prevScrollH > clientH) {
        if (focalPoint && focalPoint.y !== undefined) {
          const ratioY = (prevScrollT + focalPoint.y) / prevScrollH;
          scrollArea.scrollTop = Math.round(ratioY * newScrollH - focalPoint.y);
        } else {
          const maxPrevT = Math.max(1, prevScrollH - clientH);
          const scrollProgressY = Math.max(0, Math.min(1, prevScrollT / maxPrevT));
          const maxNewT = Math.max(0, newScrollH - clientH);
          scrollArea.scrollTop = Math.round(scrollProgressY * maxNewT);
        }
      }

      if (newScrollW > clientW && prevScrollW > clientW) {
        if (focalPoint && focalPoint.x !== undefined) {
          const ratioX = (prevScrollL + focalPoint.x) / prevScrollW;
          scrollArea.scrollLeft = Math.round(ratioX * newScrollW - focalPoint.x);
        } else {
          const maxPrevL = Math.max(1, prevScrollW - clientW);
          const scrollProgressX = Math.max(0, Math.min(1, prevScrollL / maxPrevL));
          const maxNewL = Math.max(0, newScrollW - clientW);
          scrollArea.scrollLeft = Math.round(scrollProgressX * maxNewL);
        }
      }

      const displayPercent = Math.round(scale * 100);
      const minZ = 0.4;
      const maxZ = 1.5;
      const ratio = Math.max(0, Math.min(1, (scale - minZ) / (maxZ - minZ)));
      const pct = Math.round(ratio * 100);

      // Sync slider visuals ONLY if zoom is visible and actively selected on its respective slider
      const hiddenTools = this.sliderLayout?.hidden || [];
      if (!hiddenTools.includes('zoom')) {
        const leftTools = (this.sliderLayout?.left || []).filter(id => !hiddenTools.includes(id));
        const rightTools = (this.sliderLayout?.right || []).filter(id => !hiddenTools.includes(id));
        
        if (leftTools.includes('zoom') && leftActiveTool === 'zoom') {
          const leftSliderFill = document.getElementById('side-fx-fill');
          const leftSliderLabel = document.getElementById('fx-label-text');
          const leftTrack = document.getElementById('side-fx-track');
          if (leftSliderFill) {
            leftSliderFill.style.transition = 'none';
            leftSliderFill.style.setProperty('height', `${pct}%`, 'important');
          }
          if (leftSliderLabel) {
            leftSliderLabel.innerText = `${displayPercent}%`;
          }
          if (leftTrack) {
            leftTrack.setAttribute('aria-valuenow', pct);
          }
        } else if (rightTools.includes('zoom') && rightActiveTool === 'zoom') {
          const rightSliderFill = document.getElementById('side-right-fill');
          const rightSliderLabel = document.getElementById('right-slider-label-text');
          const rightTrack = document.getElementById('side-right-track');
          if (rightSliderFill) {
            rightSliderFill.style.transition = 'none';
            rightSliderFill.style.setProperty('height', `${pct}%`, 'important');
          }
          if (rightSliderLabel) {
            rightSliderLabel.innerText = `${displayPercent}%`;
          }
          if (rightTrack) {
            rightTrack.setAttribute('aria-valuenow', pct);
          }
        }
      }
    };

    const startZoomPhysics = (immediate = false, focalPoint = null) => {
      if (focalPoint) currentZoomFocal = focalPoint;

      if (immediate) {
        if (zoomRaf) {
          cancelAnimationFrame(zoomRaf);
          zoomRaf = null;
        }
        renderedZoom = targetZoom;
        this.zoomScale = targetZoom;
        renderZoomFrame(renderedZoom, currentZoomFocal);
        try { localStorage.setItem('schedully_zoom_scale', String(targetZoom)); } catch (e) {}
        currentZoomFocal = null;
        return;
      }

      if (zoomRaf) return; // Physics loop is already active

      let lastTime = performance.now();

      const physicsTick = (now) => {
        const dt = Math.min(0.064, (now - lastTime) / 1000);
        lastTime = now;

        const diff = targetZoom - renderedZoom;

        // Threshold check for clean finish
        if (Math.abs(diff) < 0.0008) {
          renderedZoom = targetZoom;
          this.zoomScale = targetZoom;
          renderZoomFrame(renderedZoom, currentZoomFocal);
          zoomRaf = null;
          currentZoomFocal = null;
          try { localStorage.setItem('schedully_zoom_scale', String(targetZoom)); } catch (e) {}
          return;
        }

        // Apple Camera-grade exponential spring curve (buttery smooth camera glide)
        const lambda = 11.5; // camera zoom response speed
        renderedZoom += diff * (1 - Math.exp(-lambda * dt));
        renderZoomFrame(renderedZoom, currentZoomFocal);

        zoomRaf = requestAnimationFrame(physicsTick);
      };

      zoomRaf = requestAnimationFrame(physicsTick);
    };

    const applyZoom = (smooth = true, focalPoint = null) => {
      let optimalScale = this.zoomScale;
      if (optimalScale === undefined || optimalScale === null || isNaN(optimalScale)) {
        optimalScale = 0.85;
      }
      targetZoom = Math.max(0.4, Math.min(1.5, optimalScale));
      startZoomPhysics(!smooth, focalPoint);
    };

    this.applyCanvasZoom = applyZoom;
    window.applyZoom = applyZoom;

    if (mainPhoneWrapper) {
      // Set initial zoom on page load (without animation on first paint)
      applyZoom(false);

      const sideZoomTrack = document.getElementById('side-zoom-track');
      const sideZoomContainer = document.getElementById('side-zoom-slider-container');
      
      let badgeHideTimeout = null;
      let rightBadgeTimeout = null;
      const showZoomBadgeTemporarily = (duration = 1400) => {
        const hiddenTools = this.sliderLayout?.hidden || [];
        if (hiddenTools.includes('zoom')) return;

        const leftTools = (this.sliderLayout?.left || []).filter(id => !hiddenTools.includes(id));
        const rightTools = (this.sliderLayout?.right || []).filter(id => !hiddenTools.includes(id));
        
        if (leftTools.includes('zoom') && leftActiveTool === 'zoom') {
          const leftSlider = document.getElementById('side-fx-slider-container');
          if (leftSlider) {
            leftSlider.classList.add('is-interacting');
            if (badgeHideTimeout) clearTimeout(badgeHideTimeout);
            badgeHideTimeout = setTimeout(() => leftSlider.classList.remove('is-interacting'), duration);
          }
        } else if (rightTools.includes('zoom') && rightActiveTool === 'zoom') {
          const rightSlider = document.getElementById('side-right-slider-container');
          if (rightSlider) {
            rightSlider.classList.add('is-interacting');
            if (rightBadgeTimeout) clearTimeout(rightBadgeTimeout);
            rightBadgeTimeout = setTimeout(() => rightSlider.classList.remove('is-interacting'), duration);
          }
        }
      };

      if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
          if (targetZoom < 1.5) {
            targetZoom = Math.min(1.5, Math.round((targetZoom + 0.15) * 100) / 100);
            this.zoomScale = targetZoom;
            if (window.soundFX) window.soundFX.play('zoom');
            applyZoom(true);
            showZoomBadgeTemporarily();
            this._stagePending(true);
          }
        });
      }

      if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
          if (targetZoom > 0.4) {
            targetZoom = Math.max(0.4, Math.round((targetZoom - 0.15) * 100) / 100);
            this.zoomScale = targetZoom;
            if (window.soundFX) window.soundFX.play('zoom');
            applyZoom(true);
            showZoomBadgeTemporarily();
            this._stagePending(true);
          }
        });
      }

      if (sideZoomTrack) {
        let isDragging = false;

        const updateZoomFromPointer = (e, smooth = true) => {
          const rect = sideZoomTrack.getBoundingClientRect();
          let clientY = e.clientY;
          if (clientY == null && e.touches && e.touches.length > 0) {
            clientY = e.touches[0].clientY;
          } else if (clientY == null && e.changedTouches && e.changedTouches.length > 0) {
            clientY = e.changedTouches[0].clientY;
          }
          if (clientY == null) clientY = rect.top + rect.height / 2;

          const offsetY = rect.bottom - clientY;
          const ratio = Math.max(0, Math.min(1, offsetY / rect.height));

          const minZ = 0.4;
          const maxZ = 1.5;
          const target = Math.round((minZ + ratio * (maxZ - minZ)) * 100) / 100;
          
          if (Math.abs(target - targetZoom) >= 0.005) {
            targetZoom = Math.max(0.4, Math.min(1.5, target));
            this.zoomScale = targetZoom;
            if (window.haptics) window.haptics.trigger('slider');
            applyZoom(smooth);
            this._stagePending(true);
          }
        };

        const onDragStart = (e) => {
          if (e.button != null && e.button !== 0) return;
          isDragging = true;
          if (sideZoomContainer) sideZoomContainer.classList.add('active-drag');
          const rightSlider = document.getElementById('side-right-slider-container');
          if (rightSlider && (typeof rightSliderMode === 'undefined' || rightSliderMode === 'zoom')) {
            rightSlider.classList.add('active-drag');
          }
          if (window.soundFX) window.soundFX.play('zoom');
          updateZoomFromPointer(e, true);
          if (e.cancelable) e.preventDefault();
        };

        const onDragMove = (e) => {
          if (!isDragging) return;
          updateZoomFromPointer(e, true);
          if (e.cancelable) e.preventDefault();
        };

        const onDragEnd = (e) => {
          if (isDragging) {
            isDragging = false;
            if (sideZoomContainer) sideZoomContainer.classList.remove('active-drag');
            const rightSlider = document.getElementById('side-right-slider-container');
            if (rightSlider) rightSlider.classList.remove('active-drag');
            applyZoom(true);
            showZoomBadgeTemporarily(1200);
          }
        };

        // Pointer, Mouse, and Touch Start
        sideZoomTrack.addEventListener('pointerdown', onDragStart);
        sideZoomTrack.addEventListener('mousedown', onDragStart);
        sideZoomTrack.addEventListener('touchstart', onDragStart, { passive: false });

        // Window-level tracking so drag continues smoothly anywhere on the page
        window.addEventListener('pointermove', onDragMove, { passive: false });
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('touchmove', onDragMove, { passive: false });

        window.addEventListener('pointerup', onDragEnd);
        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchend', onDragEnd);
        window.addEventListener('pointercancel', onDragEnd);
        window.addEventListener('touchcancel', onDragEnd);

        // Double click track to reset zoom to default 85%
        sideZoomTrack.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          targetZoom = 0.85;
          this.zoomScale = 0.85;
          if (window.soundFX) window.soundFX.play('zoom');
          applyZoom(true);
          showZoomBadgeTemporarily();
          this._stagePending(true);
        });

        // Mouse wheel over slider to zoom smoothly
        if (sideZoomContainer) {
          sideZoomContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY < 0 ? 0.05 : -0.05;
            targetZoom = Math.min(1.5, Math.max(0.4, Math.round((targetZoom + delta) * 100) / 100));
            this.zoomScale = targetZoom;
            applyZoom(true);
            showZoomBadgeTemporarily();
            this._stagePending(true);
          }, { passive: false });
        }
      }

      // ═══════════════════════════════════════════════════════════════
      // MULTI-TOUCH PINCH-TO-ZOOM FINGER GESTURES (PINCH IN / PINCH OUT)
      // Natural 2-finger zoom on canvas, tablet, phone, and touch screens
      // ═══════════════════════════════════════════════════════════════
      const canvasScrollArea = document.getElementById('canvas-scroll-area');
      let isPinching = false;
      let initialPinchDist = 0;
      let initialPinchZoom = 0.85;

      const calcTouchDist = (t1, t2) => {
        const dx = t1.clientX - t2.clientX;
        const dy = t1.clientY - t2.clientY;
        return Math.hypot(dx, dy);
      };

      const handlePinchStart = (e) => {
        if (e.touches && e.touches.length === 2) {
          isPinching = true;
          initialPinchDist = calcTouchDist(e.touches[0], e.touches[1]);
          initialPinchZoom = targetZoom || this.zoomScale || 0.85;

          const hiddenTools = this.sliderLayout?.hidden || [];
          if (!hiddenTools.includes('zoom')) {
            const leftTools = (this.sliderLayout?.left || []).filter(id => !hiddenTools.includes(id));
            const rightTools = (this.sliderLayout?.right || []).filter(id => !hiddenTools.includes(id));
            if (leftTools.includes('zoom') && leftActiveTool === 'zoom') {
              const leftSlider = document.getElementById('side-fx-slider-container');
              if (leftSlider) leftSlider.classList.add('active-drag');
            } else if (rightTools.includes('zoom') && rightActiveTool === 'zoom') {
              const rightSlider = document.getElementById('side-right-slider-container');
              if (rightSlider) rightSlider.classList.add('active-drag');
            }
          }

          showZoomBadgeTemporarily(1200);
          if (e.cancelable) e.preventDefault();
        }
      };

      const handlePinchMove = (e) => {
        if (isPinching && e.touches && e.touches.length === 2) {
          const currentDist = calcTouchDist(e.touches[0], e.touches[1]);
          if (initialPinchDist > 5) {
            const scaleRatio = currentDist / initialPinchDist;
            let newScale = initialPinchZoom * scaleRatio;
            newScale = Math.max(0.4, Math.min(1.5, Math.round(newScale * 100) / 100));

            if (Math.abs(newScale - targetZoom) >= 0.005) {
              targetZoom = newScale;
              this.zoomScale = newScale;
              const rect = canvasScrollArea ? canvasScrollArea.getBoundingClientRect() : null;
              const focal = rect ? {
                x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left,
                y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
              } : null;
              startZoomPhysics(true, focal); // Instant 120FPS subpixel response during gesture
              showZoomBadgeTemporarily(1000);
              if (window.haptics && (newScale === 0.4 || newScale === 1.5)) {
                window.haptics.trigger('boundary');
              }
            }
          }
          if (e.cancelable) e.preventDefault();
        }
      };

      const handlePinchEnd = (e) => {
        if (isPinching) {
          if (!e.touches || e.touches.length < 2) {
            isPinching = false;
            const leftSlider = document.getElementById('side-fx-slider-container');
            if (leftSlider) leftSlider.classList.remove('active-drag');
            const rightSlider = document.getElementById('side-right-slider-container');
            if (rightSlider) rightSlider.classList.remove('active-drag');

            startZoomPhysics(false);
            showZoomBadgeTemporarily(1400);
            this._stagePending(true);
          }
        }
      };

      if (canvasScrollArea) {
        canvasScrollArea.addEventListener('touchstart', handlePinchStart, { passive: false });
        canvasScrollArea.addEventListener('touchmove', handlePinchMove, { passive: false });
        canvasScrollArea.addEventListener('touchend', handlePinchEnd, { passive: false });
        canvasScrollArea.addEventListener('touchcancel', handlePinchEnd, { passive: false });

        // Trackpad Pinch Gesture & Ctrl + Mouse Wheel Zoom
        canvasScrollArea.addEventListener('wheel', (e) => {
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const rect = canvasScrollArea.getBoundingClientRect();
            const focal = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            const delta = -e.deltaY * 0.004;
            targetZoom = Math.min(1.5, Math.max(0.4, Math.round((targetZoom + delta) * 100) / 100));
            this.zoomScale = targetZoom;
            startZoomPhysics(false, focal);
            showZoomBadgeTemporarily(1000);
            this._stagePending(true);
          }
        }, { passive: false });
      }

      window.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 2 && e.target && e.target.closest('#canvas-scroll-area, #main-phone-wrapper, #phone-canvas, .canvas-scaler-container')) {
          handlePinchStart(e);
        }
      }, { passive: false });

      window.addEventListener('touchmove', (e) => {
        if (isPinching) {
          handlePinchMove(e);
        }
      }, { passive: false });

      window.addEventListener('touchend', handlePinchEnd);
      window.addEventListener('touchcancel', handlePinchEnd);

      window.addEventListener('resize', () => {
        centerCanvasModel(false);
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // UNIFIED SLIM MATERIAL 3 EXPRESSIVE DYNAMIC SIDE SLIDER CONTROLLER
    // Supports 6 Tools dynamically placed on either Left or Right Side:
    // 'zoom', 'radius', 'font', 'layout', 'opacity', 'blur'
    // ═══════════════════════════════════════════════════════════════
    const leftSliderContainer  = document.getElementById('side-fx-slider-container');
    const leftSliderTrack      = document.getElementById('side-fx-track');
    const leftSliderFill       = document.getElementById('side-fx-fill');
    const leftSliderBadge      = document.getElementById('side-fx-badge');
    const leftSliderLabelText  = document.getElementById('fx-label-text');
    const leftPill             = document.getElementById('m3-expressive-fx-pill');

    const rightSliderContainer = document.getElementById('side-right-slider-container');
    const rightSliderTrack     = document.getElementById('side-right-track');
    const rightSliderFill      = document.getElementById('side-right-fill');
    const rightSliderBadge     = document.getElementById('side-right-badge');
    const rightSliderLabelText = document.getElementById('right-slider-label-text');
    const rightPill            = document.getElementById('m3-expressive-right-pill');

    // Tool Switcher Buttons
    const sliderToolBtns = {
      zoom: document.getElementById('btn-right-mode-zoom'),
      radius: document.getElementById('btn-right-mode-radius'),
      font: document.getElementById('btn-right-mode-font'),
      layout: document.getElementById('btn-fx-mode-layout'),
      opacity: document.getElementById('btn-fx-mode-opacity'),
      blur: document.getElementById('btn-fx-mode-blur')
    };

    // Sub-Scope Groups
    const radiusScopeGroup = document.getElementById('right-radius-scope-group');
    const btnRadiusScopeBoth  = document.getElementById('btn-radius-scope-both');
    const btnRadiusScopeTable = document.getElementById('btn-radius-scope-table');
    const btnRadiusScopeCards = document.getElementById('btn-radius-scope-cards');

    const fontTopGroup = document.getElementById('right-font-top-group');
    const btnFontPanelToggle = document.getElementById('btn-right-font-panel-toggle');
    const floatingFontStyleCard = document.getElementById('floating-font-style-card');
    const btnCloseFloatingFont  = document.getElementById('btn-close-floating-font');

    const fontScopeGroup = document.getElementById('right-font-scope-group');
    const btnFontScopeAll       = document.getElementById('btn-font-scope-all');
    const btnFontScopeCards     = document.getElementById('btn-font-scope-cards');
    const btnFontScopeHeader    = document.getElementById('btn-font-scope-header');
    const btnFontScopeTitle     = document.getElementById('btn-font-scope-title');
    const btnFontScopeTrademark = document.getElementById('btn-font-scope-trademark');

    const layoutTopGroup = document.getElementById('left-layout-top-group');
    const btnDaysPanelToggle = document.getElementById('btn-left-days-panel-toggle');
    const floatingDaysTimeCard   = document.getElementById('floating-days-time-card');
    const btnCloseFloatingDays   = document.getElementById('btn-close-floating-days');

    const layoutScopeGroup = document.getElementById('left-layout-scope-group');
    const btnFxWidth  = document.getElementById('btn-fx-mode-width');
    const btnFxHeight = document.getElementById('btn-fx-mode-height');
    const btnFxPosx   = document.getElementById('btn-fx-mode-posx');
    const btnFxPosy   = document.getElementById('btn-fx-mode-posy');

    const blurScopeGroup = document.getElementById('blur-scope-group');
    const btnBlurScopeBlur = document.getElementById('btn-blur-scope-blur');
    const btnBlurScopeDim  = document.getElementById('btn-blur-scope-dim');

    // Active tool state per side (declared earlier to fix TDZ in renderZoomFrame)
    leftActiveTool = 'layout';
    rightActiveTool = 'zoom';

    // Sub-mode states
    let activeRadiusScope = 'both'; // 'both' | 'table' | 'cards'
    let activeFontScope = 'all'; // 'all' | 'cards' | 'header' | 'title' | 'trademark'
    let activeLayoutSubMode = 'width'; // 'width' | 'height' | 'posx' | 'posy'
    let activeBlurSubMode = 'blur'; // 'blur' | 'dim'

    let leftBadgeTimeout = null;
    let rightBadgeTimeout = null;

    const showSideBadgeTemporarily = (side, duration = 1400) => {
      const container = side === 'left' ? leftSliderContainer : rightSliderContainer;
      if (!container) return;
      container.classList.add('is-interacting');
      if (side === 'left') {
        if (leftBadgeTimeout) clearTimeout(leftBadgeTimeout);
        leftBadgeTimeout = setTimeout(() => container.classList.remove('is-interacting'), duration);
      } else {
        if (rightBadgeTimeout) clearTimeout(rightBadgeTimeout);
        rightBadgeTimeout = setTimeout(() => container.classList.remove('is-interacting'), duration);
      }
    };

    const getToolCurrentSide = (toolId) => {
      const hiddenTools = this.sliderLayout?.hidden || [];
      if (hiddenTools.includes(toolId)) return null;
      const leftTools = (this.sliderLayout?.left || ['layout', 'opacity', 'blur']).filter(id => !hiddenTools.includes(id));
      const rightTools = (this.sliderLayout?.right || ['zoom', 'radius', 'font']).filter(id => !hiddenTools.includes(id));
      if (leftTools.includes(toolId)) return 'left';
      if (rightTools.includes(toolId)) return 'right';
      return 'left';
    };

    const getToolConfig = (toolId) => {
      if (toolId === 'zoom') {
        const val = targetZoom || 0.85;
        return { min: 0.4, max: 1.5, val: val, label: `${Math.round(val * 100)}%`, step: 0.05, ariaLabel: 'Canvas Zoom' };
      } else if (toolId === 'radius') {
        let val = 18;
        if (activeRadiusScope === 'cards') {
          val = this.cardCornerRadiusVal !== undefined ? this.cardCornerRadiusVal : 6;
        } else {
          val = this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 18;
        }
        return { min: 0, max: 28, val: val, label: val === 0 ? 'Sharp' : `${val}px`, step: 1, ariaLabel: 'Corner Radius' };
      } else if (toolId === 'font') {
        let val = 1.0;
        let min = 0.4, max = 1.6;
        if (activeFontScope === 'all') {
          val = this.fontScaleAll !== undefined ? this.fontScaleAll : (this.gridFontScale || 1.0);
          min = 0.4; max = 1.6;
        } else if (activeFontScope === 'cards') {
          val = this.fontScaleCards !== undefined ? this.fontScaleCards : 1.0;
          min = 0.4; max = 1.6;
        } else if (activeFontScope === 'header') {
          val = this.fontScaleHeader !== undefined ? this.fontScaleHeader : 1.0;
          min = 0.5; max = 1.8;
        } else if (activeFontScope === 'title') {
          val = this.fontScaleTitle !== undefined ? this.fontScaleTitle : 1.0;
          min = 0.5; max = 2.0;
        } else if (activeFontScope === 'trademark') {
          val = this.fontScaleTrademark !== undefined ? this.fontScaleTrademark : 1.0;
          min = 0.5; max = 2.0;
        }
        return { min, max, val, label: `${Math.round(val * 100)}%`, step: 0.05, ariaLabel: 'Font Scale' };
      } else if (toolId === 'layout') {
        if (activeLayoutSubMode === 'width') {
          const val = this.gridWidthVal != null ? this.gridWidthVal : 100;
          return { min: 50, max: 130, val: val, label: `W: ${val}%`, step: 2, ariaLabel: 'Timetable Width' };
        } else if (activeLayoutSubMode === 'height') {
          const val = this.gridHeightVal != null ? this.gridHeightVal : 49;
          return { min: 25, max: 90, val: val, label: `H: ${val}px`, step: 2, ariaLabel: 'Timetable Height' };
        } else if (activeLayoutSubMode === 'posx') {
          const val = this.gridXPosVal != null ? this.gridXPosVal : 0;
          const sign = val > 0 ? '+' : '';
          return { min: -150, max: 150, val: val, label: `X: ${sign}${val}px`, step: 4, ariaLabel: 'Timetable X-Position' };
        } else if (activeLayoutSubMode === 'posy') {
          const val = this.gridYPosVal != null ? this.gridYPosVal : 0;
          const sign = val > 0 ? '+' : '';
          return { min: -120, max: 150, val: val, label: `Y: ${sign}${val}px`, step: 4, ariaLabel: 'Timetable Y-Position' };
        }
      } else if (toolId === 'opacity') {
        const val = this.timetableOpacity != null ? this.timetableOpacity : 100;
        return { min: 20, max: 100, val: val, label: `${val}%`, step: 5, ariaLabel: 'Card Opacity' };
      } else if (toolId === 'blur') {
        if (activeBlurSubMode === 'dim') {
          const val = this.wallpaperDimIntensity != null ? this.wallpaperDimIntensity : 0;
          return { min: 0, max: 100, val: val, label: `${val}%`, step: 5, ariaLabel: 'Wallpaper Dimming' };
        } else {
          const val = this.bgBlurEnabled ? (this.bgBlurIntensity != null ? this.bgBlurIntensity : 10) : 0;
          return { min: 0, max: 40, val: val, label: `${val}px`, step: 2, ariaLabel: 'Wallpaper Blur' };
        }
      }
      return { min: 0, max: 100, val: 100, label: '100%', step: 1, ariaLabel: 'Slider' };
    };

    const updateSideSliderUI = (side, animate = true) => {
      const activeTool = side === 'left' ? leftActiveTool : rightActiveTool;
      const track = side === 'left' ? leftSliderTrack : rightSliderTrack;
      const fill  = side === 'left' ? leftSliderFill : rightSliderFill;
      const label = side === 'left' ? leftSliderLabelText : rightSliderLabelText;
      const badge = side === 'left' ? leftSliderBadge : rightSliderBadge;
      const container = side === 'left' ? leftSliderContainer : rightSliderContainer;

      if (!track || !fill) return;

      const hiddenTools = this.sliderLayout?.hidden || [];
      const leftTools = (this.sliderLayout?.left || ['layout', 'opacity', 'blur']).filter(id => !hiddenTools.includes(id));
      const rightTools = (this.sliderLayout?.right || ['zoom', 'radius', 'font']).filter(id => !hiddenTools.includes(id));
      const toolsOnThisSide = side === 'left' ? leftTools : rightTools;

      // Update button active highlighting for tools on this side
      toolsOnThisSide.forEach(toolId => {
        const btn = sliderToolBtns[toolId];
        if (btn) btn.classList.toggle('active', toolId === activeTool);
      });

      // Update Sub-Scope Pills Visibility & Active states
      if (radiusScopeGroup) {
        radiusScopeGroup.classList.toggle('hidden', activeTool !== 'radius');
        [btnRadiusScopeBoth, btnRadiusScopeTable, btnRadiusScopeCards].forEach(b => b?.classList.remove('active'));
        if (activeRadiusScope === 'both') btnRadiusScopeBoth?.classList.add('active');
        else if (activeRadiusScope === 'table') btnRadiusScopeTable?.classList.add('active');
        else if (activeRadiusScope === 'cards') btnRadiusScopeCards?.classList.add('active');
      }

      if (fontScopeGroup) {
        fontScopeGroup.classList.toggle('hidden', activeTool !== 'font');
        if (fontTopGroup) fontTopGroup.classList.toggle('hidden', activeTool !== 'font');
        if (activeTool !== 'font') {
          floatingFontStyleCard?.classList.add('hidden');
          btnFontPanelToggle?.classList.remove('active');
        }
        [btnFontScopeAll, btnFontScopeCards, btnFontScopeHeader, btnFontScopeTitle, btnFontScopeTrademark].forEach(b => b?.classList.remove('active'));
        if (activeFontScope === 'all') btnFontScopeAll?.classList.add('active');
        else if (activeFontScope === 'cards') btnFontScopeCards?.classList.add('active');
        else if (activeFontScope === 'header') btnFontScopeHeader?.classList.add('active');
        else if (activeFontScope === 'title') btnFontScopeTitle?.classList.add('active');
        else if (activeFontScope === 'trademark') btnFontScopeTrademark?.classList.add('active');
      }

      if (layoutScopeGroup) {
        layoutScopeGroup.classList.toggle('hidden', activeTool !== 'layout');
        if (layoutTopGroup) layoutTopGroup.classList.toggle('hidden', activeTool !== 'layout');
        if (activeTool !== 'layout') {
          floatingDaysTimeCard?.classList.add('hidden');
          btnDaysPanelToggle?.classList.remove('active');
        }
        [btnFxWidth, btnFxHeight, btnFxPosx, btnFxPosy].forEach(b => b?.classList.remove('active'));
        if (activeLayoutSubMode === 'width') btnFxWidth?.classList.add('active');
        else if (activeLayoutSubMode === 'height') btnFxHeight?.classList.add('active');
        else if (activeLayoutSubMode === 'posx') btnFxPosx?.classList.add('active');
        else if (activeLayoutSubMode === 'posy') btnFxPosy?.classList.add('active');
      }

      if (blurScopeGroup) {
        blurScopeGroup.classList.toggle('hidden', activeTool !== 'blur');
        [btnBlurScopeBlur, btnBlurScopeDim].forEach(b => b?.classList.remove('active'));
        if (activeBlurSubMode === 'blur') btnBlurScopeBlur?.classList.add('active');
        else if (activeBlurSubMode === 'dim') btnBlurScopeDim?.classList.add('active');
      }

      // Calculate track fill percentage and label text
      const config = getToolConfig(activeTool);
      const ratio = Math.max(0, Math.min(1, (config.val - config.min) / (config.max - config.min)));
      const pct = Math.round(ratio * 100);

      fill.style.transition = animate ? 'height 0.22s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none';
      fill.style.setProperty('height', `${pct}%`, 'important');

      if (label) label.innerText = config.label;
      if (badge) badge.setAttribute('title', `${config.ariaLabel}: ${config.label}`);
      track.setAttribute('aria-valuenow', Math.round(config.val));
      track.setAttribute('aria-label', config.ariaLabel);
    };

    const applyToolValueByRatio = (toolId, ratio, smooth = true) => {
      const r = Math.max(0, Math.min(1, ratio));

      if (toolId === 'zoom') {
        const minZ = 0.4, maxZ = 1.5;
        const newZ = Math.round((minZ + r * (maxZ - minZ)) * 100) / 100;
        if (Math.abs(newZ - targetZoom) >= 0.005) {
          targetZoom = newZ;
          this.zoomScale = targetZoom;
          applyZoom(smooth);
          this._stagePending(true);
        }
      } else if (toolId === 'radius') {
        const minR = 0, maxR = 28;
        const newR = Math.round(minR + r * (maxR - minR));
        let changed = false;

        if (activeRadiusScope === 'both') {
          if (newR !== this.tableCornerRadiusVal || newR !== this.cardCornerRadiusVal) {
            this.tableCornerRadiusVal = newR;
            this.cardCornerRadiusVal = newR;
            this.tableCornerStyle = newR === 0 ? 'sharp' : 'rounded';
            this.cardCornerStyle = newR === 0 ? 'sharp' : 'rounded';
            const container = document.getElementById('lock-timetable-container');
            if (container) container.style.borderRadius = `${newR}px`;
            changed = true;
          }
        } else if (activeRadiusScope === 'table') {
          if (newR !== this.tableCornerRadiusVal) {
            this.tableCornerRadiusVal = newR;
            this.tableCornerStyle = newR === 0 ? 'sharp' : 'rounded';
            const container = document.getElementById('lock-timetable-container');
            if (container) container.style.borderRadius = `${newR}px`;
            changed = true;
          }
        } else if (activeRadiusScope === 'cards') {
          if (newR !== this.cardCornerRadiusVal) {
            this.cardCornerRadiusVal = newR;
            this.cardCornerStyle = newR === 0 ? 'sharp' : 'rounded';
            changed = true;
          }
        }

        if (changed) {
          this.renderTimetableGrid();
          this._stagePending(true);
        }
      } else if (toolId === 'font') {
        let minF = 0.4, maxF = 1.6;
        if (activeFontScope === 'header') { minF = 0.5; maxF = 1.8; }
        else if (activeFontScope === 'title' || activeFontScope === 'trademark') { minF = 0.5; maxF = 2.0; }

        const newF = Math.round((minF + r * (maxF - minF)) * 100) / 100;

        if (activeFontScope === 'all') {
          this.fontScaleAll = newF;
          this.gridFontScale = newF;
          this.gridFontSizeVal = Math.round(9 * newF * 10) / 10;
          try { localStorage.setItem('schedully_font_scale', String(newF)); } catch (e) {}
        } else if (activeFontScope === 'cards') {
          this.fontScaleCards = newF;
        } else if (activeFontScope === 'header') {
          this.fontScaleHeader = newF;
        } else if (activeFontScope === 'title') {
          this.fontScaleTitle = newF;
        } else if (activeFontScope === 'trademark') {
          this.fontScaleTrademark = newF;
        }

        this.renderTimetableGrid();
        if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
          this.renderWatchGlance();
        }
        this._stagePending(true);
      } else if (toolId === 'layout') {
        if (activeLayoutSubMode === 'width') {
          const val = Math.round(50 + r * 80);
          this.setTimetableWidthScale(val, false);
        } else if (activeLayoutSubMode === 'height') {
          const val = Math.round(25 + r * 65);
          this.setTimetableHeightScale(val, false);
        } else if (activeLayoutSubMode === 'posx') {
          const val = Math.round(-150 + r * 300);
          this.setTimetableOffsetX(val, false);
        } else if (activeLayoutSubMode === 'posy') {
          const val = Math.round(-120 + r * 270);
          this.setTimetableOffsetY(val, false);
        }
        this._stagePending(true);
      } else if (toolId === 'opacity') {
        const val = Math.round(20 + r * 80);
        this.setTimetableOpacity(val, false);
        this._stagePending(true);
      } else if (toolId === 'blur') {
        if (activeBlurSubMode === 'dim') {
          const val = Math.round(r * 100);
          this.setWallpaperDimming(val, false);
        } else {
          const val = Math.round(r * 40);
          this.setWallpaperBlur(val, val > 0, false);
        }
        this._stagePending(true);
      }
    };

    const resetToolToDefault = (toolId) => {
      if (toolId === 'zoom') {
        targetZoom = 0.85;
        this.zoomScale = 0.85;
        applyZoom(true);
      } else if (toolId === 'radius') {
        if (activeRadiusScope === 'both' || activeRadiusScope === 'table') {
          this.tableCornerRadiusVal = 18;
          this.tableCornerStyle = 'rounded';
          const container = document.getElementById('lock-timetable-container');
          if (container) container.style.borderRadius = '18px';
        }
        if (activeRadiusScope === 'both' || activeRadiusScope === 'cards') {
          this.cardCornerRadiusVal = (activeRadiusScope === 'both') ? 18 : 6;
          this.cardCornerStyle = 'rounded';
        }
        this.renderTimetableGrid();
      } else if (toolId === 'font') {
        if (activeFontScope === 'all') {
          this.fontScaleAll = 1.0;
          this.fontScaleCards = 1.0;
          this.fontScaleHeader = 1.0;
          this.fontScaleTitle = 1.0;
          this.fontScaleTrademark = 1.0;
          this.gridFontScale = 1.0;
          this.gridFontSizeVal = 9;
          try { localStorage.setItem('schedully_font_scale', '1.0'); } catch (err) {}
        } else if (activeFontScope === 'cards') {
          this.fontScaleCards = 1.0;
        } else if (activeFontScope === 'header') {
          this.fontScaleHeader = 1.0;
        } else if (activeFontScope === 'title') {
          this.fontScaleTitle = 1.0;
        } else if (activeFontScope === 'trademark') {
          this.fontScaleTrademark = 1.0;
        }
        this.renderTimetableGrid();
      } else if (toolId === 'layout') {
        if (activeLayoutSubMode === 'width') {
          this.setTimetableWidthScale(100, false);
        } else if (activeLayoutSubMode === 'height') {
          this.setTimetableHeightScale(49, false);
        } else if (activeLayoutSubMode === 'posx') {
          this.setTimetableOffsetX(0, false);
        } else if (activeLayoutSubMode === 'posy') {
          this.setTimetableOffsetY(0, false);
        }
      } else if (toolId === 'opacity') {
        this.setTimetableOpacity(100, false);
      } else if (toolId === 'blur') {
        if (activeBlurSubMode === 'dim') {
          this.setWallpaperDimming(0, false);
        } else {
          this.setWallpaperBlur(0, false, false);
        }
      }
      this._stagePending(true);
    };

    const stepToolDelta = (toolId, delta) => {
      if (toolId === 'zoom') {
        targetZoom = Math.min(1.5, Math.max(0.4, Math.round((targetZoom + delta * 0.05) * 100) / 100));
        this.zoomScale = targetZoom;
        applyZoom(true);
      } else if (toolId === 'radius') {
        const step = delta * 1;
        const current = (activeRadiusScope === 'cards') ? (this.cardCornerRadiusVal || 6) : (this.tableCornerRadiusVal || 18);
        const next = Math.max(0, Math.min(28, current + step));
        if (activeRadiusScope === 'both' || activeRadiusScope === 'table') {
          this.tableCornerRadiusVal = next;
          this.tableCornerStyle = next === 0 ? 'sharp' : 'rounded';
          const container = document.getElementById('lock-timetable-container');
          if (container) container.style.borderRadius = `${next}px`;
        }
        if (activeRadiusScope === 'both' || activeRadiusScope === 'cards') {
          this.cardCornerRadiusVal = next;
          this.cardCornerStyle = next === 0 ? 'sharp' : 'rounded';
        }
        this.renderTimetableGrid();
      } else if (toolId === 'font') {
        const step = delta * 0.05;
        let val = 1.0, minF = 0.4, maxF = 1.6;
        if (activeFontScope === 'all') val = this.fontScaleAll || 1.0;
        else if (activeFontScope === 'cards') val = this.fontScaleCards || 1.0;
        else if (activeFontScope === 'header') { val = this.fontScaleHeader || 1.0; minF = 0.5; maxF = 1.8; }
        else if (activeFontScope === 'title') { val = this.fontScaleTitle || 1.0; minF = 0.5; maxF = 2.0; }
        else if (activeFontScope === 'trademark') { val = this.fontScaleTrademark || 1.0; minF = 0.5; maxF = 2.0; }

        const next = Math.round(Math.max(minF, Math.min(maxF, val + step)) * 100) / 100;
        if (activeFontScope === 'all') {
          this.fontScaleAll = next;
          this.gridFontScale = next;
          this.gridFontSizeVal = Math.round(9 * next * 10) / 10;
          try { localStorage.setItem('schedully_font_scale', String(next)); } catch (e) {}
        } else if (activeFontScope === 'cards') this.fontScaleCards = next;
        else if (activeFontScope === 'header') this.fontScaleHeader = next;
        else if (activeFontScope === 'title') this.fontScaleTitle = next;
        else if (activeFontScope === 'trademark') this.fontScaleTrademark = next;

        this.renderTimetableGrid();
      } else if (toolId === 'layout') {
        if (activeLayoutSubMode === 'width') {
          const next = Math.max(50, Math.min(130, (this.gridWidthVal != null ? this.gridWidthVal : 100) + delta * 2));
          this.setTimetableWidthScale(next, false);
        } else if (activeLayoutSubMode === 'height') {
          const next = Math.max(25, Math.min(90, (this.gridHeightVal != null ? this.gridHeightVal : 49) + delta * 2));
          this.setTimetableHeightScale(next, false);
        } else if (activeLayoutSubMode === 'posx') {
          const next = Math.max(-150, Math.min(150, (this.gridXPosVal != null ? this.gridXPosVal : 0) + delta * 4));
          this.setTimetableOffsetX(next, false);
        } else if (activeLayoutSubMode === 'posy') {
          const next = Math.max(-120, Math.min(150, (this.gridYPosVal != null ? this.gridYPosVal : 0) + delta * 4));
          this.setTimetableOffsetY(next, false);
        }
      } else if (toolId === 'opacity') {
        const next = Math.max(20, Math.min(100, (this.timetableOpacity != null ? this.timetableOpacity : 100) + delta * 5));
        this.setTimetableOpacity(next, false);
      } else if (toolId === 'blur') {
        if (activeBlurSubMode === 'dim') {
          const next = Math.max(0, Math.min(100, (this.wallpaperDimIntensity || 0) + delta * 5));
          this.setWallpaperDimming(next, false);
        } else {
          const next = Math.max(0, Math.min(40, (this.bgBlurIntensity || 0) + delta * 2));
          this.setWallpaperBlur(next, next > 0, false);
        }
      }
      this._stagePending(true);
    };

    // Activate a tool (detecting whether it's on left or right)
    const selectSliderTool = (toolId) => {
      const side = getToolCurrentSide(toolId);
      if (side === 'left') {
        leftActiveTool = toolId;
      } else {
        rightActiveTool = toolId;
      }
      updateSideSliderUI(side, true);
      showSideBadgeTemporarily(side);
      window.soundFX?.play?.('tap');
      window.haptics?.trigger?.('selection');
    };

    // Attach click listeners to tool buttons
    Object.keys(sliderToolBtns).forEach(toolId => {
      const btn = sliderToolBtns[toolId];
      btn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectSliderTool(toolId);
      });
    });

    // Attach sub-scope button listeners
    btnRadiusScopeBoth?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeRadiusScope = 'both';
      updateSideSliderUI(getToolCurrentSide('radius'), true);
      showSideBadgeTemporarily(getToolCurrentSide('radius'));
      window.soundFX?.play?.('tap');
    });
    btnRadiusScopeTable?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeRadiusScope = 'table';
      updateSideSliderUI(getToolCurrentSide('radius'), true);
      showSideBadgeTemporarily(getToolCurrentSide('radius'));
      window.soundFX?.play?.('tap');
    });
    btnRadiusScopeCards?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeRadiusScope = 'cards';
      updateSideSliderUI(getToolCurrentSide('radius'), true);
      showSideBadgeTemporarily(getToolCurrentSide('radius'));
      window.soundFX?.play?.('tap');
    });

    btnFontScopeAll?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFontScope = 'all';
      updateSideSliderUI(getToolCurrentSide('font'), true);
      showSideBadgeTemporarily(getToolCurrentSide('font'));
      window.soundFX?.play?.('tap');
    });
    btnFontScopeCards?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFontScope = 'cards';
      updateSideSliderUI(getToolCurrentSide('font'), true);
      showSideBadgeTemporarily(getToolCurrentSide('font'));
      window.soundFX?.play?.('tap');
    });
    btnFontScopeHeader?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFontScope = 'header';
      updateSideSliderUI(getToolCurrentSide('font'), true);
      showSideBadgeTemporarily(getToolCurrentSide('font'));
      window.soundFX?.play?.('tap');
    });
    btnFontScopeTitle?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFontScope = 'title';
      updateSideSliderUI(getToolCurrentSide('font'), true);
      showSideBadgeTemporarily(getToolCurrentSide('font'));
      window.soundFX?.play?.('tap');
    });
    btnFontScopeTrademark?.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFontScope = 'trademark';
      updateSideSliderUI(getToolCurrentSide('font'), true);
      showSideBadgeTemporarily(getToolCurrentSide('font'));
      window.soundFX?.play?.('tap');
    });

    btnFxWidth?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeLayoutSubMode = 'width';
      selectSliderTool('layout');
    });
    btnFxHeight?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeLayoutSubMode = 'height';
      selectSliderTool('layout');
    });
    btnFxPosx?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeLayoutSubMode = 'posx';
      selectSliderTool('layout');
    });
    btnFxPosy?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeLayoutSubMode = 'posy';
      selectSliderTool('layout');
    });

    btnBlurScopeBlur?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeBlurSubMode = 'blur';
      selectSliderTool('blur');
    });
    btnBlurScopeDim?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      activeBlurSubMode = 'dim';
      selectSliderTool('blur');
    });

    // Font Panel Popover Toggle
    btnFontPanelToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!floatingFontStyleCard) return;
      const willOpen = floatingFontStyleCard.classList.contains('hidden');
      floatingFontStyleCard.classList.toggle('hidden', !willOpen);
      btnFontPanelToggle.classList.toggle('active', willOpen);
      if (willOpen) {
        document.getElementById('floating-days-time-card')?.classList.add('hidden');
        document.getElementById('btn-left-days-panel-toggle')?.classList.remove('active');
        document.getElementById('schedule-quick-settings')?.classList.add('hidden');
        document.getElementById('canvas-controls-popover')?.classList.add('hidden');
        document.getElementById('canvas-ratio-popover')?.classList.add('hidden');
        document.getElementById('floating-title-card')?.classList.add('hidden');
        document.getElementById('floating-palette-mode-card')?.classList.add('hidden');
      }
      window.soundFX?.play?.('tap');
      window.haptics?.trigger?.('selection');
    });

    btnCloseFloatingFont?.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingFontStyleCard?.classList.add('hidden');
      btnFontPanelToggle?.classList.remove('active');
      window.soundFX?.play?.('tap');
    });

    document.addEventListener('click', (e) => {
      if (floatingFontStyleCard && !floatingFontStyleCard.classList.contains('hidden')) {
        const insideCard = floatingFontStyleCard.contains(e.target);
        const insideToggle = fontTopGroup?.contains(e.target);
        if (!insideCard && !insideToggle) {
          floatingFontStyleCard.classList.add('hidden');
          btnFontPanelToggle?.classList.remove('active');
        }
      }
    });

    // Days & Time Panel Popover Toggle
    btnDaysPanelToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!floatingDaysTimeCard) return;
      const willOpen = floatingDaysTimeCard.classList.contains('hidden');
      floatingDaysTimeCard.classList.toggle('hidden', !willOpen);
      btnDaysPanelToggle.classList.toggle('active', willOpen);
      if (willOpen) {
        document.getElementById('floating-font-style-card')?.classList.add('hidden');
        document.getElementById('btn-right-font-panel-toggle')?.classList.remove('active');
        document.getElementById('schedule-quick-settings')?.classList.add('hidden');
        document.getElementById('canvas-controls-popover')?.classList.add('hidden');
        document.getElementById('canvas-ratio-popover')?.classList.add('hidden');
        document.getElementById('floating-title-card')?.classList.add('hidden');
        document.getElementById('floating-palette-mode-card')?.classList.add('hidden');
      }
      window.soundFX?.play?.('tap');
      window.haptics?.trigger?.('selection');
    });

    btnCloseFloatingDays?.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingDaysTimeCard?.classList.add('hidden');
      btnDaysPanelToggle?.classList.remove('active');
      window.soundFX?.play?.('tap');
    });

    document.addEventListener('click', (e) => {
      if (floatingDaysTimeCard && !floatingDaysTimeCard.classList.contains('hidden')) {
        const insideCard = floatingDaysTimeCard.contains(e.target);
        const insideToggle = layoutTopGroup?.contains(e.target);
        if (!insideCard && !insideToggle) {
          floatingDaysTimeCard.classList.add('hidden');
          btnDaysPanelToggle?.classList.remove('active');
        }
      }
    });

    // Track Dragging & Scrubbing Engine for both Left and Right side tracks
    const setupTrackInteractions = (side) => {
      const track = side === 'left' ? leftSliderTrack : rightSliderTrack;
      const container = side === 'left' ? leftSliderContainer : rightSliderContainer;
      if (!track || !container) return;

      let isDragging = false;

      const updateFromPointer = (e, animate = false) => {
        const activeTool = side === 'left' ? leftActiveTool : rightActiveTool;
        const rect = track.getBoundingClientRect();
        let clientY = e.clientY;
        if (clientY == null && e.touches && e.touches.length > 0) clientY = e.touches[0].clientY;
        else if (clientY == null && e.changedTouches && e.changedTouches.length > 0) clientY = e.changedTouches[0].clientY;
        if (clientY == null) clientY = rect.top + rect.height / 2;

        const offsetY = rect.bottom - clientY;
        const ratio = offsetY / rect.height;

        applyToolValueByRatio(activeTool, ratio, false);
        updateSideSliderUI(side, animate);
        showSideBadgeTemporarily(side);
        window.haptics?.trigger?.('slider');
      };

      const onDragStart = (e) => {
        if (e.button != null && e.button !== 0) return;
        isDragging = true;
        container.classList.add('active-drag');
        window.soundFX?.play?.('tap');
        updateFromPointer(e, false);
        if (e.cancelable) e.preventDefault();
      };

      const onDragMove = (e) => {
        if (!isDragging) return;
        updateFromPointer(e, false);
        if (e.cancelable) e.preventDefault();
      };

      const onDragEnd = () => {
        if (isDragging) {
          isDragging = false;
          container.classList.remove('active-drag');
          updateSideSliderUI(side, true);
          showSideBadgeTemporarily(side, 1200);
        }
      };

      track.addEventListener('pointerdown', onDragStart);
      track.addEventListener('mousedown', onDragStart);
      track.addEventListener('touchstart', onDragStart, { passive: false });

      window.addEventListener('pointermove', onDragMove, { passive: false });
      window.addEventListener('mousemove', onDragMove);
      window.addEventListener('touchmove', onDragMove, { passive: false });

      window.addEventListener('pointerup', onDragEnd);
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('touchend', onDragEnd);
      window.addEventListener('pointercancel', onDragEnd);
      window.addEventListener('touchcancel', onDragEnd);

      // Double-click track to reset current active tool
      track.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        const activeTool = side === 'left' ? leftActiveTool : rightActiveTool;
        resetToolToDefault(activeTool);
        window.soundFX?.play?.('tap');
        updateSideSliderUI(side, true);
        showSideBadgeTemporarily(side);
      });

      // Mouse wheel scrub over slider container
      container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const activeTool = side === 'left' ? leftActiveTool : rightActiveTool;
        const delta = e.deltaY < 0 ? 1 : -1;
        stepToolDelta(activeTool, delta);
        updateSideSliderUI(side, false);
        showSideBadgeTemporarily(side);
      }, { passive: false });
    };

    setupTrackInteractions('left');
    setupTrackInteractions('right');

    this.syncLeftFxSlider = (animate = true) => updateSideSliderUI('left', animate);
    this.syncRightSlider = (animate = true) => updateSideSliderUI('right', animate);


    // Flush pending changes before page unloads or tab becomes hidden
    window.addEventListener('beforeunload', () => {
      if (this._hasUnsavedCloudChanges && window.schedullyFirebase?.currentUser) {
        this.saveToCloud();
      }
    });
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && this._hasUnsavedCloudChanges && window.schedullyFirebase?.currentUser) {
        this.saveToCloud();
      }
    });

    // ═══════════════════════════════════════════════════════════════
    // SLIDER CUSTOMIZER SETUP (Left vs Right Drag & Drop / Tap Swap)
    // ═══════════════════════════════════════════════════════════════
    this.setupSliderCustomizerUI = () => {
      const modal = document.getElementById('modal-slider-customizer');
      const btnOpen = document.getElementById('btn-open-slider-customizer');
      const btnClose = document.getElementById('btn-close-slider-customizer');
      const btnReset = document.getElementById('btn-reset-slider-customizer');
      const btnSave = document.getElementById('btn-save-slider-customizer');
      const zoneLeft = document.getElementById('slider-zone-left');
      const zoneRight = document.getElementById('slider-zone-right');
      const countLeft = document.getElementById('slider-count-left');
      const countRight = document.getElementById('slider-count-right');

      if (!modal || !btnOpen) return;

      const SLIDER_TOOLS_DEF = {
        zoom: { id: 'zoom', name: 'Canvas Zoom', icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`, desc: 'Scale & fit (40% - 150%)' },
        radius: { id: 'radius', name: 'Corner Radius', icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="6" /></svg>`, desc: 'Roundness (frame & cards)' },
        font: { id: 'font', name: 'Font Size', icon: `<span class="text-xs font-black leading-none">A<span class="text-[9px]">a</span></span>`, desc: 'Typography scaling & drawer' },
        layout: { id: 'layout', name: 'Grid Layout', icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 12H3M7 8l-4 4 4 4M17 8l4 4-4 4"/><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4"/></svg>`, desc: 'Width, Height, X, Y & Days' },
        opacity: { id: 'opacity', name: 'Card Opacity', icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke-dasharray="2 2"/></svg>`, desc: 'Glass & card transparency' },
        blur: { id: 'blur', name: 'Wallpaper Effects', icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`, desc: 'Photo wallpaper blur & dimming' }
      };

      let tempLayout = {
        left: [...(this.sliderLayout?.left || ['layout', 'opacity', 'blur'])],
        right: [...(this.sliderLayout?.right || ['zoom', 'radius', 'font'])],
        hidden: [...(this.sliderLayout?.hidden || [])]
      };

      let draggedId = null;
      let draggedFromSide = null;

      // Touch Drag Variables for Tablets/Phones
      let touchDraggedId = null;
      let touchFromSide = null;
      let touchGhost = null;
      let touchOriginCard = null;

      const renderZones = () => {
        [zoneLeft, zoneRight].forEach(z => { if (z) z.innerHTML = ''; });

        const createCard = (id, currentSide, index) => {
          const tool = SLIDER_TOOLS_DEF[id];
          if (!tool) return null;
          const isHidden = (tempLayout.hidden || []).includes(id);

          const el = document.createElement('div');
          el.className = `slider-drag-card flex items-center justify-between p-2 rounded-xl border shadow-sm cursor-grab active:cursor-grabbing select-none ${isHidden ? 'is-hidden-card' : ''}`;
          el.draggable = true;
          el.setAttribute('data-id', id);
          el.setAttribute('data-side', currentSide);
          el.setAttribute('data-index', index);

          const eyeIconOpen = `<svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
          const eyeIconClosed = `<svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`;

          el.innerHTML = `
            <div class="flex items-center gap-2 overflow-hidden pointer-events-none flex-1 min-w-0">
              <span class="text-slate-400 font-bold text-xs shrink-0">
                <svg class="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor"><circle cx="8.5" cy="6.5" r="1.5"/><circle cx="15.5" cy="6.5" r="1.5"/><circle cx="8.5" cy="12" r="1.5"/><circle cx="15.5" cy="12" r="1.5"/><circle cx="8.5" cy="17.5" r="1.5"/><circle cx="15.5" cy="17.5" r="1.5"/></svg>
              </span>
              <div class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0" style="background: ${isHidden ? 'var(--m3-sys-color-surface-variant, #e2e8f0)' : 'var(--m3-sys-color-primary-container, #dbeafe)'}; color: ${isHidden ? 'var(--m3-sys-text-secondary, #94a3b8)' : 'var(--m3-sys-color-primary, #2563eb)'};">
                ${tool.icon}
              </div>
              <div class="flex flex-col text-left overflow-hidden min-w-0">
                <span class="text-xs font-bold truncate ${isHidden ? 'line-through opacity-60' : ''}" style="color: ${isHidden ? 'var(--m3-sys-text-secondary, #94a3b8)' : 'var(--m3-sys-text-primary, #0f172a)'};">${tool.name}</span>
                <span class="text-[9px] font-medium truncate" style="color: var(--m3-sys-text-secondary, #64748b);">${isHidden ? 'Hidden from sidebar' : tool.desc}</span>
              </div>
            </div>
            <button type="button" class="btn-toggle-eye p-1.5 rounded-lg transition-all cursor-pointer shrink-0 ml-1" draggable="false" style="color: ${isHidden ? 'var(--m3-sys-text-secondary, #94a3b8)' : 'var(--m3-sys-color-primary, #2563eb)'};" title="${isHidden ? 'Show tool in sidebar' : 'Hide tool from sidebar'}">
              ${isHidden ? eyeIconClosed : eyeIconOpen}
            </button>
          `;

          // Tap eye icon to toggle visibility
          const btnToggle = el.querySelector('.btn-toggle-eye');
          if (btnToggle) {
            btnToggle.setAttribute('draggable', 'false');
            const toggleTool = (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!tempLayout.hidden) tempLayout.hidden = [];
              if (tempLayout.hidden.includes(id)) {
                tempLayout.hidden = tempLayout.hidden.filter(x => x !== id);
                window.soundFX?.play?.('open');
              } else {
                tempLayout.hidden.push(id);
                window.soundFX?.play?.('tap');
              }
              renderZones();
            };

            btnToggle.addEventListener('pointerdown', (e) => e.stopPropagation());
            btnToggle.addEventListener('mousedown', (e) => e.stopPropagation());
            btnToggle.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });
            btnToggle.addEventListener('click', toggleTool);
          }

          // HTML5 Mouse Drag start & end
          el.addEventListener('dragstart', (e) => {
            if (e.target && e.target.closest && e.target.closest('.btn-toggle-eye')) {
              e.preventDefault();
              return;
            }
            draggedId = id;
            draggedFromSide = currentSide;
            e.dataTransfer.setData('text/plain', JSON.stringify({ id, fromSide: currentSide }));
            e.dataTransfer.effectAllowed = 'move';
            el.classList.add('opacity-40');
          });

          el.addEventListener('dragend', () => {
            draggedId = null;
            draggedFromSide = null;
            el.classList.remove('opacity-40');
            document.querySelectorAll('.slider-drop-zone').forEach(z => z.classList.remove('drag-active'));
            document.querySelectorAll('.slider-drag-card').forEach(c => c.classList.remove('border-t-2', 'border-b-2', 'border-blue-500'));
          });

          // Individual card dragover for position indicators
          el.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';
            if (draggedId === id) return;

            const rect = el.getBoundingClientRect();
            const relY = e.clientY - rect.top;
            if (relY < rect.height / 2) {
              el.classList.add('border-t-2', 'border-blue-500');
              el.classList.remove('border-b-2');
            } else {
              el.classList.add('border-b-2', 'border-blue-500');
              el.classList.remove('border-t-2');
            }
          });

          el.addEventListener('dragleave', () => {
            el.classList.remove('border-t-2', 'border-b-2', 'border-blue-500');
          });

          el.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            el.classList.remove('border-t-2', 'border-b-2', 'border-blue-500');

            try {
              const payload = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');
              const srcId = payload.id || draggedId;
              const fromSide = payload.fromSide || draggedFromSide;
              if (!srcId) return;

              // Remove from original list
              tempLayout[fromSide] = tempLayout[fromSide].filter(x => x !== srcId);

              // Calculate target insertion index
              let targetIdx = tempLayout[currentSide].indexOf(id);
              if (targetIdx === -1) {
                targetIdx = tempLayout[currentSide].length;
              } else {
                const rect = el.getBoundingClientRect();
                const relY = e.clientY - rect.top;
                if (relY >= rect.height / 2) {
                  targetIdx += 1;
                }
              }

              // Insert at target position
              tempLayout[currentSide].splice(targetIdx, 0, srcId);
              renderZones();
              window.soundFX?.play?.('tap');
            } catch (err) {}
          });

          // ── Tablet / Mobile Touch Drag Handlers ──
          el.addEventListener('touchstart', (e) => {
            if (e.target && e.target.closest && e.target.closest('.btn-toggle-eye')) {
              return;
            }
            const touch = e.touches[0];
            touchDraggedId = id;
            touchFromSide = currentSide;
            touchOriginCard = el;

            // Create floating ghost
            touchGhost = el.cloneNode(true);
            touchGhost.classList.add('touch-drag-ghost');
            touchGhost.style.width = `${el.offsetWidth}px`;
            touchGhost.style.left = `${touch.clientX}px`;
            touchGhost.style.top = `${touch.clientY}px`;
            document.body.appendChild(touchGhost);

            el.classList.add('opacity-40');
          }, { passive: true });

          el.addEventListener('touchmove', (e) => {
            if (!touchGhost || !touchDraggedId) return;
            const touch = e.touches[0];
            touchGhost.style.left = `${touch.clientX}px`;
            touchGhost.style.top = `${touch.clientY}px`;

            // Highlight drop targets under finger
            const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            document.querySelectorAll('.slider-drop-zone').forEach(z => z.classList.remove('drag-active'));
            document.querySelectorAll('.slider-drag-card').forEach(c => c.classList.remove('border-t-2', 'border-b-2', 'border-blue-500'));

            if (elemBelow) {
              const zoneBelow = elemBelow.closest('.slider-drop-zone');
              if (zoneBelow) zoneBelow.classList.add('drag-active');

              const cardBelow = elemBelow.closest('.slider-drag-card');
              if (cardBelow && cardBelow !== touchOriginCard) {
                const rect = cardBelow.getBoundingClientRect();
                const relY = touch.clientY - rect.top;
                if (relY < rect.height / 2) {
                  cardBelow.classList.add('border-t-2', 'border-blue-500');
                } else {
                  cardBelow.classList.add('border-b-2', 'border-blue-500');
                }
              }
            }
          }, { passive: true });

          el.addEventListener('touchend', (e) => {
            if (!touchGhost && !touchDraggedId) return;
            const touch = e.changedTouches[0];
            const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);

            if (touchGhost && touchGhost.parentNode) {
              touchGhost.parentNode.removeChild(touchGhost);
            }
            touchGhost = null;

            if (touchOriginCard) {
              touchOriginCard.classList.remove('opacity-40');
              touchOriginCard = null;
            }

            document.querySelectorAll('.slider-drop-zone').forEach(z => z.classList.remove('drag-active'));
            document.querySelectorAll('.slider-drag-card').forEach(c => c.classList.remove('border-t-2', 'border-b-2', 'border-blue-500'));

            if (elemBelow && touchDraggedId) {
              const cardBelow = elemBelow.closest('.slider-drag-card');
              const zoneBelow = elemBelow.closest('.slider-drop-zone');

              if (cardBelow) {
                const targetCardId = cardBelow.getAttribute('data-id');
                const targetSide = cardBelow.getAttribute('data-side');
                if (targetSide && targetCardId) {
                  tempLayout[touchFromSide] = tempLayout[touchFromSide].filter(x => x !== touchDraggedId);
                  let targetIdx = tempLayout[targetSide].indexOf(targetCardId);
                  if (targetIdx === -1) {
                    targetIdx = tempLayout[targetSide].length;
                  } else {
                    const rect = cardBelow.getBoundingClientRect();
                    if (touch.clientY - rect.top >= rect.height / 2) {
                      targetIdx += 1;
                    }
                  }
                  tempLayout[targetSide].splice(targetIdx, 0, touchDraggedId);
                  renderZones();
                  window.soundFX?.play?.('tap');
                }
              } else if (zoneBelow) {
                const targetSide = zoneBelow.getAttribute('data-side');
                if (targetSide) {
                  tempLayout[touchFromSide] = tempLayout[touchFromSide].filter(x => x !== touchDraggedId);
                  tempLayout[targetSide].push(touchDraggedId);
                  renderZones();
                  window.soundFX?.play?.('tap');
                }
              }
            }

            touchDraggedId = null;
            touchFromSide = null;
          }, { passive: true });

          return el;
        };

        tempLayout.left.forEach((id, idx) => {
          const card = createCard(id, 'left', idx);
          if (card) zoneLeft?.appendChild(card);
        });
        tempLayout.right.forEach((id, idx) => {
          const card = createCard(id, 'right', idx);
          if (card) zoneRight?.appendChild(card);
        });

        const activeLeftCount = tempLayout.left.filter(id => !(tempLayout.hidden || []).includes(id)).length;
        const activeRightCount = tempLayout.right.filter(id => !(tempLayout.hidden || []).includes(id)).length;
        if (countLeft) countLeft.innerText = `${activeLeftCount} visible`;
        if (countRight) countRight.innerText = `${activeRightCount} visible`;
      };

      // Setup DnD on drop zones (handles dropping on empty zone or bottom empty space)
      [zoneLeft, zoneRight].forEach(zone => {
        if (!zone) return;
        const targetSide = zone.getAttribute('data-side');

        zone.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          zone.classList.add('drag-active');
        });

        zone.addEventListener('dragleave', (e) => {
          if (!zone.contains(e.relatedTarget)) {
            zone.classList.remove('drag-active');
          }
        });

        zone.addEventListener('drop', (e) => {
          e.preventDefault();
          zone.classList.remove('drag-active');
          try {
            const payload = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');
            const srcId = payload.id || draggedId;
            const fromSide = payload.fromSide || draggedFromSide;
            if (srcId) {
              tempLayout[fromSide] = tempLayout[fromSide].filter(x => x !== srcId);
              tempLayout[targetSide].push(srcId);
              renderZones();
              window.soundFX?.play?.('tap');
            }
          } catch (err) {}
        });
      });

      btnOpen.addEventListener('click', (e) => {
        e.stopPropagation();
        tempLayout = {
          left: [...(this.sliderLayout?.left || ['layout', 'opacity', 'blur'])],
          right: [...(this.sliderLayout?.right || ['zoom', 'radius', 'font'])],
          hidden: [...(this.sliderLayout?.hidden || [])]
        };
        renderZones();
        modal.classList.remove('hidden');
        document.body.classList.add('slider-customizer-open');
        window.soundFX?.play?.('open');
      });

      const closeModal = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('slider-customizer-open');
      };

      btnClose?.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      btnReset?.addEventListener('click', () => {
        tempLayout = { 
          left: ['layout', 'opacity', 'blur'], 
          right: ['zoom', 'radius', 'font'],
          hidden: []
        };
        renderZones();
        window.soundFX?.play?.('tap');
      });

      btnSave?.addEventListener('click', () => {
        this.sliderLayout = {
          left: [...tempLayout.left],
          right: [...tempLayout.right],
          hidden: [...(tempLayout.hidden || [])]
        };
        try {
          localStorage.setItem('schedully_slider_layout', JSON.stringify(this.sliderLayout));
        } catch (e) {}

        if (typeof this.renderCustomizedSideSliders === 'function') {
          this.renderCustomizedSideSliders();
        }
        this._stagePending(true);
        closeModal();
        window.soundFX?.play?.('save');
        if (typeof showToast === 'function') {
          showToast('Side sliders layout saved!', 'success');
        }
      });
    };

    this.renderCustomizedSideSliders = () => {
      const leftContainer = document.getElementById('side-fx-slider-container');
      const rightContainer = document.getElementById('side-right-slider-container');
      const hiddenTools = this.sliderLayout?.hidden || [];
      const leftTools = (this.sliderLayout?.left || ['layout', 'opacity', 'blur']).filter(id => !hiddenTools.includes(id));
      const rightTools = (this.sliderLayout?.right || ['zoom', 'radius', 'font']).filter(id => !hiddenTools.includes(id));

      const allBtns = {
        zoom: document.getElementById('btn-right-mode-zoom'),
        radius: document.getElementById('btn-right-mode-radius'),
        font: document.getElementById('btn-right-mode-font'),
        layout: document.getElementById('btn-fx-mode-layout'),
        opacity: document.getElementById('btn-fx-mode-opacity'),
        blur: document.getElementById('btn-fx-mode-blur')
      };

      const leftPill = document.getElementById('m3-expressive-fx-pill');
      const rightPill = document.getElementById('m3-expressive-right-pill');
      const leftTrack = document.getElementById('side-fx-track');
      const rightTrack = document.getElementById('side-right-track');

      if (!leftPill || !rightPill) return;

      // Move buttons to the correct parent pill
      leftTools.forEach(toolId => {
        const btn = allBtns[toolId];
        if (btn && leftTrack) {
          leftPill.insertBefore(btn, leftTrack);
        }
      });
      rightTools.forEach(toolId => {
        const btn = allBtns[toolId];
        if (btn && rightTrack) {
          rightPill.insertBefore(btn, rightTrack);
        }
      });

      // Move top scope groups (Days top pill and Font top pill)
      if (layoutTopGroup) {
        if (leftTools.includes('layout') && leftContainer) {
          leftContainer.insertBefore(layoutTopGroup, leftContainer.firstChild);
        } else if (rightTools.includes('layout') && rightContainer) {
          rightContainer.insertBefore(layoutTopGroup, rightContainer.firstChild);
        }
      }
      if (fontTopGroup) {
        if (leftTools.includes('font') && leftContainer) {
          leftContainer.insertBefore(fontTopGroup, leftContainer.firstChild);
        } else if (rightTools.includes('font') && rightContainer) {
          rightContainer.insertBefore(fontTopGroup, rightContainer.firstChild);
        }
      }

      // Move bottom sub-scope groups (Radius, Font, Layout scopes)
      if (radiusScopeGroup) {
        if (leftTools.includes('radius') && leftContainer) {
          leftContainer.appendChild(radiusScopeGroup);
        } else if (rightTools.includes('radius') && rightContainer) {
          rightContainer.appendChild(radiusScopeGroup);
        }
      }
      if (layoutScopeGroup) {
        if (leftTools.includes('layout') && leftContainer) {
          leftContainer.appendChild(layoutScopeGroup);
        } else if (rightTools.includes('layout') && rightContainer) {
          rightContainer.appendChild(layoutScopeGroup);
        }
      }
      if (fontScopeGroup) {
        if (leftTools.includes('font') && leftContainer) {
          leftContainer.appendChild(fontScopeGroup);
        } else if (rightTools.includes('font') && rightContainer) {
          rightContainer.appendChild(fontScopeGroup);
        }
      }
      if (blurScopeGroup) {
        if (leftTools.includes('blur') && leftContainer) {
          leftContainer.appendChild(blurScopeGroup);
        } else if (rightTools.includes('blur') && rightContainer) {
          rightContainer.appendChild(blurScopeGroup);
        }
      }
      // Adjust floating popover positions based on which side their launcher is placed
      if (floatingDaysTimeCard) {
        if (rightTools.includes('layout')) {
          floatingDaysTimeCard.classList.remove('floating-days-card');
        } else {
          floatingDaysTimeCard.classList.add('floating-days-card');
        }
      }
      if (floatingFontStyleCard) {
        if (leftTools.includes('font')) {
          floatingFontStyleCard.classList.add('floating-days-card');
        } else {
          floatingFontStyleCard.classList.remove('floating-days-card');
        }
      }

      // Show/hide based on assignment and hidden state
      Object.keys(allBtns).forEach(id => {
        const btn = allBtns[id];
        if (btn) {
          const isLeft = leftTools.includes(id);
          const isRight = rightTools.includes(id);
          const isVisible = (isLeft || isRight) && !hiddenTools.includes(id);
          btn.classList.toggle('hidden', !isVisible);
          if (!isVisible) {
            btn.style.setProperty('display', 'none', 'important');
          } else {
            btn.style.removeProperty('display');
          }
        }
      });

      // Ensure scope groups are hidden if parent tool is hidden
      if (hiddenTools.includes('layout')) {
        if (layoutTopGroup) layoutTopGroup.classList.add('hidden');
        if (layoutScopeGroup) layoutScopeGroup.classList.add('hidden');
      }
      if (hiddenTools.includes('font')) {
        if (fontTopGroup) fontTopGroup.classList.add('hidden');
        if (fontScopeGroup) fontScopeGroup.classList.add('hidden');
      }
      if (hiddenTools.includes('radius')) {
        if (radiusScopeGroup) radiusScopeGroup.classList.add('hidden');
      }

      // Ensure active tool on each side is valid
      if (leftTools.length > 0 && !leftTools.includes(leftActiveTool)) {
        leftActiveTool = leftTools[0];
      }
      if (rightTools.length > 0 && !rightTools.includes(rightActiveTool)) {
        rightActiveTool = rightTools[0];
      }

      const showSliders = (localStorage.getItem('schedully_show_side_sliders') !== 'no');
      if (leftContainer) {
        leftContainer.classList.toggle('hidden', leftTools.length === 0 || !showSliders);
      }
      if (rightContainer) {
        rightContainer.classList.toggle('hidden', rightTools.length === 0 || !showSliders);
      }

      if (leftTools.length > 0) updateSideSliderUI('left', false);
      if (rightTools.length > 0) updateSideSliderUI('right', false);
    };

    this.setupSliderCustomizerUI();
    if (typeof this.renderCustomizedSideSliders === 'function') {
      this.renderCustomizedSideSliders();
    }

    // ═══════════════════════════════════════════════════════════════
    // FLOATING PALETTE & MODE CARD ENGINE (Bottom-Left Circle Island Trigger)
    // ═══════════════════════════════════════════════════════════════
    const btnFloatingPaletteToggle = document.getElementById('btn-floating-palette-toggle');
    const floatingPaletteModeCard  = document.getElementById('floating-palette-mode-card');
    const btnCloseFloatingPalette  = document.getElementById('btn-close-floating-palette');
    const floatingResetPaletteBtn  = document.getElementById('btn-floating-reset-palette');
    const floatingPaletteCircleIsland = document.getElementById('floating-palette-circle-island');
    const floatingPaletteTitleText = document.getElementById('floating-palette-title-text');
    const floatingPalettePage1     = document.getElementById('floating-palette-page-1');
    const floatingPalettePage2     = document.getElementById('floating-palette-page-2');
    const floatingPalettePage3     = document.getElementById('floating-palette-page-3');
    const btnPalettePagePrev       = document.getElementById('btn-palette-page-prev');
    const btnPalettePageNext       = document.getElementById('btn-palette-page-next');
    const palettePageDot1          = document.getElementById('palette-page-dot-1');
    const palettePageDot2          = document.getElementById('palette-page-dot-2');
    const palettePageDot3          = document.getElementById('palette-page-dot-3');

    let currentPalettePage = 1;

    const setPaletteCardPage = (page) => {
      currentPalettePage = page;
      if (floatingPalettePage1) floatingPalettePage1.classList.toggle('hidden', page !== 1);
      if (floatingPalettePage2) floatingPalettePage2.classList.toggle('hidden', page !== 2);
      if (floatingPalettePage3) floatingPalettePage3.classList.toggle('hidden', page !== 3);

      if (floatingPaletteTitleText) {
        if (page === 1) {
          floatingPaletteTitleText.innerText = 'Palette & Mode';
          floatingPaletteTitleText.setAttribute('data-i18n', 'paletteAndMode');
        } else if (page === 2) {
          floatingPaletteTitleText.innerText = 'Colors & Theme';
          floatingPaletteTitleText.setAttribute('data-i18n', 'colorsAndTheme');
        } else {
          floatingPaletteTitleText.innerText = 'Wallpaper & Background';
          floatingPaletteTitleText.setAttribute('data-i18n', 'wallpaper');
        }
      }

      const indicatorsTrack = document.getElementById('floating-palette-indicators');
      if (indicatorsTrack) {
        indicatorsTrack.setAttribute('data-active-page', String(page));
      }

      if (palettePageDot1) {
        palettePageDot1.classList.toggle('active', page === 1);
        palettePageDot1.classList.toggle('inactive', page !== 1);
      }
      if (palettePageDot2) {
        palettePageDot2.classList.toggle('active', page === 2);
        palettePageDot2.classList.toggle('inactive', page !== 2);
      }
      if (palettePageDot3) {
        palettePageDot3.classList.toggle('active', page === 3);
        palettePageDot3.classList.toggle('inactive', page !== 3);
      }
    };

    // Initialize to page 1 on load
    setPaletteCardPage(1);

    if (btnFloatingPaletteToggle && floatingPaletteModeCard) {
      btnFloatingPaletteToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = floatingPaletteModeCard.classList.contains('hidden');
        floatingPaletteModeCard.classList.toggle('hidden', !willOpen);
        btnFloatingPaletteToggle.classList.toggle('active', willOpen);
        if (willOpen) {
          setPaletteCardPage(currentPalettePage || 1);
          // Close other floating popovers to avoid collisions
          document.getElementById('floating-font-style-card')?.classList.add('hidden');
          document.getElementById('floating-days-time-card')?.classList.add('hidden');
          document.getElementById('canvas-controls-popover')?.classList.add('hidden');
          document.getElementById('canvas-ratio-popover')?.classList.add('hidden');
          document.getElementById('schedule-quick-settings')?.classList.add('hidden');
        }
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      btnCloseFloatingPalette?.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingPaletteModeCard.classList.add('hidden');
        btnFloatingPaletteToggle.classList.remove('active');
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      // Carousel Page Navigation Handlers
      btnPalettePagePrev?.addEventListener('click', (e) => {
        e.stopPropagation();
        let prevPage = currentPalettePage - 1;
        if (prevPage < 1) prevPage = 3;
        setPaletteCardPage(prevPage);
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      btnPalettePageNext?.addEventListener('click', (e) => {
        e.stopPropagation();
        let nextPage = currentPalettePage + 1;
        if (nextPage > 3) nextPage = 1;
        setPaletteCardPage(nextPage);
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      palettePageDot1?.addEventListener('click', (e) => {
        e.stopPropagation();
        setPaletteCardPage(1);
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      palettePageDot2?.addEventListener('click', (e) => {
        e.stopPropagation();
        setPaletteCardPage(2);
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      palettePageDot3?.addEventListener('click', (e) => {
        e.stopPropagation();
        setPaletteCardPage(3);
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      // Outside dismiss
      document.addEventListener('click', (e) => {
        if (!floatingPaletteModeCard.classList.contains('hidden')) {
          const isInsideCard = floatingPaletteModeCard.contains(e.target);
          const isInsideToggle = floatingPaletteCircleIsland?.contains(e.target);
          if (!isInsideCard && !isInsideToggle) {
            floatingPaletteModeCard.classList.add('hidden');
            btnFloatingPaletteToggle.classList.remove('active');
          }
        }
      });

      // Floating card palette swatches click delegation (Page 1)
      document.getElementById('floating-palette-grid')?.addEventListener('click', (e) => {
        const dot = e.target.closest('.palette-dot');
        if (!dot) return;
        const palette = dot.getAttribute('data-palette');
        if (palette) {
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.setPalette(palette, true);
        }
      });

      // Floating card theme mode dots delegation (Page 1)
      document.getElementById('floating-theme-mode-row')?.addEventListener('click', (e) => {
        const modeDot = e.target.closest('.theme-mode-dot');
        if (!modeDot) return;
        const mode = modeDot.getAttribute('data-mode');
        if (mode) {
          if (window.soundFX) window.soundFX.play('toggle');
          if (window.haptics) window.haptics.trigger('selection');
          this.setMode(mode, true);
        }
      });

      // Floating card theme style switchers (Default vs Glass)
      const btnStyleDefault = document.getElementById('btn-floating-style-default');
      const btnStyleGlass = document.getElementById('btn-floating-style-glass');
      const styleLabel = document.getElementById('floating-active-theme-style-label');

      const updateFloatingStyleUI = (style) => {
        btnStyleDefault?.classList.toggle('active', style === 'default');
        btnStyleGlass?.classList.toggle('active', style === 'glass');
        if (styleLabel) {
          styleLabel.innerText = style === 'glass' ? '✦ GLASS' : 'DEFAULT';
        }
      };

      btnStyleDefault?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof window.applyThemeStyle === 'function') {
          window.applyThemeStyle('default');
        } else {
          document.body.classList.remove('theme-style-glass');
          document.body.classList.add('theme-style-default');
          try { localStorage.setItem('schedully_theme_style', 'default'); } catch (_) {}
        }
        updateFloatingStyleUI('default');
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      btnStyleGlass?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof window.applyThemeStyle === 'function') {
          window.applyThemeStyle('glass');
        } else {
          document.body.classList.remove('theme-style-default');
          document.body.classList.add('theme-style-glass');
          try { localStorage.setItem('schedully_theme_style', 'glass'); } catch (_) {}
        }
        updateFloatingStyleUI('glass');
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      // ════════════ PAGE 2: CUSTOM COLOR HANDLERS (IMAGE 2) ════════════
      // 1. Grid Surface Colour
      document.querySelectorAll('#floating-grid-surface-picker .floating-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-grid-surface-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorVal = btn.getAttribute('data-surface');
          this.userHasPickedSurfaceColor = true;
          this.customSurfaceColor = colorVal;
          document.documentElement.style.setProperty('--m3-grid-surface-bg', colorVal);
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.syncCustomColorPickersUI();
          this._stagePending(true);
        });
      });

      document.getElementById('floating-custom-surface-color')?.addEventListener('input', (e) => {
        const colorVal = e.target.value;
        document.querySelectorAll('#floating-grid-surface-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedSurfaceColor = true;
        this.customSurfaceColor = colorVal;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', colorVal);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });

      // 2. Background Colour
      document.querySelectorAll('#floating-bg-color-picker .floating-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-bg-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorVal = btn.getAttribute('data-bg');
          this.userHasPickedBgColor = true;
          this.customBgColor = colorVal;
          this.phoneCanvas.style.backgroundColor = colorVal;
          this.updateClockContrast(colorVal);
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.syncCustomColorPickersUI();
          this._stagePending(true);
        });
      });

      document.getElementById('floating-custom-bg-color')?.addEventListener('input', (e) => {
        const colorVal = e.target.value;
        document.querySelectorAll('#floating-bg-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedBgColor = true;
        this.customBgColor = colorVal;
        this.phoneCanvas.style.backgroundColor = colorVal;
        this.updateClockContrast(colorVal);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });

      // 3. Header Colour
      document.querySelectorAll('#floating-header-color-picker .floating-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-header-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorVal = btn.getAttribute('data-header');
          this.userHasPickedHeaderColor = true;
          this.customHeaderColor = colorVal;
          this.applyHeaderColor(colorVal, true);
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.syncCustomColorPickersUI();
          this._stagePending(true);
        });
      });

      document.getElementById('floating-custom-header-color')?.addEventListener('input', (e) => {
        const colorVal = e.target.value;
        document.querySelectorAll('#floating-header-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedHeaderColor = true;
        this.customHeaderColor = colorVal;
        this.applyHeaderColor(colorVal, true);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });

      // 4. Trademark Colour
      document.querySelectorAll('#floating-trademark-color-picker .floating-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-trademark-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorVal = btn.getAttribute('data-trademark');
          this.userHasPickedTrademarkColor = true;
          this.customTrademarkColor = colorVal;
          this.applyTrademarkColor(colorVal, true);
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.syncCustomColorPickersUI();
          this._stagePending(true);
        });
      });

      document.getElementById('floating-custom-trademark-color')?.addEventListener('input', (e) => {
        const colorVal = e.target.value;
        document.querySelectorAll('#floating-trademark-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedTrademarkColor = true;
        this.customTrademarkColor = colorVal;
        this.applyTrademarkColor(colorVal, true);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });

      // 5. Font Colour
      document.querySelectorAll('#floating-font-color-picker .floating-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-font-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorVal = btn.getAttribute('data-font');
          this.userHasPickedFontColor = true;
          this.customFontColor = colorVal;
          this.applyFontColor(colorVal, true);
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
          this.syncCustomColorPickersUI();
          this._stagePending(true);
        });
      });

      document.getElementById('floating-custom-font-color')?.addEventListener('input', (e) => {
        const colorVal = e.target.value;
        document.querySelectorAll('#floating-font-color-picker .floating-color-swatch-btn').forEach(b => b.classList.remove('active'));
        this.userHasPickedFontColor = true;
        this.customFontColor = colorVal;
        this.applyFontColor(colorVal, true);
        this.syncCustomColorPickersUI();
        this._stagePending(true);
      });

      // Page 3: Wallpaper & Background Actions
      document.getElementById('floating-btn-remove-wallpaper')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
        this.removeWallpaper();
        if (typeof showToast === 'function') {
          showToast('Wallpaper removed', 'info');
        }
      });

      const floatingResyncBtn = document.getElementById('floating-btn-resync-wallpaper-colors');
      floatingResyncBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.soundFX) window.soundFX.play('palette');
        if (window.haptics) window.haptics.trigger('selection');
        this.resyncColors(false);

        const icon = floatingResyncBtn.querySelector('svg');
        if (icon) {
          icon.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
          icon.style.transform = 'rotate(360deg)';
          setTimeout(() => {
            icon.style.transition = 'none';
            icon.style.transform = '';
          }, 500);
        }
      });

      // Reset to Default button
      floatingResetPaletteBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('success');

        if (currentPalettePage === 1) {
          // Page 1: Reset theme mode to auto, palette to indigo, style to default
          this.setMode('auto', true);
          this.setPalette('indigo', true);

          if (typeof window.applyThemeStyle === 'function') {
            window.applyThemeStyle('default');
          } else {
            document.body.classList.remove('theme-style-glass');
            document.body.classList.add('theme-style-default');
            try { localStorage.setItem('schedully_theme_style', 'default'); } catch (_) {}
          }
          updateFloatingStyleUI('default');

          if (typeof showToast === 'function') {
            showToast('Theme reset to defaults!', 'info');
          }
        } else if (currentPalettePage === 2) {
          // Page 2: Reset custom colors (surface, bg, header, trademark, font) back to active theme defaults
          this.userHasPickedSurfaceColor = false;
          this.userHasPickedBgColor = false;
          this.userHasPickedHeaderColor = false;
          this.userHasPickedTrademarkColor = false;
          this.userHasPickedFontColor = false;
          this.customSurfaceColor = null;
          this.customBgColor = null;
          this.customHeaderColor = null;
          this.customTrademarkColor = null;
          this.customFontColor = null;
          this.phoneCanvas.style.backgroundColor = '';
          this.applyHeaderColor('', true);
          this.applyTrademarkColor('', true);
          this.applyFontColor('', true);
          document.documentElement.style.removeProperty('--m3-grid-surface-bg');
          document.documentElement.style.removeProperty('--m3-header-custom-bg');
          document.documentElement.style.removeProperty('--trademark-pill-custom-bg');
          document.documentElement.style.removeProperty('--trademark-pill-outline-color');
          document.documentElement.style.removeProperty('--trademark-custom-text-color');
          document.documentElement.style.removeProperty('--m3-font-custom-color');
          this.applyThemeEngine();
          this.renderAll();
          this.syncCustomColorPickersUI();
          this._stagePending(true);

          if (typeof showToast === 'function') {
            showToast('Colors reset to theme defaults!', 'info');
          }
        } else if (currentPalettePage === 3) {
          // Page 3: Reset Wallpaper back to defaults
          this.removeWallpaper();
          if (typeof showToast === 'function') {
            showToast('Wallpaper reset to defaults!', 'info');
          }
        }
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // FLOATING ADD COURSE WIZARD ENGINE (Step 1 -> Step 2 -> Save)
    // ═══════════════════════════════════════════════════════════════
    const btnFloatingAddCourseToggle = document.getElementById('btn-floating-add-course-toggle');
    const floatingAddCourseCircleIsland = document.getElementById('floating-add-course-circle-island');
    const floatingAddCourseCard = document.getElementById('floating-add-course-card');
    const btnCloseFloatingAddCourse = document.getElementById('btn-close-floating-add-course');
    const btnFloatingCourseStep1Tab = document.getElementById('btn-floating-course-step1-tab');
    const btnFloatingCourseStep2Tab = document.getElementById('btn-floating-course-step2-tab');
    const floatingCourseStep1 = document.getElementById('floating-course-step-1');
    const floatingCourseStep2 = document.getElementById('floating-course-step-2');
    const btnFloatingCourseToStep2 = document.getElementById('btn-floating-course-to-step2');
    const btnFloatingCourseToStep1 = document.getElementById('btn-floating-course-to-step1');
    const btnFloatingSaveCourse = document.getElementById('btn-floating-save-course');

    let currentAddCourseStep = 1;
    let floatingCourseSelectedColor = this.selectedColor || '#6366F1';
    let floatingCourseSelectedFont = '#FFFFFF';
    let floatingCourseDisplayTime = 'yes';

    const setAddCourseStep = (step) => {
      currentAddCourseStep = step;
      if (floatingCourseStep1) floatingCourseStep1.classList.toggle('hidden', step !== 1);
      if (floatingCourseStep2) floatingCourseStep2.classList.toggle('hidden', step !== 2);

      if (btnFloatingCourseStep1Tab) {
        btnFloatingCourseStep1Tab.classList.toggle('active', step === 1);
        btnFloatingCourseStep1Tab.classList.toggle('text-gray-500', step !== 1);
        btnFloatingCourseStep1Tab.classList.toggle('dark:text-gray-400', step !== 1);
      }
      if (btnFloatingCourseStep2Tab) {
        btnFloatingCourseStep2Tab.classList.toggle('active', step === 2);
        btnFloatingCourseStep2Tab.classList.toggle('text-gray-500', step !== 2);
        btnFloatingCourseStep2Tab.classList.toggle('dark:text-gray-400', step !== 2);
      }
      if (window.soundFX) window.soundFX.play('tap');
      if (window.haptics) window.haptics.trigger('selection');
    };

    if (btnFloatingAddCourseToggle && floatingAddCourseCard) {
      btnFloatingAddCourseToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = floatingAddCourseCard.classList.contains('hidden');
        floatingAddCourseCard.classList.toggle('hidden', !willOpen);
        btnFloatingAddCourseToggle.classList.toggle('active', willOpen);

        if (willOpen) {
          setAddCourseStep(1);
          // Close other floating popovers to keep screen clear
          document.getElementById('floating-palette-mode-card')?.classList.add('hidden');
          document.getElementById('btn-floating-palette-toggle')?.classList.remove('active');
          document.getElementById('schedule-quick-settings')?.classList.add('hidden');
          document.getElementById('floating-font-style-card')?.classList.add('hidden');
          document.getElementById('floating-days-time-card')?.classList.add('hidden');
          document.getElementById('floating-title-card')?.classList.add('hidden');
          document.getElementById('canvas-controls-popover')?.classList.add('hidden');
          document.getElementById('canvas-ratio-popover')?.classList.add('hidden');

          // Sync period mode visibility
          const rowPeriod = document.getElementById('floating-row-period-select');
          const rowStartTime = document.getElementById('floating-row-start-time');
          const rowEndTime = document.getElementById('floating-row-end-time');
          if (rowPeriod && rowStartTime && rowEndTime) {
            const isPeriod = (this.axisMode === 'period');
            rowPeriod.style.display = isPeriod ? 'flex' : 'none';
            rowStartTime.style.display = isPeriod ? 'none' : 'flex';
            rowEndTime.style.display = isPeriod ? 'none' : 'flex';
          }
        }
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      btnCloseFloatingAddCourse?.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingAddCourseCard.classList.add('hidden');
        btnFloatingAddCourseToggle.classList.remove('active');
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
      });

      // Quick Import from within Add Course Modal (Dual Import Flow)
      const handleAddCourseImportClick = (e) => {
        e.stopPropagation();
        floatingAddCourseCard.classList.add('hidden');
        btnFloatingAddCourseToggle.classList.remove('active');
        if (window.soundFX) window.soundFX.play('tap');
        if (window.haptics) window.haptics.trigger('selection');
        const universalInput = document.getElementById('universal-file-input');
        if (universalInput) {
          universalInput.value = '';
          universalInput.click();
        }
      };
      document.getElementById('btn-add-course-quick-import')?.addEventListener('click', handleAddCourseImportClick);

      btnFloatingCourseStep1Tab?.addEventListener('click', (e) => {
        e.stopPropagation();
        setAddCourseStep(1);
      });

      btnFloatingCourseStep2Tab?.addEventListener('click', (e) => {
        e.stopPropagation();
        setAddCourseStep(2);
      });

      btnFloatingCourseToStep2?.addEventListener('click', (e) => {
        e.stopPropagation();
        const codeInput = document.getElementById('floating-input-course-code');
        if (codeInput && !codeInput.value.trim()) {
          codeInput.focus();
          if (typeof showToast === 'function') {
            showToast('Please enter a course name first!', 'warning');
          }
          if (window.soundFX) window.soundFX.play('error');
          if (window.haptics) window.haptics.trigger('error');
          return;
        }
        setAddCourseStep(2);
      });

      btnFloatingCourseToStep1?.addEventListener('click', (e) => {
        e.stopPropagation();
        setAddCourseStep(1);
      });

      // Step 1: Display Time Toggle
      document.querySelectorAll('#floating-toggle-course-display-time .pill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-toggle-course-display-time .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          floatingCourseDisplayTime = btn.getAttribute('data-val') || 'yes';
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
        });
      });

      // Step 1: Grid Colour Swatches (Single Row Circular Dots)
      document.querySelectorAll('#floating-course-color-picker .floating-course-swatch-dot').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-course-color-picker .floating-course-swatch-dot').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          floatingCourseSelectedColor = btn.getAttribute('data-color') || '#D5C5B5';
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
        });
      });

      document.getElementById('floating-course-custom-color')?.addEventListener('input', (e) => {
        floatingCourseSelectedColor = e.target.value;
        document.querySelectorAll('#floating-course-color-picker .floating-course-swatch-dot').forEach(b => b.classList.remove('active'));
      });

      // Step 1: Font Colour Swatches (Single Row Circular Dots)
      document.querySelectorAll('#floating-course-font-picker .floating-course-font-dot').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('#floating-course-font-picker .floating-course-font-dot').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          floatingCourseSelectedFont = btn.getAttribute('data-coursefont') || '#FFFFFF';
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
        });
      });

      document.getElementById('floating-course-custom-font')?.addEventListener('input', (e) => {
        floatingCourseSelectedFont = e.target.value;
        document.querySelectorAll('#floating-course-font-picker .floating-course-font-dot').forEach(b => b.classList.remove('active'));
      });

      // Step 2: Save to Timetable
      btnFloatingSaveCourse?.addEventListener('click', (e) => {
        e.stopPropagation();
        const codeInput = document.getElementById('floating-input-course-code');
        const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
        if (!code) {
          setAddCourseStep(1);
          if (codeInput) codeInput.focus();
          if (typeof showToast === 'function') {
            showToast('Please enter a course name!', 'warning');
          }
          if (window.soundFX) window.soundFX.play('error');
          if (window.haptics) window.haptics.trigger('error');
          return;
        }

        let startTime = document.getElementById('floating-input-start-time')?.value || '09:00';
        let endTime = document.getElementById('floating-input-end-time')?.value || '11:00';
        let periodNumber = undefined;

        if (this.axisMode === 'period') {
          const periodSel = document.getElementById('floating-input-period-select');
          const selOpt = periodSel ? periodSel.selectedOptions[0] : null;
          periodNumber = selOpt ? parseInt(selOpt.value, 10) : 1;
          startTime = selOpt ? (selOpt.getAttribute('data-start') || '09:00') : '09:00';
          endTime = selOpt ? (selOpt.getAttribute('data-end') || '10:30') : '10:30';
        }

        const courseType = document.getElementById('floating-input-type')?.value.trim() || '';
        const location = document.getElementById('floating-input-location')?.value.trim() || '';
        const lecturer = document.getElementById('floating-input-lecturer')?.value.trim() || '';
        const group = document.getElementById('floating-input-group')?.value.trim() || '';

        const checkedDays = Array.from(document.querySelectorAll('.floating-course-day-check:checked')).map(cb => cb.value);
        const daysToCreate = checkedDays.length > 0 ? checkedDays : ['Mon'];

        this.recordHistoryState();

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
            customColor: floatingCourseSelectedColor,
            fontColor: floatingCourseSelectedFont,
            displayTime: floatingCourseDisplayTime
          });
        });

        // Reset inputs
        if (codeInput) codeInput.value = '';
        const typeInput = document.getElementById('floating-input-type');
        if (typeInput) typeInput.value = '';
        const locInput = document.getElementById('floating-input-location');
        if (locInput) locInput.value = '';
        const lectInput = document.getElementById('floating-input-lecturer');
        if (lectInput) lectInput.value = '';
        const grpInput = document.getElementById('floating-input-group');
        if (grpInput) grpInput.value = '';

        // Close wizard card
        floatingAddCourseCard.classList.add('hidden');
        btnFloatingAddCourseToggle.classList.remove('active');

        this.updateHistoryButtonUI();
        this.renderAll();
        this._stagePending(true);

        if (window.soundFX) window.soundFX.play('success');
        if (window.haptics) window.haptics.trigger('success');
        if (typeof showToast === 'function') {
          showToast(`Course "${code}" saved to timetable!`, 'success');
        }
      });

      // Outside dismiss
      document.addEventListener('click', (e) => {
        if (!floatingAddCourseCard.classList.contains('hidden')) {
          const isInsideCard = floatingAddCourseCard.contains(e.target);
          const isInsideToggle = floatingAddCourseCircleIsland?.contains(e.target);
          if (!isInsideCard && !isInsideToggle) {
            floatingAddCourseCard.classList.add('hidden');
            btnFloatingAddCourseToggle.classList.remove('active');
          }
        }
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // FLOATING TITLE & TRADEMARK STYLE / PLACEMENT CARD ENGINE
    // ═══════════════════════════════════════════════════════════════
    const floatingTitleCard          = document.getElementById('floating-title-card');
    const btnCloseFloatingTitle      = document.getElementById('btn-close-floating-title');
    const floatingHeaderIcon         = document.getElementById('floating-header-icon');
    const floatingHeaderTitle        = document.getElementById('floating-header-title');
    const btnTitlePlacementMerged    = document.getElementById('btn-title-placement-merged');
    const btnTitlePlacementSeparated = document.getElementById('btn-title-placement-separated');
    const btnPlacementMergedLabel    = document.getElementById('btn-placement-merged-label');
    const btnPlacementSeparatedLabel = document.getElementById('btn-placement-separated-label');
    const btnPlacementMergedIcon     = document.getElementById('btn-placement-merged-icon');
    const btnPlacementSeparatedIcon  = document.getElementById('btn-placement-separated-icon');
    const titleSeparatedOptionsCard  = document.getElementById('title-separated-options-card');
    const sliderTitleUnified         = document.getElementById('slider-title-unified');
    const titleUnifiedBadge          = document.getElementById('title-unified-badge');
    const btnFloatingResetTitle      = document.getElementById('btn-floating-reset-title');

    // Title state
    this.titlePlacement    = localStorage.getItem('schedully_title_placement') || 'merged';
    this.titleCornerRadius = parseInt(localStorage.getItem('schedully_title_radius') || '14', 10);
    this.titleGapDistance  = parseInt(localStorage.getItem('schedully_title_gap') || '8', 10);
    this.titleWidthSize    = parseInt(localStorage.getItem('schedully_title_width') || '100', 10);
    this.titleActiveParam  = 'radius'; // 'radius' | 'gap' | 'width'

    // Trademark state
    this.trademarkLayoutMode   = localStorage.getItem('schedully_trademark_layout') || 'borderless';
    this.trademarkCornerRadius = parseInt(localStorage.getItem('schedully_trademark_radius') || '14', 10);
    this.trademarkGapDistance  = parseInt(localStorage.getItem('schedully_trademark_gap') || '8', 10);
    this.trademarkWidthSize    = parseInt(localStorage.getItem('schedully_trademark_width') || '100', 10);
    this.trademarkActiveParam  = 'radius'; // 'radius' | 'gap' | 'width'

    const syncFloatingEditorUI = () => {
      const isTitle = (this.currentTitleBarMode !== 'trademark');

      // 1. Header Updates
      if (floatingHeaderTitle) {
        floatingHeaderTitle.innerText = isTitle ? 'TITLE' : 'TRADEMARK';
      }
      if (floatingHeaderIcon) {
        floatingHeaderIcon.innerHTML = isTitle
          ? '<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>'
          : '<path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>';
      }

      // 2. Toggle Button 1 & 2 Labels & Icons
      if (btnPlacementMergedLabel) {
        btnPlacementMergedLabel.innerText = isTitle ? 'Merged' : 'Borderless';
      }
      if (btnPlacementMergedIcon) {
        btnPlacementMergedIcon.innerHTML = isTitle
          ? '<rect x="3" y="3" width="18" height="18" rx="4" stroke-width="2"></rect><path stroke-linecap="round" stroke-width="2" d="M3 9h18"></path>'
          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>';
      }

      if (btnPlacementSeparatedLabel) {
        btnPlacementSeparatedLabel.innerText = isTitle ? 'Separated' : 'Border';
      }
      if (btnPlacementSeparatedIcon) {
        btnPlacementSeparatedIcon.innerHTML = isTitle
          ? '<rect x="3" y="2" width="18" height="5" rx="2" stroke-width="2"></rect><rect x="3" y="10" width="18" height="12" rx="4" stroke-width="2"></rect>'
          : '<rect x="3" y="3" width="18" height="18" rx="4" stroke-width="2"></rect>';
      }

      // 3. Active State on Toggle Buttons
      const isMode1Active = isTitle ? (this.titlePlacement === 'merged') : (this.trademarkLayoutMode === 'borderless');
      const isMode2Active = isTitle ? (this.titlePlacement === 'separated') : (this.trademarkLayoutMode === 'border');

      btnTitlePlacementMerged?.classList.toggle('active', isMode1Active);
      btnTitlePlacementSeparated?.classList.toggle('active', isMode2Active);

      // 4. Options Card Visibility
      const showOptions = isTitle ? (this.titlePlacement === 'separated') : (this.trademarkLayoutMode === 'border');
      titleSeparatedOptionsCard?.classList.toggle('hidden', !showOptions);

      // 5. Circle Buttons Active State
      const currentActiveParam = isTitle ? this.titleActiveParam : this.trademarkActiveParam;
      document.querySelectorAll('.title-circle-btn').forEach(btn => {
        const param = btn.getAttribute('data-param');
        btn.classList.toggle('active', param === currentActiveParam);
      });

      if (!sliderTitleUnified) return;

      const currentRad = isTitle ? this.titleCornerRadius : this.trademarkCornerRadius;
      const currentGap = isTitle ? this.titleGapDistance : this.trademarkGapDistance;
      const currentWidth = isTitle ? this.titleWidthSize : this.trademarkWidthSize;

      if (currentActiveParam === 'radius') {
        sliderTitleUnified.min = '0';
        sliderTitleUnified.max = '28';
        sliderTitleUnified.step = '1';
        sliderTitleUnified.value = currentRad;
        if (titleUnifiedBadge) {
          titleUnifiedBadge.innerText = currentRad === 0 ? '0px (Sq)' : `${currentRad}px`;
          titleUnifiedBadge.className = 'title-adaptive-badge';
        }
      } else if (currentActiveParam === 'gap') {
        sliderTitleUnified.min = '0';
        sliderTitleUnified.max = '28';
        sliderTitleUnified.step = '1';
        sliderTitleUnified.value = currentGap;
        if (titleUnifiedBadge) {
          titleUnifiedBadge.innerText = `${currentGap}px`;
          titleUnifiedBadge.className = 'title-adaptive-badge';
        }
      } else if (currentActiveParam === 'width') {
        sliderTitleUnified.min = '10';
        sliderTitleUnified.max = '100';
        sliderTitleUnified.step = '1';
        sliderTitleUnified.value = currentWidth;
        if (titleUnifiedBadge) {
          titleUnifiedBadge.innerText = `${currentWidth}%`;
          titleUnifiedBadge.className = 'title-adaptive-badge';
        }
      }
    };
    this.syncFloatingEditorUI = syncFloatingEditorUI;

    const applyTitleLayout = () => {
      const container = document.getElementById('lock-timetable-container');
      if (!container) return;

      if (this.titlePlacement === 'separated') {
        container.classList.add('title-separated');
        document.documentElement.style.setProperty('--title-separated-radius', `${this.titleCornerRadius}px`);
        document.documentElement.style.setProperty('--title-separated-gap', `${this.titleGapDistance}px`);
        document.documentElement.style.setProperty('--title-separated-width', `${this.titleWidthSize}%`);
        
        const titleBar = document.getElementById('lock-grid-title');
        if (titleBar) {
          titleBar.style.borderRadius = `${this.titleCornerRadius}px`;
          titleBar.style.marginBottom = `${this.titleGapDistance}px`;
          titleBar.style.width = `${this.titleWidthSize}%`;
        }

        const gridExact = container.querySelector('.m3-lock-grid-exact');
        if (gridExact) {
          const gridR = (this.tableCornerStyle === 'sharp') ? 0 : (this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 18);
          gridExact.style.borderRadius = `${gridR}px`;
          document.documentElement.style.setProperty('--timetable-corner-radius', `${gridR}px`);
        }
      } else {
        container.classList.remove('title-separated');
        const titleBar = document.getElementById('lock-grid-title');
        if (titleBar) {
          titleBar.style.borderRadius = '';
          titleBar.style.marginBottom = '';
          titleBar.style.width = '';
        }
        const gridExact = container.querySelector('.m3-lock-grid-exact');
        if (gridExact) {
          gridExact.style.borderRadius = '';
        }
      }

      try {
        localStorage.setItem('schedully_title_placement', this.titlePlacement);
        localStorage.setItem('schedully_title_radius', String(this.titleCornerRadius));
        localStorage.setItem('schedully_title_gap', String(this.titleGapDistance));
        localStorage.setItem('schedully_title_width', String(this.titleWidthSize));
      } catch (_) {}

      syncFloatingEditorUI();
    };
    this.applyTitleLayout = applyTitleLayout;
    applyTitleLayout();

    const applyTrademarkLayout = () => {
      const footer = document.getElementById('lock-trademark-footer');
      if (!footer) return;

      if (this.trademarkLayoutMode === 'border') {
        footer.classList.remove('style-default', 'style-borderless', 'style-rounded', 'style-squared');
        footer.classList.add('style-custom-border');
        document.documentElement.style.setProperty('--trademark-corner-radius', `${this.trademarkCornerRadius}px`);
        document.documentElement.style.setProperty('--trademark-gap-distance', `${this.trademarkGapDistance}px`);
        document.documentElement.style.setProperty('--trademark-width-size', `${this.trademarkWidthSize}%`);
      } else {
        footer.classList.remove('style-custom-border', 'style-rounded', 'style-squared');
        footer.classList.add('style-borderless');
      }

      footer.style.setProperty('display', this.showTrademark ? 'inline-flex' : 'none', 'important');
      footer.classList.toggle('hidden', !this.showTrademark);
      footer.classList.toggle('is-hidden', !this.showTrademark);

      try {
        localStorage.setItem('schedully_trademark_layout', this.trademarkLayoutMode);
        localStorage.setItem('schedully_trademark_radius', String(this.trademarkCornerRadius));
        localStorage.setItem('schedully_trademark_gap', String(this.trademarkGapDistance));
        localStorage.setItem('schedully_trademark_width', String(this.trademarkWidthSize));
      } catch (_) {}

      syncFloatingEditorUI();
    };
    this.applyTrademarkLayout = applyTrademarkLayout;
    applyTrademarkLayout();

    const openFloatingTitleCard = () => {
      if (!floatingTitleCard) return;
      floatingTitleCard.classList.remove('hidden');
      // Ensure bottom preview controls card stays expanded as well
      const controlsPopover = document.getElementById('canvas-controls-popover');
      if (controlsPopover && controlsPopover.classList.contains('hidden')) {
        controlsPopover.classList.remove('hidden');
      }
      // Close side popups to avoid side clutter
      document.getElementById('floating-font-style-card')?.classList.add('hidden');
      document.getElementById('floating-palette-mode-card')?.classList.add('hidden');
      document.getElementById('floating-days-time-card')?.classList.add('hidden');
      syncFloatingEditorUI();
      if (window.soundFX) window.soundFX.play('tap');
      if (window.haptics) window.haptics.trigger('selection');
    };
    this.openFloatingTitleCard = openFloatingTitleCard;

    // Auto-expand on initial startup if controls popover is visible
    setTimeout(() => {
      const controlsPopover = document.getElementById('canvas-controls-popover');
      if (controlsPopover && !controlsPopover.classList.contains('hidden')) {
        openFloatingTitleCard();
      }
    }, 120);

    // Open when choosing Title or Trademark mode
    document.querySelectorAll('#title-trademark-mode-toggles button, #title-trademark-mode-toggles .capsule-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openFloatingTitleCard();
      });
    });

    document.getElementById('input-title-text-stage')?.addEventListener('focus', () => {
      openFloatingTitleCard();
    });

    document.getElementById('controls-title-row')?.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      openFloatingTitleCard();
    });

    document.getElementById('lock-grid-title')?.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      openFloatingTitleCard();
    });

    btnCloseFloatingTitle?.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingTitleCard?.classList.add('hidden');
      if (window.soundFX) window.soundFX.play('tap');
    });

    // Placement / Style Buttons (Merged/Borderless vs Separated/Border)
    btnTitlePlacementMerged?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isTitle = (this.currentTitleBarMode !== 'trademark');
      if (isTitle) {
        this.titlePlacement = 'merged';
        applyTitleLayout();
      } else {
        this.trademarkLayoutMode = 'borderless';
        applyTrademarkLayout();
      }
      if (window.soundFX) window.soundFX.play('tap');
      if (window.haptics) window.haptics.trigger('selection');
      this._stagePending();
    });

    btnTitlePlacementSeparated?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isTitle = (this.currentTitleBarMode !== 'trademark');
      if (isTitle) {
        this.titlePlacement = 'separated';
        applyTitleLayout();
      } else {
        this.trademarkLayoutMode = 'border';
        applyTrademarkLayout();
      }
      if (window.soundFX) window.soundFX.play('tap');
      if (window.haptics) window.haptics.trigger('selection');
      this._stagePending();
    });

    // 3 Circle Option Buttons
    document.querySelectorAll('.title-circle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const param = btn.getAttribute('data-param');
        if (param) {
          const isTitle = (this.currentTitleBarMode !== 'trademark');
          if (isTitle) {
            this.titleActiveParam = param;
          } else {
            this.trademarkActiveParam = param;
          }
          syncFloatingEditorUI();
          if (window.soundFX) window.soundFX.play('tap');
          if (window.haptics) window.haptics.trigger('selection');
        }
      });
    });

    // Shared Single Slider
    sliderTitleUnified?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const isTitle = (this.currentTitleBarMode !== 'trademark');
      if (isTitle) {
        if (this.titleActiveParam === 'radius') {
          this.titleCornerRadius = isNaN(val) ? 14 : val;
        } else if (this.titleActiveParam === 'gap') {
          this.titleGapDistance = isNaN(val) ? 8 : val;
        } else if (this.titleActiveParam === 'width') {
          this.titleWidthSize = isNaN(val) ? 100 : val;
        }
        applyTitleLayout();
      } else {
        if (this.trademarkActiveParam === 'radius') {
          this.trademarkCornerRadius = isNaN(val) ? 14 : val;
        } else if (this.trademarkActiveParam === 'gap') {
          this.trademarkGapDistance = isNaN(val) ? 8 : val;
        } else if (this.trademarkActiveParam === 'width') {
          this.trademarkWidthSize = isNaN(val) ? 100 : val;
        }
        applyTrademarkLayout();
      }
      this._stagePending();
    });

    // Reset Button
    btnFloatingResetTitle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isTitle = (this.currentTitleBarMode !== 'trademark');
      if (isTitle) {
        this.titlePlacement = 'merged';
        this.titleCornerRadius = 14;
        this.titleGapDistance = 8;
        this.titleWidthSize = 100;
        this.titleActiveParam = 'radius';
        applyTitleLayout();
        if (typeof showToast === 'function') {
          showToast('Title layout reset to default!', 'info');
        }
      } else {
        this.trademarkLayoutMode = 'borderless';
        this.trademarkCornerRadius = 14;
        this.trademarkGapDistance = 8;
        this.trademarkWidthSize = 100;
        this.trademarkActiveParam = 'radius';
        applyTrademarkLayout();
        if (typeof showToast === 'function') {
          showToast('Trademark style reset to default!', 'info');
        }
      }
      if (window.soundFX) window.soundFX.play('tap');
      if (window.haptics) window.haptics.trigger('success');
      this._stagePending();
    });

    // Outside dismiss for title/trademark card
    document.addEventListener('click', (e) => {
      if (floatingTitleCard && !floatingTitleCard.classList.contains('hidden')) {
        const insideCard = floatingTitleCard.contains(e.target);
        const insidePopover = document.getElementById('canvas-controls-popover')?.contains(e.target);
        const insideTrigger = document.getElementById('controls-title-wrapper')?.contains(e.target) || document.getElementById('lock-grid-title')?.contains(e.target) || document.getElementById('btn-toggle-canvas-popover')?.contains(e.target);
        const isClickOnThemeOrSidebar = e.target.closest('#left-sidebar, #right-sidebar, #bottom-floating-pill-bar, #interactive-tour-overlay, #tour-popover-card, .palette-dot, .theme-mode-dot, .color-swatch-btn, .swatch-dot');
        if (!insideCard && !insidePopover && !insideTrigger && !isClickOnThemeOrSidebar) {
          floatingTitleCard.classList.add('hidden');
        }
      }
    });

    if (btnThemeToggle) {
      btnThemeToggle.addEventListener('click', () => {
        if (window.soundFX) window.soundFX.play('toggle');
        this.currentMode = this.currentMode === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('schedully_theme_mode', this.currentMode); } catch (e) {}
        document.querySelectorAll('.theme-mode-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
        });
        this.applyThemeEngine();
        this.renderAll();
        this._stagePending(true);
      });
    }

    // Randomize Theme Palette Button (Bottom Pill Bar)
    const btnRandThemeEl = document.getElementById('btn-randomize-theme');
    btnRandThemeEl?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('click');
      
      // Visual feedback spin animation
      const iconSvg = btnRandThemeEl.querySelector('svg');
      if (iconSvg) {
        iconSvg.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        iconSvg.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          iconSvg.style.transition = 'none';
          iconSvg.style.transform = 'none';
        }, 450);
      }

      const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        // Rotate/shuffle the wallpaper swatches order so a new wallpaper-extracted color becomes the primary anchor & header
        const swatches = [...this.wallpaperSwatches];
        // Fisher-Yates shuffle
        for (let i = swatches.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [swatches[i], swatches[j]] = [swatches[j], swatches[i]];
        }
        this.wallpaperSwatches = swatches;
        this.wallpaperPrimary = swatches[0];
        this.wallpaperSecondary = swatches[1] || swatches[0];
        this.wallpaperTertiary = swatches[2] || swatches[1] || swatches[0];

        // Recalculate companion header color
        const [pr, pg, pb] = hexToRgb(swatches[0]);
        let [ph, ps, pl] = rgbToHsl(pr, pg, pb);
        const isDark = (this.currentMode === 'dark');
        const headerL = isDark ? Math.max(0.18, Math.min(0.38, pl * 0.70)) : Math.min(0.42, Math.max(0.24, pl * 0.82));
        this.wallpaperHeader = rgbToHex(...hslToRgb(ph, Math.min(1, ps * 1.15), headerL));

        if (this.activePresetKey && this.presets?.[this.activePresetKey]) {
          Object.assign(this.presets[this.activePresetKey], {
            wallpaperSwatches: swatches,
            wallpaperPrimary: swatches[0],
            wallpaperSecondary: this.wallpaperSecondary,
            wallpaperTertiary: this.wallpaperTertiary,
            wallpaperHeader: this.wallpaperHeader,
          });
        }

        // Reassign course card colors based on new wallpaper palette order
        const uniqueCodes = [...new Set(this.classes.map(c => c.code))];
        const codeMap = {};
        uniqueCodes.forEach((code, idx) => {
          codeMap[code] = swatches[idx % swatches.length];
        });
        this.classes.forEach(c => {
          c.customColor = codeMap[c.code] || swatches[0];
          c.color = codeMap[c.code] || swatches[0];
          c.isManualCustomColor = true;
        });

        // Update swatch picker dots in UI
        document.querySelectorAll('.swatch-grid .swatch-dot').forEach((dot, idx) => {
          if (swatches[idx]) {
            dot.setAttribute('data-color', swatches[idx]);
            dot.style.backgroundColor = swatches[idx];
          }
        });

        this.applyThemeEngine();
        this.renderAll();
        this._stagePending(true);
        if (typeof showToast === 'function') {
          showToast('Wallpaper palette shuffled!', 'info');
        }
        return;
      }

      const resolvedMode = (this.currentMode === 'dark' || (this.currentMode === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';
      const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
      const paletteKeys = Object.keys(paletteGroup);
      const available = paletteKeys.filter(k => k !== this.currentPalette);
      const randomPalette = available[Math.floor(Math.random() * available.length)] || paletteKeys[0];
      if (randomPalette) {
        this.setPalette(randomPalette, true);
        if (typeof showToast === 'function') {
          const formattedName = randomPalette.charAt(0).toUpperCase() + randomPalette.slice(1);
          showToast(`Theme: ${formattedName}`, 'info');
        }
      }
    });

    // Randomize Course Card Colors Button (Bottom Pill Bar)
    const btnRandCourseEl = document.getElementById('btn-randomize-course-colors');
    btnRandCourseEl?.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.play('click');
      
      const iconSvg = btnRandCourseEl.querySelector('svg');
      if (iconSvg) {
        iconSvg.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        iconSvg.style.transform = 'rotate(180deg) scale(1.15)';
        setTimeout(() => {
          iconSvg.style.transition = 'none';
          iconSvg.style.transform = 'none';
        }, 450);
      }

      const hasPhotoWallpaper = this.phoneCanvas?.classList.contains('has-photo-wallpaper') || !!this.currentWallpaperData || !!localStorage.getItem('schedully_wallpaper_data');
      
      let paletteColors;
      if (hasPhotoWallpaper && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
        // Strictly shuffle colors extracted from the wallpaper!
        paletteColors = [...this.wallpaperSwatches];
      } else {
        paletteColors = [
          '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8',
          '#D97706', '#F59E0B', '#FBBF24', '#B45309', '#7C3AED',
          '#A855F7', '#C084FC', '#DB2777', '#EC4899', '#F472B6',
          '#0284C7', '#38BDF8', '#10B981', '#34D399', '#059669',
          '#6D597A', '#B596C1', '#C2A878', '#E34F26', '#006D77'
        ];
      }

      // Shuffle assignment per unique course code
      const shuffled = [...paletteColors].sort(() => Math.random() - 0.5);
      const codeColorMap = {};
      const uniqueCodes = [...new Set(this.classes.map(c => c.code))];
      uniqueCodes.forEach((code, idx) => {
        codeColorMap[code] = shuffled[idx % shuffled.length];
      });

      this.classes.forEach(c => {
        c.customColor = codeColorMap[c.code];
        c.color = codeColorMap[c.code];
        c.isManualCustomColor = true;
      });

      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      this.renderAll();
      this._stagePending(true);
      if (typeof showToast === 'function') {
        showToast('Course colors shuffled!', 'info');
      }
    });

    // Expandable Canvas Controls Popover Toggle
    const btnTogglePopover = document.getElementById('btn-toggle-canvas-popover');
    const canvasPopover = document.getElementById('canvas-controls-popover');
    const canvasRatioPopover = document.getElementById('canvas-ratio-popover');

    if (btnTogglePopover && canvasPopover) {
      btnTogglePopover.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = canvasPopover.classList.toggle('hidden');
        document.body.classList.toggle('has-collapsed-controls', isHidden);
        if (isHidden) {
          if (canvasRatioPopover) canvasRatioPopover.classList.add('hidden');
          if (floatingTitleCard) floatingTitleCard.classList.add('hidden');
        } else {
          // Close right side popovers to prevent overlapping on iPad Mini / small tablet
          document.getElementById('schedule-quick-settings')?.classList.add('hidden');
          document.getElementById('floating-add-course-card')?.classList.add('hidden');
          document.getElementById('floating-font-style-card')?.classList.add('hidden');
          document.getElementById('floating-days-time-card')?.classList.add('hidden');

          // Auto-expand title / trademark card directly above when controls popover opens
          if (floatingTitleCard) {
            floatingTitleCard.classList.remove('hidden');
            if (typeof this.syncFloatingEditorUI === 'function') {
              this.syncFloatingEditorUI();
            }
          }
          setTimeout(window.syncGlassSliders, 20);
          setTimeout(window.syncGlassSliders, 120);
          setTimeout(window.syncGlassSliders, 360); // after popoverSpring animation (300ms) fully settles
        }
      });

      // Keep popover open while customizing themes/sidebars/controls.
      // Do NOT close when clicking sidebars, theme pickers, theme mode toggles, or bottom toolbar!
      document.addEventListener('click', (e) => {
        if (window.isTourActive) return;
        const isClickInsidePopover = canvasPopover.contains(e.target) || (canvasRatioPopover && canvasRatioPopover.contains(e.target)) || (floatingTitleCard && floatingTitleCard.contains(e.target));
        const isClickOnToggle = btnTogglePopover.contains(e.target);
        const isClickOnThemeOrSidebar = e.target.closest('#left-sidebar, #right-sidebar, #bottom-floating-pill-bar, #interactive-tour-overlay, #tour-popover-card, .palette-dot, .theme-mode-dot, .color-swatch-btn, .swatch-dot, #controls-title-wrapper, #lock-grid-title');

        if (!canvasPopover.classList.contains('hidden') && !isClickInsidePopover && !isClickOnToggle && !isClickOnThemeOrSidebar) {
          canvasPopover.classList.add('hidden');
          document.body.classList.add('has-collapsed-controls');
          if (canvasRatioPopover) canvasRatioPopover.classList.add('hidden');
          if (floatingTitleCard) floatingTitleCard.classList.add('hidden');
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

      const floatingImportWrapper = document.getElementById('floating-import-wrapper');
      const importMenuPopover = document.getElementById('import-menu-popover');

      if (isMobile()) {
        // MOBILE / TABLET: If EITHER sidebar is open, hide ALL floating top buttons
        if (!leftCollapsed || !rightCollapsed) {
          hideFloatingBtn(btnExpandLeftFloating);
          hideFloatingBtn(floatingImportWrapper);
          hideFloatingBtn(btnExpandRightFloating);
          if (importMenuPopover) importMenuPopover.classList.add('hidden');
          if (mobileExportBar && !window.isTourActive) mobileExportBar.style.display = 'none';
          if (mobileDropdown && !window.isTourActive) mobileDropdown.classList.add('hidden');
          if (mobileChevron && !window.isTourActive) mobileChevron.classList.remove('mobile-export-chevron-open');
        } else {
          // Both sidebars closed: show all floating top buttons
          showFloatingBtn(btnExpandLeftFloating);
          showFloatingBtn(floatingImportWrapper);
          showFloatingBtn(btnExpandRightFloating);
          if (mobileExportBar) mobileExportBar.style.display = 'flex';
        }
      } else {
        // DESKTOP: Show floating Menu/Import/Schedule buttons whenever respective sidebar is collapsed
        if (leftCollapsed) {
          showFloatingBtn(btnExpandLeftFloating);
          showFloatingBtn(floatingImportWrapper);
        } else {
          hideFloatingBtn(btnExpandLeftFloating);
          hideFloatingBtn(floatingImportWrapper);
          if (importMenuPopover) importMenuPopover.classList.add('hidden');
        }

        if (rightCollapsed) {
          showFloatingBtn(btnExpandRightFloating);
        } else {
          hideFloatingBtn(btnExpandRightFloating);
        }

        if (mobileExportBar) mobileExportBar.style.display = '';
      }

      // Sync Mobile PiP on smartphone screens (<= 640px) - Only appear for Right Sidebar (Schedule)
      if (typeof this.syncMobilePipVisibility === 'function') {
        this.syncMobilePipVisibility(!rightCollapsed);
      }
    };

    const toggleLeftSidebar = (collapse) => {
      const isCurrentlyCollapsed = leftSidebar.classList.contains('sidebar-collapsed-left') || !leftSidebar.classList.contains('sidebar-open-left');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        leftSidebar.classList.add('sidebar-collapsed-left');
        leftSidebar.classList.remove('sidebar-open-left', 'sidebar-expanded');
      } else {
        leftSidebar.classList.remove('sidebar-collapsed-left');
        leftSidebar.classList.add('sidebar-open-left', 'sidebar-expanded');
        if (isMobile()) {
          rightSidebar.classList.add('sidebar-collapsed-right');
          rightSidebar.classList.remove('sidebar-open-right', 'sidebar-expanded');
        }
      }
      syncFloatingButtonsState();
    };
    this.toggleLeftSidebar = toggleLeftSidebar;
    window.toggleLeftSidebar = toggleLeftSidebar;

    const toggleRightSidebar = (collapse) => {
      const isCurrentlyCollapsed = rightSidebar.classList.contains('sidebar-collapsed-right') || !rightSidebar.classList.contains('sidebar-open-right');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        rightSidebar.classList.add('sidebar-collapsed-right');
        rightSidebar.classList.remove('sidebar-open-right', 'sidebar-expanded');
      } else {
        rightSidebar.classList.remove('sidebar-collapsed-right');
        rightSidebar.classList.add('sidebar-open-right', 'sidebar-expanded');
        if (isMobile()) {
          leftSidebar.classList.add('sidebar-collapsed-left');
          leftSidebar.classList.remove('sidebar-open-left', 'sidebar-expanded');
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
    document.getElementById('floating-courses-count-circle')?.addEventListener('click', () => toggleRightSidebar(false));

    // Floating Import Button & Popover Setup
    const btnFloatingImport = document.getElementById('btn-floating-import');
    const importMenuPopover = document.getElementById('import-menu-popover');
    const btnQuickImportTimetable = document.getElementById('btn-quick-import-timetable');
    const btnQuickImportWallpaper = document.getElementById('btn-quick-import-wallpaper');
    const btnQuickImportFont = document.getElementById('btn-quick-import-font');
    const universalFileInput = document.getElementById('universal-file-input');
    const wallpaperImageInput = document.getElementById('wallpaper-image-input');
    const customFontUploadInput = document.getElementById('custom-font-upload');

    if (btnFloatingImport && importMenuPopover) {
      btnFloatingImport.addEventListener('click', (e) => {
        e.stopPropagation();
        importMenuPopover.classList.toggle('hidden');
        if (window.soundFX) window.soundFX.play('tap');
      });

      // Close popover when tapping outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#floating-import-wrapper') && !importMenuPopover.classList.contains('hidden')) {
          importMenuPopover.classList.add('hidden');
        }
      });

      // Quick Import Timetable Action
      btnQuickImportTimetable?.addEventListener('click', (e) => {
        e.stopPropagation();
        importMenuPopover.classList.add('hidden');
        if (window.soundFX) window.soundFX.play('tap');
        const universalInput = document.getElementById('universal-file-input');
        if (universalInput) {
          universalInput.value = '';
          universalInput.click();
        }
      });

      // Quick Import Wallpaper Action
      btnQuickImportWallpaper?.addEventListener('click', (e) => {
        e.stopPropagation();
        importMenuPopover.classList.add('hidden');
        if (window.soundFX) window.soundFX.play('tap');
        const wpInput = document.getElementById('wallpaper-image-input');
        if (wpInput) {
          wpInput.value = '';
          wpInput.click();
        }
      });

      // Quick Remove Wallpaper Action (Red X badge on wallpaper circle)
      const btnQuickRemoveWallpaper = document.getElementById('btn-quick-remove-wallpaper');
      btnQuickRemoveWallpaper?.addEventListener('click', (e) => {
        e.stopPropagation();
        importMenuPopover.classList.add('hidden');
        this.removeWallpaper();
        if (window.soundFX) window.soundFX.play('trash');
        if (window.haptics) window.haptics.trigger('medium');
      });

      // Quick Import Font Action (.ttf, .otf, .woff, .woff2)
      btnQuickImportFont?.addEventListener('click', (e) => {
        e.stopPropagation();
        importMenuPopover.classList.add('hidden');
        if (window.soundFX) window.soundFX.play('tap');
        const fontInput = document.getElementById('custom-font-upload') || document.getElementById('floating-custom-font-upload');
        if (fontInput) {
          fontInput.value = '';
          fontInput.click();
        }
      });
    }

    // Support / Coffee Modal Handlers
    const btnAboutCoffee = document.getElementById('btn-about-coffee');
    const coffeeModal = document.getElementById('coffee-modal');
    const btnCloseCoffeeModal = document.getElementById('btn-close-coffee-modal');
    const btnTabBmc = document.getElementById('btn-tab-bmc');
    const btnTabTng = document.getElementById('btn-tab-tng');
    const tabBmc = document.getElementById('support-tab-bmc');
    const tabTng = document.getElementById('support-tab-tng');

    if (btnAboutCoffee && coffeeModal) {
      btnAboutCoffee.addEventListener('click', () => {
        coffeeModal.classList.remove('hidden');
        if (window.soundFX) window.soundFX.play('tap');
      });
    }
    if (btnCloseCoffeeModal && coffeeModal) {
      btnCloseCoffeeModal.addEventListener('click', () => {
        coffeeModal.classList.add('hidden');
      });
    }
    if (coffeeModal) {
      coffeeModal.addEventListener('click', (e) => {
        if (e.target === coffeeModal) {
          coffeeModal.classList.add('hidden');
        }
      });
    }
    if (btnTabBmc && btnTabTng && tabBmc && tabTng) {
      btnTabBmc.addEventListener('click', () => {
        btnTabBmc.classList.add('active');
        btnTabTng.classList.remove('active');
        tabBmc.classList.remove('hidden');
        tabTng.classList.add('hidden');
        if (window.soundFX) window.soundFX.play('tap');
      });
      btnTabTng.addEventListener('click', () => {
        btnTabTng.classList.add('active');
        btnTabBmc.classList.remove('active');
        tabTng.classList.remove('hidden');
        tabBmc.classList.add('hidden');
        if (window.soundFX) window.soundFX.play('tap');
      });
    }

    // Initial sidebar state on web app load:
    // Mobile, Tablet, & Desktop: BOTH Menu and Schedule start COLLAPSED by default for a clean workspace
    leftSidebar?.classList.add('sidebar-collapsed-left');
    leftSidebar?.classList.remove('sidebar-open-left', 'sidebar-expanded');
    rightSidebar?.classList.add('sidebar-collapsed-right');
    rightSidebar?.classList.remove('sidebar-open-right', 'sidebar-expanded');
    syncFloatingButtonsState();

    // Re-check on window resize
    window.addEventListener('resize', () => {
      syncFloatingButtonsState();
    });

    // Close open floating sidebars on mobile/tablet when user taps workspace canvas
    document.querySelector('main')?.addEventListener('click', (e) => {
      if (isMobile()) {
        const clickedFloating = e.target.closest('#btn-expand-left-floating, #btn-expand-right-floating, #floating-import-wrapper');
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
    this.addCourseForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      const code = this.inputCourseCode ? this.inputCourseCode.value.trim().toUpperCase() : '';
      if (!code) return;

      let startTime = this.inputStartTime ? this.inputStartTime.value : '09:00';
      let endTime = this.inputEndTime ? this.inputEndTime.value : '10:30';
      let periodNumber = undefined;

      if (this.axisMode === 'period' && this.inputPeriodSelect) {
        const selOption = this.inputPeriodSelect.selectedOptions[0];
        periodNumber = selOption ? parseInt(selOption.value, 10) : 1;
        startTime = selOption ? (selOption.getAttribute('data-start') || '09:00') : '09:00';
        endTime = selOption ? (selOption.getAttribute('data-end') || '10:30') : '10:30';
      }

      const courseType = this.inputType ? this.inputType.value.trim() : '';
      const location = this.inputLocation ? this.inputLocation.value.trim() : '';
      const lecturer = this.inputLecturer ? this.inputLecturer.value.trim() : '';
      const group = this.inputGroup ? this.inputGroup.value.trim() : '';

      const checkedDays = Array.from(document.querySelectorAll('input[name="day"]:checked')).map(cb => cb.value);
      const daysToCreate = checkedDays.length > 0 ? checkedDays : ['Mon'];

      this.recordHistoryState();

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

      if (this.inputCourseCode) this.inputCourseCode.value = '';
      if (this.inputType) this.inputType.value = '';
      if (this.inputLocation) this.inputLocation.value = '';
      if (this.inputGroup) this.inputGroup.value = '';

      this.updateHistoryButtonUI();
      this.renderAll();
    });

    // Universal Schedule Importer (Auto-detects CSV, ICS, or Screenshot AI)
    if (this.universalFileInput) {
      this.universalFileInput.addEventListener('change', async (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const fileName = file.name.toLowerCase();
          const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp)$/i.test(fileName);

          this.setUploadBusy(true);

          if (isImage) {
            // Run AI Screenshot Scanner
            const scanErrorAlert = document.getElementById('scan-error-alert');
            if (scanErrorAlert) scanErrorAlert.classList.add('hidden');

            if (this.aiScanOverlay) this.aiScanOverlay.classList.add('active');
            if (this.ocrLoadingBar) this.ocrLoadingBar.classList.remove('hidden');
            if (this.ocrParsingToast) {
              this.ocrParsingToast.classList.remove('hidden');
              if (this.ocrParsingToastText) this.ocrParsingToastText.innerText = "Reading timetable image...";
            }
            let extracted = [];
            try {
              const provider = 'gemini';
              const apiKey = (
                document.getElementById('input-gemini-api-key')?.value ||
                document.getElementById('fb-api-key')?.value ||
                localStorage.getItem('schedully_custom_gemini_key') ||
                ''
              ).trim();
              
              const scanResult = await window.ocrParser.scanWithCloudAPI(file, provider, apiKey, (msg) => {
                if (this.ocrLoadingText) this.ocrLoadingText.innerText = msg;
                if (this.ocrParsingToastText) this.ocrParsingToastText.innerText = msg;
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
                  if (scanErrorTitle) scanErrorTitle.innerText = "Import Failed: Image Unreadable";
                  if (scanErrorDesc) scanErrorDesc.innerText = "Could not recognize timetable text in this image. Please ensure the image is clear.";
                }
                return;
              }

              const isPeriodBased = (scanResult && scanResult.isPeriodBased !== undefined) ? Boolean(scanResult.isPeriodBased) : extracted.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== '');
              const gridBounds = { gridStartHour: scanResult?.gridStartHour, gridEndHour: scanResult?.gridEndHour };
              if (hasNonEnglish || isPeriodBased || (detectedLang && detectedLang.toLowerCase() !== 'english')) {
                this.showOcrLanguageModal(extracted, detectedLang, isPeriodBased, hasNonEnglish, gridBounds);
              } else {
                const fullDetailCourses = extracted.map(c => {
                  const rawCode = (c.code || c.title || '').trim();
                  const hasGenuineCode = /^[A-Z]{2,5}\s*\d{2,4}[A-Z]?$/i.test(rawCode);
                  return {
                    ...c,
                    title: c.title || rawCode,
                    code: hasGenuineCode ? rawCode : (c.title || rawCode)
                  };
                });
                this.importClassesDirectly(fullDetailCourses, gridBounds);
              }
            } catch (err) {
              console.error("Scanner Error (Internal):", err);
              const scanErrorAlert = document.getElementById('scan-error-alert');
              const scanErrorTitle = document.getElementById('scan-error-title');
              const scanErrorDesc = document.getElementById('scan-error-desc');
              if (scanErrorAlert) {
                scanErrorAlert.classList.remove('hidden');
                if (scanErrorTitle) scanErrorTitle.innerText = "Import Temporarily Unavailable";
                
                const rawMsg = (err && err.message) ? err.message : '';
                // Friendly, clean messaging without AI buzzwords
                if (rawMsg.includes('429') || rawMsg.toLowerCase().includes('quota') || rawMsg.toLowerCase().includes('rate limit')) {
                  if (scanErrorDesc) scanErrorDesc.innerText = "High server traffic right now. Please wait a moment and try again.";
                } else if (rawMsg.toLowerCase().includes('clear') || rawMsg.toLowerCase().includes('unreadable')) {
                  if (scanErrorDesc) scanErrorDesc.innerText = "Could not detect timetable text. Please ensure the image is clear and well-lit.";
                } else {
                  if (scanErrorDesc) scanErrorDesc.innerText = "Schedule reader is undergoing quick maintenance. Please try again shortly.";
                }
              }
            } finally {
              if (this.aiScanOverlay) this.aiScanOverlay.classList.remove('active');
              if (this.ocrLoadingBar) this.ocrLoadingBar.classList.add('hidden');
              if (this.ocrParsingToast) this.ocrParsingToast.classList.add('hidden');
              this.setUploadBusy(false);
              e.target.value = '';
            }
          } else {
            // Run CSV or ICS File Parser
            if (!window.ScheduleParser) {
              alert("Schedule parser module is loading. Please select your file again.");
              this.setUploadBusy(false);
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
              } finally {
                this.setUploadBusy(false);
              }
            };
            reader.onerror = () => {
              this.setUploadBusy(false);
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
          this.importClassesDirectly(this.pendingOcrResult.courses, this.pendingOcrResult.gridBounds);
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
        this.btnOcrKeepOriginal.classList.add('active');
        if (this.btnOcrTranslateEnglish) {
          this.btnOcrTranslateEnglish.classList.remove('active');
        }
      });
    }

    if (this.btnOcrTranslateEnglish) {
      this.btnOcrTranslateEnglish.addEventListener('click', () => {
        if (this.btnOcrTranslateEnglish.classList.contains('disabled') || this.btnOcrTranslateEnglish.disabled) {
          return;
        }
        this.selectedOcrLangChoice = 'translated';
        this.btnOcrTranslateEnglish.classList.add('active');
        if (this.btnOcrKeepOriginal) {
          this.btnOcrKeepOriginal.classList.remove('active');
        }
      });
    }

    // 2. Schedule Axis Mode Buttons (Period / Clock)
    const axisButtons = [this.btnAxisPeriod, this.btnAxisTime].filter(Boolean);
    const presetContainer = document.getElementById('ocr-period-preset-container');

    const updatePresetVisibility = (mode) => {
      if (presetContainer) {
        // Show presets when Clock mode is active so user can pick what clock times the periods (1, 2, 3...) should map to
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
          const isPeriodBased = Boolean(this.pendingOcrResult.isPeriodBased);
          const scheduleMap = PERIOD_SCHEDULES[this.selectedOcrPeriodPreset] || PERIOD_SCHEDULES['90m-900'];
          const courses = this.pendingOcrResult.courses.map(c => {
            const isTranslated = (this.selectedOcrLangChoice === 'translated');
            const mappedTitle = isTranslated ? (c.translatedTitle || c.title) : (c.originalTitle || c.title);
            let rawCode = isTranslated ? (c.translatedCode || c.code || mappedTitle) : (c.originalCode || c.code || mappedTitle);
            
            // If code is an invented shortform (e.g. MSLC, PE2, EDUSYSTEMS) and mappedTitle has full description,
            // or if code is just an abbreviation without a genuine course number, ensure card displays full details
            const hasGenuineCode = /^[A-Z]{2,5}\s*\d{2,4}[A-Z]?$/i.test((rawCode || '').trim());
            const mappedCode = hasGenuineCode ? rawCode : (mappedTitle || rawCode);
            
            let sTime = c.startTime;
            let eTime = c.endTime;

            // Only apply PERIOD_SCHEDULES mapping if the schedule was detected as period-based OR user explicitly chose period axis
            if (isPeriodBased && c.periodNumber && scheduleMap[c.periodNumber]) {
              sTime = scheduleMap[c.periodNumber].start;
              eTime = scheduleMap[c.periodNumber].end;
            }

            return {
              ...c,
              title: mappedTitle,
              code: mappedCode,
              startTime: sTime || c.startTime || '08:00',
              endTime: eTime || c.endTime || '09:00'
            };
          });

          this.axisMode = this.selectedOcrAxisMode || (isPeriodBased ? 'period' : 'time');
          this.importClassesDirectly(courses, this.pendingOcrResult.gridBounds);
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
          this.setUploadBusy(true);
          if (this.ocrLoadingBar) this.ocrLoadingBar.classList.remove('hidden');
          if (this.ocrLoadingText) this.ocrLoadingText.innerText = "Reading timetable image...";
          if (this.ocrParsingToast) {
            this.ocrParsingToast.classList.remove('hidden');
            if (this.ocrParsingToastText) this.ocrParsingToastText.innerText = "Reading timetable image...";
          }
          try {
            const scanResult = await window.ocrParser.scanWithCloudAPI(fileToScan, 'gemini', rawKey, (msg) => {
              if (this.ocrLoadingText) this.ocrLoadingText.innerText = msg;
              if (this.ocrParsingToastText) this.ocrParsingToastText.innerText = msg;
            });
            const extracted = Array.isArray(scanResult) ? scanResult : (scanResult.courses || []);
            const detectedLang = scanResult.detectedLanguage || 'English';
            const hasNonEnglish = (scanResult && scanResult.hasNonEnglishText !== undefined) ? scanResult.hasNonEnglishText : (detectedLang.toLowerCase() !== 'english');
            const isPeriodBased = (scanResult && scanResult.isPeriodBased !== undefined) ? Boolean(scanResult.isPeriodBased) : extracted.some(c => c.periodNumber !== undefined && c.periodNumber !== null && c.periodNumber !== '');
            const gridBounds = { gridStartHour: scanResult?.gridStartHour, gridEndHour: scanResult?.gridEndHour };
            if (extracted && extracted.length > 0) {
              if (hasNonEnglish || isPeriodBased || (detectedLang && detectedLang.toLowerCase() !== 'english')) {
                this.showOcrLanguageModal(extracted, detectedLang, isPeriodBased, hasNonEnglish, gridBounds);
              } else {
                this.importClassesDirectly(extracted, gridBounds);
              }
            }
          } catch (err) {
            console.error("Scan error after key save:", err);
          } finally {
            if (this.ocrLoadingBar) this.ocrLoadingBar.classList.add('hidden');
            if (this.ocrParsingToast) this.ocrParsingToast.classList.add('hidden');
            this.setUploadBusy(false);
          }
        }
      });
    }

    if (this.btnClearAll) {
      this.btnClearAll.addEventListener('click', async (e) => {
         try {
           if (!this.classes || this.classes.length === 0) {
             return;
           }

           const confirmed = window.confirm("Are you sure you want to clear all courses from your schedule?");
           if (!confirmed) {
             return;
           }

           this.recordHistoryState();
           const originalHtml = e.currentTarget.innerHTML;
           e.currentTarget.innerHTML = `<svg class="w-3.5 h-3.5 animate-spin text-emerald-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
           
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
            if (this.settingsCoursesBadge) this.settingsCoursesBadge.innerText = '0';
            if (this.clashAlert) this.clashAlert.classList.add('hidden');
           
           // Update undo/redo button states & render to reset empty states
           this.updateHistoryButtonUI();
           this.renderAll();
           
           // Revert button visually
           setTimeout(() => {
             if (this.btnClearAll) {
               this.btnClearAll.innerHTML = originalHtml;
             }
           }, 400);
         } catch (err) {
           alert("Error clearing classes: " + err.message);
         }
      });
    }

    // Auto-Resolve Clash Button
    this.btnAutoResolve?.addEventListener('click', () => {
      const clashes = window.timetableEngine?.detectClashes ? window.timetableEngine.detectClashes(this.classes) : [];
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
        if (this.clashAlert) this.clashAlert.classList.add('hidden');
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
      const dimVal = `${(this.wallpaperDimIntensity || 0) / 100}`;
      clone.style.setProperty('--wallpaper-blur-val', blurVal, 'important');
      clone.style.setProperty('--wallpaper-dim-val', dimVal, 'important');

      // Explicitly enforce Background Blur & Dimming variable & Zero Border Radius on clone wallpaper layer
      const wallpaperLayer = clone.querySelector('.phone-wallpaper-layer');
      if (wallpaperLayer) {
        wallpaperLayer.style.setProperty('border-radius', '0px', 'important');
        wallpaperLayer.style.setProperty('--wallpaper-blur-val', blurVal, 'important');
        wallpaperLayer.style.setProperty('--wallpaper-dim-val', dimVal, 'important');
        wallpaperLayer.style.setProperty('filter', 'none', 'important');
      }

      // Explicitly prevent any backdrop-filter blur and faithfully preserve live user layout adjustments
      const timetableContainer = clone.querySelector('#lock-timetable-container');
      if (timetableContainer) {
        timetableContainer.style.setProperty('backdrop-filter', 'none', 'important');
        timetableContainer.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
        timetableContainer.style.setProperty('width', `${this.gridWidthVal || 100}%`, 'important');
        timetableContainer.style.setProperty('max-width', 'none', 'important');
        timetableContainer.style.setProperty('margin-left', `${this.gridXPosVal || 0}px`, 'important');
        timetableContainer.style.setProperty('margin-top', `${this.gridYPosVal || 0}px`, 'important');
        timetableContainer.style.setProperty('transform', 'none', 'important');
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
      if (!e.target.closest('#mobile-export-bar, #right-action-container, #mobile-export-dropdown, #btn-mobile-export-toggle, #interactive-tour-overlay, #tour-popover-card')) {
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

  setUploadBusy(busy) {
    if (this.universalFileInput) {
      this.universalFileInput.disabled = busy;
    }
    const dropzone = document.querySelector('.m3-dropzone');
    if (dropzone) {
      if (busy) {
        dropzone.classList.add('is-busy');
        dropzone.setAttribute('aria-disabled', 'true');
      } else {
        dropzone.classList.remove('is-busy');
        dropzone.removeAttribute('aria-disabled');
      }
    }
    const menuPill = document.getElementById('menu-file-import');
    if (menuPill) {
      if (busy) {
        menuPill.classList.add('is-busy');
        menuPill.setAttribute('aria-disabled', 'true');
      } else {
        menuPill.classList.remove('is-busy');
        menuPill.removeAttribute('aria-disabled');
      }
    }
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
        this.tableCornerRadiusVal = Number(settings.tableCornerRadiusVal);
        const tableRadiusValEl = document.getElementById('table-radius-val');
        if (tableRadiusValEl) tableRadiusValEl.value = this.tableCornerRadiusVal;
      } else if (settings.cardCornerRadiusVal !== undefined) {
        this.tableCornerRadiusVal = Number(settings.cardCornerRadiusVal);
        const tableRadiusValEl = document.getElementById('table-radius-val');
        if (tableRadiusValEl) tableRadiusValEl.value = this.tableCornerRadiusVal;
      }
      if (settings.cardCornerRadiusVal !== undefined) {
        this.cardCornerRadiusVal = Number(settings.cardCornerRadiusVal);
        const cardRadiusValEl = document.getElementById('card-radius-val');
        if (cardRadiusValEl) cardRadiusValEl.value = this.cardCornerRadiusVal;
      }

      // 2. Mode & Palette
      if (settings.currentPalette) {
        this.currentPalette = settings.currentPalette;
        try { localStorage.setItem('schedully_theme_palette', this.currentPalette); } catch (e) {}
        document.querySelectorAll('.palette-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-palette') === this.currentPalette);
        });
      }
      if (settings.currentMode) {
        this.currentMode = settings.currentMode;
        try { localStorage.setItem('schedully_theme_mode', this.currentMode); } catch (e) {}
        document.querySelectorAll('.theme-mode-dot').forEach(d => {
          d.classList.toggle('active', d.getAttribute('data-mode') === this.currentMode);
        });
      }
      this.applyThemeEngine();

      // 2b. Custom Colors (Surface, Background, Header, Trademark, Font)
      if (settings.userHasPickedSurfaceColor && settings.customSurfaceColor) {
        this.userHasPickedSurfaceColor = true;
        this.customSurfaceColor = settings.customSurfaceColor;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', this.customSurfaceColor);
      } else if (settings.userHasPickedSurfaceColor === false) {
        this.userHasPickedSurfaceColor = false;
        this.customSurfaceColor = null;
        document.documentElement.style.removeProperty('--m3-grid-surface-bg');
      }

      if (settings.userHasPickedBgColor && settings.customBgColor) {
        this.userHasPickedBgColor = true;
        this.customBgColor = settings.customBgColor;
        if (this.phoneCanvas) this.phoneCanvas.style.backgroundColor = this.customBgColor;
        this.updateClockContrast(this.customBgColor);
      } else if (settings.userHasPickedBgColor === false) {
        this.userHasPickedBgColor = false;
        this.customBgColor = null;
        if (this.phoneCanvas) this.phoneCanvas.style.backgroundColor = '';
        this.updateClockContrast();
      }

      if (settings.userHasPickedHeaderColor && settings.customHeaderColor) {
        this.userHasPickedHeaderColor = true;
        this.customHeaderColor = settings.customHeaderColor;
        this.applyHeaderColor(this.customHeaderColor, true);
      } else if (settings.userHasPickedHeaderColor === false) {
        this.userHasPickedHeaderColor = false;
        this.customHeaderColor = null;
        this.applyHeaderColor('', true);
      }

      if (settings.userHasPickedTrademarkColor && settings.customTrademarkColor) {
        this.userHasPickedTrademarkColor = true;
        this.customTrademarkColor = settings.customTrademarkColor;
        this.applyTrademarkColor(this.customTrademarkColor, true);
      } else if (settings.userHasPickedTrademarkColor === false) {
        this.userHasPickedTrademarkColor = false;
        this.customTrademarkColor = null;
        this.applyTrademarkColor('', true);
      }

      if (settings.userHasPickedFontColor && settings.customFontColor) {
        this.userHasPickedFontColor = true;
        this.customFontColor = settings.customFontColor;
        this.applyFontColor(this.customFontColor, true);
      } else if (settings.userHasPickedFontColor === false) {
        this.userHasPickedFontColor = false;
        this.customFontColor = null;
        this.applyFontColor('', true);
      }

      if (typeof this.syncCustomColorPickersUI === 'function') {
        this.syncCustomColorPickersUI();
      }

      // 3. Grid Dimensions & Position
      if (settings.gridWidthVal !== undefined) {
        this.gridWidthVal = Number(settings.gridWidthVal);
        const gwEl = document.getElementById('grid-width-val');
        if (gwEl) gwEl.value = this.gridWidthVal;
      }
      if (settings.gridHeightVal !== undefined) {
        this.gridHeightVal = Number(settings.gridHeightVal);
        const ghEl = document.getElementById('grid-height-val');
        if (ghEl) ghEl.value = this.gridHeightVal;
      }
      if (settings.gridYPosVal !== undefined) {
        this.gridYPosVal = Number(settings.gridYPosVal);
        const gyEl = document.getElementById('grid-ypos-val');
        if (gyEl) gyEl.value = this.gridYPosVal;
      }
      if (settings.fontSizeVal !== undefined) {
        this.fontSizeVal = Number(settings.fontSizeVal);
        this.gridFontSizeVal = Number(settings.fontSizeVal);
        const fsEl = document.getElementById('grid-fontsize-val');
        if (fsEl) fsEl.value = this.fontSizeVal;
      }

      // 4. Clock Format
      if (settings.clockFormat) {
        this.clockFormat = settings.clockFormat;
        document.querySelectorAll('#toggle-clock-type .pill-btn, #toggle-floating-clock-type .pill-btn').forEach(b => {
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

      // 5b. Wallpaper Dimming
      if (settings.wallpaperDimIntensity !== undefined && this.setWallpaperDimming) {
        this.setWallpaperDimming(Number(settings.wallpaperDimIntensity), false);
      }

      // 6. Font Family
      if (settings.fontFamily && this.applyFontFamily) {
        this.applyFontFamily(settings.fontFamily, null, true);
      }

      // 7. Timetable Opacity
      if (settings.timetableOpacity !== undefined && this.setTimetableOpacity) {
        this.setTimetableOpacity(Number(settings.timetableOpacity));
      }

      // 8. Title
      if (settings.showTitle !== undefined) {
        this.setTitleVisibility(settings.showTitle, false);
      }
      if (settings.titleText !== undefined) {
        this.updateTitleText(settings.titleText);
      }

      // 8b. Trademark
      if (settings.showTrademark !== undefined) {
        this.setTrademarkVisibility(settings.showTrademark, false);
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
      }
      if (Array.isArray(this.classes) && this.classes.length > 0) {
        this.classes.forEach(c => {
          const d = (c.day || '').substring(0, 3);
          const norm = (d.charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
          if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(norm) && !this.activeDays.includes(norm)) {
            this.activeDays.push(norm);
          }
        });
        const canonicalOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.activeDays.sort((a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b));
      }
      if (typeof this.syncDaysAndTimeControlsUI === 'function') {
        this.syncDaysAndTimeControlsUI();
      } else {
        document.querySelectorAll('.day-toggle, .floating-day-check').forEach(chk => {
          chk.checked = this.activeDays.includes(chk.value);
        });
      }

      // 10. Hours
      if (settings.gridStartHour !== undefined) {
        this.gridStartHour = Number(settings.gridStartHour);
        if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = `${String(this.gridStartHour).padStart(2, '0')}:00`;
      }
      if (settings.gridEndHour !== undefined) {
        this.gridEndHour = Number(settings.gridEndHour);
        if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = `${String(this.gridEndHour).padStart(2, '0')}:00`;
      }
      if (Array.isArray(this.classes) && this.classes.length > 0) {
        this.classes.forEach(c => {
          if (c.startTime) {
            const [sh] = String(c.startTime).split(':').map(Number);
            if (!isNaN(sh) && sh >= 0 && sh < this.gridStartHour) this.gridStartHour = sh;
          }
          if (c.endTime) {
            let [eh, em] = String(c.endTime).split(':').map(Number);
            if ((eh === 0 || eh === 24) && c.startTime) {
              const [sh] = String(c.startTime).split(':').map(Number);
              if (sh >= 12) eh = 24;
            }
            const endCeil = (em && em > 0) ? eh + 1 : eh;
            if (!isNaN(endCeil) && endCeil > this.gridEndHour) this.gridEndHour = Math.min(24, endCeil);
          }
        });
        if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = `${String(this.gridStartHour).padStart(2, '0')}:00`;
        if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = `${String(this.gridEndHour).padStart(2, '0')}:00`;
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
        this.gridPeriodCount = Number(settings.gridPeriodCount);
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
      if (settings.activeDevice) {
        this.switchDevice(settings.activeDevice, false);
      }
      if (settings.zoomScale) {
        const parsedZoom = parseFloat(settings.zoomScale);
        if (!isNaN(parsedZoom) && parsedZoom >= 0.3 && parsedZoom <= 2.0) {
          this.zoomScale = parsedZoom;
          try { localStorage.setItem('schedully_zoom_scale', String(this.zoomScale)); } catch (e) {}
          if (typeof this.applyCanvasZoom === 'function') {
            this.applyCanvasZoom(false);
          }
        }
      }
      if (settings.customHexColors && Array.isArray(settings.customHexColors)) {
        this.customHexColors = [...settings.customHexColors];
      }

      // 13. Card Format & Visibility Toggles
      if (settings.globalCardTimes !== undefined) {
        this.globalCardTimes = !!settings.globalCardTimes;
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
          const i18n = window.SchedullyI18n;
          if (this.cardTimeDisplayType === 'both') this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('startAndEnd') : 'Start & End');
          else if (this.cardTimeDisplayType === 'end') this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('endOnly') : 'End Only');
          else this.quickTimePreviewBadge.innerText = (i18n ? i18n.t('startOnly') : 'Start Only');
        }
      }
      if (settings.globalCourseType !== undefined) {
        this.globalCourseType = !!settings.globalCourseType;
        const toggleType = document.getElementById('toggle-quick-type');
        if (toggleType) {
          toggleType.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseType ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseRoom !== undefined) {
        this.globalCourseRoom = !!settings.globalCourseRoom;
        const toggleRoom = document.getElementById('toggle-quick-room');
        if (toggleRoom) {
          toggleRoom.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseRoom ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseLecturer !== undefined) {
        this.globalCourseLecturer = !!settings.globalCourseLecturer;
        const toggleLecturer = document.getElementById('toggle-quick-lecturer');
        if (toggleLecturer) {
          toggleLecturer.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseLecturer ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalCourseGroup !== undefined) {
        this.globalCourseGroup = !!settings.globalCourseGroup;
        const toggleGroup = document.getElementById('toggle-quick-group');
        if (toggleGroup) {
          toggleGroup.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalCourseGroup ? 'yes' : 'no'));
          });
        }
      }
      if (settings.globalAdaptiveColor !== undefined) {
        this.globalAdaptiveColor = !!settings.globalAdaptiveColor;
        const toggleAdaptive = document.getElementById('toggle-quick-adaptive');
        if (toggleAdaptive) {
          toggleAdaptive.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (this.globalAdaptiveColor ? 'yes' : 'no'));
          });
        }
      }

      // 13b. Font Shadows, Grid Borders, Side Sliders, Sounds & Haptics
      if (settings.fontShadow !== undefined) {
        try { localStorage.setItem('schedully_font_shadow', settings.fontShadow ? 'yes' : 'no'); } catch (e) {}
        const fontShadowToggle = document.getElementById('toggle-font-shadow');
        if (fontShadowToggle) {
          fontShadowToggle.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (settings.fontShadow ? 'yes' : 'no'));
          });
        }
        if (this.phoneCanvas) {
          this.phoneCanvas.classList.toggle('enable-text-shadow', !!settings.fontShadow);
        }
      }
      if (settings.showGridBorders !== undefined) {
        try { localStorage.setItem('schedully_show_grid_borders', settings.showGridBorders ? 'yes' : 'no'); } catch (e) {}
        const toggleBorders = document.getElementById('toggle-grid-borders');
        if (toggleBorders) {
          toggleBorders.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (settings.showGridBorders ? 'yes' : 'no'));
          });
        }
        if (this.phoneCanvas) {
          this.phoneCanvas.classList.toggle('hide-grid-borders', !settings.showGridBorders);
        }
      }
      if (settings.showSideSliders !== undefined) {
        try { localStorage.setItem('schedully_show_side_sliders', settings.showSideSliders ? 'yes' : 'no'); } catch (e) {}
        const toggleSide = document.getElementById('toggle-side-sliders');
        if (toggleSide) {
          toggleSide.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (settings.showSideSliders ? 'yes' : 'no'));
          });
        }
        const sliders = document.querySelectorAll('.canvas-side-slider-container');
        sliders.forEach(s => s.classList.toggle('hidden', !settings.showSideSliders));
      }
      if (settings.soundEnabled !== undefined) {
        try { localStorage.setItem('schedully_sound_enabled', settings.soundEnabled ? 'yes' : 'no'); } catch (e) {}
        const toggleSound = document.getElementById('toggle-sound-effects');
        if (toggleSound) {
          toggleSound.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (settings.soundEnabled ? 'yes' : 'no'));
          });
        }
      }
      if (settings.hapticsEnabled !== undefined) {
        try { localStorage.setItem('schedully_haptics_enabled', settings.hapticsEnabled ? 'yes' : 'no'); } catch (e) {}
        const toggleHaptics = document.getElementById('toggle-haptics');
        if (toggleHaptics) {
          toggleHaptics.querySelectorAll('.pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === (settings.hapticsEnabled ? 'yes' : 'no'));
          });
        }
      }
      if (settings.sliderLayout && Array.isArray(settings.sliderLayout.left) && Array.isArray(settings.sliderLayout.right)) {
        this.sliderLayout = {
          left: [...settings.sliderLayout.left],
          right: [...settings.sliderLayout.right],
          hidden: [...(settings.sliderLayout.hidden || [])]
        };
        try { localStorage.setItem('schedully_slider_layout', JSON.stringify(this.sliderLayout)); } catch (e) {}
        if (typeof this.renderCustomizedSideSliders === 'function') {
          this.renderCustomizedSideSliders();
        }
      }

      // 14. Title Placement & Geometry
      if (settings.titlePlacement) this.titlePlacement = settings.titlePlacement;
      if (settings.titleCornerRadius !== undefined) this.titleCornerRadius = Number(settings.titleCornerRadius);
      if (settings.titleGapDistance !== undefined) this.titleGapDistance = Number(settings.titleGapDistance);
      if (settings.titleWidthSize !== undefined) this.titleWidthSize = Number(settings.titleWidthSize);
      if (typeof this.applyTitleLayout === 'function') {
        this.applyTitleLayout();
      }

      // 15. Trademark Layout & Geometry
      if (settings.trademarkLayoutMode) this.trademarkLayoutMode = settings.trademarkLayoutMode;
      if (settings.trademarkCornerRadius !== undefined) this.trademarkCornerRadius = Number(settings.trademarkCornerRadius);
      if (settings.trademarkGapDistance !== undefined) this.trademarkGapDistance = Number(settings.trademarkGapDistance);
      if (settings.trademarkWidthSize !== undefined) this.trademarkWidthSize = Number(settings.trademarkWidthSize);
      if (typeof this.applyTrademarkLayout === 'function') {
        this.applyTrademarkLayout();
      }

      if (typeof this.syncDaysAndTimeControlsUI === 'function') {
        this.syncDaysAndTimeControlsUI();
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
      const active = localStorage.getItem('schedully_active_preset') || 'default';
      if (active && this.presets && this.presets[active]) {
        this.activePresetKey = active;
        this.classes = this.presets[active].classes || [];
        if (this.presets[active].settings) {
          this.applyPresetSettings(this.presets[active].settings);
        } else {
          // If no preset settings, ensure classes days are preserved in activeDays
          const normalizeDay = (d) => {
            if (!d) return 'Mon';
            const clean = String(d).trim().toLowerCase();
            const map = {
              'monday': 'Mon', 'mon': 'Mon', 'isnin': 'Mon', 'senin': 'Mon',
              'tuesday': 'Tue', 'tue': 'Tue', 'selasa': 'Tue',
              'wednesday': 'Wed', 'wed': 'Wed', 'rabu': 'Wed',
              'thursday': 'Thu', 'thu': 'Thu', 'khamis': 'Thu', 'kamis': 'Thu',
              'friday': 'Fri', 'fri': 'Fri', 'jumaat': 'Fri', 'jumat': 'Fri',
              'saturday': 'Sat', 'sat': 'Sat', 'sabtu': 'Sat',
              'sunday': 'Sun', 'sun': 'Sun', 'ahad': 'Sun', 'minggu': 'Sun'
            };
            return map[clean] || (d.substring(0, 3).charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
          };
          const canonicalOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          const classDays = (this.classes || []).map(c => normalizeDay(c.day)).filter(Boolean);
          const currentDays = (this.activeDays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']).map(normalizeDay);
          this.activeDays = [...new Set([...currentDays, ...classDays])].sort((a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b));
          this.syncDaysAndTimeControlsUI();
        }
        if (this.presets[active].wallpaperSwatches && Array.isArray(this.presets[active].wallpaperSwatches)) {
          this.wallpaperSwatches = this.presets[active].wallpaperSwatches;
        } else {
          try {
            const sw = JSON.parse(localStorage.getItem('schedully_wallpaper_swatches') || 'null');
            if (Array.isArray(sw) && sw.length > 0) this.wallpaperSwatches = sw;
          } catch (e) {}
        }
        if (this.presets[active].wallpaperPrimary || localStorage.getItem('schedully_wallpaper_primary')) {
          this.wallpaperPrimary = this.presets[active].wallpaperPrimary || localStorage.getItem('schedully_wallpaper_primary');
        }
        if (this.presets[active].wallpaperSecondary || localStorage.getItem('schedully_wallpaper_secondary')) {
          this.wallpaperSecondary = this.presets[active].wallpaperSecondary || localStorage.getItem('schedully_wallpaper_secondary');
        }
        if (this.presets[active].wallpaperTertiary || localStorage.getItem('schedully_wallpaper_tertiary')) {
          this.wallpaperTertiary = this.presets[active].wallpaperTertiary || localStorage.getItem('schedully_wallpaper_tertiary');
        }
        if (this.presets[active].wallpaperHeader || localStorage.getItem('schedully_wallpaper_header')) {
          this.wallpaperHeader = this.presets[active].wallpaperHeader || localStorage.getItem('schedully_wallpaper_header');
        }

        const activeWallpaper = this.presets[active].wallpaper || localStorage.getItem('schedully_wallpaper_data') || null;
        this.currentWallpaperData = activeWallpaper;
        if (activeWallpaper) {
          const hasExistingSwatches = !!(this.wallpaperSwatches && this.wallpaperSwatches.length > 0);
          this.applyWallpaper(activeWallpaper, !hasExistingSwatches, true);
        } else {
          this.removeWallpaper(true);
        }
      }
      const savedDevice = localStorage.getItem('schedully_active_device');
      if (savedDevice) {
        this.switchDevice(savedDevice, false);
      }
      const storedZoom = parseFloat(localStorage.getItem('schedully_zoom_scale'));
      if (!isNaN(storedZoom) && storedZoom >= 0.3 && storedZoom <= 2.0) {
        this.zoomScale = storedZoom;
        if (typeof this.applyCanvasZoom === 'function') {
          this.applyCanvasZoom(false);
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
            this.presets[this.activePresetKey].wallpaperPrimary = this.wallpaperPrimary || null;
            this.presets[this.activePresetKey].wallpaperSecondary = this.wallpaperSecondary || null;
            this.presets[this.activePresetKey].wallpaperTertiary = this.wallpaperTertiary || null;
            this.presets[this.activePresetKey].wallpaperHeader = this.wallpaperHeader || null;
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
            const hasExistingSwatches = !!(this.presets[targetKey].wallpaperSwatches && this.presets[targetKey].wallpaperSwatches.length > 0);
            this.applyWallpaper(targetWallpaper, !hasExistingSwatches, true);
            if (hasExistingSwatches) {
              this.wallpaperSwatches = this.presets[targetKey].wallpaperSwatches;
              this.wallpaperPrimary = this.presets[targetKey].wallpaperPrimary || this.wallpaperSwatches[0];
              this.wallpaperSecondary = this.presets[targetKey].wallpaperSecondary || this.wallpaperSwatches[1];
              this.wallpaperTertiary = this.presets[targetKey].wallpaperTertiary || this.wallpaperSwatches[2];
              this.wallpaperHeader = this.presets[targetKey].wallpaperHeader || null;
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
            activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
          if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);
          this.classes = [];
          this.currentWallpaperData = null;
          this.wallpaperSwatches = null;
          this.wallpaperPrimary = null;
          this.wallpaperSecondary = null;
          this.wallpaperTertiary = null;
          this.wallpaperHeader = null;
          this.customHexColors = null;
          this.historyUndoStack = [];
          this.historyRedoStack = [];
          this.updateHistoryButtonUI();
          this.removeWallpaper(true);
          if (this.phoneCanvas) {
            this.phoneCanvas.style.backgroundColor = '';
            this.phoneCanvas.className = 'm3-phone-canvas';
          }
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
            activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            gridStartHour: 8,
            gridEndHour: 20
          };
          this.applyPresetSettings(freshSettings);

          if (this.presets[this.activePresetKey]) {
            this.presets[this.activePresetKey].classes = [];
            this.presets[this.activePresetKey].wallpaper = null;
            this.presets[this.activePresetKey].wallpaperSwatches = null;
            this.presets[this.activePresetKey].wallpaperPrimary = null;
            this.presets[this.activePresetKey].wallpaperSecondary = null;
            this.presets[this.activePresetKey].wallpaperTertiary = null;
            this.presets[this.activePresetKey].wallpaperHeader = null;
            this.presets[this.activePresetKey].settings = freshSettings;
          }

          localStorage.removeItem('schedully_wallpaper_data');
          localStorage.removeItem('schedully_wallpaper_swatches');
          localStorage.removeItem('schedully_wallpaper_primary');
          localStorage.removeItem('schedully_wallpaper_secondary');
          localStorage.removeItem('schedully_wallpaper_tertiary');
          localStorage.removeItem('schedully_wallpaper_header');

          this._stagePending(true);
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
        if (Array.isArray(this.classes) && this.classes.length > 0) {
          const normalizeDay = (d) => {
            if (!d) return 'Mon';
            const clean = String(d).trim().toLowerCase();
            const map = {
              'monday': 'Mon', 'mon': 'Mon', 'isnin': 'Mon', 'senin': 'Mon',
              'tuesday': 'Tue', 'tue': 'Tue', 'selasa': 'Tue',
              'wednesday': 'Wed', 'wed': 'Wed', 'rabu': 'Wed',
              'thursday': 'Thu', 'thu': 'Thu', 'khamis': 'Thu', 'kamis': 'Thu',
              'friday': 'Fri', 'fri': 'Fri', 'jumaat': 'Fri', 'jumat': 'Fri',
              'saturday': 'Sat', 'sat': 'Sat', 'sabtu': 'Sat',
              'sunday': 'Sun', 'sun': 'Sun', 'ahad': 'Sun', 'minggu': 'Sun'
            };
            return map[clean] || (d.substring(0, 3).charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
          };
          const canonicalOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          const classDays = this.classes.map(c => normalizeDay(c.day)).filter(Boolean);
          const currentDays = (this.activeDays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']).map(normalizeDay);
          this.activeDays = [...new Set([...currentDays, ...classDays])].sort((a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b));
          if (typeof this.syncDaysAndTimeControlsUI === 'function') {
            this.syncDaysAndTimeControlsUI();
          }
        }
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

    // ── Unified Expandable Auth Menu (Single Merged Circle) ──
    const btnToggleAuth = document.getElementById('btn-toggle-auth-menu');
    const authIconLoggedOut = document.getElementById('auth-icon-logged-out');
    const authOutsideLabel = document.getElementById('user-auth-outside-label');
    const loginProvidersMenu = document.getElementById('login-providers-menu');
    const profileSettingsMenu = document.getElementById('profile-settings-menu');

    if (btnToggleAuth) {
      btnToggleAuth.addEventListener('click', (e) => {
        e.stopPropagation();
        const isLoggedIn = window.schedullyFirebase?.currentUser != null;
        if (isLoggedIn) {
          loginProvidersMenu?.classList.add('hidden');
          profileSettingsMenu?.classList.toggle('hidden');
        } else {
          profileSettingsMenu?.classList.add('hidden');
          loginProvidersMenu?.classList.toggle('hidden');
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#user-auth-action-wrapper')) {
          loginProvidersMenu?.classList.add('hidden');
          profileSettingsMenu?.classList.add('hidden');
        }
      });
    }

    if (btnLogin) {
      btnLogin.addEventListener('click', async () => {
        loginProvidersMenu?.classList.add('hidden');

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

        const confirmed = confirm("Are you sure you want to reset your account data in the cloud to fresh defaults? This will clear any presets, wallpaper, and classes.");
        if (!confirmed) return;

        if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);

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
          activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          gridStartHour: 8,
          gridEndHour: 20
        };

        // 1. Reset All Local Storage
        localStorage.removeItem('schedully_presets');
        localStorage.removeItem('schedully_active_preset');
        localStorage.removeItem('schedully_classes');
        localStorage.removeItem('schedully_wallpaper_data');
        localStorage.removeItem('schedully_wallpaper_swatches');
        localStorage.removeItem('schedully_wallpaper_primary');
        localStorage.removeItem('schedully_wallpaper_secondary');
        localStorage.removeItem('schedully_wallpaper_tertiary');
        localStorage.removeItem('schedully_wallpaper_header');
        localStorage.removeItem('schedully_theme_palette');
        localStorage.removeItem('schedully_theme_mode');
        localStorage.removeItem('schedully_axis_mode');
        localStorage.removeItem('schedully_time_display_mode');
        localStorage.removeItem('schedully_screen_ratio');
        localStorage.removeItem('schedully_active_device');
        localStorage.removeItem('schedully_zoom_scale');

        // 2. Reset In-Memory App State Completely
        this.classes = [];
        this.currentWallpaperData = null;
        this.wallpaperSwatches = null;
        this.wallpaperPrimary = null;
        this.wallpaperSecondary = null;
        this.wallpaperTertiary = null;
        this.wallpaperHeader = null;
        this.customHexColors = null;
        this.historyUndoStack = [];
        this.historyRedoStack = [];
        this._hasUnsavedCloudChanges = false;
        this.updateHistoryButtonUI();
        this.removeWallpaper(true);
        if (this.phoneCanvas) {
          this.phoneCanvas.style.backgroundColor = '';
          this.phoneCanvas.className = 'm3-phone-canvas';
        }
        this.applyHeaderColor('');
        this.applyFontColor('');
        this.currentPalette = 'nord';
        this.currentMode = 'light';
        this.applyThemeEngine();

        const freshStarterClasses = [
          { id: 'c_' + Date.now() + '_1', name: 'Mathematics', code: 'MATH 101', day: 'Mon', start: '09:00', end: '10:30', room: 'Hall A', instructor: 'Dr. Smith', color: '#3B82F6' },
          { id: 'c_' + Date.now() + '_2', name: 'Physics', code: 'PHYS 102', day: 'Tue', start: '10:00', end: '11:30', room: 'Lab 2', instructor: 'Prof. Davis', color: '#10B981' },
          { id: 'c_' + Date.now() + '_3', name: 'Computer Science', code: 'CS 103', day: 'Wed', start: '13:00', end: '14:30', room: 'Room 204', instructor: 'Dr. Alan', color: '#F59E0B' },
          { id: 'c_' + Date.now() + '_4', name: 'Academic English', code: 'ENG 104', day: 'Thu', start: '11:00', end: '12:30', room: 'Library', instructor: 'Ms. Emily', color: '#EC4899' },
          { id: 'c_' + Date.now() + '_5', name: 'Design Workshop', code: 'ART 105', day: 'Fri', start: '14:00', end: '15:30', room: 'Studio 1', instructor: 'Mr. Leo', color: '#8B5CF6' },
          { id: 'c_' + Date.now() + '_6', name: 'Weekend Seminar', code: 'SEM 106', day: 'Sat', start: '10:00', end: '11:30', room: 'Auditorium', instructor: 'Speaker', color: '#F97316' }
        ];

        this.classes = [...freshStarterClasses];
        this.presets = {
          default: {
            name: 'Default',
            classes: [...freshStarterClasses],
            settings: freshSettings,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null
          }
        };
        this.activePresetKey = 'default';
        this.applyPresetSettings(freshSettings);
        this.updatePresetSelectDropdown();
        this.renderAll();

        // 3. Reset Firebase Cloud Data
        if (window.schedullyFirebase?.currentUser) {
          await window.schedullyFirebase.resetUserData(freshSettings, freshStarterClasses);
        }

        // Cache the clean state in local storage so refreshes don't pull ghost data
        localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
        localStorage.setItem('schedully_active_preset', 'default');
        localStorage.setItem('schedully_classes', JSON.stringify(freshStarterClasses));

        this.markSaved();
        alert("Account reset successfully! Fresh starter schedule (Mon–Sat) is ready.");
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', async () => {
        profileSettingsMenu?.classList.add('hidden');

        if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);

        await window.schedullyFirebase?.logout();
        if (btnSaveCloud) btnSaveCloud.style.display = 'none';

        // Reset in-memory state and reload offline storage so previous user's data does not linger
        localStorage.removeItem('schedully_presets');
        localStorage.removeItem('schedully_active_preset');
        localStorage.removeItem('schedully_classes');
        localStorage.removeItem('schedully_wallpaper_data');
        localStorage.removeItem('schedully_wallpaper_swatches');
        localStorage.removeItem('schedully_wallpaper_primary');
        localStorage.removeItem('schedully_wallpaper_secondary');
        localStorage.removeItem('schedully_wallpaper_tertiary');
        localStorage.removeItem('schedully_wallpaper_header');

        this.classes = [];
        this.currentWallpaperData = null;
        this.wallpaperSwatches = null;
        this.wallpaperPrimary = null;
        this.wallpaperSecondary = null;
        this.wallpaperTertiary = null;
        this.wallpaperHeader = null;
        this.customHexColors = null;
        this.historyUndoStack = [];
        this.historyRedoStack = [];
        this._hasUnsavedCloudChanges = false;
        this.updateHistoryButtonUI();
        this.removeWallpaper(true);
        if (this.phoneCanvas) {
          this.phoneCanvas.style.backgroundColor = '';
          this.phoneCanvas.className = 'm3-phone-canvas';
        }
        this.applyHeaderColor('');
        this.applyFontColor('');
        this.currentPalette = 'nord';
        this.currentMode = 'light';
        this.applyThemeEngine();

        const freshSettings = this.getPresetSettings();
        this.presets = {
          default: {
            name: 'Default',
            classes: [],
            settings: freshSettings,
            wallpaper: null,
            wallpaperSwatches: null,
            wallpaperPrimary: null,
            wallpaperSecondary: null,
            wallpaperTertiary: null,
            wallpaperHeader: null
          }
        };
        this.activePresetKey = 'default';
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
              avatarBadge.classList.remove('hidden');
              if (user.photoURL) {
                avatarBadge.innerHTML = `<img src="${user.photoURL}" class="w-full h-full object-cover rounded-full" alt="User Avatar" />`;
              } else {
                avatarBadge.innerText = (user.displayName || 'U').charAt(0).toUpperCase();
              }
            }
            if (authIconLoggedOut) authIconLoggedOut.classList.add('hidden');
            if (authOutsideLabel) authOutsideLabel.innerText = 'Profile';
          } else {
            if (avatarBadge) {
              avatarBadge.classList.add('hidden');
              avatarBadge.innerHTML = 'U';
            }
            if (authIconLoggedOut) authIconLoggedOut.classList.remove('hidden');
            if (authOutsideLabel) authOutsideLabel.innerText = 'Login';
          }
        };

        // Fires on login (initial load) and whenever cloud data updates
        window.schedullyFirebase.onDataSyncedCallback = (data) => {
          try {
            if (!data) return;

            const hasLocalClasses = this.classes && this.classes.length > 0;
            const hasLocalCustomPresets = this.presets && Object.keys(this.presets).length > 1;
            const hasLocalWallpaper = !!(this.currentWallpaperData || localStorage.getItem('schedully_wallpaper_data'));
            const hasLocalWork = hasLocalClasses || hasLocalCustomPresets || hasLocalWallpaper;

            const isCloudEmpty = (!data.presets && !data.classes && !data.settings) ||
              ((!data.classes || data.classes.length === 0) && !data.wallpaper && (!data.presets || (Object.keys(data.presets).length <= 1 && (!data.presets.default?.classes || data.presets.default.classes.length === 0) && !data.presets.default?.wallpaper)));

            // Case 1: Fresh brand new cloud account & local device has preexisting offline work -> publish to cloud once
            if (isCloudEmpty && hasLocalWork) {
              console.log("Brand new cloud account detected. Publishing local offline work to cloud...");
              this._stagePending(true);
              return;
            }

            // Case 2: Cloud is completely empty and no local work -> initialize default clean preset
            if (isCloudEmpty) {
              localStorage.removeItem('schedully_presets');
              localStorage.removeItem('schedully_active_preset');
              localStorage.removeItem('schedully_classes');
              localStorage.removeItem('schedully_wallpaper_data');

              this.classes = [];
              const freshSettings = this.getPresetSettings();
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

            // Case 3: Cloud is Authoritative (Google Apps sync model) -> Restore latest cloud state across all devices
            if (data.presets && typeof data.presets === 'object') {
              this.presets = data.presets;
            }

            const activeKey = data.activePreset || this.activePresetKey || 'default';
            if (this.presets && this.presets[activeKey]) {
              this.activePresetKey = activeKey;
            } else if (this.presets && Object.keys(this.presets).length > 0) {
              this.activePresetKey = Object.keys(this.presets)[0];
            }

            const activePresetData = (this.presets && this.presets[this.activePresetKey]) || {};
            const mergedSettings = Object.assign({}, data.settings || {}, activePresetData.settings || {});

            // 1. Apply UI / Layout / Palette / Typography settings
            this.applyPresetSettings(mergedSettings);

            // 2. Wallpaper & Swatches Restoration
            const cloudSwatches = activePresetData.wallpaperSwatches || data.wallpaperSwatches;
            if (cloudSwatches && Array.isArray(cloudSwatches)) {
              this.wallpaperSwatches = cloudSwatches;
            }
            if (activePresetData.wallpaperPrimary || data.wallpaperPrimary) {
              this.wallpaperPrimary = activePresetData.wallpaperPrimary || data.wallpaperPrimary;
            }
            if (activePresetData.wallpaperSecondary || data.wallpaperSecondary) {
              this.wallpaperSecondary = activePresetData.wallpaperSecondary || data.wallpaperSecondary;
            }
            if (activePresetData.wallpaperTertiary || data.wallpaperTertiary) {
              this.wallpaperTertiary = activePresetData.wallpaperTertiary || data.wallpaperTertiary;
            }
            if (activePresetData.wallpaperHeader || data.wallpaperHeader) {
              this.wallpaperHeader = activePresetData.wallpaperHeader || data.wallpaperHeader;
            }

            const cloudWallpaper = activePresetData.wallpaper || data.wallpaper || null;
            if (cloudWallpaper) {
              const hasSwatches = !!(this.wallpaperSwatches && this.wallpaperSwatches.length > 0);
              this.applyWallpaper(cloudWallpaper, !hasSwatches, true);
              try { localStorage.setItem('schedully_wallpaper_data', cloudWallpaper); } catch (e) {}
            } else {
              this.removeWallpaper();
            }

            // 3. Language
            const targetLang = data.language || mergedSettings.language;
            if (targetLang && window.SchedullyI18n && typeof window.SchedullyI18n.setLanguage === 'function') {
              if (window.SchedullyI18n.currentLang !== targetLang) {
                window.SchedullyI18n.setLanguage(targetLang);
              }
            }

            // 4. Device Framing Mode (Optional sync)
            if (data.activeDevice) {
              this.switchDevice(data.activeDevice, false);
            }

            // 5. Theme Mode & Palette Sync
            const targetMode = data.currentMode || mergedSettings.currentMode;
            if (targetMode) {
              this.currentMode = targetMode;
              try { localStorage.setItem('schedully_theme_mode', this.currentMode); } catch (e) {}
            }
            const targetPalette = data.currentPalette || mergedSettings.currentPalette;
            if (targetPalette) {
              this.currentPalette = targetPalette;
              try { localStorage.setItem('schedully_theme_palette', this.currentPalette); } catch (e) {}
            }
            this.applyThemeEngine();

            // 6. Canvas Zoom Scale
            const targetZoom = data.zoomScale || mergedSettings.zoomScale;
            if (targetZoom) {
              const parsedZoom = parseFloat(targetZoom);
              if (!isNaN(parsedZoom) && parsedZoom >= 0.3 && parsedZoom <= 2.0) {
                this.zoomScale = parsedZoom;
                try { localStorage.setItem('schedully_zoom_scale', String(this.zoomScale)); } catch (e) {}
                if (typeof this.applyCanvasZoom === 'function') {
                  this.applyCanvasZoom(false);
                }
              }
            }

            // 7. Schedule Classes Restoration
            if (Array.isArray(activePresetData.classes)) {
              this.classes = activePresetData.classes;
            } else if (Array.isArray(data.classes)) {
              this.classes = data.classes;
            } else {
              this.classes = [];
            }

            if (this.classes.length > 0) {
              const normalizeDay = (d) => {
                if (!d) return 'Mon';
                const clean = String(d).trim().toLowerCase();
                const map = {
                  'monday': 'Mon', 'mon': 'Mon', 'isnin': 'Mon', 'senin': 'Mon',
                  'tuesday': 'Tue', 'tue': 'Tue', 'selasa': 'Tue',
                  'wednesday': 'Wed', 'wed': 'Wed', 'rabu': 'Wed',
                  'thursday': 'Thu', 'thu': 'Thu', 'khamis': 'Thu', 'kamis': 'Thu',
                  'friday': 'Fri', 'fri': 'Fri', 'jumaat': 'Fri', 'jumat': 'Fri',
                  'saturday': 'Sat', 'sat': 'Sat', 'sabtu': 'Sat',
                  'sunday': 'Sun', 'sun': 'Sun', 'ahad': 'Sun', 'minggu': 'Sun'
                };
                return map[clean] || (d.substring(0, 3).charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
              };
              const canonicalOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
              const classDays = this.classes.map(c => normalizeDay(c.day)).filter(Boolean);
              const currentDays = (this.activeDays || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']).map(normalizeDay);
              this.activeDays = [...new Set([...currentDays, ...classDays])].sort((a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b));

              // Auto-expand start and end hours to fit all restored classes
              this.classes.forEach(c => {
                if (c.startTime) {
                  const [sh] = String(c.startTime).split(':').map(Number);
                  if (!isNaN(sh) && sh >= 0 && sh < this.gridStartHour) this.gridStartHour = sh;
                }
                if (c.endTime) {
                  let [eh, em] = String(c.endTime).split(':').map(Number);
                  if ((eh === 0 || eh === 24) && c.startTime) {
                    const [sh] = String(c.startTime).split(':').map(Number);
                    if (sh >= 12) eh = 24;
                  }
                  const endCeil = (em && em > 0) ? eh + 1 : eh;
                  if (!isNaN(endCeil) && endCeil > this.gridEndHour) this.gridEndHour = Math.min(24, endCeil);
                }
              });

              if (typeof this.syncDaysAndTimeControlsUI === 'function') {
                this.syncDaysAndTimeControlsUI();
              }
            }

            // If photo wallpaper is active, preserve or assign adaptive colors
            if (this.phoneCanvas?.classList.contains('has-photo-wallpaper') && this.wallpaperSwatches && this.wallpaperSwatches.length > 0) {
              this.classes.forEach((cls, idx) => {
                if (!cls.customColor && !cls.color) {
                  cls.customColor = this.wallpaperSwatches[idx % this.wallpaperSwatches.length];
                  cls.color = cls.customColor;
                }
              });
            }

            this.updatePresetSelectDropdown();
            this.renderAll();

            // Cache synced cloud data into localStorage for offline availability
            try {
              if (data.updatedAt) localStorage.setItem('schedully_updated_at', data.updatedAt);
              localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
              localStorage.setItem('schedully_active_preset', this.activePresetKey);
              localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
              if (this.wallpaperSwatches) {
                localStorage.setItem('schedully_wallpaper_swatches', JSON.stringify(this.wallpaperSwatches));
              }
              if (this.wallpaperPrimary) localStorage.setItem('schedully_wallpaper_primary', this.wallpaperPrimary);
              if (this.wallpaperSecondary) localStorage.setItem('schedully_wallpaper_secondary', this.wallpaperSecondary);
              if (this.wallpaperTertiary) localStorage.setItem('schedully_wallpaper_tertiary', this.wallpaperTertiary);
              if (this.wallpaperHeader) localStorage.setItem('schedully_wallpaper_header', this.wallpaperHeader);
            } catch (e) {}

            // Mark saved state
            this._hasUnsavedCloudChanges = false;
          } catch (syncErr) {
            console.warn("Cloud sync non-fatal error:", syncErr);
          }
        };

        if (window.schedullyFirebase.currentUser) {
          window.schedullyFirebase.onUserChangedCallback(window.schedullyFirebase.currentUser);
          window.schedullyFirebase.fetchUserData();
        }
      } else {
        setTimeout(initAuthListener, 200);
      }
    };

    window.addEventListener('beforeunload', () => {
      if (this._hasUnsavedCloudChanges && window.schedullyFirebase?.currentUser) {
        this.saveToCloud();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && this._hasUnsavedCloudChanges && window.schedullyFirebase?.currentUser) {
        this.saveToCloud();
      }
    });

    initAuthListener();
  }

  getPresetSettings() {
    return {
      tableCornerStyle: this.tableCornerStyle || 'rounded',
      tableCornerRadiusVal: this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 8,
      cardCornerStyle: this.cardCornerStyle || 'rounded',
      cardCornerRadiusVal: this.cardCornerRadiusVal !== undefined ? this.cardCornerRadiusVal : 6,
      borderStyle: this.borderStyle || 'default',
      currentMode: this.currentMode || localStorage.getItem('schedully_theme_mode') || 'light',
      currentPalette: this.currentPalette || localStorage.getItem('schedully_theme_palette') || 'indigo',
      customHexColors: this.customHexColors || null,
      customSurfaceColor: this.customSurfaceColor || null,
      userHasPickedSurfaceColor: !!this.userHasPickedSurfaceColor,
      customBgColor: this.customBgColor || null,
      userHasPickedBgColor: !!this.userHasPickedBgColor,
      customHeaderColor: this.customHeaderColor || null,
      userHasPickedHeaderColor: !!this.userHasPickedHeaderColor,
      customTrademarkColor: this.customTrademarkColor || null,
      userHasPickedTrademarkColor: !!this.userHasPickedTrademarkColor,
      customFontColor: this.customFontColor || null,
      userHasPickedFontColor: !!this.userHasPickedFontColor,
      gridWidthVal: this.gridWidthVal !== undefined ? this.gridWidthVal : 100,
      gridHeightVal: this.gridHeightVal !== undefined ? this.gridHeightVal : 49,
      gridYPosVal: this.gridYPosVal !== undefined ? this.gridYPosVal : 0,
      fontSizeVal: this.gridFontSizeVal || this.fontSizeVal || 9,
      clockFormat: this.clockFormat || '12-hour',
      bgBlurEnabled: this.bgBlurEnabled || false,
      bgBlurIntensity: this.bgBlurIntensity || 10,
      wallpaperDimIntensity: this.wallpaperDimIntensity || 0,
      fontFamily: this.currentFontKey || 'default',
      timetableOpacity: this.timetableOpacity !== undefined ? this.timetableOpacity : 100,
      showTitle: this.showTitle !== undefined ? this.showTitle : true,
      titleText: this.timetableTitleText || 'Untitled',
      showTrademark: this.showTrademark || false,
      trademarkText: this.trademarkText || 'Schedully • Student Edition',
      trademarkStyle: this.trademarkStyle || 'default',
      activeDays: this.activeDays ? [...this.activeDays] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      gridStartHour: (this.gridStartHour !== undefined && this.gridStartHour !== null) ? Number(this.gridStartHour) : 8,
      gridEndHour: (this.gridEndHour !== undefined && this.gridEndHour !== null) ? Number(this.gridEndHour) : 20,
      axisMode: this.axisMode || 'time',
      gridPeriodCount: this.gridPeriodCount || 6,
      selectedOcrPeriodPreset: this.selectedOcrPeriodPreset || '90m-900',
      timeDisplayMode: this.timeDisplayMode || localStorage.getItem('schedully_time_display_mode') || 'time',
      screenRatio: this.currentScreenRatio || localStorage.getItem('schedully_screen_ratio') || 'auto',
      activeDevice: this.activeDevice || localStorage.getItem('schedully_active_device') || 'phone',
      zoomScale: this.zoomScale || 0.85,
      showLockUI: this.showLockUI !== undefined ? this.showLockUI : true,
      language: (window.SchedullyI18n ? window.SchedullyI18n.currentLang : (localStorage.getItem('schedully_language') || 'en')),

      // Card Formats & Sub-options
      globalCardTimes: this.globalCardTimes !== undefined ? this.globalCardTimes : true,
      cardTimeDisplayType: this.cardTimeDisplayType || 'start',
      globalCourseType: this.globalCourseType !== undefined ? this.globalCourseType : true,
      globalCourseRoom: this.globalCourseRoom !== undefined ? this.globalCourseRoom : true,
      globalCourseLecturer: this.globalCourseLecturer !== undefined ? this.globalCourseLecturer : true,
      globalCourseGroup: this.globalCourseGroup !== undefined ? this.globalCourseGroup : true,
      globalAdaptiveColor: this.globalAdaptiveColor !== undefined ? this.globalAdaptiveColor : true,

      // Additional UI & Audio/Haptic preferences
      fontShadow: localStorage.getItem('schedully_font_shadow') === 'yes',
      showGridBorders: localStorage.getItem('schedully_show_grid_borders') !== 'no',
      showSideSliders: localStorage.getItem('schedully_show_side_sliders') !== 'no',
      soundEnabled: localStorage.getItem('schedully_sound_enabled') !== 'no',
      hapticsEnabled: localStorage.getItem('schedully_haptics_enabled') !== 'no',
      sliderLayout: this.sliderLayout || { left: ['layout', 'opacity', 'blur'], right: ['zoom', 'radius', 'font'] },

      // Title & Trademark Layout & Geometry
      titlePlacement: this.titlePlacement || 'merged',
      titleCornerRadius: this.titleCornerRadius !== undefined ? this.titleCornerRadius : 14,
      titleGapDistance: this.titleGapDistance !== undefined ? this.titleGapDistance : 8,
      titleWidthSize: this.titleWidthSize !== undefined ? this.titleWidthSize : 100,
      trademarkLayoutMode: this.trademarkLayoutMode || 'borderless',
      trademarkCornerRadius: this.trademarkCornerRadius !== undefined ? this.trademarkCornerRadius : 14,
      trademarkGapDistance: this.trademarkGapDistance !== undefined ? this.trademarkGapDistance : 8,
      trademarkWidthSize: this.trademarkWidthSize !== undefined ? this.trademarkWidthSize : 100
    };
  }

  _stagePending(immediate = false) {
    if (!this.presets) this.presets = {};
    if (!this.activePresetKey) this.activePresetKey = 'default';
    const currentSettings = this.getPresetSettings();
    const currentWallpaper = this.currentWallpaperData || this.presets[this.activePresetKey]?.wallpaper || localStorage.getItem('schedully_wallpaper_data') || null;
    this.presets[this.activePresetKey] = {
      name: this.presets[this.activePresetKey]?.name || 'Default',
      classes: this.classes,
      wallpaper: currentWallpaper,
      wallpaperSwatches: this.wallpaperSwatches || null,
      wallpaperPrimary: this.wallpaperPrimary || null,
      wallpaperSecondary: this.wallpaperSecondary || null,
      wallpaperTertiary: this.wallpaperTertiary || null,
      wallpaperHeader: this.wallpaperHeader || null,
      settings: currentSettings
    };

    // Instant local storage write so current browser session never loses data
    try {
      const nowIso = new Date().toISOString();
      localStorage.setItem('schedully_updated_at', nowIso);
      localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
      localStorage.setItem('schedully_presets', JSON.stringify(this.presets));
      localStorage.setItem('schedully_active_preset', this.activePresetKey);
      localStorage.setItem('schedully_axis_mode', this.axisMode || 'time');
      localStorage.setItem('schedully_theme_mode', this.currentMode || 'light');
      localStorage.setItem('schedully_zoom_scale', String(this.zoomScale || 0.85));
      if (this.wallpaperSwatches) {
        localStorage.setItem('schedully_wallpaper_swatches', JSON.stringify(this.wallpaperSwatches));
      }
      if (this.wallpaperPrimary) localStorage.setItem('schedully_wallpaper_primary', this.wallpaperPrimary);
      if (this.wallpaperSecondary) localStorage.setItem('schedully_wallpaper_secondary', this.wallpaperSecondary);
      if (this.wallpaperTertiary) localStorage.setItem('schedully_wallpaper_tertiary', this.wallpaperTertiary);
      if (this.wallpaperHeader) localStorage.setItem('schedully_wallpaper_header', this.wallpaperHeader);
    } catch (e) {
      console.warn("Could not save to local storage", e);
    }

    this.markUnsaved();

    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }

    if (this._autoSaveTimer) clearTimeout(this._autoSaveTimer);

    if (immediate) {
      if (window.schedullyFirebase?.currentUser && this._hasUnsavedCloudChanges) {
        this.saveToCloud();
      }
    } else {
      // Ultra-fast 400ms Debounced Cloud Auto-Save (never drops fast user edits)
      this._autoSaveTimer = setTimeout(() => {
        if (window.schedullyFirebase?.currentUser && this._hasUnsavedCloudChanges) {
          this.saveToCloud();
        }
      }, 400);
    }
  }

  saveToLocal() {
    this._stagePending(false);
  }

  saveClasses() {
    this._stagePending(false);
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
        wallpaperPrimary: this.wallpaperPrimary || null,
        wallpaperSecondary: this.wallpaperSecondary || null,
        wallpaperTertiary: this.wallpaperTertiary || null,
        wallpaperHeader: this.wallpaperHeader || null,
        settings: currentSettings
      };
    }

    const ok = await window.schedullyFirebase.saveUserData({
      classes: this.classes,
      presets: this.presets,
      activePreset: this.activePresetKey,
      wallpaper: currentWallpaper,
      wallpaperSwatches: this.wallpaperSwatches || null,
      wallpaperPrimary: this.wallpaperPrimary || null,
      wallpaperSecondary: this.wallpaperSecondary || null,
      wallpaperTertiary: this.wallpaperTertiary || null,
      wallpaperHeader: this.wallpaperHeader || null,
      settings: currentSettings,
      language: currentSettings.language,
      activeDevice: currentSettings.activeDevice,
      zoomScale: currentSettings.zoomScale
    });

    if (ok) {
      this.markSaved();
    }
  }
  importClassesDirectly(newEvents, ocrGridBounds = null) {
    if (!newEvents || newEvents.length === 0) {
       alert("No matching classes found for the selected groups.");
       return;
    }
    
    if (this.classes.length > 0) {
      this.recordHistoryState();
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

    const normalizeDay = (d) => {
      if (!d) return 'Mon';
      const clean = String(d).trim().toLowerCase();
      const map = {
        'monday': 'Mon', 'mon': 'Mon', 'isnin': 'Mon', 'senin': 'Mon',
        'tuesday': 'Tue', 'tue': 'Tue', 'selasa': 'Tue',
        'wednesday': 'Wed', 'wed': 'Wed', 'rabu': 'Wed',
        'thursday': 'Thu', 'thu': 'Thu', 'khamis': 'Thu', 'kamis': 'Thu',
        'friday': 'Fri', 'fri': 'Fri', 'jumaat': 'Fri', 'jumat': 'Fri',
        'saturday': 'Sat', 'sat': 'Sat', 'sabtu': 'Sat',
        'sunday': 'Sun', 'sun': 'Sun', 'ahad': 'Sun', 'minggu': 'Sun'
      };
      return map[clean] || (d.substring(0, 3).charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
    };

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

      let sTime = c.startTime || '08:00';
      let eTime = c.endTime || '09:00';
      const codeOrTitle = ((c.code || '') + ' ' + (c.title || '')).toUpperCase();
      if (codeOrTitle.includes('KO-KURIKULUM') || codeOrTitle.includes('KOKURIKULUM') || codeOrTitle.includes('KOKU')) {
        if (sTime === '14:00' && (eTime === '19:00' || eTime === '20:00' || eTime === '21:00' || eTime === '22:00' || eTime === '17:00' || eTime === '18:00')) {
          eTime = '23:00';
        }
      }

      return {
        id: Date.now() + i,
        code: c.code,
        title: c.title,
        day: normalizeDay(c.day),
        startTime: sTime,
        endTime: eTime,
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

    // Auto-adjust grid start & end times so all imported courses are visible and full night coverage is supported
    let minStart = 24;
    let maxEnd = 0;
    const importedDays = [];

    mapped.forEach(c => {
      if (c.startTime) {
        const [sh] = c.startTime.split(':').map(Number);
        if (!isNaN(sh)) minStart = Math.min(minStart, sh);
      }
      if (c.endTime) {
        let [eh, em] = c.endTime.split(':').map(Number);
        if (eh === 0 && c.startTime) {
          const [sh] = c.startTime.split(':').map(Number);
          if (sh >= 12) eh = 24;
        }
        const endCeil = (em > 0) ? eh + 1 : eh;
        if (!isNaN(endCeil)) maxEnd = Math.max(maxEnd, endCeil);
      }
      const normD = normalizeDay(c.day);
      if (!importedDays.includes(normD)) {
        importedDays.push(normD);
      }
    });

    let ocrStartHour = null;
    let ocrEndHour = null;
    if (ocrGridBounds && ocrGridBounds.gridStartHour) {
      const [sh] = String(ocrGridBounds.gridStartHour).split(':').map(Number);
      if (!isNaN(sh)) ocrStartHour = sh;
    }
    if (ocrGridBounds && ocrGridBounds.gridEndHour) {
      let [eh, em] = String(ocrGridBounds.gridEndHour).split(':').map(Number);
      if (eh === 0) eh = 24;
      const endCeil = (em > 0) ? eh + 1 : eh;
      if (!isNaN(endCeil)) ocrEndHour = endCeil;
    }

    if (minStart < 24 && maxEnd > 0) {
      // Universal dynamic start: matches detected timetable start header or earliest course
      const targetStart = ocrStartHour !== null ? ocrStartHour : Math.min(minStart, 8);
      this.gridStartHour = Math.max(0, Math.min(23, targetStart));
      
      // Universal dynamic end: matches detected timetable end header or latest course
      const targetEnd = ocrEndHour !== null ? ocrEndHour : maxEnd;
      this.gridEndHour = Math.min(24, Math.max(this.gridStartHour + 4, targetEnd));
    }

    // Set canonical active days without duplicates
    const hasWeekend = importedDays.some(d => d === 'Sat' || d === 'Sun');
    const defaultDays = hasWeekend ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.activeDays = defaultDays.filter(d => importedDays.includes(d) || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(d));

    if (this.gridStartTimeSelect) {
      this.gridStartTimeSelect.value = `${String(this.gridStartHour).padStart(2, '0')}:00`;
    }
    if (this.gridEndTimeSelect) {
      this.gridEndTimeSelect.value = `${String(this.gridEndHour).padStart(2, '0')}:00`;
    }
    this.syncDaysAndTimeControlsUI();
    this.updateHistoryButtonUI();
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

  showOcrLanguageModal(courses, detectedLang, isPeriodBased = false, hasNonEnglish = null, gridBounds = null) {
    if (!this.ocrLangModal) {
      this.importClassesDirectly(courses, gridBounds);
      return;
    }

    // Determine whether timetable has non-English course names
    // EXCLUDING person/lecturer/instructor names
    let isActuallyForeign = false;
    if (hasNonEnglish !== null && hasNonEnglish !== undefined) {
      isActuallyForeign = Boolean(hasNonEnglish);
    } else if (detectedLang && detectedLang.toLowerCase() !== 'english') {
      isActuallyForeign = true;
    } else if (Array.isArray(courses)) {
      // Check subject titles/codes only (exclude lecturer names!)
      isActuallyForeign = courses.some(c => /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf\uac00-\ud7af\u0600-\u06ff\u0400-\u04ff]/.test((c.title || '') + (c.code || '') + (c.originalTitle || '')));
    }

    this.pendingOcrResult = { courses, detectedLang, isPeriodBased, hasNonEnglish: isActuallyForeign, gridBounds };

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

    const typeLabel = isPeriodBased ? 'Period System' : 'Clock Schedule';
    if (this.ocrDetectedLangBadge) {
      if (isActuallyForeign) {
        this.ocrDetectedLangBadge.innerText = `${detectedLang} • ${typeLabel}`;
      } else {
        this.ocrDetectedLangBadge.innerText = `English • ${typeLabel}`;
      }
    }
    if (this.ocrDetectedLangTitle) {
      if (isActuallyForeign) {
        this.ocrDetectedLangTitle.innerText = `${detectedLang} Timetable Detected`;
      } else {
        this.ocrDetectedLangTitle.innerText = `Timetable Settings`;
      }
    }

    if (isActuallyForeign) {
      // Foreign language timetable: Both Keep Original and Translate are active
      if (this.ocrKeepLangLabel) this.ocrKeepLangLabel.innerText = `Keep ${detectedLang}`;
      if (this.ocrKeepLangDesc) this.ocrKeepLangDesc.innerText = `Original ${detectedLang} text`;
      if (this.ocrTranslateLangLabel) this.ocrTranslateLangLabel.innerText = 'Translate';
      if (this.ocrTranslateLangDesc) this.ocrTranslateLangDesc.innerText = 'English & Codes';

      if (this.btnOcrKeepOriginal) {
        this.btnOcrKeepOriginal.classList.remove('disabled');
        this.btnOcrKeepOriginal.removeAttribute('disabled');
        this.btnOcrKeepOriginal.classList.add('active');
      }
      if (this.btnOcrTranslateEnglish) {
        this.btnOcrTranslateEnglish.classList.remove('disabled', 'active');
        this.btnOcrTranslateEnglish.removeAttribute('disabled');
        this.btnOcrTranslateEnglish.removeAttribute('title');
      }
    } else {
      // English timetable: Grey out the Translate button since it's already in English
      if (this.ocrKeepLangLabel) this.ocrKeepLangLabel.innerText = 'English';
      if (this.ocrKeepLangDesc) this.ocrKeepLangDesc.innerText = 'Original English text';
      if (this.ocrTranslateLangLabel) this.ocrTranslateLangLabel.innerText = 'Translate';
      if (this.ocrTranslateLangDesc) this.ocrTranslateLangDesc.innerText = 'Already English';

      if (this.btnOcrKeepOriginal) {
        this.btnOcrKeepOriginal.classList.remove('disabled');
        this.btnOcrKeepOriginal.removeAttribute('disabled');
        this.btnOcrKeepOriginal.classList.add('active');
      }
      if (this.btnOcrTranslateEnglish) {
        this.btnOcrTranslateEnglish.classList.add('disabled');
        this.btnOcrTranslateEnglish.classList.remove('active');
        this.btnOcrTranslateEnglish.setAttribute('disabled', 'true');
        this.btnOcrTranslateEnglish.setAttribute('title', 'Timetable text is already in English');
      }
    }

    // Default Selection State
    this.selectedOcrLangChoice = 'original';
    this.selectedOcrAxisMode = isPeriodBased ? 'period' : 'time';
    this.selectedOcrPeriodPreset = '90m-900';

    // Show period configuration section only if period-based timetable is detected
    if (this.ocrPeriodSection) {
      this.ocrPeriodSection.style.display = isPeriodBased ? 'flex' : 'none';
    }

    // Reset Segment Highlights — purely via .active class, CSS handles the styling
    const axisButtons = [this.btnAxisPeriod, this.btnAxisTime].filter(Boolean);
    axisButtons.forEach(b => b.classList.remove('active'));
    if (isPeriodBased && this.btnAxisPeriod) {
      this.btnAxisPeriod.classList.add('active');
    } else if (this.btnAxisTime) {
      this.btnAxisTime.classList.add('active');
    }

    // Show/hide preset chips based on whether timetable is period based and axis mode is Clock
    const presetContainer = document.getElementById('ocr-period-preset-container');
    if (presetContainer) {
      presetContainer.style.display = (isPeriodBased && this.selectedOcrAxisMode === 'time') ? 'flex' : 'none';
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
    if (this.slotsBadgeCount) this.slotsBadgeCount.innerText = count;
    if (this.settingsCoursesBadge) this.settingsCoursesBadge.innerText = count;

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
    const normalizeDay = (d) => {
      if (!d) return 'Mon';
      const clean = String(d).trim().toLowerCase();
      const map = {
        'monday': 'Mon', 'mon': 'Mon', 'isnin': 'Mon', 'senin': 'Mon',
        'tuesday': 'Tue', 'tue': 'Tue', 'selasa': 'Tue',
        'wednesday': 'Wed', 'wed': 'Wed', 'rabu': 'Wed',
        'thursday': 'Thu', 'thu': 'Thu', 'khamis': 'Thu', 'kamis': 'Thu',
        'friday': 'Fri', 'fri': 'Fri', 'jumaat': 'Fri', 'jumat': 'Fri',
        'saturday': 'Sat', 'sat': 'Sat', 'sabtu': 'Sat',
        'sunday': 'Sun', 'sun': 'Sun', 'ahad': 'Sun', 'minggu': 'Sun'
      };
      return map[clean] || (d.substring(0, 3).charAt(0).toUpperCase() + d.substring(1, 3).toLowerCase());
    };
    const rawDays = this.activeDays && this.activeDays.length > 0 ? this.activeDays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const canonicalOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const classDays = (this.classes || []).map(c => normalizeDay(c.day)).filter(Boolean);
    const combinedDays = [...new Set([...rawDays.map(normalizeDay), ...classDays])];
    const days = combinedDays.sort((a, b) => canonicalOrder.indexOf(a) - canonicalOrder.indexOf(b));
    this.activeDays = days;
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
    if (isNaN(effectiveEndHour) || effectiveEndHour < 0 || effectiveEndHour > 24) effectiveEndHour = 20;

    // Auto-expand start/end hour bounds to fit any classes with early start or late end times
    if (Array.isArray(this.classes) && this.classes.length > 0) {
      this.classes.forEach(c => {
        if (c.startTime) {
          const [sh] = String(c.startTime).split(':').map(Number);
          if (!isNaN(sh) && sh >= 0 && sh < effectiveStartHour) {
            effectiveStartHour = sh;
          }
        }
        if (c.endTime) {
          let [eh, em] = String(c.endTime).split(':').map(Number);
          if ((eh === 0 || eh === 24) && c.startTime) {
            const [sh] = String(c.startTime).split(':').map(Number);
            if (sh >= 12) eh = 24;
          }
          const endCeil = (em && em > 0) ? eh + 1 : eh;
          if (!isNaN(endCeil) && endCeil > effectiveEndHour) {
            effectiveEndHour = Math.min(24, endCeil);
          }
        }
      });
      this.gridStartHour = effectiveStartHour;
      this.gridEndHour = effectiveEndHour;
      if (this.gridStartTimeSelect && this.gridStartTimeSelect.value !== `${String(effectiveStartHour).padStart(2, '0')}:00`) {
        this.gridStartTimeSelect.value = `${String(effectiveStartHour).padStart(2, '0')}:00`;
      }
      if (this.gridEndTimeSelect && this.gridEndTimeSelect.value !== `${String(effectiveEndHour).padStart(2, '0')}:00`) {
        this.gridEndTimeSelect.value = `${String(effectiveEndHour).padStart(2, '0')}:00`;
      }
    }

    if (effectiveEndHour <= effectiveStartHour) {
      effectiveEndHour = Math.min(24, effectiveStartHour + 4);
    }

    const timetableContainer = document.getElementById('lock-timetable-container');
    if (timetableContainer) {
      timetableContainer.style.width = `${this.gridWidthVal || 100}%`;
      timetableContainer.style.transform = 'none';
      timetableContainer.style.marginTop = `${this.gridYPosVal || 0}px`;
      timetableContainer.style.marginLeft = `${this.gridXPosVal || 0}px`;
      timetableContainer.style.transition = 'margin-top 0.15s ease, margin-left 0.15s ease, width 0.15s ease, background-color 0.3s ease, border-color 0.3s ease';
      timetableContainer.style.borderRadius = this.tableCornerStyle === 'sharp' ? '0px' : (this.tableCornerRadiusVal !== undefined ? this.tableCornerRadiusVal : 8) + 'px';
      timetableContainer.style.overflow = 'hidden';
      timetableContainer.classList.toggle('has-font-shadow', !!this.fontShadowEnabled);
    }
    if (this.universalTimetableGrid) {
      this.universalTimetableGrid.classList.toggle('has-font-shadow', !!this.fontShadowEnabled);
    }
    const phoneLockHeader = document.getElementById('phone-lock-header');
    if (phoneLockHeader) {
      phoneLockHeader.classList.toggle('has-font-shadow', !!this.fontShadowEnabled);
    }
    if (this.phoneCanvas) {
      this.phoneCanvas.classList.toggle('has-font-shadow', !!this.fontShadowEnabled);
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
          const displayH = (h === 24) ? '24' : String(h).padStart(2, '0');
          timeSlots.push({
            hour: h,
            topText: `${displayH}:00`,
            bottomText: ''
          });
        } else {
          const displayH = h > 12 ? (h === 24 ? 12 : h - 12) : (h === 0 ? 12 : h);
          const ampm = (h >= 12 && h < 24) ? 'PM' : 'AM';
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

    const masterFontScale = (this.fontScaleAll !== undefined && this.fontScaleAll !== null) ? this.fontScaleAll : (this.gridFontScale || 1.0);
    const cardFontScale = (this.fontScaleCards !== undefined && this.fontScaleCards !== null) ? this.fontScaleCards : 1.0;
    const headerFontScale = (this.fontScaleHeader !== undefined && this.fontScaleHeader !== null) ? this.fontScaleHeader : 1.0;
    const titleFontScale = (this.fontScaleTitle !== undefined && this.fontScaleTitle !== null) ? this.fontScaleTitle : 1.0;
    const tmFontScale = (this.fontScaleTrademark !== undefined && this.fontScaleTrademark !== null) ? this.fontScaleTrademark : 1.0;

    const effectiveCardScale = masterFontScale * cardFontScale;
    const effectiveHeaderScale = masterFontScale * headerFontScale;
    const effectiveTitleScale = masterFontScale * titleFontScale;
    const effectiveTmScale = masterFontScale * tmFontScale;

    const headerFontSize = Math.max(5, Math.round(11 * effectiveHeaderScale * 10) / 10);
    const timeFontSize = Math.max(4.5, Math.round(9.5 * effectiveHeaderScale * 10) / 10);

    const gridFragment = document.createDocumentFragment();

    const corner = document.createElement('div');
    corner.className = 'exact-grid-cell-header';
    corner.innerText = '';
    corner.style.fontSize = `${headerFontSize}px`;
    gridFragment.appendChild(corner);

    days.forEach((d, dIdx) => {
      const isLast = (dIdx === days.length - 1);
      const headerCell = document.createElement('div');
      headerCell.className = `exact-grid-cell-header ${isLast ? 'last-day-col' : ''}`;
      headerCell.innerText = window.SchedullyI18n ? window.SchedullyI18n.getDayName(d) : d;
      headerCell.style.fontSize = `${headerFontSize}px`;
      gridFragment.appendChild(headerCell);
    });

    timeSlots.forEach(tObj => {
      const timeCell = document.createElement('div');
      timeCell.className = 'exact-grid-cell-time';
      timeCell.style.height = `${rowH}px`;
      timeCell.style.boxSizing = 'border-box';
      timeCell.style.fontSize = `${timeFontSize}px`;
      timeCell.innerHTML = `<span>${tObj.topText}</span>${tObj.bottomText ? `<span>${tObj.bottomText}</span>` : ''}`;
      gridFragment.appendChild(timeCell);

      days.forEach((day, dayIndex) => {
        const isLast = (dayIndex === days.length - 1);
        const slotCell = document.createElement('div');
        slotCell.className = `exact-grid-cell-slot ${isLast ? 'last-day-col' : ''}`;
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
          let [eh, em] = matched.endTime.split(':').map(Number);
          if ((eh === 0 || eh === 24) && sh >= 12) {
            eh = 24;
          }

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
          const paletteCardColor = courseSwatches[colorIdx % courseSwatches.length] || '#2563EB';

          // If Adaptive Color is ON (default/Yes), enforce the coordinated palette/wallpaper swatches.
          // If Adaptive Color is OFF (No), respect individual custom / randomized colors.
          const effectiveBg = (this.globalAdaptiveColor !== false)
            ? paletteCardColor
            : (matched.customColor || matched.color || paletteCardColor);

          // Smart Auto-Contrast Font Color for Card Text (Manual fontColor is the BOSS)
          const autoContrastFont = this.getContrastColor(effectiveBg);
          const customFontOverride = (this.userHasPickedFontColor && this.customFontColor) ? this.customFontColor : null;
          const textColor = matched.fontColor || customFontOverride || autoContrastFont;

          const cardStyleBg = effectiveBg;

          const cardStyle = (matched.isClashing && !this.ignoreClashes)
            ? 'background: #F43F5E !important; color: #FFFFFF !important;'
            : `background: ${cardStyleBg}; color: ${textColor};`;
          
          let formatStart = matched.startTime;
          let formatEnd = matched.endTime;
          if (this.clockFormat === '12') {
            const displaySh = sh > 12 ? sh - 12 : (sh === 0 ? 12 : sh);
            const displayEh = eh > 12 ? (eh === 24 ? 12 : eh - 12) : (eh === 0 ? 12 : eh);
            const shAmpm = (sh >= 12 && sh < 24) ? 'PM' : 'AM';
            const ehAmpm = (eh >= 12 && eh < 24) ? 'PM' : 'AM';
            formatStart = `${String(displaySh).padStart(2, '0')}:${String(sm || 0).padStart(2, '0')} ${shAmpm}`;
            formatEnd = `${String(displayEh).padStart(2, '0')}:${String(em || 0).padStart(2, '0')} ${ehAmpm}`;
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

          // Dynamically compute adaptive max font size based on cell height & font scale
          const numDays = days.length;
          const isWatch = (this.activeDevice === 'watch');
          const isPhone = (this.activeDevice === 'phone');
          const widthScale = (this.gridWidthVal || 100) / 100;
          const fontScale = (this.gridFontScale !== undefined && this.gridFontScale !== null) ? this.gridFontScale : 1.0;
          
          const fontFactor = isWatch ? 28 : (isPhone ? (widthScale < 0.8 ? 38 : 46) : 60);
          const maxAdaptiveFont = Math.min(22, Math.max(3.5, Math.round(fontFactor / numDays)));
          const heightAdaptiveFont = Math.min(22, Math.max(3.5, Math.floor(cardHeightPx / (lineCount * 1.15))));
          const effectiveMaxFont = Math.min(maxAdaptiveFont, heightAdaptiveFont);

          const baseCodeFont = isWatch ? 6.5 : (isPhone ? 9.2 : 10.5);
          const baseDetailFont = isWatch ? 5.5 : (isPhone ? 7.8 : 9.0);

          const codeFontSize = Math.max(3.0, Math.round(Math.min(baseCodeFont * effectiveCardScale, effectiveMaxFont * effectiveCardScale) * 10) / 10);
          const detailFontSize = Math.max(2.5, Math.round(Math.min(baseDetailFont * effectiveCardScale, Math.max(3.0, codeFontSize - 0.8)) * 10) / 10);

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
          cardElement.setAttribute('data-id', matched.id);
          cardElement.setAttribute('draggable', 'true');

          // Highlight active selection if currently selected for move/swap
          if (this.activeSwapCourseId && String(this.activeSwapCourseId) === String(matched.id)) {
            cardElement.classList.add('selected-for-swap');
          }

          // Card Drag Events
          cardElement.addEventListener('dragstart', (e) => {
            e.stopPropagation();
            this.handleCardDragStart(e, matched);
          });

          cardElement.addEventListener('dragend', (e) => {
            e.stopPropagation();
            this.handleCardDragEnd(e);
          });

          // Drop on another course card -> triggers swap
          cardElement.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cardElement.classList.add('swap-target-hover');
          });

          cardElement.addEventListener('dragleave', (e) => {
            e.stopPropagation();
            cardElement.classList.remove('swap-target-hover');
          });

          cardElement.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cardElement.classList.remove('swap-target-hover');
            const sourceId = e.dataTransfer ? e.dataTransfer.getData('text/plain') : null;
            if (sourceId && String(sourceId) !== String(matched.id)) {
              this.swapCoursesDirectly(sourceId, matched.id);
            }
          });

          // Card Click: Select for Swap, perform Swap if another card selected, and show Nudge Action Bar
          cardElement.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.activeSwapCourseId) {
              if (String(this.activeSwapCourseId) === String(matched.id)) {
                // Tapped same card -> deselect
                this.deselectSwapCourse();
              } else {
                // Tapped another card -> perform swap!
                const prevId = this.activeSwapCourseId;
                this.deselectSwapCourse();
                this.swapCoursesDirectly(prevId, matched.id);
              }
            } else {
              // Select card for Swap / Nudge
              this.selectCourseForSwap(matched.id, cardElement);
            }
          });

          cardElement.innerHTML = cardContentHTML;
          slotCell.appendChild(cardElement);
        });

        // Slot Cell Drag Over & Drop Handling
        slotCell.setAttribute('data-day', day);
        if (tObj.isPeriod) {
          slotCell.setAttribute('data-period', tObj.period);
        }
        slotCell.setAttribute('data-hour', tObj.hour);

        if (this.activeSwapCourseId && matchesInCell.length === 0) {
          slotCell.classList.add('slot-swap-candidate');
        }

        slotCell.addEventListener('dragover', (e) => {
          e.preventDefault();
          slotCell.classList.add('slot-drag-over');
        });

        slotCell.addEventListener('dragleave', (e) => {
          slotCell.classList.remove('slot-drag-over');
        });

        slotCell.addEventListener('drop', (e) => {
          e.preventDefault();
          slotCell.classList.remove('slot-drag-over');
          const sourceId = e.dataTransfer ? e.dataTransfer.getData('text/plain') : null;
          if (sourceId) {
            this.moveCourseToSlot(sourceId, day, tObj);
          }
        });

        // Slot Cell Click: If a course is selected for swap, tapping empty slot moves it here!
        slotCell.addEventListener('click', (e) => {
          if (this.activeSwapCourseId && (e.target === slotCell || e.target.classList.contains('exact-grid-cell-slot'))) {
            e.stopPropagation();
            const sourceId = this.activeSwapCourseId;
            this.deselectSwapCourse();
            this.moveCourseToSlot(sourceId, day, tObj);
          }
        });

        gridFragment.appendChild(slotCell);
      });
    });

    this.universalTimetableGrid.innerHTML = '';
    this.universalTimetableGrid.appendChild(gridFragment);

    if (this.lockTitleText) {
      this.lockTitleText.style.fontSize = `${Math.max(7, Math.round(13 * effectiveTitleScale * 10) / 10)}px`;
    }
    if (this.lockTrademarkText) {
      this.lockTrademarkText.style.fontSize = `${Math.max(5.5, Math.round(9.5 * effectiveTmScale * 10) / 10)}px`;
    }

    if (typeof this.applyTitleLayout === 'function') {
      this.applyTitleLayout();
    }
    if (typeof this.applyTrademarkLayout === 'function') {
      this.applyTrademarkLayout();
    }

    if (typeof this.updateMobilePip === 'function') {
      this.updateMobilePip();
    }

    if (this.activeDevice === 'watch' && typeof this.renderWatchGlance === 'function') {
      this.renderWatchGlance();
    }
  }

  // =========================================================================
  // INTERACTIVE GRID DRAG-AND-DROP, TAP-TO-SWAP & TIME NUDGE ENGINE
  // =========================================================================

  handleCardDragStart(e, course) {
    if (!e.dataTransfer) return;
    e.dataTransfer.setData('text/plain', String(course.id));
    e.dataTransfer.effectAllowed = 'move';
    const cardEl = e.currentTarget;
    if (cardEl) {
      cardEl.classList.add('is-dragging');
    }
    this.deselectSwapCourse();
  }

  handleCardDragEnd(e) {
    const cardEl = e.currentTarget;
    if (cardEl) {
      cardEl.classList.remove('is-dragging');
    }
    document.querySelectorAll('.exact-grid-cell-slot.slot-drag-over').forEach(cell => {
      cell.classList.remove('slot-drag-over');
    });
    document.querySelectorAll('.exact-course-card.swap-target-hover').forEach(card => {
      card.classList.remove('swap-target-hover');
    });
  }

  selectCourseForSwap(courseId, cardElement) {
    this.activeSwapCourseId = courseId;
    const course = this.classes.find(c => String(c.id) === String(courseId));
    if (!course) return;

    // Haptic feedback
    if (navigator.vibrate) {
      try { navigator.vibrate(18); } catch (err) {}
    }

    // Re-render grid to show candidate slots & active highlight
    this.renderTimetableGrid();

    // Position & show Quick Time Nudge Action Pill immediately
    this.positionNudgeActionPill(courseId);
  }

  deselectSwapCourse() {
    this.activeSwapCourseId = null;
    if (this.gridCourseActionPill) {
      this.gridCourseActionPill.classList.add('hidden');
    }
    this.requestGridRender();
  }

  getPeriodTimeSlot(periodNumber) {
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
    return defaultSchedule[periodNumber] || { start: `${periodNumber + 8}:00`, end: `${periodNumber + 9}:30` };
  }

  positionNudgeActionPill(courseId) {
    if (!this.gridCourseActionPill || !this.phoneCanvas) return;
    const cardEl = this.universalTimetableGrid?.querySelector(`.exact-course-card[data-id="${courseId}"]`);
    if (!cardEl) return;

    // Update labels depending on whether timetable is in period mode or standard time mode
    const isPeriodMode = (this.axisMode === 'period');
    const labelMinus = document.getElementById('nudge-label-minus');
    const labelPlus = document.getElementById('nudge-label-plus');
    if (labelMinus) labelMinus.innerText = isPeriodMode ? '-1' : '-30m';
    if (labelPlus) labelPlus.innerText = isPeriodMode ? '+1' : '+30m';

    this.gridCourseActionPill.classList.remove('hidden');

    // Use viewport (fixed) coordinates — pill is now outside phone DOM so no clipping by bezel
    const cardRect = cardEl.getBoundingClientRect();
    const canvasRect = this.phoneCanvas.getBoundingClientRect();

    // Measure pill actual dimensions
    const pillWidth = this.gridCourseActionPill.offsetWidth || 250;
    const pillHeight = this.gridCourseActionPill.offsetHeight || 38;
    const halfPill = pillWidth / 2;
    const margin = 8;

    // Horizontal: center over card, clamp inside viewport
    let leftPos = cardRect.left + cardRect.width / 2 - halfPill;
    leftPos = Math.max(margin, Math.min(window.innerWidth - pillWidth - margin, leftPos));

    // Vertical: prefer above card, flip below if it would overlap the canvas top edge
    const topAboveCard = cardRect.top - pillHeight - margin;
    const topBelowCard = cardRect.bottom + margin;

    let topPos;
    if (topAboveCard >= canvasRect.top + 4) {
      // Enough space above — place above the card
      topPos = topAboveCard;
    } else {
      // Too close to top — flip below the card
      topPos = topBelowCard;
    }

    // Clamp vertically inside viewport
    topPos = Math.max(margin, Math.min(window.innerHeight - pillHeight - margin, topPos));

    // Apply as fixed viewport coords
    this.gridCourseActionPill.style.left = `${leftPos}px`;
    this.gridCourseActionPill.style.top = `${topPos}px`;
    // Clear any stale `position` overrides (pill is now fixed via CSS class)
    this.gridCourseActionPill.style.transform = 'none';
  }

  moveCourseToSlot(courseId, targetDay, slotTarget) {
    const course = this.classes.find(c => String(c.id) === String(courseId));
    if (!course) return;

    this.recordHistoryState();

    const [sh, sm] = course.startTime.split(':').map(Number);
    const [eh, em] = course.endTime.split(':').map(Number);
    const durationMinutes = ((eh * 60) + (em || 0)) - ((sh * 60) + (sm || 0));

    // Save undo state
    this.lastSwapUndoState = {
      type: 'move',
      courseId: course.id,
      prevDay: course.day,
      prevStart: course.startTime,
      prevEnd: course.endTime,
      prevPeriod: course.periodNumber
    };

    const isTargetPeriod = slotTarget && (slotTarget.isPeriod || typeof slotTarget.period === 'number');

    if (isTargetPeriod) {
      const targetPeriod = slotTarget.period;
      course.day = targetDay;
      course.periodNumber = targetPeriod;
      const periodSlot = this.getPeriodTimeSlot(targetPeriod);
      course.startTime = periodSlot.start;
      course.endTime = periodSlot.end;
      this.showSwapToast(`Moved ${course.code} to ${targetDay} (Period ${targetPeriod})`);
    } else {
      const targetHour = (typeof slotTarget === 'object' && slotTarget.hour !== undefined) ? slotTarget.hour : Number(slotTarget);
      const newStartH = targetHour;
      const newStartM = sm || 0;
      const newStartTotalM = (newStartH * 60) + newStartM;
      const newEndTotalM = newStartTotalM + Math.max(15, durationMinutes);

      const formatTimeStr = (totalM) => {
        const h = Math.min(23, Math.floor(totalM / 60)).toString().padStart(2, '0');
        const m = (totalM % 60).toString().padStart(2, '0');
        return `${h}:${m}`;
      };

      course.day = targetDay;
      course.startTime = formatTimeStr(newStartTotalM);
      course.endTime = formatTimeStr(newEndTotalM);
      if (course.periodNumber !== undefined && this.axisMode !== 'period') {
        delete course.periodNumber;
      }
      this.showSwapToast(`Moved ${course.code} to ${targetDay} ${course.startTime}`);
    }

    this.onCourseScheduleChanged();
  }

  swapCoursesDirectly(courseId1, courseId2) {
    const c1 = this.classes.find(c => String(c.id) === String(courseId1));
    const c2 = this.classes.find(c => String(c.id) === String(courseId2));
    if (!c1 || !c2) return;

    this.recordHistoryState();

    // Save undo state
    this.lastSwapUndoState = {
      type: 'swap',
      c1: { id: c1.id, day: c1.day, start: c1.startTime, end: c1.endTime, period: c1.periodNumber },
      c2: { id: c2.id, day: c2.day, start: c2.startTime, end: c2.endTime, period: c2.periodNumber }
    };

    // Swap day, start times, and period numbers
    const c1Dur = this.getCourseDurationMinutes(c1);
    const c2Dur = this.getCourseDurationMinutes(c2);

    const c1NewDay = c2.day;
    const c1NewStart = c2.startTime;
    const c1NewPeriod = c2.periodNumber;

    const c2NewDay = c1.day;
    const c2NewStart = c1.startTime;
    const c2NewPeriod = c1.periodNumber;

    c1.day = c1NewDay;
    c1.startTime = c1NewStart;
    c1.periodNumber = c1NewPeriod;
    c1.endTime = this.calcEndTimeFromStart(c1NewStart, c1Dur);

    c2.day = c2NewDay;
    c2.startTime = c2NewStart;
    c2.periodNumber = c2NewPeriod;
    c2.endTime = this.calcEndTimeFromStart(c2NewStart, c2Dur);

    this.showSwapToast(`Swapped ${c1.code} and ${c2.code}`);
    this.onCourseScheduleChanged();
  }

  nudgeSelectedCourseTime(offsetUnits) {
    if (!this.activeSwapCourseId) return;
    const course = this.classes.find(c => String(c.id) === String(this.activeSwapCourseId));
    if (!course) return;

    this.recordHistoryState();

    // PERIOD MODE NUDGE
    if (this.axisMode === 'period') {
      const currentPeriod = course.periodNumber || 1;
      const userPeriodCount = this.gridPeriodCount || 6;
      const delta = offsetUnits > 0 ? 1 : -1;
      const newPeriod = Math.max(1, Math.min(userPeriodCount, currentPeriod + delta));

      if (newPeriod === currentPeriod) return; // reached edge

      this.lastSwapUndoState = {
        type: 'nudgePeriod',
        courseId: course.id,
        prevPeriod: course.periodNumber,
        prevStart: course.startTime,
        prevEnd: course.endTime
      };

      course.periodNumber = newPeriod;
      const periodSlot = this.getPeriodTimeSlot(newPeriod);
      course.startTime = periodSlot.start;
      course.endTime = periodSlot.end;

      this.showSwapToast(`Shifted ${course.code} to Period ${newPeriod}`);
      this.onCourseScheduleChanged();
      this.positionNudgeActionPill(course.id);
      return;
    }

    // STANDARD TIME MODE NUDGE (offset in minutes, e.g. +30 or -30)
    const offsetMinutes = offsetUnits;
    const [sh, sm] = course.startTime.split(':').map(Number);
    const [eh, em] = course.endTime.split(':').map(Number);
    const startM = (sh * 60) + (sm || 0);
    const endM = (eh * 60) + (em || 0);
    const duration = Math.max(15, endM - startM);

    const newStartM = Math.max(0, Math.min(23 * 60, startM + offsetMinutes));
    const newEndM = newStartM + duration;

    // Save undo state
    this.lastSwapUndoState = {
      type: 'nudge',
      courseId: course.id,
      prevStart: course.startTime,
      prevEnd: course.endTime
    };

    const formatTimeStr = (totalM) => {
      const h = Math.min(23, Math.floor(totalM / 60)).toString().padStart(2, '0');
      const m = (totalM % 60).toString().padStart(2, '0');
      return `${h}:${m}`;
    };

    course.startTime = formatTimeStr(newStartM);
    course.endTime = formatTimeStr(newEndM);

    this.showSwapToast(`Shifted ${course.code} ${offsetMinutes > 0 ? '+30m' : '-30m'} (${course.startTime})`);
    this.onCourseScheduleChanged();
    this.positionNudgeActionPill(course.id);
  }

  undoLastCourseSwap() {
    if (!this.lastSwapUndoState) return;
    const state = this.lastSwapUndoState;

    if (state.type === 'move') {
      const c = this.classes.find(x => String(x.id) === String(state.courseId));
      if (c) {
        c.day = state.prevDay;
        c.startTime = state.prevStart;
        c.endTime = state.prevEnd;
        if (state.prevPeriod !== undefined) c.periodNumber = state.prevPeriod;
      }
    } else if (state.type === 'swap') {
      const c1 = this.classes.find(x => String(x.id) === String(state.c1.id));
      const c2 = this.classes.find(x => String(x.id) === String(state.c2.id));
      if (c1) {
        c1.day = state.c1.day;
        c1.startTime = state.c1.start;
        c1.endTime = state.c1.end;
        if (state.c1.period !== undefined) c1.periodNumber = state.c1.period;
      }
      if (c2) {
        c2.day = state.c2.day;
        c2.startTime = state.c2.start;
        c2.endTime = state.c2.end;
        if (state.c2.period !== undefined) c2.periodNumber = state.c2.period;
      }
    } else if (state.type === 'nudge') {
      const c = this.classes.find(x => String(x.id) === String(state.courseId));
      if (c) {
        c.startTime = state.prevStart;
        c.endTime = state.prevEnd;
      }
    } else if (state.type === 'nudgePeriod') {
      const c = this.classes.find(x => String(x.id) === String(state.courseId));
      if (c) {
        c.periodNumber = state.prevPeriod;
        c.startTime = state.prevStart;
        c.endTime = state.prevEnd;
      }
    }

    this.lastSwapUndoState = null;
    this.hideSwapToast();
    this.deselectSwapCourse();
    this.onCourseScheduleChanged();
  }

  getCourseDurationMinutes(c) {
    const [sh, sm] = (c.startTime || '08:00').split(':').map(Number);
    const [eh, em] = (c.endTime || '10:00').split(':').map(Number);
    return Math.max(15, ((eh * 60) + (em || 0)) - ((sh * 60) + (sm || 0)));
  }

  calcEndTimeFromStart(startTimeStr, durationMinutes) {
    const [sh, sm] = startTimeStr.split(':').map(Number);
    const startM = (sh * 60) + (sm || 0);
    const endM = startM + durationMinutes;
    const h = Math.min(23, Math.floor(endM / 60)).toString().padStart(2, '0');
    const m = (endM % 60).toString().padStart(2, '0');
    return `${h}:${m}`;
  }

  // =========================================================================
  // GLOBAL UNDO & REDO HISTORY ENGINE
  // =========================================================================

  recordHistoryState() {
    if (this._isPerformingHistoryAction) return;
    const snapshot = JSON.stringify(this.classes);
    // Don't record if state is identical to top of stack
    if (this.historyUndoStack.length > 0 && this.historyUndoStack[this.historyUndoStack.length - 1] === snapshot) {
      return;
    }
    this.historyUndoStack.push(snapshot);
    // Limit stack size to 30 to conserve memory
    if (this.historyUndoStack.length > 30) {
      this.historyUndoStack.shift();
    }
    // Any new action clears redo stack
    this.historyRedoStack = [];
    this.updateHistoryButtonUI();
  }

  updateHistoryButtonUI() {
    if (this.btnHistoryUndo) {
      if (this.historyUndoStack.length > 0) {
        this.btnHistoryUndo.removeAttribute('disabled');
        this.btnHistoryUndo.classList.remove('opacity-40', 'cursor-not-allowed');
      } else {
        this.btnHistoryUndo.setAttribute('disabled', 'true');
        this.btnHistoryUndo.classList.add('opacity-40', 'cursor-not-allowed');
      }
    }

    if (this.btnHistoryRedo) {
      if (this.historyRedoStack.length > 0) {
        this.btnHistoryRedo.removeAttribute('disabled');
        this.btnHistoryRedo.classList.remove('opacity-40', 'cursor-not-allowed');
      } else {
        this.btnHistoryRedo.setAttribute('disabled', 'true');
        this.btnHistoryRedo.classList.add('opacity-40', 'cursor-not-allowed');
      }
    }
  }

  undoGlobalHistory() {
    if (this.historyUndoStack.length === 0) return;

    this._isPerformingHistoryAction = true;
    const currentSnapshot = JSON.stringify(this.classes);
    this.historyRedoStack.push(currentSnapshot);

    const previousSnapshot = this.historyUndoStack.pop();
    try {
      this.classes = JSON.parse(previousSnapshot);
    } catch (e) {
      console.error('Error parsing undo state:', e);
    }

    this._isPerformingHistoryAction = false;
    this.updateHistoryButtonUI();
    this.deselectSwapCourse();
    this.showSwapToast('Action Undone');

    // Haptic feedback
    if (navigator.vibrate) {
      try { navigator.vibrate(18); } catch (err) {}
    }

    this._stagePending();
    this.renderTimetableGrid();
    this.renderClassList();
    if (this.timetableEngine && typeof this.timetableEngine.detectClashes === 'function') {
      this.checkClashes();
    }
  }

  redoGlobalHistory() {
    if (this.historyRedoStack.length === 0) return;

    this._isPerformingHistoryAction = true;
    const currentSnapshot = JSON.stringify(this.classes);
    this.historyUndoStack.push(currentSnapshot);

    const nextSnapshot = this.historyRedoStack.pop();
    try {
      this.classes = JSON.parse(nextSnapshot);
    } catch (e) {
      console.error('Error parsing redo state:', e);
    }

    this._isPerformingHistoryAction = false;
    this.updateHistoryButtonUI();
    this.deselectSwapCourse();
    this.showSwapToast('Action Redone');

    // Haptic feedback
    if (navigator.vibrate) {
      try { navigator.vibrate(18); } catch (err) {}
    }

    this._stagePending();
    this.renderTimetableGrid();
    this.renderClassList();
    if (this.timetableEngine && typeof this.timetableEngine.detectClashes === 'function') {
      this.checkClashes();
    }
  }

  onCourseScheduleChanged() {
    // Haptic feedback
    if (navigator.vibrate) {
      try { navigator.vibrate(24); } catch (err) {}
    }
    this.updateHistoryButtonUI();
    this._stagePending();
    this.renderTimetableGrid();
    this.renderClassList();
    if (this.timetableEngine && typeof this.timetableEngine.detectClashes === 'function') {
      this.checkClashes();
    }
  }

  showSwapToast(msg) {
    if (!this.gridSwapToast) return;
    if (this.gridSwapToastMsg) this.gridSwapToastMsg.innerText = msg;
    this.gridSwapToast.classList.remove('hidden');
    if (this._swapToastTimer) clearTimeout(this._swapToastTimer);
    this._swapToastTimer = setTimeout(() => {
      this.hideSwapToast();
    }, 4500);
  }

  hideSwapToast() {
    if (this.gridSwapToast) {
      this.gridSwapToast.classList.add('hidden');
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

    // Adaptive watch clock font: Black in light mode, White in dark mode or wallpaper
    const lockTime = document.getElementById('lock-time');
    const lockDate = document.getElementById('lock-date');
    if (lockTime) {
      lockTime.style.removeProperty('color');
      lockTime.style.removeProperty('text-shadow');
    }
    if (lockDate) {
      lockDate.style.removeProperty('color');
      lockDate.style.removeProperty('text-shadow');
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
      card.setAttribute('data-id', c.id);
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        this.highlightCourseInScheduleList(c.id);
      });
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
        this.recordHistoryState();
        this.classes = this.classes.filter(x => String(x.id) !== String(courseId));
        this.renderAll();
        this.updateHistoryButtonUI();
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
        c.color = pickedColor;
        c.isManualCustomColor = true;
        this.globalAdaptiveColor = false;
        document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-val') === 'no');
        });
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
          c.color = pickedColor;
          c.isManualCustomColor = true;
          this.globalAdaptiveColor = false;
          document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-val') === 'no');
          });
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

  highlightCourseInScheduleList(courseId) {
    if (courseId === undefined || courseId === null) return;

    // 1. If right sidebar is collapsed, automatically expand it so the schedule list is visible
    const rightSidebar = document.getElementById('right-sidebar');
    if (rightSidebar && rightSidebar.classList.contains('sidebar-collapsed-right')) {
      if (typeof this.toggleRightSidebar === 'function') {
        this.toggleRightSidebar(false);
      } else {
        rightSidebar.classList.remove('sidebar-collapsed-right');
      }
    }

    // 2. If search filter is active and hides this course, clear search filter so all courses are visible
    if (this.searchQuery) {
      if (this.courseSearchInput) this.courseSearchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn?.classList.add('hidden');
      this.renderClassList();
    }

    // 3. Find the card container
    const container = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    if (!container) return;

    // 4. Locate target card by ID (with fallback matching by code, title, and day)
    let targetCard = null;
    const allCards = container.querySelectorAll('.class-item-card');
    
    // Primary match: exact or string-converted data-id
    allCards.forEach(card => {
      if (String(card.getAttribute('data-id')) === String(courseId)) {
        targetCard = card;
      }
    });

    // Secondary match fallback: match by course properties if course object is provided or looked up
    if (!targetCard && this.classes && Array.isArray(this.classes)) {
      const matchedObj = this.classes.find(c => String(c.id) === String(courseId));
      if (matchedObj) {
        allCards.forEach(card => {
          const cardId = card.getAttribute('data-id');
          const cObj = this.classes.find(x => String(x.id) === String(cardId));
          if (cObj && cObj.code === matchedObj.code && cObj.day === matchedObj.day && cObj.startTime === matchedObj.startTime) {
            targetCard = card;
          }
        });
      }
    }

    if (!targetCard) return;

    // 5. ACCORDION ISOLATION: Collapse ALL other course cards so only the target course expands
    allCards.forEach(card => {
      if (card !== targetCard) {
        const otherEditor = card.querySelector('.class-card-editor');
        const otherArrow = card.querySelector('.class-expand-arrow');
        if (otherEditor && !otherEditor.classList.contains('hidden')) {
          otherEditor.classList.add('hidden');
        }
        if (otherArrow && otherArrow.classList.contains('open')) {
          otherArrow.classList.remove('open');
        }
        card.classList.remove('highlight-target-course');
      }
    });

    // 6. Expand ONLY the clicked target card
    const editor = targetCard.querySelector('.class-card-editor');
    const arrow = targetCard.querySelector('.class-expand-arrow');
    if (editor) {
      editor.classList.remove('hidden');
    }
    if (arrow) {
      arrow.classList.add('open');
    }
    requestAnimationFrame(() => window.syncGlassSliders?.());

    // 7. CONTAINER-LOCAL SMOOTH SCROLL: Scroll container without jarring page/window jumps
    const containerRect = container.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();
    const currentScroll = container.scrollTop;
    const scrollDelta = cardRect.top - containerRect.top - 16;
    container.scrollTo({
      top: Math.max(0, currentScroll + scrollDelta),
      behavior: 'smooth'
    });

    // 8. Trigger tactile spring pulse animation and haptic feedback
    targetCard.classList.remove('highlight-target-course');
    void targetCard.offsetWidth; // Force CSS reflow to restart keyframe
    targetCard.classList.add('highlight-target-course');

    if (navigator.vibrate) {
      try { navigator.vibrate(22); } catch (e) {}
    }

    // Auto-remove highlight class after animation settles
    if (targetCard._highlightTimer) clearTimeout(targetCard._highlightTimer);
    targetCard._highlightTimer = setTimeout(() => {
      targetCard.classList.remove('highlight-target-course');
      targetCard._highlightTimer = null;
    }, 2000);
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
      if (this.courseSearchDock) this.courseSearchDock.classList.add('hidden');
      return;
    }
    if (emptyStateWrapper) emptyStateWrapper.style.display = 'none';
    if (this.courseSearchDock) this.courseSearchDock.classList.remove('hidden');

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
          <!-- Display Time Row & Nested Format Submenu -->
          <div class="editor-field-cell" style="gap: 6px;">
            <div class="editor-row" style="margin: 0;">
              <span class="editor-swatch-title" style="font-size: 11px;">${i18n ? i18n.get('displayTime') : 'Display Time'}</span>
              <div class="pill-toggle-group edit-display-time">
                <button type="button" class="pill-btn ${c.displayTime !== false ? 'active' : ''}" data-val="yes">YES</button>
                <button type="button" class="pill-btn ${c.displayTime === false ? 'active' : ''}" data-val="no">NO</button>
              </div>
            </div>

            <div class="quick-time-submenu-box edit-time-format-row ${c.displayTime === false ? 'hidden' : ''}" style="padding: 6px 8px; border-radius: 10px; margin-top: 2px;">
              <div class="flex items-center justify-between w-full mb-1">
                <span class="submenu-header-label" style="font-size: 9.5px;">${i18n ? i18n.get('cardTimeFormat') : 'Card Time Format'}</span>
                <span class="quick-time-badge edit-course-time-badge" style="font-size: 9.5px; padding: 1px 6px;">${c.timeFormat === 'both' ? 'Start & End' : (c.timeFormat === 'end' ? 'End Only' : 'Start Only')}</span>
              </div>
              <div class="time-display-mode-container edit-course-time-format w-full">
                <button type="button" class="time-mode-btn ${(!c.timeFormat || c.timeFormat === 'start') ? 'active' : ''}" data-timemode="start">Start Only</button>
                <button type="button" class="time-mode-btn ${c.timeFormat === 'both' ? 'active' : ''}" data-timemode="both">Start &amp; End</button>
                <button type="button" class="time-mode-btn ${c.timeFormat === 'end' ? 'active' : ''}" data-timemode="end">End Only</button>
              </div>
            </div>
          </div>

          <!-- Dual Column Grid: Code & Day -->
          <div class="editor-grid-2col">
            <div class="editor-field-cell" style="grid-column: span 1;">
              <label>${lblCourseCode}</label>
              <input type="text" class="m3-input edit-code" value="${c.code}" placeholder="e.g. CS101">
            </div>
            <div class="editor-field-cell" style="grid-column: span 1;">
              <label>${lblDay}</label>
              <select class="m3-input-time edit-day">
                <option value="Mon" ${c.day && c.day.startsWith('Mon') ? 'selected' : ''}>${i18n ? i18n.getDayName('Mon') : 'Mon'}</option>
                <option value="Tue" ${c.day && c.day.startsWith('Tue') ? 'selected' : ''}>${i18n ? i18n.getDayName('Tue') : 'Tue'}</option>
                <option value="Wed" ${c.day && c.day.startsWith('Wed') ? 'selected' : ''}>${i18n ? i18n.getDayName('Wed') : 'Wed'}</option>
                <option value="Thu" ${c.day && c.day.startsWith('Thu') ? 'selected' : ''}>${i18n ? i18n.getDayName('Thu') : 'Thu'}</option>
                <option value="Fri" ${c.day && c.day.startsWith('Fri') ? 'selected' : ''}>${i18n ? i18n.getDayName('Fri') : 'Fri'}</option>
              </select>
            </div>
          </div>

          <!-- Dual Column Grid: Start Time & End Time -->
          <div class="editor-grid-2col">
            <div class="editor-field-cell">
              <label>${lblStart}</label>
              <select class="m3-input-time edit-start">
                <option value="00:00" ${c.startTime === '00:00' ? 'selected' : ''}>12:00 AM (Midnight)</option>
                <option value="01:00" ${c.startTime === '01:00' ? 'selected' : ''}>01:00 AM</option>
                <option value="02:00" ${c.startTime === '02:00' ? 'selected' : ''}>02:00 AM</option>
                <option value="03:00" ${c.startTime === '03:00' ? 'selected' : ''}>03:00 AM</option>
                <option value="04:00" ${c.startTime === '04:00' ? 'selected' : ''}>04:00 AM</option>
                <option value="05:00" ${c.startTime === '05:00' ? 'selected' : ''}>05:00 AM</option>
                <option value="06:00" ${c.startTime === '06:00' ? 'selected' : ''}>06:00 AM</option>
                <option value="07:00" ${c.startTime === '07:00' ? 'selected' : ''}>07:00 AM</option>
                <option value="08:00" ${c.startTime === '08:00' ? 'selected' : ''}>08:00 AM</option>
                <option value="09:00" ${c.startTime === '09:00' || !c.startTime ? 'selected' : ''}>09:00 AM</option>
                <option value="10:00" ${c.startTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
                <option value="11:00" ${c.startTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
                <option value="12:00" ${c.startTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
                <option value="13:00" ${c.startTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
                <option value="14:00" ${c.startTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
                <option value="15:00" ${c.startTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
                <option value="16:00" ${c.startTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
                <option value="17:00" ${c.startTime === '17:00' ? 'selected' : ''}>05:00 PM</option>
                <option value="18:00" ${c.startTime === '18:00' ? 'selected' : ''}>06:00 PM</option>
                <option value="19:00" ${c.startTime === '19:00' ? 'selected' : ''}>07:00 PM</option>
                <option value="20:00" ${c.startTime === '20:00' ? 'selected' : ''}>08:00 PM</option>
                <option value="21:00" ${c.startTime === '21:00' ? 'selected' : ''}>09:00 PM</option>
                <option value="22:00" ${c.startTime === '22:00' ? 'selected' : ''}>10:00 PM</option>
                <option value="23:00" ${c.startTime === '23:00' ? 'selected' : ''}>11:00 PM</option>
              </select>
            </div>
            <div class="editor-field-cell">
              <label>${lblEnd}</label>
              <select class="m3-input-time edit-end">
                <option value="01:00" ${c.endTime === '01:00' ? 'selected' : ''}>01:00 AM</option>
                <option value="02:00" ${c.endTime === '02:00' ? 'selected' : ''}>02:00 AM</option>
                <option value="03:00" ${c.endTime === '03:00' ? 'selected' : ''}>03:00 AM</option>
                <option value="04:00" ${c.endTime === '04:00' ? 'selected' : ''}>04:00 AM</option>
                <option value="05:00" ${c.endTime === '05:00' ? 'selected' : ''}>05:00 AM</option>
                <option value="06:00" ${c.endTime === '06:00' ? 'selected' : ''}>06:00 AM</option>
                <option value="07:00" ${c.endTime === '07:00' ? 'selected' : ''}>07:00 AM</option>
                <option value="08:00" ${c.endTime === '08:00' ? 'selected' : ''}>08:00 AM</option>
                <option value="09:00" ${c.endTime === '09:00' ? 'selected' : ''}>09:00 AM</option>
                <option value="10:00" ${c.endTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
                <option value="11:00" ${c.endTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
                <option value="12:00" ${c.endTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
                <option value="13:00" ${c.endTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
                <option value="14:00" ${c.endTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
                <option value="15:00" ${c.endTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
                <option value="16:00" ${c.endTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
                <option value="17:00" ${c.endTime === '17:00' || !c.endTime ? 'selected' : ''}>05:00 PM</option>
                <option value="18:00" ${c.endTime === '18:00' ? 'selected' : ''}>06:00 PM</option>
                <option value="19:00" ${c.endTime === '19:00' ? 'selected' : ''}>07:00 PM</option>
                <option value="20:00" ${c.endTime === '20:00' ? 'selected' : ''}>08:00 PM</option>
                <option value="21:00" ${c.endTime === '21:00' ? 'selected' : ''}>09:00 PM</option>
                <option value="22:00" ${c.endTime === '22:00' ? 'selected' : ''}>10:00 PM</option>
                <option value="23:00" ${c.endTime === '23:00' ? 'selected' : ''}>11:00 PM</option>
                <option value="24:00" ${c.endTime === '24:00' || c.endTime === '00:00' ? 'selected' : ''}>12:00 AM (Midnight)</option>
              </select>
            </div>
          </div>

          <!-- Dual Column Grid: Type & Room -->
          <div class="editor-grid-2col">
            <div class="editor-field-cell">
              <label>${lblType}</label>
              <input type="text" class="m3-input edit-type" value="${c.type || ''}" placeholder="e.g. Lecture">
            </div>
            <div class="editor-field-cell">
              <label>${lblRoom}</label>
              <input type="text" class="m3-input edit-room" value="${c.room || ''}" placeholder="e.g. Hall A">
            </div>
          </div>

          <!-- Dual Column Grid: Lecturer & Group -->
          <div class="editor-grid-2col">
            <div class="editor-field-cell">
              <label>${lblLecturer}</label>
              <input type="text" class="m3-input edit-lecturer" value="${c.lecturer || ''}" placeholder="Instructor">
            </div>
            <div class="editor-field-cell">
              <label>${lblGroup}</label>
              <input type="text" class="m3-input edit-group" value="${c.group || ''}" placeholder="e.g. G1 / Sec 2">
            </div>
          </div>

          <!-- Compact Swatch Dock: Grid Swatch -->
          <div class="editor-swatch-dock">
            <span class="editor-swatch-title">Course Color:</span>
            <div class="mini-swatch-grid">
              ${swatchBtnsHTML}
            </div>
          </div>

          <!-- Compact Swatch Dock: Font Swatch -->
          <div class="editor-swatch-dock">
            <span class="editor-swatch-title">Text Color:</span>
            <div class="mini-swatch-grid">
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

    // Use getBoundingClientRect for accurate positioning in any layout (flex, grid, etc.)
    // Divide by scaleX to convert viewport coords → local CSS px, handling parent transform animations
    const groupRect = group.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const scaleX = groupRect.width > 0 ? (groupRect.width / group.offsetWidth) : 1;
    let left = (btnRect.left - groupRect.left) / scaleX;
    let width = btnRect.width / scaleX;

    // Sanity check: fall back to mathematical positioning if rects are unavailable
    // (e.g. element is hidden / not yet laid out, or offsetWidth is 0)
    if (width <= 0 || groupRect.width <= 0 || group.offsetWidth <= 0) {
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
    let moveRaf = null;

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

      if (moveRaf) cancelAnimationFrame(moveRaf);
      moveRaf = requestAnimationFrame(() => {
        thumb.style.transform = `translateX(${currentLeft}px) scale(${stretchX}, ${stretchY})`;
      });
    }, { passive: true });

    const endDrag = (e) => {
      if (!isDragging) return;
      if (moveRaf) cancelAnimationFrame(moveRaf);
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
  if (e.pointerType === 'touch' || window.innerWidth <= 1024) return;
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
      refThickness: 14,
      blur: '10px',
      refFactor: 1.55,
      refDispersion: 3.5,
      glareAngle: -45,
      glareFactor: 135,
      glareOppositeFactor: 90,
      refFresnelFactor: 18,
      saturate: '160%',
      contrast: '104%',
      brightness: '1.04',
      mergeRate: 0.04,
      springSizeFactor: 12
    },
    frosted: {
      name: 'Frosted',
      refThickness: 24,
      blur: '14px',
      refFactor: 1.15,
      refDispersion: 2.0,
      glareAngle: -35,
      glareFactor: 58,
      glareOppositeFactor: 48,
      refFresnelFactor: 35,
      saturate: '140%',
      contrast: '100%',
      brightness: '1.02',
      mergeRate: 0.08,
      springSizeFactor: 8
    },
    fluid: {
      name: 'Fluid',
      refThickness: 18,
      blur: '12px',
      refFactor: 1.48,
      refDispersion: 8.0,
      glareAngle: -45,
      glareFactor: 110,
      glareOppositeFactor: 95,
      refFresnelFactor: 28,
      saturate: '170%',
      contrast: '106%',
      brightness: '1.05',
      mergeRate: 0.16,
      springSizeFactor: 18
    },
    prism: {
      name: 'Prism',
      refThickness: 22,
      blur: '14px',
      refFactor: 1.72,
      refDispersion: 16.0,
      glareAngle: -60,
      glareFactor: 135,
      glareOppositeFactor: 100,
      refFresnelFactor: 45,
      saturate: '170%',
      contrast: '106%',
      brightness: '1.06',
      mergeRate: 0.06,
      springSizeFactor: 15
    }
  };

  let activePresetKey = 'crystal';

  // Apply Preset Configuration to Schedully CSS Variables
  window.applyLiquidGlassConfig = function(cfg, presetKey) {
    if (!cfg) return;
    const s = cfg.controls || cfg;
    const thicknessPx = `${s.refThickness || 20}px`;
    const blurPx = s.blur || `${Math.max(4, Math.round((s.refThickness || 20) * 0.8))}px`;
    const glareFactor = ((s.glareFactor !== undefined ? s.glareFactor : 90) / 100).toFixed(2);
    const glareOpposite = ((s.glareOppositeFactor !== undefined ? s.glareOppositeFactor : 80) / 100).toFixed(2);
    const dispersion = s.refDispersion !== undefined ? s.refDispersion : 7;
    const glareAngleDeg = `${s.glareAngle !== undefined ? s.glareAngle : -45}deg`;
    const dispersionCyan = `rgba(96, 165, 250, ${((dispersion / 20) * 0.85).toFixed(2)})`;
    const dispersionPink = `rgba(244, 114, 182, ${((dispersion / 20) * 0.7).toFixed(2)})`;
    const fresnelFactor = ((s.refFresnelFactor !== undefined ? s.refFresnelFactor : 20) / 100).toFixed(2);
    const saturateVal = s.saturate || '190%';
    const contrastVal = s.contrast || '105%';
    const brightnessVal = s.brightness || '1.04';

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
    root.style.setProperty('--glass-preset-saturate', saturateVal);
    root.style.setProperty('--glass-preset-contrast', contrastVal);
    root.style.setProperty('--glass-preset-brightness', brightnessVal);

    if (presetKey) {
      activePresetKey = presetKey;
      const label = document.getElementById('active-glass-preset-label');
      if (label) label.textContent = presets[presetKey]?.name || presetKey;

      // Update active body preset classes
      const allPresets = ['crystal', 'frosted', 'fluid', 'prism'];
      allPresets.forEach(p => {
        document.body.classList.remove(`glass-preset-${p}`);
        document.documentElement.classList.remove(`glass-preset-${p}`);
      });
      document.body.classList.add(`glass-preset-${presetKey}`);
      document.documentElement.classList.add(`glass-preset-${presetKey}`);

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
    if (window.schedullyApp && typeof window.schedullyApp.renderTimetableGrid === 'function') {
      window.schedullyApp.renderTimetableGrid();
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
  const btnFloatingDefault = document.getElementById('btn-floating-style-default');
  const btnFloatingGlass = document.getElementById('btn-floating-style-glass');
  const floatingStyleLabel = document.getElementById('floating-active-theme-style-label');
  const glassPresetsSection = document.getElementById('liquid-glass-presets-section');

  const applyThemeStyle = (style) => {
    const isDefault = style !== 'glass';
    const effectiveStyle = isDefault ? 'default' : 'glass';
    
    if (isDefault) {
      document.body.classList.add('theme-style-default');
      document.body.classList.remove('theme-style-glass');
      if (btnDefault) btnDefault.classList.add('active');
      if (btnGlass) btnGlass.classList.remove('active');
      if (btnFloatingDefault) btnFloatingDefault.classList.add('active');
      if (btnFloatingGlass) btnFloatingGlass.classList.remove('active');
      if (styleLabel) styleLabel.textContent = 'Default';
      if (floatingStyleLabel) floatingStyleLabel.textContent = 'DEFAULT';
      if (glassPresetsSection) glassPresetsSection.classList.add('disabled-preset-section');
    } else {
      document.body.classList.remove('theme-style-default');
      document.body.classList.add('theme-style-glass');
      if (btnDefault) btnDefault.classList.remove('active');
      if (btnGlass) btnGlass.classList.add('active');
      if (btnFloatingDefault) btnFloatingDefault.classList.remove('active');
      if (btnFloatingGlass) btnFloatingGlass.classList.add('active');
      if (styleLabel) styleLabel.textContent = 'Glass';
      if (floatingStyleLabel) floatingStyleLabel.textContent = '✦ GLASS';
      if (glassPresetsSection) glassPresetsSection.classList.remove('disabled-preset-section');
    }

    try {
      localStorage.setItem('schedully_theme_style', effectiveStyle);
    } catch (e) {}

    if (window.schedullyApp && typeof window.schedullyApp.renderTimetableGrid === 'function') {
      window.schedullyApp.renderTimetableGrid();
    }
    if (typeof window.syncGlassSliders === 'function') {
      window.syncGlassSliders();
    }
  };
  window.applyThemeStyle = applyThemeStyle;

  if (btnDefault) {
    btnDefault.addEventListener('click', () => applyThemeStyle('default'));
  }
  if (btnGlass) {
    btnGlass.addEventListener('click', () => applyThemeStyle('glass'));
  }

  // Restore saved theme style on load (Strictly default to 'default')
  try {
    const savedStyle = localStorage.getItem('schedully_theme_style') || 'default';
    applyThemeStyle(savedStyle);
  } catch (e) {}
}

// ═══════════════════════════════════════════════════════════════
// NATIVE WEB HAPTIC FEEDBACK ENGINE (Vibration & Tactile Pulses)
// ═══════════════════════════════════════════════════════════════
class HapticFeedbackEngine {
  constructor() {
    this.enabled = localStorage.getItem('schedully_haptics_enabled') !== 'false';
    this.hasSupport = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
    this.lastTriggerTime = 0;
  }

  trigger(pattern = 'light') {
    if (!this.enabled || !this.hasSupport) return;
    try {
      const now = performance.now();
      // Throttle micro vibrations to prevent queue congestions during rapid scrubbing
      if (pattern === 'micro' || pattern === 'slider' || pattern === 'tick') {
        if (now - this.lastTriggerTime < 24) return;
      }
      this.lastTriggerTime = now;

      let vibrationPattern;
      switch (pattern) {
        case 'micro':
        case 'tick':
        case 'slider':
          vibrationPattern = 8;
          break;
        case 'light':
        case 'tap':
        case 'zoom':
          vibrationPattern = 14;
          break;
        case 'medium':
        case 'click':
        case 'preset':
        case 'palette':
        case 'glass':
          vibrationPattern = 22;
          break;
        case 'heavy':
        case 'toggle':
        case 'switch':
          vibrationPattern = 32;
          break;
        case 'success':
          vibrationPattern = [15, 60, 25];
          break;
        case 'warning':
        case 'delete':
        case 'undo':
          vibrationPattern = [28, 50, 22];
          break;
        case 'error':
          vibrationPattern = [40, 50, 40, 50, 40];
          break;
        default:
          if (Array.isArray(pattern) || typeof pattern === 'number') {
            vibrationPattern = pattern;
          } else {
            vibrationPattern = 15;
          }
      }
      navigator.vibrate(vibrationPattern);
    } catch (e) {}
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('schedully_haptics_enabled', this.enabled ? 'true' : 'false');
    } catch (e) {}
    if (this.enabled) {
      this.trigger('medium');
    }
    return this.enabled;
  }
}
window.haptics = new HapticFeedbackEngine();
window.haptic = (pattern) => window.haptics.trigger(pattern);

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
    // Coordinate tactile haptic vibration with every audio cue
    if (window.haptics) {
      window.haptics.trigger(type);
    }

    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3200, now);

      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);

      if (type === 'click') {
        // Crisp, refined macOS/iOS tactile glass click (subtle, non-childish)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1600, now);
        osc.frequency.exponentialRampToValueAtTime(480, now + 0.022);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
        osc.start(now);
        osc.stop(now + 0.025);
      } else if (type === 'toggle') {
        // Understated, elegant tactile haptic tap
        osc.type = 'sine';
        osc.frequency.setValueAtTime(820, now);
        osc.frequency.exponentialRampToValueAtTime(540, now + 0.028);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'preset' || type === 'glass') {
        // Luxury understated acoustic glass tap
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(filter);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(2093, now); // C7 pure high tone
        gain.gain.setValueAtTime(0.035, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.1);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1046.5, now); // C6 sub-body
        gain2.gain.setValueAtTime(0.025, now);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
        osc2.start(now);
        osc2.stop(now + 0.07);
      } else if (type === 'zoom') {
        // Modern ultra-short micro-tick
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.015);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
        osc.start(now);
        osc.stop(now + 0.018);
      } else if (type === 'success') {
        // Minimalist high-end two-tone completion chime
        const note1 = this.ctx.createOscillator();
        const g1 = this.ctx.createGain();
        note1.connect(g1);
        g1.connect(filter);
        note1.type = 'sine';
        note1.frequency.setValueAtTime(1174.66, now); // D6
        g1.gain.setValueAtTime(0.04, now);
        g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        note1.start(now);
        note1.stop(now + 0.13);

        const note2 = this.ctx.createOscillator();
        const g2 = this.ctx.createGain();
        note2.connect(g2);
        g2.connect(filter);
        note2.type = 'sine';
        note2.frequency.setValueAtTime(1760, now + 0.07); // A6
        g2.gain.setValueAtTime(0.045, now + 0.07);
        g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
        note2.start(now + 0.07);
        note2.stop(now + 0.24);
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
        id: 'floating-toolbar',
        target: '#floating-undo-redo-row, #bottom-floating-pill-bar',
        title: 'Floating Action & History Toolbar',
        tag: 'Action Pills',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a4 4 0 014 4v1a4 4 0 01-4 4H3M7 6L3 10l4 4M21 14h-2M21 8h-4M21 18h-4"/></svg>',
        iconTheme: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/25',
        badgeTheme: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/25',
        desc: 'Quickly Undo & Redo your layout changes, zoom the canvas in/out, toggle Dark/Light mode, and shuffle overall theme and course colors on the fly!',
        position: 'top'
      },
      {
        id: 'controls',
        target: '#canvas-controls-popover',
        title: 'Display & Canvas Controls',
        tag: 'Canvas Controls',
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',
        iconTheme: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25',
        badgeTheme: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25',
        desc: 'Switch between Smartphone, Tablet, Watch, and Paper device models, toggle phone UI lockscreen elements, and edit your schedule title!',
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
        
      if (step.id === 'floating-toolbar') {
        const undoPill = document.getElementById('floating-undo-redo-row');
        const bottomBar = document.getElementById('bottom-floating-pill-bar');
        const container = document.getElementById('floating-controls-container');
        if (undoPill && bottomBar) {
          const rUndo = undoPill.getBoundingClientRect();
          const rBottom = bottomBar.getBoundingClientRect();
          const minT = Math.min(rUndo.top, rBottom.top);
          const minL = Math.min(rUndo.left, rBottom.left);
          const maxR = Math.max(rUndo.right, rBottom.right);
          const maxB = Math.max(rUndo.bottom, rBottom.bottom);
          rect = {
            top: minT,
            left: minL,
            right: maxR,
            bottom: maxB,
            width: maxR - minL,
            height: maxB - minT
          };
        } else if (container) {
          rect = container.getBoundingClientRect();
        }
      } else if (step.id === 'export' && !isDesktopHeader) {
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
        let cardTop = window.innerHeight - cardH - 20;

        if (window.innerWidth > 1024) {
          // Desktop Studio View:
          if (step.id === 'theme-menu') {
            cardLeft = rect.right + 24;
            cardTop = Math.max(80, Math.min(window.innerHeight - cardH - 30, rect.top + 20));
          } else if (step.id === 'courses') {
            cardLeft = Math.max(20, rect.left - cardW - 24);
            cardTop = Math.max(80, Math.min(window.innerHeight - cardH - 30, rect.top + 20));
          } else if (step.id === 'floating-toolbar') {
            cardLeft = (window.innerWidth - cardW) / 2;
            cardTop = Math.max(24, rect.top - cardH - 24);
          } else if (step.id === 'controls' || step.id === 'aspect-ratio') {
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
          // Mobile & Tablet (<= 1024px / Smartphone / Tablet Drawers):
          cardLeft = (window.innerWidth - cardW) / 2;
          const targetCenterY = rect.top + (rect.height / 2);
          
          if (step.id === 'floating-toolbar') {
            // Guarantee tour card floats well above undo/redo & bottom floating toolbar
            cardTop = Math.max(16, rect.top - cardH - 20);
          } else if (targetCenterY > window.innerHeight / 2) {
            // Target is in bottom half -> Place tour card in top half (above target)
            if (rect.top - cardH - 16 >= 16) {
              cardTop = rect.top - cardH - 16;
            } else {
              cardTop = 16;
            }
          } else {
            // Target is in top half -> Place tour card in bottom half (below target)
            if (rect.bottom + cardH + 16 <= window.innerHeight - 16) {
              cardTop = rect.bottom + 16;
            } else {
              cardTop = window.innerHeight - cardH - 16;
            }
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
        if (step.id === 'floating-toolbar') {
          const undoPill = document.getElementById('floating-undo-redo-row');
          const bottomBar = document.getElementById('bottom-floating-pill-bar');
          const container = document.getElementById('floating-controls-container');
          if (undoPill) undoPill.classList.add('tour-highlighted-element');
          if (bottomBar) bottomBar.classList.add('tour-highlighted-element');
          if (container) container.classList.add('tour-highlighted-element');
        } else if (targetEl) {
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

