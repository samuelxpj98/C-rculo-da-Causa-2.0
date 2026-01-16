
import React from 'react';
import { ActionType, CauseAction } from '../types';

interface StatsProps {
    actions: CauseAction[];
}

export const Stats: React.FC<StatsProps> = ({ actions }) => {
    const totalActions = actions.length;
    
    // Metas Dinâmicas solicitadas: 12, 25, 50, 100, 200
    const goals = [12, 25, 50, 100, 200, 500, 1000];
    const currentGoal = goals.find(g => g > totalActions) || goals[goals.length - 1];
    const goalProgress = Math.min((totalActions / currentGoal) * 100, 100);

    // Contagem para cor da barra líder
    const countByType = (type: ActionType) => actions.filter(a => a.action === type).length;
    const stats = [
        { type: ActionType.OREI, count: countByType(ActionType.OREI), color: 'bg-action-blue', textColor: 'text-action-blue', label: 'ORAR', icon: 'volunteer_activism', quote: "A oração não muda Deus, mas muda quem ora.", author: "C.S. Lewis" },
        { type: ActionType.CUIDEI, count: countByType(ActionType.CUIDEI), color: 'bg-action-green', textColor: 'text-action-green', label: 'CUIDAR', icon: 'potted_plant', quote: "De 100 homens, um lerá a Bíblia; os outros 99 lerão o cristão.", author: "D.L. Moody" },
        { type: ActionType.COMPARTILHEI, count: countByType(ActionType.COMPARTILHEI), color: 'bg-action-orange', textColor: 'text-action-orange', label: 'COMPARTILHAR', icon: 'forum', quote: "A única coisa que podemos levar para o céu são as pessoas.", author: "Billy Graham" },
        { type: ActionType.CONVIDEI, count: countByType(ActionType.CONVIDEI), color: 'bg-purple-600', textColor: 'text-purple-600', label: 'CONVIDAR', icon: 'person_add', quote: "Se Cristo é tudo para você, você vai querer que Ele seja tudo para os outros.", author: "Charles Spurgeon" },
    ];
    
    const leader = stats.reduce((prev, current) => (prev.count > current.count) ? prev : current);

    // Determinar cores de contraste para o texto e barra com base no fundo predominante
    const isNeonBg = leader.color === 'bg-primary';
    const mainTextColor = isNeonBg ? "text-black" : "text-white";
    const subTextColor = isNeonBg ? "text-black/40" : "text-white/60";
    const trackColor = isNeonBg ? "bg-black/10" : "bg-white/20";
    const barFillColor = isNeonBg ? "bg-black" : "bg-white";

    return (
        <div className="w-full h-full overflow-y-auto px-4 pt-24 pb-32 bg-background no-scrollbar">
            
            {/* Meta da Comunidade Dinâmica - Cores Invertidas (Fundo = Ação Líder) */}
            <div className={`${leader.color} rounded-[2.5rem] p-6 mb-8 shadow-2xl relative overflow-hidden transition-all duration-700`}>
                <div className="relative z-10 text-center">
                    <h3 className={`${subTextColor} font-black italic text-[10px] uppercase tracking-[0.3em] mb-4`}>Impacto Coletivo</h3>
                    <div className="flex items-center justify-center gap-6 mb-4">
                         <div className="text-right">
                             <p className={`${subTextColor} text-[8px] font-black uppercase`}>Feito</p>
                             <span className={`text-4xl font-black ${mainTextColor} italic leading-none`}>{totalActions}</span>
                         </div>
                         <div className={`w-px h-10 ${isNeonBg ? 'bg-black/10' : 'bg-white/20'}`} />
                         <div className="text-left">
                             <p className={`${subTextColor} text-[8px] font-black uppercase`}>Meta</p>
                             <span className={`text-4xl font-black ${mainTextColor} italic leading-none`}>{currentGoal}</span>
                         </div>
                    </div>
                    
                    {/* Barra de Progresso com Alto Contraste (Sempre Branca ou Preta sobre cor de fundo) */}
                    <div className={`w-full h-7 ${trackColor} rounded-full overflow-hidden border ${isNeonBg ? 'border-black/5' : 'border-white/10'} p-1.5 relative shadow-inner`}>
                        <div 
                            className={`h-full rounded-full transition-all duration-1000 ${barFillColor} shadow-lg`} 
                            style={{ width: `${goalProgress}%` }}
                        />
                    </div>
                    
                    <p className={`text-[10px] mt-4 font-black uppercase tracking-[0.2em] ${mainTextColor} animate-pulse`}>
                        {leader.label} ESTÁ DEFININDO O NOSSO RITMO!
                    </p>
                </div>
                
                {/* Elementos decorativos de fundo */}
                <div className="absolute -left-10 -bottom-10 opacity-10">
                    <span className={`material-symbols-outlined text-[150px] ${mainTextColor}`}>{leader.icon}</span>
                </div>
            </div>

            <div className="mb-8 pl-2">
                <h2 className="text-4xl font-black italic text-gray-900 leading-none tracking-tighter uppercase">Vibe Check</h2>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">Incucando o Reino na Mente e no Coração</p>
            </div>

            <div className="space-y-6">
                {stats.map(s => (
                    <div key={s.type} className="p-6 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                         <div className="absolute -right-4 top-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <span className="material-symbols-outlined text-9xl">{s.icon}</span>
                         </div>
                         <div className="flex items-center gap-5 mb-6 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 ${s.textColor} shadow-inner`}>
                                <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                            </div>
                            <div>
                                <h3 className={`text-[11px] font-black uppercase tracking-[0.2em] ${s.textColor}`}>{s.label}</h3>
                                <p className="text-4xl font-black text-gray-900 italic leading-none">{s.count}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 border-l-[6px] border-gray-200 relative z-10">
                            <span className={`text-4xl ${s.textColor} opacity-20 absolute -top-4 -left-1 font-serif`}>“</span>
                            <p className="text-gray-700 text-[12px] font-bold italic leading-relaxed pl-4">
                                {s.quote}
                            </p>
                            <p className="text-gray-400 text-[9px] font-black uppercase mt-4 text-right tracking-widest">— {s.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
