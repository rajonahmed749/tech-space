import React from 'react';
import { Menu } from 'antd';
import { Anchor } from 'antd';


const AppHeader = () => {
    const { Link } = Anchor;
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-bolt"></i>
                    <a href="#">TechSpace</a>
                </div>
                <Anchor targetOffset="60">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#feature" title="Features" />
                    <Link href="#works" title="How it works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
        </div>
    );
};

export default AppHeader;