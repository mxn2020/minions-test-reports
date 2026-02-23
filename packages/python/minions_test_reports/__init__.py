"""
Minions Test-reports Python SDK

Aggregated results, regression diffs, quality trends, and coverage maps
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Test-reports.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
