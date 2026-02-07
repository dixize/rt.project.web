// База данных контента (на основе ваших слайдов)
const projectsData = {
    robotics: {
        title: "Роботизация производства",
        desc: "Внедрение робототехнических комплексов для резки, сварки и паллетирования.",
        stats: ["Производительность: +30-40%", "Затраты: -20-40%", "Травматизм: -50%"],
        clients: "ОмскТрансМаш, УралТрубПром, РКЦ Прогресс"
    },
    quality: {
        title: "Контроль качества",
        desc: "Автоматизированный мониторинг дефектов с помощью ИИ на конвейерных линиях.",
        stats: ["Брак: -20-35%", "Скорость контроля: +50%", "Издержки: -15%"],
        clients: "ГАЗ, Аэропорт Шереметьево, УВЗ"
    },
    security: {
        title: "Средства охраны",
        desc: "Инженерно-технические комплексы: радары, тепловизоры и биометрический контроль.",
        stats: ["Точность: 99.9%", "Реакция: 2-3 сек", "Человеческий фактор: -40%"],
        clients: "Роснефть, МВД России, Форвард Энерго"
    },
    eco: {
        title: "Промбезопасность и Экомониторинг",
        desc: "Системы предотвращения столкновений и датчики чистоты воздуха.",
        stats: ["Аварийность: -50%", "Обнаружение угроз: 1 мин", "Стоимость устранения: -30%"],
        clients: "Норникель, ЕВРАЗ, СУЭК"
    },
    equipment: {
        title: "Технологическое оборудование",
        desc: "Локализация производства: котлы, генераторы, турбины и компрессоры.",
        stats: ["Объем выпуска: +20%", "Брак: < 1%", "Затраты на ремонт: -35%"],
        clients: "ЯЗДА, Хиагда, УВЗ"
    }
};

function openProject(key) {
    const data = projectsData[key];
    const content = `
        <h1 style="color: #001a4d; margin-bottom: 20px;">${data.title}</h1>
        <p style="font-size: 1.2rem; line-height: 1.6;">${data.desc}</p>
        <div style="display: flex; gap: 20px; margin: 40px 0; flex-wrap: wrap;">
            ${data.stats.map(s => `<div style="background: #eef2f7; padding: 20px; border-radius: 15px; flex: 1; min-width: 200px; border-bottom: 4px solid #ff4f12;"><b>${s}</b></div>`).join('')}
        </div>
        <h3>Опыт внедрения:</h3>
        <p>${data.clients}</p>
    `;
    
    document.getElementById('content-area').innerHTML = content;
    document.getElementById('project-detail').classList.add('visible');
}

function closeProject() {
    document.getElementById('project-detail').classList.remove('visible');
}

// Эффект появления карточек при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
