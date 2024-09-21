export const ConnectWallet = ({
  connectWallet,
}: {
  connectWallet: () => void;
}) => {
  return (
    <div
      className={
        'flex h-full w-full items-center justify-center px-[5%] py-[15%] lg:px-[10%] lg:py-0'
      }
    >
      <div
        className={
          'max-w-[600px] rounded-2xl border border-left-accent bg-[#252525] p-4'
        }
      >
        <div className={'flex flex-col gap-4 p-12 text-center'}>
          <span className={'text-[20px]/[20px]'}>
            Please connect your wallet
          </span>
          <span className={'font-plexsans text-[14px]/[14px]'}>
            In order to play, you need to connect your wallet to the app in
            order to make a payment fee and receive a prize if you win.
          </span>
          <button
            className={
              'group mt-8 flex w-full flex-row items-center justify-center gap-4 rounded-[5px] border border-bg-dark bg-middle-accent py-2 text-center text-headline-2 font-medium text-dark-buttons-text hover:border-middle-accent hover:bg-bg-dark hover:text-middle-accent'
            }
            onClick={async () => connectWallet()}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="#212121"
              xmlns="http://www.w3.org/2000/svg"
              className={'group-hover:fill-middle-accent'}
            >
              <path d="M4.5895 4.00887C4.58932 4.00666 4.58946 4.0057 4.58947 4.00564L4.58947 4.00564L4.58951 4.00546C4.58964 4.0051 4.59028 4.00362 4.59192 4.00184C4.59277 4.00092 4.59348 4.00035 4.59391 4.00005L4.59541 4H10.5001V2H4.59541C3.42003 2 2.50135 3.0054 2.59608 4.17088C2.70513 5.51269 2.88088 7.87602 2.9597 10.0365L4.95837 9.96354C4.87791 7.75825 4.69931 5.35995 4.5895 4.00887ZM14.5001 4H20.4048L20.4063 4.00005L20.407 4.00056L20.4083 4.00184C20.4099 4.00362 20.4106 4.0051 20.4107 4.00546L20.4108 4.00564C20.4108 4.00566 20.4109 4.00661 20.4107 4.00887C20.3009 5.35995 20.1223 7.75824 20.0419 9.96354L22.0405 10.0365C22.1193 7.87602 22.2951 5.51269 22.4041 4.17088C22.4989 3.0054 21.5802 2 20.4048 2H14.5001V4ZM4.5895 19.9911C4.69931 18.64 4.87791 16.2418 4.95837 14.0365L2.9597 13.9635C2.88088 16.124 2.70513 18.4873 2.59608 19.8291C2.50151 20.9927 3.41669 22 4.59398 22H4.60189H4.60982H4.61777H4.62574H4.63374H4.64177H4.64981H4.65788H4.66597H4.67409H4.68223H4.69039H4.69857H4.70678H4.71501H4.72326H4.73154H4.73984H4.74816H4.7565H4.76487H4.77325H4.78166H4.7901H4.79855H4.80703H4.81553H4.82405H4.83259H4.84116H4.84975H4.85836H4.86699H4.87564H4.88432H4.89301H4.90173H4.91047H4.91923H4.92802H4.93682H4.94565H4.95449H4.96336H4.97225H4.98116H4.99009H4.99905H5.00802H5.01701H5.02603H5.03507H5.04412H5.0532H5.0623H5.07142H5.08056H5.08972H5.0989H5.1081H5.11732H5.12656H5.13582H5.1451H5.1544H5.16372H5.17306H5.18243H5.19181H5.20121H5.21063H5.22007H5.22953H5.23901H5.24851H5.25803H5.26757H5.27712H5.2867H5.2963H5.30591H5.31555H5.3252H5.33487H5.34456H5.35427H5.364H5.37375H5.38352H5.39331H5.40311H5.41293H5.42277H5.43263H5.44251H5.45241H5.46232H5.47226H5.48221H5.49218H5.50217H5.51217H5.5222H5.53224H5.5423H5.55238H5.56247H5.57259H5.58272H5.59286H5.60303H5.61321H5.62342H5.63363H5.64387H5.65412H5.66439H5.67468H5.68498H5.69531H5.70564H5.716H5.72637H5.73676H5.74717H5.75759H5.76803H5.77849H5.78896H5.79945H5.80995H5.82048H5.83101H5.84157H5.85214H5.86273H5.87333H5.88395H5.89458H5.90524H5.9159H5.92659H5.93728H5.948H5.95873H5.96948H5.98024H5.99101H6.00181H6.01261H6.02344H6.03428H6.04513H6.056H6.06688H6.07778H6.0887H6.09963H6.11057H6.12153H6.1325H6.14349H6.1545H6.16551H6.17655H6.18759H6.19865H6.20973H6.22082H6.23193H6.24304H6.25418H6.26533H6.27649H6.28766H6.29885H6.31005H6.32127H6.3325H6.34375H6.35501H6.36628H6.37756H6.38886H6.40018H6.4115H6.42284H6.4342H6.44556H6.45694H6.46833H6.47974H6.49116H6.50259H6.51404H6.52549H6.53696H6.54845H6.55994H6.57145H6.58297H6.59451H6.60605H6.61761H6.62918H6.64077H6.65236H6.66397H6.67559H6.68722H6.69887H6.71052H6.72219H6.73387H6.74557H6.75727H6.76899H6.78071H6.79245H6.8042H6.81596H6.82774H6.83952H6.85132H6.86313H6.87495H6.88678H6.89862H6.91047H6.92233H6.93421H6.94609H6.95799H6.96989H6.98181H6.99374H7.00568H7.01763H7.02959H7.04156H7.05354H7.06553H7.07753H7.08954H7.10157H7.1136H7.12564H7.13769H7.14976H7.16183H7.17391H7.186H7.1981H7.21021H7.22234H7.23447H7.24661H7.25876H7.27091H7.28308H7.29526H7.30745H7.31964H7.33185H7.34406H7.35629H7.36852H7.38076H7.39301H7.40527H7.41754H7.42981H7.4421H7.45439H7.4667H7.47901H7.49133H7.50365H7.51599H7.52833H7.54069H7.55305H7.56542H7.57779H7.59018H7.60257H7.61497H7.62738H7.6398H7.65222H7.66465H7.67709H7.68954H7.70199H7.71446H7.72692H7.7394H7.75189H7.76438H7.77688H7.78938H7.80189H7.81441H7.82694H7.83947H7.85201H7.86456H7.87711H7.88967H7.90224H7.91481H7.92739H7.93998H7.95257H7.96517H7.97778H7.99039H8.00301H8.01563H8.02826H8.0409H8.05354H8.06619H8.07885H8.09151H8.10417H8.11684H8.12952H8.1422H8.15489H8.16758H8.18028H8.19299H8.2057H8.21841H8.23113H8.24386H8.25659H8.26932H8.28206H8.29481H8.30756H8.32031H8.33307H8.34584H8.35861H8.37138H8.38416H8.39694H8.40973H8.42252H8.43532H8.44812H8.46092H8.47373H8.48654H8.49936H8.51218H8.525H8.53783H8.55066H8.5635H8.57634H8.58918H8.60203H8.61488H8.62774H8.64059H8.65345H8.66632H8.67919H8.69206H8.70493H8.71781H8.73069H8.74357H8.75646H8.76935H8.78224H8.79513H8.80803H8.82093H8.83383H8.84674H8.85964H8.87255H8.88547H8.89838H8.9113H8.92422H8.93714H8.95006H8.96299H8.97592H8.98885H9.00178H9.01471H9.02765H9.04058H9.05352H9.06646H9.07941H9.09235H9.10529H9.11824H9.13119H9.14414H9.15709H9.17004H9.18299H9.19594H9.2089H9.22185H9.23481H9.24777H9.26073H9.27369H9.28665H9.29961H9.31257H9.32553H9.33849H9.35145H9.36441H9.37738H9.39034H9.4033H9.41627H9.42923H9.4422H9.45516H9.46812H9.48109H9.49405H9.50701H9.51998H9.53294H9.5459H9.55886H9.57182H9.58478H9.59774H9.6107H9.62366H9.63662H9.64957H9.66253H9.67549H9.68844H9.70139H9.71434H9.72729H9.74024H9.75319H9.76614H9.77908H9.79203H9.80497H9.81791H9.83085H9.84379H9.85672H9.86966H9.88259H9.89552H9.90845H9.92138H9.9343H9.94722H9.96014H9.97306H9.98598H9.99889H10.0118H10.0247H10.0376H10.0505H10.0634H10.0763H10.0892H10.1021H10.115H10.1279H10.1408H10.1536H10.1665H10.1794H10.1923H10.2051H10.218H10.2309H10.2437H10.2566H10.2694H10.2823H10.2951H10.308H10.3208H10.3336H10.3465H10.3593H10.3721H10.3849H10.3978H10.4106H10.4234H10.4362H10.449H10.4618H10.4745H10.4873H10.5001V20H10.4873H10.4745H10.4618H10.449H10.4362H10.4234H10.4106H10.3978H10.3849H10.3721H10.3593H10.3465H10.3336H10.3208H10.308H10.2951H10.2823H10.2694H10.2566H10.2437H10.2309H10.218H10.2051H10.1923H10.1794H10.1665H10.1536H10.1408H10.1279H10.115H10.1021H10.0892H10.0763H10.0634H10.0505H10.0376H10.0247H10.0118H9.99889H9.98598H9.97306H9.96014H9.94722H9.9343H9.92138H9.90845H9.89552H9.88259H9.86966H9.85672H9.84379H9.83085H9.81791H9.80497H9.79203H9.77908H9.76614H9.75319H9.74024H9.72729H9.71434H9.70139H9.68844H9.67549H9.66253H9.64957H9.63662H9.62366H9.6107H9.59774H9.58478H9.57182H9.55886H9.5459H9.53294H9.51998H9.50701H9.49405H9.48109H9.46812H9.45516H9.4422H9.42923H9.41627H9.4033H9.39034H9.37738H9.36441H9.35145H9.33849H9.32553H9.31257H9.29961H9.28665H9.27369H9.26073H9.24777H9.23481H9.22185H9.2089H9.19594H9.18299H9.17004H9.15709H9.14414H9.13119H9.11824H9.10529H9.09235H9.07941H9.06646H9.05352H9.04058H9.02765H9.01471H9.00178H8.98885H8.97592H8.96299H8.95006H8.93714H8.92422H8.9113H8.89838H8.88547H8.87255H8.85964H8.84674H8.83383H8.82093H8.80803H8.79513H8.78224H8.76935H8.75646H8.74357H8.73069H8.71781H8.70493H8.69206H8.67919H8.66632H8.65345H8.64059H8.62774H8.61488H8.60203H8.58918H8.57634H8.5635H8.55066H8.53783H8.525H8.51218H8.49936H8.48654H8.47373H8.46092H8.44812H8.43532H8.42252H8.40973H8.39694H8.38416H8.37138H8.35861H8.34584H8.33307H8.32031H8.30756H8.29481H8.28206H8.26932H8.25659H8.24386H8.23113H8.21841H8.2057H8.19299H8.18028H8.16758H8.15489H8.1422H8.12952H8.11684H8.10417H8.09151H8.07885H8.06619H8.05354H8.0409H8.02826H8.01563H8.00301H7.99039H7.97778H7.96517H7.95257H7.93998H7.92739H7.91481H7.90224H7.88967H7.87711H7.86456H7.85201H7.83947H7.82694H7.81441H7.80189H7.78938H7.77688H7.76438H7.75189H7.7394H7.72692H7.71446H7.70199H7.68954H7.67709H7.66465H7.65222H7.6398H7.62738H7.61497H7.60257H7.59018H7.57779H7.56542H7.55305H7.54069H7.52833H7.51599H7.50365H7.49133H7.47901H7.4667H7.45439H7.4421H7.42981H7.41754H7.40527H7.39301H7.38076H7.36852H7.35629H7.34406H7.33185H7.31964H7.30745H7.29526H7.28308H7.27091H7.25876H7.24661H7.23447H7.22234H7.21021H7.1981H7.186H7.17391H7.16183H7.14976H7.13769H7.12564H7.1136H7.10157H7.08954H7.07753H7.06553H7.05354H7.04156H7.02959H7.01763H7.00568H6.99374H6.98181H6.96989H6.95799H6.94609H6.93421H6.92233H6.91047H6.89862H6.88678H6.87495H6.86313H6.85132H6.83952H6.82774H6.81596H6.8042H6.79245H6.78071H6.76899H6.75727H6.74557H6.73387H6.72219H6.71052H6.69887H6.68722H6.67559H6.66397H6.65236H6.64077H6.62918H6.61761H6.60605H6.59451H6.58297H6.57145H6.55994H6.54845H6.53696H6.52549H6.51404H6.50259H6.49116H6.47974H6.46833H6.45694H6.44556H6.4342H6.42284H6.4115H6.40018H6.38886H6.37756H6.36628H6.35501H6.34375H6.3325H6.32127H6.31005H6.29885H6.28766H6.27649H6.26533H6.25418H6.24304H6.23193H6.22082H6.20973H6.19865H6.18759H6.17655H6.16551H6.1545H6.14349H6.1325H6.12153H6.11057H6.09963H6.0887H6.07778H6.06688H6.056H6.04513H6.03428H6.02344H6.01261H6.00181H5.99101H5.98024H5.96948H5.95873H5.948H5.93728H5.92659H5.9159H5.90524H5.89458H5.88395H5.87333H5.86273H5.85214H5.84157H5.83101H5.82048H5.80995H5.79945H5.78896H5.77849H5.76803H5.75759H5.74717H5.73676H5.72637H5.716H5.70564H5.69531H5.68498H5.67468H5.66439H5.65412H5.64387H5.63363H5.62342H5.61321H5.60303H5.59286H5.58272H5.57259H5.56247H5.55238H5.5423H5.53224H5.5222H5.51217H5.50217H5.49218H5.48221H5.47226H5.46232H5.45241H5.44251H5.43263H5.42277H5.41293H5.40311H5.39331H5.38352H5.37375H5.364H5.35427H5.34456H5.33487H5.3252H5.31555H5.30591H5.2963H5.2867H5.27712H5.26757H5.25803H5.24851H5.23901H5.22953H5.22007H5.21063H5.20121H5.19181H5.18243H5.17306H5.16372H5.1544H5.1451H5.13582H5.12656H5.11732H5.1081H5.0989H5.08972H5.08056H5.07142H5.0623H5.0532H5.04412H5.03507H5.02603H5.01701H5.00802H4.99905H4.99009H4.98116H4.97225H4.96336H4.95449H4.94565H4.93682H4.92802H4.91923H4.91047H4.90173H4.89301H4.88432H4.87564H4.86699H4.85836H4.84975H4.84116H4.83259H4.82405H4.81553H4.80703H4.79855H4.7901H4.78166H4.77325H4.76487H4.7565H4.74816H4.73984H4.73154H4.72326H4.71501H4.70678H4.69857H4.69039H4.68223H4.67409H4.66597H4.65788H4.64981H4.64177H4.63374H4.62574H4.61777H4.60982H4.60189H4.59398L4.59301 20L4.59186 19.9989C4.5904 19.9973 4.58976 19.9959 4.58959 19.9954L4.58948 19.9949L4.5894 19.9931L4.5895 19.9911ZM20.0419 14.0365C20.1223 16.2418 20.3009 18.64 20.4107 19.9911L20.4108 19.9932L20.4107 19.9949L20.4106 19.9954C20.4105 19.9959 20.4098 19.9973 20.4084 19.9989L20.4072 20L20.4062 20H20.3983H20.3904H20.3825H20.3745H20.3665H20.3585H20.3504H20.3423H20.3343H20.3261H20.318H20.3098H20.3017H20.2934H20.2852H20.277H20.2687H20.2604H20.2521H20.2437H20.2354H20.227H20.2186H20.2101H20.2017H20.1932H20.1847H20.1762H20.1676H20.1591H20.1505H20.1419H20.1332H20.1246H20.1159H20.1072H20.0985H20.0898H20.081H20.0722H20.0634H20.0546H20.0457H20.0369H20.028H20.0191H20.0101H20.0012H19.9922H19.9832H19.9742H19.9652H19.9561H19.947H19.9379H19.9288H19.9197H19.9105H19.9013H19.8921H19.8829H19.8737H19.8644H19.8551H19.8458H19.8365H19.8272H19.8178H19.8084H19.799H19.7896H19.7802H19.7707H19.7612H19.7517H19.7422H19.7327H19.7231H19.7135H19.7039H19.6943H19.6847H19.675H19.6654H19.6557H19.646H19.6362H19.6265H19.6167H19.6069H19.5971H19.5873H19.5775H19.5676H19.5577H19.5478H19.5379H19.528H19.518H19.508H19.4981H19.4881H19.478H19.468H19.4579H19.4478H19.4378H19.4276H19.4175H19.4074H19.3972H19.387H19.3768H19.3666H19.3564H19.3461H19.3358H19.3255H19.3152H19.3049H19.2946H19.2842H19.2739H19.2635H19.2531H19.2426H19.2322H19.2217H19.2113H19.2008H19.1903H19.1798H19.1692H19.1587H19.1481H19.1375H19.1269H19.1163H19.1056H19.095H19.0843H19.0736H19.0629H19.0522H19.0415H19.0308H19.02H19.0092H18.9984H18.9876H18.9768H18.9659H18.9551H18.9442H18.9333H18.9224H18.9115H18.9006H18.8897H18.8787H18.8677H18.8567H18.8457H18.8347H18.8237H18.8126H18.8016H18.7905H18.7794H18.7683H18.7572H18.746H18.7349H18.7237H18.7126H18.7014H18.6902H18.679H18.6677H18.6565H18.6452H18.6339H18.6227H18.6114H18.6H18.5887H18.5774H18.566H18.5547H18.5433H18.5319H18.5205H18.5091H18.4976H18.4862H18.4747H18.4633H18.4518H18.4403H18.4288H18.4173H18.4057H18.3942H18.3826H18.371H18.3595H18.3479H18.3363H18.3246H18.313H18.3014H18.2897H18.278H18.2664H18.2547H18.243H18.2312H18.2195H18.2078H18.196H18.1843H18.1725H18.1607H18.1489H18.1371H18.1253H18.1135H18.1016H18.0898H18.0779H18.066H18.0541H18.0422H18.0303H18.0184H18.0065H17.9945H17.9826H17.9706H17.9587H17.9467H17.9347H17.9227H17.9107H17.8987H17.8866H17.8746H17.8625H17.8505H17.8384H17.8263H17.8142H17.8021H17.79H17.7779H17.7658H17.7536H17.7415H17.7293H17.7171H17.705H17.6928H17.6806H17.6684H17.6562H17.6439H17.6317H17.6195H17.6072H17.595H17.5827H17.5704H17.5581H17.5458H17.5335H17.5212H17.5089H17.4966H17.4842H17.4719H17.4595H17.4472H17.4348H17.4224H17.41H17.3977H17.3853H17.3728H17.3604H17.348H17.3356H17.3231H17.3107H17.2982H17.2858H17.2733H17.2608H17.2483H17.2358H17.2234H17.2108H17.1983H17.1858H17.1733H17.1608H17.1482H17.1357H17.1231H17.1106H17.098H17.0854H17.0728H17.0602H17.0477H17.0351H17.0224H17.0098H16.9972H16.9846H16.972H16.9593H16.9467H16.934H16.9214H16.9087H16.8961H16.8834H16.8707H16.858H16.8453H16.8326H16.8199H16.8072H16.7945H16.7818H16.7691H16.7564H16.7436H16.7309H16.7182H16.7054H16.6927H16.6799H16.6672H16.6544H16.6416H16.6288H16.6161H16.6033H16.5905H16.5777H16.5649H16.5521H16.5393H16.5265H16.5137H16.5009H16.488H16.4752H16.4624H16.4496H16.4367H16.4239H16.411H16.3982H16.3853H16.3725H16.3596H16.3468H16.3339H16.321H16.3082H16.2953H16.2824H16.2695H16.2567H16.2438H16.2309H16.218H16.2051H16.1922H16.1793H16.1664H16.1535H16.1406H16.1277H16.1148H16.1018H16.0889H16.076H16.0631H16.0502H16.0372H16.0243H16.0114H15.9984H15.9855H15.9726H15.9596H15.9467H15.9338H15.9208H15.9079H15.8949H15.882H15.869H15.8561H15.8431H15.8302H15.8172H15.8043H15.7913H15.7784H15.7654H15.7525H15.7395H15.7265H15.7136H15.7006H15.6877H15.6747H15.6617H15.6488H15.6358H15.6228H15.6099H15.5969H15.584H15.571H15.558H15.5451H15.5321H15.5191H15.5062H15.4932H15.4803H15.4673H15.4543H15.4414H15.4284H15.4154H15.4025H15.3895H15.3766H15.3636H15.3507H15.3377H15.3247H15.3118H15.2988H15.2859H15.2729H15.26H15.247H15.2341H15.2211H15.2082H15.1953H15.1823H15.1694H15.1564H15.1435H15.1306H15.1176H15.1047H15.0918H15.0788H15.0659H15.053H15.0401H15.0272H15.0142H15.0013H14.9884H14.9755H14.9626H14.9497H14.9368H14.9239H14.911H14.8981H14.8852H14.8723H14.8595H14.8466H14.8337H14.8208H14.808H14.7951H14.7822H14.7694H14.7565H14.7436H14.7308H14.7179H14.7051H14.6923H14.6794H14.6666H14.6538H14.6409H14.6281H14.6153H14.6025H14.5897H14.5769H14.5641H14.5513H14.5385H14.5257H14.5129H14.5001V22H14.5129H14.5257H14.5385H14.5513H14.5641H14.5769H14.5897H14.6025H14.6153H14.6281H14.6409H14.6538H14.6666H14.6794H14.6923H14.7051H14.7179H14.7308H14.7436H14.7565H14.7694H14.7822H14.7951H14.808H14.8208H14.8337H14.8466H14.8595H14.8723H14.8852H14.8981H14.911H14.9239H14.9368H14.9497H14.9626H14.9755H14.9884H15.0013H15.0142H15.0272H15.0401H15.053H15.0659H15.0788H15.0918H15.1047H15.1176H15.1306H15.1435H15.1564H15.1694H15.1823H15.1953H15.2082H15.2211H15.2341H15.247H15.26H15.2729H15.2859H15.2988H15.3118H15.3247H15.3377H15.3507H15.3636H15.3766H15.3895H15.4025H15.4154H15.4284H15.4414H15.4543H15.4673H15.4803H15.4932H15.5062H15.5191H15.5321H15.5451H15.558H15.571H15.584H15.5969H15.6099H15.6228H15.6358H15.6488H15.6617H15.6747H15.6877H15.7006H15.7136H15.7265H15.7395H15.7525H15.7654H15.7784H15.7913H15.8043H15.8172H15.8302H15.8431H15.8561H15.869H15.882H15.8949H15.9079H15.9208H15.9338H15.9467H15.9596H15.9726H15.9855H15.9984H16.0114H16.0243H16.0372H16.0502H16.0631H16.076H16.0889H16.1018H16.1148H16.1277H16.1406H16.1535H16.1664H16.1793H16.1922H16.2051H16.218H16.2309H16.2438H16.2567H16.2695H16.2824H16.2953H16.3082H16.321H16.3339H16.3468H16.3596H16.3725H16.3853H16.3982H16.411H16.4239H16.4367H16.4496H16.4624H16.4752H16.488H16.5009H16.5137H16.5265H16.5393H16.5521H16.5649H16.5777H16.5905H16.6033H16.6161H16.6288H16.6416H16.6544H16.6672H16.6799H16.6927H16.7054H16.7182H16.7309H16.7436H16.7564H16.7691H16.7818H16.7945H16.8072H16.8199H16.8326H16.8453H16.858H16.8707H16.8834H16.8961H16.9087H16.9214H16.934H16.9467H16.9593H16.972H16.9846H16.9972H17.0098H17.0224H17.0351H17.0477H17.0602H17.0728H17.0854H17.098H17.1106H17.1231H17.1357H17.1482H17.1608H17.1733H17.1858H17.1983H17.2108H17.2234H17.2358H17.2483H17.2608H17.2733H17.2858H17.2982H17.3107H17.3231H17.3356H17.348H17.3604H17.3728H17.3853H17.3977H17.41H17.4224H17.4348H17.4472H17.4595H17.4719H17.4842H17.4966H17.5089H17.5212H17.5335H17.5458H17.5581H17.5704H17.5827H17.595H17.6072H17.6195H17.6317H17.6439H17.6562H17.6684H17.6806H17.6928H17.705H17.7171H17.7293H17.7415H17.7536H17.7658H17.7779H17.79H17.8021H17.8142H17.8263H17.8384H17.8505H17.8625H17.8746H17.8866H17.8987H17.9107H17.9227H17.9347H17.9467H17.9587H17.9706H17.9826H17.9945H18.0065H18.0184H18.0303H18.0422H18.0541H18.066H18.0779H18.0898H18.1016H18.1135H18.1253H18.1371H18.1489H18.1607H18.1725H18.1843H18.196H18.2078H18.2195H18.2312H18.243H18.2547H18.2664H18.278H18.2897H18.3014H18.313H18.3246H18.3363H18.3479H18.3595H18.371H18.3826H18.3942H18.4057H18.4173H18.4288H18.4403H18.4518H18.4633H18.4747H18.4862H18.4976H18.5091H18.5205H18.5319H18.5433H18.5547H18.566H18.5774H18.5887H18.6H18.6114H18.6227H18.6339H18.6452H18.6565H18.6677H18.679H18.6902H18.7014H18.7126H18.7237H18.7349H18.746H18.7572H18.7683H18.7794H18.7905H18.8016H18.8126H18.8237H18.8347H18.8457H18.8567H18.8677H18.8787H18.8897H18.9006H18.9115H18.9224H18.9333H18.9442H18.9551H18.9659H18.9768H18.9876H18.9984H19.0092H19.02H19.0308H19.0415H19.0522H19.0629H19.0736H19.0843H19.095H19.1056H19.1163H19.1269H19.1375H19.1481H19.1587H19.1692H19.1798H19.1903H19.2008H19.2113H19.2217H19.2322H19.2426H19.2531H19.2635H19.2739H19.2842H19.2946H19.3049H19.3152H19.3255H19.3358H19.3461H19.3564H19.3666H19.3768H19.387H19.3972H19.4074H19.4175H19.4276H19.4378H19.4478H19.4579H19.468H19.478H19.4881H19.4981H19.508H19.518H19.528H19.5379H19.5478H19.5577H19.5676H19.5775H19.5873H19.5971H19.6069H19.6167H19.6265H19.6362H19.646H19.6557H19.6654H19.675H19.6847H19.6943H19.7039H19.7135H19.7231H19.7327H19.7422H19.7517H19.7612H19.7707H19.7802H19.7896H19.799H19.8084H19.8178H19.8272H19.8365H19.8458H19.8551H19.8644H19.8737H19.8829H19.8921H19.9013H19.9105H19.9197H19.9288H19.9379H19.947H19.9561H19.9652H19.9742H19.9832H19.9922H20.0012H20.0101H20.0191H20.028H20.0369H20.0457H20.0546H20.0634H20.0722H20.081H20.0898H20.0985H20.1072H20.1159H20.1246H20.1332H20.1419H20.1505H20.1591H20.1676H20.1762H20.1847H20.1932H20.2017H20.2101H20.2186H20.227H20.2354H20.2437H20.2521H20.2604H20.2687H20.277H20.2852H20.2934H20.3017H20.3098H20.318H20.3261H20.3343H20.3423H20.3504H20.3585H20.3665H20.3745H20.3825H20.3904H20.3983H20.4062C21.5835 22 22.4987 20.9927 22.4041 19.8291C22.2951 18.4873 22.1193 16.124 22.0405 13.9635L20.0419 14.0365ZM8.51011 10C9.06239 10 9.51011 9.55228 9.51011 9C9.51011 8.44772 9.06239 8 8.51011 8H8.5001C7.94782 8 7.5001 8.44772 7.5001 9C7.5001 9.55228 7.94782 10 8.5001 10H8.51011ZM17.5101 9C17.5101 9.55228 17.0624 10 16.5101 10H16.5001C15.9478 10 15.5001 9.55228 15.5001 9C15.5001 8.44772 15.9478 8 16.5001 8H16.5101C17.0624 8 17.5101 8.44772 17.5101 9ZM9.05579 13.1686C8.59675 12.8618 7.97587 12.9851 7.66889 13.444C7.36184 13.9031 7.48507 14.5242 7.94414 14.8312L8.5001 14C7.94414 14.8312 7.94429 14.8313 7.94446 14.8314L7.94483 14.8317L7.94573 14.8323L7.94815 14.8339L7.95545 14.8387L7.97965 14.8546C7.99996 14.8678 8.02857 14.8863 8.0648 14.9092C8.1372 14.9551 8.24034 15.019 8.3688 15.095C8.62488 15.2465 8.98595 15.4485 9.40794 15.6513C10.217 16.0401 11.3865 16.5 12.5001 16.5C13.6137 16.5 14.7832 16.0401 15.5923 15.6513C16.0142 15.4485 16.3753 15.2465 16.6314 15.095C16.7599 15.019 16.863 14.9551 16.9354 14.9092C16.9716 14.8863 17.0002 14.8678 17.0205 14.8546L17.0447 14.8387L17.052 14.8339L17.0545 14.8323L17.0554 14.8317L17.0557 14.8314C17.0559 14.8313 17.0561 14.8312 16.5001 14L17.0561 14.8312C17.5151 14.5242 17.6384 13.9031 17.3313 13.444C17.0243 12.9851 16.4034 12.8618 15.9444 13.1686L15.9441 13.1688L15.9425 13.1699L15.9284 13.1791C15.915 13.1878 15.8937 13.2016 15.8652 13.2197C15.8081 13.2558 15.7223 13.3091 15.6131 13.3737C15.3937 13.5035 15.0843 13.6765 14.726 13.8487C13.9744 14.2099 13.1439 14.5 12.5001 14.5C11.8563 14.5 11.0258 14.2099 10.2742 13.8487C9.91589 13.6765 9.60647 13.5035 9.38713 13.3737C9.27789 13.3091 9.19209 13.2558 9.13498 13.2197C9.10646 13.2016 9.08517 13.1878 9.07177 13.1791L9.05772 13.1699L9.05605 13.1688L9.05579 13.1686ZM9.05579 13.1686C9.05587 13.1687 9.05596 13.1687 9.05605 13.1688L8.5001 14C9.05605 13.1688 9.05592 13.1687 9.05579 13.1686Z" />
            </svg>
            <span className={'text-buttons-menu'}>Connect wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};
