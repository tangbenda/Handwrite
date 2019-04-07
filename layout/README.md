### 圣杯布局和双飞翼布局
---------------------------------
圣杯布局：
 * 外层用container采用相对定位包裹main, left, right,三部分分别左浮动
 * main部分宽度100%，使用padding为两侧空出间距
 * 左右两栏采用margin负边距 + 定位（left，right）的方式与main同行，左侧部分margin-left: -100%; 右侧margin-left: -(本身宽度)
 
双飞翼布局（淘宝ued，圣杯改进版，对最小宽度要求低）
 * 不需要相对定位，container只包裹main，与left, right并列，且都左浮动
 * main宽度100%，使用margin为两侧空出间距
 * 左右两栏采用margin负边距与main同行。
 
 
 其他三栏布局方式还有 1.浮动+margin，2.绝对定位 + margin  3.flex ...