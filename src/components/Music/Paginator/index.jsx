import { useI18n } from 'vue-i18n';
import { pagination } from '@/store/music';
import getPages from '@/utils/pages';
import Button from './Button';

export default function Paginator() {
  const { query, current, previous, next, pages } = pagination();
  const { t } = useI18n();

  return (
    <div class="card-deck">
      <nav class="m-2" aria-label="Page navigation example">
        <ul class="pagination mb-0">
          <Button page={previous} query={query.q} current={current} disabled={!previous} title={t('paginator.prev')}>
            <span aria-hidden="true">&laquo;</span>
          </Button>

          {getPages({current, pages}).map(n => (
            <Button page={n} query={query.q} current={current} />
          ))}

          <Button page={next} query={query.q} current={current} disabled={!next} title={t('paginator.next')}>
            <span aria-hidden="true">&raquo;</span>
          </Button>
        </ul>
      </nav>
    </div>
  );
}
