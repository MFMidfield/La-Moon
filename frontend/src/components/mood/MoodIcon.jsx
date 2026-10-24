import { Camera, Compass, Landmark, Moon, Mountain, Utensils, Waves } from 'lucide-react'

const ICONS = {
  beach: Waves,
  mountain: Mountain,
  food: Utensils,
  temple: Landmark,
  quiet: Moon,
  photo: Camera,
  adventure: Compass,
}

export default function MoodIcon({ id, size = 22, className = '' }) {
  const Icon = ICONS[id] ?? Compass
  return <Icon size={size} strokeWidth={2} aria-hidden="true" className={className} />
}
