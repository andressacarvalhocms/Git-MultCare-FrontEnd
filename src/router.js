import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Medicamentos from './views/Medicamentos.vue';
import Alergias from './views/Alergias.vue';
import Exames from './views/Exames.vue';
import CadastroExames from './views/CadastroExames.vue';
import Historico from './views/Historico.vue';
import Auth from './views/Auth.vue';
import Register from './views/Register.vue';
import Monitoramento from './views/Monitoramento.vue';
import MonitoramentoDiabetes from './views/MonitoramentoDiabetes.vue';
import Classificacao from './views/Classificacao.vue';

import QuestionarioCovid from './views/QuestionarioCovid.vue';
import auth from './middlewares/auth';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/medicamentos',
      name: 'medicamentos',
      component: Medicamentos,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/exames',
      name: 'exames',
      component: Exames,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/cadastroExames',
      name: 'cadastroExames',
      component: CadastroExames,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/alergias',
      name: 'alergias',
      component: Alergias,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/historico',
      name: 'historico',
      component: Historico,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Auth
    },
    {
      path: '/logout',
      name: 'logout',
      component: Auth,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/monitoramento',
      name: 'monitoramento',
      component: Monitoramento
    },
    {
      path: '/monitoramentoDiabetes',
      name: 'monitoramentoDiabetes',
      component: MonitoramentoDiabetes
    },
    {
      path: '/classificacao',
      name: 'classificacao',
      component: Classificacao
    },
    {
      path: '/questionarioCovid',
      name: 'questionarioCovid',
      component: QuestionarioCovid
    }
  ]
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
