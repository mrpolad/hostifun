"use client";

import React from 'react';
import Link from 'next/link';

const ServiceLevelAgreementPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Servis Seviyesi <span className="text-green-400">Anlaşması</span>
          </h1>
          <p className="text-lg text-gray-300">
            Son güncelleme: 1 Eylül 2023
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Bu Servis Seviyesi Anlaşması (SLA), hostifun.com tarafından sağlanan hizmetlerin kullanılabilirliği, performansı ve destek hizmetleri için minimum standartları belirler. Bu anlaşma, tüm hostifun.com müşterileri için geçerlidir ve Hizmet Kullanım Koşullarımızın bir parçasını oluşturur.
          </p>

          <h2>1. Hizmet Kullanılabilirliği</h2>
          <p>
            hostifun.com, aylık %99.9 ağ ve altyapı kullanılabilirliği sağlamayı taahhüt eder. Bu, hizmetlerimizin bir ay içinde en fazla 43 dakika 49 saniye kesintiye uğrayabileceği anlamına gelir.
          </p>
          <p>
            Kullanılabilirlik, aşağıdaki formüle göre hesaplanır:
          </p>
          <div className="bg-gray-800 p-4 rounded-md my-4">
            <code className="text-sm">
              Kullanılabilirlik = (Toplam Dakika - Kesinti Dakikaları) / Toplam Dakika * 100
            </code>
          </div>
          <p>
            "Kesinti", hizmetlerimizin tamamen erişilemez olduğu ve bunun hostifun.com'un kontrolü dahilindeki nedenlerden kaynaklandığı durumlardır. Aşağıdaki durumlar kesinti olarak sayılmaz:
          </p>
          <ul>
            <li>Önceden planlanmış ve duyurulmuş bakım çalışmaları;</li>
            <li>Müşteri tarafından yapılan eylemler veya yapılandırma hataları;</li>
            <li>Force majeure olayları (doğal afetler, savaş, terörizm, isyanlar, hükümet eylemi, yangın, sel, sabotaj, vb.);</li>
            <li>Üçüncü taraf yazılım veya hizmetlerden kaynaklanan sorunlar;</li>
            <li>DDoS saldırıları veya diğer kötü niyetli faaliyetler;</li>
            <li>İnternet bağlantısı sorunları (hostifun.com ağı dışında).</li>
          </ul>

          <h2>2. Kredi Politikası</h2>
          <p>
            Aylık kullanılabilirlik garantimizi karşılayamadığımız durumlarda, aşağıdaki tabloya göre hesaplanan kredi iadesi almaya hak kazanırsınız:
          </p>
          
          <div className="my-6 overflow-hidden bg-gray-800 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Aylık Kullanılabilirlik</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Servis Kredisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-6 py-4 text-gray-300">%99.0 - %99.9</td>
                  <td className="px-6 py-4 text-gray-300">Aylık ücretin %10'u</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">%95.0 - %98.9</td>
                  <td className="px-6 py-4 text-gray-300">Aylık ücretin %25'i</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">%90.0 - %94.9</td>
                  <td className="px-6 py-4 text-gray-300">Aylık ücretin %50'si</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">%90.0'dan az</td>
                  <td className="px-6 py-4 text-gray-300">Aylık ücretin %100'ü</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Kredi iadesi almak için, kesinti tarihinden itibaren 30 gün içinde support@hostifun.com adresine bir e-posta göndermeniz gerekmektedir. E-postanızda aşağıdaki bilgileri belirtmelisiniz:
          </p>
          <ul>
            <li>Hesap adınız ve müşteri kimliğiniz;</li>
            <li>Kesintinin tarihi ve süresi;</li>
            <li>Etkilenen hizmetlerin açıklaması.</li>
          </ul>
          <p>
            Kredi iadesi, bir sonraki fatura döneminde uygulanacaktır. Kredi iadeleri nakit olarak verilmez ve hiçbir koşulda bir aylık hizmet ücretini aşamaz.
          </p>

          <h2>3. Teknik Destek</h2>
          <p>
            hostifun.com, aşağıdaki destek seviyelerini sunar:
          </p>
          
          <div className="my-6 overflow-hidden bg-gray-800 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Öncelik Düzeyi</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Tanım</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">İlk Yanıt Süresi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-6 py-4 text-gray-300">Kritik (P1)</td>
                  <td className="px-6 py-4 text-gray-300">Servis tamamen kullanılamaz durumda</td>
                  <td className="px-6 py-4 text-gray-300">1 saat</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Yüksek (P2)</td>
                  <td className="px-6 py-4 text-gray-300">Servis ciddi şekilde etkilenmiş ancak kısmen kullanılabilir</td>
                  <td className="px-6 py-4 text-gray-300">4 saat</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Normal (P3)</td>
                  <td className="px-6 py-4 text-gray-300">Servis etkilenmiş ancak çoğunlukla kullanılabilir</td>
                  <td className="px-6 py-4 text-gray-300">12 saat</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Düşük (P4)</td>
                  <td className="px-6 py-4 text-gray-300">Genel sorular, özellik istekleri</td>
                  <td className="px-6 py-4 text-gray-300">24 saat</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Teknik destek, aşağıdaki kanallar aracılığıyla sunulmaktadır:
          </p>
          <ul>
            <li><strong>E-posta:</strong> support@hostifun.com (7/24)</li>
            <li><strong>Canlı Sohbet:</strong> Web sitemiz üzerinden (09:00 - 24:00 TSİ)</li>
            <li><strong>Destek Portalı:</strong> https://support.hostifun.com (7/24 bilet gönderimi)</li>
          </ul>

          <h2>4. Planlı Bakım</h2>
          <p>
            Sistemlerimizin güvenliğini ve performansını sürdürmek için düzenli bakım çalışmaları yapabiliriz. Planlı bakım çalışmaları için aşağıdaki koşullar geçerlidir:
          </p>
          <ul>
            <li>Rutin bakım çalışmaları genellikle trafik yoğunluğunun düşük olduğu saatlerde (gece yarısı - sabah erken saatler) planlanır;</li>
            <li>Tüm planlı bakım çalışmaları en az 48 saat öncesinden e-posta ve kontrol paneli üzerinden duyurulacaktır;</li>
            <li>Acil güvenlik yamaları gerektiren durumlar hariç, planlı bakım çalışmaları aylık toplam 8 saati aşmayacaktır;</li>
            <li>Planlı bakım süreleri, hizmet kullanılabilirliği hesaplamasına dahil edilmez.</li>
          </ul>

          <h2>5. Ağ Performansı</h2>
          <p>
            hostifun.com, aşağıdaki ağ performans hedeflerini karşılamayı taahhüt eder:
          </p>
          <ul>
            <li>Ağ gecikmesi: Ana omurga üzerinde ortalama &lt;50ms;</li>
            <li>Paket kaybı: Ana omurga üzerinde ortalama &lt;0.1%;</li>
            <li>Bant genişliği kullanılabilirliği: Abonelik planınızda belirtilen limitlere kadar her zaman mevcut.</li>
          </ul>

          <h2>6. Veri Yedekleme</h2>
          <p>
            hostifun.com, aşağıdaki yedekleme politikasını uygular:
          </p>
          <ul>
            <li>Günlük yedeklemeler: Son 7 gün</li>
            <li>Haftalık yedeklemeler: Son 4 hafta</li>
            <li>Aylık yedeklemeler: Son 3 ay (Premium ve kurumsal planlar için)</li>
          </ul>
          <p>
            Yedekleme ve geri yükleme işlemleri ile ilgili aşağıdaki koşullar geçerlidir:
          </p>
          <ul>
            <li>Tüm planlar için temel yedekleme hizmeti ücretsizdir;</li>
            <li>Müşteri hatası nedeniyle veri kaybı durumlarında geri yükleme ücretsiz olarak sunulur (aylık 1 kez);</li>
            <li>Ek geri yükleme talepleri veya özel geri yükleme istekleri için ücret alınabilir;</li>
            <li>Yedeklemeler, ana sunuculardan farklı fiziksel lokasyonlarda saklanır.</li>
          </ul>

          <h2>7. Güvenlik</h2>
          <p>
            hostifun.com, aşağıdaki güvenlik önlemlerini taahhüt eder:
          </p>
          <ul>
            <li>7/24 altyapı ve ağ izleme;</li>
            <li>Düzenli güvenlik yamaları ve güncellemeleri;</li>
            <li>Gelişmiş DDoS koruma (tüm planlar için);</li>
            <li>Düzenli güvenlik denetimleri ve penetrasyon testleri;</li>
            <li>Sunucu ve veri merkezi fiziksel güvenliği;</li>
            <li>Şifreleme ve güvenli veri depolama.</li>
          </ul>

          <h2>8. SLA Değişiklikleri</h2>
          <p>
            hostifun.com, bu SLA'yı istediği zaman değiştirme hakkını saklı tutar. Değişiklikler, web sitemizde yayınlandıktan 30 gün sonra yürürlüğe girecektir. Önemli değişiklikler olması durumunda, müşterilerimize e-posta yoluyla bildirim yapılacaktır.
          </p>

          <h2>9. İletişim</h2>
          <p>
            Bu SLA ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen support@hostifun.com adresinden bizimle iletişime geçin.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ayrıca diğer önemli politikalarımızı da inceleyebilirsiniz:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link 
              href="/terms-of-service"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
              Hizmet Kullanım Koşulları
            </Link>
            <Link 
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLevelAgreementPage; 