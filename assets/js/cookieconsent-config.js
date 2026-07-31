/* Cookie consent, using orestbida/cookieconsent v3.
 *
 * Same library and approach as bazam.ai. Scripts in the `analytics` category
 * are written as <script type="text/plain" data-category="analytics"> and only
 * execute once consent is given; see layouts/_partials/google_analytics.html.
 *
 * Nothing loads before consent except the banner itself. If you add another
 * third-party tag, give it the same type/data-category treatment or it will
 * fire regardless of what the visitor chose.
 */
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: 'bar',
      position: 'bottom',
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: false,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      autoClear: {
        cookies: [{ name: /^_ga/ }, { name: '_gid' }],
      },
    },
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'We use essential cookies to make this site work, and analytics cookies to understand how visitors use it. Analytics only run if you agree. You can change your mind at any time from the link in the footer.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="/legals/privacy-policy/">Privacy Policy</a>\n<a href="/legals/cookie-policy/">Cookie Policy</a>',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Your privacy',
              description:
                'This site stores a small amount of information in your browser. Essential cookies keep the site working and cannot be turned off. Analytics cookies are optional, and nothing is loaded until you choose. Rejecting analytics does not limit anything on the site.',
            },
            {
              title: 'Strictly necessary <span class="pm__badge">Always enabled</span>',
              description:
                'Required for the site to function, including remembering this cookie choice. They store no personally identifying information and cannot be switched off.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics',
              description:
                'Let us count visits and see which pages are useful, so we can improve the site. The data is aggregated. If you reject these, no analytics script is loaded at all.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For anything else, see our <a class="cc__link" href="/legals/cookie-policy/">Cookie Policy</a> and <a class="cc__link" href="/legals/privacy-policy/">Privacy Policy</a>, or <a class="cc__link" href="/contact/">get in touch</a>.',
            },
          ],
        },
      },
    },
  },
});
