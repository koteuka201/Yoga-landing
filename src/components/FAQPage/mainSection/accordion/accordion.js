import styles from './accordion.module.scss'
import React,{useState} from 'react'
import { AccordionItem } from './accordionItem/accordionItem'

export const Accordion=()=>{
    
    const faq = [
        {
            title: 'Как записаться на занятия йогой? ?',
            content: 'Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене'
        },
        {
            title: 'Нужно ли покупать коврик для занятий и другой инвентарь?',
            content: 'Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене'
        },
        {
            title: 'Что нужно брать на пробное занятие?',
            content: 'Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене'
        },
        {
            title: 'Смогу ли заниматься с моей комплекцией?',
            content: 'Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене'
        },
        {
            title: 'Для моего возраста подойдут занятия?',
            content: 'Вы можете записаться на занятия через наш сайт или по телефону. Так же вы можете прийти в наш центр и записаться на ресепшене'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <div className={styles.accordion}>
            {faq.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    handleToggle={handleToggle}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}