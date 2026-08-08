import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Hay aksi! 500 Dahili Sunucu Hatası oluştu. Lütfen daha sonra tekrar deneyin!"} />
}

export default UnkownPage;