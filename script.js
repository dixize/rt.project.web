:root {
    --rt-blue: #101828;
    --rt-orange: #ff4f12;
    --white: #ffffff;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

body { background-color: #f9fafb; overflow-x: hidden; }

/* Хедер и сетка кейсов */
.hero {
    min-height: 80vh;
    background: #001a4d url('main-bg.jpg') center/cover;
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
}

.main-bg-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(0, 26, 77, 0.95), rgba(0, 10, 30, 0.8));
}

.content-wrapper { position: relative; z-index: 2; width: 100%; max-width: 1200px; }

.rt-logo { font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; }
.rt-logo span { color: var(--rt-orange); }

h1 { font-size: 2.5rem; margin-bottom: 10px; }
.subtitle { opacity: 0.8; margin-bottom: 40px; }

.case-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
}

.case-card {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 15px;
    cursor: pointer;
    transition: 0.3s;
}

.case-card:hover { transform: translateY(-5px); background: var(--rt-orange); }

.case-img { height: 100px; background: #333; border-radius: 8px; margin-bottom: 10px; background-size: cover; }

/* Секция TERRA */
.terra-info { padding: 80px 20px; background: white; color: var(--rt-blue); }
.container { max-width: 1100px; margin: 0 auto; }
h2 { font-size: 2rem; margin-bottom: 40px; text-align: center; color: #101828; }

.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.feat-item { padding: 20px; border-left: 3px solid var(--rt-orange); background: #f8f9fc; }

/* Модальное окно */
.modal { display: none; position: fixed; z-index: 100; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); }
.modal-content { background: white; margin: 2% auto; padding: 30px; width: 90%; max-width: 1000px; border-radius: 20px; color: #333; position: relative; max-height: 90vh; overflow-y: auto; }
.close { position: absolute; right: 20px; top: 10px; font-size: 30px; cursor: pointer; }

/* Логотипы подрядчиков */
.partners-row { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px; }
.partner-logo { height: 40px; filter: grayscale(1); opacity: 0.7; transition: 0.3s; }
.partner-logo:hover { filter: grayscale(0); opacity: 1; }

/* Адаптивность для мобильных */
@media (max-width: 768px) {
    .case-grid { grid-template-columns: repeat(2, 1fr); }
    .features { grid-template-columns: 1fr; }
    h1 { font-size: 1.8rem; }
    .partner-logo { height: 30px; } /* Уменьшенные логотипы на мобилках */
}
