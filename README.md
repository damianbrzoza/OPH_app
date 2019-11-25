![alt text](https://github.com/mipo57/Cardless/blob/master/static/images/logo.png?raw=true)

# The solution for *YOUR FAT WALLET*

## Overview
The main idea of the Cardless was to have one card for everything. We provide an application which aggregate all loyalty cards which we use during shopping. By the PolishAPI we are able to read transactions from the account of the user and apply coupons for them if applicable. Our application is dedicated to two groups: shops and individual clients.

## Benefits for individual clients
With Cardless app (available on smartphones and computers) individual client is able to get rid of all locality cards. Our system reads out transactions of individuals (via PolishApi) so he can use his creadit card as if was a loyality one. User is able to look at the coupons from all subscribed shops, gyms, restaurants etc. He can use them just via card payment.

## Benefits for stores
Cardless is also a hub for market analysis. By aggregating all loyalty programs we perform multilateral targeting of clients - from general scope, to profiling a single individuals. Shops get to know how its clientele looks like and can be notified when i.e. clients starts buying more from competition (of course clients and competitors are anonymised). Then they can offer a special coupons via Cardless which can hold loyalty of clients and - of course - income. 

Second feature is carrying out personalised marketing campaigns. With knowledge of detailed „basked” (by connecting transaction number with their internal shopping system), global trends and personal behaviour of clients (via Cardless) stores can „feed” clients with personal marketing and finally increase of income.

## Description of application
Via polish api we are polling user's bank account for search of new transactions. Then we can detect if new transaction was made to our partner and apply coupon if applicable. Coupon can be realized by either a cashback or making small (1PLN) transaction to enable coupon for next (real) transaction. 

On hackhathon we implemented client side of the service. It enables user to link his bank account (PolishApi authotization), so we can start polling account for transactions. Then he can view applicable coupons. We are also proposing new coupon subscription if we detect that he made first payment in shop that is our partner.
