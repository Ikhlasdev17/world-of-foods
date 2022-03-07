import React from 'react';

function Footer(props) {
    return (
      <footer>
        <p>© {new Date().getFullYear()}. All Rights Reserved. Dev: <a href="https://t.me/ikhlasaralbaev">Ikhlas Aralbaev</a></p>
      </footer>
    );
}

export default Footer;