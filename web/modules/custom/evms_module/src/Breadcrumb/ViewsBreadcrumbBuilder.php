<?php

namespace Drupal\evms_module\Breadcrumb;

use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Routing\LinkGeneratorTrait;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\Link;

class ViewsBreadcrumbBuilder implements BreadcrumbBuilderInterface {
  use LinkGeneratorTrait;
  use StringTranslationTrait;

  /**
   * @inheritdoc
   */
  public function applies(RouteMatchInterface $route_match) {
    // This breadcrumb apply only for some views.
    $parameters = $route_match->getParameters()->all();

    if (isset($parameters['view_id'])) {

       $views_id = array(
         'categories',
         'VIEW_MACHINE_NAME_2',
       );

       if (in_array($parameters['view_id'], $views_id)) {
         return TRUE;
       }
       return FALSE;
    }
  }

  /**
   * @inheritdoc
   */
  public function build(RouteMatchInterface $route_match) {
    // Breadcrumbs set up (cache settings are so important!).
	$parameters = $route_match->getParameters()->all();
    $breadcrumb = new \Drupal\Core\Breadcrumb\Breadcrumb();
    $breadcrumb->addCacheContexts(["url"]);
    $breadcrumb->addCacheTags(["view_id:{$parameters['view_id']}"]);
    $breadcrumb->addLink(Link::createFromRoute($this->t('Home'), '<front>'));
    if (isset($parameters['view_id'])) {
      if ($parameters['view_id'] == 'categories') {
         $breadcrumb->addLink(Link::createFromRoute(t('Categories'), 'view.categories.page_1'));
      }
      else if ($parameters['view_id'] == 'VIEW_MACHINE_NAME_2') {
        $breadcrumb->addLink(Link::createFromRoute(t('VIEWS NAME 2'), '<none>'));
      } 
    }

    // Reverse order for this to work!!!.
    
    return $breadcrumb;
  }
}