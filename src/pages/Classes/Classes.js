import './Classes.css';
import ClassCard from './ClassCard/ClassCard'

import Typewriter from "typewriter-effect"; 

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row } from 'react-bootstrap';



function Classes() {
  return (
    <div className="Classes">
        <Container fluid className="classesContainer">
            <Row className="classRow">
              <Typewriter
                onInit={(typewriter) => { 
                  typewriter

                  .typeString("Classes coming soon!")
                  .start();
                }}
              />
            </Row>
            <div className = "cardRow">
              
                {/* <ClassCard name="Rainbow in a bottle" 
                img="RainbowInABottle"
                text="Introduction into chemistry with a fun hands-on experiment"
                desc="Rainbow in a Bottle will teach students about density and its importance in our daily lives. In addition to this, students will perform a hands-on experiment to witness density in action first-hand that they'll then be able to take home."
                /> */}
                {/* <ClassCard name="Python Mania" 
                img="programmingpython"
                text="A fun introductory class to python"
                desc="Jump into the world of Python! Python is one of the most popular programming languages today, and you'll leave our class knowing key fundamentals. Code a cool game to show off to your friends!"
                />
                <ClassCard name="Using CAD to Build" 
                img="cad"
                text="Design and assemble a rocket through a CAD platform"
                desc="Our topic is focused on introducing the basics of CAD (Computer-Aided Design), an absolute essential for anyone interested in engineering or other STEM-related fields. Students will be able to use computers to sketch, model, and assemble parts of a rocket on popular CAD platform Onshape, and participate in other fun activities and challenges! By the end of the lesson, we hope to have fostered students' interests in both creative design and technology, and have taught them all the skills they need to bring their own ideas to life."
                />
                <ClassCard name="1..2..3 Blast Off!" 
                img="astronomy"
                text="Explore the world of space and astronomy "
                desc="In this class, we will learn all about our solar system, basic astronomy and modern space exploration! Have you heard about the Artemis-1? What exactly is a neutron star? In 50 minutes, we'll visualize the way our universe is constantly expanding, and just how big it truly is. With a cool, out-of-this-world activity for each topic, we'll soon be over the moon with a solid conceptual understanding of the scale and anatomy of our universe!"
                />
                <ClassCard name="Clay-reating Bones" 
                img="orthopedics"
                text="Learn the basics of orthopedics through clay"
                desc="Rainbow in a Bottle will teach students about density and its importance in our daily lives. In addition to this, students will perform a hands-on experiment to witness density in action first-hand that they'll then be able to take home."
                />
                <ClassCard name="Creating Scenic Scapes" 
                img="historypainting"
                text="Learn painting techniques by creating a landscape"
                desc="Do you want to learn how to create scenic landscapes like The Starry Night by Vincent van Gogh? If so, join painting landscapes where you will learn painting techniques, get to paint a landscape, and learn the value of painting beyond just art!"
                />
                <ClassCard name="Make a Comic" 
                img="comic"
                text="Learn how to create your very own comic"
                desc="In this class, students will learn the parts of a comic and how to apply them to create an effective one of their own. At the end they will also learn about the production process and go through it, making a comic."
                />
                <ClassCard name="DNA: Life at its Core" 
                img="dna"
                text="Explore in depth about DNA and what makes us human"
                desc="This class will teach you all about the basis of life: DNA! This class will teach you the science behind what makes us who we are, with fun activities such as fruit DNA extraction and more."
                />
                <ClassCard name="Code a Game" 
                img="codegame"
                text="Make a web based game through HTML and CSS"
                desc="Code a Game! will be teaching students how to develop a web-based Choose Your Own Adventure game. Students will learn the basics of coding and designing a website through 2 popular web-based languages: HTML and CSS. This class is beginner-friendly, so all experience levels are welcome to join us!"
                />
                <ClassCard name="Intro to Epidemiology" 
                img="epedim"
                text="Discover how epidemiologists study diseases"
                desc="Would you like to learn how epidemiologists study diseases? How do epidemiologists find out what disease is plaguing a group of people? Learn more about epidemiologists in the Epidemiology class!"
                />
                <ClassCard name="Lab Fundamentals" 
                img="loratory"
                text="Introductory class to laboratory work"
                desc="Students will be taught the fundamentals of laboratory work such as pipetting and will learn how reactions occur between different types of solutions depending on their densities and acidity. The class will make their own rainbow pipetting experiments and lava lamps to take home."
                />
                <ClassCard name="Catapult Design Lab" 
                img="catapult"
                text="Build and test your own catapults"
                desc="This class will allow the participants to design and build a catapult using household materials. Then the students will test the catapults by launching marshmallows and will learn about projectile motion from this activity. "
                />
                <ClassCard name="Corporate Catastrophe" 
                img="business"
                text="Enter the world of business ethics by analyzing a case study"
                desc="This course will explore the world of business ethics as students will analyze an interactive mystery case study regarding a lawsuit between two entities. Students will examine the characteristics of a company’s external environment, gain an understanding of litigation, and learn public speaking skills. So, let’s understand this corporate catastrophe!"
                />
                <ClassCard name="Bio-Ethics" 
                img="medethics"
                text="Learn about ethics in the medical field through current events"
                desc="This class will introduce some principles of ethics, and connect them with current events in the medical field. We will prompt students to think deeply about medical news and form educated opinions."
                />
                <ClassCard name="Dance-Basics: Jazz and Tap" 
                img="tapdance"
                text="Enjoy a fun class of jazz and tap dancing"
                desc="We will be doing a fun and upbeat warmup for jazz and are welcoming all levels. Followed by a musical theater-jazz combination. Afterward, we will take a short break and begin tap with a warm-up as well. Then we will do some across the floor tap steps, and finish with a fun tap combo. "
                />
                <ClassCard name="Culinary Basics" 
                img="kitchen"
                text="Explore the ins and outs of working in a kitchen"
                desc="Culinary basics will cover the basics of working in a kitchen and also the different techniques that could be used while cooking. Student will be able to learn about kitchen safety, be able to make a desert for themselves and we hope that they will be able to have fun and take the skills learned during the class and apply them to other situations. "
                />
                <ClassCard name="Marketing" 
                img="marketing"
                text="An introductory class into the world of marketing"
                desc="Marketing is the process of getting people interested in your company's product or service. This happens through market research, analysis, and understanding your ideal customer's interests. Marketing pertains to all aspects of a business, including product development, distribution methods, sales, and advertising."
                />
                <ClassCard name="Talk About the Enviroment" 
                img="enviroment"
                text="Discuss the effects of climate change"
                desc="This Flash Class will be focused on teaching students about climate change and the environment. We will be doing activities that teach the impact of climate change and sustainable actions we can take."
                />
                <ClassCard name="MUN: Debating the World" 
                img="mun"
                text="Debate global affairs through a Model United Nations simulation"
                desc="In this course students will learn how to properly debate in the global affairs simulation Model United Nations (MUN). In MUN, students are assigned countries and a topic to draft solutions from their perspective and argue the merits in the form of speeches. Speech-giving and parliamentary procedure will be taught and no prerequisites for this course."
                />
                <ClassCard name="Machine Learning Basics" 
                img="machinelearning"
                text="Learn all about the types and uses of machine learning"
                desc="Machine learning is becoming more and more prominent in every industry. This course will teach students about the different types of machine learning and their usage. At the end of the lesson, students will build their own machine learning model. We are super excited to introduce young minds to the endless possibilities and applications of this rapidly-expanding field and hope they continue to study it afterwards."
                />
                
                <ClassCard name="Theatre Basics" 
                img="improv"
                text="Enjoy a class of fun improv games"
                desc="In the theatre basics class, we will be teaching improv. We're gonna play games such as Freeze, (in this the students will be placed in groups and perform a random improv skit, a student watching can yell freeze, and another student will go in to carry on with the improv) there will also be more games such as  Whoosh, Yes, and Hot Seat. "
                />
                <ClassCard name="Intro to MUN" 
                img="mun2"
                text="Learn all about Model United Nations"
                desc="A crash course about Model UN and how it works. A description of AMUN, MUN club, and all the MUN conferences. Quick demonstration of a MUN conference."
                />
                <ClassCard name="Designing a Character" 
                img="character"
                text="Illustrate a character while developing art skills"
                desc="Learning the use of shape language, colors, posture, and clothing to design a character. Everything should give the viewer a good sense of the character's personality from appearance alone. Students will use what was learned to design their character character."
                />
                <ClassCard name="Exploring the Enviroment" 
                img="enviroment2"
                text="Understanding our role in the enviroment"
                desc="In our BCA Flash Class, students will have the chance to learn about the environment more in depth and do exciting activities that help deepen students' understanding of the environment and the role we can play within it."
                /> */}
            </div>


        </Container>
    </div>
  );
}

export default Classes;
