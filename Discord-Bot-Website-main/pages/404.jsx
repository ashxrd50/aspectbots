import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolu kaybettin mi, küçük?',
        'Kahretsin! Bu çıkmaz sokak.',
        'Auror\'lar bu yolu engelledi, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı."} />
}

export default UnkownPage;

