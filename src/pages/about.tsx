import React from 'react';
import Layout from '@/app/layout';
import CustomLink from '@/app/components/CustomLink';

const About: React.FC = () => {
    return (
        <Layout>
            <nav>
                <ul>
                    <li>
                        <CustomLink href="#ourstory" text="Our Story" />
                    </li>
                    <li>
                        <CustomLink href="#groomsparty" text="Groom's Party" />
                    </li>
                    <li>
                        <CustomLink href="#bridesparty" text="Bride's Party" />
                    </li>
                    <li>
                        <CustomLink href="#others" text="Those who made this possible" />
                    </li>
                </ul>
            </nav>
            <section id="ourstory">
                <h1>Our story</h1>
                <div className="our-story">
                    <p>Our story begins in early March of 2023. Callie had heard from a friend about the app, Coffee Meets Bagel, and decided to download it. Within hours, they were matched with this guy named Tobey. One message lead to hours of conversation, lead to finally meeting a few days later at The British Pantry for tea.</p>
                    <p>That first conversation at tea wound up lasting for eight full hours, turning into dinner! Neither Tobey nor Callie could stop. The next day, they decided to build a Lego set - well, Callie suggested it. And so their journey together began.</p>
                    <p>A year later, they found themselves at The British Pantry yet again, which Callie had already set a plan - to ask that important question. Should we make all of this official? Of course, this is not to undermine the three hours they took to try and find the perfect tribute to the ridiculousness that was their sense of humor. A RingPop - which was never found. Instead, they found a polished, stone ring from the craft store. Tobey would prefer we probably not discuss where that went; needless to say, it was not the most solid ring. Still, it served its purpose!</p>
                    <p>He said yes.</p>
                    <p>And thus, we now celebrate our love with you, our family and friends who became family.</p>
                </div>
            </section>
            <section id="groomsparty">
                <h1>Groom&apos;s Party</h1>
                <div>
                    <p>Groom&apos;s Party</p>
                </div>
            </section>
            <section id="bridesparty">
                <h1>Bride&apos;s Party</h1>
                <div>
                    <p>Bride&apos;s Party</p>
                </div>
            </section>
            <section id="others">
                <h1>Those who made this possible</h1>
                <div><p>content</p></div>
            </section>
        </Layout>
    );
};

export default About;