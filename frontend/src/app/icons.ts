import {
    createIcons,
    Activity, Cpu, Layers, Wrench, Printer, CircleCheck, Clock, Target, Hand, Scan,
    RotateCw, Radio, ArrowRight, ChevronDown, UserCheck, DollarSign, Leaf, CirclePlay,
    Microchip, ShieldCheck, Globe, Video, Camera, Mail, MapPin, Earth, CircleAlert,
    Network, Stethoscope, GraduationCap, Lightbulb, Heart, Recycle,
    Settings, Compass, FlaskConical, FileText, Terminal, Info, Sparkles
} from 'lucide';

/**
 * Solo los iconos que usa la web (antes se importaba la librería completa, ~1.600 iconos).
 * La clave es el nombre del atributo data-lucide en PascalCase.
 * Para añadir un icono nuevo: impórtalo arriba y añádelo aquí.
 */
const USED_ICONS = {
    Activity, Cpu, Layers, Wrench, Printer, Clock, Target, Hand, Scan, RotateCw, Radio,
    ArrowRight, ChevronDown, UserCheck, DollarSign, Leaf, Microchip, ShieldCheck, Globe,
    Video, Camera, Mail, MapPin, Network, Stethoscope, GraduationCap, Lightbulb, Heart, Recycle,
    Settings, Compass, FlaskConical, FileText, Terminal, Info, Sparkles,
    CheckCircle: CircleCheck,
    PlayCircle: CirclePlay,
    Globe2: Earth,
    AlertCircle: CircleAlert
};

let scheduled = false;

/**
 * Convierte los <i data-lucide="..."> en SVG.
 * Aunque varios componentes lo llamen a la vez, solo se recorre el DOM una vez por frame.
 */
export function refreshIcons(): void {
    if (scheduled || typeof window === 'undefined') return;
    scheduled = true;
    requestAnimationFrame(() => {
        scheduled = false;
        createIcons({ icons: USED_ICONS });
    });
}
