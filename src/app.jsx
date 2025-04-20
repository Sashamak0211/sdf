import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex]  = useState(0);

	const liItem = steps.map((item, index) => {
		const isDone = index < activeIndex;  // шаг заверщен
		const isActive = index === activeIndex; // активный индекс
		return (
			
			<li className={`${styles['steps-item']}${isDone ? styles.done : ''} ${isActive ? styles.active: ''}`} key={item.id} >
				
			<button className= {styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
				{index+1}
				</button>
					{item.title}
			</li>
			

		);
	});
	

	function clickGoBack() {
		if(activeIndex > 0) {
		setActiveIndex(activeIndex-1) }
	};
	function clickGoNext() {
		if(activeIndex < steps.length -1)
		{setActiveIndex(activeIndex+1)}
		else  {
			
			setActiveIndex(0)
		}
	};
	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						
						<h2>{steps[activeIndex].content}</h2>
					</div>
					<ul className={styles['steps-list']}>
						{liItem}
						
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickGoBack} disabled = {activeIndex === 0}>
							Назад</button>
						<button className={styles.button} onClick={clickGoNext}>
							{activeIndex !== steps.length -1 ? 'Далее' : 'Начать сначала'}
							
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
