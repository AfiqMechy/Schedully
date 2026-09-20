
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
    this.gridStartHour = 9;
    this.gridEndHour = 17;
    this.classes = [];
    this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    this.gridWidthVal = 100;
    this.gridHeightVal = 49;
    this.gridFontSizeVal = 9;
    this.gridYPosVal = 0;

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
        if (popover) popover.classList.add('hidden');
        if (ratioPopover) ratioPopover.classList.add('hidden');
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
      const adaptiveBg = resolvedMode === 'dark'
        ? `rgba(${Math.max(10, Math.round(pr * 0.10))}, ${Math.max(15, Math.round(pg * 0.10))}, ${Math.max(25, Math.round(pb * 0.10))}, 1)`
        : `rgba(${Math.min(255, Math.round(246 + (pr - 128) * 0.05))}, ${Math.min(255, Math.round(248 + (pg - 128) * 0.05))}, ${Math.min(255, Math.round(252 + (pb - 128) * 0.05))}, 1)`;
      // Surface tinted by secondary for more variety
      const adaptiveSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(14, Math.round(sr * 0.14 + 10))}, ${Math.max(20, Math.round(sg * 0.14 + 12))}, ${Math.max(32, Math.round(sb * 0.14 + 16))}, 0.90)`
        : '#FFFFFF';
      const adaptiveVariant = resolvedMode === 'dark'
        ? `rgba(${Math.max(20, Math.round(sr * 0.18 + 15))}, ${Math.max(28, Math.round(sg * 0.18 + 18))}, ${Math.max(44, Math.round(sb * 0.18 + 22))}, 1)`
        : `rgba(${sr}, ${sg}, ${sb}, 0.12)`;
      const adaptiveGridSurface = resolvedMode === 'dark'
        ? `rgba(${Math.max(12, Math.round(pr * 0.12 + 8))}, ${Math.max(18, Math.round(pg * 0.12 + 10))}, ${Math.max(30, Math.round(pb * 0.12 + 14))}, 0.80)`
        : '#FFFFFF';

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
    }
    if (!this.userHasPickedHeaderColor) {
      this.applyHeaderColor(selectedTheme.defaultHeader || selectedTheme.bottom);
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
      this.lockTrademarkFooter.style.display = this.showTrademark ? 'inline-flex' : 'none';
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
