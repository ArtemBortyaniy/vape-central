 import css from './About.module.css'

const About = () => {
  return (
    <>
    <div className={css.container}>
    <h1 className={css.title}>Про нас</h1>
    <h2 className={css.subTitle}>Ласкаво просимо до Vape Central, вашого надійного партнера у світі вейпінгу! </h2>
    <p className={`${css.text} ${css.indent}`}>Ми — команда ентузіастів, які прагнуть принести вам найкращі продукти та неперевершений сервіс.</p>
    <p className={`${css.text} ${css.indent}`}>Наш інтернет-магазин створений для того, щоб задовольнити потреби як новачків, так і досвідчених вейперів.</p>

    <h3 className={css.textTitle}>Наша місія</h3>

    <p className={css.textList}>Наша місія — забезпечити кожного клієнта високоякісними продуктами для вейпінгу, надаючи широкий вибір і найкращі ціни на ринку. Ми віримо, що вейпінг може бути безпечною та приємною альтернативою традиційному палінню, і ми тут, щоб зробити ваш досвід максимально комфортним і приємним.</p>
    <h3 className={css.textTitle1}>Що ми пропонуємо</h3>
    <ul className={css.list}>
        <li className={css.textList}>Широкий асортимент: у нашому каталозі ви знайдете все, що потрібно для вейпінгу: від електронних сигарет та подів до рідин з різними смаками і аксесуарів.</li>
        <li className={css.textList}>Висока якість: ми ретельно відбираємо продукцію від провідних виробників, щоб гарантувати вам тільки найкращі та надійні товари.</li>
        <li className={css.textList}>Консультації та підтримка: наша команда завжди готова допомогти вам з вибором продуктів та відповісти на будь-які запитання. Ми прагнемо до того, щоб ви були задоволені своїм вибором і мали позитивний досвід покупок у нас.</li>
        <li className={css.textList}>Швидка доставка: ми цінуємо ваш час, тому забезпечуємо швидку і надійну доставку замовлень по всій країні.</li>
    </ul>
    <h3 className={css.textTitle1}>Чому обирають нас</h3>
    <ul className={css.list}>

        <li className={css.textList}>Професіоналізм: ми знаємо все про вейпінг і готові поділитися своїм досвідом з вами.</li>
        <li className={css.textList}>Доступні ціни: ми пропонуємо конкурентоспроможні ціни на всі наші товари, а також регулярні акції та знижки.</li>
        <li className={css.textList}>Зручність покупок: наш інтернет-магазин простий у використанні, що дозволяє швидко знайти потрібні продукти і легко оформити замовлення.</li>
    </ul>

    <p className={css.textEnd}>Ми вдячні кожному нашому клієнту за довіру та підтримку! 
    Vape Central — це не просто магазин, це спільнота людей, які цінують якість і комфорт. 
Приєднуйтесь до нас і відкрийте для себе нові горизонти вейпінгу!</p>
</div>
 </>
  )
}

export default About