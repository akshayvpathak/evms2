<?php

namespace Drupal\evms_login\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Link;
use Drupal\Core\Session\AccountProxyInterface;

/**
 * Provides a evms login block.
 *
 * @Block(
 *   id = "evms_login",
 *   admin_label = @Translation("EVMS LOGIN"),
 *   category = @Translation("Custom"),
 * )
 */
class EvmsLoginBlock extends BlockBase {
  protected $currentUser;

  public function build() {
    $signin_link = '';
    $logout_link = '';
    $login_link = '';
    $title = '';
    $order_link = '';
    $address_link = '';
    $options = ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item']];
    $logged_in = \Drupal::currentUser()->isAuthenticated();
    if($logged_in){
      $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
      $currentUserId =$user->get('uid')->value;
      $title = 'My Account';
      $logout_link = Link::createFromRoute('Logout', 'user.logout', [], ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item icofont icofont-logout']]);
      $order_link = Link::createFromRoute('My Orders', 'view.commerce_user_orders.order_page', ['user' => $currentUserId], ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item icofont icofont-user']]);
      $address_link = Link::createFromRoute('My Addresses', 'commerce_order.address_book.overview', ['user' => $currentUserId], ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item icofont icofont-address-book']]);

    }
    else{
      $title = 'Login/Signup';
      $login_link = Link::createFromRoute('Login', 'user.login', [],  ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item icofont icofont-login']]);
      $signin_link = Link::createFromRoute('Register', 'user.register', [],  ['absolute' => TRUE, 'attributes' => ['class' => 'dropdown-item icofont icofont-sign-in']]);
    }
    return [
      '#theme' => 'evms_login_block',
      '#title' => $title,
      '#login_link' => $login_link,
      '#signin_link' => $signin_link,
      '#logout_link' => $logout_link,
      '#order_link' => $order_link,
      '#address_link' => $address_link
    ];
  }
}
