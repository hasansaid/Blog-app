import React from 'react';
import Comment from './Comment';
import './styles.css';
import me from '../../../static/images/me.jpeg';
import me2 from '../../../static/images/me2.jpg';
import ali from '../../../static/images/ali.jpg';

const Comments = () => {
  const data = [
    {
      image: me2,
      info: ['Hasan Said SERTKAYA', 'Software Developer', 'Ankara/Keçiören'],
      body: "Kırıkkale Üniversitesinden (AGNO:3,16) mezun oldum. ASP.NET MVC üzerine projeler geliştirdim. Back End olarak hayatıma devam etmeye karar vermiştim ancak neden Full Stack olmasın dedim. Bunun üzerine front end de js ve react öğrenmeye karar verdim. Yaklaşık olarak 2 haftadır js yazıyorum ve react'ı ise yaptığım araştırmalar ve sizden alacağım eğitimler ve kendi kurslarım ile beraber geliştirmeyi hedefliyorum.",
      phone: 'tel:+905537074418',
      wp: "https://api.whatsapp.com/send?phone=+905537074418&text='hey'",
    },
    {
      image: me,
      info: ['Hasan Said SERTKAYA', 'Software Developer', 'Ankara/Keçiören'],
      body: "Kırıkkale Üniversitesinden (AGNO:3,16) mezun oldum. ASP.NET MVC üzerine projeler geliştirdim. Back End olarak hayatıma devam etmeye karar vermiştim ancak neden Full Stack olmasın dedim. Bunun üzerine front end de js ve react öğrenmeye karar verdim. Yaklaşık olarak 2 haftadır js yazıyorum ve react'ı ise yaptığım araştırmalar ve sizden alacağım eğitimler ve kendi kurslarım ile beraber geliştirmeyi hedefliyorum.",
      phone: 'tel:+1800229933',
      wp: "https://api.whatsapp.com/send?phone=+905537074418&text='hey'",
    },
    {
      image: ali,
      info: ['Ugur', 'Software Developer', 'Ankara/Keçiören'],
      body: "Kırıkkale Üniversitesinden (AGNO:3,16) mezun oldum. ASP.NET MVC üzerine projeler geliştirdim. Back End olarak hayatıma devam etmeye karar vermiştim ancak neden Full Stack olmasın dedim. Bunun üzerine front end de js ve react öğrenmeye karar verdim. Yaklaşık olarak 2 haftadır js yazıyorum ve react'ı ise yaptığım araştırmalar ve sizden alacağım eğitimler ve kendi kurslarım ile beraber geliştirmeyi hedefliyorum.",
      phone: 'tel:+1800229933',
      wp: "https://api.whatsapp.com/send?phone=+905537074418&text='hey'",
    },
  ];

  return (
    <div className="comments-container">
      <Comment
        image={data[0].image}
        info={data[0].info}
        body={data[0].body}
        phone={data[0].phone}
        wp={data[0].wp}
      />
      <Comment
        image={data[1].image}
        info={data[1].info}
        body={data[1].body}
        phone={data[1].phone}
        wp={data[1].wp}
      />
      <Comment
        image={data[2].image}
        info={data[2].info}
        body={data[2].body}
        phone={data[2].phone}
        wp={data[2].wp}
      />

    </div>
  );
};

export default Comments;
