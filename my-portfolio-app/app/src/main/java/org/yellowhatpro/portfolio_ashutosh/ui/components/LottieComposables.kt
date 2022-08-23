package org.yellowhatpro.portfolio_ashutosh.ui.components

import androidx.compose.runtime.*
import com.airbnb.lottie.compose.LottieCompositionSpec
import com.airbnb.lottie.compose.LottieConstants
import com.airbnb.lottie.compose.animateLottieCompositionAsState
import com.airbnb.lottie.compose.rememberLottieComposition
import org.yellowhatpro.portfolio_ashutosh.R

@Composable
fun HiLottie() {
    var isLottiePlaying by remember {
        mutableStateOf(true)
    }
    var animationSpeed by remember {
        mutableStateOf(1F)
    }
    val animationSpec by rememberLottieComposition(spec =
    LottieCompositionSpec.RawRes(R.raw.hi_lottie_anim)
    )

    val lottieAnimation by animateLottieCompositionAsState(
        composition = animationSpec,
        iterations = LottieConstants.IterateForever,
        isPlaying = isLottiePlaying,
        speed = animationSpeed,
        restartOnPlay = false
    )
}